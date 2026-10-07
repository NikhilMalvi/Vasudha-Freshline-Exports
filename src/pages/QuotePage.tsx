import React, { useState } from 'react';
import { Button } from '../components/Button';
import { ConfirmTag } from '../components/ConfirmTag';
import { MessageSquare, ChevronDown, ChevronUp, Upload, Check } from 'lucide-react';

interface QuotePageProps {
  initialProduct?: string;
  onNavigate: (path: string) => void;
}

export const QuotePage: React.FC<QuotePageProps> = ({ initialProduct = '', onNavigate }) => {
  const [selectedProducts, setSelectedProducts] = useState<string[]>(
    initialProduct ? [initialProduct] : ['Pomegranates (Bhagwa)']
  );
  const [quantity, setQuantity] = useState<string>('1');
  const [unit, setUnit] = useState<'containers' | 'tonnes'>('containers');
  const [country, setCountry] = useState<string>('');
  const [companyName, setCompanyName] = useState<string>('');
  const [yourName, setYourName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [countryCode, setCountryCode] = useState<string>('+971');
  const [whatsapp, setWhatsapp] = useState<string>('');
  const [consent, setConsent] = useState<boolean>(true);

  // Optional expandable fields
  const [showMoreDetails, setShowMoreDetails] = useState<boolean>(false);
  const [deliveryMonth, setDeliveryMonth] = useState<string>('');
  const [destinationPort, setDestinationPort] = useState<string>('');
  const [tradeTerm, setTradeTerm] = useState<string>('CIF');
  const [packingPreference, setPackingPreference] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [fileName, setFileName] = useState<string>('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  React.useEffect(() => {
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
  }, [submittedRef]);

  const productOptions = [
    'Pomegranates (Bhagwa)',
    'Fresh Red Onions',
    'Fresh White Onions',
    'Basmati Rice',
    'Non-Basmati Rice',
    'Export Spices',
    'Fresh Seasonal Fruits',
    'Fresh Vegetables',
    'Other Agri Commodity',
  ];

  const toggleProduct = (prod: string) => {
    if (selectedProducts.includes(prod)) {
      if (selectedProducts.length > 1) {
        setSelectedProducts(selectedProducts.filter((p) => p !== prod));
      }
    } else {
      setSelectedProducts([...selectedProducts, prod]);
    }
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (selectedProducts.length === 0) errs.products = 'Please select at least one commodity.';
    if (!quantity || isNaN(Number(quantity)) || Number(quantity) <= 0) errs.quantity = 'Please enter a valid quantity.';
    if (!country.trim()) errs.country = 'Destination country is required.';
    if (!companyName.trim()) errs.companyName = 'Company name is required.';
    if (!yourName.trim()) errs.yourName = 'Your name is required.';
    if (!email.trim() || !email.includes('@')) errs.email = 'Valid commercial email required.';
    if (!consent) errs.consent = 'Consent is required to process enquiry.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        const refNumber = `VF-${Math.floor(1000 + Math.random() * 9000)}`;
        setSubmittedRef(refNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 400);
    }
  };

  return (
    <main style={{ backgroundColor: 'var(--ivory)', paddingTop: '64px', paddingBottom: '96px' }}>
      <div className="container">
        {submittedRef ? (
          /* SUCCESS STATE */
          <div
            className="animate-fade-in"
            style={{
              maxWidth: '680px',
              margin: '40px auto',
              backgroundColor: 'var(--bone)',
              border: '1px solid var(--line)',
              borderRadius: 'var(--radius)',
              padding: '48px 40px',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                width: '64px',
                height: '64px',
                margin: '0 auto 20px',
                borderRadius: '50%',
                border: '1px solid var(--olive)',
                backgroundColor: 'var(--ivory)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--olive)',
              }}
            >
              <Check size={32} strokeWidth={1.5} />
            </div>

            <span className="label-caps" style={{ color: 'var(--olive)', display: 'block', marginBottom: '8px' }}>
              Reference Number: {submittedRef}
            </span>

            <h1 style={{ fontSize: '36px', lineHeight: '44px', marginBottom: '16px' }}>
              Thank you. Your request is with our team.
            </h1>

            <p style={{ fontSize: '16px', lineHeight: '26px', color: 'var(--charcoal)', maxWidth: '520px', margin: '0 auto 28px' }}>
              We have received your commercial enquiry for {selectedProducts.join(', ')} ({quantity} {unit}) to {country}. Our trade desk will review current JNPT vessel schedules and reply to <strong>{email}</strong> within 24 hours. <ConfirmTag label="CONFIRM: within 24 hours" />
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
              <Button variant="secondary" onClick={() => onNavigate('/products')}>
                Back to products
              </Button>
              <a
                href={`https://wa.me/?text=Hello%20Vasudha%20Freshline,%20following%20up%20on%20quote%20request%20${submittedRef}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ textDecoration: 'none' }}
              >
                <MessageSquare size={16} strokeWidth={1.5} color="var(--ivory)" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        ) : (
          /* FORM & CONTACT PANEL (Two Columns: 7 cols form, 4 cols contact panel) */
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gap: '48px',
              alignItems: 'start',
            }}
          >
            {/* LEFT 7 COLUMNS: THE FORM */}
            <div style={{ gridColumn: 'span 7' }} className="quote-form-col reveal">
              <span className="label-caps" style={{ display: 'block', marginBottom: '12px' }}>
                Request a Quote
              </span>

              <h1 style={{ marginBottom: '16px' }}>Tell us what you need.</h1>

              <p style={{ fontSize: '17px', lineHeight: '26px', color: 'var(--muted)', marginBottom: '36px' }}>
                We reply with specification and indicative pricing within 24 hours. <ConfirmTag label="CONFIRM: within 24 hours" />
              </p>

              <form onSubmit={handleSubmit} noValidate>
                {/* 1. Products (Multi-select chips) */}
                <div className="form-group" style={{ marginBottom: '28px' }}>
                  <label className="form-label" style={{ marginBottom: '10px' }}>
                    1. Select Commodity / Commodities (Multi-select)
                  </label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {productOptions.map((prod) => {
                      const isSelected = selectedProducts.includes(prod);
                      return (
                        <button
                          key={prod}
                          type="button"
                          onClick={() => toggleProduct(prod)}
                          style={{
                            height: '32px',
                            padding: '0 14px',
                            border: isSelected ? '1px solid var(--navy)' : '1px solid var(--line)',
                            backgroundColor: isSelected ? 'var(--navy)' : '#FFFFFF',
                            color: isSelected ? 'var(--ivory)' : 'var(--charcoal)',
                            borderRadius: 'var(--radius)',
                            fontFamily: 'var(--font-sans)',
                            fontSize: '13px',
                            fontWeight: isSelected ? 500 : 400,
                            cursor: 'pointer',
                            transition: 'all 150ms ease',
                          }}
                        >
                          {isSelected && '✓ '}
                          {prod}
                        </button>
                      );
                    })}
                  </div>
                  {errors.products && <span className="form-error">{errors.products}</span>}
                </div>

                {/* 2. Quantity & Unit Selector */}
                <div className="form-group">
                  <label className="form-label" htmlFor="quote-quantity">
                    2. Quantity
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '12px' }}>
                    <input
                      id="quote-quantity"
                      type="number"
                      min="1"
                      placeholder="e.g. 1, 2, 5, 10"
                      className={`form-input ${errors.quantity ? 'has-error' : ''}`}
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                    <select
                      className="form-select"
                      value={unit}
                      onChange={(e) => setUnit(e.target.value as 'containers' | 'tonnes')}
                      aria-label="Unit of measurement"
                    >
                      <option value="containers">Containers (FCL)</option>
                      <option value="tonnes">Metric Tonnes (MT)</option>
                    </select>
                  </div>
                  {errors.quantity && <span className="form-error">{errors.quantity}</span>}
                </div>

                {/* 3. Destination Country */}
                <div className="form-group">
                  <label className="form-label" htmlFor="quote-country">
                    3. Destination Country
                  </label>
                  <input
                    id="quote-country"
                    type="text"
                    placeholder="e.g. United Arab Emirates, Saudi Arabia, Netherlands, Malaysia"
                    className={`form-input ${errors.country ? 'has-error' : ''}`}
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                  {errors.country && <span className="form-error">{errors.country}</span>}
                </div>

                {/* 4 & 5. Company Name & Authorized Name */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="quote-company">
                      4. Company Name
                    </label>
                    <input
                      id="quote-company"
                      type="text"
                      placeholder="Importer or wholesale enterprise"
                      className={`form-input ${errors.companyName ? 'has-error' : ''}`}
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                    />
                    {errors.companyName && <span className="form-error">{errors.companyName}</span>}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="quote-name">
                      5. Your Name
                    </label>
                    <input
                      id="quote-name"
                      type="text"
                      placeholder="Contact person & role"
                      className={`form-input ${errors.yourName ? 'has-error' : ''}`}
                      value={yourName}
                      onChange={(e) => setYourName(e.target.value)}
                    />
                    {errors.yourName && <span className="form-error">{errors.yourName}</span>}
                  </div>
                </div>

                {/* 6 & 7. Corporate Email & WhatsApp */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="quote-email">
                      6. Commercial Email
                    </label>
                    <input
                      id="quote-email"
                      type="email"
                      placeholder="buyer@company.com"
                      className={`form-input ${errors.email ? 'has-error' : ''}`}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <span className="form-error">{errors.email}</span>}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="quote-phone">
                      7. WhatsApp Number (Optional)
                    </label>
                    <div style={{ display: 'grid', gridTemplateColumns: '85px 1fr', gap: '8px' }}>
                      <select
                        className="form-select"
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                        aria-label="Country dialing code"
                        style={{ padding: '0 8px' }}
                      >
                        <option value="+971">+971 (UAE)</option>
                        <option value="+966">+966 (KSA)</option>
                        <option value="+968">+968 (OM)</option>
                        <option value="+974">+974 (QA)</option>
                        <option value="+60">+60 (MY)</option>
                        <option value="+65">+65 (SG)</option>
                        <option value="+44">+44 (UK)</option>
                        <option value="+31">+31 (NL)</option>
                        <option value="+91">+91 (IN)</option>
                      </select>
                      <input
                        id="quote-phone"
                        type="tel"
                        placeholder="Mobile / WhatsApp"
                        className="form-input"
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                {/* Accordion: "Add more details" (Optional fields) */}
                <div style={{ borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', padding: '16px 0', margin: '24px 0' }}>
                  <button
                    type="button"
                    onClick={() => setShowMoreDetails(!showMoreDetails)}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: 'var(--olive)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '14px',
                      fontWeight: 500,
                      cursor: 'pointer',
                      textDecoration: 'underline',
                      textUnderlineOffset: '3px',
                    }}
                  >
                    <span>{showMoreDetails ? 'Hide additional specification details' : 'Add more details (port, incoterm, delivery month)'}</span>
                    {showMoreDetails ? <ChevronUp size={16} strokeWidth={1.5} /> : <ChevronDown size={16} strokeWidth={1.5} />}
                  </button>

                  {showMoreDetails && (
                    <div className="animate-fade-in" style={{ paddingTop: '20px' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
                        <div className="form-group">
                          <label className="form-label" htmlFor="opt-port">
                            Destination Port
                          </label>
                          <input
                            id="opt-port"
                            type="text"
                            placeholder="e.g. Jebel Ali / Rotterdam"
                            className="form-input"
                            value={destinationPort}
                            onChange={(e) => setDestinationPort(e.target.value)}
                          />
                        </div>

                        <div className="form-group">
                          <label className="form-label" htmlFor="opt-month">
                            Target Delivery Month
                          </label>
                          <input
                            id="opt-month"
                            type="text"
                            placeholder="e.g. November 2026"
                            className="form-input"
                            value={deliveryMonth}
                            onChange={(e) => setDeliveryMonth(e.target.value)}
                          />
                        </div>

                        <div className="form-group">
                          <label className="form-label" htmlFor="opt-term">
                            Preferred Trade Term
                          </label>
                          <select
                            id="opt-term"
                            className="form-select"
                            value={tradeTerm}
                            onChange={(e) => setTradeTerm(e.target.value)}
                          >
                            <option value="CIF">CIF (Port of Discharge)</option>
                            <option value="FOB">FOB (JNPT / Nhava Sheva)</option>
                            <option value="CFR">CFR</option>
                            <option value="Not sure">Not sure / Advise best</option>
                          </select>
                        </div>
                      </div>

                      <div className="form-group">
                        <label className="form-label" htmlFor="opt-pack">
                          Packaging & Branding Preference
                        </label>
                        <input
                          id="opt-pack"
                          type="text"
                          placeholder="e.g. 3.5kg cartons / 25kg mesh bags / Private label printed bags"
                          className="form-input"
                          value={packingPreference}
                          onChange={(e) => setPackingPreference(e.target.value)}
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label" htmlFor="opt-msg">
                          Specific Quality / Tolerance Notes
                        </label>
                        <textarea
                          id="opt-msg"
                          className="form-textarea"
                          placeholder="State required fruit counts, sizing calibres, residue certificates or target arrival schedule."
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          style={{ minHeight: '80px' }}
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label">
                          Attach Specification or PO Document (PDF up to 10MB)
                        </label>
                        <div
                          style={{
                            border: '1px dashed var(--line)',
                            padding: '16px',
                            backgroundColor: '#FFFFFF',
                            borderRadius: 'var(--radius)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--muted)' }}>
                            <Upload size={16} strokeWidth={1.5} />
                            <span>{fileName || 'Upload buyer tender sheet or specification PDF'}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => setFileName('buyer_tender_specification_sheet.pdf')}
                            style={{
                              border: '1px solid var(--line)',
                              backgroundColor: 'var(--bone)',
                              padding: '6px 12px',
                              borderRadius: 'var(--radius)',
                              fontSize: '12px',
                              cursor: 'pointer',
                            }}
                          >
                            Browse file
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Consent Checkbox */}
                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', cursor: 'pointer', fontSize: '14px', lineHeight: '20px', color: 'var(--charcoal)' }}>
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      style={{ marginTop: '3px' }}
                    />
                    <span>
                      I agree to be contacted about this commercial export enquiry. See our{' '}
                      <button
                        type="button"
                        onClick={() => onNavigate('/privacy')}
                        style={{ background: 'none', border: 'none', color: 'var(--olive)', textDecoration: 'underline', padding: 0, font: 'inherit', cursor: 'pointer' }}
                      >
                        Privacy Policy
                      </button>.
                    </span>
                  </label>
                  {errors.consent && <span className="form-error" style={{ display: 'block' }}>{errors.consent}</span>}
                </div>

                {/* Submit Button */}
                <Button
                  variant="primary"
                  type="submit"
                  disabled={isSubmitting}
                  style={{ width: '100%', height: '52px' }}
                >
                  {isSubmitting ? 'Registering enquiry...' : 'Send request'}
                </Button>
              </form>
            </div>

            {/* RIGHT 4 COLUMNS: CONTACT PANEL (Bone Background, 1px Line) */}
            <div
              style={{
                gridColumn: 'span 4',
                gridColumnStart: 9,
                backgroundColor: 'var(--bone)',
                border: '1px solid var(--line)',
                borderRadius: 'var(--radius)',
                padding: '36px 28px',
              }}
              className="quote-contact-col reveal reveal-delay-1"
            >
              <h3 style={{ fontSize: '22px', marginBottom: '16px' }}>Prefer to talk?</h3>
              <p style={{ fontSize: '14px', lineHeight: '22px', color: 'var(--charcoal)', marginBottom: '20px' }}>
                For active container bookings and urgent market pricing, contact our commercial trade desk on WhatsApp.
              </p>

              <a
                href="https://wa.me/?text=Hello%20Vasudha%20Freshline%20Exports%20LLP,%20I%20am%20inquiring%20about%20container%20exports."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ width: '100%', textDecoration: 'none', marginBottom: '32px' }}
              >
                <MessageSquare size={16} strokeWidth={1.5} color="var(--ivory)" />
                <span>Chat on WhatsApp <ConfirmTag label="CONFIRM: number" /></span>
              </a>

              {/* Rows with 1px hairline dividers */}
              <div style={{ borderTop: '1px solid var(--line)', marginBottom: '32px' }}>
                <div style={{ padding: '14px 0', borderBottom: '1px solid var(--line)', fontSize: '14px' }}>
                  <span className="label-caps" style={{ display: 'block', marginBottom: '4px' }}>Telephone</span>
                  <span style={{ color: 'var(--ink)' }}><ConfirmTag label="CONFIRM: phone" /></span>
                </div>
                <div style={{ padding: '14px 0', borderBottom: '1px solid var(--line)', fontSize: '14px' }}>
                  <span className="label-caps" style={{ display: 'block', marginBottom: '4px' }}>Sales Email</span>
                  <span style={{ color: 'var(--ink)' }}><ConfirmTag label="CONFIRM: email" /></span>
                </div>
                <div style={{ padding: '14px 0', borderBottom: '1px solid var(--line)', fontSize: '14px' }}>
                  <span className="label-caps" style={{ display: 'block', marginBottom: '4px' }}>Commercial Office</span>
                  <span style={{ color: 'var(--ink)' }}><ConfirmTag label="CONFIRM: address" /></span>
                </div>
                <div style={{ padding: '14px 0', borderBottom: '1px solid var(--line)', fontSize: '14px' }}>
                  <span className="label-caps" style={{ display: 'block', marginBottom: '4px' }}>Desk Hours</span>
                  <span style={{ color: 'var(--ink)' }}><ConfirmTag label="CONFIRM: in IST" /></span>
                </div>
              </div>

              {/* What Happens Next */}
              <div>
                <h4 style={{ fontSize: '16px', fontFamily: 'var(--font-sans)', fontWeight: 600, color: 'var(--ink)', marginBottom: '16px' }}>
                  What happens next
                </h4>
                <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px', lineHeight: '20px', color: 'var(--charcoal)' }}>
                  <li style={{ display: 'flex', gap: '10px' }}>
                    <span style={{ fontWeight: 600, color: 'var(--olive)' }}>1.</span>
                    <span>We review your product calibre and container volume requirements.</span>
                  </li>
                  <li style={{ display: 'flex', gap: '10px' }}>
                    <span style={{ fontWeight: 600, color: 'var(--olive)' }}>2.</span>
                    <span>We send the proforma specification and indicative landed price.</span>
                  </li>
                  <li style={{ display: 'flex', gap: '10px' }}>
                    <span style={{ fontWeight: 600, color: 'var(--olive)' }}>3.</span>
                    <span>We agree samples, trade terms, and JNPT port loading dates.</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .quote-form-col, .quote-contact-col {
            grid-column: span 12 !important;
            grid-column-start: 1 !important;
          }
        }
      `}</style>
    </main>
  );
};
