import type { Metadata } from "next";
import { Building2, Home as HomeIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
// @ts-ignore
import { projectsData } from "@/data/content";

export const metadata: Metadata = {
  title: "مشاريعنا | ناجي دورز في الرياض",
  description: "اطلع على أبرز مشاريع ناجي دورز في توريد وتركيب أبواب WPC للمشاريع السكنية والتجارية في الرياض.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-warm-beige pb-24">
      <PageHero 
        title="مشاريعنا"
        description="نفتخر بكوننا الخيار الأول لكبرى المشاريع السكنية والتجارية في الرياض. تصفح أحدث مشاريعنا التي تم توريد وتركيب أبواب WPC لها."
        bgImage="/Images/Projects Hero Beckground.png"
        breadcrumbs={[{ name: "المشاريع", href: "/projects" }]}
      />
      <div className="container mx-auto px-6 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* @ts-ignore */}
          {projectsData?.map((project: any) => (
            <Link href={`/projects/${project.slug}`} key={project.id} className="bg-white rounded-3xl overflow-hidden luxury-card group block">
              <div className="h-64 bg-gray-200 relative overflow-hidden">
                <Image 
                  src={project.image || "/Images/Projects Hero Beckground.png"} 
                  alt={project.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/90 to-transparent"></div>
                <div className="absolute bottom-6 right-6 text-white flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-deep-brown" />
                  </div>
                  <h2 className="text-xl font-bold">{project.title}</h2>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                <div className="flex items-center text-gold font-bold group-hover:text-deep-brown transition-colors">
                  <span>عرض تفاصيل المشروع</span>
                  <svg className="w-5 h-5 mr-2 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
