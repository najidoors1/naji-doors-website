import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { ShieldCheck, Target, Eye, Award, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import RelatedLinks from "@/components/ui/RelatedLinks";

export const metadata: Metadata = pageMetadata({
  title: "عن ناجي دورز | أبواب WPC في الرياض",
  description: "تعرف على ناجي دورز وخدماتها في توريد وتركيب أبواب WPC في الرياض للمنازل والفلل والمشاريع.",
  path: "/about-us",
  image: "/Images/wpc-doors-riyadh-about-hero.png",
});

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-warm-beige pb-24">
      <PageHero 
        title="من نحن"
        description="ناجي دورز تقدم حلول أبواب WPC للمنازل والفلل والمشاريع في الرياض، من اختيار التصميم إلى التوريد والتركيب."
        bgImage="/Images/wpc-doors-riyadh-about-hero.png"
        breadcrumbs={[{ name: "من نحن", href: "/about-us" }]}
      />
      
      <div className="container mx-auto px-6 max-w-6xl pt-16">
        
        {/* Company Overview Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative h-[600px] rounded-3xl overflow-hidden luxury-card">
            <Image 
              src="/Images/Services/wpc-doors-riyadh-service-15.jpg" 
              alt="مشاريع ناجي دورز للأبواب" 
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-10 left-10 right-10">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                <p className="text-white text-xl font-bold mb-2">اختيار أوضح للأبواب الداخلية</p>
                <p className="text-gray-200">من مقارنة التصميم إلى مراجعة تفاصيل الطلب قبل التنفيذ.</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-deep-brown mb-6">قصتنا</h2>
              <div className="w-20 h-1.5 bg-gold mb-6 rounded-full"></div>
              <p className="text-gray-600 text-lg leading-relaxed">
                ناجي دورز تعمل في الرياض في مجال أبواب WPC للمنازل والفلل والمشاريع. نركز على أن تكون رحلة الاختيار مفهومة: يرى العميل الموديلات، ويحدد ما يلائم تصميم المكان، ثم يشارك المقاسات ونطاق الخدمة المطلوب قبل اعتماد العرض.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mt-4">
                نعرض موديلات متعددة من أبواب WPC وخدمات للتوريد والتركيب والتصميم الخاص والمشاريع. نساعد العميل على مطابقة التصميم والقياسات ومتطلبات الموقع قبل تقديم العرض.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-200">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold text-gold mb-2">الرياض</h3>
                <p className="text-deep-brown font-medium">نطاق الخدمة المعلن</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold text-gold mb-2">WPC</h3>
                <p className="text-deep-brown font-medium">أبواب داخلية وخيارات تصميم</p>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="bg-white rounded-3xl p-6 md:p-10 luxury-card text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-bl-[100px] -z-10 transition-transform group-hover:scale-150 duration-700"></div>
            <Eye className="w-16 h-16 text-gold mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-deep-brown mb-6">رؤيتنا</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              أن يكون اختيار الباب الداخلي خطوة منظمة وواضحة، من الفكرة الأولى حتى تحديد الموديل والتشطيب ومتطلبات الموقع.
            </p>
          </div>
          
          <div className="bg-white rounded-3xl p-6 md:p-10 luxury-card text-center relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-32 h-32 bg-deep-brown/5 rounded-br-[100px] -z-10 transition-transform group-hover:scale-150 duration-700"></div>
            <Target className="w-16 h-16 text-deep-brown mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-deep-brown mb-6">رسالتنا</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              تقديم تجربة واضحة تبدأ بفهم متطلبات العميل واختيار التصميم المناسب، مع توضيح التفاصيل اللازمة للتوريد والتركيب وخدمة ما بعد البيع.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-deep-brown mb-6">قيمنا الأساسية</h2>
            <div className="w-24 h-1.5 bg-gold mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm text-center border-b-4 border-gold hover:-translate-y-2 transition-transform">
              <Award className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold text-deep-brown mb-3">الجودة أولاً</h3>
              <p className="text-gray-600">نراجع مواصفات الطلب وما يرتبط بها من إطار وتشطيب وإكسسوارات قبل تنفيذ المشروع.</p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm text-center border-b-4 border-deep-brown hover:-translate-y-2 transition-transform">
              <ShieldCheck className="w-12 h-12 text-deep-brown mx-auto mb-4" />
              <h3 className="text-xl font-bold text-deep-brown mb-3">الشفافية والمصداقية</h3>
              <p className="text-gray-600">نوضح المعلومات التي نحتاجها لتجهيز عرض يرتبط بالمقاسات والكمية وموقع المشروع ونطاق الخدمة.</p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm text-center border-b-4 border-gold hover:-translate-y-2 transition-transform">
              <CheckCircle2 className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold text-deep-brown mb-3">التطوير المستمر</h3>
              <p className="text-gray-600">نحدّث طريقة عرض الموديلات والخدمات لتسهيل المقارنة واتخاذ القرار قبل الطلب.</p>
            </div>
          </div>
        </div>

        <section className="mb-24 rounded-3xl bg-white p-8 md:p-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-deep-brown">كيف نعمل معك؟</h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-700">تتغير التفاصيل بين منزل صغير ومشروع متعدد الأبواب، لكن المعلومات الأساسية واحدة. عندما تكون هذه المعلومات واضحة، يصبح اختيار الباب والخدمة أكثر ترتيباً ويسهل متابعة التنفيذ.</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl bg-light-cream p-7">
              <h3 className="text-xl font-bold text-deep-brown">نفهم المكان</h3>
              <p className="mt-3 leading-relaxed text-gray-600">نبدأ بنوع المشروع، وعدد الأبواب، والمقاسات المتاحة، والصور أو التصميمات المرجعية.</p>
            </article>
            <article className="rounded-2xl bg-light-cream p-7">
              <h3 className="text-xl font-bold text-deep-brown">نرتب الاختيار</h3>
              <p className="mt-3 leading-relaxed text-gray-600">نربط الموديل والتشطيب والإطار والإكسسوارات بالاستخدام الفعلي وتفاصيل الديكور.</p>
            </article>
            <article className="rounded-2xl bg-light-cream p-7">
              <h3 className="text-xl font-bold text-deep-brown">نحدد الخدمة</h3>
              <p className="mt-3 leading-relaxed text-gray-600">نناقش التوريد أو التركيب وموقع المشروع قبل تأكيد تفاصيل الطلب والموعد.</p>
            </article>
          </div>
        </section>

        <RelatedLinks
          className="mb-24"
          title="استكشف ما نقدمه"
          description="تعرف على الموديلات والخدمات والمشاريع، ثم تواصل معنا عندما تصبح تفاصيل مشروعك جاهزة."
          links={[
            { href: "/products", title: "أبواب WPC", description: "استعرض الموديلات والتشطيبات المتاحة." },
            { href: "/services", title: "خدمات ناجي دورز", description: "تعرف على التوريد والتركيب وخدمات المشاريع." },
            { href: "/projects", title: "المشاريع", description: "راجع أنواع المشاريع التي نعرضها في الموقع." },
          ]}
        />

        {/* Call to Action */}
        <div className="bg-gradient-to-br from-deep-brown to-black rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/Images/wpc-doors-riyadh-home-hero.png')] bg-cover opacity-10 mix-blend-overlay"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">ابدأ تجهيز طلبك</h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              أرسل المقاسات والكمية وصور التصميم إن وجدت، وحدد إن كان المشروع يحتاج توريداً أو تركيباً.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/downloads" 
                className="bg-transparent border-2 border-white hover:bg-white hover:text-deep-brown text-white px-8 py-4 rounded-full font-bold transition-colors"
              >
                تحميل الملف التعريفي
              </Link>
              <Link 
                href="/contact" 
                className="bg-gold text-deep-brown hover:bg-white hover:text-deep-brown px-8 py-4 rounded-full font-bold transition-colors"
              >
                تواصل معنا الآن
              </Link>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
