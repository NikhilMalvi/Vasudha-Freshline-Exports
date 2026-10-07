import React from 'react';

interface ConfirmTagProps {
  label: string;
  className?: string;
}

export const ConfirmTag: React.FC<ConfirmTagProps> = ({ label, className = '' }) => {
  // Always formats as [CONFIRM: ...] or verbatim bracketed text
  const formatted = label.startsWith('[') && label.endsWith(']') ? label : `[${label}]`;

  return (
    <span className={`confirm-tag ${className}`} title="Pending client verification">
      {formatted}
    </span>
  );
};
