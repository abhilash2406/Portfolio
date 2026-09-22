'use client';

import { useEffect, useRef } from 'react';
import { GraduationCap, MapPin, Calendar, Star } from 'lucide-react';

export default function Education() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('in-view')),
      { threshold: 0.15 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="education"
      ref={sectionRef}
      aria-labelledby="education-heading"
      className="section-padding"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
        <div className="section-label reveal fade-up">Education</div>
        <h2
          id="education-heading"
          className="reveal fade-up"
          style={{
            fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
            fontWeight: 800,
            marginBottom: '2.5rem',
            letterSpacing: '-0.03em',
          }}
        >
          Academic <span className="gradient-text">background</span>
        </h2>

        <article
          id="education-diploma"
          className="reveal fade-up card"
          style={{
            padding: '1.75rem',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '1.25rem',
          }}
          aria-label="Diploma in Computer Engineering"
        >
          {/* Icon */}
          <div
            aria-hidden="true"
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: 'var(--accent-violet-dim)',
              border: '1px solid rgba(108,99,255,0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent-violet)',
              flexShrink: 0,
            }}
          >
            <GraduationCap size={22} />
          </div>

          {/* Content */}
          <div style={{ flex: 1 }}>
            <h3
              style={{
                fontSize: '1.05rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '3px',
              }}
            >
              Diploma in Computer Engineering
            </h3>
            <p
              style={{
                fontSize: '0.92rem',
                color: 'var(--accent-violet)',
                fontWeight: 600,
                marginBottom: '0.5rem',
              }}
            >
              Government Polytechnic College, Kalamassery
            </p>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                fontSize: '0.82rem',
                color: 'var(--text-muted)',
                marginBottom: '0.85rem',
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <MapPin size={13} aria-hidden="true" /> Kalamassery, Kerala, India
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <Calendar size={13} aria-hidden="true" /> 2017 – 2020
              </span>
            </div>

            {/* GPA */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.4rem 0.9rem',
                background: 'rgba(255,215,0,0.07)',
                border: '1px solid rgba(255,215,0,0.2)',
                borderRadius: '8px',
              }}
            >
              <Star
                size={14}
                aria-hidden="true"
                style={{ color: '#ffd700' }}
                fill="#ffd700"
              />
              <span
                style={{
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  color: '#ffd700',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                GPA: 8.30
              </span>
            </div>
          </div>
        </article>
      </div>

      <style>{`
        .reveal { opacity: 0; transition: opacity 0.7s ease, transform 0.7s ease; }
        .reveal.fade-up { transform: translateY(20px); }
        .reveal.in-view { opacity: 1; transform: none; }
      `}</style>
    </section>
  );
}
