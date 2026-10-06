"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
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
              أبواب WPC في الرياض للمنازل والفلل <span className="text-gold">والمشاريع</span>
            </h2>
            <div className="w-20 h-1.5 bg-gold rounded-full"></div>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              تقدم <strong>ناجي دورز</strong> أبواب WPC داخلية وخدمات التوريد والتركيب في الرياض. يمكنك مقارنة الموديلات والتشطيبات، ثم مشاركة المقاسات ومتطلبات الموقع للحصول على عرض سعر مناسب لمشروعك.
            </p>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              نعرض تصاميم سادة ومحفورة وزجاجية واستيل وسحاب، مع خيارات للمنازل والفلل والمشاريع. تساعدك صفحات الخدمات والمنتجات على تحديد التصميم والخدمة المطلوبة قبل التواصل معنا.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                "توريد وتركيب أبواب WPC في الرياض",
                "تصاميم سادة ومحفورة وزجاجية واستيل",
                "حلول للفلل والمنازل والمشاريع",
                "عرض سعر حسب المقاس والتشطيب والكمية",
                "صفحات منتجات وخدمات مفصلة",
                "التواصل عبر الهاتف أو واتساب"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-gold shrink-0 mt-0.5" />
                  <span className="text-deep-brown font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-deep-brown text-white hover:bg-gold hover:text-deep-brown px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl"
              >
                استكشف خدمات التوريد والتركيب
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
                <Image src="/Images/Services/wpc-doors-riyadh-supply-commercial.jpg" alt="تركيب أبواب WPC الرياض" width={600} height={400} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="h-64 rounded-3xl overflow-hidden shadow-lg border border-gray-100">
                <Image src="/Images/Services/wpc-doors-riyadh-custom-design.jpg" alt="تفاصيل تصميم أبواب WPC" width={600} height={400} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="h-64 rounded-3xl overflow-hidden shadow-lg border border-gray-100">
                <Image src="/Images/Services/wpc-doors-riyadh-service-15.jpg" alt="تصاميم أبواب WPC من ناجي دورز" width={600} height={400} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="h-48 rounded-3xl overflow-hidden shadow-lg bg-deep-brown p-6 flex flex-col justify-center items-center text-center">
                <span className="text-2xl font-bold text-gold mb-2">طلب عرض سعر</span>
                <span className="text-white font-medium text-lg">أرسل المقاسات ومتطلبات مشروعك</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
