'use client';

import { useEffect, useRef, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { Terminal, Code2, Server, ShieldCheck, Zap, Layers, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

const stats = [
  { label: '4+', sub: 'Years Experience', detail: 'Full-Stack Engineering' },
  { label: 'MERN', sub: 'Core Stack', detail: 'React • Node • Mongo' },
  { label: 'Next.js', sub: '+ TypeScript', detail: 'Modern Web Apps' },
  { label: 'Cloud', sub: 'AWS & GCP', detail: 'Deploy & Scale' },
];

const devCapabilities = [
  {
    icon: <Code2 size={22} style={{ color: 'var(--accent-cyan)' }} />,
    title: 'Frontend Engineering',
    desc: 'Crafting responsive, high-performance UIs using React, Next.js, and TypeScript with sleek animations.',
  },
  {
    icon: <Server size={22} style={{ color: 'var(--accent-violet)' }} />,
    title: 'Backend & Microservices',
    desc: 'Designing secure REST APIs, Express backends, JWT authentication, and optimized MongoDB architectures.',
  },
  {
    icon: <ShieldCheck size={22} style={{ color: '#10B981' }} />,
    title: 'Quality & Cloud Deployments',
    desc: 'Building with security-first practices, CI/CD pipelines, containerized Docker environments, and AWS.',
  }
];

const pillars = [
  { emoji: '⚡', text: 'Performance-first development' },
  { emoji: '🔒', text: 'Security & authentication' },
  { emoji: '🏗️', text: 'Scalable architecture' },
  { emoji: '🤝', text: 'Agile collaboration' },
  { emoji: '🧪', text: 'Test-driven quality' },
  { emoji: '☁️', text: 'Cloud deployment' },
];

const techStack = [
  'React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 
  'TypeScript', 'REST APIs', 'AWS', 'Docker', 'Tailwind CSS'
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const isNeon = theme === 'neon';
  const [activeTechIndex, setActiveTechIndex] = useState(0);

  // Auto-highlight effect for tech tags
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTechIndex((prev) => (prev + 1) % techStack.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.15 }
    );

    const items = sectionRef.current?.querySelectorAll('.reveal');
    items?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      aria-labelledby="about-heading"
      className="section-padding"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* Background glow orbs */}
      <div
        className="glow-orb"
        aria-hidden="true"
        style={{
          width: '450px',
          height: '450px',
          background: isNeon 
            ? 'radial-gradient(circle, rgba(0, 255, 212, 0.08) 0%, transparent 70%)'
            : isLight 
              ? 'radial-gradient(circle, rgba(108, 99, 255, 0.08) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(108, 99, 255, 0.1) 0%, transparent 70%)',
          top: '20%',
          right: '-150px',
          transform: 'translateY(-50%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
        <div className="section-label reveal fade-up">About Me</div>
        <h2
          id="about-heading"
          className="reveal fade-up"
          style={{
            fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
            fontWeight: 800,
            marginBottom: '3rem',
            letterSpacing: '-0.03em',
          }}
        >
          Building{' '}
          <span className="gradient-text">scalable solutions</span>,<br />
          one commit at a time.
        </h2>

        {/* Main Grid: Photo + Main Dev Glass Panel */}
        <div
          className="about-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '300px 1fr',
            gap: '2.5rem',
            alignItems: 'stretch',
            marginBottom: '3rem',
          }}
        >
          {/* Column 1: Photo Card */}
          <div className="reveal fade-up photo-col" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div 
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '1/1',
                borderRadius: '16px',
                overflow: 'hidden',
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border-accent)',
                boxShadow: isNeon 
                  ? '0 10px 30px rgba(0, 255, 212, 0.15)' 
                  : isLight 
                    ? '0 10px 30px rgba(108, 99, 255, 0.15)' 
                    : '0 10px 40px rgba(0,0,0,0.5)',
              }}
            >
              <img 
                src="/images/A30F325E-529A-46AE-901B-98DA66F24EF0.png" 
                alt="Abhilash Kumar A." 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'contrast(1.05) brightness(1.05)',
                }}
              />
              
            </div>

            {/* Quick Stat Pill Grid under Photo */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0.75rem',
              }}
            >
              {stats.slice(0, 2).map((s) => (
                <div
                  key={s.label}
                  className="card"
                  style={{
                    padding: '0.85rem 0.75rem',
                    textAlign: 'center',
                    borderRadius: '12px',
                    background: 'var(--bg-elevated)',
                    border: '1px solid var(--border-muted)',
                  }}
                >
                  <div
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 800,
                      color: 'var(--accent-cyan)',
                      fontFamily: 'var(--font-mono)',
                      lineHeight: 1.2,
                    }}
                  >
                    {s.label}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '2px', fontWeight: 500 }}>
                    {s.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Redesigned Developer Profile Glass Panel */}
          <div
            className="reveal fade-up"
            style={{
              background: 'var(--bg-elevated)',
              borderRadius: '20px',
              border: '1px solid var(--border-muted)',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            {/* Header IDE Bar */}
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingBottom: '1.25rem',
                  marginBottom: '1.5rem',
                  borderBottom: '1px solid var(--border-subtle)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FF5F56', display: 'inline-block' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FFBD2E', display: 'inline-block' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27C93F', display: 'inline-block' }} />
                  <span 
                    style={{ 
                      marginLeft: '12px', 
                      fontSize: '0.82rem', 
                      fontFamily: 'var(--font-mono)', 
                      color: 'var(--text-muted)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <Terminal size={14} /> about_me.ts
                  </span>
                </div>

                <div
                  style={{
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    padding: '4px 10px',
                    borderRadius: '20px',
                    background: isNeon ? 'rgba(0, 255, 212, 0.1)' : 'rgba(108, 99, 255, 0.15)',
                    color: isNeon ? '#00FFD4' : 'var(--accent-violet)',
                    border: isNeon ? '1px solid rgba(0, 255, 212, 0.3)' : '1px solid rgba(108, 99, 255, 0.3)',
                    fontWeight: 600,
                  }}
                >
                  MERN Full Stack Specialist
                </div>
              </div>

              {/* Bio Pitch & Intro */}
              <h3
                style={{
                  fontSize: '1.3rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '1rem',
                  lineHeight: 1.4,
                }}
              >
                Hi! I&apos;m <span style={{ color: 'var(--accent-cyan)' }}>Abhilash</span> — crafting robust web applications with modern code and clean architecture.
              </h3>

              <p
                style={{
                  fontSize: '0.98rem',
                  lineHeight: 1.75,
                  color: 'var(--text-secondary)',
                  marginBottom: '1.75rem',
                }}
              >
                With over <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>4 years of professional software engineering experience</strong>, I specialize in building complete digital solutions. I bridge high-performing, interactive frontend interfaces with scalable backend microservices, secure authentication, and cloud infrastructure.
              </p>

              {/* Structured Capability Cards */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
                  gap: '1rem',
                  marginBottom: '1.75rem',
                }}
              >
                {devCapabilities.map((cap) => (
                  <div
                    key={cap.title}
                    style={{
                      padding: '1.1rem',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid var(--border-subtle)',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border-accent)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border-subtle)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.5rem' }}>
                      {cap.icon}
                      <h4 style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                        {cap.title}
                      </h4>
                    </div>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                      {cap.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Tag Pills Row */}
            <div>
              <div
                style={{
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '0.75rem',
                }}
              >
                Core Tech Ecosystem
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {techStack.map((tech, idx) => {
                  const isActive = idx === activeTechIndex;
                  return (
                  <span
                    key={tech}
                    style={{
                      padding: '0.35rem 0.75rem',
                      borderRadius: '6px',
                      fontSize: '0.78rem',
                      fontFamily: 'var(--font-mono)',
                      background: isActive ? (isNeon ? 'rgba(0, 255, 212, 0.1)' : 'rgba(108, 99, 255, 0.1)') : 'var(--bg-card)',
                      border: isActive 
                        ? (isNeon ? '1px solid rgba(0, 255, 212, 0.5)' : '1px solid rgba(108, 99, 255, 0.5)')
                        : '1px solid var(--border-subtle)',
                      color: isActive 
                        ? (isNeon ? '#00FFD4' : 'var(--text-primary)')
                        : 'var(--text-secondary)',
                      transition: 'all 0.3s ease',
                      boxShadow: isActive 
                        ? (isNeon ? '0 0 10px rgba(0, 255, 212, 0.2)' : '0 0 10px rgba(108, 99, 255, 0.2)')
                        : 'none',
                      transform: isActive ? 'scale(1.05)' : 'scale(1)',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.borderColor = 'var(--accent-cyan)';
                        e.currentTarget.style.color = 'var(--text-primary)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.borderColor = 'var(--border-subtle)';
                        e.currentTarget.style.color = 'var(--text-secondary)';
                      }
                    }}
                  >
                    {tech}
                  </span>
                )})}
              </div>
            </div>
          </div>
        </div>

        {/* Pillars / Core Principles Bar */}
        <div className="reveal fade-up">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '1.25rem',
            }}
          >
            <h3
              style={{
                fontSize: '0.85rem',
                fontWeight: 600,
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                fontFamily: 'var(--font-mono)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Sparkles size={14} style={{ color: 'var(--accent-cyan)' }} /> Engineering Principles
            </h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '1rem',
            }}
          >
            {pillars.map((p) => (
              <div
                key={p.text}
                className="card"
                style={{
                  padding: '1rem 1.1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  borderRadius: '12px',
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border-muted)',
                  transition: 'transform 0.3s ease, border-color 0.3s ease',
                }}
              >
                <span style={{ fontSize: '1.2rem', flexShrink: 0 }}>{p.emoji}</span>
                <span style={{ fontSize: '0.84rem', fontWeight: 500, color: 'var(--text-primary)', lineHeight: 1.4 }}>
                  {p.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .reveal { opacity: 0; transition: opacity 0.7s ease, transform 0.7s ease; }
        .reveal.fade-up { transform: translateY(24px); }
        .reveal.in-view { opacity: 1; transform: none; }
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .photo-col { max-width: 320px; margin: 0 auto; width: 100%; }
        }
      `}</style>
    </section>
  );
}

