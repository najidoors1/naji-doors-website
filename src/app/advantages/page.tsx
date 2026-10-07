import type { Metadata } from "next";
import { companyData } from "@/data/content";
import { Droplet, VolumeX, Bug, Paintbrush, Leaf } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SpotlightCard from "@/components/ui/SpotlightCard";
import RelatedLinks from "@/components/ui/RelatedLinks";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "مميزات أبواب WPC وكيف تختارها",
  description: "تعرف على أبواب WPC وخيارات التصميم والاستخدام، وما الذي ينبغي مراجعته في المواصفات قبل اختيار باب للمنزل أو الفيلا أو المشروع.",
  path: "/advantages",
});

export default function AdvantagesPage() {
  const advantageIcons = [Droplet, VolumeX, Bug, Paintbrush, Leaf];

  return (
    <main className="min-h-screen bg-warm-beige pb-24">
      <PageHero 
        title="لماذا أبواب WPC؟"
        description="دليل عملي لفهم أبواب WPC والعناصر التي تستحق المراجعة قبل اختيار باب داخلي لمنزل أو فيلا أو مشروع."
        bgImage="/Images/wpc-doors-riyadh-home-hero.png"
        breadcrumbs={[{ name: "المميزات", href: "/advantages" }]}
      />
      <div className="container mx-auto px-6 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companyData.advantages.map((advantage, index) => {
            const Icon = advantageIcons[index % advantageIcons.length];
            return (
              <SpotlightCard key={index} className="bg-white p-6 md:p-8 rounded-2xl luxury-card text-center group hover:bg-deep-brown transition-colors duration-300">
                <div className="w-20 h-20 mx-auto bg-warm-beige rounded-full flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                  <Icon className="w-10 h-10 text-gold group-hover:text-white transition-colors" />
                </div>
                <h2 className="text-2xl font-bold text-deep-brown mb-4 group-hover:text-gold transition-colors">{advantage.title}</h2>
                <p className="text-gray-600 group-hover:text-gray-300 transition-colors leading-relaxed">
                  {advantage.description}
                </p>
              </SpotlightCard>
            );
          })}
        </div>

        <section className="mt-20 grid gap-10 rounded-3xl bg-white p-8 md:grid-cols-[1.05fr_0.95fr] md:p-12">
          <div>
            <h2 className="text-3xl font-bold text-deep-brown">ما المقصود بأبواب WPC؟</h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-700">
              يشير WPC إلى مركب الخشب والبلاستيك. وتُستخدم هذه المادة في منتجات متعددة، وتتوفر ضمن خيارات الأبواب الداخلية. لكن اسم المادة وحده لا يكفي لتقييم الباب؛ فالنتيجة النهائية تتأثر بتصميم الموديل، والإطار، والتشطيب، والمفصلات، وطريقة التركيب، والاستخدام المتوقع في المكان.
            </p>
            <p className="mt-4 leading-relaxed text-gray-700">
              لهذا السبب، الأفضل هو التعامل مع الاختيار كمجموعة قرارات مترابطة. ابدأ بوظيفة الباب داخل المساحة، ثم حدّد المقاس واتجاه الفتح، وبعدها قارن التصميم واللون والتفاصيل الملحقة. بهذه الطريقة يصبح من السهل طلب عرض واضح ومقارنة البدائل بصورة عادلة.
            </p>
          </div>
          <div className="rounded-2xl bg-light-cream p-7">
            <h3 className="text-2xl font-bold text-deep-brown">قائمة مراجعة قبل الاختيار</h3>
            <ol className="mt-5 space-y-4 text-gray-700">
              <li><strong className="text-deep-brown">الاستخدام:</strong> غرفة نوم أو ممر أو مساحة تحتاج خصوصية أو سهولة حركة.</li>
              <li><strong className="text-deep-brown">الفتحة:</strong> المقاس التقريبي، اتجاه الفتح، ووجود إطار قائم من عدمه.</li>
              <li><strong className="text-deep-brown">الشكل:</strong> سادة أو محفورة أو زجاجية أو استيل أو سحاب بما يخدم الديكور.</li>
              <li><strong className="text-deep-brown">الطلب:</strong> عدد الأبواب، التشطيب، الإكسسوارات، والتوريد أو التركيب.</li>
            </ol>
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-gold/15 bg-white p-8">
            <h2 className="text-2xl font-bold text-deep-brown">اختيار اللون والتصميم</h2>
            <p className="mt-4 leading-relaxed text-gray-700">ينجح التصميم عندما يُقرأ مع لون الأرضية والجدران والإضاءة، لا عند مشاهدته منفرداً. اجمع صوراً للمكان وموديلات قريبة من ذوقك، ثم راجع التدرجات المتاحة في صفحة المنتج قبل تثبيت الاختيار.</p>
            <Link href="/products" className="mt-5 inline-block font-bold text-gold hover:text-deep-brown">انتقل إلى الكتالوج</Link>
          </article>
          <article className="rounded-3xl border border-gold/15 bg-white p-8">
            <h2 className="text-2xl font-bold text-deep-brown">المواصفات والتركيب</h2>
            <p className="mt-4 leading-relaxed text-gray-700">أي باب يحتاج إلى تفاصيل صحيحة حول الإطار والإكسسوارات وطريقة التركيب. اذكر حالة الموقع وعدد الفتحات والقياسات عند التواصل حتى نناقش الخدمة المناسبة لمشروعك.</p>
            <Link href="/services/installation" className="mt-5 inline-block font-bold text-gold hover:text-deep-brown">تعرف على خدمة التركيب</Link>
          </article>
        </section>

        <RelatedLinks
          className="mt-10"
          title="حوّل الدليل إلى قرار عملي"
          description="بعد فهم عناصر الاختيار، انتقل إلى الموديلات والخدمات والأسئلة الشائعة لتحديد الخطوة التالية."
          links={[
            { href: "/products", title: "كتالوج المنتجات", description: "قارن التصاميم والتشطيبات المعروضة." },
            { href: "/faq", title: "الأسئلة الشائعة", description: "راجع إجابات مختصرة قبل التواصل." },
            { href: "/contact", title: "طلب عرض سعر", description: "أرسل تفاصيل مشروعك للحصول على متابعة." },
          ]}
        />

        <div className="mt-20 bg-deep-brown rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
           <div className="absolute inset-0 bg-gold/10 opacity-50 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/20 via-transparent to-transparent"></div>
           <div className="relative z-10">
             <h2 className="text-3xl font-bold text-white mb-6">هل أصبحت تفاصيل طلبك واضحة؟</h2>
             <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
               شارك نوع المشروع والمقاسات والعدد والتصميم المفضل لنناقش الخيار والخدمة المناسبين.
             </p>
             <Link href="/contact" className="inline-block bg-gold hover:bg-yellow-600 text-deep-brown font-bold py-4 px-10 rounded-full transition-transform hover:scale-105 shadow-lg">
               اطلب عرض سعر
             </Link>
           </div>
        </div>
      </div>
    </main>
  );
}
