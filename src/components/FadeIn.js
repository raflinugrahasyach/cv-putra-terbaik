'use client';
import { motion } from 'framer-motion';

export default function FadeIn({ children, delay = 0, y = 20, duration = 0.8, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: duration, delay: delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
