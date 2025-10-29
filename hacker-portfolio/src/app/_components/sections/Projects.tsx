"use client";
import { portfolioData as data } from "../../../lib/portfolioData";
import type { Project } from "../../../lib/types";
import ProjectCard from "../cards/ProjectCard";

export default function Projects() {
  const projects = (data.projects ?? []) as Project[];
  return (
    <section className="section-container" id="projects">
      <div className="neon-panel neon-panel-inner">
        <h2 className="section-header">PROJECTS</h2>
        <div className="grid">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
      <style jsx>{`
        .grid {
          display: grid;
          gap: 1rem;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
        }
        @media (max-width: 420px) {
          .grid {
            grid-template-columns: 1fr;
            gap: 0.85rem;
          }
        }
      `}</style>
    </section>
  );
}


