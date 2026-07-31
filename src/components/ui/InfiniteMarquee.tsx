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

  // Quadruple for seamless loop
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="w-full overflow-hidden bg-deep-brown py-3 md:py-5 select-none">
      <div className="flex animate-marquee whitespace-nowrap">
        {repeated.map((item, idx) => (
          <span key={idx} className="inline-flex items-center gap-1.5 md:gap-4 mx-2 md:mx-10 text-xs md:text-base font-medium text-white/80 tracking-wider shrink-0">
            <span className="text-gold text-sm md:text-lg">✦</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
