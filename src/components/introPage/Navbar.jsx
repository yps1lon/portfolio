import React from "react";

export default function Navbar({ sections, activeId, onJump }) {
  return (
    <nav aria-label="Chapters"
      style={{
        position: "fixed", left: 0, top: "50%",
        transform: "translateY(-50%)",
        display: "flex", flexDirection: "column", gap: 8,
        zIndex: 100,
      }}>
      {sections.map((s) => (
        <a key={s.id} href={`#${s.id}`}
          onClick={(e) => { e.preventDefault(); onJump(s.id); }}
          className={`bookmark ${activeId === s.id ? "active" : ""}`}
          style={{ background: s.color, textDecoration: "none" }}>
          <div className="noise-layer" />
          <div className="halftone-layer" />
          <span className="label">{s.label}</span>
        </a>
      ))}
    </nav>
  );
}
