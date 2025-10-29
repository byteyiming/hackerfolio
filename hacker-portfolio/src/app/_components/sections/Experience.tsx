"use client";
import { portfolioData as data } from "../../../lib/portfolioData";

export default function Experience() {
  const experiences = data.experience ?? [];

  if (experiences.length === 0) {
    return (
      <section className="section-container">
        <div className="neon-panel neon-panel-inner">
          <header className="section-header">EXPERIENCE LOG</header>
          <pre>No experience entries found. Add experience data to portfolioData.ts</pre>
        </div>
        <style jsx>{`
          header {
            font-weight: bold;
            margin-bottom: 1rem;
            color: #00ff00;
            opacity: 0.9;
            font-size: 1.1rem;
          }
          pre {
            white-space: pre-wrap;
            line-height: 1.6;
          }
        `}</style>
      </section>
    );
  }

  return (
    <section className="section-container">
      <div className="neon-panel neon-panel-inner">
        <header className="section-header">EXPERIENCE LOG</header>
        <div className="entries">
          {experiences.map((exp, idx) => (
            <div key={idx} className="entry">
              <div className="entry-header">
                <h3>{exp.title}</h3>
                <span className="company">{exp.company}</span>
              </div>
              <div className="meta">
                {exp.date && <span className="date">{exp.date}</span>}
                {exp.location && <span className="location">{exp.location}</span>}
              </div>
              {exp.description && <p className="description">{exp.description}</p>}
              {exp.technologies && exp.technologies.length > 0 && (
                <div className="tech">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .entries {
          display: grid;
          gap: 1.5rem;
        }
        .entry {
          padding-bottom: 1.5rem;
          border-bottom: 2px dashed rgba(0, 255, 0, 0.45);
          box-shadow: 0 8px 12px -10px rgba(0,255,0,0.25);
        }
        .entry:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
        .entry-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
        }
        h3 {
          color: #00ff00;
          font-size: 1.2rem;
          margin: 0;
          text-shadow: 0 0 8px rgba(0, 255, 0, 0.3);
        }
        .company {
          color: #00ff00;
          opacity: 0.8;
          font-size: 0.95rem;
        }
        .meta {
          display: flex;
          gap: 1rem;
          margin-bottom: 0.75rem;
          flex-wrap: wrap;
        }
        .date, .location {
          color: #00ff00;
          opacity: 0.7;
          font-size: 0.85rem;
        }
        .description {
          color: #00ff00;
          opacity: 0.9;
          line-height: 1.6;
          margin-bottom: 0.75rem;
        }
        .tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .tech-tag {
          border: 1px solid rgba(0, 255, 0, 0.4);
          padding: 0.2rem 0.6rem;
          font-size: 0.75rem;
          color: #00ff00;
          opacity: 0.85;
        }
      `}</style>
    </section>
  );
}

