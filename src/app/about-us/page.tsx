import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { ShieldCheck, Target, Eye, Award, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "من نحن | مؤسسة ناجي دورز للأبواب",
  description: "تعرف على مؤسسة ناجي دورز الرائدة في استيراد وتوريد وتركيب أبواب WPC في الرياض. جودة، التزام، واحترافية.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-warm-beige pb-24">
      <PageHero 
        title="من نحن"
        description="نحن مؤسسة ناجي دورز، الاسم الأول والوجهة الموثوقة لأبواب الـ WPC العصرية في المملكة العربية السعودية، نسعى لنرتقي بمفهوم الأبواب الداخلية نحو آفاق جديدة من الجودة والفخامة."
        bgImage="/Images/About Us Hero Back Ground.png"
        breadcrumbs={[{ name: "من نحن", href: "/about-us" }]}
      />
      
      <div className="container mx-auto px-6 max-w-6xl pt-16">
        
        {/* Company Overview Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative h-[600px] rounded-3xl overflow-hidden luxury-card">
            <Image 
              src="/Images/Services/IMG-20251127-WA0224.jpg" 
              alt="مشاريع ناجي دورز للأبواب" 
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-10 left-10 right-10">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                <p className="text-white text-xl font-bold mb-2">تأسست بشغف</p>
                <p className="text-gray-200">لنحدث ثورة في عالم الديكور الداخلي بالمملكة.</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-deep-brown mb-6">قصتنا</h2>
              <div className="w-20 h-1.5 bg-gold mb-6 rounded-full"></div>
              <p className="text-gray-600 text-lg leading-relaxed">
                انطلقت مؤسسة ناجي دورز من مدينة الرياض لتكون استجابة حقيقية لاحتياجات السوق السعودي المتطورة في قطاع البناء والديكور. لاحظنا معاناة الكثيرين من مشاكل الأبواب الخشبية التقليدية كالتأثر بالرطوبة، التقوس، والنمل الأبيض، فكانت انطلاقتنا لتقديم البديل الأذكى والأقوى: <strong>أبواب الخشب البلاستيكي (WPC)</strong>.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mt-4">
                نفخر اليوم بأننا الخيار الأول لكبرى المشاريع السكنية والتجارية، بفضل شراكاتنا مع أفضل المصانع العالمية، وفريق عملنا المتخصص الذي يضمن التركيب بأعلى معايير الدقة والاحترافية.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-200">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-4xl font-bold text-gold mb-2">+10</h3>
                <p className="text-deep-brown font-medium">سنوات من الخبرة</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-4xl font-bold text-gold mb-2">5000+</h3>
                <p className="text-deep-brown font-medium">باب تم تركيبه بنجاح</p>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="bg-white rounded-3xl p-10 luxury-card text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-bl-[100px] -z-10 transition-transform group-hover:scale-150 duration-700"></div>
            <Eye className="w-16 h-16 text-gold mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-deep-brown mb-6">رؤيتنا</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              أن نكون الرواد في صناعة وتوريد الأبواب الداخلية في الشرق الأوسط، وأن ترتبط علامتنا التجارية "ناجي دورز" دائماً بالجودة، الابتكار، والتميز في التصميم الداخلي، مواكبين بذلك النهضة العمرانية ورؤية المملكة 2030.
            </p>
          </div>
          
          <div className="bg-white rounded-3xl p-10 luxury-card text-center relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-32 h-32 bg-deep-brown/5 rounded-br-[100px] -z-10 transition-transform group-hover:scale-150 duration-700"></div>
            <Target className="w-16 h-16 text-deep-brown mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-deep-brown mb-6">رسالتنا</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              تقديم منتجات مستدامة وصديقة للبيئة تلبي تطلعات عملائنا من حيث الجمال والمتانة، مع التزامنا التام بتقديم خدمة عملاء استثنائية وخدمات ما بعد البيع تضمن رضا العميل بنسبة 100%.
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
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center border-b-4 border-gold hover:-translate-y-2 transition-transform">
              <Award className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold text-deep-brown mb-3">الجودة أولاً</h3>
              <p className="text-gray-600">لا نساوم أبداً على جودة المواد والخامات المستخدمة في أبوابنا وإكسسواراتها.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center border-b-4 border-deep-brown hover:-translate-y-2 transition-transform">
              <ShieldCheck className="w-12 h-12 text-deep-brown mx-auto mb-4" />
              <h3 className="text-xl font-bold text-deep-brown mb-3">الشفافية والمصداقية</h3>
              <p className="text-gray-600">الوضوح التام مع العميل في المواصفات، الأسعار، ومواعيد التسليم بلا أي مفاجآت.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center border-b-4 border-gold hover:-translate-y-2 transition-transform">
              <CheckCircle2 className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold text-deep-brown mb-3">التطوير المستمر</h3>
              <p className="text-gray-600">البحث الدائم عن أحدث التقنيات والتصاميم لتوفير منتجات تسبق تطلعات السوق.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-br from-deep-brown to-black rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/Images/Home%20Hero%20Background.png')] bg-cover opacity-10 mix-blend-overlay"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">انضم إلى قائمة عملائنا المميزين</h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              سواء كنت تبني منزل أحلامك أو تدير مشروعاً تجارياً ضخماً، ناجي دورز هو الشريك الذي يمكنك الاعتماد عليه.
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
