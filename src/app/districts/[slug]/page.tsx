import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { districts } from "@/data/districts";
import PageHero from "@/components/ui/PageHero";
import { CheckCircle2, PhoneCall, ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  return districts.map((d) => ({
    slug: d.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const district = districts.find((d) => d.slug === resolvedParams.slug);
  
  if (!district) {
    return { title: "الصفحة غير موجودة" };
  }

  return {
    title: district.title,
    description: district.description,
  };
}

export default async function DistrictPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const district = districts.find((d) => d.slug === resolvedParams.slug);

  if (!district) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-warm-beige pb-24">
      <PageHero 
        title={district.name}
        description={district.description}
        bgImage={district.image}
        breadcrumbs={[
          { name: "مناطق التغطية", href: "/districts" },
          { name: district.name, href: `/districts/${district.slug}` }
        ]}
      />
      
      <div className="container mx-auto px-6 max-w-6xl pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-brown leading-tight">
              خدمات ناجي دورز في <span className="text-gold">{district.name}</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {district.content}
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "مقاومة للماء والرطوبة 100%",
                "عزل صوتي فائق للغرف",
                "ضد النمل الأبيض والحشرات",
                "ضمان شامل لمدة 10 سنوات",
                `تم تنفيذ أكثر من ${district.projectsCount} مشروع بنجاح في الحي`
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-deep-brown font-medium">
                  <CheckCircle2 className="w-6 h-6 text-gold" />
                  {item}
                </li>
              ))}
            </ul>
            
            <div className="flex gap-4 pt-8">
              <Link 
                href="/contact" 
                className="flex-1 bg-deep-brown hover:bg-gold text-white hover:text-deep-brown flex justify-center items-center gap-2 py-4 rounded-full font-bold transition-colors shadow-lg"
              >
                <PhoneCall className="w-5 h-5" /> اطلب مقاسات مجانية
              </Link>
              <Link 
                href="/products" 
                className="flex-1 bg-white hover:bg-gray-50 text-deep-brown border border-gray-200 flex justify-center items-center gap-2 py-4 rounded-full font-bold transition-colors shadow-sm"
              >
                تصفح الكتالوج <ArrowLeft className="w-5 h-5" />
              </Link>
            </div>
          </div>
          
          <div className="relative h-[500px] w-full rounded-3xl overflow-hidden luxury-card">
            <Image 
              src={district.image}
              alt={`تركيب أبواب في ${district.name}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/80 to-transparent"></div>
            <div className="absolute bottom-8 right-8 left-8 text-white">
              <p className="font-bold text-2xl mb-2">عملاء {district.name}</p>
              <p className="text-gray-200">ينصحون بمنتجاتنا بفضل الجودة والالتزام بالمواعيد.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
