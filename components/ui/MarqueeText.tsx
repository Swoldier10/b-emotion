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
      className={`overflow-hidden py-8 md:py-10 border-y border-teal/[0.08] ${className}`}
      aria-hidden="true"
    >
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
