import React, { useState } from 'react';

const WhatsAppLineIcon: React.FC<{ size?: number; color?: string }> = ({ size = 26, color = '#FFFFFF' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    <path d="M9.5 9.5c.3-.5.7-.6 1-.6.2 0 .4.1.5.3l1.1 2.2c.1.3.1.5-.1.8l-.5.6c.4.8 1.1 1.5 1.9 1.9l.6-.5c.3-.2.5-.2.8-.1l2.2 1.1c.2.1.3.3.3.5 0 .3-.1.7-.6 1-.5.3-1.4.3-2.6-.3-1.6-.8-3.1-2.3-3.9-3.9-.6-1.2-.6-2.1-.3-2.6z" />
  </svg>
);

/**
 * WhatsApp Floating Button
 * Rule 17: navy circle 56px, white icon, tooltip "Chat on WhatsApp" bottom-right.
 */
export const WhatsAppFloating: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const whatsappUrl = 'https://wa.me/910000000000?text=Hello%20Vasudha%20Freshline%20Exports%20LLP,%20I%20would%20like%20to%20request%20an%20export%20quotation.';

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 40,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
      className="whatsapp-floating-wrapper"
    >
      {showTooltip && (
        <div
          role="tooltip"
          style={{
            position: 'absolute',
            bottom: '66px',
            right: '0',
            backgroundColor: 'var(--navy)',
            color: 'var(--ivory)',
            padding: '6px 14px',
            borderRadius: 'var(--radius-btn)',
            fontSize: '13px',
            fontWeight: 500,
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
            boxShadow: 'var(--shadow-soft)',
          }}
        >
          Chat on WhatsApp
        </div>
      )}

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        onMouseEnter={(e) => {
          setShowTooltip(true);
          e.currentTarget.style.transform = 'scale(1.05)';
        }}
        onMouseLeave={(e) => {
          setShowTooltip(false);
          e.currentTarget.style.transform = 'scale(1)';
        }}
        onFocus={() => setShowTooltip(true)}
        onBlur={() => setShowTooltip(false)}
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          backgroundColor: 'var(--navy)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          border: '1px solid var(--navy)',
          boxShadow: 'var(--shadow-floating)',
          transition: 'transform 200ms ease, background-color 200ms ease',
          textDecoration: 'none',
        }}
      >
        <WhatsAppLineIcon size={26} color="#FFFFFF" />
      </a>
    </div>
  );
};
