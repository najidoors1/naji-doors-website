import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Image from "next/image";

export const metadata: Metadata = {
  title: "شركاء النجاح | ناجي دورز للأبواب",
  description: "نفتخر في مؤسسة ناجي دورز بالتعاون مع كبرى الشركات العقارية وشركات المقاولات في المملكة العربية السعودية لتنفيذ أرقى المشاريع.",
};

const partners = [
  { name: "سقيفة", logo: "/Images/Partners/سقيفه.jpg", description: "شركة تطوير عقاري رائدة في تقديم الحلول السكنية الفاخرة." },
  { name: "مدى", logo: "/Images/Partners/مدي.jpg", description: "شريك استراتيجي في العديد من مشاريع التطوير السكني الحديثة." },
  { name: "مساكن ركاز", logo: "/Images/Partners/مساكن ركاز.jpg", description: "من أبرز الشركات المتخصصة في بناء وتشييد الفلل العصرية." },
  { name: "وتين", logo: "/Images/Partners/وتين.jpg", description: "شريكنا في تنفيذ مشاريع سكنية متميزة بمعايير جودة عالية." },
];

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-warm-beige pb-24">
      <PageHero 
        title="شركاء النجاح"
        description="نفخر بالثقة التي منحنا إياها كبار المطورين العقاريين في المملكة، لنكون جزءاً من بناء مشاريعهم الاستثنائية."
        bgImage="/Images/wpc-doors-riyadh-home-hero.png"
        breadcrumbs={[{ name: "شركاء النجاح", href: "/partners" }]}
      />
      
      <div className="container mx-auto px-6 pt-16 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-deep-brown mb-4">
            معاً نبني <span className="text-gold">مستقبل الرياض</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            اختيار شركائنا لأبواب WPC من ناجي دورز لم يكن صدفة، بل هو نتيجة لالتزامنا الراسخ بتقديم أعلى معايير الجودة، المتانة، والجمال الذي يتطلبه السوق السعودي.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 luxury-card flex flex-col items-center text-center group border border-gray-100 hover:border-gold/30 transition-all duration-300">
              <div className="relative w-full h-32 mb-6 transition-all duration-500 hover:scale-105">
                <Image 
                  src={partner.logo} 
                  alt={partner.name} 
                  fill 
                  className="object-contain" 
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <h3 className="text-xl font-bold text-deep-brown mb-3 group-hover:text-gold transition-colors">{partner.name}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {partner.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
