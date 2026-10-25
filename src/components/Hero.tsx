'use client';

import { useTheme } from '@/context/ThemeContext';
import { ArrowDown, Mail, Download } from 'lucide-react';

const LinkedInIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const GitHubIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const floatingObjects = [
  { text: 'React.js', left: '4%', duration: 16, delay: 0, size: 1.1 },
  { text: 'Node.js', left: '15%', duration: 19, delay: 2, size: 1.2 },
  { text: 'async/await', left: '26%', duration: 15, delay: 5, size: 0.95 },
  { text: '<div />', left: '36%', duration: 17, delay: 1, size: 1.3 },
  { text: 'MongoDB', left: '46%', duration: 14, delay: 4, size: 1.1 },
  { text: 'TypeScript', left: '57%', duration: 21, delay: 3, size: 1.25 },
  { text: 'const [state, setState]', left: '68%', duration: 18, delay: 6, size: 0.9 },
  { text: 'git push', left: '79%', duration: 15, delay: 7, size: 1.0 },
  { text: 'console.log()', left: '89%', duration: 16, delay: 2.5, size: 0.95 },
  { text: 'Next.js', left: '10%', duration: 20, delay: 1.5, size: 1.2 },
  { text: 'npm install', left: '31%', duration: 16, delay: 8, size: 1.0 },
  { text: 'Express', left: '61%', duration: 17, delay: 0.5, size: 1.15 },
  { text: 'REST API', left: '82%', duration: 22, delay: 4.5, size: 1.0 },
  { text: 'AWS', left: '93%', duration: 14, delay: 2, size: 1.1 },
  { text: '{ ...props }', left: '42%', duration: 16, delay: 6.5, size: 1.1 },
  { text: '01001101', left: '21%', duration: 18, delay: 3.5, size: 0.85 },
  { text: '</>', left: '74%', duration: 15, delay: 1.2, size: 1.3 },
  { text: 'Docker', left: '52%', duration: 19, delay: 7.5, size: 1.1 },
  { text: 'import { useState }', left: '84%', duration: 23, delay: 9.0, size: 0.85 },
];

export default function Hero() {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const isNeon = theme === 'neon';

  const handleScrollDown = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      aria-label="Introduction"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--bg-base)'
      }}
    >
      {/* Space Background & Stars */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at center, transparent 0%, var(--bg-base) 100%)',
          zIndex: 0,
        }}
        aria-hidden="true"
      />
      
      {/* Dense Starfield */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
          opacity: isLight ? 0 : 0.6,
          zIndex: 0
        }}
      />
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle, rgba(255,255,255,0.1) 1.5px, transparent 1.5px)',
          backgroundSize: '80px 80px',
          backgroundPosition: '40px 40px',
          opacity: isLight ? 0 : 0.4,
          zIndex: 0
        }}
      />

      {/* Floating Code Objects */}
      {floatingObjects.map((obj, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: obj.left,
            bottom: '-10%',
            color: isLight ? 'rgba(108,99,255,0.2)' : isNeon ? 'rgba(0, 255, 212, 0.15)' : 'rgba(255,255,255,0.05)',
            fontSize: `${obj.size}rem`,
            fontFamily: 'var(--font-mono)',
            fontWeight: 700,
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
            animation: `floatUp ${obj.duration}s linear infinite`,
            animationDelay: `${obj.delay}s`,
            zIndex: 0,
            userSelect: 'none'
          }}
        >
          {obj.text}
        </div>
      ))}

      {/* Main Centered Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          maxWidth: '850px',
          padding: '0 1.5rem',
          marginTop: '-40px'
        }}
      >
        <h1
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            lineHeight: 1.1,
            marginBottom: '1.5rem',
            animation: 'fadeInUp 0.8s ease both'
          }}
        >
          <span style={{ 
            fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', 
            fontWeight: 400, 
            color: 'var(--text-muted)', 
            marginBottom: '0.5rem',
            letterSpacing: '0.05em'
          }}>
            Hello, I'm
          </span>
          <span style={{ 
            fontSize: 'clamp(2.5rem, 6.5vw, 4.5rem)', 
            fontWeight: 700, 
            fontFamily: "'Space Grotesk', sans-serif",
            letterSpacing: '-0.01em',
            color: 'transparent',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            backgroundImage: isLight 
              ? 'linear-gradient(135deg, #1A0F3E 0%, #6C63FF 100%)' 
              : isNeon
                ? 'linear-gradient(135deg, #FFFFFF 0%, #00FFD4 100%)'
                : 'linear-gradient(135deg, #FFFFFF 0%, #a8b2c8 100%)',
            textShadow: isNeon ? '0 0 40px rgba(0, 255, 212, 0.3)' : isLight ? '0 0 30px rgba(108, 99, 255, 0.15)' : '0 0 30px rgba(255, 255, 255, 0.1)',
            padding: '0.1em 0',
            whiteSpace: 'nowrap'
          }}>
            Abhilash Kumar A.
          </span>
        </h1>

        <p
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
            lineHeight: 1.8,
            color: 'var(--text-secondary)',
            marginBottom: '2.5rem',
            maxWidth: '700px',
            margin: '0 auto 2.5rem',
            animation: 'fadeInUp 0.8s ease 0.2s both'
          }}
        >
          I'm a MERN Full Stack Developer creating awesome and scalable Web Applications for clients of all sizes around the globe. Let's start scrolling and learn more about me.
        </p>

        {/* Actions */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.5rem', animation: 'fadeInUp 0.8s ease 0.3s both' }}>
          <a
            href="/resume/Abhilash_kumar_a.pdf"
            download="Abhilash_Kumar_A_Resume.pdf"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              background: isLight ? 'var(--accent-violet)' : isNeon ? 'rgba(0, 255, 212, 0.1)' : 'rgba(108, 99, 255, 0.15)',
              color: isLight ? '#fff' : isNeon ? '#00FFD4' : 'var(--text-primary)',
              border: isNeon ? '1px solid rgba(0, 255, 212, 0.5)' : isLight ? 'none' : '1px solid rgba(108, 99, 255, 0.5)',
              fontWeight: 600,
              fontSize: '0.95rem',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
              boxShadow: isNeon ? '0 0 15px rgba(0, 255, 212, 0.2)' : isLight ? '0 4px 15px rgba(108, 99, 255, 0.3)' : '0 0 15px rgba(108, 99, 255, 0.2)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              if (isNeon) {
                e.currentTarget.style.boxShadow = '0 0 25px rgba(0, 255, 212, 0.4)';
                e.currentTarget.style.background = 'rgba(0, 255, 212, 0.2)';
              } else if (isLight) {
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(108, 99, 255, 0.4)';
                e.currentTarget.style.background = '#5a52d5';
              } else {
                e.currentTarget.style.boxShadow = '0 0 20px rgba(108, 99, 255, 0.4)';
                e.currentTarget.style.background = 'rgba(108, 99, 255, 0.25)';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              if (isNeon) {
                e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 255, 212, 0.2)';
                e.currentTarget.style.background = 'rgba(0, 255, 212, 0.1)';
              } else if (isLight) {
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(108, 99, 255, 0.3)';
                e.currentTarget.style.background = 'var(--accent-violet)';
              } else {
                e.currentTarget.style.boxShadow = '0 0 15px rgba(108, 99, 255, 0.2)';
                e.currentTarget.style.background = 'rgba(108, 99, 255, 0.15)';
              }
            }}
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>

        {/* Social Icons */}
        <div 
          style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '2rem',
            animation: 'fadeInUp 0.8s ease 0.4s both'
          }}
        >
          {[
            { icon: <LinkedInIcon />, href: 'https://linkedin.com/in/abhilash-kumar-a', label: 'LinkedIn' },
            { icon: <GitHubIcon />, href: 'https://github.com/abhilash2406', label: 'GitHub' },
            { icon: <Mail size={22} />, href: 'mailto:abhilashkumar66666@gmail.com', label: 'Email' }
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              style={{
                color: 'var(--text-secondary)',
                transition: 'color 0.3s ease, transform 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = isLight ? 'var(--accent-violet)' : 'var(--accent-cyan)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={handleScrollDown}
        aria-label="Scroll down to About section"
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: 'var(--text-muted)',
          animation: 'bounce 2s infinite',
          zIndex: 1,
        }}
      >
        <ArrowDown size={30} />
      </button>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&display=swap');
        
        @keyframes floatUp {
          0% { transform: translateY(10vh) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-120vh) rotate(360deg); opacity: 0; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
      `}</style>
    </section>
  );
}
