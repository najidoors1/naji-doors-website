import type { Metadata } from "next";
import { El_Messiri, Tajawal } from "next/font/google";
import { cookies } from "next/headers";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import "./globals.css";

const elMessiri = El_Messiri({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-elmessiri",
});

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700", "800", "900"],
  variable: "--font-tajawal",
});

export const metadata: Metadata = {
  title: "NAJI DOORS | أبواب WPC الفاخرة في الرياض",
  description: "الخيار الأول لأبواب WPC في المملكة العربية السعودية. جودة عالية، مقاومة للماء 100%، وتصاميم عصرية.",
  icons: {
    icon: "/Images/Logo/Logo.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const hasVisited = cookieStore.get("naji_has_visited")?.value === "true";

  return (
    <html lang="ar" dir="rtl">
      <body className={`${tajawal.variable} ${elMessiri.variable} font-sans antialiased text-deep-brown bg-light-cream`}>
        <Header initialHidden={!hasVisited} />
        <div className="flex flex-col min-h-screen">
          <div className="flex-grow">
            {children}
          </div>
          <Footer />
        </div>
        <FloatingWhatsApp initialHidden={!hasVisited} />
        <CustomCursor />
      </body>
    </html>
  );
}
