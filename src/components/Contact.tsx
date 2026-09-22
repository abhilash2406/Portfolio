'use client';

import { useEffect, useRef, useState } from 'react';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const LinkedInIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

const isEmailJsConfigured =
  Boolean(EMAILJS_SERVICE_ID) && Boolean(EMAILJS_TEMPLATE_ID) && Boolean(EMAILJS_PUBLIC_KEY);

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('in-view')),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error as user types
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = { name: '', email: '', message: '' };
    if (!form.name.trim()) newErrors.name = 'Name is required.';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!form.message.trim()) newErrors.message = 'Message is required.';
    setErrors(newErrors);
    return !newErrors.name && !newErrors.email && !newErrors.message;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    if (!isEmailJsConfigured) {
      window.location.href = `mailto:abhilashkumar66666@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}`;
      return;
    }

    setStatus('sending');
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current!,
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
      setErrors({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const errorStyle: React.CSSProperties = {
    display: 'block',
    marginTop: '0.3rem',
    fontSize: '0.78rem',
    color: '#ff5f57',
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'var(--bg-elevated)',
    border: '1px solid var(--border-muted)',
    borderRadius: '8px',
    padding: '0.65rem 0.9rem',
    color: 'var(--text-primary)',
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'border-color 0.2s ease',
    fontFamily: 'var(--font-sans)',
    boxSizing: 'border-box',
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      aria-labelledby="contact-heading"
      className="section-padding"
      style={{
        background: 'linear-gradient(180deg, var(--bg-base) 0%, var(--bg-surface) 50%, var(--bg-base) 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        className="glow-orb"
        aria-hidden="true"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(108,99,255,0.07) 0%, transparent 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
        <div className="section-label reveal fade-up">Contact</div>
        <h2
          id="contact-heading"
          className="reveal fade-up"
          style={{
            fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
            fontWeight: 800,
            marginBottom: '0.75rem',
            letterSpacing: '-0.03em',
          }}
        >
          Let&apos;s <span className="gradient-text">build something</span>
        </h2>
        <p
          className="reveal fade-up"
          style={{
            color: 'var(--text-muted)',
            fontSize: '1rem',
            marginBottom: '3rem',
            maxWidth: '480px',
          }}
        >
          I&apos;m open to new opportunities and collaborations. Drop me a message — I&apos;ll get back to you soon.
        </p>

        <div
          className="contact-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.4fr',
            gap: '2.5rem',
            alignItems: 'start',
          }}
        >
          {/* Left: Direct links */}
          <div className="reveal fade-up" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <a
              href="mailto:abhilashkumar66666@gmail.com"
              id="contact-email-link"
              aria-label="Send email to Abhilash Kumar A"
              className="card"
              style={{ padding: '1.25rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '1rem' }}
            >
              <div
                aria-hidden="true"
                style={{
                  width: '40px', height: '40px', borderRadius: '10px',
                  background: 'var(--accent-violet-dim)',
                  border: '1px solid rgba(108,99,255,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--accent-violet)', flexShrink: 0,
                }}
              >
                <Mail size={18} />
              </div>
              <div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '2px' }}>Email</div>
                <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>
                  abhilashkumar66666@gmail.com
                </div>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/abhilash-kumar-a"
              id="contact-linkedin-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Abhilash Kumar A's LinkedIn profile"
              className="card"
              style={{ padding: '1.25rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '1rem' }}
            >
              <div
                aria-hidden="true"
                style={{
                  width: '40px', height: '40px', borderRadius: '10px',
                  background: 'rgba(0,119,181,0.12)',
                  border: '1px solid rgba(0,119,181,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#0077b5', flexShrink: 0,
                }}
              >
                <LinkedInIcon size={18} />
              </div>
              <div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '2px' }}>LinkedIn</div>
                <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  linkedin.com/in/abhilash-kumar-a
                </div>
              </div>
            </a>

            {/* Location note */}
            <div
              style={{
                padding: '1rem',
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '10px',
                fontSize: '0.85rem',
                color: 'var(--text-muted)',
                lineHeight: 1.6,
              }}
            >
              📍 <strong style={{ color: 'var(--text-secondary)' }}>Kochi, India</strong>
              <br />
              Open to remote and hybrid opportunities worldwide.
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="reveal fade-up">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              noValidate
              aria-label="Contact form"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '16px',
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  style={{
                    display: 'block', fontSize: '0.8rem', fontWeight: 600,
                    color: 'var(--text-secondary)', marginBottom: '0.4rem', letterSpacing: '0.02em',
                  }}
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  aria-label="Your name"
                  aria-describedby={errors.name ? 'error-name' : undefined}
                  style={{ ...inputStyle, borderColor: errors.name ? '#ff5f57' : 'var(--border-muted)' }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = errors.name ? '#ff5f57' : 'var(--accent-violet)')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = errors.name ? '#ff5f57' : 'var(--border-muted)')}
                />
                {errors.name && <span id="error-name" role="alert" style={errorStyle}>⚠ {errors.name}</span>}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  style={{
                    display: 'block', fontSize: '0.8rem', fontWeight: 600,
                    color: 'var(--text-secondary)', marginBottom: '0.4rem', letterSpacing: '0.02em',
                  }}
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  aria-label="Your email address"
                  aria-describedby={errors.email ? 'error-email' : undefined}
                  style={{ ...inputStyle, borderColor: errors.email ? '#ff5f57' : 'var(--border-muted)' }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = errors.email ? '#ff5f57' : 'var(--accent-violet)')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = errors.email ? '#ff5f57' : 'var(--border-muted)')}
                />
                {errors.email && <span id="error-email" role="alert" style={errorStyle}>⚠ {errors.email}</span>}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  style={{
                    display: 'block', fontSize: '0.8rem', fontWeight: 600,
                    color: 'var(--text-secondary)', marginBottom: '0.4rem', letterSpacing: '0.02em',
                  }}
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  aria-label="Your message"
                  aria-describedby={errors.message ? 'error-message' : undefined}
                  style={{ ...inputStyle, borderColor: errors.message ? '#ff5f57' : 'var(--border-muted)', resize: 'vertical' }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = errors.message ? '#ff5f57' : 'var(--accent-violet)')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = errors.message ? '#ff5f57' : 'var(--border-muted)')}
                />
                {errors.message && <span id="error-message" role="alert" style={errorStyle}>⚠ {errors.message}</span>}
              </div>

              {/* Submit */}
              <button
                id="contact-submit"
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary"
                aria-label="Send message"
                style={{
                  width: '100%', justifyContent: 'center',
                  opacity: status === 'sending' ? 0.7 : 1,
                  cursor: status === 'sending' ? 'wait' : 'pointer',
                  fontSize: '0.9rem', padding: '0.75rem',
                }}
              >
                <Send size={16} aria-hidden="true" />
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>

              {/* Status messages */}
              {status === 'success' && (
                <div
                  role="alert"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                    fontSize: '0.85rem', color: '#28c840',
                    background: 'rgba(40,200,64,0.08)',
                    border: '1px solid rgba(40,200,64,0.2)',
                    borderRadius: '8px', padding: '0.65rem 0.85rem',
                  }}
                >
                  <CheckCircle size={16} aria-hidden="true" />
                  Message sent! I&apos;ll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div
                  role="alert"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                    fontSize: '0.85rem', color: '#ff5f57',
                    background: 'rgba(255,95,87,0.08)',
                    border: '1px solid rgba(255,95,87,0.2)',
                    borderRadius: '8px', padding: '0.65rem 0.85rem',
                  }}
                >
                  <AlertCircle size={16} aria-hidden="true" />
                  Something went wrong. Please email me directly.
                </div>
              )}

              {!isEmailJsConfigured && (
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: '-0.25rem' }}>
                  Clicking Send will open your email client.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .reveal { opacity: 0; transition: opacity 0.7s ease, transform 0.7s ease; }
        .reveal.fade-up { transform: translateY(20px); }
        .reveal.in-view { opacity: 1; transform: none; }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
