import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-[#3d2c20] to-black text-white pt-20 pb-10 overflow-hidden">
      {/* Decorative Gradient Overlay */}
      <div className="absolute inset-0 bg-[url('/Images/Home%20Hero%20Background.png')] bg-cover bg-center opacity-5 mix-blend-overlay"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="inline-block relative w-48 h-16">
              <Image
                src="/Images/Logo/Logo.png"
                alt="مؤسسة ناجي دورز للأبواب"
                fill
                className="object-contain"
              />
            </Link>
            <p className="text-gray-300 leading-relaxed font-light">
              وجهتك الأولى لأبواب WPC الفاخرة في الرياض. نجمع بين التصميم العصري والجودة الاستثنائية لنلبي تطلعات أرقى المشاريع.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 border-b border-gold/30 pb-3 inline-block">روابط سريعة</h4>
            <ul className="space-y-4 text-gray-300">
              <li><Link href="/" className="flex items-center gap-2 hover:text-gold hover:translate-x-[-4px] transition-all"><span className="w-1.5 h-1.5 bg-gold rounded-full"></span> الرئيسية</Link></li>
              <li><Link href="/about-us" className="flex items-center gap-2 hover:text-gold hover:translate-x-[-4px] transition-all"><span className="w-1.5 h-1.5 bg-gold rounded-full"></span> من نحن</Link></li>
              <li><Link href="/products" className="flex items-center gap-2 hover:text-gold hover:translate-x-[-4px] transition-all"><span className="w-1.5 h-1.5 bg-gold rounded-full"></span> المنتجات</Link></li>
              <li><Link href="/services" className="flex items-center gap-2 hover:text-gold hover:translate-x-[-4px] transition-all"><span className="w-1.5 h-1.5 bg-gold rounded-full"></span> الخدمات</Link></li>
              <li><Link href="/projects" className="flex items-center gap-2 hover:text-gold hover:translate-x-[-4px] transition-all"><span className="w-1.5 h-1.5 bg-gold rounded-full"></span> المشاريع</Link></li>
            </ul>
          </div>

          {/* Other Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 border-b border-gold/30 pb-3 inline-block">اكتشف المزيد</h4>
            <ul className="space-y-4 text-gray-300">
              <li><Link href="/blog" className="flex items-center gap-2 hover:text-gold hover:translate-x-[-4px] transition-all"><span className="w-1.5 h-1.5 bg-gold rounded-full"></span> المقالات</Link></li>
              <li><Link href="/districts" className="flex items-center gap-2 hover:text-gold hover:translate-x-[-4px] transition-all"><span className="w-1.5 h-1.5 bg-gold rounded-full"></span> مناطق التغطية بالرياض</Link></li>
              <li><Link href="/downloads" className="flex items-center gap-2 hover:text-gold hover:translate-x-[-4px] transition-all"><span className="w-1.5 h-1.5 bg-gold rounded-full"></span> التحميلات والكتالوجات</Link></li>
              <li><Link href="/advantages" className="flex items-center gap-2 hover:text-gold hover:translate-x-[-4px] transition-all"><span className="w-1.5 h-1.5 bg-gold rounded-full"></span> مميزات أبوابنا</Link></li>
              <li><Link href="/faq" className="flex items-center gap-2 hover:text-gold hover:translate-x-[-4px] transition-all"><span className="w-1.5 h-1.5 bg-gold rounded-full"></span> الأسئلة الشائعة</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-6 border-b border-gold/30 pb-3 inline-block">تواصل معنا</h4>
            <ul className="space-y-5 text-gray-300">
              <li className="flex items-start gap-4">
                <div className="bg-white/10 p-2 rounded-lg text-gold"><Phone className="w-5 h-5" /></div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">المبيعات</p>
                  <p dir="ltr" className="text-right font-medium">057 565 0214</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-white/10 p-2 rounded-lg text-gold"><MapPin className="w-5 h-5" /></div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">المعرض الرئيسي</p>
                  <p>الرياض، المملكة العربية السعودية</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-white/10 p-2 rounded-lg text-gold"><Mail className="w-5 h-5" /></div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">البريد الإلكتروني</p>
                  <p>info@najidoors.com</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} ناجي دورز للأبواب. جميع الحقوق محفوظة.
          </p>
          <div className="flex gap-4">
            {/* Social SVGs */}
            <a href="https://www.instagram.com/najidoors?igsh=b2RleTl6cmN6MmIw&utm_source=qr" target="_blank" rel="noreferrer" className="w-10 h-10 bg-white/5 hover:bg-gold hover:text-deep-brown rounded-full flex items-center justify-center transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="https://www.tiktok.com/@naji.doors?_r=1&_t=ZS-98FYpT7RIfP" target="_blank" rel="noreferrer" className="w-10 h-10 bg-white/5 hover:bg-gold hover:text-deep-brown rounded-full flex items-center justify-center transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
            </a>
            <a href="https://snapchat.com/t/69tFUvFj" target="_blank" rel="noreferrer" className="w-10 h-10 bg-white/5 hover:bg-gold hover:text-deep-brown rounded-full flex items-center justify-center transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M11.895 24c-2.457 0-4.502-.456-5.918-1.282-1.127-.655-1.597-1.428-1.875-2.02-.278-.59-.623-2.124-.623-2.124s-.044-.094-.093-.094c-.05 0-1.85 1.135-2.617 1.135-.164 0-.317-.035-.453-.102-.32-.16-.484-.525-.39-1.077.06-.345.39-.757.874-1.144.594-.476 1.442-.87 2.455-1.233.203-.072.298-.242.3-.435 0 0 .11-3.69 1.488-6.19 1.34-2.43 3.51-3.538 5.757-3.538 1.14 0 2.22.257 3.125.752 1.378.75 2.378 2.012 2.925 3.57.545 1.55.518 3.515.518 3.515.006.198.113.376.33.437.935.26 1.765.578 2.366 1.002.5.353.864.767.937 1.153.076.4-.047.74-.294.945-.27.227-.852.324-1.393.324-1.397 0-2.614-1.03-2.614-1.03-.053-.046-.118-.008-.124.032 0 0-.295 1.32-.596 2.036-.3.714-.8 1.554-1.927 2.223-1.428.846-3.483 1.31-5.968 1.31h-.032z"/></svg>
            </a>
            <a href="https://www.facebook.com/share/1DKdeGLjww/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="w-10 h-10 bg-white/5 hover:bg-gold hover:text-deep-brown rounded-full flex items-center justify-center transition-all">
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
