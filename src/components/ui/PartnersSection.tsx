"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
  { name: "سقيفة", logo: "/Images/Partners/سقيفه.jpg" },
  { name: "مدى", logo: "/Images/Partners/مدي.jpg" },
  { name: "مساكن ركاز", logo: "/Images/Partners/مساكن ركاز.jpg" },
  { name: "وتين", logo: "/Images/Partners/وتين.jpg" },
];

export default function PartnersSection() {
  return (
    <section className="py-20 bg-white overflow-hidden border-t border-gray-100 relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-6 mb-12 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-deep-brown mb-4"
        >
          شركاء <span className="text-gold">النجاح</span>
        </motion.h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          نفتخر بتعاوننا مع كبرى الشركات والمؤسسات لتنفيذ أرقى المشاريع العقارية في المملكة
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden flex items-center bg-gray-50/50 py-10 border-y border-gray-100">
        <div className="flex animate-marquee whitespace-nowrap items-center gap-16 md:gap-32 px-8">
          {[...partners, ...partners, ...partners, ...partners].map((partner, index) => (
            <div 
              key={index} 
              className="relative w-32 h-20 md:w-48 md:h-24 mix-blend-multiply grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100"
            >
              <Image 
                src={partner.logo} 
                alt={partner.name} 
                fill 
                className="object-contain" 
                sizes="(max-width: 768px) 128px, 192px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
