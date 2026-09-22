'use client';

import { useEffect, useRef } from 'react';
import { Cpu, GitPullRequest, TrendingUp, Zap } from 'lucide-react';

const points = [
  {
    icon: <GitPullRequest size={20} aria-hidden="true" />,
    title: 'AI-Powered PR Analysis',
    description:
      'Built a feature that integrates the GitHub GraphQL API to retrieve employee pull requests and feeds the data through an AI-powered analysis pipeline that evaluates submitted changes and generates quality scores.',
  },
  {
    icon: <TrendingUp size={20} aria-hidden="true" />,
    title: 'Developer Insights',
    description:
      'The system surfaces PR details — changes, review status, and metadata — giving teams actionable visibility into code contribution quality and activity.',
  },
  {
    icon: <Zap size={20} aria-hidden="true" />,
    title: 'Modern Workflows',
    description:
      'AI-assisted development practices are part of how I approach problems — using automation and intelligent tooling to improve developer productivity and code quality.',
  },
];

export default function AISection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('in-view')),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="ai"
      ref={sectionRef}
      aria-labelledby="ai-heading"
      className="section-padding"
      style={{
        background: 'linear-gradient(180deg, var(--bg-base) 0%, var(--bg-surface) 60%, var(--bg-base) 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        className="glow-orb"
        aria-hidden="true"
        style={{
          width: '500px',
          height: '300px',
          background: 'radial-gradient(ellipse, rgba(0,212,255,0.05) 0%, transparent 70%)',
          top: '50%',
          right: '-150px',
          transform: 'translateY(-50%)',
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
        <div
          className="reveal fade-up"
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '3rem',
            flexWrap: 'wrap',
          }}
        >
          {/* Left: Header */}
          <div style={{ flex: '0 0 300px', minWidth: '260px' }}>
            <div className="section-label">AI-Assisted Development</div>
            <h2
              id="ai-heading"
              style={{
                fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                fontWeight: 800,
                marginBottom: '1rem',
                letterSpacing: '-0.03em',
                lineHeight: 1.2,
              }}
            >
              AI in <span className="gradient-text">real-world</span> projects
            </h2>
            <p
              style={{
                fontSize: '0.92rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
              }}
            >
              Modern AI-assisted workflows are part of my development approach. The ERP revamp
              project is a concrete example — integrating AI-powered analysis to evaluate code
              contributions and generate quality metrics.
            </p>

            {/* AI badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginTop: '1.5rem',
                padding: '0.6rem 1.1rem',
                background: 'rgba(0,212,255,0.07)',
                border: '1px solid rgba(0,212,255,0.2)',
                borderRadius: '10px',
              }}
            >
              <Cpu
                size={18}
                aria-hidden="true"
                style={{ color: 'var(--accent-cyan)' }}
              />
              <span
                style={{
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: 'var(--accent-cyan)',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                AI · GitHub GraphQL · PR Analysis
              </span>
            </div>
          </div>

          {/* Right: Points */}
          <div style={{ flex: 1, minWidth: '280px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {points.map((p, i) => (
              <div
                key={p.title}
                className="card reveal fade-up"
                style={{
                  padding: '1.25rem',
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'flex-start',
                  transitionDelay: `${i * 100}ms`,
                }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'rgba(0,212,255,0.1)',
                    border: '1px solid rgba(0,212,255,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-cyan)',
                    flexShrink: 0,
                  }}
                >
                  {p.icon}
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: '0.9rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: '0.35rem',
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.85rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.65,
                    }}
                  >
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .reveal { opacity: 0; transition: opacity 0.7s ease, transform 0.7s ease; }
        .reveal.fade-up { transform: translateY(20px); }
        .reveal.in-view { opacity: 1; transform: none; }
      `}</style>
    </section>
  );
}
