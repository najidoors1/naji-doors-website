"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function SeoSection() {
  return (
    <section className="py-24 bg-white relative border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-deep-brown leading-tight">
              أفضل مؤسسة لتوريد وتركيب <span className="text-gold">أبواب WPC</span> في الرياض والمملكة
            </h2>
            <div className="w-20 h-1.5 bg-gold rounded-full"></div>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              تعتبر <strong>ناجي دورز</strong> الخيار الأول والاستراتيجي للمهندسين والمقاولين وأصحاب الفلل الفاخرة في المملكة العربية السعودية. بفضل خبرتنا الممتدة لأكثر من 10 سنوات، نقدم أحدث تصاميم الأبواب الداخلية والخارجية المصنوعة من الخشب البلاستيكي (WPC) عالي الكثافة.
            </p>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              منتجاتنا ليست مجرد أبواب، بل هي حلول ذكية تجمع بين <strong>الفخامة المطلقة</strong> والمقاومة التامة للماء، الرطوبة، والنمل الأبيض. سواء كنت تبحث عن أبواب لغرف النوم توفر عزلاً صوتياً فائقاً، أو أبواب لدورات المياه تتحمل أقسى الظروف، فإننا نضمن لك جودة لا تضاهى وتصاميم تواكب رؤية 2030 وتطلعات السوق السعودي.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                "مقاومة للماء والرطوبة بنسبة 100%",
                "عزل صوتي فائق لخصوصية تامة",
                "ضد النمل الأبيض والحشرات",
                "ضمان شامل يمتد لـ 10 سنوات",
                "تصاميم كلاسيكية ومودرن",
                "مفصلات ومقابض عالية الجودة"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-gold shrink-0 mt-0.5" />
                  <span className="text-deep-brown font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6">
              <Link 
                href="/about-us" 
                className="inline-flex items-center gap-2 bg-deep-brown text-white hover:bg-gold hover:text-deep-brown px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl"
              >
                اكتشف المزيد عن ناجي دورز
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4 mt-8">
              <div className="h-48 rounded-3xl overflow-hidden shadow-lg border border-gray-100">
                <img src="/Images/Services/wpc-doors-riyadh-supply-commercial.jpg" alt="تركيب أبواب WPC الرياض" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="h-64 rounded-3xl overflow-hidden shadow-lg border border-gray-100">
                <img src="/Images/Services/wpc-doors-riyadh-custom-design.jpg" alt="مزيج من بودرة الخشب وحبيبات البلاستيك - مادة WPC" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="h-64 rounded-3xl overflow-hidden shadow-lg border border-gray-100">
                <img src="/Images/Services/wpc-doors-riyadh-service-15.jpg" alt="أفضل مؤسسة أبواب في الرياض - ناجي دورز" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="h-48 rounded-3xl overflow-hidden shadow-lg bg-deep-brown p-6 flex flex-col justify-center items-center text-center">
                <span className="text-5xl font-bold text-gold mb-2">+5000</span>
                <span className="text-white font-medium text-lg">عميل راضٍ في الرياض</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
