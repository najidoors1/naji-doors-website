"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "محمد العتيبي",
    role: "مالك فيلا",
    location: "حي الياسمين، الرياض",
    text: "تجربتي مع أبواب ناجي دورز كانت استثنائية. الجودة عالية جداً، العزل الصوتي فاق توقعاتي، ومقاومة الماء حلت لي مشكلة كبيرة في أبواب دورات المياه. أنصح بهم بشدة لأي مشروع فخم.",
  },
  {
    id: 2,
    name: "م. خالد السالم",
    role: "مدير مشاريع",
    location: "حي الملقا، الرياض",
    text: "في مشاريعنا السكنية الفاخرة، نبحث دائماً عن الجودة التي لا تساوم على التصميم. ناجي دورز وفروا لنا تشكيلة رائعة تلبي احتياجات الديكور المودرن مع متانة تتحمل الاستخدام العالي.",
  },
  {
    id: 3,
    name: "عبدالله الراجحي",
    role: "صاحب قصر",
    location: "حي حطين، الرياض",
    text: "فريق التركيب كان في قمة الاحترافية، والأبواب نفسها عبارة عن تحفة فنية. الملمس الخشبي واقعي جداً ولكن مع مزايا الـ WPC التي تعطي راحة بال من ناحية النمل الأبيض والرطوبة.",
  },
  {
    id: 4,
    name: "نورة الدوسري",
    role: "مهندسة ديكور",
    location: "حي العليا، الرياض",
    text: "أعتمد على أبواب ناجي دورز في معظم تصاميمي الداخلية. تشكيلة الألوان والموديلات تواكب أحدث الصيحات، وخدمة التفصيل الخاص لديهم لا مثيل لها.",
  },
  {
    id: 5,
    name: "سعد القحطاني",
    role: "صاحب منزل",
    location: "حي النرجس، الرياض",
    text: "كانت لدي مشكلة مزمنة مع أبواب الحمامات التي تنتفخ بسبب الماء، وبعد تركيب أبواب WPC من ناجي دورز، انتهت المشكلة تماماً. الجودة ممتازة والأسعار معقولة.",
  },
  {
    id: 6,
    name: "مؤسسة تطوير عقاري",
    role: "عميل B2B",
    location: "شمال الرياض",
    text: "تعاقدنا مع ناجي دورز لتوريد أبواب لـ 30 فيلا، وكانوا في قمة الالتزام بالوقت والمواصفات. أبواب تتحمل الاستخدام الثقيل وتعطي انطباعاً بالفخامة لكل من يزور المشاريع.",
  },
  {
    id: 7,
    name: "سارة التميمي",
    role: "صاحبة فيلا",
    location: "حي الربيع، الرياض",
    text: "أكثر ما أعجبني هو العزل الصوتي! بمجرد إغلاق الباب، ينعزل الصوت تماماً عن باقي أرجاء المنزل. شكراً لفريق العمل على هذا الإنجاز.",
  }
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto py-12 px-4 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="luxury-card p-4 sm:p-6 md:p-12 relative rounded-3xl shadow-lg mx-0 md:mx-0 bg-gradient-to-br from-white via-[#fdfbf7] to-gold/10"
        >
          <Quote className="absolute top-4 right-4 md:top-6 md:right-6 w-8 h-8 md:w-12 md:h-12 text-gold/20" />
          
          <div className="flex gap-1 mb-3 md:mb-6 mt-6 md:mt-0">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 md:w-5 md:h-5 fill-gold text-gold" />
            ))}
          </div>

          <p className="text-base sm:text-lg md:text-2xl text-deep-brown leading-relaxed font-medium mb-4 md:mb-8 min-h-[80px] md:min-h-[100px] flex items-center">
            "{testimonials[currentIndex].text}"
          </p>

          <div className="flex items-center gap-3 md:gap-4 mt-auto">
            <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-gold/20 flex shrink-0 items-center justify-center">
              <span className="text-gold font-bold text-base md:text-xl">
                {testimonials[currentIndex].name.charAt(0)}
              </span>
            </div>
            <div>
              <h4 className="font-bold text-deep-brown text-xs md:text-base">{testimonials[currentIndex].name}</h4>
              <p className="text-[10px] md:text-sm text-gray-500">
                {testimonials[currentIndex].role} — {testimonials[currentIndex].location}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === idx ? "bg-gold w-8" : "bg-gray-300"
            }`}
            aria-label={`Go to testimonial ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
