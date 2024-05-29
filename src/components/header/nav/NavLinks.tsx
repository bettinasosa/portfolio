import { motion } from 'framer-motion';
import { perspective } from '@/components/header/nav/anim';

type NavLinksProps = {
  links: { title: string; href?: string }[];
};

export default function NavLinks({ links }: NavLinksProps) {
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
              <a
                href={href}
                className="text-background text-[46px] no-underline"
              >
                {title}
              </a>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
