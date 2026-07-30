import type { Metadata } from "next";
import { Building2, Home as HomeIcon } from "lucide-react";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "مشاريعنا | ناجي دورز في الرياض",
  description: "اطلع على أبرز مشاريع ناجي دورز في توريد وتركيب أبواب WPC للمشاريع السكنية والتجارية في الرياض.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-warm-beige pb-24">
      <PageHero 
        title="مشاريعنا"
        description="نفتخر بكوننا الخيار الأول لكبرى المشاريع السكنية والتجارية في الرياض. تصفح أحدث مشاريعنا التي تم توريد وتركيب أبواب WPC لها."
        bgImage="/Images/Projects Hero Beckground.png"
        breadcrumbs={[{ name: "المشاريع", href: "/projects" }]}
      />
      <div className="container mx-auto px-6 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Residential Projects */}
          <div className="bg-white rounded-3xl overflow-hidden luxury-card group">
            <div className="h-64 bg-gray-200 relative overflow-hidden">
               <div className="absolute inset-0 bg-[url('/Images/Home%20Hero%20Background.png')] bg-cover bg-center group-hover:scale-110 transition-transform duration-700"></div>
               <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/90 to-transparent"></div>
               <div className="absolute bottom-6 right-6 text-white flex items-center gap-3">
                 <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center">
                   <HomeIcon className="w-6 h-6 text-deep-brown" />
                 </div>
                 <h2 className="text-2xl font-bold">المشاريع السكنية</h2>
               </div>
            </div>
            <div className="p-6 md:p-8">
              <p className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed">
                توريد وتركيب أبواب داخلية لآلاف الفلل والقصور في أرقى أحياء الرياض (الملقا، الياسمين، حطين، النرجس). نوفر حلولاً تجمع بين الخصوصية التامة والعزل الصوتي مع تصاميم تعكس ذوق أصحابها الرفيع.
              </p>
              <ul className="space-y-2 mb-8 text-sm text-gray-500 font-medium">
                <li>• فلل سكنية فاخرة</li>
                <li>• مجمعات سكنية (كمبوند)</li>
                <li>• قصور خاصة</li>
              </ul>
              <Link href="/contact" className="text-gold font-bold hover:text-deep-brown transition-colors">
                طلب تسعيرة لمشروعك السكني ←
              </Link>
            </div>
          </div>

          {/* Commercial Projects */}
          <div className="bg-white rounded-3xl overflow-hidden luxury-card group">
            <div className="h-64 bg-gray-200 relative overflow-hidden">
               <div className="absolute inset-0 bg-[url('/Images/Services%20Hero%20Background.png')] bg-cover bg-center group-hover:scale-110 transition-transform duration-700"></div>
               <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/90 to-transparent"></div>
               <div className="absolute bottom-6 right-6 text-white flex items-center gap-3">
                 <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center">
                   <Building2 className="w-6 h-6 text-deep-brown" />
                 </div>
                 <h2 className="text-2xl font-bold">المشاريع التجارية</h2>
               </div>
            </div>
            <div className="p-6 md:p-8">
              <p className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed">
                شريك موثوق للمقاولين والمطورين العقاريين في مشاريع رؤية 2030. نوفر كميات كبيرة من الأبواب المقاومة للحريق والماء بأسعار تنافسية ومواعيد توريد دقيقة للمشاريع الضخمة في الرياض.
              </p>
              <ul className="space-y-2 mb-8 text-sm text-gray-500 font-medium">
                <li>• فنادق ومنتجعات</li>
                <li>• مباني إدارية ومكاتب</li>
                <li>• مستشفيات ومراكز طبية</li>
              </ul>
              <Link href="/contact" className="text-gold font-bold hover:text-deep-brown transition-colors">
                تواصل مع قسم مبيعات المشاريع ←
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
