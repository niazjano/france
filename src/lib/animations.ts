export const easeOut = [0.22, 1, 0.36, 1] as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const imageReveal = {
  hidden: { opacity: 0, scale: 1.04 },
  visible: { opacity: 1, scale: 1 },
};

export const defaultTransition = {
  duration: 0.7,
  ease: easeOut,
};

export const fastTransition = {
  duration: 0.5,
  ease: easeOut,
};
