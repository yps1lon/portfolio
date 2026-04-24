import React from "react";
import {
  Cutout, Tape, Polaroid, Sticker, Postit, SFX, Starburst, Speech,
  HalftoneBurst, Arrow, Reveal
} from "../primitives.jsx";
import me2 from "../../assets/me2.jpg";
import burnout from "../../assets/burnout.png";
import cmiygl from "../../assets/CMIYGL.png";
import flower from "../../assets/flower.png";
import peace from "../../assets/peace.png";
import pfp from "../../assets/pfp.jpg";
export default function Welcome() {
  return (
    <section id="welcome" data-screen-label="01 Welcome" style={{ minHeight: "100vh", position: "relative", padding: "60px 0" }}>
      <div className="stage" style={{ position: "relative", minHeight: 780 }}>

        <Reveal>
          <HalftoneBurst size={480} color="var(--ink)"
            style={{ position: "absolute", top: 120, left: "50%", marginLeft: -240, opacity: .35, zIndex: 0 }} />
        </Reveal>

        <Reveal delay={150}>
          <img src={cmiygl} alt=""
            style={{
              position: "absolute", top: -20, left: -40,
              width: 280, opacity: .9, zIndex: 1,
              filter: "drop-shadow(3px 3px 0 rgba(42,36,28,.3))",
            }}
            className="hide-on-mobile"
          />
        </Reveal>

        <Reveal delay={200}>
          <div style={{ position: "absolute", top: 40, right: 20, zIndex: 6 }} className="hide-on-mobile">
            <Starburst w={150} rot={14} bg="var(--rust-hot)" fg="var(--cream)">
              SCRAPBOOK<br/>2026
            </Starburst>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div style={{ position: "relative", zIndex: 5, maxWidth: 720, margin: "140px auto 0", textAlign: "center" }}>
            <div style={{
              fontFamily: "'Special Elite', monospace",
              letterSpacing: ".35em",
              textTransform: "uppercase",
              fontSize: "0.85rem",
              color: "var(--ink-soft)",
              marginBottom: 20,
            }}>
              ✺  a portfolio, mostly  ✺
            </div>

            <div style={{ display: "flex", justifyContent: "center", marginBottom: 14 }}>
              <Cutout text="BENJI" scale={1.25} />
            </div>

            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "clamp(1.3rem, 2.6vw, 1.9rem)",
              color: "var(--ink)",
              marginTop: 10,
              lineHeight: 1.2,
            }}>
              builds things. ships things. <br className="hide-on-mobile"/>
              <span style={{ color: "var(--rust-hot)" }}>cooks dinner alot.</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={300}>
          <div style={{ position: "relative", width: 260, margin: "48px auto 0", zIndex: 4 }}>
            <Tape rot={-12} w={110} h={30} style={{ top: -16, left: 70, zIndex: 6 }} />
            <Tape rot={20} w={100} h={28} style={{ top: -14, right: 55, zIndex: 6 }} />
            <Polaroid src={pfp} caption="the author, hi!" w={260} h={310} imgH={240} rot={-2} />
          </div>
        </Reveal>

        <Reveal delay={400}>
          <div style={{ position: "absolute", top: 360, left: 40, zIndex: 7 }} className="hide-on-mobile">
            <Speech w={200} rot={-6}>
              HEY! I'M<br/><span style={{ color: "var(--rust-hot)" }}>BENJAMIN!</span>
            </Speech>
          </div>
        </Reveal>

        <Reveal delay={500}>
          <div style={{ position: "absolute", bottom: 120, right: 50, zIndex: 7 }} className="hide-on-mobile">
            <SFX text="POW!" rot={8} size={2.8} color="rust" />
          </div>
        </Reveal>

        <Reveal delay={500}>
          <Sticker src={flower} w={90} rot={18}
            style={{ position: "absolute", top: 280, right: 180, zIndex: 5 }}
            className="hide-on-mobile" />
        </Reveal>

        <Reveal delay={550}>
          <Sticker src={peace} w={80} rot={-12}
            style={{ position: "absolute", bottom: 180, left: 120, zIndex: 5 }}
            className="hide-on-mobile" />
        </Reveal>

        <Reveal delay={600}>
          <div style={{ position: "absolute", bottom: 40, left: 40, zIndex: 5 }} className="hide-on-mobile">
            <Postit rot={-5} color="#ffe26a" w={170}>
              <div style={{ fontFamily: "'Bungee', sans-serif", fontSize: 13, marginBottom: 6, letterSpacing: ".08em" }}>TO-DO:</div>
              <div style={{ fontSize: 15, lineHeight: 1.35 }}>
                ✎ scroll down<br/>
                ✎ read the book<br/>
                ✎ say hi ☺
              </div>
            </Postit>
          </div>
        </Reveal>

        <Reveal delay={700}>
          <Arrow w={70} rot={-10}
            style={{ position: "absolute", bottom: -10, right: "48%", zIndex: 6 }} />
        </Reveal>

        <Reveal delay={800}>
          <div style={{
            position: "absolute", bottom: 20, right: 40, zIndex: 6,
            fontFamily: "'Caveat', cursive", fontSize: "1.4rem", color: "var(--ink)",
            transform: "rotate(-4deg)",
          }} className="hide-on-mobile">
            keep going →
          </div>
        </Reveal>
      </div>
    </section>
  );
}
