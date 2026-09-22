'use client';

import { useEffect, useRef } from 'react';
import { featuredProject } from '@/data/projects';
import { ArrowRight, GitPullRequest, Cpu } from 'lucide-react';

export default function FeaturedProject() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('in-view')),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const { workflow } = featuredProject;

  return (
    <div ref={ref}>
      <article
        id="project-erp-revamp"
        className="reveal fade-up"
        aria-label="Featured project: ERP Tool Revamp"
        style={{
          border: '1px solid rgba(108,99,255,0.3)',
          borderRadius: '20px',
          background: 'linear-gradient(135deg, var(--bg-card) 0%, rgba(108,99,255,0.04) 100%)',
          padding: '2.5rem',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 4px 40px rgba(108,99,255,0.08)',
          marginBottom: '2rem',
        }}
      >
        {/* Featured label */}
        <div
          aria-label="Featured project"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontSize: '0.72rem',
            fontFamily: 'var(--font-mono)',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--accent-violet)',
            background: 'rgba(108,99,255,0.1)',
            border: '1px solid rgba(108,99,255,0.25)',
            borderRadius: '999px',
            padding: '4px 12px',
            marginBottom: '1.25rem',
          }}
        >
          ★ Featured Project
        </div>

        {/* Top row: name + tags */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '1rem',
          }}
        >
          <div>
            <h3
              style={{
                fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)',
                fontWeight: 800,
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
                marginBottom: '0.5rem',
              }}
            >
              {featuredProject.name}
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {featuredProject.technologies.map((t) => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Description */}
        <p
          style={{
            fontSize: '0.95rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.75,
            marginBottom: '2rem',
            maxWidth: '700px',
          }}
        >
          {featuredProject.description}
        </p>

        {/* Workflow diagram */}
        {workflow && (
          <div
            aria-label="Technical workflow: GitHub GraphQL API feeds into AI PR Analysis"
            style={{
              display: 'flex',
              alignItems: 'stretch',
              gap: '1rem',
              flexWrap: 'wrap',
              marginBottom: '2rem',
            }}
          >
            {/* Source block */}
            <div
              style={{
                flex: 1,
                minWidth: '220px',
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border-muted)',
                borderRadius: '12px',
                padding: '1.25rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '0.85rem',
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: 'rgba(108,99,255,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-violet)',
                  }}
                >
                  <GitPullRequest size={16} aria-hidden="true" />
                </div>
                <h4
                  style={{
                    fontSize: '0.875rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  {workflow.source}
                </h4>
              </div>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {workflow.sourceDetails.map((d) => (
                  <li
                    key={d}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.82rem',
                      color: 'var(--text-secondary)',
                      padding: '0.3rem 0',
                    }}
                  >
                    <span
                      style={{
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        background: 'var(--accent-violet)',
                        flexShrink: 0,
                      }}
                      aria-hidden="true"
                    />
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            {/* Arrow */}
            <div
              aria-hidden="true"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0 0.5rem',
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  color: 'var(--accent-cyan)',
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '1px',
                    background: 'var(--gradient-brand)',
                  }}
                />
                <ArrowRight size={16} />
              </div>
            </div>

            {/* Target block */}
            <div
              style={{
                flex: 1,
                minWidth: '220px',
                background: 'var(--bg-elevated)',
                border: '1px solid rgba(0,212,255,0.2)',
                borderRadius: '12px',
                padding: '1.25rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '0.85rem',
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: 'rgba(0,212,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-cyan)',
                  }}
                >
                  <Cpu size={16} aria-hidden="true" />
                </div>
                <h4
                  style={{
                    fontSize: '0.875rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  {workflow.target}
                </h4>
              </div>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {workflow.targetDetails.map((d) => (
                  <li
                    key={d}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.82rem',
                      color: 'var(--text-secondary)',
                      padding: '0.3rem 0',
                    }}
                  >
                    <span
                      style={{
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        background: 'var(--accent-cyan)',
                        flexShrink: 0,
                      }}
                      aria-hidden="true"
                    />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Key contributions */}
        <div>
          <h4
            style={{
              fontSize: '0.78rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--text-muted)',
              marginBottom: '0.75rem',
              fontFamily: 'var(--font-mono)',
            }}
          >
            Key Contributions
          </h4>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {featuredProject.highlights.map((h, i) => (
              <li
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.6rem',
                  fontSize: '0.875rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    width: '5px',
                    height: '5px',
                    borderRadius: '50%',
                    background: 'var(--gradient-brand)',
                    flexShrink: 0,
                    marginTop: '8px',
                  }}
                />
                {h}
              </li>
            ))}
          </ul>
        </div>

        {/* BG glow */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '-80px',
            right: '-80px',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(108,99,255,0.06) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
      </article>
    </div>
  );
}
