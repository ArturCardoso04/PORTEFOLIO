import { motion } from "framer-motion";
import { scaleIn } from "../../utils/animationVariants.js";

export default function GlassCard({ as = "article", className = "", children, ...props }) {
  const Component = motion[as] || motion.article;

  return (
    <Component
      className={`glass-card ${className}`.trim()}
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.22 }}
      {...props}
    >
      {children}
    </Component>
  );
}
