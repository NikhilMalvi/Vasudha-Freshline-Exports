import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

/**
 * Scroll to Top Floating Button
 * Rule 17: appears after 600px of scrolling, positioned above the WhatsApp button.
 */
export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top of page"
      style={{
        position: 'fixed',
        bottom: '92px',
        right: '30px',
        zIndex: 50,
        width: '44px',
        height: '44px',
        borderRadius: '50%',
        backgroundColor: 'var(--white)',
        border: '1px solid var(--line)',
        color: 'var(--navy)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        boxShadow: 'var(--shadow-soft)',
        transition: 'transform 200ms ease, background-color 200ms ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--bone)';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--white)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <ArrowUp size={18} strokeWidth={1.8} />
    </button>
  );
};
