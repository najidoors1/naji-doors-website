import type { Metadata } from "next";
import { companyData } from "@/data/content";
import Link from "next/link";
import { Settings, Truck, Wrench, PenTool, Building, RefreshCw } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Image from "next/image";

export const metadata: Metadata = {
  title: "خدماتنا | توريد وتركيب أبواب WPC ناجي دورز",
  description: "نقدم في ناجي دورز خدمات متكاملة لتوريد وتركيب أبواب WPC في الرياض، بالإضافة إلى خدمات ما بعد البيع والصيانة للمشاريع السكنية والتجارية.",
};

export default function ServicesPage() {
  const serviceUI = {
    "supply": { icon: Truck, color: "text-blue-500", bg: "bg-blue-500/10", img: "/Images/Services/IMG-20251127-WA0101.jpg" },
    "installation": { icon: Wrench, color: "text-green-500", bg: "bg-green-500/10", img: "/Images/Services/IMG-20251127-WA0104.jpg" },
    "maintenance": { icon: Settings, color: "text-orange-500", bg: "bg-orange-500/10", img: "/Images/Services/IMG-20251127-WA0114.jpg" },
    "custom-design": { icon: PenTool, color: "text-purple-500", bg: "bg-purple-500/10", img: "/Images/Services/IMG-20251127-WA0124.jpg" },
    "b2b-projects": { icon: Building, color: "text-red-500", bg: "bg-red-500/10", img: "/Images/Services/IMG-20251127-WA0151.jpg" },
    "replacement": { icon: RefreshCw, color: "text-teal-500", bg: "bg-teal-500/10", img: "/Images/Services/IMG-20251127-WA0162.jpg" },
  };

  return (
    <main className="min-h-screen bg-warm-beige pb-24">
      <PageHero 
        title="خدماتنا"
        description="نلتزم في ناجي دورز بتقديم تجربة متكاملة لعملائنا في الرياض، تبدأ من اختيار الباب المناسب وتنتهي بتركيبه وصيانته."
        bgImage="/Images/Services Hero Background.png"
        breadcrumbs={[{ name: "خدماتنا", href: "/services" }]}
      />
      <div className="container mx-auto px-6 max-w-6xl pt-16">
        <div className="space-y-12">
          {companyData.services.map((service, index) => {
            const ui = serviceUI[service.id as keyof typeof serviceUI] || serviceUI["supply"];
            const IconComponent = ui.icon;
            const isEven = index % 2 === 0;

            return (
              <div 
                key={service.id} 
                className={`bg-white rounded-3xl overflow-hidden luxury-card flex flex-col md:flex-row ${isEven ? '' : 'md:flex-row-reverse'}`}
              >
                <div className="p-8 md:p-12 flex-1 flex flex-col justify-center z-10">
                  <div className={`w-16 h-16 rounded-2xl ${ui.bg} flex items-center justify-center mb-6`}>
                    <IconComponent className={`w-8 h-8 ${ui.color}`} />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-deep-brown mb-4">{service.title}</h2>
                  <h3 className="text-lg text-gold font-medium mb-4">{service.shortDesc}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg mb-8">
                    {service.description}
                  </p>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center text-deep-brown font-bold hover:text-gold transition-colors"
                  >
                    اطلب الخدمة الآن
                    <svg className="w-5 h-5 mr-2 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                  </Link>
                </div>
                <div className="flex-1 bg-gray-100 min-h-[300px] relative overflow-hidden group">
                  <Image 
                    src={ui.img}
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
      </div>
    </main>
  );
}
