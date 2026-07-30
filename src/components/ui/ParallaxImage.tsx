"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image, { ImageProps } from "next/image";

interface ParallaxImageProps extends ImageProps {
  offset?: number;
}

export default function ParallaxImage({ offset = 50, className, ...props }: ParallaxImageProps) {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  // Ensure the wrapper has some positioning context if not provided
  const positionClass = className?.includes('absolute') || className?.includes('fixed') ? '' : 'relative';

  return (
    <div ref={ref} className={`${positionClass} overflow-hidden ${className || ''}`}>
      <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%] bg-deep-brown">
        <Image {...props} className="object-contain md:object-cover" />
      </motion.div>
    </div>
  );
}
