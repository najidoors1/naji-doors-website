import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/content";
import PageHero from "@/components/ui/PageHero";
import RelatedLinks from "@/components/ui/RelatedLinks";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "كتالوج أبواب WPC في الرياض",
  description: "استعرض موديلات أبواب WPC من ناجي دورز، بما فيها التصاميم السادة والمحـفورة والزجاجية والاستيل والسحاب، واطلب عرض سعر للتصميم المناسب.",
  path: "/products",
  image: "/Images/wpc-doors-riyadh-products-hero.png",
});

export default function ProductsPage() {
  const categories = Array.from(new Set(products.map((product) => product.category)));

  return (
    <main className="min-h-screen bg-warm-beige pb-24">
      <PageHero 
        title="كتالوج أبواب WPC"
        description="استعرض الموديلات والتشطيبات، ثم راجع المقاس والإطار والإكسسوارات وخدمة التركيب قبل اعتماد طلبك."
        bgImage="/Images/wpc-doors-riyadh-products-hero.png"
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

        <section className="mt-20 grid gap-10 rounded-3xl bg-white p-8 md:grid-cols-[1.1fr_0.9fr] md:p-12">
          <div>
            <h2 className="text-3xl font-bold text-deep-brown">كيف تستخدم الكتالوج لاختيار الباب المناسب؟</h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-700">
              الصور نقطة بداية مفيدة، لكنها لا تكفي وحدها لاتخاذ القرار. ابدأ بتحديد الاستخدام في كل غرفة، ثم قارن النمط الذي يناسب الديكور: سادة للمساحات الهادئة، أو محفور لمن يريد تفاصيل أوضح، أو زجاجي واستيل وسحاب عندما يخدم ذلك تصميم المكان وطريقة الحركة فيه.
            </p>
            <p className="mt-4 leading-relaxed text-gray-700">
              بعد اختيار الموديل المفضل، دوّن المقاسات التقريبية واتجاه الفتح واللون المطلوب. هذه المعلومات تساعدنا على مناقشة الإطار والإكسسوارات وخدمة التوريد أو التركيب بصورة أدق، بدلاً من تقديم عرض عام لا يراعي مشروعك.
            </p>
          </div>
          <div className="rounded-2xl bg-light-cream p-7">
            <h3 className="text-xl font-bold text-deep-brown">أنماط متاحة للمقارنة</h3>
            <ul className="mt-5 space-y-3 text-gray-700">
              {categories.map((category) => (
                <li key={category} className="border-b border-gold/15 pb-3 last:border-0">{category}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl border border-gold/15 bg-white p-6">
            <h2 className="text-xl font-bold text-deep-brown">المقاس أولاً</h2>
            <p className="mt-3 leading-relaxed text-gray-600">تحقق من أبعاد الفتحة القائمة أو المخطط قبل ربطها بأي موديل، خصوصاً عند وجود أكثر من نوع من الغرف.</p>
          </article>
          <article className="rounded-2xl border border-gold/15 bg-white p-6">
            <h2 className="text-xl font-bold text-deep-brown">التشطيب جزء من الاختيار</h2>
            <p className="mt-3 leading-relaxed text-gray-600">قارن اللون مع الأرضية والجدران والإضاءة، وراجع لون الإطار والإكسسوارات كجزء من النتيجة النهائية.</p>
          </article>
          <article className="rounded-2xl border border-gold/15 bg-white p-6">
            <h2 className="text-xl font-bold text-deep-brown">الخدمة بعد الاختيار</h2>
            <p className="mt-3 leading-relaxed text-gray-600">حدد إن كان طلبك توريداً فقط أو يحتاج تنسيقاً للتركيب، ثم أرسل عدد الأبواب وموقع المشروع للحصول على متابعة مناسبة.</p>
          </article>
        </section>

        <RelatedLinks
          className="mt-10"
          title="من الموديل إلى طلب العرض"
          description="اربط اختيارك من الكتالوج بالخدمة المطلوبة وبالمعلومات التي تجعل عرض السعر مناسباً لمشروعك."
          links={[
            { href: "/services", title: "خدماتنا", description: "تعرف على التوريد والتركيب والتصميم الخاص والمشاريع." },
            { href: "/advantages", title: "دليل اختيار أبواب WPC", description: "راجع الجوانب التي ينبغي تقييمها قبل الشراء." },
            { href: "/contact", title: "طلب عرض سعر", description: "أرسل المقاسات والكمية والتصميم المطلوب." },
          ]}
        />
      </div>
    </main>
  );
}
