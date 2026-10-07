import React, { useEffect } from 'react';
import { PhotoPlaceholder } from '../components/PhotoPlaceholder';
import { ConfirmTag } from '../components/ConfirmTag';
import { IMAGES } from '../data/images';

interface AboutPageProps {
  onNavigate?: (path: string) => void;
  onOpenRfq: (product?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenRfq }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      {/* Page Intro */}
      <section className="hairline-b" style={{ backgroundColor: 'var(--ivory)', paddingTop: '64px', paddingBottom: '56px' }}>
        <div className="container">
          <div style={{ maxWidth: '680px' }} className="reveal">
            <span className="label-caps" style={{ display: 'block', marginBottom: '12px' }}>
              About
            </span>
            <h1 style={{ marginBottom: '24px' }}>
              Exporting Indian produce since <ConfirmTag label="CONFIRM: year" />.
            </h1>
            <p style={{ fontSize: '19px', lineHeight: '30px', color: 'var(--charcoal)' }}>
              Vasudha Freshline Exports LLP was established to supply international wholesale importers and packaging distributors with verified agricultural commodities from India. We export container-load consignments of pomegranates, onions, rice, spices, fresh fruits and fresh vegetables from Maharashtra, Gujarat and primary growing regions. Every shipment is inspected, graded and documented from farm to port. <ConfirmTag label="CONFIRM" />
            </p>
          </div>
        </div>
      </section>

      {/* What We Do (3 Columns separated by 1px lines) */}
      <section className="section-padding hairline-b" style={{ backgroundColor: 'var(--bone)' }}>
        <div className="container">
          <div style={{ maxWidth: '640px', marginBottom: '48px' }} className="reveal">
            <span className="label-caps" style={{ display: 'block', marginBottom: '8px' }}>
              Core Operations
            </span>
            <h2>What we do</h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              borderTop: '1px solid var(--line)',
              borderLeft: '1px solid var(--line)',
            }}
            className="about-what-we-do-grid"
          >
            <div className="reveal" style={{ borderRight: '1px solid var(--line)', borderBottom: '1px solid var(--line)', padding: '32px 24px', backgroundColor: 'var(--ivory)' }}>
              <span className="label-caps" style={{ color: 'var(--olive)', display: 'block', marginBottom: '8px' }}>
                01 · Sourcing
              </span>
              <h3 style={{ fontSize: '22px', marginBottom: '12px' }}>Source</h3>
              <p style={{ fontSize: '15px', lineHeight: '24px', color: 'var(--charcoal)', margin: 0 }}>
                We procure directly from certified farm clusters, agricultural APMC consolidation hubs, and modern sortex grain mills across Maharashtra, Gujarat and northern agricultural belts. Produce is selected based on maturity, dry matter, and freedom from blemishes. <ConfirmTag label="CONFIRM" />
              </p>
            </div>

            <div className="reveal reveal-delay-1" style={{ borderRight: '1px solid var(--line)', borderBottom: '1px solid var(--line)', padding: '32px 24px', backgroundColor: 'var(--ivory)' }}>
              <span className="label-caps" style={{ color: 'var(--olive)', display: 'block', marginBottom: '8px' }}>
                02 · Conditioning
              </span>
              <h3 style={{ fontSize: '22px', marginBottom: '12px' }}>Pack</h3>
              <p style={{ fontSize: '15px', lineHeight: '24px', color: 'var(--charcoal)', margin: 0 }}>
                Sorting, mechanical calibration and forced-air pre-cooling take place in temperature-controlled packhouses. Cargo is packed into export-grade corrugated telescopic boxes, leno mesh bags or multiwall laminated sacks with lot-traceable barcodes. <ConfirmTag label="CONFIRM" />
              </p>
            </div>

            <div className="reveal reveal-delay-2" style={{ borderRight: '1px solid var(--line)', borderBottom: '1px solid var(--line)', padding: '32px 24px', backgroundColor: 'var(--ivory)' }}>
              <span className="label-caps" style={{ color: 'var(--olive)', display: 'block', marginBottom: '8px' }}>
                03 · Logistics
              </span>
              <h3 style={{ fontSize: '22px', marginBottom: '12px' }}>Ship</h3>
              <p style={{ fontSize: '15px', lineHeight: '24px', color: 'var(--charcoal)', margin: 0 }}>
                Containers are stuffed under strict supervision at JNPT / Nhava Sheva cold staging yards. Phytosanitary inspection, customs clearance, and temperature logger placement are finalized before container doors are bolted and sealed. <ConfirmTag label="CONFIRM" />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work (4 Commitments in 2x2 grid with 1px lines) */}
      <section className="section-padding hairline-b" style={{ backgroundColor: 'var(--ivory)' }}>
        <div className="container">
          <div style={{ maxWidth: '640px', marginBottom: '48px' }} className="reveal">
            <span className="label-caps" style={{ display: 'block', marginBottom: '8px' }}>
              Operational Standard
            </span>
            <h2>How we work</h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              borderTop: '1px solid var(--line)',
              borderLeft: '1px solid var(--line)',
            }}
            className="about-commitments-grid"
          >
            <div className="reveal" style={{ borderRight: '1px solid var(--line)', borderBottom: '1px solid var(--line)', padding: '32px 28px' }}>
              <h3 style={{ fontSize: '20px', lineHeight: '26px', marginBottom: '10px' }}>
                One point of contact from enquiry to arrival.
              </h3>
              <p style={{ fontSize: '15px', lineHeight: '24px', color: 'var(--muted)', margin: 0 }}>
                You speak directly with an authorized export manager who knows your contract parameters, loading schedule, and vessel coordinates. No call centers, no departmental handoffs.
              </p>
            </div>

            <div className="reveal reveal-delay-1" style={{ borderRight: '1px solid var(--line)', borderBottom: '1px solid var(--line)', padding: '32px 28px' }}>
              <h3 style={{ fontSize: '20px', lineHeight: '26px', marginBottom: '10px' }}>
                Specifications agreed in writing before loading.
              </h3>
              <p style={{ fontSize: '15px', lineHeight: '24px', color: 'var(--muted)', margin: 0 }}>
                Sizing calibres, tolerance percentages, carton tare weights, and reefer holding temperatures are formally signed off in proforma specifications prior to packhouse harvesting.
              </p>
            </div>

            <div className="reveal" style={{ borderRight: '1px solid var(--line)', borderBottom: '1px solid var(--line)', padding: '32px 28px' }}>
              <h3 style={{ fontSize: '20px', lineHeight: '26px', marginBottom: '10px' }}>
                Documents checked before the container leaves.
              </h3>
              <p style={{ fontSize: '15px', lineHeight: '24px', color: 'var(--muted)', margin: 0 }}>
                Draft Bill of Lading, Phytosanitary certificate, invoice HS codes and Certificate of Origin are audited against importer LC terms prior to vessel departure to avoid customs delays.
              </p>
            </div>

            <div className="reveal reveal-delay-1" style={{ borderRight: '1px solid var(--line)', borderBottom: '1px solid var(--line)', padding: '32px 28px' }}>
              <h3 style={{ fontSize: '20px', lineHeight: '26px', marginBottom: '10px' }}>
                Honest updates, including delays.
              </h3>
              <p style={{ fontSize: '15px', lineHeight: '24px', color: 'var(--muted)', margin: 0 }}>
                If monsoon weather, terminal congestion or shipping line blank sailings impact schedules, we communicate verified facts immediately alongside mitigation plans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Operations Photo Strip (3 3:2 photos with Real Imagery) */}
      <section className="section-padding hairline-b" style={{ backgroundColor: 'var(--bone)' }}>
        <div className="container">
          <div style={{ maxWidth: '640px', marginBottom: '40px' }} className="reveal">
            <span className="label-caps" style={{ display: 'block', marginBottom: '8px' }}>
              Documentary Proof
            </span>
            <h2>On-site operations</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            <div className="reveal">
              <PhotoPlaceholder
                label="Produce grading table: manual inspection and sizing check at packhouse"
                subtext="Documentary photograph · Natural daylight · 3:2"
                aspectRatio="3:2"
                src={IMAGES.packhouseInspection}
              />
            </div>
            <div className="reveal reveal-delay-1">
              <PhotoPlaceholder
                label="Pre-trip inspection and reefer container staging at JNPT port terminal"
                subtext="Documentary photograph · Clean logistics yard · 3:2"
                aspectRatio="3:2"
                src={IMAGES.portContainers}
              />
            </div>
            <div className="reveal reveal-delay-2">
              <PhotoPlaceholder
                label="Container stuffing: export cargo secured with corner boards"
                subtext="Documentary photograph · Port terminal dock · 3:2"
                aspectRatio="3:2"
                src={IMAGES.containerLoading}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding hairline-b" style={{ backgroundColor: 'var(--ivory)' }}>
        <div className="container">
          <div style={{ maxWidth: '640px', marginBottom: '40px' }} className="reveal">
            <span className="label-caps" style={{ display: 'block', marginBottom: '8px' }}>
              Management
            </span>
            <h2>The team</h2>
            <p style={{ color: 'var(--muted)', fontSize: '15px' }}>
              Partners and operations directors responsible for export fulfillment.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            <div className="reveal" style={{ border: '1px solid var(--line)', padding: '24px', backgroundColor: 'var(--bone)' }}>
              <div style={{ marginBottom: '16px' }}>
                <PhotoPlaceholder
                  label="Portrait: Designated Partner & Commercial Director"
                  subtext="Documentary portrait · Neutral background · 4:5"
                  aspectRatio="4:5"
                />
              </div>
              <h3 style={{ fontSize: '18px', marginBottom: '4px' }}>[CONFIRM: Partner Name]</h3>
              <span className="label-caps" style={{ color: 'var(--olive)', display: 'block', marginBottom: '8px' }}>
                Managing Partner · Commercial Desk
              </span>
              <p style={{ fontSize: '13px', color: 'var(--charcoal)', margin: 0 }}>
                Oversees overseas importer relationships, contract negotiation and banking instruments. <ConfirmTag label="CONFIRM" />
              </p>
            </div>

            <div className="reveal reveal-delay-1" style={{ border: '1px solid var(--line)', padding: '24px', backgroundColor: 'var(--bone)' }}>
              <div style={{ marginBottom: '16px' }}>
                <PhotoPlaceholder
                  label="Portrait: Operations & Packhouse Quality Head"
                  subtext="Documentary portrait · Neutral background · 4:5"
                  aspectRatio="4:5"
                />
              </div>
              <h3 style={{ fontSize: '18px', marginBottom: '4px' }}>[CONFIRM: Partner Name]</h3>
              <span className="label-caps" style={{ color: 'var(--olive)', display: 'block', marginBottom: '8px' }}>
                Operations & Quality Director
              </span>
              <p style={{ fontSize: '13px', color: 'var(--charcoal)', margin: 0 }}>
                Manages agricultural procurement, sorting calibration, pre-cooling and JNPT port stuffing. <ConfirmTag label="CONFIRM" />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Details (2-Column Table with hairline rows) */}
      <section className="section-padding hairline-b" style={{ backgroundColor: 'var(--bone)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '7fr 5fr', gap: '48px', alignItems: 'start' }} className="about-details-grid">
            <div className="reveal">
              <span className="label-caps" style={{ display: 'block', marginBottom: '8px' }}>
                Entity Transparency
              </span>
              <h2 style={{ marginBottom: '24px' }}>Company details</h2>

              <div style={{ border: '1px solid var(--line)', backgroundColor: '#FFFFFF', borderRadius: 'var(--radius)', overflowX: 'auto' }}>
                <table className="spec-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <tbody>
                    <tr>
                      <td style={{ paddingLeft: '20px', width: '35%', fontWeight: 500, color: 'var(--muted)' }}>Legal Entity</td>
                      <td style={{ color: 'var(--ink)', fontWeight: 600 }}>Vasudha Freshline Exports LLP</td>
                    </tr>
                    <tr>
                      <td style={{ paddingLeft: '20px', fontWeight: 500, color: 'var(--muted)' }}>Constitution</td>
                      <td>Limited Liability Partnership (Republic of India)</td>
                    </tr>
                    <tr>
                      <td style={{ paddingLeft: '20px', fontWeight: 500, color: 'var(--muted)' }}>LLPIN</td>
                      <td><ConfirmTag label="CONFIRM: LLPIN" /></td>
                    </tr>
                    <tr>
                      <td style={{ paddingLeft: '20px', fontWeight: 500, color: 'var(--muted)' }}>IEC (Import Export Code)</td>
                      <td><ConfirmTag label="CONFIRM: IEC number" /></td>
                    </tr>
                    <tr>
                      <td style={{ paddingLeft: '20px', fontWeight: 500, color: 'var(--muted)' }}>GST Identification</td>
                      <td><ConfirmTag label="CONFIRM: GSTIN" /></td>
                    </tr>
                    <tr>
                      <td style={{ paddingLeft: '20px', fontWeight: 500, color: 'var(--muted)' }}>APEDA RCMC</td>
                      <td><ConfirmTag label="CONFIRM: APEDA RCMC registration number" /></td>
                    </tr>
                    <tr>
                      <td style={{ paddingLeft: '20px', fontWeight: 500, color: 'var(--muted)' }}>FSSAI Central License</td>
                      <td><ConfirmTag label="CONFIRM: FSSAI license number" /></td>
                    </tr>
                    <tr>
                      <td style={{ paddingLeft: '20px', fontWeight: 500, color: 'var(--muted)' }}>Registered Office</td>
                      <td><ConfirmTag label="CONFIRM: registered address in Maharashtra, India" /></td>
                    </tr>
                    <tr>
                      <td style={{ paddingLeft: '20px', fontWeight: 500, color: 'var(--muted)' }}>Commercial Desk Telephone</td>
                      <td><ConfirmTag label="CONFIRM: phone" /></td>
                    </tr>
                    <tr>
                      <td style={{ paddingLeft: '20px', fontWeight: 500, color: 'var(--muted)' }}>Official Email</td>
                      <td><ConfirmTag label="CONFIRM: email" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="reveal reveal-delay-1" style={{ backgroundColor: 'var(--ivory)', border: '1px solid var(--line)', padding: '32px', borderRadius: 'var(--radius)' }}>
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>
                Need statutory proof for due diligence?
              </h3>
              <p style={{ fontSize: '15px', lineHeight: '24px', color: 'var(--charcoal)', marginBottom: '24px' }}>
                Commercial banks, trade credit insurers and international compliance teams frequently request certified copies of our GST, IEC, LLP deed, and APEDA certificates. We transmit scanned copies within 12 business hours.
              </p>
              <button
                type="button"
                onClick={() => onOpenRfq('Corporate Due Diligence Request')}
                className="btn-secondary"
                style={{ width: '100%' }}
              >
                Ask us for official documentation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="dark-section" style={{ backgroundColor: 'var(--navy)', color: 'var(--ivory)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '24px' }} className="reveal">
            <div style={{ maxWidth: '600px' }}>
              <h2 style={{ color: 'var(--ivory)', marginBottom: '12px' }}>
                Ready to review a container quotation?
              </h2>
              <p style={{ color: 'var(--bone)', fontSize: '16px', margin: 0 }}>
                Direct communication with the team responsible for container stuffing and quality execution.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '16px' }}>
              <button
                type="button"
                onClick={() => onOpenRfq()}
                style={{
                  height: '52px',
                  padding: '0 28px',
                  backgroundColor: 'var(--ivory)',
                  color: 'var(--navy)',
                  borderRadius: 'var(--radius)',
                  fontWeight: 500,
                  fontSize: '15px',
                  border: '1px solid var(--ivory)',
                  cursor: 'pointer',
                }}
              >
                Request a quote
              </button>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .about-what-we-do-grid, .about-commitments-grid {
            grid-template-columns: 1fr !important;
          }
          .about-details-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
};
