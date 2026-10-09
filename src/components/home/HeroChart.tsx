import { useEffect, useRef, useMemo } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Candle {
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

interface HeroChartProps {
  seed?: number;
  candleCount?: number;
  accent?: string;
}

// ─── Seeded PRNG (mulberry32) ─────────────────────────────────────────────────
function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s |= 0;
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// ─── Data generation ──────────────────────────────────────────────────────────
function generateCandles(count: number, seed: number): Candle[] {
  const rand = seededRandom(seed);
  const candles: Candle[] = [];
  let price = 50;

  for (let i = 0; i < count; i++) {
    const drift = 0.8; // upward bias
    const move = (rand() - 0.44) * 8 + drift;
    const open = price;
    const close = Math.max(5, price + move);
    const range = Math.abs(close - open);
    const wick = range * (0.3 + rand() * 0.7);
    const high = Math.max(open, close) + wick * (0.4 + rand() * 0.6);
    const low = Math.min(open, close) - wick * rand() * 0.6;
    const volume = 0.3 + rand() * 0.7 + (i / count) * 0.4; // rising volume

    candles.push({
      open,
      close,
      high: Math.max(high, Math.max(open, close) + 0.5),
      low: Math.min(low, Math.min(open, close) - 0.5),
      volume,
    });
    price = close;
  }
  return candles;
}

// ─── Main component ───────────────────────────────────────────────────────────
export function HeroChart({
  seed = 42,
  candleCount = 30,
  accent = "#C8981F",
}: HeroChartProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  // SVG viewport
  const W = 900;
  const H = 520;
  const BODY_W = 13;
  const GAP = 10;
  const STEP = BODY_W + GAP;
  const VOL_H = H * 0.28; // volume bar zone height
  const CHART_TOP = 30;
  const CHART_BOTTOM = H - VOL_H - 10;
  const CHART_H = CHART_BOTTOM - CHART_TOP;

  const candles = useMemo(() => generateCandles(candleCount, seed), [seed, candleCount]);

  // Price range across all candles
  const allHigh = Math.max(...candles.map((c) => c.high));
  const allLow = Math.min(...candles.map((c) => c.low));
  const priceRange = allHigh - allLow;

  const priceToY = (p: number) => CHART_TOP + CHART_H - ((p - allLow) / priceRange) * CHART_H;

  // Trend line control points (closes)
  const closePts = candles.map((c, i) => ({
    x: i * STEP + BODY_W / 2 + 20,
    y: priceToY(c.close),
  }));

  const trendPath = closePts.reduce((acc, pt, i) => {
    if (i === 0) return `M ${pt.x} ${pt.y}`;
    const prev = closePts[i - 1];
    const cpx = (prev.x + pt.x) / 2;
    return `${acc} C ${cpx} ${prev.y}, ${cpx} ${pt.y}, ${pt.x} ${pt.y}`;
  }, "");

  // Trend line length (approx for dash animation)
  const trendLen = closePts.length * STEP * 1.05;

  // Dot grid
  const gridDots: { cx: number; cy: number }[] = [];
  const GRID = 18;
  for (let gy = 0; gy < H; gy += GRID) {
    for (let gx = 0; gx < W; gx += GRID) {
      gridDots.push({ cx: gx, cy: gy });
    }
  }

  // Depth zones: blur candles at edges
  const getDepth = (i: number) => {
    const ratio = i / (candleCount - 1);
    if (ratio < 0.18) return { blur: 2.5, opacity: 0.5 };
    if (ratio > 0.85) return { blur: 1.8, opacity: 0.6 };
    return { blur: 0, opacity: 1 };
  };

  // Inject CSS keyframes once
  useEffect(() => {
    const id = "hero-chart-styles";
    if (document.getElementById(id)) return;
    const style = document.createElement("style");
    style.id = id;
    style.textContent = `
      @media (prefers-reduced-motion: no-preference) {
        .hc-body {
          transform-box: fill-box;
          transform-origin: bottom;
          animation: hcGrow 700ms ease-out both;
        }
        .hc-wick {
          animation: hcFade 400ms ease-out both;
        }
        .hc-trend {
          animation: hcDash 1.6s ease-out forwards;
        }
        .hc-glow1 {
          animation: hcPulse 6s ease-in-out infinite alternate;
        }
        .hc-glow2 {
          animation: hcPulse 6s ease-in-out infinite alternate-reverse;
          animation-delay: 2s;
        }
        @keyframes hcGrow {
          from { transform: scaleY(0); opacity: 0; }
          to   { transform: scaleY(1); opacity: 1; }
        }
        @keyframes hcFade {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes hcDash {
          from { stroke-dashoffset: var(--dash-len); }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes hcPulse {
          from { opacity: 0.55; }
          to   { opacity: 1; }
        }
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    // Outer wrapper — absolute positioning inside the hero
    <div
      className="absolute right-0 pointer-events-none select-none"
      style={{
        top: "10%",
        bottom: "14%",
        width: "62%",
        zIndex: 1,
        // CSS mask: fade out to the left so it doesn't clash with headline
        maskImage: "linear-gradient(to right, transparent 0%, black 30%, black 100%)",
        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 30%, black 100%)",
      }}
    >
      {/* 3-D perspective wrapper */}
      <div
        style={{
          width: "100%",
          height: "100%",
          transform: "perspective(1400px) rotateX(18deg) rotateY(-14deg) rotateZ(-3deg)",
          transformOrigin: "right center",
          opacity: 0.72,
        }}
        // On mobile: no 3-D rotation
        className="max-sm:!transform-none max-sm:!opacity-40"
      >
        {/* Glow blobs */}
        <div
          className="hc-glow1 absolute rounded-full"
          style={{
            width: 280,
            height: 280,
            top: "5%",
            left: "8%",
            background: "radial-gradient(circle, rgba(47,191,113,0.35) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="hc-glow2 absolute rounded-full"
          style={{
            width: 320,
            height: 320,
            bottom: "2%",
            right: "4%",
            background: "radial-gradient(circle, rgba(47,191,113,0.25) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        {/* Main SVG */}
        <svg
          ref={svgRef}
          viewBox={`0 0 ${W} ${H}`}
          preserveAspectRatio="xMaxYMid meet"
          className="w-full h-full"
          aria-hidden="true"
        >
          <defs>
            {/* Volume bar gradient */}
            <linearGradient id="hc-vol-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2A7A55" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#1F5A3E" stopOpacity="0.55" />
            </linearGradient>
            {/* Trend line gradient */}
            <linearGradient id="hc-trend-grad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(125,227,168,0.15)" />
              <stop offset="100%" stopColor="rgba(125,227,168,0.7)" />
            </linearGradient>
          </defs>

          {/* ── Dot grid ──────────────────────────────── */}
          <g opacity="0.9">
            {gridDots.map((d, i) => (
              <circle
                key={i}
                cx={d.cx}
                cy={d.cy}
                r={1}
                fill="rgba(125,227,168,0.13)"
              />
            ))}
          </g>

          {/* ── Volume bars ───────────────────────────── */}
          <g>
            {candles.map((c, i) => {
              const x = i * STEP + 20;
              const barH = VOL_H * c.volume * 0.82;
              return (
                <rect
                  key={`vol-${i}`}
                  x={x}
                  y={H - barH}
                  width={BODY_W}
                  height={barH}
                  fill="url(#hc-vol-grad)"
                  rx={1}
                />
              );
            })}
          </g>

          {/* ── Candles ───────────────────────────────── */}
          {candles.map((c, i) => {
            const x = i * STEP + 20;
            const isGreen = c.close >= c.open;
            const isAccent = i % 6 === 5;

            // Color logic
            let bodyFill: string;
            if (isAccent) {
              bodyFill = accent;
            } else if (isGreen) {
              bodyFill = i % 3 === 1 ? "#7DE3A8" : "#2FBF71";
            } else {
              bodyFill = "#1F7A4A"; // muted dark (not red)
            }

            const bodyTop = priceToY(Math.max(c.open, c.close));
            const bodyBot = priceToY(Math.min(c.open, c.close));
            const bodyH = Math.max(2, bodyBot - bodyTop);
            const cx = x + BODY_W / 2;
            const highY = priceToY(c.high);
            const lowY = priceToY(c.low);

            const { blur, opacity } = getDepth(i);
            const delay = i * 40;

            return (
              <g
                key={`c-${i}`}
                style={{
                  filter: blur > 0 ? `blur(${blur}px)` : undefined,
                  opacity,
                }}
              >
                {/* Upper wick */}
                <line
                  className="hc-wick"
                  x1={cx}
                  y1={highY}
                  x2={cx}
                  y2={bodyTop}
                  stroke="rgba(125,227,168,0.55)"
                  strokeWidth={1.5}
                  strokeLinecap="square"
                  style={{ animationDelay: `${delay + 650}ms` }}
                />
                {/* Lower wick */}
                <line
                  className="hc-wick"
                  x1={cx}
                  y1={bodyBot}
                  x2={cx}
                  y2={lowY}
                  stroke="rgba(125,227,168,0.55)"
                  strokeWidth={1.5}
                  strokeLinecap="square"
                  style={{ animationDelay: `${delay + 650}ms` }}
                />
                {/* Body */}
                <rect
                  className="hc-body"
                  x={x}
                  y={bodyTop}
                  width={BODY_W}
                  height={bodyH}
                  fill={bodyFill}
                  rx={1}
                  style={{ animationDelay: `${delay}ms` }}
                />
                {/* Subtle highlight line on body */}
                {isGreen && (
                  <line
                    x1={x + 2}
                    y1={bodyTop + 1}
                    x2={x + 2}
                    y2={bodyTop + bodyH * 0.45}
                    stroke="rgba(255,255,255,0.25)"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                  />
                )}
              </g>
            );
          })}

          {/* ── Trend line ────────────────────────────── */}
          <path
            className="hc-trend"
            d={trendPath}
            fill="none"
            stroke="url(#hc-trend-grad)"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray={trendLen}
            strokeDashoffset={trendLen}
            style={{ ["--dash-len" as string]: trendLen }}
          />
        </svg>
      </div>
    </div>
  );
}
