import React, { useState, useEffect } from "react";

const DEFAULTS = {
  oxblood: "#6b3a2a",
  rustHot: "#a04a2a",
  ivy: "#3d5242",
  cream: "#f4ead5",
  paperBg: "#e8dcbb",
  paperGrain: 0.22,
};

export default function Tweaks() {
  const [open, setOpen] = useState(false);
  const [vals, setVals] = useState(DEFAULTS);

  useEffect(() => {
    function onMsg(e) {
      if (!e || !e.data) return;
      if (e.data.type === "__activate_edit_mode") setOpen(true);
      if (e.data.type === "__deactivate_edit_mode") setOpen(false);
    }
    window.addEventListener("message", onMsg);
    window.parent.postMessage({ type: "__edit_mode_available" }, "*");
    return () => window.removeEventListener("message", onMsg);
  }, []);

  useEffect(() => {
    const r = document.documentElement.style;
    if (vals.oxblood) r.setProperty("--oxblood", vals.oxblood);
    if (vals.rustHot) r.setProperty("--rust-hot", vals.rustHot);
    if (vals.ivy) r.setProperty("--ivy", vals.ivy);
    if (vals.cream) r.setProperty("--cream", vals.cream);
    if (vals.paperBg) r.setProperty("--paper-bg", vals.paperBg);
    const noiseEl = document.querySelector(".canvas-noise");
    if (noiseEl && typeof vals.paperGrain === "number") noiseEl.style.opacity = vals.paperGrain;
  }, [vals]);

  function set(k, v) {
    const next = { ...vals, [k]: v };
    setVals(next);
    window.parent.postMessage({ type: "__edit_mode_set_keys", edits: { [k]: v } }, "*");
  }

  function close() {
    setOpen(false);
    window.parent.postMessage({ type: "__edit_mode_dismissed" }, "*");
  }

  return (
    <div className={`tweaks-panel ${open ? "open" : ""}`}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h4>TWEAKS</h4>
        <button onClick={close} style={{
          background: "var(--ink)", color: "var(--cream)", border: "none",
          fontFamily: "'Bungee', sans-serif", fontSize: "0.7rem",
          padding: "4px 10px", cursor: "pointer", letterSpacing: ".1em",
        }}>×</button>
      </div>
      <div className="tweak-row"><label>Rust</label>
        <input type="color" value={vals.rustHot} onChange={(e) => set("rustHot", e.target.value)} />
      </div>
      <div className="tweak-row"><label>Dark rust</label>
        <input type="color" value={vals.oxblood} onChange={(e) => set("oxblood", e.target.value)} />
      </div>
      <div className="tweak-row"><label>Ivy</label>
        <input type="color" value={vals.ivy} onChange={(e) => set("ivy", e.target.value)} />
      </div>
      <div className="tweak-row"><label>Paper</label>
        <input type="color" value={vals.cream} onChange={(e) => set("cream", e.target.value)} />
      </div>
      <div className="tweak-row"><label>Background</label>
        <input type="color" value={vals.paperBg} onChange={(e) => set("paperBg", e.target.value)} />
      </div>
      <div className="tweak-row"><label>Grain</label>
        <input type="range" min="0" max=".5" step="0.02" value={vals.paperGrain} onChange={(e) => set("paperGrain", parseFloat(e.target.value))} />
      </div>
    </div>
  );
}
