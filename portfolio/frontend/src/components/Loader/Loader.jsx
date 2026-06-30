import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.38, ease: "easeInOut" } }}
      aria-label="A carregar portefolio"
      role="status"
    >
      <motion.div
        className="loader__mark"
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        A
      </motion.div>
      <motion.div className="loader__bar" aria-hidden="true">
        <motion.span
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.82, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.div>
    </motion.div>
  );
}
