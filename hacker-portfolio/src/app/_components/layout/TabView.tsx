"use client";

import { useEffect, useState } from "react";
import Hero from "../sections/Hero";
import Experience from "../sections/Experience";
import dynamic from "next/dynamic";
import Skills from "../sections/Skills";
import { FiHome, FiBriefcase, FiStar, FiFolder } from "react-icons/fi";

const Projects = dynamic(() => import("../sections/Projects"), {
  ssr: false,
  loading: () => null,
});

type TabKey = "welcome" | "experience" | "skills" | "projects";

const tabs: { key: TabKey; label: string }[] = [
  { key: "welcome", label: "WELCOME" },
  { key: "experience", label: "EXPERIENCE" },
  { key: "skills", label: "SKILLS" },
  { key: "projects", label: "PROJECTS" },
];

export default function TabView() {
  const [active, setActive] = useState<TabKey>("welcome");

  // Sync with hash: #tab=projects
  useEffect(() => {
    const current = new URL(window.location.href);
    const hash = current.hash;
    const match = hash.match(/tab=([a-z]+)/i);
    if (match && ["welcome","experience","skills","projects"].includes(match[1])) {
      setActive(match[1] as TabKey);
    }
    const onHash = () => {
      const m = window.location.hash.match(/tab=([a-z]+)/i);
      if (m && ["welcome","experience","skills","projects"].includes(m[1])) {
        setActive(m[1] as TabKey);
      }
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const setTab = (key: TabKey) => {
    setActive(key);
    const url = new URL(window.location.href);
    url.hash = `tab=${key}`;
    history.replaceState(null, "", url.toString());
  };

  return (
    <div className="tabs-root" role="navigation" aria-label="Section Tabs">
      {/* Mobile dropdown */}
      <div className="tabs-mobile">
        {/* label removed per request */}
        <select
          id="tabs-select"
          value={active}
          onChange={(e) => setTab(e.target.value as TabKey)}
          aria-label="Select section"
        >
          <option value="welcome" disabled hidden>Select section</option>
          {tabs.map((t) => (
            <option key={t.key} value={t.key}>{t.label}</option>
          ))}
        </select>
      </div>
      <header className="tabs-header">
        {tabs.map((t) => (
          <button
            key={t.key}
            className={`tab ${active === t.key ? "active" : ""}`}
            onClick={() => setTab(t.key)}
            aria-pressed={active === t.key}
            aria-label={`Open ${t.label}`}
          >
            <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
              {t.key === "welcome" && <FiHome aria-hidden="true" />}
              {t.key === "experience" && <FiBriefcase aria-hidden="true" />}
              {t.key === "skills" && <FiStar aria-hidden="true" />}
              {t.key === "projects" && <FiFolder aria-hidden="true" />}
              {t.label}
            </span>
          </button>
        ))}
        {/* ThemeToggle hidden for launch */}
      </header>

      <section className="tab-panel">
        <div key={active} className="panel-fade">
          {active === "welcome" && <Hero />}
          {active === "experience" && <Experience />}
          {active === "skills" && <Skills />}
          {active === "projects" && <Projects />}
        </div>
      </section>

      <style jsx>{`
        .tabs-root { 
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding-top: 0.5rem;
        }
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          border: 0;
        }
        .tabs-mobile { display: none; margin: 0 0.5rem; }
        .tabs-mobile select {
          width: 100%;
          background: rgba(0,0,0,0.6);
          color: #00ff00;
          border: 1px solid rgba(0,255,0,0.6);
          box-shadow: 0 0 12px rgba(0,255,0,0.2);
          padding: 0.65rem 0.85rem;
          min-height: 44px;
        }
        .tabs-header {
          position: fixed;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          margin-top: 2rem;
          display: flex;
          gap: 0.5rem;
          justify-content: center;
          z-index: 3;
          /* mobile scroll */
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          width: 100%;
          max-width: 1200px;
          padding-top: 0.5rem;
          /* translucent backdrop */
          background: rgba(0, 0, 0, 0.35);
          border-bottom: 1px solid rgba(0,255,0,0.25);
          backdrop-filter: blur(2px);
        }
        .tabs-header::-webkit-scrollbar { display: none; }
        /* keep tabs inline on narrow screens */
        .tabs-header {
          white-space: nowrap;
        }
        .tab {
          background: rgba(0,0,0,0.5);
          border: 1px solid rgba(0,255,0,0.6);
          color: #00ff00;
          padding: 0.5rem 1rem;
          cursor: pointer;
          text-shadow: 0 0 8px rgba(0,255,0,0.4);
          box-shadow: 0 0 12px rgba(0,255,0,0.2);
          display: inline-flex;
          align-items: center;
        }
        .tab.active {
          background: rgba(0,0,0,0.7);
          border-color: rgba(0,255,0,0.9);
          box-shadow: 0 0 18px rgba(0,255,0,0.35), inset 0 0 10px rgba(0,255,0,0.2);
        }
        .tab-panel { position: relative; z-index: 2; padding-top: 4.25rem; }
        .panel-fade { animation: fadeIn 140ms ease both; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(2px); } to { opacity: 1; transform: none; } }

        @media (max-width: 640px) {
          .tabs-root { padding-top: 0.25rem; }
          .tabs-mobile {
            display: block;
            position: fixed;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 100%;
            max-width: 1200px;
            z-index: 4;
            padding: 0.25rem 0.75rem 0.25rem 0.5rem; /* add a bit more right margin */
            background: rgba(0, 0, 0, 0.4);
            border-bottom: 1px solid rgba(0,255,0,0.25);
            backdrop-filter: blur(2px);
          }
          .tabs-header { display: none; }
          /* extra offset for fixed dropdown height */
          .tab-panel { padding-top: 4.75rem; }
        }

        @media (max-width: 420px) {
          .tab { padding: 0.4rem 0.65rem; font-size: 0.85rem; }
        }
      `}</style>
    </div>
  );
}


