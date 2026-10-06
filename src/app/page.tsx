import SignatureIntro from "@/components/ui/SignatureIntro";
import HeroSection from "@/components/ui/HeroSection";
import SeoSection from "@/components/ui/SeoSection";
import HomeSections from "@/components/ui/HomeSections";
import DoorConfigurator from "@/components/ui/DoorConfigurator";
import DownloadsSection from "@/components/ui/DownloadsSection";
import InfiniteMarquee from "@/components/ui/InfiniteMarquee";
import PartnersSection from "@/components/ui/PartnersSection";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

import { cookies } from "next/headers";

export const metadata: Metadata = pageMetadata({
  title: "شركة أبواب WPC في الرياض | توريد وتركيب",
  description: "ناجي دورز لتوريد وتركيب أبواب WPC في الرياض. استعرض التصاميم للفلل والمنازل والمشاريع، واطلب عرض سعر وفق المقاس والتشطيب والتركيب المطلوب.",
  path: "/",
});

export default async function Home() {
  const cookieStore = await cookies();
  const hasVisited = cookieStore.get("naji_has_visited")?.value === "true";

  return (
    <main className="min-h-screen bg-warm-beige">
      {!hasVisited && <SignatureIntro />}
      
      {/* Hero with parallax and animations */}
      <HeroSection />

      <InfiniteMarquee />

      {/* SEO Optimized Section */}
      <SeoSection />
      
      {/* Advanced animated Bento Grid & Showcase */}
      <HomeSections />

      <DoorConfigurator />

      <PartnersSection />
      <DownloadsSection />
    </main>
  );
}
