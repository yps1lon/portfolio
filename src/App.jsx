import React, { useState, useEffect } from "react";
import Navbar from "./components/introPage/Navbar.jsx";
import Welcome from "./components/introPage/Welcome.jsx";
import About from "./components/mainPage/About.jsx";
import Education from "./components/mainPage/Education.jsx";
import Projects from "./components/mainPage/Projects.jsx";
import Connect from "./components/endPage/Connect.jsx";
import Tweaks from "./components/Tweaks.jsx";
import noise from "./assets/noise.png";

const SECTIONS = [
  { id: "welcome",   label: "hi!",      color: "#a04a2a" },
  { id: "about",     label: "about",    color: "#3d5242" },
  { id: "education", label: "school",   color: "#6b3a2a" },
  { id: "projects",  label: "projects", color: "#b48a3d" },
  { id: "connect",   label: "say hi",   color: "#2a3a30" },
];

export default function App() {
  const [activeId, setActiveId] = useState("welcome");

  // expose noise url as a CSS var so stylesheets can reference the Vite-hashed asset
  useEffect(() => {
    document.documentElement.style.setProperty("--noise-url", `url(${noise})`);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        let best = null;
        for (const e of entries) {
          if (e.isIntersecting && (!best || e.intersectionRatio > best.intersectionRatio)) best = e;
        }
        if (best) setActiveId(best.target.id);
      },
      { threshold: [0.2, 0.5, 0.75] }
    );
    SECTIONS.forEach((s) => { const el = document.getElementById(s.id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("book.scroll");
    if (saved) window.scrollTo(0, parseFloat(saved));
    let tid;
    function onScroll() {
      clearTimeout(tid);
      tid = setTimeout(() => localStorage.setItem("book.scroll", String(window.scrollY)), 150);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function jump(id) {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 10;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setActiveId(id);
  }

  return (
    <>
      <div className="canvas-bg" />
      <div className="canvas-noise" />
      <div className="canvas-vignette" />

      <Navbar sections={SECTIONS} activeId={activeId} onJump={jump} />
      <Welcome />
      <About />
      <Education />
      <Projects />
      <Connect />
      <Tweaks />
    </>
  );
}
