import type { Metadata } from "next";
import { companyData } from "@/data/content";
import { Droplet, VolumeX, Bug, Paintbrush, Leaf } from "lucide-react";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "مميزات أبواب WPC | ناجي دورز",
  description: "اكتشف مميزات أبواب WPC من ناجي دورز. أبواب مقاومة للماء، عازلة للصوت، ومضادة للنمل الأبيض، مصممة خصيصاً للبيئة السعودية.",
};

export default function AdvantagesPage() {
  const advantageIcons = [Droplet, VolumeX, Bug, Paintbrush, Leaf];

  return (
    <main className="min-h-screen bg-warm-beige pb-24">
      <PageHero 
        title="لماذا أبواب WPC؟"
        description="تعرف على التكنولوجيا المتطورة وراء أبواب WPC (مركب الخشب والبلاستيك) التي تجعلها الخيار الأمثل لمناخ المملكة العربية السعودية القاسي."
        bgImage="/Images/Home Hero Background.png"
        breadcrumbs={[{ name: "المميزات", href: "/advantages" }]}
      />
      <div className="container mx-auto px-6 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companyData.advantages.map((advantage, index) => {
            const Icon = advantageIcons[index % advantageIcons.length];
            return (
              <div key={index} className="bg-white p-8 rounded-2xl luxury-card text-center group hover:bg-deep-brown transition-colors duration-300">
                <div className="w-20 h-20 mx-auto bg-warm-beige rounded-full flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                  <Icon className="w-10 h-10 text-gold group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-deep-brown mb-4 group-hover:text-gold transition-colors">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-300 transition-colors leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-20 bg-deep-brown rounded-3xl p-12 text-center relative overflow-hidden">
           <div className="absolute inset-0 bg-gold/10 opacity-50 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/20 via-transparent to-transparent"></div>
           <div className="relative z-10">
             <h2 className="text-3xl font-bold text-white mb-6">مستعد لترقية أبواب مشروعك؟</h2>
             <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
               فريقنا مستعد لتقديم الاستشارة المجانية ومساعدتك في اختيار التصميم المناسب.
             </p>
             <a href="/contact" className="inline-block bg-gold hover:bg-yellow-600 text-deep-brown font-bold py-4 px-10 rounded-full transition-transform hover:scale-105 shadow-lg">
               اطلب استشارة مجانية
             </a>
           </div>
        </div>
      </div>
    </main>
  );
}
