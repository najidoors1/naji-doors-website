"use client";

import { motion } from "framer-motion";
import { Download, BookOpen, Palette, FileText } from "lucide-react";

export default function DownloadsSection() {
  const files = [
    {
      id: "catalog",
      title: "كتالوج الأبواب",
      desc: "أحدث الموديلات",
      icon: BookOpen,
      url: "/Files/doors-catalog.pdf",
    },
    {
      id: "colors",
      title: "كتالوج الألوان",
      desc: "التشطيبات والدرجات",
      icon: Palette,
      url: "/Files/colors-catalog.pdf",
    },
    {
      id: "profile",
      title: "ملف المؤسسة",
      desc: "نبذة عن ناجي دورز",
      icon: FileText,
      url: "/Files/profile.pdf",
    },
  ];

  return (
    <section className="py-20 bg-warm-beige relative overflow-hidden">
      <div className="absolute inset-0 bg-gold/5 blur-3xl -z-10 rounded-full w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-deep-brown mb-6"
          >
            مركز التحميلات
          </motion.h2>
          <div className="w-24 h-1.5 bg-gold mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            نوفر لك مكتبة رقمية متكاملة لتصفح كتالوجات أبواب ناجي دورز والألوان المتاحة لتسهيل اختيارك.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {files.map((file, idx) => {
            const Icon = file.icon;
            return (
              <motion.a
                href={file.url}
                download
                target="_blank"
                rel="noreferrer"
                key={file.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-500 group flex items-center justify-between border border-gray-100 hover:border-gold/50 cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-warm-beige group-hover:bg-gold/10 flex items-center justify-center transition-colors">
                    <Icon className="w-6 h-6 text-gold group-hover:text-deep-brown transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-bold text-deep-brown text-lg">{file.title}</h3>
                    <p className="text-sm text-gray-500">{file.desc}</p>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-50 group-hover:bg-deep-brown flex items-center justify-center transition-colors">
                  <Download className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
