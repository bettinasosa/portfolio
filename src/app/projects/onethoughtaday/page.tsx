'use client';

import Description from '@/components/animations/smoothScroll/description';
import Intro from '@/components/animations/smoothScroll/intro';
import Body from '@/components/animations/smoothScroll/body';

export default function OneThoughtADayProject() {
  const introduction = [
    'OneThoughtADay is a minimal web application',
    'focused on simplicity and mindful reflection.',
    'The design embraces a clean, warm aesthetic',
    'with a neutral cream background and elegant typography,',
    'creating a distraction-free environment',
    'for capturing daily thoughts.'
  ];

  const components =
    'The design system emphasizes minimalism with a warm color palette of cream (#FFF8E7) backgrounds and rich brown (#6B5C4E) accents. ' +
    'Typography is carefully selected with a serif font for the main title, creating an elegant journal-like feel, while using a clean sans-serif for the body text to enhance readability. ' +
    "The interface removes unnecessary elements, focusing the user's attention solely on the writing experience and the thought itself.";

  const heroText = 'OneThoughtADay: Mindfulness through minimal design';

  const description =
    'The application features thoughtful micro-interactions and subtle animations that enhance the user experience without being distracting. ' +
    'Spacing and layout follow a consistent rhythm, creating a sense of calm and order. ' +
    'The centered alignment of content creates balance, while the generous whitespace around elements allows each thought to breathe and receive the attention it deserves. ' +
    'This deliberate simplicity is not just aesthetic but functional—reducing cognitive load and encouraging users to focus on the quality of their daily reflection.';

  const body = [
    {
      title: 'OneThoughtADay Homepage',
      src: 'onethoughtaday/homepage.jpg'
    },
    {
      title: 'Thoughtful Typography',
      src: 'onethoughtaday/homepage.jpg'
    },
    {
      title: 'Minimal Interface',
      src: 'onethoughtaday/homepage.jpg'
    }
  ];

  return (
    <div className="bg-white">
      <Intro
        images={['/images/onethoughtaday/homepage.jpg']}
        title={'OneThoughtADay'}
      />
      <div className="bg-[#FFF8E7] py-10">
        <Description phrases={introduction} />
      </div>
      <div className="py-10">
        <Body body={body} text={components} description={description} />
      </div>
    </div>
  );
}
