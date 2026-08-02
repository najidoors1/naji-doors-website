"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

export default function SplitText({ 
  text, 
  className = "", 
  delayOffset = 0 
}: { 
  text: string; 
  className?: string;
  delayOffset?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  
  const words = text.split(" ");
  
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delayOffset },
    },
  };
  
  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 40,
      rotateX: -45,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ display: "inline-flex", flexWrap: "wrap", perspective: 1000 }}
      ref={ref}
      className={className}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {words.map((word, index) => (
        <motion.span 
          variants={child} 
          key={index} 
          className="me-[0.3em] inline-block"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
