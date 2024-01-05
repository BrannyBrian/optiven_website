export interface ExpandVariants {
  initial: { top: number };
  enter: (i: number) => {
    top: string;
    transition: {
      duration: number;
      delay: number;
      ease: [number, number, number, number];
    };
    transitionEnd: { height: string; top: string };
  };
  exit: (i: number) => {
    height: string;
    transition: {
      duration: number;
      delay: number;
      ease: [number, number, number, number];
    };
  };
}

export const expand: ExpandVariants = {
  initial: {
    top: 0,
  },
  enter: (i: number) => ({
    top: "100vh",
    transition: {
      duration: 0.4,
      delay: 0.05 * i,
      ease: [0.215, 0.61, 0.355, 1],
    },
    transitionEnd: { height: "0", top: "0" },
  }),
  exit: (i: number) => ({
    height: "100vh",
    transition: {
      duration: 0.4,
      delay: 0.05 * i,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};

export interface OpacityVariants {
  initial: { opacity: number };
  enter: { opacity: number };
  exit: { opacity: number };
}

export const opacity: OpacityVariants = {
  initial: {
    opacity: 0.5,
  },
  enter: {
    opacity: 0,
  },
  exit: {
    opacity: 0.5,
  },
};
