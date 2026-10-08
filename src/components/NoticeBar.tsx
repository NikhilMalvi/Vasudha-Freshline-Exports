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
        minHeight: '36px',
        fontSize: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6px 36px 6px 16px',
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
          <strong style={{ color: 'var(--olive-light)', fontWeight: 500 }}>Notice:</strong>{' '}
          Gulf & Southeast Asia reefer space monitored weekly.
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
              fontSize: '12px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              padding: 0,
              flexShrink: 0,
            }}
          >
            <span>Quote</span>
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
