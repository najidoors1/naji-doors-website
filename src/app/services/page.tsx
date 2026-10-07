import type { Metadata } from "next";
import { services } from "@/data/services";
import { serviceDetails } from "@/data/service-details";
import Link from "next/link";
import { Settings, Truck, Wrench, PenTool, Building, RefreshCw } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import RelatedLinks from "@/components/ui/RelatedLinks";
import Image from "next/image";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "توريد وتركيب أبواب WPC في الرياض",
  description: "خدمات ناجي دورز لتوريد وتركيب أبواب WPC في الرياض، مع خيارات للتصميم الخاص والمشاريع والصيانة. تعرف على الخدمة المناسبة واطلب عرض سعر.",
  path: "/services",
  image: "/Images/wpc-doors-riyadh-services-hero.png",
});

export default function ServicesPage() {
  const serviceUI = {
    "supply": { icon: Truck, color: "text-blue-500", bg: "bg-blue-500/10", img: "/Images/Services/wpc-doors-riyadh-supply-commercial.jpg" },
    "installation": { icon: Wrench, color: "text-green-500", bg: "bg-green-500/10", img: "/Images/Services/wpc-doors-riyadh-expert-installation.jpg" },
    "maintenance": { icon: Settings, color: "text-orange-500", bg: "bg-orange-500/10", img: "/Images/Services/wpc-doors-riyadh-maintenance-service.jpg" },
    "custom-design": { icon: PenTool, color: "text-purple-500", bg: "bg-purple-500/10", img: "/Images/Services/wpc-doors-riyadh-custom-design.jpg" },
    "b2b-projects": { icon: Building, color: "text-red-500", bg: "bg-red-500/10", img: "/Images/Services/wpc-doors-riyadh-b2b-projects.jpg" },
    "replacement": { icon: RefreshCw, color: "text-teal-500", bg: "bg-teal-500/10", img: "/Images/Services/wpc-doors-riyadh-door-replacement.jpg" },
  };

  return (
    <main className="min-h-screen bg-warm-beige pb-24">
      <PageHero 
        title="خدماتنا"
        description="خدمات أبواب WPC في الرياض، من اختيار الموديل وتحديد متطلبات الطلب إلى التوريد والتركيب حسب طبيعة المشروع."
        bgImage="/Images/wpc-doors-riyadh-services-hero.png"
        breadcrumbs={[{ name: "خدماتنا", href: "/services" }]}
      />
      <div className="container mx-auto px-6 max-w-6xl pt-16">
        <div className="space-y-12">
          {services.map((service, index) => {
            const ui = serviceUI[service.id as keyof typeof serviceUI] || serviceUI["supply"];
            const IconComponent = ui.icon;
            const isEven = index % 2 === 0;
            const detail = serviceDetails[service.slug];

            return (
              <div 
                key={service.id} 
                className={`bg-white rounded-3xl overflow-hidden luxury-card flex flex-col lg:flex-row ${isEven ? '' : 'lg:flex-row-reverse'}`}
              >
                <div className="p-6 md:p-8 lg:p-12 flex-1 flex flex-col justify-center z-10">
                  <div className={`w-16 h-16 rounded-2xl ${ui.bg} flex items-center justify-center mb-6`}>
                    <IconComponent className={`w-8 h-8 ${ui.color}`} />
                  </div>
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-deep-brown mb-3 md:mb-4">{service.title}</h2>
                  <h3 className="text-base md:text-lg text-gold font-medium mb-3 md:mb-4">{service.shortDesc}</h3>
                  <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed mb-6 md:mb-8 line-clamp-3">
                    {detail.summary}
                  </p>
                  <Link 
                    href={`/services/${service.slug}`} 
                    className="inline-flex items-center text-deep-brown font-bold hover:text-gold transition-colors"
                  >
                    تفاصيل الخدمة
                    <svg className="w-5 h-5 mr-2 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                  </Link>
                </div>
                <div className="flex-1 bg-gray-100 min-h-[250px] lg:min-h-[300px] relative overflow-hidden group">
                  <Image 
                    src={service.image || ui.img}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-deep-brown/20 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
              </div>
            );
          })}
        </div>

        <section className="mt-20 rounded-3xl bg-white p-8 md:p-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-deep-brown">كيف تسير الخدمة من أول استفسار إلى تنفيذ الطلب؟</h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-700">
              تختلف تفاصيل التنفيذ من مشروع إلى آخر، لكن وضوح المعلومات في البداية يوفر وقتاً في المراحل التالية. نبدأ بفهم نوع المشروع وما إذا كان المطلوب باباً واحداً أو مجموعة أبواب، ثم نراجع الموديلات والمقاسات والتشطيبات قبل تحديد الخدمة المطلوبة.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              ["حدد الاحتياج", "اذكر نوع المكان وعدد الأبواب وصوراً مرجعية إن وجدت."],
              ["اختر الموديل", "قارن التصميم واللون والإطار والإكسسوارات مع متطلبات المشروع."],
              ["راجع التفاصيل", "نتأكد من المقاسات والكمية وموقع المشروع وخدمة التوريد أو التركيب."],
              ["رتّب التنفيذ", "تُؤكد تفاصيل الطلب والموعد قبل بدء التوريد أو التركيب."],
            ].map(([title, description], index) => (
              <article key={title} className="rounded-2xl bg-light-cream p-6">
                <span className="text-sm font-bold text-gold">0{index + 1}</span>
                <h3 className="mt-2 text-xl font-bold text-deep-brown">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-gold/15 bg-white p-8">
            <h2 className="text-2xl font-bold text-deep-brown">للمنازل والفلل</h2>
            <p className="mt-4 leading-relaxed text-gray-700">ابدأ بتوزيع الأبواب على الغرف، ثم راجع اللون والتصميم في سياق الأرضيات والجدران. من المفيد إرسال صور للمكان أو موديل قريب مما تفضله عند طلب العرض.</p>
            <Link href="/products" className="mt-5 inline-block font-bold text-gold hover:text-deep-brown">استعرض كتالوج الأبواب</Link>
          </article>
          <article className="rounded-3xl border border-gold/15 bg-white p-8">
            <h2 className="text-2xl font-bold text-deep-brown">للمشاريع متعددة الأبواب</h2>
            <p className="mt-4 leading-relaxed text-gray-700">تحتاج المشاريع إلى قائمة واضحة بالعدد والمقاسات والتصنيفات المطلوبة، إضافة إلى جدول الموقع ونطاق العمل. صفحة المشاريع تساعدك على ترتيب النقاط التي ينبغي مشاركتها معنا.</p>
            <Link href="/projects" className="mt-5 inline-block font-bold text-gold hover:text-deep-brown">اطلع على نماذج المشاريع</Link>
          </article>
        </section>

        <RelatedLinks
          className="mt-10"
          title="صفحات تساعدك على تحديد الخدمة"
          description="انتقل إلى الكتالوج أو دليل الاختيار أو صفحة التواصل عندما تكون مستعداً لمشاركة تفاصيل مشروعك."
          links={[
            { href: "/products", title: "المنتجات", description: "اختر الموديل الذي تريد مناقشته." },
            { href: "/faq", title: "الأسئلة الشائعة", description: "إجابات عملية قبل طلب العرض." },
            { href: "/contact", title: "تواصل معنا", description: "أرسل تفاصيل الموقع والكمية والمقاسات." },
          ]}
        />
      </div>
    </main>
  );
}
