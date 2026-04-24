// Shared primitives for the scrapbook portfolio
import React, { useMemo, useState, useEffect, useRef } from "react";
import noise from "../assets/noise.png";
import tapeImg from "../assets/tape.png";
import downArrow from "../assets/down-arrow-sketch.png";

// ---- Cutout chars (ransom-note) ----
const CUTOUT_STYLES = [
  { bg: "#6b3a2a", fg: "#f4ead5", font: "'Bungee', sans-serif", weight: 400, w: 56, h: 64, size: 42, rot: -4 },
  { bg: "#f4ead5", fg: "#6b3a2a", font: "'Archivo Black', sans-serif", weight: 900, w: 56, h: 56, size: 36, rot: 3 },
  { bg: "#e8dcbb", fg: "#2a241c", font: "'Anton', sans-serif", weight: 400, w: 48, h: 64, size: 46, rot: -5 },
  { bg: "#2a241c", fg: "#f4ead5", font: "'Bungee', sans-serif", weight: 400, w: 48, h: 56, size: 36, rot: 4 },
  { bg: "#a04a2a", fg: "#f4ead5", font: "'Archivo Black', sans-serif", weight: 900, w: 56, h: 56, size: 38, rot: -2 },
  { bg: "#3d5242", fg: "#f4ead5", font: "'Bungee Shade', sans-serif", weight: 400, w: 48, h: 60, size: 38, rot: 5 },
  { bg: "#e4b13a", fg: "#2a241c", font: "'Archivo Black', sans-serif", weight: 900, w: 52, h: 58, size: 38, rot: -3 },
  { bg: "#efe3c5", fg: "#a04a2a", font: "'Anton', sans-serif", weight: 400, w: 50, h: 64, size: 46, rot: 2 },
];
const CUT_PATHS = [
  "polygon(2% 3%,98% 2%,99% 97%,3% 98%)",
  "polygon(4% 6%,22% 2%,45% 7%,68% 3%,92% 5%,97% 24%,99% 48%,96% 72%,98% 94%,74% 98%,52% 94%,28% 97%,6% 95%,1% 73%,4% 47%,2% 23%)",
  "polygon(3% 2%,97% 5%,96% 96%,2% 94%)",
  "polygon(5% 4%,95% 2%,98% 96%,2% 97%)",
];

export function Cutout({ text, scale = 1 }) {
  const seed = useMemo(
    () => text.split("").map((c, i) => ({
      t: CUTOUT_STYLES[(c.charCodeAt(0) + i * 3) % CUTOUT_STYLES.length],
      path: CUT_PATHS[(c.charCodeAt(0) + i) % CUT_PATHS.length],
    })),
    [text]
  );
  return (
    <div style={{ display: "inline-flex", flexWrap: "wrap", gap: 4, alignItems: "flex-end", justifyContent: "center" }}>
      {text.split("").map((ch, i) => {
        if (ch === " ") return <div key={i} style={{ width: 14 * scale }} />;
        const s = seed[i].t;
        return (
          <span key={i} className="cutout-char"
            style={{
              background: s.bg, color: s.fg,
              fontFamily: s.font, fontWeight: s.weight,
              width: s.w * scale, height: s.h * scale, fontSize: s.size * scale,
              transform: `rotate(${s.rot}deg)`,
              clipPath: seed[i].path,
            }}>
            <span className="noise-over" style={{ backgroundImage: `url(${noise})` }} />
            <span style={{ position: "relative", zIndex: 2, lineHeight: 1 }}>{ch}</span>
          </span>
        );
      })}
    </div>
  );
}

// ---- Tape strip ----
export function Tape({ rot = 0, w = 90, h = 28, style = {} }) {
  return (
    <img src={tapeImg} alt=""
      style={{
        width: w, height: h, objectFit: "cover",
        transform: `rotate(${rot}deg)`,
        position: "absolute",
        filter: "drop-shadow(1px 2px 3px rgba(42,36,28,.25))",
        pointerEvents: "none",
        ...style,
      }}
    />
  );
}

// ---- Polaroid ----
export function Polaroid({ src, caption, rot = 0, w = 210, h = 250, style = {}, imgH, tape, hard = true }) {
  return (
    <div className={`polaroid ${hard ? "polaroid-hard" : ""}`}
      style={{ width: w, height: h, transform: `rotate(${rot}deg)`, position: "relative", ...style }}>
      {tape && <Tape rot={tape.rot || -15} w={tape.w || 70} h={tape.h || 22} style={{ top: -10, left: "50%", marginLeft: -35, zIndex: 5, ...tape.style }} />}
      <div style={{ width: "100%", height: imgH || h - 48, overflow: "hidden", background: "#ddd" }}>
        <img src={src} alt={caption || ""}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", filter: "contrast(1.05) saturate(.95)" }} />
      </div>
      {caption && (
        <p style={{
          margin: "8px 0 0", textAlign: "center",
          fontFamily: "'Caveat', cursive",
          fontSize: 18, color: "var(--ink)", lineHeight: 1,
        }}>{caption}</p>
      )}
    </div>
  );
}

// ---- Sticker image ----
export function Sticker({ src, w = 100, rot = 0, style = {}, alt = "", className = "" }) {
  return (
    <img src={src} alt={alt} className={className}
      style={{
        width: w, height: "auto",
        transform: `rotate(${rot}deg)`,
        filter: "drop-shadow(3px 3px 0 rgba(42,36,28,.55))",
        pointerEvents: "none",
        ...style,
      }}
    />
  );
}

// ---- Torn sheet ----
export function TornSheet({ children, tilt = 0, className = "", style = {}, variant = "all", bg }) {
  const clipClass = variant === "top" ? "torn-top" : variant === "bottom" ? "torn-bottom" : "torn-all";
  return (
    <div className={`page-sheet ${clipClass} ${className}`}
      style={{ transform: `rotate(${tilt}deg)`, background: bg, ...style }}>
      {children}
    </div>
  );
}

// ---- Postit ----
export function Postit({ children, rot = -3, color = "#ffe26a", w = 180, style = {} }) {
  return (
    <div style={{
      width: w, minHeight: w * 0.9,
      background: color,
      padding: "16px 14px 18px",
      fontFamily: "'Kalam', cursive",
      color: "#3a2a10",
      boxShadow: "5px 6px 0 rgba(42,36,28,.55)",
      transform: `rotate(${rot}deg)`,
      position: "relative",
      backgroundImage: `url(${noise})`,
      backgroundBlendMode: "multiply",
      ...style,
    }}>
      {children}
    </div>
  );
}

// ---- SFX burst ----
export function SFX({ text, rot = -6, size = 2.2, color = "rust", style = {} }) {
  const bg = color === "rust" ? "var(--rust-hot)" : color === "ivy" ? "var(--ivy)" : color === "gold" ? "var(--yolk)" : color === "ink" ? "var(--ink)" : color;
  const fg = color === "gold" ? "var(--ink)" : "var(--cream)";
  return (
    <span className="sfx"
      style={{
        background: bg, color: fg,
        fontSize: `${size}rem`,
        transform: `rotate(${rot}deg)`,
        ...style,
      }}>{text}</span>
  );
}

// ---- Starburst ----
export function Starburst({ children, w = 120, rot = -8, bg = "var(--rust-hot)", fg = "var(--cream)", style = {} }) {
  return (
    <div className="starburst"
      style={{
        width: w, height: w,
        background: bg, color: fg,
        display: "flex", alignItems: "center", justifyContent: "center",
        textAlign: "center",
        fontFamily: "'Bungee', sans-serif",
        fontSize: w / 8,
        lineHeight: 1,
        letterSpacing: ".02em",
        padding: w * 0.22,
        transform: `rotate(${rot}deg)`,
        filter: "drop-shadow(3px 4px 0 rgba(42,36,28,.55))",
        textTransform: "uppercase",
        ...style,
      }}>{children}</div>
  );
}

// ---- Speech bubble ----
export function Speech({ children, rot = 0, w = 220, style = {} }) {
  return (
    <div className="speech" style={{ width: w, transform: `rotate(${rot}deg)`, ...style }}>
      {children}
    </div>
  );
}

// ---- Halftone burst ----
export function HalftoneBurst({ size = 260, color = "var(--ink)", style = {} }) {
  return (
    <div style={{
      width: size, height: size, pointerEvents: "none",
      backgroundImage: `radial-gradient(${color} 2px, transparent 2.5px)`,
      backgroundSize: "9px 9px",
      maskImage: "radial-gradient(circle at center, black 0%, black 30%, transparent 75%)",
      WebkitMaskImage: "radial-gradient(circle at center, black 0%, black 30%, transparent 75%)",
      ...style,
    }} />
  );
}

// ---- Arrow ----
export function Arrow({ src = downArrow, w = 80, rot = 0, style = {} }) {
  return (
    <img src={src} alt=""
      style={{
        width: w, height: "auto",
        transform: `rotate(${rot}deg)`,
        filter: "drop-shadow(2px 2px 0 rgba(42,36,28,.25))",
        pointerEvents: "none",
        ...style,
      }}
    />
  );
}

// ---- Reveal ----
export function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setTimeout(() => setVis(true), delay); io.disconnect(); } },
      { threshold: 0.08 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [delay]);
  return <div ref={ref} className={`reveal ${vis ? "in" : ""}`}>{children}</div>;
}

// ---- Section header ----
export function SectionHeader({ chapter, title, sfx, sfxColor = "rust" }) {
  return (
    <div style={{ position: "relative", marginBottom: 40, textAlign: "center" }}>
      <div style={{ fontFamily: "'Special Elite', monospace", letterSpacing: ".4em", textTransform: "uppercase", fontSize: "0.7rem", color: "var(--ink-soft)", marginBottom: 10 }}>
        {chapter}
      </div>
      <div style={{ display: "inline-flex", alignItems: "center", gap: 18, flexWrap: "wrap", justifyContent: "center" }}>
        <Cutout text={title} scale={0.82} />
        {sfx && <SFX text={sfx} rot={-10} size={1.4} color={sfxColor} />}
      </div>
    </div>
  );
}
