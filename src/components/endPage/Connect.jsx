import React from "react";
import {
  Tape, Sticker, TornSheet, Starburst, HalftoneBurst, Reveal, SectionHeader
} from "../primitives.jsx";
import email from "../../assets/email.png";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin-sketched-social-logo.png";
import footprints from "../../assets/footprints.png";

const LINKS = [
  { label: "EMAIL", sub: "my email!!", href: "mailto:benjamin.mahic1@gmail.com", icon: email, color: "var(--rust-hot)", rot: -3 },
  { label: "GITHUB", sub: "@ypsilon", href: "https://github.com/yps1lon", icon: github, color: "var(--ink)", rot: 2 },
  { label: "LINKEDIN", sub: "benjamin mahic", href: "https://www.linkedin.com/in/benjaminmahic/", icon: linkedin, color: "var(--ivy)", rot: -2 },
];

export default function Connect() {
  return (
    <section id="connect" data-screen-label="05 Connect" style={{ minHeight: "100vh", padding: "80px 0 120px", position: "relative" }}>
      <div className="stage" style={{ position: "relative" }}>

        <Reveal>
          <SectionHeader chapter="● The Final Page ●" title="SAY HI" sfx="♥" sfxColor="rust" />
        </Reveal>

        <Reveal>
          <HalftoneBurst size={420} color="var(--rust-hot)"
            style={{ position: "absolute", top: 160, left: "50%", marginLeft: -210, opacity: .25, zIndex: 0 }} />
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) 300px", gap: 48, alignItems: "flex-start", position: "relative", zIndex: 1 }} className="connect-grid">

          <Reveal>
            <div style={{ position: "relative" }}>
              <Tape rot={-10} w={110} h={28} style={{ top: -10, left: 40, zIndex: 5 }} />
              <Tape rot={14} w={100} h={26} style={{ top: -8, right: 50, zIndex: 5 }} />

              <TornSheet tilt={-0.5} variant="all" style={{ padding: "44px 42px 48px" }}>
                <div style={{ fontFamily: "'Bungee', sans-serif", color: "var(--rust-hot)", fontSize: "1.15rem", letterSpacing: ".12em", marginBottom: 6 }}>
                  A LETTER TO YOU.
                </div>
                <div style={{ fontFamily: "'Special Elite', monospace", fontSize: 12, color: "var(--ink-soft)", letterSpacing: ".18em", textTransform: "uppercase", marginBottom: 22 }}>
                  — dated today —
                </div>

                <p style={{ margin: "0 0 14px", fontFamily: "'EB Garamond', serif", fontSize: "1.1rem", lineHeight: 1.7, color: "var(--ink)" }}>
                  Dear reader;
                </p>
                <p style={{ margin: "0 0 14px", paddingLeft: 18, fontFamily: "'EB Garamond', serif", fontSize: "1.08rem", lineHeight: 1.7, color: "var(--ink)" }}>
                  If you've scrolled this far, thank you. Seriously. I spent alot of time creating this portfolio (a year to be exact). Ive tried to capture me as a person in this, and also challenge myself to learn new skills when it comes to UI/UX. Again, thank you for visiting <3
                </p>

                <div style={{ paddingLeft: 18, marginTop: 24 }}>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "1.2rem", color: "var(--ink)", marginBottom: 4 }}>
                    Yours,
                  </div>
                  <div style={{ fontFamily: "'Caveat', cursive", fontSize: "2.4rem", color: "var(--rust-hot)", lineHeight: 1, transform: "rotate(-3deg)", display: "inline-block" }}>
                    Benji ✦
                  </div>
                </div>
              </TornSheet>

              <Sticker src={footprints} w={70} rot={12}
                style={{ position: "absolute", bottom: -30, right: -10, zIndex: 4 }}
                className="hide-on-mobile" />
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div style={{ display: "flex", flexDirection: "column", gap: 18, alignItems: "stretch" }}>
              {LINKS.map((l) => (
                <a key={l.label} href={l.href} className="comic-panel"
                  style={{
                    textDecoration: "none",
                    padding: "14px 16px",
                    transform: `rotate(${l.rot}deg)`,
                    display: "flex", alignItems: "center", gap: 14,
                    transition: "transform .2s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = `rotate(${l.rot}deg) translate(-2px, -2px)`; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = `rotate(${l.rot}deg)`; }}
                >
                  <div style={{
                    width: 48, height: 48,
                    background: l.color,
                    border: "2.5px solid var(--ink)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <img src={l.icon} alt="" style={{ width: 28, height: 28, filter: "invert(1) brightness(1.2)" }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Bungee', sans-serif", fontSize: "0.9rem", color: "var(--ink)", letterSpacing: ".08em" }}>
                      {l.label}
                    </div>
                    <div style={{ fontFamily: "'EB Garamond', serif", fontStyle: "italic", fontSize: "0.95rem", color: "var(--ink-soft)" }}>
                      {l.sub}
                    </div>
                  </div>
                </a>
              ))}

              <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
                <Starburst w={120} rot={-8} bg="var(--yolk)" fg="var(--ink)">
                  LETS<br/>MAKE<br/>STUFF
                </Starburst>
              </div>
            </div>
          </Reveal>
        </div>

        <div style={{
          marginTop: 80, textAlign: "center",
          fontFamily: "'Special Elite', monospace",
          letterSpacing: ".4em", textTransform: "uppercase",
          fontSize: "0.72rem", color: "var(--ink-soft)",
        }}>
          ✺  finis · oslo · mmxxvi  ✺
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .connect-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
