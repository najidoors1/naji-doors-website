"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { companyData } from "@/data/content";
import Script from "next/script";
import PageHero from "@/components/ui/PageHero";

const faqs = [
  {
    question: "ما هي أبواب WPC ومم تتكون؟",
    answer: "أبواب WPC (Wood Plastic Composite) هي أبواب مصنوعة من مزيج مبتكر من ألياف الخشب والبلاستيك (البوليمر). هذا المزيج يعطي الباب مظهر وملمس الخشب الطبيعي مع متانة ومقاومة البلاستيك للعوامل البيئية."
  },
  {
    question: "هل أبواب WPC مقاومة للماء حقاً؟",
    answer: "نعم، أبواب WPC من ناجي دورز مقاومة للماء بنسبة 100%. لا تتأثر بالرطوبة أو المياه المباشرة، مما يجعلها الخيار المثالي لدورات المياه والمطابخ دون القلق من الانتفاخ أو التعفن."
  },
  {
    question: "هل توفرون خدمة التركيب في جميع مناطق الرياض؟",
    answer: "نعم، نوفر خدمة التوريد والتركيب الاحترافي في جميع أحياء ومناطق الرياض عبر فريق متخصص لضمان أعلى جودة في التركيب."
  },
  {
    question: "كم تبلغ فترة الضمان على الأبواب؟",
    answer: "نقدم ضماناً يصل إلى 10 سنوات على أبواب WPC ضد عيوب التصنيع ومقاومة الماء والنمل الأبيض، بالإضافة إلى ضمان على جودة التركيب."
  },
  {
    question: "هل يمكن تفصيل مقاسات وتصاميم خاصة؟",
    answer: "بالتأكيد، نحن في مصنع ناجي دورز نستطيع تصنيع الأبواب بمقاسات وتصاميم مخصصة لتلبي احتياجات مشروعك بدقة متناهية."
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
        bgImage="/Images/Services Hero Background.png"
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
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}
