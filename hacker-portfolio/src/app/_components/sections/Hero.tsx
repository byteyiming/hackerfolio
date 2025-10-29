"use client";

import { portfolioData as data } from "../../../lib/portfolioData";
import { FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function Hero() {
  const typingPhrases: string[] = data.hero?.typing ?? [];
  const title: string = data.hero?.title ?? "";
  const subtitle: string = data.hero?.subtitle ?? "";

  const social = data.social || {};

  return (
    <section className="section-container">
      <div className="neon-panel">
        <div className="neon-panel-inner">
          <h1 className="headline">{title || "Software Engineer"}</h1>
          <p className="subtitle">{subtitle || "Building digital experiences"}</p>
          {/* Tagline removed per request */}
          <p className="personal-note">
            When I'm not coding, you'll find me hiking trails, experimenting in the kitchen, traveling to new places, or exploring the latest tech innovations.
          </p>
          <div className="social-buttons">
            {social.linkedin && (
              <a href={social.linkedin} target="_blank" rel="noreferrer" className="neon-btn" aria-label="Open LinkedIn profile">
                <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                  <FaLinkedin aria-hidden="true" />
                  LinkedIn
                </span>
              </a>
            )}
            {social.github && (
              <a href={social.github} target="_blank" rel="noreferrer" className="neon-btn" aria-label="Open GitHub profile">
                <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                  <FaGithub aria-hidden="true" />
                  GitHub
                </span>
              </a>
            )}
            {social.email && (
              <a href={social.email} className="neon-btn" aria-label="Send email">
                <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                  <FiMail aria-hidden="true" />
                  Email
                </span>
              </a>
            )}
            {social.website && (
              <a href={social.website} target="_blank" rel="noreferrer" className="neon-btn" aria-label="Open personal website">
                <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                  <FaGlobe aria-hidden="true" />
                  Website
                </span>
              </a>
            )}
          </div>
        </div>
      </div>
      <style jsx>{`
        .section-container {
          min-height: calc(100dvh - 6rem);
        }
        .neon-panel-inner {
          text-align: center;
        }
        .headline {
          color: #00ff00;
          font-size: clamp(2.2rem, 6vw, 5rem);
          line-height: 1;
          margin: 1rem 0 1rem;
          font-weight: normal;
          text-shadow: 0 0 18px rgba(0,255,0,0.6);
        }
        .subtitle {
          color: #00ff00;
          opacity: 0.9;
          font-size: clamp(1.1rem, 2.6vw, 2rem);
          margin-bottom: clamp(1.5rem, 4vw, 2.5rem);
          text-shadow: 0 0 10px rgba(0,255,0,0.35);
        }
        .tagline {
          font-size: clamp(1rem, 2vw, 1.3rem);
          color: #00ff00;
          text-shadow: 0 0 8px rgba(0,255,0,0.4);
          opacity: 0.95;
          margin-bottom: clamp(1rem, 3vw, 1.5rem);
        }
        .personal-note {
          font-size: clamp(0.85rem, 1.8vw, 1rem);
          color: #00ff00;
          text-shadow: 0 0 6px rgba(0,255,0,0.3);
          opacity: 0.85;
          margin-bottom: clamp(1.5rem, 4vw, 2rem);
          line-height: 1.5;
          font-style: italic;
        }
        .social-buttons {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: 1rem;
        }
      `}</style>
    </section>
  );
}


