'use client';

import { useEffect, useRef } from 'react';

const approaches = [
  {
    icon: '🏗️',
    title: 'Scalable Architecture',
    description:
      'Building applications with microservices-based architectures and scalable API design patterns that support growth and maintainability.',
  },
  {
    icon: '🧩',
    title: 'Reusable Components',
    description:
      'Developing React component libraries and custom hooks using an atomic design approach — composable, testable, and easy to maintain.',
  },
  {
    icon: '🔒',
    title: 'Secure Applications',
    description:
      'Implementing JWT authentication, OAuth2, role-based access control, rate limiting, and protection against XSS and SQL injection.',
  },
  {
    icon: '⚡',
    title: 'Performance',
    description:
      'Applying Redis caching, SQL/NoSQL query optimization, and code splitting to ensure fast, responsive user experiences.',
  },
  {
    icon: '🧪',
    title: 'Quality & Testing',
    description:
      'Writing unit and integration tests with Jest. Participating in code reviews to maintain high standards and catch issues early.',
  },
  {
    icon: '🤝',
    title: 'Collaboration',
    description:
      'Working in Agile/Scrum environments with pair programming, sprint planning, retrospectives, and cross-team collaboration.',
  },
];

export default function DevelopmentApproach() {
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
      id="approach"
      ref={sectionRef}
      aria-labelledby="approach-heading"
      className="section-padding"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <div
        className="glow-orb"
        aria-hidden="true"
        style={{
          width: '450px',
          height: '300px',
          background: 'radial-gradient(ellipse, rgba(108,99,255,0.06) 0%, transparent 70%)',
          top: '30%',
          left: '-150px',
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
        <div className="section-label reveal fade-up">How I Build</div>
        <h2
          id="approach-heading"
          className="reveal fade-up"
          style={{
            fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
            fontWeight: 800,
            marginBottom: '0.75rem',
            letterSpacing: '-0.03em',
          }}
        >
          Development <span className="gradient-text">approach</span>
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
          Principles and practices that guide how I design, build, and deliver software.
        </p>

        <div
          className="approach-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.25rem',
          }}
        >
          {approaches.map((item, idx) => (
            <article
              key={item.title}
              id={`approach-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="reveal fade-up card"
              style={{
                padding: '1.5rem',
                transitionDelay: `${idx * 70}ms`,
              }}
            >
              <div
                style={{
                  fontSize: '1.6rem',
                  marginBottom: '0.85rem',
                  filter: 'drop-shadow(0 0 8px rgba(108,99,255,0.2))',
                }}
                aria-hidden="true"
              >
                {item.icon}
              </div>
              <h3
                style={{
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '0.5rem',
                  lineHeight: 1.3,
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: '0.855rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.65,
                }}
              >
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .reveal { opacity: 0; transition: opacity 0.6s ease, transform 0.6s ease; }
        .reveal.fade-up { transform: translateY(20px); }
        .reveal.in-view { opacity: 1; transform: none; }
        @media (max-width: 900px) {
          .approach-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .approach-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
