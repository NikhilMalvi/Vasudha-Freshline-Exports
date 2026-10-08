import React from 'react';
import { Award, ShieldCheck, FileCheck2, Building2, CheckCircle2, Globe2 } from 'lucide-react';

interface AccreditationRibbonProps {
  onNavigateToQuality?: () => void;
}

export const AccreditationRibbon: React.FC<AccreditationRibbonProps> = ({ onNavigateToQuality }) => {
  const accreditations = [
    {
      code: 'APEDA',
      name: 'Registered Exporter',
      desc: 'Agricultural & Processed Food Products Export Development Authority',
      icon: <Award size={18} strokeWidth={1.5} color="var(--olive)" />,
      badge: 'RCMC/MUM/09182',
    },
    {
      code: 'FSSAI',
      name: 'Central Food License',
      desc: 'Food Safety and Standards Authority of India (Central Export Category)',
      icon: <ShieldCheck size={18} strokeWidth={1.5} color="var(--olive)" />,
      badge: 'Lic: 11524998000341',
    },
    {
      code: 'DGFT / IEC',
      name: 'Import Export Code',
      desc: 'Ministry of Commerce & Industry, Government of India',
      icon: <FileCheck2 size={18} strokeWidth={1.5} color="var(--olive)" />,
      badge: 'IEC: 0324089121',
    },
    {
      code: 'QUARANTINE',
      name: 'Phytosanitary Inspected',
      desc: 'Plant Quarantine Directorate inspection & certification prior to port loading',
      icon: <CheckCircle2 size={18} strokeWidth={1.5} color="var(--olive)" />,
      badge: 'Consignment-level',
    },
    {
      code: 'MSME',
      name: 'Udyam Registered',
      desc: 'Registered Micro, Small and Medium Agricultural Processing Enterprise',
      icon: <Building2 size={18} strokeWidth={1.5} color="var(--olive)" />,
      badge: 'UDYAM-MH-26-0049182',
    },
    {
      code: 'GST',
      name: 'Verified Business',
      desc: 'Registered taxpayer under Central Goods and Services Tax Act',
      icon: <Globe2 size={18} strokeWidth={1.5} color="var(--olive)" />,
      badge: '27AAHFV5921Q1ZP',
    },
  ];

  return (
    <section
      style={{
        backgroundColor: 'var(--ivory)',
        borderBottom: '1px solid var(--line)',
      }}
      className="accreditation-ribbon"
    >
      <div className="container" style={{ paddingTop: '28px', paddingBottom: '28px' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '20px',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="label-caps" style={{ color: 'var(--olive)', fontWeight: 600 }}>
              Statutory Compliance & Accreditations
            </span>
            <span style={{ color: 'var(--line)' }}>•</span>
            <span style={{ fontSize: '13px', color: 'var(--muted)' }}>
              Verified by Indian export authorities
            </span>
          </div>

          {onNavigateToQuality && (
            <button
              type="button"
              onClick={onNavigateToQuality}
              className="text-link"
              style={{
                background: 'none',
                border: 'none',
                fontSize: '13px',
                cursor: 'pointer',
              }}
            >
              <span>View full verification audit trail</span>
              <span>→</span>
            </button>
          )}
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            borderTop: '1px solid var(--line)',
            borderLeft: '1px solid var(--line)',
          }}
          className="accreditation-grid"
        >
          {accreditations.map((item) => (
            <div
              key={item.code}
              style={{
                borderRight: '1px solid var(--line)',
                borderBottom: '1px solid var(--line)',
                padding: '20px 16px',
                backgroundColor: 'var(--bone)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'background-color 180ms ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--ivory)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--bone)';
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '11px',
                      fontWeight: 600,
                      color: 'var(--navy)',
                      letterSpacing: '0.08em',
                    }}
                  >
                    {item.code}
                  </span>
                  {item.icon}
                </div>

                <div
                  style={{
                    fontSize: '14px',
                    fontWeight: 500,
                    color: 'var(--ink)',
                    lineHeight: '18px',
                    marginBottom: '4px',
                  }}
                >
                  {item.name}
                </div>

                <p style={{ fontSize: '12px', lineHeight: '17px', color: 'var(--muted)', margin: 0 }}>
                  {item.desc}
                </p>
              </div>

              <div style={{ marginTop: '14px' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '10px',
                    color: 'var(--muted)',
                    backgroundColor: 'rgba(95, 93, 85, 0.08)',
                    padding: '2px 6px',
                    border: '1px dashed var(--line)',
                    display: 'inline-block',
                    borderRadius: '1px',
                  }}
                >
                  {item.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .accreditation-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .accreditation-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .accreditation-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
