"use client";

export default function InfiniteMarquee() {
  const items = [
    "أبواب WPC داخلية",
    "توريد وتركيب في الرياض",
    "تصاميم مودرن وكلاسيكية",
    "خيارات للفلل والمنازل",
    "حلول للمشاريع",
    "موديلات سادة ومحفورة",
    "طلب عرض سعر",
    "استعرض الكتالوج",
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
