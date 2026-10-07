import type { Metadata } from "next";
import { services } from "@/data/services";
import { serviceDetails } from "@/data/service-details";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import { CheckCircle2 } from "lucide-react";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import RelatedLinks from "@/components/ui/RelatedLinks";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const service = services.find((s) => s.slug === resolvedParams.slug);
  
  if (!service) {
    return {
      title: "الخدمة غير موجودة | ناجي دورز",
    };
  }

  const detail = serviceDetails[service.slug];

  return pageMetadata({
    title: `${service.title} | أبواب WPC في الرياض`,
    description: detail.summary,
    path: `/services/${service.slug}`,
    image: service.image,
  });
}

export default async function ServiceDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = services.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  const detail = serviceDetails[service.slug];

  return (
    <main className="min-h-screen bg-warm-beige pb-24">
      <PageHero 
        title={service.title}
        description={service.shortDesc}
        bgImage={service.image}
        breadcrumbs={[
          { name: "الخدمات", href: "/services" },
          { name: service.title, href: `/services/${service.slug}` }
        ]}
      />
      
      <div className="container mx-auto px-6 max-w-4xl pt-16">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-luxury mb-12 relative overflow-hidden">
          <div className="prose prose-lg prose-brown max-w-none mb-12" dangerouslySetInnerHTML={{ __html: detail.content }} />
          
          {detail.benefits.length > 0 && (
            <div className="mt-12 bg-light-cream rounded-2xl p-8 border border-gold/20">
              <h3 className="text-2xl font-bold text-deep-brown mb-6">مزايا الخدمة</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {detail.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-gold shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {detail.faqs.length > 0 && (
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-deep-brown mb-6">الأسئلة الشائعة</h3>
              <div className="space-y-4">
                {detail.faqs.map((faq, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                    <h4 className="font-bold text-lg text-deep-brown mb-2">{faq.question}</h4>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <RelatedLinks
          title="تابع من الخدمة إلى اختيار الباب"
          description="استخدم هذه الروابط لتجهيز عناصر الطلب المرتبطة بهذه الخدمة، ثم شارك التفاصيل التي لديك عند التواصل."
          links={[
            { href: "/products", title: "كتالوج الأبواب", description: "اختر الموديل أو التصميم الذي تريد مناقشته." },
            { href: "/projects", title: "صفحة المشاريع", description: "راجع ما يحتاجه الطلب عندما يضم عدداً من الأبواب." },
            { href: "/contact", title: "طلب عرض سعر", description: "أرسل المقاسات والكمية وموقع المشروع." },
          ]}
        />
        
        <div className="text-center">
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 bg-deep-brown text-white font-bold rounded-full hover:bg-gold hover:text-deep-brown transition-all duration-300 shadow-md hover:shadow-xl"
          >
            طلب عرض سعر للخدمة
          </Link>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "name": service.title,
                "description": detail.summary,
                "url": `https://najidoor.com/services/${service.slug}`,
                "image": `https://najidoor.com${service.image}`,
                "provider": { "@id": "https://najidoor.com/#organization" },
                "areaServed": { "@type": "City", "name": "الرياض" },
              },
              breadcrumbSchema([
                { name: "الرئيسية", path: "/" },
                { name: "الخدمات", path: "/services" },
                { name: service.title, path: `/services/${service.slug}` },
              ]),
              ...(detail.faqs.length > 0
                ? [{
                    "@type": "FAQPage",
                    "mainEntity": detail.faqs.map((faq) => ({
                      "@type": "Question",
                      "name": faq.question,
                      "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
                    })),
                  }]
                : []),
            ],
          }),
        }}
      />
    </main>
  );
}
