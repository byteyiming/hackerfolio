"use client";
import type { Project } from "../../../lib/types";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <div className="card">
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <div className="tags">
        {project.tags.map((t) => (
          <span key={t} className="neon-tag">{t}</span>
        ))}
      </div>
      {project.url && project.url !== "#" && (
        <a href={project.url} target="_blank" rel="noreferrer" className="neon-btn">
          Visit Live Site →
        </a>
      )}
      <style jsx>{`
        .card {
          display: grid;
          gap: 0.5rem;
          padding: 1rem;
          border: 1px solid rgba(0, 255, 0, 0.4);
          background: rgba(0, 0, 0, 0.5);
          color: inherit;
          box-shadow: 0 0 10px rgba(0, 255, 0, 0.15);
          transition: transform 120ms ease, box-shadow 120ms ease, filter 120ms ease;
          position: relative;
          overflow: hidden;
        }
        .card::after {
          content: "";
          position: absolute;
          inset: -200% -200% auto -200%;
          height: 200%;
          background: linear-gradient(
            120deg,
            transparent 0%,
            rgba(0,255,0,0.08) 40%,
            rgba(0,255,0,0.18) 50%,
            rgba(0,255,0,0.08) 60%,
            transparent 100%
          );
          transform: translateY(-50%) rotate(10deg);
          pointer-events: none;
        }
        .card:hover {
          box-shadow: 0 0 18px rgba(0, 255, 0, 0.35);
          transform: translateY(-2px);
          filter: contrast(1.05) saturate(1.1);
        }
        /* simple glitch */
        .card:hover h3 { text-shadow: 1px 0 rgba(0,255,0,0.6), -1px 0 rgba(0,255,0,0.4); }
        h3 { font-size: 1.1rem; }
        p { opacity: 0.9; }
        .tags { display: flex; flex-wrap: wrap; gap: 0.35rem; }
        .neon-btn {
          margin-top: 0.75rem;
          text-align: center;
        }
      `}</style>
    </div>
  );
}


