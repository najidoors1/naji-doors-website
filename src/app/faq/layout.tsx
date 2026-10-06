import { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "أسئلة شائعة عن أبواب WPC في الرياض",
  description: "إجابات مباشرة عن أبواب WPC، استخداماتها، العوامل التي تؤثر في عرض السعر، والمعلومات اللازمة لطلب توريد وتركيب في الرياض.",
  path: "/faq",
  image: "/Images/wpc-doors-riyadh-services-hero.png",
});

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
