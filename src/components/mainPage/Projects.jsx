import React from "react";
import { Tape, Sticker, SFX, Reveal, SectionHeader } from "../primitives.jsx";
import burnout from "../../assets/burnout.png";
import doom from "../../assets/MFDOOM.png";
import stirfry from "../../assets/stir-fry.png";
import letitrip from "../../assets/letitrip.png";
import cmiygl from "../../assets/CMIYGL.png";
import howdoyoulive from "../../assets/how do you live with yourself.png";
import deadpool from "../../assets/deadpool.png";

const PROJECTS = [
  /*{ id: "birthday-card", title: "BIRTHDAY CARD", sub: "a love letter in html", tags: ["React", "CSS"], year: "'25",
    note: "Made for a friend. Scrollable memory lane — made her cry (good kind).",
    img: howdoyoulive, rot: -3, sfx: { text: "AWW!", color: "rust", rot: -10 }, tapeRot: -14 },
  { id: "diary-cms", title: "PAPER DIARY", sub: "markdown, but cozy", tags: ["Next.js", "MDX"], year: "'24",
    note: "A writing tool that feels like writing, not typing. Pen-cursor, drag-reorder.",
    img: doom, rot: 2.5, sfx: null, tapeRot: 16 },
  { id: "stir-fry", title: "WHAT TO COOK", sub: "fridge → dinner, 3 taps", tags: ["SwiftUI"], year: "'24",
    note: "Built after one too many nights of plain rice. Now runs my kitchen.",
    img: stirfry, rot: -2, sfx: { text: "YUM!", color: "gold", rot: 8 }, tapeRot: -18 },
  { id: "let-it-rip", title: "LET IT RIP", sub: "a small music zine", tags: ["Astro", "Three.js"], year: "'23",
    note: "Album reviews that look like xeroxed flyers. Best viewed loud.",
    img: letitrip, rot: 3.5, sfx: { text: "BAM!", color: "ivy", rot: -6 }, tapeRot: 20 },
  { id: "cmiygl", title: "CMIYGL", sub: "fan site, mr morale", tags: ["Vue", "GSAP"], year: "'22",
    note: "A weekend shrine to a record that didn't leave my head for a month.",
    img: cmiygl, rot: -4, sfx: null, tapeRot: -10 },
  { id: "how-do-you-live", title: "HOW DO YOU LIVE?", sub: "reading-journal app", tags: ["Remix", "Supabase"], year: "'23",
    note: "Notes, quotes & spoiler warnings. Syncs across devices so I don't lose that one line.",
    img: burnout, rot: 2, sfx: { text: "!!", color: "rust", rot: 12 }, tapeRot: 14 },
       */
  { id: "how-do-you-live", title: "WIP", sub: "Moving Price Estimator", tags: ["React", "TypeScript"], year: "'26",
    note: "Find the best cheap wines at Vinmonopolet!",
    img: burnout, rot: 2, sfx: { text: "!!", color: "rust", rot: 12 }, tapeRot: 14 },
];

function ProjectCard({ p, idx }) {
  return (
    <div style={{ position: "relative" }}>
      <div style={{ transform: `rotate(${p.rot}deg)`, position: "relative" }}>
        <Tape rot={p.tapeRot} w={90} h={26} style={{ top: -12, left: "50%", marginLeft: -45, zIndex: 5 }} />
        <div className="polaroid polaroid-hard" style={{ padding: "10px 10px 14px" }}>
          <div style={{
            width: "100%", aspectRatio: "1 / 1", overflow: "hidden",
            background: "var(--paper-bg)",
            borderBottom: "2px solid var(--ink)",
            marginBottom: 10, position: "relative",
          }}>
            <img src={p.img} alt={p.title}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", filter: "contrast(1.05) saturate(.95)" }} />
            <div className="halftone-light" style={{
              position: "absolute", top: 0, right: 0, width: 60, height: 60,
              opacity: .35,
              maskImage: "linear-gradient(225deg, black 0%, transparent 85%)",
              WebkitMaskImage: "linear-gradient(225deg, black 0%, transparent 85%)",
            }} />
          </div>

          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 8, padding: "0 4px" }}>
            <h3 style={{ margin: 0, fontFamily: "'Anton', sans-serif", fontSize: "1.25rem", letterSpacing: ".02em", color: "var(--ink)", lineHeight: 1 }}>
              {p.title}
            </h3>
            <div style={{ fontFamily: "'Special Elite', monospace", fontSize: "0.75rem", color: "var(--ink-soft)" }}>
              VOL.{idx + 1} · {p.year}
            </div>
          </div>
          <div style={{ padding: "2px 4px 8px", fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "0.95rem", color: "var(--ink-soft)" }}>
            or, {p.sub}
          </div>
          <p style={{ margin: "0 4px 10px", fontFamily: "'EB Garamond', serif", fontSize: "0.95rem", lineHeight: 1.5, color: "var(--ink)" }}>
            {p.note}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, padding: "0 4px" }}>
            {p.tags.map((t) => (
              <span key={t} style={{
                fontFamily: "'Special Elite', monospace",
                fontSize: "0.7rem", letterSpacing: ".12em",
                textTransform: "uppercase",
                padding: "3px 8px",
                border: "1.5px solid var(--ink)",
                background: "var(--cream-warm)",
                color: "var(--ink)",
              }}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      {p.sfx && (
        <div style={{
          position: "absolute",
          ...(idx % 2 === 0 ? { bottom: -20, right: -25 } : { top: -24, left: -20 }),
          zIndex: 8,
        }} className="hide-on-mobile">
          <SFX text={p.sfx.text} rot={p.sfx.rot} size={1.5} color={p.sfx.color} />
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" data-screen-label="04 Projects" style={{ minHeight: "100vh", padding: "80px 0", position: "relative" }}>
      <div className="stage" style={{ position: "relative" }}>

        <Reveal>
          <SectionHeader chapter="● Chapter Three ●" title="PROJECTS" sfx="ZAP!" sfxColor="rust" />
        </Reveal>

        <Reveal delay={80}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <div className="sticker" style={{ background: "var(--yolk)", transform: "rotate(-2deg)", display: "inline-block", fontSize: "0.85rem" }}>
              ★ A CATALOGUE OF WORKS ★
            </div>
          </div>
        </Reveal>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: "60px 36px",
          position: "relative", zIndex: 1,
        }} className="proj-grid">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.id} delay={i * 80}>
              <ProjectCard p={p} idx={i} />
            </Reveal>
          ))}
        </div>

        <Sticker src={deadpool} w={90} rot={-14}
          style={{ position: "absolute", bottom: 40, right: 20, zIndex: 3, opacity: .9 }}
          className="hide-on-mobile" />
      </div>

      <style>{`
        @media (max-width: 960px) {
          .proj-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
        }
        @media (max-width: 600px) {
          .proj-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
