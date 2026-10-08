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
        backgroundColor: '#ECE8DC',
        color: '#353535',
        borderBottom: '1px solid #D9D5C8',
        minHeight: '36px',
        fontSize: '13px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6px 36px 6px 16px',
        position: 'relative',
        zIndex: 60,
        width: '100%',
        maxWidth: '100%',
        boxSizing: 'border-box',
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
          <strong style={{ color: '#16161A', fontWeight: 600 }}>Shipping notice:</strong>{' '}
          Ocean freight schedules active for [Sample] container sailings.{' '}
          {onNavigateToQuote ? (
            <button
              type="button"
              onClick={onNavigateToQuote}
              style={{
                background: 'none',
                border: 'none',
                color: '#687036',
                cursor: 'pointer',
                textDecoration: 'underline',
                textUnderlineOffset: '3px',
                fontSize: '13px',
                fontWeight: 500,
                fontFamily: 'inherit',
                padding: 0,
                display: 'inline',
              }}
            >
              Ask for a current quote.
            </button>
          ) : (
            <span style={{ color: '#687036' }}>Ask for a current quote.</span>
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
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'none',
          border: 'none',
          color: '#5F5D55',
          cursor: 'pointer',
          padding: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <X size={14} />
      </button>
    </div>
  );
};
