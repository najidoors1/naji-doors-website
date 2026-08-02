"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ParallaxImage from "./ParallaxImage";
import AnimatedCounter from "./AnimatedCounter";
import HeroParticles from "./HeroParticles";

export default function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center overflow-hidden pt-32 pb-10 md:pt-0 md:pb-0">
      {/* Background Image with Parallax */}
      <ParallaxImage
        src="/Images/wpc-doors-riyadh-home-hero.png"
        alt="أبواب WPC فاخرة في الرياض"
        fill
        priority
        className="absolute inset-0 z-0"
        offset={100}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#110e0d]/95 via-deep-brown/50 to-[#110e0d]/95 z-10" />
      <HeroParticles />

      <div className="container relative z-10 mx-auto px-6 lg:px-12 flex flex-col items-center justify-center text-center flex-1 md:flex-none md:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <span className="text-gold font-medium tracking-wider mb-4 block uppercase text-sm md:text-base">
            صُنعت للبيئة السعودية
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight drop-shadow-md">
            بوابة الفخامة <br className="hidden sm:block" />
            <span className="text-light-cream font-light">لـ مشاريعك الراقية</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 md:mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            أبواب WPC داخلية مقاومة للماء 100%، عازلة للصوت، ومصممة بأعلى معايير الجودة لتناسب أحدث تصاميم الفلل والقصور في الرياض.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/products" 
              className="group flex items-center gap-3 bg-gold hover:bg-yellow-600 text-deep-brown px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl w-full sm:w-auto justify-center"
            >
              استعرض الكتالوج
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="/contact" 
              className="flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-medium transition-all w-full sm:w-auto justify-center"
            >
              طلب تسعيرة
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Trust Badges - Static on mobile, absolute on desktop */}
      <motion.div 
        className="w-full mt-12 md:mt-0 md:absolute md:bottom-8 left-0 right-0 z-10 px-4 md:px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <div className="max-w-4xl mx-auto bg-deep-brown/80 backdrop-blur-md rounded-2xl p-4 md:p-6 grid grid-cols-2 md:flex md:justify-around items-center gap-4 md:gap-0 border border-gold/20 shadow-xl">
           <div className="text-center">
             <AnimatedCounter to={100} suffix="%" className="block text-xl md:text-2xl font-bold text-white" />
             <span className="text-xs text-gray-300">مقاومة للماء</span>
           </div>
           <div className="text-center">
             <AnimatedCounter to={10} className="block text-xl md:text-2xl font-bold text-white" />
             <span className="text-xs md:text-sm text-gray-300">سنوات ضمان</span>
           </div>
           <div className="text-center">
             <AnimatedCounter from={2000} to={2030} className="block text-xl md:text-2xl font-bold text-gold" />
             <span className="text-xs md:text-sm text-gray-300">رؤية المملكة</span>
           </div>
           <div className="text-center">
             <span className="block text-xl md:text-2xl font-bold text-white">ZATCA</span>
             <span className="text-xs md:text-sm text-gray-300">معتمد</span>
           </div>
        </div>
      </motion.div>
    </section>
  );
}
