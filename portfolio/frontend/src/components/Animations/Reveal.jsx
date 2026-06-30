import { motion, useReducedMotion } from "framer-motion";
import { fadeUp } from "../../utils/animationVariants.js";

export default function Reveal({ as = "div", className = "", delay = 0, children, ...props }) {
  const Component = motion[as] || motion.div;
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <Component className={className} {...props}>
        {children}
      </Component>
    );
  }

  return (
    <Component
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -8% 0px" }}
      transition={{ delay }}
      {...props}
    >
      {children}
    </Component>
  );
}
