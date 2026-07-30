"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Images/Home Hero Background.png"
          alt="أبواب WPC فاخرة في الرياض"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-deep-brown/70 mix-blend-multiply" />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <span className="text-gold font-medium tracking-wider mb-4 block uppercase text-sm md:text-base">
            صُنعت للبيئة السعودية
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-md">
            بوابة الفخامة <br />
            <span className="text-light-cream font-light">لـ مشاريعك الراقية</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
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

      {/* Trust Badges - Absolute positioned at the bottom */}
      <motion.div 
        className="absolute bottom-8 left-0 right-0 z-10 px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <div className="max-w-4xl mx-auto bg-deep-brown/80 backdrop-blur-md rounded-2xl p-4 flex justify-around items-center border border-gold/20 shadow-xl">
           <div className="text-center">
             <span className="block text-2xl font-bold text-white">100%</span>
             <span className="text-xs text-gray-300">مقاومة للماء</span>
           </div>
           <div className="text-center">
             <span className="block text-2xl font-bold text-white">10</span>
             <span className="text-xs text-gray-300">سنوات ضمان</span>
           </div>
           <div className="text-center">
             <span className="block text-2xl font-bold text-gold">2030</span>
             <span className="text-xs text-gray-300">رؤية المملكة</span>
           </div>
           <div className="text-center">
             <span className="block text-2xl font-bold text-white">ZATCA</span>
             <span className="text-xs text-gray-300">معتمد</span>
           </div>
        </div>
      </motion.div>
    </section>
  );
}
