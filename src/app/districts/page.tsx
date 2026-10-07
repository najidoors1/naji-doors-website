import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { districts } from "@/data/districts";
import PageHero from "@/components/ui/PageHero";
import RelatedLinks from "@/components/ui/RelatedLinks";
import { MapPin, ArrowLeft } from "lucide-react";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "أبواب WPC في أحياء الرياض",
  description: "دليل ناجي دورز لخدمات أبواب WPC في أحياء الرياض. اختر الحي ثم راجع الموديلات وخيارات التوريد أو التركيب واطلب عرض سعر لمشروعك.",
  path: "/districts",
  image: "/Images/wpc-doors-riyadh-districts-hero.png",
});

export default function DistrictsIndexPage() {
  return (
    <main className="min-h-screen bg-warm-beige pb-24">
      <PageHero 
        title="مناطق التغطية بالرياض"
        description="اختر الحي، ثم شارك المقاسات ومتطلبات المشروع لتأكيد خدمة التوريد أو التركيب في موقعك."
        bgImage="/Images/wpc-doors-riyadh-districts-hero.png"
        breadcrumbs={[{ name: "مناطق التغطية", href: "/districts" }]}
      />
      
      <div className="container mx-auto px-6 pt-16">
        <section className="mx-auto mb-12 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-deep-brown">دليل أبواب WPC في أحياء الرياض</h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-700">
            هذه الصفحات تساعدك على البدء من موقع مشروعك، ثم الانتقال إلى الموديلات والخدمات المناسبة. لا تعتمد خدمة التوريد أو التركيب على اسم الحي وحده؛ نراجع المقاسات والكمية والتشطيب وحالة الموقع قبل تأكيد التفاصيل.
          </p>
        </section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {districts.map((district) => (
            <Link key={district.id} href={`/districts/${district.slug}`} className="group block">
              <div className="bg-white rounded-3xl overflow-hidden luxury-card relative h-72 flex flex-col justify-end p-6">
                <Image 
                  src={district.image}
                  alt={district.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 -z-20"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-brown via-deep-brown/60 to-transparent -z-10 group-hover:from-gold/90 transition-colors duration-500"></div>
                
                <div className="relative z-10 flex items-center gap-3 text-white mb-2">
                  <MapPin className="w-6 h-6 text-gold group-hover:text-white transition-colors" />
                  <h2 className="text-2xl font-bold">{district.name}</h2>
                </div>
                <div className="flex items-center justify-between text-gray-200 group-hover:text-white transition-colors">
                  <span className="text-sm">استفسر عن الخدمة</span>
                  <ArrowLeft className="w-5 h-5 transform group-hover:-translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <section className="mt-16 grid gap-6 rounded-3xl bg-white p-8 md:grid-cols-3 md:p-10">
          <div>
            <h2 className="text-2xl font-bold text-deep-brown">قبل طلب العرض</h2>
            <p className="mt-3 leading-relaxed text-gray-600">جهّز عدد الأبواب والمقاسات التقريبية ونوع المشروع، وأرسل صوراً للتصميم إن كانت متاحة.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-deep-brown">اختر من الكتالوج</h2>
            <p className="mt-3 leading-relaxed text-gray-600">قارن بين التصاميم السادة والمحـفورة والزجاجية والاستيل والسحاب قبل تحديد الموديل.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-deep-brown">أكد الخدمة</h2>
            <p className="mt-3 leading-relaxed text-gray-600">ناقش مع الفريق ما إذا كان طلبك يحتاج توريداً فقط أو توريداً مع تركيب.</p>
          </div>
        </section>

        <RelatedLinks
          className="mt-10"
          title="ابدأ من الصفحة الأنسب لمشروعك"
          description="روابط عملية تساعدك على الانتقال من الحي إلى اختيار الباب والخدمة وطلب العرض."
          links={[
            { href: "/products", title: "كتالوج الأبواب", description: "استعرض الموديلات والتشطيبات المعروضة." },
            { href: "/services", title: "خدمات التوريد والتركيب", description: "تعرف على مسار الخدمة المناسب لمشروعك." },
            { href: "/contact", title: "طلب عرض سعر", description: "أرسل الموقع والمقاسات والكمية للتواصل." },
          ]}
        />
      </div>
    </main>
  );
}
