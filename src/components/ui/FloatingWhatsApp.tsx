"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp({ initialHidden = false }: { initialHidden?: boolean }) {
  const [isHidden, setIsHidden] = useState(initialHidden);

  useEffect(() => {
    if (initialHidden) {
      const timer = setTimeout(() => {
        setIsHidden(false);
      }, 4500);
      return () => clearTimeout(timer);
    }
  }, [initialHidden]);

  if (isHidden) return null;

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 2 }}
      className="fixed bottom-6 right-6 z-40"
    >
      <Link
        href="https://wa.me/966575650214"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 relative group"
      >
        <MessageCircle className="w-8 h-8" />
        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-white text-deep-brown px-4 py-2 rounded-lg text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          تواصل معنا عبر واتساب
        </span>
        {/* Ping animation */}
        <span className="absolute inset-0 rounded-full border-2 border-green-400 animate-ping opacity-75"></span>
      </Link>
    </motion.div>
  );
}
