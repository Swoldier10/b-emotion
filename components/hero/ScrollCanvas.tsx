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

/* ------------------------------------------------------------------ */
/*  Particle type                                                      */
/* ------------------------------------------------------------------ */
interface Particle {
  /** Original position (logo pixel) */
  ox: number;
  oy: number;
  /** Exploded target position */
  tx: number;
  ty: number;
  /** Size */
  size: number;
  /** Random angle for explosion direction */
  angle: number;
  /** Distance multiplier for explosion */
  dist: number;
  /** Rotation speed */
  rotSpeed: number;
  /** Opacity variance */
  alpha: number;
  /** Delay factor (0-1) — inner particles detach later */
  delay: number;
  /** Color: 0 = yellow (#FFD100), 1 = blue (#6B8EAE), 2 = white */
  color: number;
}

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
/*  Easing helpers                                                     */
/* ------------------------------------------------------------------ */
function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

/* ------------------------------------------------------------------ */
/*  Sample particles from logo image                                   */
/* ------------------------------------------------------------------ */
function sampleParticles(
  img: HTMLImageElement,
  canvasW: number,
  canvasH: number
): Particle[] {
  const offscreen = document.createElement("canvas");
  const ctx = offscreen.getContext("2d")!;

  // Draw logo at a high sampling resolution for density
  const sampleSize = 800;
  const aspect = img.naturalWidth / img.naturalHeight;
  const sw = aspect >= 1 ? sampleSize : Math.round(sampleSize * aspect);
  const sh = aspect >= 1 ? Math.round(sampleSize / aspect) : sampleSize;
  offscreen.width = sw;
  offscreen.height = sh;

  ctx.drawImage(img, 0, 0, sw, sh);
  const imageData = ctx.getImageData(0, 0, sw, sh);
  const data = imageData.data;

  const particles: Particle[] = [];

  // Logo center in canvas coordinates — interpolate based on viewport width
  // Narrow (<768): center at 50% so logo stays visible
  // Medium (~1024): transition towards left
  // Wide (>=1440): fully left at 28%
  const t = Math.min(1, Math.max(0, (canvasW - 768) / (1440 - 768)));
  const logoCenterX = canvasW * (0.5 - t * 0.22); // 0.50 → 0.28
  const logoCenterY = canvasH * (0.48 - t * 0.04); // 0.48 → 0.44

  // Crop margin — ignore outer edges to skip artifacts (sparkle, watermarks, etc.)
  const marginX = Math.floor(sw * 0.25);
  const marginY = Math.floor(sh * 0.18);

  // Scale the CROPPED content area to fill the full viewport
  const croppedW = sw - marginX * 2;
  const croppedH = sh - marginY * 2;
  const croppedAspect = croppedW / croppedH;
  const canvasAspect = canvasW / canvasH;

  // Scale factor: how much to scale the cropped region so it covers the viewport
  let scale: number;
  if (canvasAspect > croppedAspect) {
    // Canvas is wider — fit cropped width to canvas width
    scale = canvasW / croppedW;
  } else {
    // Canvas is taller — fit cropped height to canvas height
    scale = canvasH / croppedH;
  }

  // Responsive scale: smoothly interpolate based on viewport width
  // Mobile (<768): 0.55, narrow desktop (~768): 0.7, wide (>=1440): 1.0
  const isMobile = canvasW < 768;
  const scaleT = Math.min(1, Math.max(0, (canvasW - 768) / (1440 - 768)));
  scale *= isMobile ? 0.55 : (0.7 + scaleT * 0.3);
  const logoDisplayW = sw * scale;
  const logoDisplayH = sh * scale;
  // Offset so the cropped content center aligns with canvas center
  const croppedCenterX = (marginX + croppedW / 2) / sw;
  const croppedCenterY = (marginY + croppedH / 2) / sh;
  const logoOffsetX = logoCenterX - logoDisplayW * croppedCenterX;
  const logoOffsetY = logoCenterY - logoDisplayH * croppedCenterY;

  // Sampling gap — every pixel for high density, then we'll use tiny particles
  const gap = 1;

  for (let y = marginY; y < sh - marginY; y += gap) {
    for (let x = marginX; x < sw - marginX; x += gap) {
      const i = (y * sw + x) * 4;
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const a = data[i + 3];

      // Pick bright pixels (the white outlines of the logo)
      const brightness = (r + g + b) / 3;
      if (brightness > 80 && a > 100) {
        // Extra filter: skip isolated bright pixels (artifacts)
        // Check if at least 2 neighbors are also bright
        let brightNeighbors = 0;
        for (const [nx, ny] of [[x-3,y],[x+3,y],[x,y-3],[x,y+3],[x-2,y-2],[x+2,y+2]]) {
          if (nx >= 0 && nx < sw && ny >= 0 && ny < sh) {
            const ni = (ny * sw + nx) * 4;
            if ((data[ni] + data[ni+1] + data[ni+2]) / 3 > 80) brightNeighbors++;
          }
        }
        if (brightNeighbors < 2) continue;
        // Map sample coordinates to canvas coordinates
        let px = logoOffsetX + (x / sw) * logoDisplayW;
        let py = logoOffsetY + (y / sh) * logoDisplayH;

        // Rotate -20 degrees (counter-clockwise) around logo center
        const rotAngle = -45 * (Math.PI / 180);
        const cosR = Math.cos(rotAngle);
        const sinR = Math.sin(rotAngle);
        const rpx = px - logoCenterX;
        const rpy = py - logoCenterY;
        px = logoCenterX + rpx * cosR - rpy * sinR;
        py = logoCenterY + rpx * sinR + rpy * cosR;

        // Distance from logo center (normalized 0-1)
        const dx = px - logoCenterX;
        const dy = py - logoCenterY;
        const distFromCenter =
          Math.sqrt(dx * dx + dy * dy) /
          Math.sqrt(
            (logoDisplayW / 2) ** 2 + (logoDisplayH / 2) ** 2
          );

        // Explosion direction — radiate from center with randomness
        const baseAngle = Math.atan2(dy, dx);
        const angle = baseAngle + (Math.random() - 0.5) * 1.5;
        // Shorter explosion distance on mobile so particles stay on screen
        const isMobileDevice = canvasW < 768;
        const dist = isMobileDevice
          ? 100 + Math.random() * 300
          : 400 + Math.random() * 1200;

        // Target exploded position
        const tx = px + Math.cos(angle) * dist;
        const ty = py + Math.sin(angle) * dist;

        // Assign color: 40% yellow, 40% blue, 20% white
        const colorRoll = Math.random();
        const color = colorRoll < 0.4 ? 0 : colorRoll < 0.8 ? 1 : 2;

        particles.push({
          ox: px,
          oy: py,
          tx,
          ty,
          size: isMobileDevice ? 1.2 + Math.random() * 2 : 0.8 + Math.random() * 1.5,
          angle,
          dist,
          rotSpeed: (Math.random() - 0.5) * 0.02,
          alpha: 0.6 + Math.random() * 0.4,
          delay: distFromCenter * 0.3 + Math.random() * 0.15,
          color,
        });
      }
    }
  }

  // Cap particles — fewer on mobile for smooth 60fps
  const MAX_PARTICLES = canvasW < 768 ? 3000 : 8000;
  if (particles.length > MAX_PARTICLES) {
    // Shuffle and take first MAX_PARTICLES
    for (let i = particles.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [particles[i], particles[j]] = [particles[j], particles[i]];
    }
    particles.length = MAX_PARTICLES;
  }

  return particles;
}

/* ------------------------------------------------------------------ */
/*  Main canvas component                                              */
/* ------------------------------------------------------------------ */
export function ScrollCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const logoImgRef = useRef<HTMLImageElement | null>(null);
  const rafRef = useRef<number>(0);
  const progressRef = useRef(0);
  const [loaded, setLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Lighter spring on mobile for smoother feel
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  useEffect(() => {
    setIsMobileDevice(window.innerWidth < 768);
  }, []);

  const smoothProgress = useSpring(scrollYProgress, isMobileDevice
    ? { stiffness: 200, damping: 50, mass: 0.5 }
    : { stiffness: 100, damping: 30 }
  );

  // Load logo image and sample particles
  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = "/logo-particle-source.png";

    // Simulate loading progress
    let fakeProgress = 0;
    const progressInterval = setInterval(() => {
      fakeProgress = Math.min(fakeProgress + Math.random() * 15, 90);
      setLoadProgress(Math.round(fakeProgress));
    }, 100);

    img.onload = () => {
      clearInterval(progressInterval);
      logoImgRef.current = img;

      const canvas = canvasRef.current;
      if (!canvas) return;

      const dpr = window.devicePixelRatio || 1;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;

      particlesRef.current = sampleParticles(img, w, h);

      setLoadProgress(100);
      setTimeout(() => setLoaded(true), 400);
    };

    img.onerror = () => {
      clearInterval(progressInterval);
      setLoadProgress(100);
      setLoaded(true);
    };

    return () => clearInterval(progressInterval);
  }, []);

  // Track last rendered progress to skip unnecessary frames
  const lastRenderedProgress = useRef(-1);

  // Render loop
  const render = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    // Skip render if progress hasn't changed (saves GPU on mobile)
    const currentProgress = progressRef.current;
    if (Math.abs(currentProgress - lastRenderedProgress.current) < 0.0005) {
      rafRef.current = requestAnimationFrame(render);
      return;
    }
    lastRenderedProgress.current = currentProgress;

    const dpr = window.devicePixelRatio || 1;
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;

    if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      // Re-sample particles on resize
      if (logoImgRef.current) {
        particlesRef.current = sampleParticles(logoImgRef.current, w, h);
      }
    }

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);

    const progress = progressRef.current;
    const particles = particlesRef.current;

    // Phase mapping:
    // 0.00 – 0.05: logo holds still
    // 0.05 – 0.85: logo fractures and particles scatter slowly (0 → 1)
    // 0.85 – 1.00: fully scattered, particles drift gently
    let particleProgress: number;
    if (progress < 0.05) {
      particleProgress = 0;
    } else if (progress < 0.85) {
      particleProgress = (progress - 0.05) / 0.80;
    } else {
      particleProgress = 1;
    }

    // Extra slow drift after full scatter
    const postDrift = progress > 0.85 ? (progress - 0.85) / 0.15 : 0;

    // Glow effect that appears during fracture
    const glowIntensity =
      particleProgress > 0 && particleProgress < 0.6
        ? Math.sin(particleProgress * Math.PI) * 0.4
        : 0;

    // Color palette: yellow, blue, white
    const COLORS = ["#FFD100", "#6B8EAE", "#FFFFFF"];

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      // Each particle has its own delay before it starts moving
      const adjustedProgress = Math.max(
        0,
        Math.min(1, (particleProgress - p.delay) / (1 - p.delay))
      );
      const easedProgress = easeInOutCubic(adjustedProgress);

      // Interpolate position + post-scatter drift
      let x = p.ox + (p.tx - p.ox) * easedProgress;
      let y = p.oy + (p.ty - p.oy) * easedProgress;

      // Continue drifting after full scatter (slower on mobile)
      if (postDrift > 0) {
        const driftDist = w < 768 ? 50 : 200;
        x += Math.cos(p.angle) * postDrift * driftDist;
        y += Math.sin(p.angle) * postDrift * driftDist;
      }

      // Skip particles fully offscreen
      if (x < -100 || x > w + 100 || y < -100 || y > h + 100) continue;

      // Particle alpha — stays visible throughout the entire scroll
      // Reduce brightness on mobile so text remains readable
      let alpha = p.alpha * (w < 768 ? 0.55 : 1);
      // Very gentle fade only at the absolute end of the scroll
      if (postDrift > 0.6) {
        alpha *= Math.max(0.15, 1 - (postDrift - 0.6) / 0.4);
      }
      if (alpha < 0.01) continue;

      // Size grows as particles separate
      const size = p.size * (1 + easedProgress * 3);

      ctx.globalAlpha = alpha;
      ctx.fillStyle = COLORS[p.color];
      ctx.fillRect(x - size / 2, y - size / 2, size, size);

      // Glow halo during active fracture phase (skip on mobile for performance)
      if (w >= 768 && glowIntensity > 0.05 && easedProgress > 0.02 && easedProgress < 0.6) {
        const glow =
          glowIntensity * (1 - Math.abs(easedProgress - 0.3) / 0.3);
        if (glow > 0.03) {
          ctx.globalAlpha = glow * 0.3;
          ctx.fillRect(
            x - size - 1,
            y - size - 1,
            size * 2 + 2,
            size * 2 + 2
          );
        }
      }
    }

    ctx.globalAlpha = 1;

    // Shockwave ring at the moment of full separation
    if (particleProgress > 0.4 && particleProgress < 0.75) {
      const shockT = (particleProgress - 0.4) / 0.35;
      const shockRadius = shockT * Math.min(w, h) * 0.5;
      const shockAlpha = (1 - shockT) * 0.15;
      ctx.beginPath();
      const st = Math.min(1, Math.max(0, (w - 768) / (1440 - 768)));
      ctx.arc(w * (0.5 - st * 0.22), h * (0.48 - st * 0.04), shockRadius, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(255, 255, 255, ${shockAlpha})`;
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }

    rafRef.current = requestAnimationFrame(render);
  }, []);

  // Subscribe to scroll progress
  useEffect(() => {
    if (!loaded) return;

    const unsubscribe = smoothProgress.on("change", (v) => {
      progressRef.current = v;
    });

    rafRef.current = requestAnimationFrame(render);

    return () => {
      unsubscribe();
      cancelAnimationFrame(rafRef.current);
    };
  }, [loaded, smoothProgress, render]);

  // Darken overlay — stronger on mobile for text readability
  const [isMobileView, setIsMobileView] = useState(false);
  useEffect(() => {
    const check = () => setIsMobileView(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const overlayOpacity = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    isMobileView ? [0.35, 0.5, 0.6] : [0.1, 0.3, 0.5]
  );

  return (
    <div ref={containerRef} className="relative h-[250vh] md:h-[400vh]">
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
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 50%, rgba(5,5,5,0.6) 100%)",
          }}
        />

        {/* ---- Beat A: 0–15% — Opening statement ---- */}
        <TextOverlay
          progress={smoothProgress}
          startAt={0}
          endAt={0.15}
          position="center"
          visibleAtStart
        >
          <motion.p
            className="text-5xl md:text-7xl lg:text-[6.5rem] xl:text-[8rem] font-black text-white leading-[0.95] tracking-tight md:drop-shadow-2xl uppercase"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            GRAFIK. DESIGN.
            <br />
            <span className="text-primary">CONTENT.</span> DIGITAL.
          </motion.p>
          <motion.p
            className="mt-6 md:mt-8 text-lg md:text-2xl text-white/70 font-light tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.6 }}
          >
            Kreative Lösungen für starke Auftritte – online und offline.
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
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[0.95] md:drop-shadow-2xl">
                ALLES AUS
                <br />
                EINER HAND.
              </h2>
              <p className="mt-5 text-lg md:text-xl text-white/60 font-light max-w-md">
                Kein Hin und Her. Kein Koordinationschaos.
                <br />
                Ein Ansprechpartner für alles – flexibel im Abo oder projektbasiert.
              </p>
            </div>
          </div>
        </TextOverlay>

        {/* ---- Beat C: 50–70% — Digitalize ---- */}
        <TextOverlay
          progress={smoothProgress}
          startAt={0.5}
          endAt={0.7}
          position="right"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[0.95] md:drop-shadow-2xl">
            LASSEN SIE UNS
            <br />
            <span className="text-primary">IDEEN</span> ZUM LEBEN
            <br />
            ERWECKEN.
          </h2>
          <p className="mt-5 text-lg md:text-xl text-white/60 font-light max-w-md ml-auto">
            Wir begleiten Sie als Sparringpartner von der ersten Idee bis zur Umsetzung.
            Ob Grafik, Design, Foto, Video oder Social Media – wir sorgen dafür, dass Ihre Marke
            sichtbar wird und professionell auftritt.
          </p>
        </TextOverlay>

        {/* ---- Beat D: 75–95% — CTA ---- */}
        <TextOverlay
          progress={smoothProgress}
          startAt={0.75}
          endAt={0.95}
          position="center"
        >
          <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-black text-white leading-[0.9] md:drop-shadow-2xl">
            BEREIT?
          </h2>
          <p className="mt-6 text-lg md:text-xl text-white/60 font-light">
            Lassen Sie uns gemeinsam Ideen zum Leben erwecken.
          </p>
          <div className="mt-10">
            <a
              href="/abo"
              className="inline-flex items-center justify-center bg-primary text-dark font-bold uppercase tracking-wider px-12 py-5 rounded-full text-sm hover:bg-white hover:text-dark transition-all duration-300 shadow-[0_0_40px_rgba(255,209,0,0.3)]"
            >
              Jetzt anfragen
            </a>
          </div>
        </TextOverlay>

        {/* Scroll hint */}
        <ScrollHint progress={smoothProgress} />
      </div>
    </div>
  );
}
