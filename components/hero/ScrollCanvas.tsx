"use client";

import {
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import { Logo } from "@/components/ui/Logo";
import {
  useScroll,
  useTransform,
  useSpring,
  motion,
  AnimatePresence,
  MotionValue,
} from "framer-motion";

const TOTAL_FRAMES = 120;

const getFramePath = (index: number) =>
  `/sequence/ezgif-frame-${String(index + 1).padStart(3, "0")}.png`;

/* ------------------------------------------------------------------ */
/*  Text overlay — fades in/out based on scroll progress              */
/* ------------------------------------------------------------------ */
function TextOverlay({
  children,
  progress,
  startAt,
  endAt,
  position,
  visibleAtStart = false,
}: {
  children: React.ReactNode;
  progress: MotionValue<number>;
  startAt: number;
  endAt: number;
  position: "center" | "left" | "right";
  visibleAtStart?: boolean;
}) {
  const fadeIn = startAt + (endAt - startAt) * 0.15;
  const fadeOut = endAt - (endAt - startAt) * 0.15;

  const opacity = useTransform(
    progress,
    visibleAtStart
      ? [startAt, fadeOut, endAt]
      : [startAt, fadeIn, fadeOut, endAt],
    visibleAtStart ? [1, 1, 0] : [0, 1, 1, 0]
  );
  const y = useTransform(
    progress,
    visibleAtStart
      ? [startAt, fadeOut, endAt]
      : [startAt, fadeIn, fadeOut, endAt],
    visibleAtStart ? [0, 0, -40] : [40, 0, 0, -40]
  );

  const positionClasses: Record<string, string> = {
    center: "inset-0 flex items-center justify-center text-center",
    left: "inset-0 flex items-center px-6 md:px-16 lg:px-24",
    right:
      "inset-0 flex items-center justify-end px-6 md:px-16 lg:px-24 text-right",
  };

  return (
    <motion.div
      className={`absolute z-20 pointer-events-none ${positionClasses[position]}`}
      style={{ opacity, y }}
    >
      <div className="pointer-events-auto max-w-4xl">{children}</div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Scroll indicator — bouncing arrow at bottom                       */
/* ------------------------------------------------------------------ */
function ScrollHint({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0, 0.08], [1, 0]);

  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      style={{ opacity }}
    >
      <span className="text-[10px] uppercase tracking-[0.25em] text-white/50 font-light">
        Scroll
      </span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          width="16"
          height="24"
          viewBox="0 0 16 24"
          fill="none"
          className="text-white/40"
        >
          <path
            d="M8 0v20m0 0l-6-6m6 6l6-6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main canvas component                                              */
/* ------------------------------------------------------------------ */
export function ScrollCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const frameIndex = useTransform(
    smoothProgress,
    [0, 1],
    [0, TOTAL_FRAMES - 1]
  );

  // Preload all frames
  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];

    const loadImage = (index: number): Promise<void> =>
      new Promise((resolve) => {
        const img = new Image();
        img.src = getFramePath(index);
        img.onload = () => {
          images[index] = img;
          loadedCount++;
          setLoadProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
          resolve();
        };
        img.onerror = () => {
          loadedCount++;
          setLoadProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
          resolve();
        };
      });

    const loadAll = async () => {
      // Load in parallel batches of 15
      const batchSize = 15;
      for (let i = 0; i < TOTAL_FRAMES; i += batchSize) {
        const batch = [];
        for (let j = i; j < Math.min(i + batchSize, TOTAL_FRAMES); j++) {
          batch.push(loadImage(j));
        }
        await Promise.all(batch);
      }
      imagesRef.current = images;
      await new Promise((r) => setTimeout(r, 400));
      setLoaded(true);
    };

    loadAll();
  }, []);

  // Render frame on canvas — COVER fit (fills viewport, crops edges)
  const renderFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const frameIdx = Math.min(
      Math.max(0, Math.round(index)),
      TOTAL_FRAMES - 1
    );
    const img = imagesRef.current[frameIdx];
    if (!img) return;

    const dpr = window.devicePixelRatio || 1;
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;

    if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
      canvas.width = w * dpr;
      canvas.height = h * dpr;
    }

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);

    // COVER fit — fill entire canvas, crop overflow
    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = w / h;
    let drawW: number, drawH: number, drawX: number, drawY: number;

    if (canvasRatio > imgRatio) {
      // Canvas is wider than image — match width, crop height
      drawW = w;
      drawH = w / imgRatio;
      drawX = 0;
      drawY = (h - drawH) / 2;
    } else {
      // Canvas is taller than image — match height, crop width
      drawH = h;
      drawW = h * imgRatio;
      drawX = (w - drawW) / 2;
      drawY = 0;
    }

    ctx.drawImage(img, drawX, drawY, drawW, drawH);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    const unsubscribe = frameIndex.on("change", renderFrame);
    renderFrame(0);
    return unsubscribe;
  }, [loaded, frameIndex, renderFrame]);

  // Darken overlay that increases slightly as you scroll
  const overlayOpacity = useTransform(smoothProgress, [0, 0.5, 1], [0.25, 0.35, 0.5]);

  return (
    <div ref={containerRef} className="relative h-[400vh]">
      {/* ---- Loading Screen ---- */}
      <AnimatePresence>
        {!loaded && (
          <motion.div
            className="fixed inset-0 z-[60] bg-[#050505] flex flex-col items-center justify-center gap-8"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Logo linked={false} className="h-10 md:h-12" />
            </motion.div>

            <div className="relative w-20 h-20">
              <svg className="w-20 h-20 -rotate-90" viewBox="0 0 80 80">
                <circle
                  cx="40"
                  cy="40"
                  r="34"
                  fill="none"
                  stroke="rgba(255,255,255,0.06)"
                  strokeWidth="2"
                />
                <circle
                  cx="40"
                  cy="40"
                  r="34"
                  fill="none"
                  stroke="#FFD100"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray={`${loadProgress * 2.136} 213.6`}
                  style={{ transition: "stroke-dasharray 0.3s ease" }}
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-sm text-white/70 font-medium tabular-nums">
                {loadProgress}%
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ---- Sticky viewport ---- */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ background: "#050505" }}
        />

        {/* Dark gradient overlay for text readability */}
        <motion.div
          className="absolute inset-0 z-10 bg-black pointer-events-none"
          style={{ opacity: overlayOpacity }}
        />

        {/* Vignette edges */}
        <div className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 50%, rgba(5,5,5,0.6) 100%)",
          }}
        />

        {/* ---- Beat A: 0–20% — Opening statement ---- */}
        <TextOverlay
          progress={smoothProgress}
          startAt={0}
          endAt={0.2}
          position="center"
          visibleAtStart
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-[6.5rem] xl:text-[8rem] font-black text-white leading-[0.95] tracking-tight drop-shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            GRAFIK. DESIGN.
            <br />
            <span className="text-primary">CONTENT.</span> DIGITAL.
          </motion.h1>
          <motion.p
            className="mt-6 md:mt-8 text-lg md:text-2xl text-white/70 font-light tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.6 }}
          >
            Ihr Partner fur Content und Marketing.
          </motion.p>
        </TextOverlay>

        {/* ---- Beat B: 25–45% — One-stop shop ---- */}
        <TextOverlay
          progress={smoothProgress}
          startAt={0.25}
          endAt={0.45}
          position="left"
        >
          <div className="flex items-stretch gap-5">
            <div className="w-1 bg-primary rounded-full shrink-0" />
            <div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[0.95] drop-shadow-2xl">
                ALLES AUS
                <br />
                EINER HAND.
              </h2>
              <p className="mt-5 text-lg md:text-xl text-white/60 font-light max-w-md">
                Von der Strategie bis zur Umsetzung — personlich und flexibel.
              </p>
            </div>
          </div>
        </TextOverlay>

        {/* ---- Beat C: 50–70% — Your content, your story ---- */}
        <TextOverlay
          progress={smoothProgress}
          startAt={0.5}
          endAt={0.7}
          position="right"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[0.95] drop-shadow-2xl">
            <span className="text-primary">IHR</span> CONTENT.
            <br />
            <span className="text-primary">IHRE</span> STORY.
          </h2>
          <p className="mt-5 text-lg md:text-xl text-white/60 font-light max-w-md ml-auto">
            Foto, Video, Design, Social Media — alles im Abo verfugbar.
          </p>
        </TextOverlay>

        {/* ---- Beat D: 75–95% — CTA ---- */}
        <TextOverlay
          progress={smoothProgress}
          startAt={0.75}
          endAt={0.95}
          position="center"
        >
          <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-black text-white leading-[0.9] drop-shadow-2xl">
            BEREIT?
          </h2>
          <p className="mt-6 text-lg md:text-xl text-white/60 font-light">
            Lassen Sie uns gemeinsam Ideen zum Leben erwecken.
          </p>
          <div className="mt-10">
            <a
              href="/kontakt"
              className="inline-flex items-center justify-center bg-primary text-dark font-bold uppercase tracking-wider px-12 py-5 rounded-full text-sm hover:bg-white hover:text-dark transition-all duration-300 shadow-[0_0_40px_rgba(255,209,0,0.3)]"
            >
              Projekt starten
            </a>
          </div>
        </TextOverlay>

        {/* Scroll hint */}
        <ScrollHint progress={smoothProgress} />
      </div>
    </div>
  );
}
