"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          router.push("/");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);

  return (
    <main className="min-h-screen bg-warm-beige flex flex-col items-center justify-center text-center px-6">
      <div className="relative w-40 h-16 mb-8">
        <Image src="/Images/Logo/Logo.png" alt="ناجي دورز" fill className="object-contain" />
      </div>
      <h1 className="text-6xl md:text-8xl font-bold text-gold mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-bold text-deep-brown mb-4">الصفحة غير موجودة</h2>
      <p className="text-gray-600 text-lg mb-8 max-w-md">
        عذراً، الصفحة التي تبحث عنها غير متاحة. سيتم توجيهك للصفحة الرئيسية خلال <span className="text-gold font-bold">{countdown}</span> ثوانٍ.
      </p>
      <Link
        href="/"
        className="bg-deep-brown text-white px-8 py-4 rounded-full font-bold hover:bg-gold hover:text-deep-brown transition-all shadow-lg"
      >
        العودة للرئيسية الآن
      </Link>
    </main>
  );
}
