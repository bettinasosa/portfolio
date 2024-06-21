import { motion } from 'framer-motion';
import { perspective } from '@/components/nav/anim';
import Magnetic from '@/components/animations/magnetic';
import Link from 'next/link';

type NavLinksProps = {
  links: { title: string; href?: string }[];
  setIsActive: (isActive: boolean) => void;
};

export default function NavLinks({ links, setIsActive }: NavLinksProps) {
  return (
    <div className="flex flex-col gap-2.5">
      {links.map((link, i) => {
        const { title, href } = link;
        return (
          <div key={`b_${i}`} className="perspective-[120px] origin-bottom">
            <motion.div
              custom={i}
              variants={perspective}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              <Magnetic>
                <Link
                  href={href!}
                  onClick={() => setIsActive(false)}
                  className="text-[46px] italic text-background no-underline"
                >
                  {title}
                </Link>
              </Magnetic>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
