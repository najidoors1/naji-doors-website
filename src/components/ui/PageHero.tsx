"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
  title: string;
  description: string;
  bgImage: string;
  breadcrumbs: { name: string; href: string }[];
}

export default function PageHero({ title, description, bgImage, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative h-[65vh] min-h-[500px] w-full flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt={title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-deep-brown/80 mix-blend-multiply" />
        
        {/* Bottom Gradient Fade to match page background (bg-warm-beige is #f5f5dc usually, but let's just fade to transparent/base color) */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-warm-beige to-transparent" />
      </div>

      <div className="container relative z-30 mx-auto px-6 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Breadcrumbs */}
          <nav className="flex items-center justify-center text-sm text-gold mb-6 font-medium bg-black/20 px-4 py-2 rounded-full backdrop-blur-sm w-fit mx-auto" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 space-x-reverse md:space-x-2">
              <li className="inline-flex items-center">
                <Link href="/" className="hover:text-white transition-colors">الرئيسية</Link>
              </li>
              {breadcrumbs.map((crumb, index) => (
                <li key={index} aria-current={index === breadcrumbs.length - 1 ? "page" : undefined}>
                  <div className="flex items-center">
                    <ChevronRight className="w-4 h-4 mx-1" />
                    {index === breadcrumbs.length - 1 ? (
                      <span className="text-white font-bold">{crumb.name}</span>
                    ) : (
                      <Link href={crumb.href} className="hover:text-white transition-colors">
                        {crumb.name}
                      </Link>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </nav>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            {title}
          </h1>
          <div className="w-24 h-1.5 bg-gold mx-auto mb-8 rounded-full shadow-lg"></div>
          <p className="text-lg md:text-2xl text-gray-200 max-w-4xl mx-auto font-light leading-relaxed drop-shadow-md">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
