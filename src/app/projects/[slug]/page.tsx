import type { Metadata } from "next";
import { projectsData } from "@/data/content";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import { Calendar, MapPin, User, CheckCircle2 } from "lucide-react";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import RelatedLinks from "@/components/ui/RelatedLinks";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const project = projectsData.find((p) => p.slug === resolvedParams.slug);
  
  if (!project) {
    return {
      title: "المشروع غير موجود | ناجي دورز",
    };
  }

  return pageMetadata({
    title: project.title,
    description: project.description,
    path: `/projects/${project.slug}`,
    image: project.image,
  });
}

export default async function ProjectDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = projectsData.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-warm-beige pb-24">
      <PageHero 
        title={project.title}
        description={project.description}
        bgImage={project.image || "/Images/wpc-doors-riyadh-projects-hero.png"}
        breadcrumbs={[
          { name: "المشاريع", href: "/projects" },
          { name: project.title, href: `/projects/${project.slug}` }
        ]}
      />
      
      <div className="container mx-auto px-6 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-luxury">
              <div className="prose prose-lg prose-brown max-w-none" dangerouslySetInnerHTML={{ __html: project.content }} />
            </div>

            {/* Gallery */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-luxury">
                <h3 className="text-2xl font-bold text-deep-brown mb-8">معرض صور المشروع</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.gallery.map((img, idx) => (
                    <div key={idx} className="relative h-64 rounded-xl overflow-hidden group">
                      <Image 
                        src={img} 
                        alt={`${project.title} - صورة ${idx + 1}`} 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-500" 
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-luxury">
              <h3 className="text-xl font-bold text-deep-brown mb-6">تفاصيل المشروع</h3>
              <ul className="space-y-6">
                <li className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-light-cream rounded-full flex items-center justify-center text-gold">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">العميل</p>
                    <p className="font-bold text-deep-brown">{project.client}</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-light-cream rounded-full flex items-center justify-center text-gold">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">التاريخ</p>
                    <p className="font-bold text-deep-brown">{project.date}</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-light-cream rounded-full flex items-center justify-center text-gold">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">الموقع</p>
                    <p className="font-bold text-deep-brown">{project.location}</p>
                  </div>
                </li>
              </ul>
            </div>
            
            {project.scope && project.scope.length > 0 && (
              <div className="bg-deep-brown text-white rounded-3xl p-8 shadow-luxury">
                <h3 className="text-xl font-bold text-gold mb-6">نطاق العمل</h3>
                <ul className="space-y-4">
                  {project.scope.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-gold shrink-0" />
                      <span className="text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="text-center">
              <Link 
                href="/contact" 
                className="inline-block w-full py-4 bg-gold text-deep-brown font-bold rounded-full hover:bg-white transition-all shadow-md"
              >
                اطلب مشروعاً مماثلاً
              </Link>
            </div>
          </div>
        </div>

        <RelatedLinks
          className="mt-12"
          title="هل لديك مشروع مشابه؟"
          description="استخدم هذا النموذج كمرجع لتجهيز بيانات مشروعك، ثم انتقل إلى الموديلات والخدمات قبل طلب العرض."
          links={[
            { href: "/products", title: "اختيار الموديلات", description: "استعرض الأبواب التي تناسب اتجاه التصميم." },
            { href: "/services/b2b-projects", title: "خدمة المشاريع", description: "تعرف على قائمة البيانات المفيدة للمشاريع متعددة الأبواب." },
            { href: "/contact", title: "اطلب عرض مشروع", description: "أرسل الكمية والمقاسات والموقع ونطاق الخدمة." },
          ]}
        />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "الرئيسية", path: "/" },
              { name: "المشاريع", path: "/projects" },
              { name: project.title, path: `/projects/${project.slug}` },
            ])
          ),
        }}
      />
    </main>
  );
}
