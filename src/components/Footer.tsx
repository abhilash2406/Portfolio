'use client';

import { Mail, ArrowUp } from 'lucide-react';

const LinkedInIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer
      role="contentinfo"
      style={{
        borderTop: '1px solid var(--border-subtle)',
        background: 'var(--bg-surface)',
        padding: '3rem 1.5rem 2rem',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Main row */}
        <div
          className="footer-grid"
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '2rem',
            marginBottom: '2.5rem',
          }}
        >
          {/* Brand */}
          <div style={{ maxWidth: '260px' }}>
            <p
              style={{
                fontSize: '1rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '0.4rem',
              }}
            >
              Abhilash Kumar A
            </p>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              MERN Full Stack Developer · Kochi, India
            </p>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
              Building scalable web applications with modern technologies.
            </p>
          </div>

          {/* Nav */}
          <nav aria-label="Footer navigation">
            <p
              style={{
                fontSize: '0.75rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--text-muted)',
                marginBottom: '0.75rem',
                fontFamily: 'var(--font-mono)',
              }}
            >
              Navigation
            </p>
            <ul role="list" style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const id = link.href.replace('#', '');
                      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--text-secondary)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-primary)')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-secondary)')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <p
              style={{
                fontSize: '0.75rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--text-muted)',
                marginBottom: '0.75rem',
                fontFamily: 'var(--font-mono)',
              }}
            >
              Get in touch
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a
                href="mailto:abhilashkumar66666@gmail.com"
                aria-label="Send email"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent-cyan)')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-secondary)')}
              >
                <Mail size={14} aria-hidden="true" />
                abhilashkumar66666@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/abhilash-kumar-a"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent-cyan)')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-secondary)')}
              >
                <LinkedInIcon size={14} />
                linkedin.com/in/abhilash-kumar-a
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            borderTop: '1px solid var(--border-subtle)',
            paddingTop: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} Abhilash Kumar A. All rights reserved.
          </p>

          <button
            onClick={scrollTop}
            aria-label="Scroll back to top"
            id="footer-scroll-top"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              background: 'var(--bg-elevated)',
              border: '1px solid var(--border-muted)',
              borderRadius: '8px',
              padding: '0.4rem 0.8rem',
              color: 'var(--text-muted)',
              fontSize: '0.78rem',
              cursor: 'pointer',
              transition: 'border-color 0.2s ease, color 0.2s ease',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--accent-violet)';
              (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-primary)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--border-muted)';
              (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-muted)';
            }}
          >
            <ArrowUp size={14} aria-hidden="true" />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
