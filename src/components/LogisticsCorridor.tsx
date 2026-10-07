import React, { useState } from 'react';
import { Truck, Anchor, Thermometer, ArrowRight } from 'lucide-react';

interface LogisticsCorridorProps {
  onOpenRfq: (product?: string) => void;
  onNavigateToExport: () => void;
}

export const LogisticsCorridor: React.FC<LogisticsCorridorProps> = ({ onOpenRfq, onNavigateToExport }) => {
  const [activePort, setActivePort] = useState('jebel-ali');

  const maritimeRoutes = [
    {
      id: 'jebel-ali',
      destination: 'Jebel Ali, UAE',
      region: 'Arabian Gulf',
      transitDays: '4–5 Days',
      containerType: '40ft High-Cube Reefer',
      tempRange: '+4°C to +6°C (Produce)',
      frequency: 'Direct weekly sailings',
      topCommodities: 'Pomegranates, Red Onions, Fresh Chillies',
    },
    {
      id: 'colombo',
      destination: 'Colombo, Sri Lanka',
      region: 'South Asia Gateway',
      transitDays: '3 Days',
      containerType: '40ft Reefer / 20ft Dry FCL',
      tempRange: 'Ambient Dry (Rice/Onions)',
      frequency: 'Multiple weekly feeders',
      topCommodities: 'Red & Pink Onions, Milled Rice',
    },
    {
      id: 'port-klang',
      destination: 'Port Klang / Penang, Malaysia',
      region: 'Southeast Asia',
      transitDays: '8–9 Days',
      containerType: '40ft High-Cube Reefer',
      tempRange: '+1°C to +3°C (Grapes) / +12°C',
      frequency: 'Direct ocean service',
      topCommodities: 'Table Grapes, Nashik Red Onions',
    },
    {
      id: 'singapore',
      destination: 'Singapore (PSA)',
      region: 'Southeast Asia Hub',
      transitDays: '9–10 Days',
      containerType: '40ft High-Cube Reefer',
      tempRange: '+4°C Controlled Atmosphere',
      frequency: 'Express direct liner',
      topCommodities: 'Bhagwa Pomegranates, Fresh Vegetables',
    },
    {
      id: 'dammam',
      destination: 'Dammam / Jeddah, Saudi Arabia',
      region: 'Middle East',
      transitDays: '6–8 Days',
      containerType: '40ft Reefer / 20ft Dry',
      tempRange: 'Ventilated reefer +12°C / Dry',
      frequency: 'Direct Red Sea & Gulf loops',
      topCommodities: '1121 Basmati Rice, Cumin, Red Onions',
    },
    {
      id: 'rotterdam',
      destination: 'Rotterdam / Antwerp, Europe',
      region: 'North-West Europe',
      transitDays: '21–24 Days',
      containerType: '40ft High-Cube Reefer (CA)',
      tempRange: '+4°C (TempTale Logger)',
      frequency: 'Direct Europe express',
      topCommodities: 'Bhagwa Pomegranates, Table Grapes',
    },
  ];

  const currentRoute = maritimeRoutes.find((r) => r.id === activePort) || maritimeRoutes[0];

  return (
    <section
      style={{
        backgroundColor: 'var(--bone)',
        borderBottom: '1px solid var(--line)',
      }}
      className="section-padding"
    >
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: '680px', marginBottom: '48px' }}>
          <span className="label-caps" style={{ display: 'block', marginBottom: '12px', color: 'var(--olive)' }}>
            Logistics & Cold-Chain Integrity
          </span>
          <h2 style={{ marginBottom: '16px' }}>
            From Nashik packhouses to JNPT Port in 4.5 hours.
          </h2>
          <p style={{ color: 'var(--charcoal)', fontSize: '16px', lineHeight: '26px' }}>
            Nashik is Maharashtra's agricultural hub for pomegranates, table grapes and onions. With dedicated highway connectivity to Jawaharlal Nehru Port (JNPT / Nhava Sheva, INNSA), cargo transfers seamlessly into marine reefer plugs without breaking cold chain.
          </p>
        </div>

        {/* 3 Key Operational Pillars */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
            marginBottom: '48px',
          }}
          className="corridor-pillars"
        >
          <div
            style={{
              padding: '24px',
              backgroundColor: 'var(--ivory)',
              border: '1px solid var(--line)',
              borderRadius: 'var(--radius)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <Truck size={20} strokeWidth={1.5} color="var(--olive)" />
              <span className="label-caps" style={{ color: 'var(--navy)', fontWeight: 600 }}>
                Highway Corridor
              </span>
            </div>
            <div style={{ fontSize: '28px', fontFamily: 'var(--font-serif)', color: 'var(--ink)', marginBottom: '6px' }}>
              ~185 km / 4.5 Hours
            </div>
            <p style={{ fontSize: '14px', lineHeight: '22px', color: 'var(--muted)', margin: 0 }}>
              Direct transit from Nashik packhouses to JNPT port reefer yards via Mumbai-Nashik expressway under continuous thermo-king reefer monitoring.
            </p>
          </div>

          <div
            style={{
              padding: '24px',
              backgroundColor: 'var(--ivory)',
              border: '1px solid var(--line)',
              borderRadius: 'var(--radius)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <Thermometer size={20} strokeWidth={1.5} color="var(--olive)" />
              <span className="label-caps" style={{ color: 'var(--navy)', fontWeight: 600 }}>
                Cold-Chain Standard
              </span>
            </div>
            <div style={{ fontSize: '28px', fontFamily: 'var(--font-serif)', color: 'var(--ink)', marginBottom: '6px' }}>
              +4°C Pre-Cooled
            </div>
            <p style={{ fontSize: '14px', lineHeight: '22px', color: 'var(--muted)', margin: 0 }}>
              Rapid pre-cooling immediately post-harvest removes field heat. Calibrated USB temperature data loggers accompany cargo inside container doorway.
            </p>
          </div>

          <div
            style={{
              padding: '24px',
              backgroundColor: 'var(--ivory)',
              border: '1px solid var(--line)',
              borderRadius: 'var(--radius)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <Anchor size={20} strokeWidth={1.5} color="var(--olive)" />
              <span className="label-caps" style={{ color: 'var(--navy)', fontWeight: 600 }}>
                Port of Loading
              </span>
            </div>
            <div style={{ fontSize: '28px', fontFamily: 'var(--font-serif)', color: 'var(--ink)', marginBottom: '6px' }}>
              JNPT / Nhava Sheva
            </div>
            <p style={{ fontSize: '14px', lineHeight: '22px', color: 'var(--muted)', margin: 0 }}>
              India's premier container terminal with state-of-the-art reefer plug-in facilities, on-site customs clearance, and daily feeder connections worldwide.
            </p>
          </div>
        </div>

        {/* Interactive Maritime Transit Schedule */}
        <div
          style={{
            backgroundColor: 'var(--ivory)',
            border: '1px solid var(--line)',
            borderRadius: 'var(--radius)',
            overflow: 'hidden',
          }}
        >
          {/* Subheader */}
          <div
            style={{
              padding: '20px 24px',
              borderBottom: '1px solid var(--line)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '12px',
              backgroundColor: 'var(--bone)',
            }}
          >
            <div>
              <span className="label-caps" style={{ color: 'var(--navy)', fontWeight: 600 }}>
                Direct Ocean Transit Schedules
              </span>
              <span style={{ fontSize: '13px', color: 'var(--muted)', marginLeft: '12px' }}>
                Select destination port for transit metrics
              </span>
            </div>
            <span style={{ fontSize: '12px', color: 'var(--muted)' }}>
              Port code: INNSA (Nhava Sheva)
            </span>
          </div>

          {/* Port Selector Tabs */}
          <div
            style={{
              display: 'flex',
              overflowX: 'auto',
              borderBottom: '1px solid var(--line)',
              backgroundColor: 'var(--ivory)',
            }}
          >
            {maritimeRoutes.map((route) => {
              const isSelected = route.id === activePort;
              return (
                <button
                  key={route.id}
                  type="button"
                  onClick={() => setActivePort(route.id)}
                  style={{
                    padding: '14px 20px',
                    border: 'none',
                    borderRight: '1px solid var(--line)',
                    backgroundColor: isSelected ? 'var(--navy)' : 'transparent',
                    color: isSelected ? 'var(--ivory)' : 'var(--charcoal)',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '13px',
                    fontWeight: isSelected ? 600 : 400,
                    whiteSpace: 'nowrap',
                    transition: 'all 150ms ease',
                  }}
                >
                  {route.destination}
                </button>
              );
            })}
          </div>

          {/* Active Route Detail Display */}
          <div
            style={{
              padding: '32px',
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gap: '28px',
              alignItems: 'center',
            }}
            className="route-details-grid"
          >
            <div style={{ gridColumn: 'span 7' }}>
              <span className="label-caps" style={{ color: 'var(--olive)', display: 'block', marginBottom: '6px' }}>
                {currentRoute.region}
              </span>
              <h3 style={{ fontSize: '26px', lineHeight: '32px', marginBottom: '14px' }}>
                JNPT Nhava Sheva → {currentRoute.destination}
              </h3>
              <p style={{ fontSize: '15px', lineHeight: '24px', color: 'var(--charcoal)', marginBottom: '20px' }}>
                Regular full container load (FCL) service for {currentRoute.topCommodities}. Temperature parameters set and locked at loading dock.
              </p>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  onClick={() => onOpenRfq(currentRoute.destination)}
                  className="btn-primary"
                  style={{ height: '46px', padding: '0 22px', fontSize: '14px' }}
                >
                  <span>Request freight quote to {currentRoute.destination.split(',')[0]}</span>
                  <ArrowRight size={14} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            <div
              style={{
                gridColumn: 'span 5',
                backgroundColor: 'var(--bone)',
                border: '1px solid var(--line)',
                padding: '24px',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--line)', paddingBottom: '8px' }}>
                  <span style={{ fontSize: '13px', color: 'var(--muted)' }}>Estimated Sea Transit:</span>
                  <span style={{ fontSize: '15px', fontWeight: 600, color: 'var(--ink)' }}>{currentRoute.transitDays}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--line)', paddingBottom: '8px' }}>
                  <span style={{ fontSize: '13px', color: 'var(--muted)' }}>Container Profile:</span>
                  <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--ink)' }}>{currentRoute.containerType}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--line)', paddingBottom: '8px' }}>
                  <span style={{ fontSize: '13px', color: 'var(--muted)' }}>Carriage Temperature:</span>
                  <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--ink)' }}>{currentRoute.tempRange}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '13px', color: 'var(--muted)' }}>Sailing Frequency:</span>
                  <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--ink)' }}>{currentRoute.frequency}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <button
            type="button"
            onClick={onNavigateToExport}
            className="text-link"
            style={{ background: 'none', border: 'none', fontSize: '14px', cursor: 'pointer' }}
          >
            <span>Review complete ocean container packing guidelines</span>
            <span>→</span>
          </button>
          <span style={{ fontSize: '12px', color: 'var(--muted)' }}>
            Ocean bills of lading issued with clean-on-board status.
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .corridor-pillars {
            grid-template-columns: 1fr !important;
          }
          .route-details-grid div {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </section>
  );
};
