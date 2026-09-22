'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Zap } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { theme, toggle } = useTheme();
  const isLight = theme === 'light';
  const isNeon = theme === 'neon';

  // Icon shows what the NEXT theme will be
  const themeIcon = theme === 'dark' ? <Sun size={16} /> : theme === 'light' ? <Zap size={16} /> : <Moon size={16} />;
  const themeLabel = theme === 'dark' ? 'Switch to light theme' : theme === 'light' ? 'Switch to neon theme' : 'Switch to dark theme';

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Active section detection
      const sections = navItems.map((n) => n.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY + 100 >= el.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <header
      role="banner"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease',
        background: scrolled
          ? isLight
            ? 'rgba(247, 248, 252, 0.88)'
            : isNeon
            ? 'rgba(3, 5, 15, 0.92)'
            : 'rgba(8, 13, 26, 0.85)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled
          ? '1px solid var(--border-subtle)'
          : '1px solid transparent',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1.5rem',
          height: '70px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}
      >
        {/* Desktop Nav */}
        <nav aria-label="Main navigation" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <ul
            role="list"
            style={{
              display: 'flex',
              listStyle: 'none',
              gap: '0.25rem',
              margin: 0,
              padding: 0,
            }}
            className="hidden-mobile"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                    aria-current={isActive ? 'page' : undefined}
                    style={{
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      color: isActive ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                      textDecoration: 'none',
                      padding: '0.4rem 0.75rem',
                      borderRadius: '6px',
                      transition: 'color 0.2s ease, background 0.2s ease',
                      background: isActive ? 'var(--accent-cyan-dim)' : 'transparent',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-primary)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-secondary)';
                      }
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Theme toggle */}
          <button
            onClick={toggle}
            aria-label={themeLabel}
            title={themeLabel}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              background: isNeon ? 'rgba(0,255,212,0.08)' : 'var(--bg-elevated)',
              border: isNeon ? '1px solid rgba(0,255,212,0.35)' : '1px solid var(--border-muted)',
              cursor: 'pointer',
              color: isNeon ? '#00FFD4' : 'var(--text-muted)',
              transition: 'background 0.2s ease, border-color 0.2s ease, color 0.2s ease, transform 0.2s ease',
              flexShrink: 0,
              boxShadow: isNeon ? '0 0 10px rgba(0,255,212,0.25)' : 'none',
            }}
            onMouseEnter={(e) => {
              const btn = e.currentTarget as HTMLButtonElement;
              btn.style.color = isNeon ? '#00FFD4' : 'var(--accent-violet)';
              btn.style.borderColor = isNeon ? 'rgba(0,255,212,0.7)' : 'var(--accent-violet)';
              btn.style.transform = 'rotate(15deg) scale(1.05)';
            }}
            onMouseLeave={(e) => {
              const btn = e.currentTarget as HTMLButtonElement;
              btn.style.color = isNeon ? '#00FFD4' : 'var(--text-muted)';
              btn.style.borderColor = isNeon ? 'rgba(0,255,212,0.35)' : 'var(--border-muted)';
              btn.style.transform = 'none';
            }}
          >
            {themeIcon}
          </button>

          {/* CTA – desktop */}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
            className="btn-primary hidden-mobile"
            style={{ fontSize: '0.85rem', padding: '0.5rem 1.1rem' }}
            aria-label="Get in touch"
          >
            Let&apos;s Connect
          </a>

          {/* Hamburger – mobile */}
          <button
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text-primary)',
              padding: '0.4rem',
              borderRadius: '6px',
            }}
            className="show-mobile"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        role="navigation"
        aria-label="Mobile navigation"
        style={{
          maxHeight: mobileOpen ? '400px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.35s ease',
          background: isLight ? 'rgba(247, 248, 252, 0.97)' : isNeon ? 'rgba(3, 5, 15, 0.97)' : 'rgba(8, 13, 26, 0.97)',
          borderTop: mobileOpen ? '1px solid var(--border-subtle)' : 'none',
        }}
      >
        <ul
          role="list"
          style={{
            listStyle: 'none',
            padding: '1rem 1.5rem',
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '0.25rem',
          }}
        >
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                style={{
                  display: 'block',
                  padding: '0.65rem 0.75rem',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  borderRadius: '8px',
                  transition: 'color 0.2s ease, background 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-primary)';
                  (e.currentTarget as HTMLAnchorElement).style.background = 'var(--accent-violet-dim)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-secondary)';
                  (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li style={{ marginTop: '0.5rem' }}>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Let&apos;s Connect
            </a>
          </li>
        </ul>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
          .hidden-mobile { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
