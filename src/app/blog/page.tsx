import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/blog";
import PageHero from "@/components/ui/PageHero";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import RelatedLinks from "@/components/ui/RelatedLinks";

export const metadata: Metadata = pageMetadata({
  title: "دليل أبواب WPC واختيار الأبواب الداخلية",
  description: "مقالات وإجابات عملية حول أبواب WPC، وكيفية اختيار التصميم والاستخدام المناسب، والعوامل التي تراجعها قبل التوريد والتركيب.",
  path: "/blog",
  image: "/Images/wpc-doors-riyadh-products-hero.png",
});

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen bg-warm-beige pb-24">
      <PageHero 
        title="المدونة"
        description="كل ما تحتاج معرفته عن أبواب WPC، ديكورات المنازل الحديثة، ونصائح الخبراء."
        bgImage="/Images/wpc-doors-riyadh-products-hero.png"
        breadcrumbs={[{ name: "المقالات", href: "/blog" }]}
      />
      
      <div className="container mx-auto px-6 pt-16">
        <section className="mx-auto mb-12 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-deep-brown">مقالات تساعدك على ترتيب قرارك</h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-700">استخدم المقالات لفهم المصطلحات وأفكار التصميم والعناية، ثم ارجع دائماً إلى مواصفات الموديل ومتطلبات موقعك قبل اتخاذ قرار الشراء أو التركيب.</p>
        </section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-3xl overflow-hidden luxury-card flex flex-col group cursor-pointer">
              <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image 
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-deep-brown/20 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                    <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
                  </div>
                  <h2 className="text-xl font-bold text-deep-brown mb-3 group-hover:text-gold transition-colors leading-relaxed">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="inline-flex items-center text-gold font-bold mt-auto group-hover:text-deep-brown transition-colors">
                    اقرأ المزيد
                    <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <RelatedLinks
          className="mt-16"
          title="حوّل القراءة إلى خطوة عملية"
          description="بعد قراءة الدليل، استعرض الموديلات والخدمات أو أرسل تفاصيل مشروعك للحصول على متابعة مناسبة."
          links={[
            { href: "/advantages", title: "دليل اختيار أبواب WPC", description: "راجع العناصر الأساسية التي ينبغي مقارنتها." },
            { href: "/products", title: "كتالوج الأبواب", description: "شاهد الموديلات والتشطيبات المعروضة." },
            { href: "/contact", title: "طلب عرض سعر", description: "شارك المقاسات والكمية والتصميم المطلوب." },
          ]}
        />
      </div>
    </main>
  );
}
