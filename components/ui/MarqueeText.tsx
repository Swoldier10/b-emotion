"use client";

interface MarqueeTextProps {
  text?: string;
  className?: string;
}

export function MarqueeText({
  text = "GRAFIK \u2022 DESIGN \u2022 FOTO \u2022 VIDEO \u2022 SOCIAL MEDIA \u2022 WEBSITES \u2022 ALLES IM ABO \u2022 ",
  className = "",
}: MarqueeTextProps) {
  return (
    <div
      className={`relative overflow-hidden py-8 md:py-10 border-y border-teal/[0.08] ${className}`}
      aria-hidden="true"
    >
      {/* Primary glow behind text */}
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[100px] bg-primary/[0.04] rounded-full blur-[80px] pointer-events-none" />

      <div
        className="flex whitespace-nowrap"
        style={{ animation: "marquee 25s linear infinite" }}
      >
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className="text-3xl md:text-5xl lg:text-6xl font-black tracking-wider text-primary/20 mr-2"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
