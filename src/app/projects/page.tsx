import type { Metadata } from "next";
import { Building2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import RelatedLinks from "@/components/ui/RelatedLinks";
import { pageMetadata } from "@/lib/seo";
import { projectsData } from "@/data/content";

export const metadata: Metadata = pageMetadata({
  title: "مشاريع أبواب WPC في الرياض",
  description: "اطلع على نماذج مشاريع ناجي دورز في توريد وتركيب أبواب WPC للمشاريع السكنية والتجارية في الرياض.",
  path: "/projects",
  image: "/Images/wpc-doors-riyadh-projects-hero.png",
});

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-warm-beige pb-24">
      <PageHero 
        title="مشاريعنا"
        description="تصفح نماذج مشاريع ناجي دورز التي تم فيها توريد وتركيب أبواب WPC في الرياض."
        bgImage="/Images/wpc-doors-riyadh-projects-hero.png"
        breadcrumbs={[{ name: "المشاريع", href: "/projects" }]}
      />
      <div className="container mx-auto px-6 pt-16">
        <section className="mx-auto mb-12 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-deep-brown">نماذج من طريقة التفكير في مشاريع الأبواب</h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-700">
            تعرض هذه الصفحات أنواعاً مختلفة من المشاريع لتوضيح العناصر التي تتغير من طلب إلى آخر: عدد الأبواب، أسلوب التصميم، المقاسات، تفاصيل الإكسسوارات، ونطاق التوريد أو التركيب. استخدمها كمرجع لتجهيز طلبك، لا كبديل عن مراجعة مواصفات موقعك الفعلية.
          </p>
        </section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <Link href={`/projects/${project.slug}`} key={project.id} className="bg-white rounded-3xl overflow-hidden luxury-card group block">
              <div className="h-64 bg-gray-200 relative overflow-hidden">
                <Image 
                  src={project.image || "/Images/wpc-doors-riyadh-projects-hero.png"} 
                  alt={project.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/90 to-transparent"></div>
                <div className="absolute bottom-6 right-6 text-white flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-deep-brown" />
                  </div>
                  <h2 className="text-xl font-bold">{project.title}</h2>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                <div className="flex items-center text-gold font-bold group-hover:text-deep-brown transition-colors">
                  <span>عرض تفاصيل المشروع</span>
                  <svg className="w-5 h-5 mr-2 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <section className="mt-20 grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl bg-white p-7 shadow-sm">
            <h2 className="text-xl font-bold text-deep-brown">توحيد المواصفات</h2>
            <p className="mt-3 leading-relaxed text-gray-600">في المشاريع متعددة الوحدات، تساعد قائمة واضحة بالموديلات والمقاسات على تنظيم الطلب ومراجعته قبل التنفيذ.</p>
          </article>
          <article className="rounded-2xl bg-white p-7 shadow-sm">
            <h2 className="text-xl font-bold text-deep-brown">تناسق التصميم</h2>
            <p className="mt-3 leading-relaxed text-gray-600">لا ينفصل لون الباب وإطاره عن الأرضيات والجدران والإضاءة؛ لذلك تفيد الصور المرجعية في الوصول إلى نتيجة متوازنة.</p>
          </article>
          <article className="rounded-2xl bg-white p-7 shadow-sm">
            <h2 className="text-xl font-bold text-deep-brown">وضوح نطاق الخدمة</h2>
            <p className="mt-3 leading-relaxed text-gray-600">تحديد ما يحتاجه الموقع من التوريد أو التركيب من البداية يجعل مناقشة العرض والموعد أكثر دقة.</p>
          </article>
        </section>

        <RelatedLinks
          className="mt-10"
          title="حضّر مشروعك للعرض"
          description="اربط النموذج الأقرب لمشروعك بالموديلات والخدمات المناسبة، ثم شارك البيانات الأساسية للحصول على متابعة دقيقة."
          links={[
            { href: "/products", title: "اختيار الموديلات", description: "استعرض الأبواب التي يمكن إدراجها ضمن المشروع." },
            { href: "/services/b2b-projects", title: "خدمة المشاريع", description: "تعرف على المعلومات المهمة لطلبات المشاريع." },
            { href: "/contact", title: "طلب عرض مشروع", description: "أرسل الكمية والمقاسات والموقع ونطاق الخدمة." },
          ]}
        />
      </div>
    </main>
  );
}
