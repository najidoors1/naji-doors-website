import type { Metadata } from "next";
import { companyData } from "@/data/content";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import { CheckCircle2, ChevronRight } from "lucide-react";

// @ts-ignore
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const service = companyData.services.find((s) => s.slug === resolvedParams.slug);
  
  if (!service) {
    return {
      title: "الخدمة غير موجودة | ناجي دورز",
    };
  }

  return {
    title: `${service.title} | توريد وتركيب أبواب WPC ناجي دورز`,
    description: service.shortDesc,
  };
}

// @ts-ignore
export default async function ServiceDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = companyData.services.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-warm-beige pb-24">
      <PageHero 
        title={service.title}
        description={service.shortDesc}
        // @ts-ignore
        bgImage={service.image || "/Images/Services Hero Background.png"}
        breadcrumbs={[
          { name: "الخدمات", href: "/services" },
          { name: service.title, href: `/services/${service.slug}` }
        ]}
      />
      
      <div className="container mx-auto px-6 max-w-4xl pt-16">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-luxury mb-12 relative overflow-hidden">
          {/* @ts-ignore */}
          <div className="prose prose-lg prose-brown max-w-none mb-12" dangerouslySetInnerHTML={{ __html: service.content || `<p>${service.description}</p>` }} />
          
          {/* @ts-ignore */}
          {service.benefits && service.benefits.length > 0 && (
            <div className="mt-12 bg-light-cream rounded-2xl p-8 border border-gold/20">
              <h3 className="text-2xl font-bold text-deep-brown mb-6">مزايا الخدمة</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* @ts-ignore */}
                {service.benefits.map((benefit: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-gold shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {/* @ts-ignore */}
          {service.faqs && service.faqs.length > 0 && (
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-deep-brown mb-6">الأسئلة الشائعة</h3>
              <div className="space-y-4">
                {/* @ts-ignore */}
                {service.faqs.map((faq: any, idx: number) => (
                  <div key={idx} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                    <h4 className="font-bold text-lg text-deep-brown mb-2">{faq.question}</h4>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        <div className="text-center">
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 bg-deep-brown text-white font-bold rounded-full hover:bg-gold hover:text-deep-brown transition-all duration-300 shadow-md hover:shadow-xl"
          >
            طلب عرض سعر للخدمة
          </Link>
        </div>
      </div>
    </main>
  );
}
