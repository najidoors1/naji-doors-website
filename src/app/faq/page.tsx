"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Script from "next/script";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";

const faqs = [
  {
    question: "ما هي أبواب WPC ومم تتكون؟",
    answer: "WPC اختصار لـ Wood Plastic Composite، وهو مركب يجمع الخشب والبلاستيك. تختلف تركيبة الباب وتشطيبه وإطاره من موديل إلى آخر، لذا من الأفضل مراجعة مواصفات الموديل الذي تفكر فيه قبل الطلب."
  },
  {
    question: "هل أبواب WPC مناسبة للحمامات؟",
    answer: "يمكن أن تكون أبواب WPC خياراً شائعاً للمساحات التي تتعرض للرطوبة. قبل اختيار الباب للحمام، تحقق من مواصفات الموديل والإطار وطريقة التركيب والعناية المناسبة من فريق المبيعات."
  },
  {
    question: "ما العوامل التي تحدد سعر باب WPC في الرياض؟",
    answer: "لا ننشر سعراً موحداً لأن العرض يتأثر عادة بالمقاس والتصميم والتشطيب والإطار والإكسسوارات والكمية ومتطلبات التركيب والموقع. أرسل هذه التفاصيل للحصول على عرض أدق."
  },
  {
    question: "ما المعلومات المطلوبة للحصول على عرض سعر للمشروع؟",
    answer: "أرسل نوع المشروع، عدد الأبواب، المقاسات التقريبية، التصميم أو الموديل المفضل، التشطيبات المطلوبة، وموقع المشروع. تساعد الصور أو المخططات عند توفرها على فهم المتطلبات."
  },
  {
    question: "هل يمكن تفصيل مقاسات وتصاميم خاصة؟",
    answer: "تتوفر خدمة التصميم الخاص ضمن خدمات ناجي دورز. شارك المقاسات والتصميم المرجعي والمتطلبات الخاصة ليتم تأكيد إمكانات التنفيذ والمدة ضمن عرض السعر."
  },
  {
    question: "هل تشمل الخدمة التوريد والتركيب في الرياض؟",
    answer: "يعرض الموقع خدمات التوريد والتركيب في الرياض. تواصل معنا لتأكيد نطاق الخدمة وموعد المعاينة أو التركيب المناسب لموقع مشروعك."
  },
  {
    question: "كيف أختار الباب الداخلي المناسب للمنزل أو الفيلا؟",
    answer: "ابدأ بالمقاس والاستخدام المطلوب لكل فتحة، ثم قارن التصميم والتشطيب والإطار والإكسسوارات مع ديكور المكان. يمكنك تصفح الموديلات وطلب مساعدة فريقنا عند تجهيز قائمة الأبواب."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Generate FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <main className="min-h-screen bg-warm-beige pb-24">
      {/* JSON-LD for SEO */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageHero 
        title="الأسئلة الشائعة"
        description="جمعنا لك إجابات لأكثر الأسئلة التي تصلنا حول أبواب WPC لنسهل عليك اتخاذ القرار."
        bgImage="/Images/wpc-doors-riyadh-services-hero.png"
        breadcrumbs={[{ name: "الأسئلة الشائعة", href: "/faq" }]}
      />
      
      <div className="container mx-auto px-6 max-w-4xl pt-16">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl overflow-hidden luxury-card transition-all duration-300"
            >
              <button
                className="w-full px-8 py-6 text-right flex items-center justify-between focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-bold text-deep-brown">{faq.question}</span>
                <ChevronDown 
                  className={`w-6 h-6 text-gold transition-transform duration-300 ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              <div 
                className={`px-8 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <section className="mt-12 grid gap-5 md:grid-cols-3">
          <Link href="/products" className="rounded-2xl bg-white p-6 shadow-sm transition-colors hover:bg-light-cream">
            <h2 className="text-xl font-bold text-deep-brown">شاهد الموديلات</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">انتقل إلى الكتالوج لمقارنة التصاميم والتشطيبات المعروضة.</p>
          </Link>
          <Link href="/services" className="rounded-2xl bg-white p-6 shadow-sm transition-colors hover:bg-light-cream">
            <h2 className="text-xl font-bold text-deep-brown">حدد الخدمة</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">تعرف على التوريد والتركيب وخدمة المشاريع والتصميم الخاص.</p>
          </Link>
          <Link href="/contact" className="rounded-2xl bg-white p-6 shadow-sm transition-colors hover:bg-light-cream">
            <h2 className="text-xl font-bold text-deep-brown">اطلب عرض سعر</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">شارك نوع المشروع والمقاسات والكمية لتناقش الطلب بصورة أدق.</p>
          </Link>
        </section>
      </div>

    </main>
  );
}
