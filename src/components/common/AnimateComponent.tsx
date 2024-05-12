import { memo, useEffect, useRef } from "react";

import { motion, useAnimation, useInView } from "framer-motion";

type TDirectionAnimation = "left" | "right" | "up" | "down";

interface IAnimation {
  className?: string;
  children: JSX.Element;
  direction: TDirectionAnimation;
}

const obj: {
  [key in TDirectionAnimation]: {
    x?: number;
    y?: number;
    initailX?: number;
    initialY?: number;
  };
} = {
  left: { x: -50, y: undefined, initailX: 1, initialY: undefined },
  right: { x: 50, y: undefined, initailX: 1, initialY: undefined },
  up: { y: -50, x: undefined, initailX: undefined, initialY: 1 },
  down: { y: 50, x: undefined, initailX: undefined, initialY: 1 },
};

export const AnimationSlideIn = memo<IAnimation>(
  ({ children, className, direction }) => {
    const ref = useRef(null);
    const controls = useAnimation();
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
      if (isInView) {
        controls.start({
          x: obj[direction].initailX,
          y: obj[direction].initialY,
          opacity: 1,
          transition: { duration: 0.8 },
        });
      }
    }, [isInView, controls, direction]);

    return (
      <motion.div
        ref={ref}
        animate={controls}
        className={className}
        style={{ width: "100%" }}
        initial={{ x: obj[direction].x, y: obj[direction].y, opacity: 0 }}
      >
        {children}
      </motion.div>
    );
  }
);

export const AnimationFadeIn = memo<Omit<IAnimation, "direction">>(
  ({ children, className }) => {
    return (
      <motion.div
        className={className}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {children}
      </motion.div>
    );
  }
);
