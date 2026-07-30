import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import PageHero from "@/components/ui/PageHero";
import { Calendar, User, ArrowRight, Share2 } from "lucide-react";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);
  
  if (!post) {
    return { title: "المقال غير موجود" };
  }

  return {
    title: `${post.title} | مدونة ناجي دورز`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-warm-beige pb-24">
      <PageHero 
        title={post.title}
        description=""
        bgImage={post.image}
        breadcrumbs={[
          { name: "المقالات", href: "/blog" },
          { name: post.title.substring(0, 30) + "...", href: `/blog/${post.slug}` }
        ]}
      />
      
      <div className="container mx-auto px-6 max-w-4xl pt-16">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100/50">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 pb-8 mb-8">
            <div className="flex items-center gap-6 text-gray-500">
              <span className="flex items-center gap-2"><Calendar className="w-5 h-5 text-gold" /> {post.date}</span>
              <span className="flex items-center gap-2"><User className="w-5 h-5 text-gold" /> {post.author}</span>
            </div>
            <button className="flex items-center gap-2 text-deep-brown hover:text-gold transition-colors font-medium">
              <Share2 className="w-5 h-5" /> مشاركة
            </button>
          </div>

          <div 
            className="prose prose-lg prose-headings:text-deep-brown prose-headings:font-bold prose-a:text-gold hover:prose-a:text-deep-brown prose-a:transition-colors prose-img:rounded-2xl max-w-none text-gray-700 leading-loose"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          <div className="mt-16 pt-8 border-t border-gray-100">
            <Link href="/blog" className="inline-flex items-center text-deep-brown font-bold hover:text-gold transition-colors group">
              <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" />
              العودة إلى المدونة
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
