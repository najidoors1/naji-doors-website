import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/blog";
import PageHero from "@/components/ui/PageHero";
import { Calendar, User, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "المقالات والمدونة | أبواب WPC ناجي دورز",
  description: "نصائح، أخبار، ومقالات عن أبواب WPC وطرق اختيارها وصيانتها في السعودية.",
};

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen bg-warm-beige pb-24">
      <PageHero 
        title="المدونة"
        description="كل ما تحتاج معرفته عن أبواب WPC، ديكورات المنازل الحديثة، ونصائح الخبراء."
        bgImage="/Images/Products Hero Background.png"
        breadcrumbs={[{ name: "المقالات", href: "/blog" }]}
      />
      
      <div className="container mx-auto px-6 pt-16">
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
                <div className="p-8 flex flex-col flex-grow">
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
      </div>
    </main>
  );
}
