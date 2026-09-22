'use client';

import { useEffect, useRef, useState } from 'react';
import { MapPin, Calendar, ChevronDown } from 'lucide-react';
import { experiences } from '@/data/experience';

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const [openHighlights, setOpenHighlights] = useState<Record<string, boolean>>({
    'spericorn-Full-Stack Development': true,
    'spericorn-Backend Engineering': false,
    'spericorn-Frontend Engineering': false,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('in-view')),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const toggleHighlight = (key: string) => {
    setOpenHighlights((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section
      id="experience"
      ref={sectionRef}
      aria-labelledby="experience-heading"
      className="section-padding"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <div
        className="glow-orb"
        aria-hidden="true"
        style={{
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(108,99,255,0.07) 0%, transparent 70%)',
          top: '20%',
          left: '-150px',
        }}
      />

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
        <div className="section-label reveal fade-up">Experience</div>
        <h2
          id="experience-heading"
          className="reveal fade-up"
          style={{
            fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
            fontWeight: 800,
            marginBottom: '3.5rem',
            letterSpacing: '-0.03em',
          }}
        >
          Where I&apos;ve <span className="gradient-text">worked</span>
        </h2>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              left: '18px',
              top: '36px',
              bottom: '36px',
              width: '1px',
              background: 'linear-gradient(to bottom, var(--accent-violet), rgba(108,99,255,0.1))',
            }}
          />

          {experiences.map((exp, idx) => (
            <article
              key={exp.id}
              id={`experience-${exp.id}`}
              className="reveal fade-up"
              style={{
                paddingLeft: '56px',
                paddingBottom: idx < experiences.length - 1 ? '3.5rem' : '0',
                position: 'relative',
                transitionDelay: `${idx * 100}ms`,
              }}
            >
              {/* Timeline dot */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  left: '10px',
                  top: '8px',
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  background: exp.current
                    ? 'var(--gradient-brand)'
                    : 'var(--bg-elevated)',
                  border: '2px solid',
                  borderColor: exp.current ? 'transparent' : 'var(--border-muted)',
                  boxShadow: exp.current ? '0 0 12px rgba(108,99,255,0.4)' : 'none',
                }}
              />

              {/* Header */}
              <div style={{ marginBottom: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div>
                    <h3
                      style={{
                        fontSize: '1.1rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        marginBottom: '2px',
                      }}
                    >
                      {exp.role}
                    </h3>
                    <p
                      style={{
                        fontSize: '0.95rem',
                        color: 'var(--accent-violet)',
                        fontWeight: 600,
                        marginBottom: '0.4rem',
                      }}
                    >
                      {exp.company}
                    </p>
                  </div>
                  {exp.current && (
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        color: '#28c840',
                        background: 'rgba(40,200,64,0.1)',
                        border: '1px solid rgba(40,200,64,0.25)',
                        borderRadius: '999px',
                        padding: '3px 10px',
                      }}
                    >
                      <span
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          background: '#28c840',
                          animation: 'pulse 1.8s infinite',
                        }}
                      />
                      Current
                    </span>
                  )}
                </div>

                {/* Meta */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '1rem',
                    fontSize: '0.82rem',
                    color: 'var(--text-muted)',
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <MapPin size={13} aria-hidden="true" /> {exp.location}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <Calendar size={13} aria-hidden="true" /> {exp.period}
                  </span>
                </div>
              </div>

              {/* Summary */}
              <p
                style={{
                  fontSize: '0.92rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  marginBottom: '1rem',
                  borderLeft: '2px solid var(--border-accent)',
                  paddingLeft: '0.85rem',
                }}
              >
                {exp.summary}
              </p>

              {/* Highlight Subsections */}
              {exp.highlights.map((hl) => {
                const key = `${exp.id}-${hl.label}`;
                const isOpen = openHighlights[key] ?? false;
                return (
                  <div
                    key={hl.label}
                    style={{
                      marginBottom: '0.5rem',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '10px',
                      overflow: 'hidden',
                      background: 'var(--bg-card)',
                    }}
                  >
                    <button
                      id={`exp-toggle-${key.replace(/\s+/g, '-')}`}
                      aria-expanded={isOpen}
                      aria-controls={`exp-content-${key.replace(/\s+/g, '-')}`}
                      onClick={() => toggleHighlight(key)}
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.75rem 1rem',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: 'var(--text-primary)',
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        textAlign: 'left',
                      }}
                    >
                      {hl.label}
                      <ChevronDown
                        size={16}
                        aria-hidden="true"
                        style={{
                          transition: 'transform 0.25s ease',
                          transform: isOpen ? 'rotate(180deg)' : 'none',
                          color: 'var(--text-muted)',
                          flexShrink: 0,
                        }}
                      />
                    </button>
                    <div
                      id={`exp-content-${key.replace(/\s+/g, '-')}`}
                      style={{
                        maxHeight: isOpen ? '600px' : '0',
                        overflow: 'hidden',
                        transition: 'max-height 0.35s ease',
                      }}
                    >
                      <ul
                        style={{
                          listStyle: 'none',
                          padding: '0 1rem 0.85rem',
                          margin: 0,
                          borderTop: '1px solid var(--border-subtle)',
                        }}
                      >
                        {hl.points.map((point, pi) => (
                          <li
                            key={pi}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '0.6rem',
                              paddingTop: '0.6rem',
                              fontSize: '0.875rem',
                              color: 'var(--text-secondary)',
                              lineHeight: 1.65,
                            }}
                          >
                            <span
                              aria-hidden="true"
                              style={{
                                width: '5px',
                                height: '5px',
                                borderRadius: '50%',
                                background: 'var(--accent-violet)',
                                flexShrink: 0,
                                marginTop: '9px',
                              }}
                            />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}

              {/* Tech tags */}
              {exp.technologies.length > 0 && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '1rem' }}>
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .reveal { opacity: 0; transition: opacity 0.7s ease, transform 0.7s ease; }
        .reveal.fade-up { transform: translateY(24px); }
        .reveal.in-view { opacity: 1; transform: none; }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  );
}
