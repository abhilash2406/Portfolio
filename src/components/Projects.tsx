'use client';

import { useEffect, useRef } from 'react';
import { projects } from '@/data/projects';
import FeaturedProject from './FeaturedProject';
import { ExternalLink } from 'lucide-react';

const projectColors = [
  { accent: 'rgba(108,99,255,0.3)', glow: 'rgba(108,99,255,0.06)' },
  { accent: 'rgba(0,212,255,0.25)', glow: 'rgba(0,212,255,0.05)' },
  { accent: 'rgba(255,199,0,0.25)', glow: 'rgba(255,199,0,0.04)' },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('in-view')),
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      aria-labelledby="projects-heading"
      className="section-padding"
      style={{
        background: 'linear-gradient(180deg, var(--bg-base) 0%, var(--bg-surface) 50%, var(--bg-base) 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        className="glow-orb"
        aria-hidden="true"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)',
          bottom: '-100px',
          right: '-150px',
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
        <div className="section-label reveal fade-up">Projects</div>
        <h2
          id="projects-heading"
          className="reveal fade-up"
          style={{
            fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
            fontWeight: 800,
            marginBottom: '0.75rem',
            letterSpacing: '-0.03em',
          }}
        >
          What I&apos;ve <span className="gradient-text">built</span>
        </h2>
        <p
          className="reveal fade-up"
          style={{
            color: 'var(--text-muted)',
            fontSize: '1rem',
            marginBottom: '3rem',
            maxWidth: '500px',
          }}
        >
          A selection of full-stack projects developed professionally, covering fintech, education, and enterprise tooling.
        </p>

        {/* Featured project */}
        <div className="reveal fade-up">
          <FeaturedProject />
        </div>

        {/* Project grid */}
        <div
          className="projects-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.25rem',
          }}
        >
          {projects.map((project, idx) => {
            const colors = projectColors[idx % projectColors.length];
            return (
              <article
                key={project.id}
                id={`project-${project.id}`}
                className="reveal fade-up card"
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0',
                  transitionDelay: `${idx * 80}ms`,
                  position: 'relative',
                  overflow: 'hidden',
                }}
                aria-label={`Project: ${project.name}`}
              >
                {/* Top accent line */}
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: `linear-gradient(90deg, ${colors.accent}, transparent)`,
                  }}
                />
                {/* BG glow */}
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    top: '-40px',
                    right: '-40px',
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${colors.glow} 0%, transparent 70%)`,
                    pointerEvents: 'none',
                  }}
                />

                {/* Project name */}
                <h3
                  style={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '0.6rem',
                    lineHeight: 1.3,
                  }}
                >
                  {project.name}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: '0.855rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.65,
                    marginBottom: '1rem',
                    flex: 1,
                  }}
                >
                  {project.description}
                </p>

                {/* Key highlights */}
                <ul
                  style={{
                    listStyle: 'none',
                    margin: '0 0 1rem',
                    padding: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.35rem',
                  }}
                >
                  {project.highlights.slice(0, 3).map((h, hi) => (
                    <li
                      key={hi}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.5rem',
                        fontSize: '0.8rem',
                        color: 'var(--text-muted)',
                        lineHeight: 1.5,
                      }}
                    >
                      <span
                        aria-hidden="true"
                        style={{
                          width: '4px',
                          height: '4px',
                          borderRadius: '50%',
                          background: 'var(--accent-violet)',
                          flexShrink: 0,
                          marginTop: '7px',
                        }}
                      />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: 'auto' }}>
                  {project.technologies.map((t) => (
                    <span key={t} className="tech-tag" style={{ fontSize: '0.68rem' }}>{t}</span>
                  ))}
                </div>

                {/* Links – only show if available */}
                {(project.liveUrl || project.githubUrl) && (
                  <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View live demo of ${project.name}`}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.3rem',
                          fontSize: '0.78rem',
                          color: 'var(--accent-cyan)',
                          textDecoration: 'none',
                        }}
                      >
                        <ExternalLink size={13} aria-hidden="true" />
                        Live Demo
                      </a>
                    )}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>

      <style>{`
        .reveal { opacity: 0; transition: opacity 0.6s ease, transform 0.6s ease; }
        .reveal.fade-up { transform: translateY(20px); }
        .reveal.in-view { opacity: 1; transform: none; }
        @media (max-width: 900px) {
          .projects-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
