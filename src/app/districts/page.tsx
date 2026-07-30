import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { districts } from "@/data/districts";
import PageHero from "@/components/ui/PageHero";
import { MapPin, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "مناطق تغطية ناجي دورز في الرياض",
  description: "اكتشف خدمات توريد وتركيب أبواب WPC في أرقى أحياء ومناطق الرياض.",
};

export default function DistrictsIndexPage() {
  return (
    <main className="min-h-screen bg-warm-beige pb-24">
      <PageHero 
        title="مناطق التغطية بالرياض"
        description="نغطي كافة أحياء الرياض بخدمات توريد وتركيب أبواب WPC بأعلى معايير الجودة."
        bgImage="/Images/districts Hero Background.png"
        breadcrumbs={[{ name: "مناطق التغطية", href: "/districts" }]}
      />
      
      <div className="container mx-auto px-6 pt-16">
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
                  <span className="text-sm">{district.projectsCount}+ مشروع</span>
                  <ArrowLeft className="w-5 h-5 transform group-hover:-translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
