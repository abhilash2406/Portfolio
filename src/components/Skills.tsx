'use client';

import { useEffect, useRef } from 'react';
import { Code2, Layers, Cloud, Database, ShieldCheck } from 'lucide-react';
import { skillCategories } from '@/data/skills';

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 size={20} aria-hidden="true" />,
  Layers: <Layers size={20} aria-hidden="true" />,
  Cloud: <Cloud size={20} aria-hidden="true" />,
  Database: <Database size={20} aria-hidden="true" />,
  ShieldCheck: <ShieldCheck size={20} aria-hidden="true" />,
};

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );
    const items = sectionRef.current?.querySelectorAll('.reveal');
    items?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      aria-labelledby="skills-heading"
      className="section-padding"
      style={{
        background: 'linear-gradient(180deg, var(--bg-base) 0%, var(--bg-surface) 50%, var(--bg-base) 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background accent */}
      <div
        className="glow-orb"
        aria-hidden="true"
        style={{
          width: '600px',
          height: '300px',
          background: 'radial-gradient(ellipse, rgba(0,212,255,0.04) 0%, transparent 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
        <div className="section-label reveal fade-up">Skills</div>
        <h2
          id="skills-heading"
          className="reveal fade-up"
          style={{
            fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
            fontWeight: 800,
            marginBottom: '0.75rem',
            letterSpacing: '-0.03em',
          }}
        >
          Technical <span className="gradient-text">toolkit</span>
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
          Technologies I use to build scalable, performant, and maintainable full-stack applications.
        </p>

        <div
          className="skills-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.25rem',
          }}
        >
          {skillCategories.map((cat, catIdx) => (
            <article
              key={cat.category}
              id={`skill-card-${cat.category.toLowerCase().replace(/\s+/g, '-')}`}
              className="reveal fade-up card"
              style={{
                padding: '1.5rem',
                transitionDelay: `${catIdx * 80}ms`,
                // Make last row span full if it's the last odd item
                ...(catIdx === skillCategories.length - 1 && skillCategories.length % 3 !== 0
                  ? { gridColumn: skillCategories.length % 3 === 1 ? 'span 3' : 'span 1' }
                  : {}),
              }}
            >
              {/* Card header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  marginBottom: '0.5rem',
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'var(--accent-violet-dim)',
                    border: '1px solid rgba(108,99,255,0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-violet)',
                    flexShrink: 0,
                  }}
                >
                  {iconMap[cat.icon]}
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: '0.9rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: '1px',
                    }}
                  >
                    {cat.category}
                  </h3>
                  <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                    {cat.description}
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div
                style={{
                  height: '1px',
                  background: 'var(--border-subtle)',
                  margin: '0.85rem 0',
                }}
              />

              {/* Skill Pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="tech-tag"
                    style={{ cursor: 'default' }}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .reveal { opacity: 0; transition: opacity 0.6s ease, transform 0.6s ease; }
        .reveal.fade-up { transform: translateY(20px); }
        .reveal.in-view { opacity: 1; transform: none; }
        @media (max-width: 900px) {
          .skills-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
