"use client";

const particles = Array.from({ length: 18 }, (_, id) => ({
  id,
  left: `${(id * 37) % 100}%`,
  top: `${60 + ((id * 11) % 40)}%`,
  size: 1 + ((id * 7) % 25) / 10,
  duration: 10 + ((id * 13) % 15),
  delay: (id * 3) % 10,
  opacity: 0.15 + ((id * 5) % 25) / 100,
}));

export default function HeroParticles() {
  return (
    <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-gold animate-float-up"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
