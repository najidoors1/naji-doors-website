"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const doorOptions = [
  {
    id: "walnut",
    name: "جوز هند فاخر",
    color: "#3e2723",
    image: "/Images/Products/Doors/a1c58aeae6bf838b90a2772a970c3a08.jpg",
  },
  {
    id: "oak",
    name: "بلوط فاتح",
    color: "#8d6e63",
    image: "/Images/Products/Doors/d035935449a5a025cbd7ef6071d48579.webp.jpg",
  },
  {
    id: "white",
    name: "أبيض مودرن",
    color: "#f5f5f5",
    image: "/Images/Products/Doors/0d29a84d8ff895843983b8b465d17698.webp.jpg",
  },
];

export default function DoorConfigurator() {
  const [activeDoor, setActiveDoor] = useState(doorOptions[0]);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-deep-brown/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold font-bold tracking-widest uppercase text-sm mb-2 block">Interactive Experience</span>
          <h2 className="text-3xl md:text-5xl font-bold text-deep-brown mb-6">صمم بابك الخاص</h2>
          <p className="text-gray-600 text-lg">
            اكتشف كيف يبدو بابك المستقبلي بتشطيبات خشبية مختلفة تتناسب مع ديكور منزلك الفاخر.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-warm-beige/30 rounded-[3rem] p-8 md:p-12 border border-gold/20 shadow-2xl backdrop-blur-sm flex flex-col md:flex-row items-center gap-12">
          
          {/* Controls */}
          <div className="flex-1 w-full space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-deep-brown mb-6">اختر اللون والتشطيب</h3>
              <div className="flex gap-4">
                {doorOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setActiveDoor(option)}
                    className={`relative w-16 h-16 rounded-full transition-all duration-300 ${
                      activeDoor.id === option.id ? "scale-110 ring-4 ring-gold ring-offset-4 ring-offset-warm-beige" : "hover:scale-105"
                    }`}
                    style={{ backgroundColor: option.color }}
                    aria-label={`اختر لون ${option.name}`}
                  >
                    <span className="sr-only">{option.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gold/10">
              <h4 className="font-bold text-deep-brown mb-2">التشطيب المختار:</h4>
              <p className="text-xl text-gold">{activeDoor.name}</p>
              <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center text-sm text-gray-500">
                <span>مقاوم للماء 100%</span>
                <span>ضد النمل الأبيض</span>
              </div>
            </div>
          </div>

          {/* Door Preview */}
          <div className="flex-1 w-full h-[500px] relative rounded-3xl overflow-hidden shadow-2xl bg-white border-4 border-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDoor.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={activeDoor.image}
                  alt={`باب بلون ${activeDoor.name}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
