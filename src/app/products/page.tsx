import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/content";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "كتالوج المنتجات | أبواب WPC ناجي دورز",
  description: "استعرض تشكيلتنا الواسعة من أبواب WPC الفاخرة للفلل والمشاريع السكنية. أبواب مقاومة للماء وعازلة للصوت بتصاميم عصرية وكلاسيكية.",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-warm-beige pb-24">
      <PageHero 
        title="كتالوج المنتجات"
        description="اكتشف تشكيلة أبواب ناجي دورز التي تجمع بين الأناقة الفائقة والأداء الاستثنائي."
        bgImage="/Images/Products Hero Background.png"
        breadcrumbs={[{ name: "المنتجات", href: "/products" }]}
      />
      <div className="container mx-auto px-4 md:px-6 pt-12 md:pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.slug}`} className="group block">
              <div className="bg-white rounded-2xl overflow-hidden luxury-card h-full flex flex-col">
                <div className="relative h-64 md:h-80 w-full overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center p-6">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4 group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 right-4 bg-gold text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    {product.category}
                  </div>
                </div>
                
                <div className="p-4 md:p-6 flex flex-col flex-grow">
                  <div className="text-[10px] md:text-xs text-gold font-bold mb-1 md:mb-2 tracking-widest">{product.id}</div>
                  <h2 className="text-lg md:text-2xl font-bold text-deep-brown mb-2 md:mb-3 line-clamp-1">{product.name}</h2>
                  <p className="text-gray-600 text-xs md:text-sm line-clamp-2 mb-3 md:mb-4 flex-grow">
                    {product.description}
                  </p>
                  
                  <div className="pt-3 md:pt-4 border-t border-gray-100 flex items-center text-xs md:text-base text-deep-brown font-medium group-hover:text-gold transition-colors">
                    عرض التفاصيل
                    <svg className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
