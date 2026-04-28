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
  { id: "wine-finder", title: "WIP", sub: "'AI' Wine Finder", tags: ["React", "TypeScript"], year: "'26",
    note: "Find the best cheap wines at Vinmonopolet!",
    img: burnout, rot: 2, sfx: { text: "YUM!", color: "rust", rot: 12 }, tapeRot: 14,
    href: "#" },
  { id: "in5320", title: "IN5320", sub: "School Inspection", tags: ["React", "API"], year: "'25",
    note: "Exam for 2025, fullstack app that uses DHIS2 API to create an application!",
    img: burnout, rot: 2, sfx: { text: "??", color: "ivy", rot: 8 }, tapeRot: -18,
    href: "https://github.com/GenjiPlayer/IN5320-School-Inspection" },
  { id: "how-do-you-live", title: "PG3402", sub: "Workout Generator", tags: ["Java SpringBoot, RabbitMQ, Docker,  REST, React"], year: "'24",
    note: "Exam for 2024, fullstack app with homemade endpoints, health checks, deployment and external API calls!",
    img: burnout, rot: 2, sfx: { text: "!!", color: "ivy", rot: 8 }, tapeRot: -18, href: "https://github.com/GenjiPlayer/PersonalTrainerAi" },
];

function ProjectCard({ p, idx }) {
  return (
      <div style={{ position: "relative" }} className="project-card-wrap">
        <a
            href={p.href || "#"}
            target={p.href && p.href !== "#" ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="project-card-link"
            style={{ display: "block", textDecoration: "none", color: "inherit", transform: `rotate(${p.rot}deg)`, position: "relative" }}
        >
          <Tape rot={p.tapeRot} w={90} h={26} style={{ top: -12, left: "50%", marginLeft: -45, zIndex: 5 }} className="project-card-tape" />
          <div className="polaroid polaroid-hard project-card-body" style={{ padding: "10px 10px 14px" }}>
            <div style={{
              width: "100%", aspectRatio: "1 / 1", overflow: "hidden",
              background: "var(--paper-bg)",
              borderBottom: "2px solid var(--ink)",
              marginBottom: 10, position: "relative",
            }}>
              <img src={p.img} alt={p.title}
                   className="project-card-img"
                   style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", filter: "contrast(1.05) saturate(.95)" }} />
              <div className="halftone-light" style={{
                position: "absolute", top: 0, right: 0, width: 60, height: 60,
                opacity: .35,
                maskImage: "linear-gradient(225deg, black 0%, transparent 85%)",
                WebkitMaskImage: "linear-gradient(225deg, black 0%, transparent 85%)",
              }} />
              {/* hover-only "OPEN" stamp */}
              <div className="project-card-stamp">
                <span>OPEN ↗</span>
              </div>
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
        </a>

        {p.sfx && (
            <div style={{
              position: "absolute",
              ...(idx % 2 === 0 ? { bottom: -38, right: -42 } : { top: -42, left: -36 }),
              zIndex: 50,
              pointerEvents: "none",
            }} className="hide-on-mobile project-card-sfx">
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
        </div>

        <style>{`
        @media (max-width: 960px) {
          .proj-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
        }
        @media (max-width: 600px) {
          .proj-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }

        /* ===== hanging project cards: hover + click ===== */
        .project-card-wrap { perspective: 800px; position: relative; }

        /* SFX must always sit on top of the card, even on hover */
        .project-card-sfx { z-index: 50 !important; }

        .project-card-link {
          cursor: pointer;
          transform-origin: 50% 0%;        /* swing from the tape at the top */
          will-change: transform;
          transition:
            transform .35s cubic-bezier(.2, .9, .25, 1.4),
            filter .25s ease;
          filter: drop-shadow(2px 4px 0 rgba(42,36,28,.18));
        }

        /* gentle continuous wobble — like it's hanging on a wall */
        @keyframes hang-sway {
          0%, 100% { transform: rotate(var(--rot, 0deg)); }
          50%      { transform: rotate(calc(var(--rot, 0deg) + 0.6deg)); }
        }

        /* HOVER: lift, swing slightly more, deepen shadow, lift tape, jitter image */
        .project-card-link:hover {
          transform: rotate(0deg) translateY(-6px) scale(1.025);
          filter: drop-shadow(6px 10px 0 rgba(42,36,28,.32));
          z-index: 20;
        }
        .project-card-link:hover .project-card-tape {
          transform: rotate(calc(var(--tape-rot, 0deg) - 4deg)) translateY(-2px) scale(1.05);
        }
        .project-card-link:hover .project-card-img {
          transform: scale(1.06);
          filter: contrast(1.1) saturate(1.05);
        }
        .project-card-img {
          transition: transform .5s cubic-bezier(.2,.9,.25,1.1), filter .3s ease;
        }

        /* OPEN stamp slides in on hover */
        .project-card-stamp {
          position: absolute;
          inset: auto 0 0 0;
          padding: 8px 10px;
          background: var(--rust-hot, #a04a2a);
          color: var(--cream, #f4ead5);
          font-family: 'Bungee', sans-serif;
          font-size: 0.78rem;
          letter-spacing: .15em;
          text-align: center;
          border-top: 2px solid var(--ink, #2a241c);
          transform: translateY(110%);
          transition: transform .28s cubic-bezier(.3, .9, .3, 1.2);
          pointer-events: none;
        }
        .project-card-link:hover .project-card-stamp {
          transform: translateY(0%);
        }

        /* ACTIVE / CLICK: hard squish, shadow collapses */
        .project-card-link:active {
          transform: rotate(0deg) translateY(-1px) scale(.97);
          filter: drop-shadow(1px 2px 0 rgba(42,36,28,.4));
          transition:
            transform .08s ease-out,
            filter .08s ease-out;
        }
        .project-card-link:active .project-card-tape {
          transform: rotate(calc(var(--tape-rot, 0deg) - 8deg)) translateY(0) scale(.98);
          transition: transform .08s ease-out;
        }
        .project-card-link:active .project-card-img {
          transform: scale(.99);
          transition: transform .08s ease-out;
        }

        /* keyboard focus ring (accessibility) */
        .project-card-link:focus-visible {
          outline: 3px dashed var(--rust-hot, #a04a2a);
          outline-offset: 6px;
        }

        @media (prefers-reduced-motion: reduce) {
          .project-card-link,
          .project-card-img,
          .project-card-stamp,
          .project-card-tape { transition: none !important; }
        }
      `}</style>
      </section>
  );
}