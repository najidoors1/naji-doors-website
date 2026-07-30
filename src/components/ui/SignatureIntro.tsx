"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SignatureIntro() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Prevent scrolling while intro is playing
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setShowIntro(false);
      document.body.style.overflow = "auto";
      // Set a cookie that expires in 30 days
      document.cookie = "naji_has_visited=true; path=/; max-age=" + 60 * 60 * 24 * 30;
    }, 4500); // 4.5 seconds for full cinematic experience
    
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black perspective-[2000px] overflow-hidden"
          style={{ zIndex: 999999 }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          {/* Deep Space Background behind doors */}
          <div className="absolute inset-0 bg-warm-beige" />

          {/* Left Door Panel */}
          <motion.div
            className="absolute left-0 top-0 h-full w-1/2 origin-left bg-gradient-to-r from-gray-900 to-[#2a1f18] border-r-2 border-gold/40 shadow-2xl z-20 flex items-center justify-end overflow-hidden"
            initial={{ rotateY: 0 }}
            animate={{ rotateY: -110 }}
            transition={{ duration: 3, ease: [0.76, 0, 0.24, 1], delay: 1.2 }}
          >
             {/* Deep Wood Gradient Base (No Image) */}
             <div className="absolute inset-0 bg-gradient-to-br from-[#1c120c] via-[#2c1d11] to-[#1c120c] opacity-80"></div>
             
             {/* Classic Molding */}
             <div className="absolute inset-6 border-2 border-gold/20 rounded-md"></div>
             <div className="absolute inset-10 border border-gold/10 rounded-md"></div>
             
             {/* Golden Handle */}
             <div className="relative right-4 w-6 h-32 bg-gradient-to-b from-yellow-300 via-gold to-yellow-600 rounded-sm shadow-[0_0_15px_rgba(197,160,89,0.5)]"></div>
          </motion.div>

          {/* Right Door Panel */}
          <motion.div
            className="absolute right-0 top-0 h-full w-1/2 origin-right bg-gradient-to-l from-gray-900 to-[#2a1f18] border-l-2 border-gold/40 shadow-2xl z-20 flex items-center justify-start overflow-hidden"
            initial={{ rotateY: 0 }}
            animate={{ rotateY: 110 }}
            transition={{ duration: 3, ease: [0.76, 0, 0.24, 1], delay: 1.2 }}
          >
             {/* Deep Wood Gradient Base (No Image) */}
             <div className="absolute inset-0 bg-gradient-to-bl from-[#1c120c] via-[#2c1d11] to-[#1c120c] opacity-80"></div>
             
             {/* Classic Molding */}
             <div className="absolute inset-6 border-2 border-gold/20 rounded-md"></div>
             <div className="absolute inset-10 border border-gold/10 rounded-md"></div>
          </motion.div>
          
          {/* Center Logo (Fades out just as doors open) */}
          <motion.div 
            className="absolute z-30 flex flex-col items-center justify-center pointer-events-none"
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              animate={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-7xl text-gold font-bold tracking-widest drop-shadow-[0_0_15px_rgba(197,160,89,0.5)] mb-2" style={{ fontFamily: 'var(--font-elmessiri)' }}>
                NAJI DOORS
              </h1>
              <p className="text-white/80 tracking-[0.4em] uppercase text-sm md:text-lg font-light">
                Luxury WPC
              </p>
            </motion.div>
          </motion.div>

          {/* Cinematic Light Burst when doors open */}
          <motion.div
            className="absolute inset-0 z-10 bg-gradient-to-t from-gold/40 via-white to-transparent mix-blend-screen pointer-events-none"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 1.5] }}
            transition={{ duration: 2.5, delay: 1.2, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
