import React from "react";
import { Tape, Polaroid, Sticker, Starburst, Reveal, SectionHeader } from "../primitives.jsx";
import grad from "../../assets/grad.jpg";
import fish from "../../assets/fish.png";
import burnout from "../../assets/burnout.png";

const ITEMS = [
  {
    school: "KRISTIANIA",
    sub: "University College",
    degree: "B.Sc. Programming",
    years: "2022 — 2025",
    place: "Oslo, Norway",
    body: "Python, Java, C#, Node.Js, React. Worked accross the stack and averaged a grade B",
    color: "var(--ivy)",
    rot: -1.2,
  },
  {
    school: "AIBA.AI",
    sub: "Bachelors Thesis",
    degree: "Project work as Scrum Master",
    years: "January 2025 — May 2025",
    place: "Gjøvik, Norway",
    body: "Project under NDA",
    color: "var(--rust-hot)",
    rot: 1.4,
  },
  {
    school: "UiO",
    sub: "Master's program",
    degree: "M.Sc. Informatics, System Architecture & Programming",
    years: "2025 — NOW",
    place: "Oslo, Norway",
    body: "Masters Thesis about visualizing agentic code to help reduce technical debt! TypeScript, React, Java, C++.",
    color: "var(--ivy)",
    rot: 1.4,
  },

  {
    school: "BOUVET",
    sub: "Summer Internship",
    degree: "Fullstack Web App Dev",
    years: "June 2026 — July 2026",
    place: "Oslo, Norway",
    body: "Worked as a webapps consultant during the summer!",
    color: "var(--rust-hot)",
    rot: 1.4,
  },
];

export default function Education() {
  return (
    <section id="education" data-screen-label="03 Education" style={{ minHeight: "100vh", padding: "80px 0", position: "relative" }}>
      <div className="stage" style={{ position: "relative", minHeight: 780 }}>

        <Reveal>
          <SectionHeader chapter="● Chapter Two ●" title="SCHOOL & EXP" sfx="BONK!" sfxColor="ink" />
        </Reveal>

        <div className="halftone-rust desktop-only"
          style={{
            position: "absolute", top: 40, left: 20, width: 200, height: 200,
            opacity: .3, zIndex: 0,
            maskImage: "radial-gradient(circle at center, black 0%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(circle at center, black 0%, transparent 75%)",
          }}
        />

        <div style={{ display: "grid", gridTemplateColumns: "260px minmax(0, 1fr)", gap: 48, alignItems: "flex-start", position: "relative", zIndex: 1 }} className="edu-grid">

          <Reveal>
            <div style={{ position: "relative" }}>
              <Tape rot={-18} w={90} h={26} style={{ top: -14, left: 70, zIndex: 5 }} />
              <Polaroid src={grad} caption="class of '24" w={240} h={290} imgH={220} rot={-3} />

              <Sticker src={fish} w={90} rot={12}
                style={{ position: "absolute", bottom: -40, right: -20, zIndex: 4 }}
                className="hide-on-mobile" />

              <div style={{ position: "absolute", top: -30, right: -30, zIndex: 6 }} className="hide-on-mobile">
                <Starburst w={90} rot={16} bg="var(--yolk)" fg="var(--ink)">
                  GRAD'D!
                </Starburst>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
              {ITEMS.map((it) => (
                <div key={it.school} className="comic-panel"
                  style={{ padding: "20px 24px 22px", transform: `rotate(${it.rot}deg)`, position: "relative" }}>

                  <div style={{
                    position: "absolute", top: -16, right: 20,
                    background: it.color, color: "var(--cream)",
                    fontFamily: "'Bungee', sans-serif",
                    fontSize: "0.82rem", padding: "6px 14px",
                    letterSpacing: ".1em",
                    border: "3px solid var(--ink)",
                    boxShadow: "3px 3px 0 var(--ink)",
                    transform: "rotate(3deg)",
                  }}>
                    {it.years}
                  </div>

                  <div style={{
                    fontFamily: "'Anton', sans-serif",
                    fontSize: "2.4rem", letterSpacing: ".02em",
                    color: it.color, lineHeight: .95,
                    margin: "4px 0 2px",
                  }}>{it.school}</div>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "1.1rem", color: "var(--ink-soft)", marginBottom: 4 }}>
                    {it.sub} · {it.place}
                  </div>
                  <div style={{
                    fontFamily: "'Special Elite', monospace",
                    fontSize: "0.78rem", letterSpacing: ".12em",
                    textTransform: "uppercase", color: "var(--ink)",
                    marginBottom: 12,
                    paddingBottom: 10,
                    borderBottom: "2px dashed var(--ink-soft)",
                  }}>✎ {it.degree}</div>
                  <p style={{ margin: 0, fontFamily: "'EB Garamond', serif", fontSize: "1.05rem", lineHeight: 1.6, color: "var(--ink)" }}
                    dangerouslySetInnerHTML={{ __html: it.body }}
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .edu-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
