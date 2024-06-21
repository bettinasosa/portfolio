import { motion } from 'framer-motion';

type ButtonProps = {
  isActive: boolean;
  toggleMenu: () => void;
};

export default function MenuButton({ isActive, toggleMenu }: ButtonProps) {
  return (
    <div className="absolute right-0 top-0 z-20 h-[40px] w-[100px] cursor-pointer overflow-hidden rounded-[25px]">
      <motion.div
        className="relative h-full w-full"
        animate={{ top: isActive ? '-100%' : '0%' }}
        transition={{ duration: 0.5, type: 'tween', ease: [0.76, 0, 0.24, 1] }}
      >
        <div
          className="hover:transform-perspective hover:rotate-x-90 h-full w-full bg-secondary text-background"
          onClick={toggleMenu}
        >
          <PerspectiveText label="Menu" />
        </div>
        <div
          className="hover:transform-perspective hover:rotate-x-90 h-full w-full bg-[#FFF7E5] text-secondary"
          onClick={toggleMenu}
        >
          <PerspectiveText label="Close" />
        </div>
      </motion.div>
    </div>
  );
}

function PerspectiveText({ label }: { label: string }) {
  return (
    <div className="transform-style-3d hover:transform-rotateX-90 hover:p:nth-of-type(1):transform-translateY-full hover:p:nth-of-type(1):opacity-0 hover:p:nth-of-type(2):opacity-100 duration-[0.75s] ease-[cubic-bezier(0.76,0,0.24,1)] flex h-full w-full flex-col items-center justify-center transition">
      <p className="duration-[0.75s] ease-[cubic-bezier(0.76,0,0.24,1)] pointer-events-none m-0 uppercase transition">
        {label}
      </p>
      <p className="transform-origin-bottom-center transform-rotateX--90 duration-[0.75s] ease-[cubic-bezier(0.76,0,0.24,1)] pointer-events-none absolute m-0 translate-y-[9px] uppercase opacity-0 transition">
        {label}
      </p>
    </div>
  );
}
