import type { Metadata } from "next";
import { El_Messiri, Tajawal } from "next/font/google";
import { cookies } from "next/headers";
import SmoothScroll from "@/components/ui/SmoothScroll";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import MobileBottomNav from "@/components/ui/MobileBottomNav";
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
  metadataBase: new URL("https://najidoor.com"),
  title: {
    default: "ناجي دورز | أبواب WPC في الرياض",
    template: "%s | ناجي دورز",
  },
  description: "ناجي دورز لعرض وتوريد وتركيب أبواب WPC في الرياض للمنازل والفلل والمشاريع. استعرض الموديلات والخدمات واطلب عرض سعر حسب احتياجك.",
  keywords: [
    "أبواب WPC",
    "أبواب WPC الرياض",
    "ناجي دورز",
    "أبواب مقاومة للماء",
    "أبواب داخلية فاخرة",
    "أبواب خشب بلاستيك",
    "توريد أبواب الرياض",
    "تركيب أبواب WPC",
    "أبواب حمامات مقاومة للماء",
    "أبواب فلل الرياض",
    "أفضل أبواب WPC السعودية",
    "أبواب عازلة للصوت",
    "أبواب ضد النمل الأبيض",
    "WPC doors Riyadh",
    "Naji Doors",
  ],
  authors: [{ name: "مؤسسة ناجي دورز", url: "https://najidoor.com" }],
  creator: "مؤسسة ناجي دورز",
  publisher: "مؤسسة ناجي دورز",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/Images/Logo/Logo.png",
    apple: "/Images/Logo/Logo.png",
  },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: "https://najidoor.com",
    siteName: "ناجي دورز | NAJI DOORS",
    title: "ناجي دورز | أبواب WPC في الرياض",
    description: "توريد وتركيب أبواب WPC في الرياض للمنازل والفلل والمشاريع.",
    images: [
      {
        url: "/Images/Logo/Logo.png",
        width: 1200,
        height: 630,
        alt: "ناجي دورز - أبواب WPC في الرياض",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ناجي دورز | أبواب WPC في الرياض",
    description: "توريد وتركيب أبواب WPC في الرياض للمنازل والفلل والمشاريع.",
    images: ["/Images/Logo/Logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18144160950"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'AW-18144160950');
            `,
          }}
        />
      </head>
      <body className={`${tajawal.variable} ${elMessiri.variable} font-sans antialiased text-deep-brown bg-light-cream`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://najidoor.com/#organization",
                  name: "مؤسسة ناجي دورز للأبواب",
                  alternateName: "NAJI DOORS",
                  url: "https://najidoor.com",
                  logo: "https://najidoor.com/Images/Logo/Logo.png",
                  image: "https://najidoor.com/Images/wpc-doors-riyadh-home-hero.png",
                  description: "توريد وتركيب أبواب WPC في الرياض للمنازل والفلل والمشاريع.",
                  email: "najidoors.ksa@gmail.com",
                  telephone: "+966575650214",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "الرياض",
                    addressCountry: "SA",
                  },
                  areaServed: {
                    "@type": "City",
                    name: "الرياض",
                  },
                  sameAs: ["https://wa.me/966575650214"],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://najidoor.com/#website",
                  url: "https://najidoor.com",
                  name: "ناجي دورز",
                  inLanguage: "ar-SA",
                  publisher: { "@id": "https://najidoor.com/#organization" },
                },
              ],
            }),
          }}
        />
        <Header initialHidden={!hasVisited} />
        <SmoothScroll>
          <div className="flex flex-col min-h-screen">
            <div className="flex-grow">
              {children}
            </div>
            <Footer />
          </div>
        </SmoothScroll>
        <FloatingWhatsApp initialHidden={!hasVisited} />
        <MobileBottomNav />
      </body>
    </html>
  );
}
