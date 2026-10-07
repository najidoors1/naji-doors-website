import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export type RelatedLink = {
  href: string;
  title: string;
  description: string;
};

type RelatedLinksProps = {
  title?: string;
  description?: string;
  links: RelatedLink[];
  className?: string;
};

export default function RelatedLinks({
  title = "استكمل اختيارك",
  description = "انتقل إلى الصفحات المرتبطة لتكوين صورة أوضح قبل طلب عرض السعر.",
  links,
  className = "",
}: RelatedLinksProps) {
  return (
    <section className={`rounded-3xl border border-gold/15 bg-white p-6 md:p-10 ${className}`}>
      <div className="max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold text-deep-brown">{title}</h2>
        <p className="mt-3 text-gray-600 leading-relaxed">{description}</p>
      </div>

      <div className="mt-7 grid gap-4 md:grid-cols-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group rounded-2xl border border-gray-100 bg-warm-beige/50 p-5 transition-colors hover:border-gold/40 hover:bg-light-cream"
          >
            <h3 className="font-bold text-deep-brown group-hover:text-gold">{link.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">{link.description}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-gold group-hover:text-deep-brown">
              عرض الصفحة <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
