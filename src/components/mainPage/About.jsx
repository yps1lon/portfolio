import React from "react";
import {
  Cutout, Tape, Polaroid, Sticker, TornSheet, SFX, Reveal, SectionHeader
} from "../primitives.jsx";
import me2 from "../../assets/me2.jpg";
import spiderman from "../../assets/spiderman.png";
import flower from "../../assets/flower.png";

export default function About() {
  return (
    <section id="about" data-screen-label="02 About" style={{ minHeight: "100vh", padding: "80px 0", position: "relative" }}>
      <div className="stage" style={{ position: "relative", minHeight: 820 }}>

        <Reveal>
          <SectionHeader chapter="● Chapter One ●" title="ABOUT" sfx="HI!" sfxColor="ivy" />
        </Reveal>

        <div className="halftone-light desktop-only"
          style={{
            position: "absolute", top: 240, right: 20, width: 280, height: 360,
            opacity: .35, zIndex: 0,
            maskImage: "linear-gradient(135deg, black 0%, transparent 90%)",
            WebkitMaskImage: "linear-gradient(135deg, black 0%, transparent 90%)",
          }}
        />

        <div style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) 300px",
          gap: 40,
          alignItems: "flex-start",
          position: "relative",
          zIndex: 1,
        }} className="about-grid">

          <Reveal>
            <div style={{ position: "relative", paddingTop: 20 }}>
              <Tape rot={-8} w={120} h={30} style={{ top: -4, left: 30, zIndex: 3 }} />
              <Tape rot={12} w={100} h={28} style={{ top: -2, right: 40, zIndex: 3 }} />

              <TornSheet tilt={-0.8} variant="all" style={{ padding: "40px 38px 44px", position: "relative", zIndex: 2 }}>
                <div style={{ fontFamily: "'Bungee', sans-serif", color: "var(--rust-hot)", fontSize: "1.2rem", letterSpacing: ".12em", marginBottom: 10 }}>
                  ABOUT ME.
                </div>
                <div style={{ fontFamily: "'Special Elite', monospace", fontSize: 13, color: "var(--ink-soft)", letterSpacing: ".12em", textTransform: "uppercase", marginBottom: 22 }}>
                  — a paragraph or two —
                </div>
                <p style={{ fontFamily: "'EB Garamond', serif", fontSize: "1.12rem", lineHeight: 1.7, color: "var(--ink)", margin: "0 0 18px" }}>
                  Hey! I'm Benjamin, but most people call me Benji. I build things for the web mostly fullstack, but i am specialized in the backend.
                  Im studying in Oslo, I cook food as a hobby and game. However i do occasionaly try to make cool things.
                </p>
                <p style={{ fontFamily: "'EB Garamond', serif", fontSize: "1.08rem", lineHeight: 1.7, color: "var(--ink)", margin: "0 0 18px" }}>
                  My favorite projects are the ones that people benefit from. Somewhere where I can make a difference.
                  I try to build like someone might still
                  be reading the code ten years from now.
                </p>
                <div style={{
                  marginTop: 18, padding: "14px 16px",
                  background: "var(--cream-warm)",
                  border: "2px dashed var(--ink-soft)",
                  fontFamily: "'Kalam', cursive",
                  fontSize: "1.05rem",
                  color: "var(--ink)",
                }}>
                  ♥ currently reading: <em>The Trial by Franz Kafka</em> · cooking: the best pasta youll ever taste · building: this book.
                </div>
              </TornSheet>

              <div style={{ position: "absolute", top: 10, right: -30, zIndex: 4, transform: "rotate(8deg)" }} className="hide-on-mobile">
                <div className="sticker" style={{ background: "var(--yolk)", fontSize: "0.72rem" }}>★ AUTHENTIC ★</div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div style={{ position: "relative", height: 640 }} className="hide-on-mobile">
              <div style={{ position: "absolute", top: 0, left: 20, zIndex: 3 }}>
                <Tape rot={-18} w={80} h={24} style={{ top: -12, left: 80, zIndex: 5 }} />
                <Polaroid src={me2} caption="self-portrait" w={220} h={260} imgH={200} rot={4} />
              </div>

              <Sticker src={spiderman} w={60} rot={14}
                style={{ position: "absolute", top: 280, left: 10, zIndex: 4 }} />

              <div className="comic-panel" style={{
                position: "absolute", top: 300, left: 60, width: 240,
                padding: "16px 18px 18px", transform: "rotate(-2deg)", zIndex: 2,
              }}>
                <div style={{ fontFamily: "'Bungee', sans-serif", color: "var(--ivy)", fontSize: "1rem", letterSpacing: ".1em", marginBottom: 10, borderBottom: "2px solid var(--ink)", paddingBottom: 6 }}>
                  FAVORITES!
                </div>
                <ul style={{ margin: 0, padding: 0, listStyle: "none", fontFamily: "'Kalam', cursive", fontSize: "1rem", color: "var(--ink)", lineHeight: 1.7 }}>
                  <li>♫ Laufey - A Matter Of Time</li>
                  <li>♪ The Cheeks — Signals</li>
                  <li>☻ Jujutsu Kaisen, MasterChef, Gachiakuta, The Bear</li>
                  <li>♨ homemade ramen</li>
                </ul>
              </div>

              <Sticker src={flower} w={70} rot={-22}
                style={{ position: "absolute", bottom: 20, right: -10, zIndex: 5 }} />
            </div>

            <div className="mobile-only" style={{ marginTop: 24 }}>
              <div className="comic-panel" style={{ padding: "16px 18px 18px", transform: "rotate(-1deg)" }}>
                <div style={{ fontFamily: "'Bungee', sans-serif", color: "var(--ivy)", fontSize: "1rem", letterSpacing: ".1em", marginBottom: 10, borderBottom: "2px solid var(--ink)", paddingBottom: 6 }}>
                  FAVORITES!
                </div>
                <ul style={{ margin: 0, padding: 0, listStyle: "none", fontFamily: "'Kalam', cursive", fontSize: "1rem", color: "var(--ink)", lineHeight: 1.7 }}>
                  <li>♫ MF DOOM — mm.. food</li>
                  <li>♪ Kendrick — GNX</li>
                  <li>☻ Scott Pilgrim (duh)</li>
                  <li>✎ Miyazaki sundays</li>
                  <li>♨ homemade ramen</li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
