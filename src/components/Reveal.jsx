import React from "react";
import { motion } from "framer-motion";
const Reveal = ({ children, delay = 0 }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay,
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.section>
  );
};

export default Reveal;
