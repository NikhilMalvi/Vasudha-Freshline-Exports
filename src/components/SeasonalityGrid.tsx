import React from 'react';
import { PRODUCTS_DATA } from '../data/commodities';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

interface SeasonalityGridProps {
  onSelectProduct?: (slug: string) => void;
}

export const SeasonalityGrid: React.FC<SeasonalityGridProps> = ({ onSelectProduct }) => {
  const products = Object.values(PRODUCTS_DATA);

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '100%',
        overflowX: 'auto',
        WebkitOverflowScrolling: 'touch',
        border: '1px solid rgba(247, 245, 239, 0.20)',
        backgroundColor: '#0A0A38',
        borderRadius: 'var(--radius)',
      }}
    >
      <table
        className="spec-table"
        style={{ width: '100%', minWidth: '760px', borderCollapse: 'collapse' }}
        aria-label="12-month crop export seasonality calendar"
      >
        <thead>
          <tr>
            <th scope="col" style={{ width: '240px', paddingLeft: '20px', backgroundColor: '#1A1A66', color: '#B9B8D6', borderBottom: '1px solid rgba(247, 245, 239, 0.20)' }}>
              Commodity
            </th>
            {MONTHS.map((m) => (
              <th
                key={m}
                scope="col"
                style={{
                  textAlign: 'center',
                  width: '45px',
                  padding: '12px 4px',
                  backgroundColor: '#1A1A66',
                  color: '#B9B8D6',
                  borderBottom: '1px solid rgba(247, 245, 239, 0.20)',
                }}
              >
                {m}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {products.map((prod) => {
            const isOnions = prod.slug === 'onions';

            // Exact rule: Onions available Oct-Apr, peak Dec-Feb. All other rows show empty outlined cells and [CONFIRM: months].
            return (
              <tr key={prod.slug} style={{ borderBottom: '1px solid rgba(247, 245, 239, 0.15)' }}>
                <td style={{ paddingLeft: '20px', paddingRight: '12px', verticalAlign: 'middle' }}>
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
                        color: '#F7F5EF',
                        textDecoration: 'underline',
                        textUnderlineOffset: '3px',
                      }}
                    >
                      {prod.name}
                    </button>
                  ) : (
                    <span style={{ fontWeight: 500, color: '#F7F5EF' }}>{prod.name}</span>
                  )}
                  <span
                    style={{
                      display: 'block',
                      fontSize: '11px',
                      color: isOnions ? '#A9B070' : '#B9B8D6',
                      marginTop: '3px',
                    }}
                  >
                    {isOnions
                      ? 'October – April (peak Dec–Feb)'
                      : '[CONFIRM: months]'}
                  </span>
                </td>

                {MONTHS.map((_, idx) => {
                  if (isOnions) {
                    // Jan (0), Feb (1), Dec (11) = peak
                    // Oct (9), Nov (10), Mar (2), Apr (3) = available
                    // May (4), Jun (5), Jul (6), Aug (7), Sep (8) = off-season
                    const isPeak = idx === 0 || idx === 1 || idx === 11;
                    const isAvailable = idx === 9 || idx === 10 || idx === 2 || idx === 3;

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
                            title={`${MONTHS[idx]}: Peak harvest export`}
                            style={{
                              display: 'block',
                              height: '24px',
                              backgroundColor: '#A9B070',
                              borderRadius: '1px',
                            }}
                          />
                        ) : isAvailable ? (
                          <span
                            title={`${MONTHS[idx]}: Available for export`}
                            style={{
                              display: 'block',
                              height: '24px',
                              backgroundColor: 'rgba(169, 176, 112, 0.45)',
                              border: '1px solid #A9B070',
                              borderRadius: '1px',
                            }}
                          />
                        ) : (
                          <span
                            title={`${MONTHS[idx]}: Off season`}
                            style={{
                              display: 'block',
                              height: '24px',
                              border: '1px solid rgba(247, 245, 239, 0.20)',
                              borderRadius: '1px',
                            }}
                          />
                        )}
                      </td>
                    );
                  }

                  // All other rows: empty outlined cells
                  return (
                    <td
                      key={idx}
                      style={{
                        textAlign: 'center',
                        padding: '12px 4px',
                        verticalAlign: 'middle',
                      }}
                    >
                      <span
                        title={`${MONTHS[idx]}: [CONFIRM: months]`}
                        style={{
                          display: 'block',
                          height: '24px',
                          border: '1px solid rgba(247, 245, 239, 0.20)',
                          borderRadius: '1px',
                        }}
                      />
                    </td>
                  );
                })}
              </tr>
            );
          })}
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
          backgroundColor: '#1A1A66',
          borderTop: '1px solid rgba(247, 245, 239, 0.20)',
          fontSize: '12px',
          color: '#DAD8E8',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ width: '14px', height: '14px', backgroundColor: '#A9B070', display: 'inline-block' }} />
            <span style={{ color: '#F7F5EF' }}>Peak harvest</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ width: '14px', height: '14px', backgroundColor: 'rgba(169, 176, 112, 0.45)', border: '1px solid #A9B070', display: 'inline-block' }} />
            <span style={{ color: '#DAD8E8' }}>Available</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ width: '14px', height: '14px', border: '1px solid rgba(247, 245, 239, 0.20)', display: 'inline-block' }} />
            <span style={{ color: '#B9B8D6' }}>Empty cell [CONFIRM: months]</span>
          </div>
        </div>

        <span style={{ color: '#B9B8D6' }}>
          Harvest schedules: [CONFIRM: crop calendar details per destination port].
        </span>
      </div>
    </div>
  );
};
