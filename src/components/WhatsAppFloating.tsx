import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';

export const WhatsAppFloating: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const whatsappUrl = 'https://wa.me/?text=Hello%20Vasudha%20Freshline,%20I%20would%20like%20a%20quote%20for%20container%20exports.';

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
          className="animate-fade-in"
          style={{
            position: 'absolute',
            bottom: '62px',
            right: '0',
            backgroundColor: 'var(--navy)',
            color: 'var(--ivory)',
            padding: '6px 12px',
            borderRadius: 'var(--radius)',
            fontSize: '12px',
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
            border: '1px solid rgba(217, 213, 200, 0.2)',
          }}
        >
          Chat on WhatsApp Trade Desk
        </div>
      )}

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Vasudha Freshline Exports trade desk"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onFocus={() => setShowTooltip(true)}
        onBlur={() => setShowTooltip(false)}
        style={{
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          backgroundColor: 'var(--navy)',
          color: 'var(--ivory)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 8px rgba(16, 16, 79, 0.15)',
          textDecoration: 'none',
          transition: 'transform 200ms ease, background-color 200ms ease',
          border: '1px solid rgba(247, 245, 239, 0.15)',
        }}
      >
        <MessageSquare size={22} strokeWidth={1.5} color="var(--ivory)" />
      </a>

      <style>{`
        @media (max-width: 480px) {
          .whatsapp-floating-wrapper {
            bottom: 84px !important; /* Avoid overlap with sticky mobile product bar */
            right: 16px !important;
          }
        }
      `}</style>
    </div>
  );
};
