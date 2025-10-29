"use client";
import { portfolioData as data } from "../../../lib/portfolioData";

export default function Skills() {
  const skills = data.skills || {
    languages: [],
    frameworks: [],
    tools: [],
    ai: [],
    softSkills: [],
  };

  return (
    <section className="section-container">
      <div className="neon-panel neon-panel-inner">
        <header className="section-header">SKILLS & TECHNOLOGIES</header>
        <div className="skills-grid">
          {skills.languages && skills.languages.length > 0 && (
            <div className="skill-category">
              <h3>Programming Languages</h3>
              <div className="skill-tags">
                {skills.languages.map((skill, i) => (
                  <span key={i} className="neon-tag">{skill}</span>
                ))}
              </div>
            </div>
          )}
          {skills.frameworks && skills.frameworks.length > 0 && (
            <div className="skill-category">
              <h3>Frameworks & Libraries</h3>
              <div className="skill-tags">
                {skills.frameworks.map((skill, i) => (
                  <span key={i} className="neon-tag">{skill}</span>
                ))}
              </div>
            </div>
          )}
          {skills.ai && skills.ai.length > 0 && (
            <div className="skill-category">
              <h3>AI & Machine Learning</h3>
              <div className="skill-tags">
                {skills.ai.map((skill, i) => (
                  <span key={i} className="neon-tag">{skill}</span>
                ))}
              </div>
            </div>
          )}
          {skills.tools && skills.tools.length > 0 && (
            <div className="skill-category">
              <h3>Tools & Technologies</h3>
              <div className="skill-tags">
                {skills.tools.map((skill, i) => (
                  <span key={i} className="neon-tag">{skill}</span>
                ))}
              </div>
            </div>
          )}
          {skills.softSkills && skills.softSkills.length > 0 && (
            <div className="skill-category">
              <h3>Soft Skills</h3>
              <div className="skill-tags">
                {skills.softSkills.map((skill, i) => (
                  <span key={i} className="neon-tag">{skill}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <style jsx>{`
        .skills-grid {
          display: grid;
          gap: 1.5rem;
        }
        .skill-category {
          display: grid;
          gap: 0.75rem;
        }
        h3 {
          color: #00ff00;
          font-size: 1.2rem;
          margin: 0;
          opacity: 0.85;
          font-weight: normal;
        }
        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem 0.6rem;
        }
        /* Make skill chips larger for readability */
        :global(.neon-tag) {
          font-size: 0.95rem;
          padding: 0.22rem 0.5rem;
        }
      `}</style>
    </section>
  );
}
