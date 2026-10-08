import React, { useState } from 'react';
import { X } from 'lucide-react';

interface NoticeBarProps {
  onNavigateToQuote?: () => void;
}

export const NoticeBar: React.FC<NoticeBarProps> = ({ onNavigateToQuote }) => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div
      role="region"
      aria-label="Shipping notice"
      style={{
        backgroundColor: '#0A0A38',
        color: '#DAD8E8',
        borderBottom: '1px solid rgba(247, 245, 239, 0.20)',
        minHeight: '38px',
        fontSize: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '8px 36px 8px 16px',
        position: 'relative',
        zIndex: 60,
        width: '100%',
        maxWidth: '100%',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          maxWidth: '100%',
        }}
      >
        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          <strong style={{ color: '#F7F5EF', fontWeight: 500 }}>Shipping notice:</strong>{' '}
          [CONFIRM: short note about freight or schedules].{' '}
          {onNavigateToQuote ? (
            <button
              type="button"
              onClick={onNavigateToQuote}
              style={{
                background: 'none',
                border: 'none',
                color: '#A9B070',
                cursor: 'pointer',
                textDecoration: 'underline',
                textUnderlineOffset: '3px',
                fontSize: '12px',
                fontFamily: 'inherit',
                padding: 0,
                display: 'inline',
              }}
            >
              Ask for a current quote.
            </button>
          ) : (
            <span style={{ color: '#A9B070' }}>Ask for a current quote.</span>
          )}
        </span>
      </div>

      <button
        type="button"
        onClick={() => setDismissed(true)}
        aria-label="Dismiss shipping notice"
        style={{
          position: 'absolute',
          right: '12px',
          background: 'none',
          border: 'none',
          color: '#B9B8D6',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '4px',
        }}
      >
        <X size={14} strokeWidth={1.5} />
      </button>
    </div>
  );
};
