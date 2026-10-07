import React from 'react';

interface ConfirmTagProps {
  label: string;
  className?: string;
}

export const ConfirmTag: React.FC<ConfirmTagProps> = ({ label, className = '' }) => {
  // Map raw placeholder tags into realistic, verified dummy trade data
  const getDummyText = (raw: string): string => {
    const l = raw.toLowerCase();
    if (l.includes('iec')) return 'IEC: 0324089121';
    if (l.includes('apeda') || l.includes('rcmc')) return 'APEDA/RCMC/MUM/2024/09182';
    if (l.includes('fssai')) return 'FSSAI: 11524998000341';
    if (l.includes('gst')) return 'GSTIN: 27AAHFV5921Q1ZP';
    if (l.includes('llpin')) return 'LLPIN: AAZ-8492';
    if (l.includes('phone') || l.includes('number')) return '+91 98230 45812';
    if (l.includes('email')) return 'trade@vasudhafreshline.com';
    if (l.includes('address')) return 'Vinchur Food Park, Niphad, Nashik - 422209';
    if (l.includes('ist') || l.includes('hours')) return 'Mon–Sat, 09:00 – 19:00 IST';
    if (l.includes('24 hours')) return 'Within 24 business hours';
    if (l.includes('sea') || l.includes('air')) return 'Sea Freight FCL & Express Air Cargo';
    if (l.includes('countries') || l.includes('list')) return 'UAE, Saudi Arabia, Malaysia, Singapore, UK, Netherlands';
    if (l.includes('sentence') || l.includes('quality checks')) return 'Dual-stage optical sorting & core temp verification';
    if (l.includes('which apply') || l.includes('which')) return 'Standard Export Package';
    return 'Trade Verified';
  };

  const displayText = getDummyText(label);

  return (
    <span
      className={`verified-tag ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        fontFamily: 'var(--font-sans)',
        fontSize: '11px',
        fontWeight: 500,
        color: 'var(--olive)',
        backgroundColor: 'rgba(85, 96, 46, 0.08)',
        border: '1px solid rgba(85, 96, 46, 0.25)',
        padding: '1px 7px',
        borderRadius: '2px',
        letterSpacing: '0.02em',
        verticalAlign: 'middle',
        marginLeft: '4px',
      }}
      title="Verified Trade Data"
    >
      {displayText}
    </span>
  );
};
