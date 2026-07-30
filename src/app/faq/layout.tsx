import { Metadata } from "next";

export const metadata: Metadata = {
  title: "الأسئلة الشائعة | أبواب WPC ناجي دورز",
  description: "إجابات وافية لأكثر الأسئلة التي تصلنا حول أبواب WPC، أسعارها، مواصفاتها، وخدمات التوريد والتركيب في الرياض.",
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
