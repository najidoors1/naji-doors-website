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
            <Link href="/" className="inline-block relative w-56 h-20">
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
                  <p>najidoors.ksa@gmail.com</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-right">
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
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.012 0c-1.397 0-2.673.208-3.791.616-2.073.743-3.082 2.164-3.528 3.518-.465 1.405-.487 3.018-.506 4.316-.01.62-.019 1.182-.072 1.62-.078.65-.259 1.137-.585 1.576-.41.56-.99 1.01-1.748 1.341-.58.256-1.168.463-1.782.632v1.543l.896.398c1.32.585 2.155 1.353 2.13 2.503-.02 1.025-.572 1.688-1.077 2.274-.298.347-.565.658-.691 1.06-.098.318-.088.756.234 1.185.347.464 1.021.781 1.875 1.055.617.199 1.393.369 2.296.505a41.344 41.344 0 0 0 4.103.202 44.593 44.593 0 0 0 4.298-.204c.883-.133 1.644-.298 2.247-.492.836-.271 1.498-.585 1.839-1.042.316-.424.32-.861.22-1.173-.131-.408-.403-.726-.707-1.08-.51-.595-1.066-1.246-1.084-2.261-.02-1.127.794-1.895 2.106-2.48l.904-.403v-1.547c-.595-.164-1.182-.375-1.758-.636-.757-.34-1.343-.797-1.75-1.365-.333-.464-.51-1.002-.581-1.635-.045-.436-.05-1.001-.057-1.623-.016-1.299-.036-2.915-.502-4.323-.448-1.357-1.458-2.78-3.535-3.524-1.116-.41-2.39-.62-3.784-.62z"/></svg>
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
