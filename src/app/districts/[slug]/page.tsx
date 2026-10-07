import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { districts } from "@/data/districts";
import PageHero from "@/components/ui/PageHero";
import RelatedLinks from "@/components/ui/RelatedLinks";
import { CheckCircle2, PhoneCall, ArrowLeft } from "lucide-react";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  return districts.map((d) => ({
    slug: d.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const district = districts.find((d) => d.slug === resolvedParams.slug);
  
  if (!district) {
    return { title: "الصفحة غير موجودة" };
  }

  return pageMetadata({
    title: district.title,
    description: district.description,
    path: `/districts/${district.slug}`,
    image: district.image,
  });
}

export default async function DistrictPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const district = districts.find((d) => d.slug === resolvedParams.slug);

  if (!district) {
    notFound();
  }

  const districtIndex = districts.findIndex((item) => item.slug === district.slug);
  const nearbyDistricts = [
    districts[(districtIndex + 1) % districts.length],
    districts[(districtIndex + 2) % districts.length],
  ];

  return (
    <main className="min-h-screen bg-warm-beige pb-24">
      <PageHero 
        title={district.name}
        description={district.description}
        bgImage={district.image}
        breadcrumbs={[
          { name: "مناطق التغطية", href: "/districts" },
          { name: district.name, href: `/districts/${district.slug}` }
        ]}
      />
      
      <div className="container mx-auto px-6 max-w-6xl pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-brown leading-tight">
              اختيار أبواب WPC في <span className="text-gold">{district.name}</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {district.content}
            </p>
            <p className="rounded-2xl border-r-4 border-gold bg-light-cream p-5 leading-relaxed text-gray-700">
              <strong className="text-deep-brown">هذه الصفحة مناسبة {district.focus}.</strong> ابدأ بتحديد نوع المشروع وعدد الأبواب، ثم اختر الموديل الأقرب لذوقك وراجع المقاسات الفعلية مع الفريق قبل اعتماد الطلب.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "مقارنة موديلات أبواب WPC الداخلية حسب الاستخدام والتصميم",
                "تحديد اللون والتشطيب والإطار والإكسسوارات قبل العرض",
                "اختيار التوريد فقط أو التوريد مع التركيب بحسب حاجة المشروع",
                "عرض سعر يستند إلى المقاسات والكمية ومتطلبات الموقع",
                "تأكيد تفاصيل الخدمة والموعد قبل بدء التنفيذ"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-deep-brown font-medium">
                  <CheckCircle2 className="w-6 h-6 text-gold" />
                  {item}
                </li>
              ))}
            </ul>
            
            <div className="flex gap-4 pt-8">
              <Link 
                href="/contact" 
                className="flex-1 bg-deep-brown hover:bg-gold text-white hover:text-deep-brown flex justify-center items-center gap-2 py-4 rounded-full font-bold transition-colors shadow-lg"
              >
                <PhoneCall className="w-5 h-5" /> اطلب عرض سعر
              </Link>
              <Link 
                href="/products" 
                className="flex-1 bg-white hover:bg-gray-50 text-deep-brown border border-gray-200 flex justify-center items-center gap-2 py-4 rounded-full font-bold transition-colors shadow-sm"
              >
                تصفح الكتالوج <ArrowLeft className="w-5 h-5" />
              </Link>
            </div>
          </div>
          
          <div className="relative h-[500px] w-full rounded-3xl overflow-hidden luxury-card">
            <Image 
              src={district.image}
              alt={`أبواب WPC في ${district.name}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/80 to-transparent"></div>
            <div className="absolute bottom-8 right-8 left-8 text-white">
              <p className="font-bold text-2xl mb-2">أبواب WPC في {district.name}</p>
              <p className="text-gray-200">تواصل معنا لتأكيد متطلبات الموقع وخدمة التوريد أو التركيب.</p>
            </div>
          </div>
        </div>

        <section className="mb-10 grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-deep-brown">1. راجع الاستخدام</h2>
            <p className="mt-3 leading-relaxed text-gray-600">اذكر الغرف التي تحتاج أبواباً، وطبيعة كل مساحة، وأي تصميم مرجعي تريد الاقتراب منه.</p>
          </article>
          <article className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-deep-brown">2. جهّز القياسات</h2>
            <p className="mt-3 leading-relaxed text-gray-600">تفيد المقاسات التقريبية وعدد الفتحات في توجيهك إلى الموديل والخدمة المناسبين قبل المعاينة أو التنفيذ.</p>
          </article>
          <article className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-deep-brown">3. نسّق التنفيذ</h2>
            <p className="mt-3 leading-relaxed text-gray-600">بعد وضوح الطلب، نناقش تفاصيل التوريد أو التركيب وموقع المشروع في {district.name}.</p>
          </article>
        </section>

        <RelatedLinks
          title={`روابط مفيدة لمشروعك في ${district.name}`}
          description="استخدم هذه الصفحات لإكمال الاختيار بدلاً من الاكتفاء باسم الحي أو صورة واحدة للباب."
          links={[
            { href: "/products", title: "كتالوج أبواب WPC", description: "قارن التصاميم والتشطيبات المتاحة." },
            { href: "/services/installation", title: "خدمة التركيب", description: "تعرف على ما نراجعه قبل ترتيب التركيب." },
            { href: "/faq", title: "الأسئلة الشائعة", description: "إجابات مختصرة عن المقاسات والعروض والخدمة." },
          ]}
        />

        <section className="mt-10 rounded-3xl bg-deep-brown p-7 text-white md:p-10">
          <h2 className="text-2xl font-bold text-gold">أحياء أخرى في الرياض</h2>
          <p className="mt-3 text-gray-300">إذا كان مشروعك في أكثر من موقع، انتقل إلى صفحة الحي الآخر ثم شارك التفاصيل لكل موقع عند طلب العرض.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {nearbyDistricts.map((nearby) => (
              <Link key={nearby.slug} href={`/districts/${nearby.slug}`} className="rounded-full border border-white/20 px-5 py-3 font-bold transition-colors hover:bg-gold hover:text-deep-brown">
                أبواب WPC في {nearby.name}
              </Link>
            ))}
            <Link href="/districts" className="rounded-full border border-gold/50 px-5 py-3 font-bold text-gold transition-colors hover:bg-gold hover:text-deep-brown">
              كل الأحياء
            </Link>
          </div>
        </section>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "الرئيسية", path: "/" },
              { name: "أحياء الرياض", path: "/districts" },
              { name: district.name, path: `/districts/${district.slug}` },
            ])
          ),
        }}
      />
    </main>
  );
}
