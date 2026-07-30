import SignatureIntro from "@/components/ui/SignatureIntro";
import HeroSection from "@/components/ui/HeroSection";
import SeoSection from "@/components/ui/SeoSection";
import HomeSections from "@/components/ui/HomeSections";
import DoorConfigurator from "@/components/ui/DoorConfigurator";
import TestimonialsCarousel from "@/components/ui/TestimonialsCarousel";
import DownloadsSection from "@/components/ui/DownloadsSection";

import { cookies } from "next/headers";

export default async function Home() {
  const cookieStore = await cookies();
  const hasVisited = cookieStore.get("naji_has_visited")?.value === "true";

  return (
    <main className="min-h-screen bg-warm-beige">
      {!hasVisited && <SignatureIntro />}
      
      {/* Hero with parallax and animations */}
      <HeroSection />

      {/* SEO Optimized Section */}
      <SeoSection />
      
      {/* Advanced animated Bento Grid & Showcase */}
      <HomeSections />

      <DoorConfigurator />

      {/* Testimonials Section */}
      <section className="py-24 bg-light-cream relative border-t border-gray-200/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-deep-brown mb-4">
              قالوا عنا
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              ثقة عملائنا في الرياض هي أغلى ما نملك. اكتشف تجاربهم مع أبواب ناجي دورز.
            </p>
          </div>
          
          <div className="bg-white py-16">
            <TestimonialsCarousel />
          </div>
        </div>
      </section>

      <DownloadsSection />
    </main>
  );
}
