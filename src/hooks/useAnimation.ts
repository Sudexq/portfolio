/**
 * Returns inline Framer Motion props for a staggered fade-up animation.
 * Using inline animate/initial/transition avoids the `Variants` type conflict
 * with custom function variants in Framer Motion v11.
 */
export function fadeUpProps(
  inView: boolean,
  index: number,
  options?: { duration?: number; stagger?: number }
) {
  const duration = options?.duration ?? 0.6;
  const stagger = options?.stagger ?? 0.08;

  return {
    initial: { opacity: 0, y: 32 },
    animate: inView
      ? { opacity: 1, y: 0 }
      : { opacity: 0, y: 32 },
    transition: {
      delay: index * stagger,
      duration,
      ease: "easeOut" as const,
    },
  };
}