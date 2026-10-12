import React from 'react';

export interface StatItem {
  number: string;
  label: string;
}

interface DarkStatsBandProps {
  stats?: StatItem[];
  caption?: string;
}

const defaultStats: StatItem[] = [
  { number: '10+', label: 'Years in export' },
  { number: '100+', label: 'Containers shipped' },
  { number: '15+', label: 'Countries served' },
  { number: '50+', label: 'Buyers' },
];

export const DarkStatsBand: React.FC<DarkStatsBandProps> = ({
  stats = defaultStats,
  caption = 'Sample figures',
}) => {
  return (
    <section className="dark-stats-band">
      <div className="container">
        <div className="dark-stats-grid">
          {stats.map((item, idx) => (
            <div key={idx} className="dark-stat-item">
              <div className="dark-stat-number">{item.number}</div>
              <div className="dark-stat-label">{item.label}</div>
            </div>
          ))}
        </div>
        {caption && (
          <div style={{ textAlign: 'center', marginTop: '24px' }}>
            <span
              style={{
                fontSize: '12px',
                color: 'rgba(255, 255, 255, 0.45)',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            >
              {caption}
            </span>
          </div>
        )}
      </div>
    </section>
  );
};
