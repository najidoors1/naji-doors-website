import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/content";
import { CheckCircle2, ChevronRight, MessageCircle } from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: "المنتج غير موجود",
    };
  }

  return {
    title: `${product.name} | ناجي دورز`,
    description: product.description,
  };
}

export default async function ProductDetailsPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-warm-beige pt-32 pb-24">
      <div className="container mx-auto px-6">
        
        {/* Breadcrumbs */}
        <nav className="flex text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 space-x-reverse md:space-x-3">
            <li className="inline-flex items-center">
              <Link href="/" className="hover:text-deep-brown transition-colors">الرئيسية</Link>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRight className="w-4 h-4 mx-1" />
                <Link href="/products" className="hover:text-deep-brown transition-colors">المنتجات</Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <ChevronRight className="w-4 h-4 mx-1" />
                <span className="text-deep-brown font-medium">{product.id}</span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="bg-white rounded-3xl overflow-hidden luxury-card shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Product Image */}
            <div className="relative h-[500px] lg:h-[700px] bg-gradient-to-b from-gray-50 to-gray-100 luxury-card flex items-center justify-center p-8">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                className="object-contain p-4 lg:p-8 hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Product Details */}
            <div className="p-6 md:p-10 lg:p-16 flex flex-col">
              <div className="inline-block bg-gold/10 text-gold font-bold px-4 py-1 rounded-full text-sm mb-4 self-start">
                {product.category}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-deep-brown mb-2">{product.name}</h1>
              <p className="text-gray-400 text-sm mb-8 tracking-widest">{product.id}</p>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-deep-brown mb-3">الوصف</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {product.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 flex-grow">
                <div>
                  <h3 className="text-xl font-bold text-deep-brown mb-5 border-b border-gold/20 pb-2 inline-block">المواصفات والمميزات</h3>
                  <ul className="space-y-3">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5 drop-shadow-sm" />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-deep-brown mb-5 border-b border-gold/20 pb-2 inline-block">الألوان والتشطيبات</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.finishes.map((finish, idx) => (
                      <span key={idx} className="bg-warm-beige border border-gold/30 text-deep-brown px-4 py-2 rounded-lg text-sm font-bold shadow-sm hover:bg-gold hover:text-white transition-colors cursor-default">
                        {finish}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-100">
                <Link 
                  href="/contact" 
                  className="flex-1 bg-deep-brown hover:bg-black text-white text-center py-4 rounded-xl font-bold transition-colors"
                >
                  طلب تسعيرة
                </Link>
                <Link 
                  href="https://wa.me/966575650214" 
                  target="_blank"
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white flex items-center justify-center gap-2 py-4 rounded-xl font-bold transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  واتساب
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": product.name,
            "image": [
              `https://najidoor.com${product.image}`
            ],
            "description": product.description,
            "sku": product.id,
            "category": product.category,
            "brand": {
              "@type": "Brand",
              "name": "Naji Doors"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "89"
            },
            "offers": {
              "@type": "Offer",
              "priceCurrency": "SAR",
              "availability": "https://schema.org/InStock",
              "seller": {
                "@type": "Organization",
                "name": "مؤسسة ناجي دورز للأبواب"
              }
            }
          })
        }}
      />
    </main>
  );
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}
