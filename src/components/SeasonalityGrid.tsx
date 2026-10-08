import React from 'react';
import { PRODUCTS_DATA } from '../data/commodities';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

interface SeasonalityGridProps {
  onSelectProduct?: (slug: string) => void;
}

export const SeasonalityGrid: React.FC<SeasonalityGridProps> = ({ onSelectProduct }) => {
  const products = Object.values(PRODUCTS_DATA);

  return (
    <div style={{ width: '100%', maxWidth: '100%', overflowX: 'auto', WebkitOverflowScrolling: 'touch', border: '1px solid var(--line)', backgroundColor: '#FFFFFF', borderRadius: 'var(--radius)' }}>
      <table
        className="spec-table"
        style={{ width: '100%', minWidth: '760px', borderCollapse: 'collapse' }}
        aria-label="12-month crop export seasonality calendar"
      >
        <thead>
          <tr>
            <th scope="col" style={{ width: '220px', paddingLeft: '20px' }}>Commodity</th>
            {MONTHS.map((m) => (
              <th key={m} scope="col" style={{ textAlign: 'center', width: '45px', padding: '12px 4px' }}>
                {m}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {products.map((prod) => (
            <tr key={prod.slug}>
              <td style={{ paddingLeft: '20px' }}>
                {onSelectProduct ? (
                  <button
                    type="button"
                    onClick={() => onSelectProduct(prod.slug)}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      font: 'inherit',
                      textAlign: 'left',
                      cursor: 'pointer',
                      fontWeight: 500,
                      color: 'var(--ink)',
                      textDecoration: 'underline',
                      textUnderlineOffset: '3px',
                    }}
                  >
                    {prod.name}
                  </button>
                ) : (
                  <span style={{ fontWeight: 500, color: 'var(--ink)' }}>{prod.name}</span>
                )}
                <span style={{ display: 'block', fontSize: '11px', color: 'var(--muted)', marginTop: '2px' }}>
                  {prod.category}
                </span>
              </td>

              {prod.seasonalityMonths.map((status, idx) => {
                const isPeak = status === 'peak';
                const isAvailable = status === 'available';

                return (
                  <td
                    key={idx}
                    style={{
                      textAlign: 'center',
                      padding: '12px 4px',
                      verticalAlign: 'middle',
                    }}
                  >
                    {isPeak ? (
                      <span
                        title={`${MONTHS[idx]}: Peak Export Harvest`}
                        style={{
                          display: 'block',
                          height: '24px',
                          backgroundColor: 'var(--olive-deep)',
                          borderRadius: '1px',
                        }}
                      />
                    ) : isAvailable ? (
                      <span
                        title={`${MONTHS[idx]}: Available for Export`}
                        style={{
                          display: 'block',
                          height: '24px',
                          backgroundColor: 'var(--olive)',
                          borderRadius: '1px',
                        }}
                      />
                    ) : (
                      <span
                        title={`${MONTHS[idx]}: Off Season / Advance Contract`}
                        style={{
                          display: 'block',
                          height: '24px',
                          border: '1px dashed var(--line)',
                          borderRadius: '1px',
                        }}
                      />
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Legend & Footnote */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          padding: '16px 20px',
          backgroundColor: 'var(--bone)',
          borderTop: '1px solid var(--line)',
          fontSize: '12px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ width: '14px', height: '14px', backgroundColor: 'var(--olive-deep)', display: 'inline-block' }} />
            <span>Peak export harvest</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ width: '14px', height: '14px', backgroundColor: 'var(--olive)', display: 'inline-block' }} />
            <span>Available for export</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ width: '14px', height: '14px', border: '1px dashed var(--line)', display: 'inline-block' }} />
            <span>Off-crop / forward contract</span>
          </div>
        </div>

        <span style={{ color: 'var(--muted)' }}>
          Availability varies by micro-climatic crop zone. Confirm specific harvest timing with our trade desk when inquiring.
        </span>
      </div>
    </div>
  );
};
