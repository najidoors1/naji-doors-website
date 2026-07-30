import type { Metadata } from "next";
import QuoteForm from "@/components/ui/QuoteForm";
import PageHero from "@/components/ui/PageHero";
import { MapPin, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "تواصل معنا | طلب تسعيرة - ناجي دورز",
  description: "تواصل مع شركة ناجي دورز في الرياض لطلب تسعيرة لأبواب WPC أو الاستفسار عن خدمات التوريد والتركيب.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-warm-beige pb-24">
      <PageHero 
        title="تواصل معنا"
        description="فريق ناجي دورز مستعد للإجابة على جميع استفساراتكم وتقديم تسعيرة مخصصة لمشاريعكم في الرياض."
        bgImage="/Images/Home Hero Background.png"
        breadcrumbs={[{ name: "تواصل معنا", href: "/contact" }]}
      />

      <div className="container mx-auto px-6 max-w-6xl pt-16">
        <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
          {/* Contact Details & Map */}
          <div className="w-full lg:w-1/3 space-y-8">
            <div className="bg-white p-8 rounded-2xl luxury-card">
              <h2 className="text-2xl font-bold text-deep-brown mb-6">معلومات التواصل</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-bold text-deep-brown mb-1">المعرض الرئيسي</h3>
                    <p className="text-gray-600">الرياض، المملكة العربية السعودية</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-bold text-deep-brown mb-1">الهاتف المحمول</h3>
                    <p className="text-gray-600" dir="ltr">+966 57 565 0214</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-bold text-deep-brown mb-1">البريد الإلكتروني</h3>
                    <p className="text-gray-600" dir="ltr">info@najidoors.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Embedded (Riyadh) */}
            <div className="h-64 rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115981.9366657904!2d46.70296711953282!3d24.713551694294436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1714571982991!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Quote Form */}
          <div className="w-full lg:w-2/3">
            <QuoteForm />
          </div>
        </div>
      </div>
    </main>
  );
}
