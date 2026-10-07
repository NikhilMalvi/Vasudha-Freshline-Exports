import React from 'react';

export interface CommoditySpec {
  id: string;
  name: string;
  category: string;
  variety: string;
  sizes: string;
  packaging: string;
  reeferTemp: string;
  moistureOrShelfLife: string;
  containerCapacity: string;
  origin: string;
}

interface SpecTableProps {
  items: CommoditySpec[];
  onSelectCommodity?: (item: CommoditySpec) => void;
}

export const SpecTable: React.FC<SpecTableProps> = ({ items, onSelectCommodity }) => {
  return (
    <div style={{ width: '100%', overflowX: 'auto' }}>
      <table className="spec-table" aria-label="Commercial commodity specifications">
        <thead>
          <tr>
            <th scope="col" style={{ minWidth: '160px' }}>Commodity</th>
            <th scope="col" style={{ minWidth: '140px' }}>Variety / Type</th>
            <th scope="col" style={{ minWidth: '130px' }}>Grading / Size</th>
            <th scope="col" style={{ minWidth: '160px' }}>Packaging Format</th>
            <th scope="col" style={{ minWidth: '130px' }}>Transit Temp</th>
            <th scope="col" style={{ minWidth: '150px' }}>Container Load (FCL)</th>
            <th scope="col" style={{ minWidth: '120px' }}>Origin</th>
            <th scope="col" style={{ minWidth: '100px', textAlign: 'right' }}>Inquiry</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>
                <span style={{ fontWeight: 500, color: 'var(--ink)' }}>{item.name}</span>
                <span style={{ display: 'block', fontSize: '12px', color: 'var(--muted)' }}>
                  {item.category}
                </span>
              </td>
              <td>{item.variety}</td>
              <td>{item.sizes}</td>
              <td>{item.packaging}</td>
              <td>{item.reeferTemp}</td>
              <td>{item.containerCapacity}</td>
              <td>{item.origin}</td>
              <td style={{ textAlign: 'right' }}>
                {onSelectCommodity && (
                  <button
                    type="button"
                    onClick={() => onSelectCommodity(item)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--olive)',
                      cursor: 'pointer',
                      fontSize: '13px',
                      fontWeight: 500,
                      textDecoration: 'underline',
                      textUnderlineOffset: '3px',
                      padding: '4px 0',
                    }}
                  >
                    Quote
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
