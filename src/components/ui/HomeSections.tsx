"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/content";
import { ShieldCheck, Droplet, VolumeX, ArrowLeft, Star, Settings } from "lucide-react";
import TiltCard from "./TiltCard";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function HomeSections() {
  // Take top 4 products for showcase
  const featuredProducts = products.slice(0, 4);

  return (
    <>
      {/* 1. Value Proposition (Bento Grid Style) */}
      <section className="py-24 bg-light-cream overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-deep-brown mb-4">
              لماذا ناجي دورز؟
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              نجمع بين فخامة التصميم ومتانة المواد لتقديم أبواب تعكس رقي مشاريعكم وتتحمل أقسى الظروف المناخية في الرياض.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* Main Feature */}
            <motion.div variants={fadeIn} className="md:col-span-2 bg-gradient-to-br from-white to-warm-beige border border-gold/30 rounded-3xl p-6 md:p-12 luxury-card relative overflow-hidden group shadow-md hover:shadow-lg transition-all">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-700"></div>
              <Droplet className="w-12 h-12 text-gold mb-6" />
              <h3 className="text-2xl md:text-3xl font-bold text-deep-brown mb-4">مقاومة مطلقة للماء والرطوبة</h3>
              <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                تتكون أبوابنا من مزيج من بودرة الخشب وحبيبات البلاستيك، مما يجعلها درعاً منيعاً ضد الماء بنسبة 100%. الخيار الاستراتيجي الأمثل لدورات المياه والمطابخ دون القلق من الانتفاخ أو التآكل بمرور الزمن.
              </p>
            </motion.div>

            {/* Side Feature 1 */}
            <motion.div variants={fadeIn} className="bg-deep-brown text-white rounded-3xl p-6 md:p-8 luxury-card relative overflow-hidden group">
              <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <VolumeX className="w-10 h-10 text-gold mb-6 relative z-10" />
              <h3 className="text-xl font-bold mb-3 relative z-10">عزل صوتي فائق</h3>
              <p className="text-gray-300 relative z-10">
                بنية داخلية مبتكرة توفر خصوصية تامة وهدوء مثالي لغرف النوم والمكاتب.
              </p>
            </motion.div>

            {/* Side Feature 2 */}
            <motion.div variants={fadeIn} className="bg-gradient-to-br from-white to-warm-beige border border-gold/30 rounded-3xl p-6 md:p-8 luxury-card shadow-md hover:shadow-lg transition-all">
              <ShieldCheck className="w-10 h-10 text-gold mb-6" />
              <h3 className="text-xl font-bold text-deep-brown mb-3">ضد النمل الأبيض</h3>
              <p className="text-gray-600">
                تركيبة المواد تمنع تكون البيئات الحاضنة للحشرات تماماً، لضمان استدامة الباب لسنوات.
              </p>
            </motion.div>

            {/* Side Feature 3 */}
            <motion.div variants={fadeIn} className="md:col-span-2 bg-gradient-to-l from-warm-beige via-white to-warm-beige border border-gold/30 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between text-center md:text-right gap-6 md:gap-0 luxury-card group cursor-pointer shadow-md hover:shadow-lg transition-all">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-deep-brown mb-2 group-hover:text-gold transition-colors">صناعة وتوريد للمشاريع الكبرى</h3>
                <p className="text-gray-600">قدرة إنتاجية عالية لتلبية متطلبات المشاريع السكنية والتجارية.</p>
              </div>
              <Link href="/projects" className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md group-hover:bg-gold group-hover:text-white transition-all transform group-hover:-translate-x-2">
                <ArrowLeft className="w-6 h-6" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Featured Showcase Parallax */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-deep-brown mb-4">
                تشكيلة استثنائية
              </h2>
              <div className="w-24 h-1 bg-gold mb-4 rounded-full"></div>
              <p className="text-gray-600 text-lg">تصاميم تلبي كافة الأذواق، من الكلاسيكي الدافئ إلى المودرن الجريء.</p>
            </motion.div>
            <Link href="/products" className="inline-flex items-center text-gold font-bold hover:text-deep-brown transition-colors group pb-2">
              عرض كل المنتجات
              <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-2 transition-transform" />
            </Link>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          >
            {featuredProducts.map((product) => (
              <motion.div key={product.id} variants={fadeIn} className="group cursor-pointer">
                <Link href={`/products/${product.slug}`} className="block">
                  <TiltCard className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden mb-4 md:mb-5 bg-gradient-to-b from-gray-50 to-gray-100 border border-gray-100 flex items-center justify-center p-6">
                    <Image 
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-4 group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    <div className="absolute bottom-4 right-4 text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hidden md:block z-10 drop-shadow-md">
                      <span className="font-bold border-b border-gold pb-1">عرض التفاصيل</span>
                    </div>
                  </TiltCard>
                  <h3 className="text-xl md:text-2xl font-bold text-deep-brown group-hover:text-gold transition-colors">{product.name}</h3>
                  <p className="text-sm md:text-base text-gray-500 tracking-widest mt-1">{product.id}</p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. Stats / Banner Section */}
      <section className="relative py-20 overflow-hidden bg-deep-brown text-white">
        <div className="absolute inset-0 bg-[url('/Images/wpc-doors-riyadh-services-hero.png')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-4 md:gap-8 text-center md:divide-x md:divide-x-reverse md:divide-white/20">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-gold mb-2">10+</div>
              <div className="text-sm md:text-base text-gray-300">سنوات خبرة</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-gold mb-2">5000+</div>
              <div className="text-sm md:text-base text-gray-300">باب تم تركيبه</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-gold mb-2">350+</div>
              <div className="text-sm md:text-base text-gray-300">مشروع ناجح</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-gold mb-2">100%</div>
              <div className="text-sm md:text-base text-gray-300">رضا العملاء</div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
