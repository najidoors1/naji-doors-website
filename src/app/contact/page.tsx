import type { Metadata } from "next";
import QuoteForm from "@/components/ui/QuoteForm";
import PageHero from "@/components/ui/PageHero";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "تواصل معنا | وسائل التواصل - ناجي دورز",
  description: "تواصل مع مؤسسة ناجي دورز في الرياض عبر الواتساب، سناب شات، الاتصال المباشر، أو بزيارة معرضنا.",
};

const socialLinks = [
  {
    id: "whatsapp",
    name: "واتساب",
    handle: "057 565 0214",
    url: "https://wa.me/966575650214?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%A3%D8%A8%D9%88%D8%A7%D8%A8%20WPC%20%D9%85%D9%86%20%D9%86%D8%A7%D8%AC%D9%8A%20%D8%AF%D9%88%D8%B1%D8%B2",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    bg: "bg-green-50",
    text: "text-green-600",
    hoverBg: "hover:bg-green-600",
    hoverText: "group-hover:text-white"
  },
  {
    id: "snapchat",
    name: "سناب شات",
    handle: "@naji.doors",
    url: "https://snapchat.com/t/69tFUvFj",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.012 0c-1.397 0-2.673.208-3.791.616-2.073.743-3.082 2.164-3.528 3.518-.465 1.405-.487 3.018-.506 4.316-.01.62-.019 1.182-.072 1.62-.078.65-.259 1.137-.585 1.576-.41.56-.99 1.01-1.748 1.341-.58.256-1.168.463-1.782.632v1.543l.896.398c1.32.585 2.155 1.353 2.13 2.503-.02 1.025-.572 1.688-1.077 2.274-.298.347-.565.658-.691 1.06-.098.318-.088.756.234 1.185.347.464 1.021.781 1.875 1.055.617.199 1.393.369 2.296.505a41.344 41.344 0 0 0 4.103.202 44.593 44.593 0 0 0 4.298-.204c.883-.133 1.644-.298 2.247-.492.836-.271 1.498-.585 1.839-1.042.316-.424.32-.861.22-1.173-.131-.408-.403-.726-.707-1.08-.51-.595-1.066-1.246-1.084-2.261-.02-1.127.794-1.895 2.106-2.48l.904-.403v-1.547c-.595-.164-1.182-.375-1.758-.636-.757-.34-1.343-.797-1.75-1.365-.333-.464-.51-1.002-.581-1.635-.045-.436-.05-1.001-.057-1.623-.016-1.299-.036-2.915-.502-4.323-.448-1.357-1.458-2.78-3.535-3.524-1.116-.41-2.39-.62-3.784-.62z"/>
      </svg>
    ),
    bg: "bg-yellow-50",
    text: "text-yellow-500",
    hoverBg: "hover:bg-[#FFFC00]",
    hoverText: "group-hover:text-black"
  },
  {
    id: "instagram",
    name: "انستقرام",
    handle: "@najidoors",
    url: "https://www.instagram.com/najidoors?igsh=b2RleTl6cmN6MmIw&utm_source=qr",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
    ),
    bg: "bg-pink-50",
    text: "text-pink-600",
    hoverBg: "hover:bg-[#E1306C]",
    hoverText: "group-hover:text-white"
  },
  {
    id: "tiktok",
    name: "تيك توك",
    handle: "@naji.doors",
    url: "https://www.tiktok.com/@naji.doors?_r=1&_t=ZS-98FYpT7RIfP",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
    ),
    bg: "bg-gray-100",
    text: "text-gray-900",
    hoverBg: "hover:bg-black",
    hoverText: "group-hover:text-white"
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-warm-beige pb-24">
      <PageHero 
        title="تواصل معنا"
        description="نحن هنا للاستماع إليك. تواصل معنا عبر قنواتنا المتعددة أو قم بزيارة معرضنا في الرياض للتعرف على منتجاتنا عن قرب."
        bgImage="/Images/wpc-doors-riyadh-home-hero.png"
        breadcrumbs={[{ name: "تواصل معنا", href: "/contact" }]}
      />

      <div className="container mx-auto px-6 max-w-7xl pt-16 -mt-8">
        
        {/* Social Media Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16 relative z-10">
          {socialLinks.map((social) => (
            <a 
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className={`group flex flex-col items-center justify-center p-6 md:p-8 rounded-3xl bg-white luxury-card transition-all duration-300 ${social.hoverBg} hover:-translate-y-2`}
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-colors duration-300 ${social.bg} ${social.text} ${social.hoverText} group-hover:bg-transparent`}>
                {social.icon}
              </div>
              <h3 className={`font-bold text-lg mb-1 text-deep-brown ${social.hoverText} transition-colors duration-300`}>{social.name}</h3>
              <p className={`text-sm text-gray-500 ${social.hoverText} transition-colors duration-300`} dir="ltr">{social.handle}</p>
            </a>
          ))}
        </div>

        {/* Info & Form Split */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Left Column: Direct Info & Map */}
          <div className="w-full lg:w-5/12 space-y-8">
            
            <div className="bg-white p-8 rounded-3xl luxury-card relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
              
              <h2 className="text-2xl font-bold text-deep-brown mb-8 relative z-10">معلومات الاتصال المباشر</h2>
              
              <div className="space-y-8 relative z-10">
                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 rounded-2xl bg-light-cream border border-gold/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold group-hover:text-white transition-colors duration-300 text-gold">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-deep-brown mb-2 text-lg">الهاتف المحمول</h3>
                    <a href="tel:+966575650214" className="text-gray-600 hover:text-gold transition-colors text-lg" dir="ltr">+966 57 565 0214</a>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 rounded-2xl bg-light-cream border border-gold/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold group-hover:text-white transition-colors duration-300 text-gold">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-deep-brown mb-2 text-lg">البريد الإلكتروني</h3>
                    <a href="mailto:najidoors.ksa@gmail.com" className="text-gray-600 hover:text-gold transition-colors text-lg">najidoors.ksa@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 rounded-2xl bg-light-cream border border-gold/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold group-hover:text-white transition-colors duration-300 text-gold">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-deep-brown mb-2 text-lg">المعرض الرئيسي</h3>
                    <p className="text-gray-600 leading-relaxed">الرياض، المملكة العربية السعودية</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 rounded-2xl bg-light-cream border border-gold/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold group-hover:text-white transition-colors duration-300 text-gold">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-deep-brown mb-2 text-lg">ساعات العمل</h3>
                    <p className="text-gray-600 leading-relaxed">السبت - الخميس: 9:00 صباحاً - 10:00 مساءً<br/>الجمعة: مغلق</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Embedded */}
            <div className="h-[350px] rounded-3xl overflow-hidden luxury-card border border-gold/10 bg-white relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115981.9366657904!2d46.70296711953282!3d24.713551694294436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1714571982991!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale group-hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </div>
          </div>

          {/* Right Column: Quote Form */}
          <div className="w-full lg:w-7/12">
             <QuoteForm />
          </div>

        </div>
      </div>
    </main>
  );
}
