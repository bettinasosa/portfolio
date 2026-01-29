'use client';

import { useEffect, useMemo, useRef, useState, type WheelEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';

type MessageSide = 'incoming' | 'outgoing';

type IMessage = {
  id: number;
  text: string;
  side: MessageSide;
};

type ConversationStep = 'intro' | 'contact' | 'extra' | 'done';

const messageVariants = {
  hidden: { opacity: 0, y: 12, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 }
};

const dotVariants = {
  hidden: { opacity: 0.2, y: 0 },
  visible: (i: number) => ({
    opacity: [0.2, 1, 0.2],
    y: [0, -3, 0],
    transition: {
      delay: i * 0.2,
      duration: 1.2,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  })
};

const initialPrompt =
  'want to work together? just want to chat? send me a text here (no, for real)';

const questionsByStep: Record<
  Exclude<ConversationStep, 'intro' | 'done'>,
  string
> = {
  contact:
    "ahhh, i see 👀 what's the best way to reach you? (email, Telegram, X, etc.)",
  extra: 'thanks 🙏 anything else you wanna tell me?'
};

let messageIdCounter = 1;

function createMessage(text: string, side: MessageSide): IMessage {
  return {
    id: messageIdCounter++,
    text,
    side
  };
}

export default function IMessageWidget() {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [step, setStep] = useState<ConversationStep>('intro');
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const [formData, setFormData] = useState({
    topic: '',
    contact: '',
    extra: ''
  });

  const messagesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // kick off the conversation with the first incoming message
    setIsTyping(true);
    const timeout = setTimeout(() => {
      setMessages([createMessage(initialPrompt, 'incoming')]);
      setIsTyping(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  const handleSend = () => {
    if (!inputValue.trim() || isTyping || step === 'done') return;

    const text = inputValue.trim();

    setMessages((prev) => [...prev, createMessage(text, 'outgoing')]);
    setInputValue('');

    if (step === 'intro') {
      setFormData((prev) => ({ ...prev, topic: text }));
      askNextQuestion('contact');
      return;
    }

    if (step === 'contact') {
      setFormData((prev) => ({ ...prev, contact: text }));
      askNextQuestion('extra');
      return;
    }

    if (step === 'extra') {
      setFormData((prev) => ({ ...prev, extra: text }));
      finishConversation();
    }
  };

  const askNextQuestion = (
    nextStep: Exclude<ConversationStep, 'intro' | 'done'>
  ) => {
    setIsTyping(true);
    setStep(nextStep);

    const question = questionsByStep[nextStep];
    const timeout = setTimeout(() => {
      setMessages((prev) => [...prev, createMessage(question, 'incoming')]);
      setIsTyping(false);
    }, 650);

    return () => clearTimeout(timeout);
  };

  const finishConversation = () => {
    setIsTyping(true);
    setStep('done');

    const timeout = setTimeout(() => {
      const summaryMessage =
        "ok, got it 🙌 i'll hit you back as soon as i can 💬 talk soon ✨";

      setMessages((prev) => [
        ...prev,
        createMessage(summaryMessage, 'incoming')
      ]);
      setIsTyping(false);
    }, 800);

    // trigger an email draft with the collected data
    try {
      const subject = 'New message from your portfolio iMessage widget';
      const bodyLines = [
        `What they wrote first: ${formData.topic}`,
        '',
        `How to reach them: ${formData.contact || '—'}`,
        '',
        `Extra details:`,
        formData.extra || '—'
      ];

      const body = bodyLines.join('\n');
      const mailtoHref = `mailto:bettinasosarohl@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      if (typeof window !== 'undefined') {
        window.location.href = mailtoHref;
      }
    } catch {
      // fail silently – the conversation still "completes" in the UI
    }

    return () => clearTimeout(timeout);
  };

  const currentPlaceholder = useMemo(() => {
    if (step === 'intro') return 'Type what you want to chat about...';
    if (step === 'contact') return 'Best way to reach you';
    if (step === 'extra') return 'Anything else you want to share';
    return 'Conversation complete';
  }, [step]);

  // keep view pinned to the latest message
  useEffect(() => {
    if (!messagesRef.current) return;
    messagesRef.current.scrollTo({
      top: messagesRef.current.scrollHeight,
      behavior: 'smooth'
    });
  }, [messages, isTyping]);

  const handleWheel = (event: WheelEvent<HTMLDivElement>) => {
    if (!messagesRef.current) return;

    const container = messagesRef.current;
    const { deltaY } = event;

    // Always handle wheel scrolling inside the widget and block page scroll
    container.scrollTop += deltaY;
    event.preventDefault();
  };

  // While the widget is active and the conversation has started,
  // lock the page scroll so all scroll focus stays on the messages.
  useEffect(() => {
    if (!isActive || step === 'intro') {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isActive, step]);

  return (
    <div
      className="relative overflow-hidden rounded-3xl border border-foreground/10 bg-white/80 p-6 shadow-xl backdrop-blur sm:p-8"
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onFocusCapture={() => setIsActive(true)}
      onBlurCapture={() => setIsActive(false)}
    >
      <div className="flex h-[360px] flex-col justify-between gap-4">
        <div
          ref={messagesRef}
          onWheel={handleWheel}
          className="scrollbar-thin scrollbar-thumb-foreground/20 scrollbar-track-transparent space-y-4 overflow-y-auto scroll-smooth pr-1"
        >
          <AnimatePresence initial={false}>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={messageVariants}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className={cn(
                  'flex w-full',
                  message.side === 'incoming' ? 'justify-start' : 'justify-end'
                )}
              >
                {message.side === 'incoming' ? (
                  <div className="flex max-w-[82%] items-start gap-3">
                    <div className="mt-4 h-12 w-12 overflow-hidden rounded-full">
                      <Image
                        src="/images/profile2.jpg"
                        alt="Betts avatar"
                        width={40}
                        height={40}
                        className="w-full rounded-full object-cover"
                      />
                    </div>
                    <div className="space-y-1">
                      <span className=" block text-xs font-medium text-foreground/80 text-gray-300 sm:text-[13px]">
                        Betts
                      </span>
                      <div className="rounded-2xl rounded-tl-md bg-foreground/5 px-4 py-2 text-[16px] leading-relaxed text-foreground shadow-sm sm:text-[17px]">
                        {message.text}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex max-w-[78%] items-end justify-end">
                    <div className="rounded-2xl rounded-tr-md bg-secondary px-4 py-2 text-[16px] leading-relaxed text-white shadow-sm sm:text-[17px]">
                      {message.text}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>

          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="flex w-full justify-start"
            >
              <div className="flex items-center gap-2 rounded-2xl rounded-tl-md bg-foreground/10 px-4 py-2 shadow-sm">
                {[0, 1, 2].map((dot) => (
                  <motion.span
                    key={dot}
                    custom={dot}
                    variants={dotVariants}
                    initial="hidden"
                    animate="visible"
                    className="h-2 w-2 rounded-full bg-foreground/50"
                  />
                ))}
              </div>
            </motion.div>
          )}
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 rounded-full bg-foreground/5 px-3 py-2">
            <input
              type="text"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  event.preventDefault();
                  handleSend();
                }
              }}
              disabled={step === 'done'}
              placeholder={currentPlaceholder}
              className="text-md flex-1 border-none bg-transparent text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-0 sm:text-sm"
            />
            <button
              type="button"
              onClick={handleSend}
              disabled={step === 'done' || !inputValue.trim() || isTyping}
              className="text-md inline-flex items-center rounded-full bg-blue-500 px-3 py-1 font-medium text-white shadow-sm transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:bg-blue-300"
            >
              Send
            </button>
          </div>
          <p className="text-[11px] text-foreground/50">
            This starts a real email draft to me so we can talk.
          </p>
        </div>
      </div>
    </div>
  );
}
