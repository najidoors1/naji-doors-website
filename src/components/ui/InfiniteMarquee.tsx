"use client";

export default function InfiniteMarquee() {
  const items = [
    "مقاومة للماء 100%",
    "ضمان 10 سنوات",
    "فخامة لا تضاهى",
    "عزل صوتي فائق",
    "صناعة سعودية",
    "ضد النمل الأبيض",
    "تصاميم عصرية",
    "جودة أوروبية",
  ];

  // Quadruple for seamless loop on all screen sizes
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="w-full overflow-hidden bg-deep-brown py-4 md:py-5 select-none">
      <div className="flex animate-marquee whitespace-nowrap">
        {repeated.map((item, idx) => (
          <span key={idx} className="inline-flex items-center gap-3 mx-4 md:mx-10 text-sm md:text-base font-medium text-white/80 tracking-wider shrink-0">
            <span className="text-gold text-lg">✦</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
