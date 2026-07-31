"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, LayoutGrid, Phone, Download, MessageCircle } from "lucide-react";

export default function MobileBottomNav() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show after slight delay and only after scrolling a bit
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { icon: Home, label: "الرئيسية", href: "/" },
    { icon: LayoutGrid, label: "المنتجات", href: "/products" },
    { icon: Phone, label: "تواصل", href: "/contact" },
    { icon: Download, label: "التحميلات", href: "/downloads" },
    { icon: MessageCircle, label: "واتساب", href: "https://wa.me/966565757574", external: true },
  ];

  if (!isVisible) return null;

  return (
    <nav className="fixed bottom-4 left-4 right-4 z-50 lg:hidden">
      <div className="bg-deep-brown/85 backdrop-blur-xl rounded-2xl border border-gold/20 shadow-2xl px-2 py-2 flex items-center justify-around">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          const isWhatsApp = item.href.startsWith("https://wa.me");
          
          if (isWhatsApp) {
            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-0.5 px-3 py-2 rounded-xl transition-all text-green-400 hover:bg-green-500/20"
              >
                <Icon className="w-5 h-5" />
                <span className="text-[10px] font-medium">{item.label}</span>
              </a>
            );
          }

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex flex-col items-center gap-0.5 px-3 py-2 rounded-xl transition-all ${
                isActive
                  ? "text-gold bg-gold/15"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
