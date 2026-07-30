"use client";

import { motion } from "framer-motion";

export default function PageReveal({ children }: { children: React.ReactNode }) {
  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-1/2 h-screen bg-deep-brown z-[9998] origin-left"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="fixed top-0 right-0 w-1/2 h-screen bg-deep-brown z-[9998] origin-right"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </>
  );
}
