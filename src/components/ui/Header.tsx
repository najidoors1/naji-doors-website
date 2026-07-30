"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Header({ initialHidden = false }: { initialHidden?: boolean }) {
  const [isHidden, setIsHidden] = useState(initialHidden);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const shouldBeSolid = isScrolled || !isHome;

  useEffect(() => {
    if (initialHidden) {
      const timer = setTimeout(() => {
        setIsHidden(false);
      }, 4500);
      return () => clearTimeout(timer);
    }
  }, [initialHidden]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "الرئيسية", href: "/" },
    { name: "من نحن", href: "/about-us" },
    { name: "المنتجات", href: "/products" },
    { name: "خدماتنا", href: "/services" },
    { name: "المشاريع", href: "/projects" },
    { name: "المميزات", href: "/advantages" },
    { name: "الأسئلة الشائعة", href: "/faq" },
    { name: "المقالات", href: "/blog" },
    { name: "مناطق التغطية", href: "/districts" },
  ];

  if (isHidden) return null;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          shouldBeSolid 
            ? "bg-white/95 backdrop-blur-md shadow-md py-4 border-b border-gray-100" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 z-50 group">
              <div className="relative w-40 h-14 transition-transform group-hover:scale-105">
                <Image
                  src="/Images/Logo/Logo.png"
                  alt="مؤسسة ناجي دورز للأبواب"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link 
                    key={link.name} 
                    href={link.href}
                    className={`font-medium transition-colors hover:text-gold ${
                      isActive 
                        ? "text-gold" 
                        : shouldBeSolid ? "text-deep-brown" : "text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* CTA Button (Desktop) */}
            <div className="hidden lg:block">
              <Link 
                href="/contact" 
                className={`px-6 py-2.5 rounded-full font-bold transition-all shadow-md hover:shadow-lg ${
                  shouldBeSolid
                    ? "bg-deep-brown text-white hover:bg-gold hover:text-deep-brown"
                    : "bg-gold text-deep-brown hover:bg-white"
                }`}
              >
                طلب تسعيرة
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className={`w-8 h-8 ${shouldBeSolid || isMobileMenuOpen ? "text-deep-brown" : "text-white"}`} />
              ) : (
                <Menu className={`w-8 h-8 ${shouldBeSolid ? "text-deep-brown" : "text-white"}`} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white pt-24 pb-8 px-6 lg:hidden flex flex-col h-screen overflow-y-auto"
          >
            <nav className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link 
                    key={link.name} 
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-2xl font-bold border-b border-gray-100 pb-4 ${
                      isActive ? "text-gold" : "text-deep-brown"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Link 
                href="/contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-8 bg-deep-brown text-white py-4 rounded-full text-xl font-bold"
              >
                طلب تسعيرة
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
