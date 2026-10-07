import React, { useState } from 'react';
import { X, ArrowRight } from 'lucide-react';

interface NoticeBarProps {
  onNavigateToQuote?: () => void;
}

export const NoticeBar: React.FC<NoticeBarProps> = ({ onNavigateToQuote }) => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div
      role="region"
      aria-label="Current shipping advisory"
      style={{
        backgroundColor: 'var(--navy)',
        color: 'var(--ivory)',
        height: '36px',
        fontSize: '13px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 16px',
        position: 'relative',
        zIndex: 60,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
      >
        <span>
          <strong style={{ color: 'var(--olive-light)', fontWeight: 500 }}>Shipping notice:</strong>{' '}
          Gulf & Southeast Asia reefer space monitored weekly. Ask for current freight and loading schedules.
        </span>

        {onNavigateToQuote && (
          <button
            type="button"
            onClick={onNavigateToQuote}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--olive-light)',
              cursor: 'pointer',
              textDecoration: 'underline',
              textUnderlineOffset: '3px',
              fontSize: '13px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              padding: 0,
            }}
          >
            <span>Ask for a current quote</span>
            <ArrowRight size={12} strokeWidth={1.5} />
          </button>
        )}
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
          color: 'rgba(247, 245, 239, 0.7)',
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
