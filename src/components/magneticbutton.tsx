import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { MdOutlineArrowUpward } from "react-icons/md";

const Index: React.FC = () => {
  return (
    <div className="grid min-h-[200px] place-content-center bg-violet-200 p-2">
      <MagnetButton />
    </div>
  );
};

const MagnetButton: React.FC = () => {
  const ref = useRef<HTMLButtonElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, {
    mass: 3,
    stiffness: 400,
    damping: 50,
  });
  const ySpring = useSpring(y, {
    mass: 3,
    stiffness: 400,
    damping: 50,
  });

  const transform = useMotionTemplate`translateX(${xSpring}px) translateY(${ySpring}px)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;

    const { height, width, left, top } = ref.current.getBoundingClientRect();

    x.set(e.clientX - (left + width / 2));
    y.set(e.clientY - (top + height / 2));
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="z-96 group relative grid h-[110px] w-[110px] place-content-center rounded-full border-2 border-gray-100 transition-colors duration-700 bg-white ease-out mix-blend-mode:multiply"
    >
      <MdOutlineArrowUpward className="pointer-events-none relative z-10 rotate-45 text-3xl text-gray-400 transition-all duration-700 ease-out group-hover:rotate-90" />
      <div className="pointer-events-none absolute inset-0 z-0 scale-0 rounded-full transition-transform duration-700 ease-out group-hover:scale-100" />
      <motion.svg
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          x: "-50%",
          y: "-50%",
        }}
        width="100"
        height="100"
        className="pointer-events-none absolute z-10"
      >
        <path
          id="circlePath"
          d="M50,50 m-50,0 a50,50 0 1,0 100,0 a50,50 0 1,0 -100,0"
          fill="none"
        />
        <text>
          <textPath
            xlinkHref="#circlePath"
            fill="black"
            className="fill-gray-700 text-sm font-light uppercase transition-opacity duration-700 ease-out"
          >
            Get in touch with us today to own property
          </textPath>
        </text>
      </motion.svg>
    </motion.button>
  );
};

export default Index;
