'use client';

import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on outside click or ESC
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    const handleEsc = (e) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Theme based on scroll
  const bg = isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(10, 10, 15, 0.9)';
  const text = isScrolled ? '#111827' : '#ffffff';
  const border = isScrolled ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.15)';
  const hoverBg = isScrolled ? 'rgba(255, 215, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)';

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: bg,
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${border}`,
        transition: 'background-color 0.3s, border-color 0.3s',
      }}
      role="banner"
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* LOGO — ONLY ONCE */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <strong
            style={{
              fontSize: '22px',
              fontWeight: '800',
              color: text,
              fontFamily: 'system-ui, sans-serif',
            }}
          >
            narfe
          </strong>
          <span
            style={{
              fontSize: '11px',
              fontWeight: '600',
              color: isScrolled ? '#6b7280' : '#cbd5e1',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}
          >
            Monetise Your Journeys
          </span>
        </div>

        {/* DESKTOP NAV — hidden on mobile */}
        <nav
          className="desktop-nav"
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '16px',
          }}
          role="navigation"
        >
          <a
            href="#apply"
            style={{
              padding: '8px 16px',
              borderRadius: '12px',
              color: text,
              fontWeight: '600',
              fontSize: '15px',
              textDecoration: 'none',
              background: 'transparent',
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = hoverBg)}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
            onFocus={(e) => (e.currentTarget.style.background = hoverBg)}
            onBlur={(e) => (e.currentTarget.style.background = 'transparent')}
          >
            Apply as a Creator
          </a>
          <button
            style={{
              padding: '8px 20px',
              borderRadius: '24px',
              fontWeight: '700',
              fontSize: '15px',
              background: 'linear-gradient(to right, #ffd700, #ffed4e)',
              color: '#1f2937',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(255, 215, 0, 0.3)',
            }}
          >
            Join Now
          </button>
        </nav>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          style={{
            background: 'none',
            border: 'none',
            fontSize: '24px',
            color: text,
            cursor: 'pointer',
          }}
          className="mobile-toggle"
        >
          {isMenuOpen ? '×' : '☰'}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          style={{
            position: 'fixed',
            top: '64px',
            left: 0,
            right: 0,
            backgroundColor: bg,
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            borderTop: `1px solid ${border}`,
            padding: '20px',
            zIndex: 999,
          }}
          role="dialog"
          aria-modal="true"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <a
              href="#apply"
              style={{
                padding: '14px 20px',
                borderRadius: '16px',
                textAlign: 'center',
                color: text,
                fontWeight: '600',
                fontSize: '16px',
                textDecoration: 'none',
                background: hoverBg,
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              Apply as a Creator
            </a>
            <button
              style={{
                padding: '14px 20px',
                borderRadius: '16px',
                fontWeight: '700',
                fontSize: '16px',
                background: 'linear-gradient(to right, #ffd700, #ffed4e)',
                color: '#1f2937',
                border: 'none',
                cursor: 'pointer',
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              Join Now
            </button>
          </div>
        </div>
      )}

      {/* STYLES */}
      <style jsx>{`
        @media (min-width: 768px) {
          .mobile-toggle {
            display: none !important;
          }
          .desktop-nav {
            display: flex !important;
          }
        }
        @media (max-width: 767px) {
          .desktop-nav {
            display: none !important;
          }
        }
        button:focus,
        a:focus {
          outline: 2px solid #ffd700;
          outline-offset: 2px;
        }
      `}</style>
    </header>
  );
}