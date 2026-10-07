import React, { useState } from 'react';
import { Button } from '../components/Button';
import { MessageSquare, Upload, Check, Phone, Mail, MapPin, ShieldCheck, UserCheck } from 'lucide-react';

interface QuotePageProps {
  initialProduct?: string;
  onNavigate: (path: string) => void;
}

export const QuotePage: React.FC<QuotePageProps> = ({ initialProduct = '', onNavigate }) => {
  const [selectedProducts, setSelectedProducts] = useState<string[]>(
    initialProduct ? [initialProduct] : ['Pomegranates (Bhagwa)']
  );
  const [quantity, setQuantity] = useState<string>('1');
  const [containerType, setContainerType] = useState<string>('40ft-reefer');
  const [destinationPort, setDestinationPort] = useState<string>('Jebel Ali, UAE');
  const [country, setCountry] = useState<string>('United Arab Emirates');
  const [tradeTerm, setTradeTerm] = useState<string>('CIF');
  const [companyName, setCompanyName] = useState<string>('');
  const [yourName, setYourName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [countryCode, setCountryCode] = useState<string>('+971');
  const [whatsapp, setWhatsapp] = useState<string>('');
  const [packingPreference, setPackingPreference] = useState<string>('Standard Export Cartons');
  const [targetMonth, setTargetMonth] = useState<string>('Next Available Sailing');
  const [message, setMessage] = useState<string>('');
  const [fileName, setFileName] = useState<string>('');
  const [consent, setConsent] = useState<boolean>(true);

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
    { name: 'Pomegranates (Bhagwa)', season: 'Peak Season' },
    { name: 'Fresh Red Onions (Nashik)', season: 'Active' },
    { name: 'Fresh White Onions', season: 'Available' },
    { name: '1121 Basmati Rice', season: 'Year-Round' },
    { name: 'Non-Basmati Milled Rice', season: 'Year-Round' },
    { name: 'Whole Spices (Cumin / Turmeric)', season: 'Year-Round' },
    { name: 'Table Grapes (Thompson)', season: 'Harvest Prep' },
    { name: 'Fresh Field Vegetables (Chilli / Okra)', season: 'Continuous' },
  ];

  const popularPorts = [
    { port: 'Jebel Ali, UAE', country: 'United Arab Emirates' },
    { port: 'Dammam, Saudi Arabia', country: 'Saudi Arabia' },
    { port: 'Port Klang, Malaysia', country: 'Malaysia' },
    { port: 'Colombo, Sri Lanka', country: 'Sri Lanka' },
    { port: 'Singapore (PSA)', country: 'Singapore' },
    { port: 'Rotterdam, Netherlands', country: 'Netherlands' },
    { port: 'Felixstowe, UK', country: 'United Kingdom' },
  ];

  const toggleProduct = (prodName: string) => {
    if (selectedProducts.includes(prodName)) {
      if (selectedProducts.length > 1) {
        setSelectedProducts(selectedProducts.filter((p) => p !== prodName));
      }
    } else {
      setSelectedProducts([...selectedProducts, prodName]);
    }
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (selectedProducts.length === 0) errs.products = 'Please select at least one commodity.';
    if (!quantity || isNaN(Number(quantity)) || Number(quantity) <= 0) errs.quantity = 'Please enter a valid container count.';
    if (!destinationPort.trim()) errs.port = 'Destination port is required.';
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
      }, 500);
    }
  };

  // WhatsApp quick link
  const generateWhatsAppLink = () => {
    const msg = encodeURIComponent(
      `Hello Vasudha Freshline Exports trade desk,\nI am inquiring from ${companyName || 'our company'} regarding container availability:\n- Commodities: ${selectedProducts.join(', ')}\n- Quantity: ${quantity} x ${containerType}\n- Destination: ${destinationPort} (${country})\n- IncoTerm: ${tradeTerm}\nPlease advise indicative FOB JNPT / CIF pricing.`
    );
    return `https://wa.me/919823045812?text=${msg}`;
  };

  return (
    <main style={{ backgroundColor: 'var(--ivory)', paddingTop: '56px', paddingBottom: '96px' }}>
      <div className="container">
        {/* Editorial Subheader Banner */}
        <div style={{ marginBottom: '40px', borderBottom: '1px solid var(--line)', paddingBottom: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--olive)',
                }}
                className="status-pulse-dot"
              />
              <span className="label-caps" style={{ color: 'var(--olive)', fontWeight: 600 }}>
                Trade Desk Active · IST 09:00 – 19:00 (GMT+5:30)
              </span>
              <span style={{ color: 'var(--line)' }}>•</span>
              <span style={{ fontSize: '13px', color: 'var(--muted)' }}>
                JNPT Nhava Sheva & Nashik Packhouse Dispatch
              </span>
            </div>

            <div style={{ fontSize: '13px', color: 'var(--muted)' }}>
              Response Target: <strong>Within 24 business hours</strong>
            </div>
          </div>
        </div>

        {submittedRef ? (
          /* SUCCESS STATE */
          <div
            className="animate-fade-in"
            style={{
              maxWidth: '720px',
              margin: '32px auto',
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

            <span className="label-caps" style={{ color: 'var(--olive)', display: 'block', marginBottom: '8px', fontWeight: 600 }}>
              Official Indent Reference: {submittedRef}
            </span>

            <h1 style={{ fontSize: '36px', lineHeight: '44px', marginBottom: '16px' }}>
              Your commercial inquiry has been registered.
            </h1>

            <p style={{ fontSize: '16px', lineHeight: '26px', color: 'var(--charcoal)', maxWidth: '560px', margin: '0 auto 28px' }}>
              Thank you, <strong>{yourName || 'Buyer'}</strong>. Our trade desk has received your request for <strong>{selectedProducts.join(', ')}</strong> ({quantity} container{Number(quantity) > 1 ? 's' : ''}) destined for <strong>{destinationPort}</strong> under <strong>{tradeTerm}</strong> terms. A formal specification sheet and indicative proforma invoice will be dispatched to <strong>{email}</strong>.
            </p>

            <div
              style={{
                backgroundColor: 'var(--ivory)',
                border: '1px solid var(--line)',
                padding: '20px',
                textAlign: 'left',
                marginBottom: '32px',
                fontSize: '13px',
                lineHeight: '22px',
                color: 'var(--charcoal)',
              }}
            >
              <div style={{ fontWeight: 600, color: 'var(--ink)', marginBottom: '6px' }}>Immediate Action Checklist:</div>
              <div>• Our export manager Sunil Jadhav will verify available harvest lots in Nashik.</div>
              <div>• Vessel sailing schedule from JNPT / Nhava Sheva (INNSA) will be confirmed.</div>
              <div>• For urgent container loading dates, message our trade officer directly on WhatsApp with reference #{submittedRef}.</div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
              <Button variant="secondary" onClick={() => onNavigate('/products')}>
                Back to product catalogue
              </Button>
              <a
                href={`https://wa.me/919823045812?text=Hello%20Vasudha%20Freshline%20Exports,%20following%20up%20on%20quote%20request%20${submittedRef}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ textDecoration: 'none' }}
              >
                <MessageSquare size={16} strokeWidth={1.5} color="var(--ivory)" />
                <span>Chat on WhatsApp Trade Desk</span>
              </a>
            </div>
          </div>
        ) : (
          /* FORM & TRADE DESK TWO-COLUMN LAYOUT */
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gap: '44px',
              alignItems: 'start',
            }}
          >
            {/* LEFT 7 COLUMNS: THE COMPREHENSIVE RFQ TERMINAL */}
            <div style={{ gridColumn: 'span 7' }} className="quote-form-col reveal">
              <span className="label-caps" style={{ display: 'block', marginBottom: '10px', color: 'var(--olive)', fontWeight: 600 }}>
                Request for Quotation (RFQ)
              </span>

              <h1 style={{ fontSize: '42px', lineHeight: '48px', marginBottom: '14px' }}>
                Contractual container pricing.
              </h1>

              <p style={{ fontSize: '16px', lineHeight: '26px', color: 'var(--charcoal)', marginBottom: '32px' }}>
                Complete this formal specification inquiry. Our commercial desk calculates freight from JNPT / Nhava Sheva, lot availability, and proforma figures within 24 hours.
              </p>

              <form onSubmit={handleSubmit} noValidate>
                {/* 1. Commodity Selection */}
                <div className="form-group" style={{ marginBottom: '28px' }}>
                  <label className="form-label" style={{ marginBottom: '10px' }}>
                    1. Select Commodity / Commodities (Multi-Select)
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                    {productOptions.map((prod) => {
                      const isSelected = selectedProducts.includes(prod.name);
                      return (
                        <button
                          key={prod.name}
                          type="button"
                          onClick={() => toggleProduct(prod.name)}
                          style={{
                            padding: '10px 14px',
                            border: isSelected ? '1px solid var(--navy)' : '1px solid var(--line)',
                            backgroundColor: isSelected ? 'var(--navy)' : '#FFFFFF',
                            color: isSelected ? 'var(--ivory)' : 'var(--charcoal)',
                            borderRadius: 'var(--radius)',
                            fontFamily: 'var(--font-sans)',
                            fontSize: '13px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            cursor: 'pointer',
                            transition: 'all 150ms ease',
                            textAlign: 'left',
                          }}
                        >
                          <span style={{ fontWeight: isSelected ? 500 : 400 }}>
                            {isSelected ? '✓ ' : ''}{prod.name}
                          </span>
                          <span
                            style={{
                              fontSize: '10px',
                              textTransform: 'uppercase',
                              letterSpacing: '0.06em',
                              padding: '2px 5px',
                              borderRadius: '2px',
                              backgroundColor: isSelected ? 'rgba(255,255,255,0.2)' : 'var(--bone)',
                              color: isSelected ? 'var(--ivory)' : 'var(--muted)',
                            }}
                          >
                            {prod.season}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                  {errors.products && <span className="form-error">{errors.products}</span>}
                </div>

                {/* 2. Volume & Container Configuration */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '16px', marginBottom: '24px' }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="quote-quantity">
                      2. Quantity (Containers)
                    </label>
                    <input
                      id="quote-quantity"
                      type="number"
                      min="1"
                      max="100"
                      className={`form-input ${errors.quantity ? 'has-error' : ''}`}
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      placeholder="e.g. 1, 2, 5"
                    />
                    {errors.quantity && <span className="form-error">{errors.quantity}</span>}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="container-type">
                      Container Equipment Type
                    </label>
                    <select
                      id="container-type"
                      className="form-select"
                      value={containerType}
                      onChange={(e) => setContainerType(e.target.value)}
                    >
                      <option value="40ft-reefer">40ft High-Cube Reefer (Produce / Fruits / Onions ~18–29 MT)</option>
                      <option value="20ft-dry">20ft Dry GP Container (Rice / Grains / Spices ~25 MT)</option>
                      <option value="40ft-dry">40ft Standard Dry Container (Spices / FMCG ~26 MT)</option>
                      <option value="air-cargo">Express Air Cargo Pallet (ULD / Green Chillies / Okra)</option>
                    </select>
                  </div>
                </div>

                {/* 3. Destination Port & IncoTerm */}
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '16px', marginBottom: '16px' }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="quote-port">
                      3. Destination Discharge Port
                    </label>
                    <input
                      id="quote-port"
                      type="text"
                      className={`form-input ${errors.port ? 'has-error' : ''}`}
                      value={destinationPort}
                      onChange={(e) => setDestinationPort(e.target.value)}
                      placeholder="e.g. Jebel Ali, Dammam, Rotterdam, Port Klang"
                    />
                    {errors.port && <span className="form-error">{errors.port}</span>}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="quote-incoterm">
                      Trade Term
                    </label>
                    <select
                      id="quote-incoterm"
                      className="form-select"
                      value={tradeTerm}
                      onChange={(e) => setTradeTerm(e.target.value)}
                    >
                      <option value="CIF">CIF (Cost, Insurance & Freight)</option>
                      <option value="FOB">FOB (JNPT / Nhava Sheva)</option>
                      <option value="CFR">CFR (Cost & Freight)</option>
                    </select>
                  </div>
                </div>

                {/* Popular Port Quick Selectors */}
                <div style={{ marginBottom: '24px' }}>
                  <span style={{ fontSize: '12px', color: 'var(--muted)', display: 'block', marginBottom: '6px' }}>
                    Quick Select Frequent Discharge Terminals:
                  </span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {popularPorts.map((p) => (
                      <button
                        key={p.port}
                        type="button"
                        onClick={() => {
                          setDestinationPort(p.port);
                          setCountry(p.country);
                        }}
                        style={{
                          fontSize: '11px',
                          padding: '4px 8px',
                          border: destinationPort === p.port ? '1px solid var(--navy)' : '1px solid var(--line)',
                          backgroundColor: destinationPort === p.port ? 'var(--navy)' : 'var(--bone)',
                          color: destinationPort === p.port ? 'var(--ivory)' : 'var(--charcoal)',
                          borderRadius: '2px',
                          cursor: 'pointer',
                        }}
                      >
                        {p.port.split(',')[0]}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 4. Importer Corporate Credentials */}
                <div style={{ borderTop: '1px solid var(--line)', paddingTop: '24px', marginBottom: '24px' }}>
                  <span className="label-caps" style={{ display: 'block', marginBottom: '16px' }}>
                    4. Importer Corporate Credentials
                  </span>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="quote-company">
                        Company Name
                      </label>
                      <input
                        id="quote-company"
                        type="text"
                        placeholder="e.g. Al-Madina Foodstuffs Trading LLC"
                        className={`form-input ${errors.companyName ? 'has-error' : ''}`}
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                      />
                      {errors.companyName && <span className="form-error">{errors.companyName}</span>}
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="quote-name">
                        Authorised Buyer / Officer Name
                      </label>
                      <input
                        id="quote-name"
                        type="text"
                        placeholder="e.g. Tariq Mansoor (Procurement Director)"
                        className={`form-input ${errors.yourName ? 'has-error' : ''}`}
                        value={yourName}
                        onChange={(e) => setYourName(e.target.value)}
                      />
                      {errors.yourName && <span className="form-error">{errors.yourName}</span>}
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="quote-email">
                        Commercial Email (For Proforma Delivery)
                      </label>
                      <input
                        id="quote-email"
                        type="email"
                        placeholder="procurement@company.com"
                        className={`form-input ${errors.email ? 'has-error' : ''}`}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      {errors.email && <span className="form-error">{errors.email}</span>}
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="quote-phone">
                        Direct WhatsApp Mobile Line
                      </label>
                      <div style={{ display: 'grid', gridTemplateColumns: '90px 1fr', gap: '8px' }}>
                        <select
                          className="form-select"
                          value={countryCode}
                          onChange={(e) => setCountryCode(e.target.value)}
                          aria-label="Country dial code"
                          style={{ padding: '0 8px' }}
                        >
                          <option value="+971">+971 UAE</option>
                          <option value="+966">+966 KSA</option>
                          <option value="+968">+968 OM</option>
                          <option value="+974">+974 QA</option>
                          <option value="+60">+60 MY</option>
                          <option value="+65">+65 SG</option>
                          <option value="+44">+44 UK</option>
                          <option value="+31">+31 NL</option>
                          <option value="+91">+91 IN</option>
                        </select>
                        <input
                          id="quote-phone"
                          type="tel"
                          placeholder="50 123 4567"
                          className="form-input"
                          value={whatsapp}
                          onChange={(e) => setWhatsapp(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* 5. Packaging & Timing Specifications */}
                <div style={{ borderTop: '1px solid var(--line)', paddingTop: '24px', marginBottom: '24px' }}>
                  <span className="label-caps" style={{ display: 'block', marginBottom: '16px' }}>
                    5. Specifications & Packaging Preference
                  </span>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="quote-pack">
                        Packaging Format
                      </label>
                      <input
                        id="quote-pack"
                        type="text"
                        placeholder="e.g. 3.5kg / 5kg CFB Cartons, 25kg Leno Bags, 20kg BOPP Sacks"
                        className="form-input"
                        value={packingPreference}
                        onChange={(e) => setPackingPreference(e.target.value)}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="quote-time">
                        Target Loading Window
                      </label>
                      <input
                        id="quote-time"
                        type="text"
                        placeholder="e.g. Immediate / Next 14 Days / November 2026"
                        className="form-input"
                        value={targetMonth}
                        onChange={(e) => setTargetMonth(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="quote-msg">
                      Quality Calibre, Tolerance, or Private Label Requirements
                    </label>
                    <textarea
                      id="quote-msg"
                      className="form-textarea"
                      placeholder="Specify required fruit count calibration, brix sweetness, fumigation specifications, or private artwork details."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      style={{ minHeight: '88px' }}
                    />
                  </div>

                  {/* Attachment Box */}
                  <div className="form-group">
                    <label className="form-label">
                      Attach Tender Sheet, Purchase Indent, or Spec PDF (Optional)
                    </label>
                    <div
                      style={{
                        border: '1px dashed var(--line)',
                        padding: '16px 20px',
                        backgroundColor: '#FFFFFF',
                        borderRadius: 'var(--radius)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--muted)' }}>
                        <Upload size={16} strokeWidth={1.5} color="var(--olive)" />
                        <span>{fileName || 'Upload buyer specification sheet or PO (PDF/DOCX up to 10MB)'}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setFileName('procurement_indent_specification.pdf')}
                        style={{
                          border: '1px solid var(--line)',
                          backgroundColor: 'var(--bone)',
                          padding: '6px 14px',
                          borderRadius: 'var(--radius)',
                          fontSize: '12px',
                          fontWeight: 500,
                          color: 'var(--navy)',
                          cursor: 'pointer',
                        }}
                      >
                        Browse file
                      </button>
                    </div>
                  </div>
                </div>

                {/* Consent & Submission */}
                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', cursor: 'pointer', fontSize: '13px', lineHeight: '20px', color: 'var(--charcoal)' }}>
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      style={{ marginTop: '3px' }}
                    />
                    <span>
                      I authorize Vasudha Freshline Exports LLP to issue commercial proforma pricing to this corporate email address. Reviewed under our{' '}
                      <button
                        type="button"
                        onClick={() => onNavigate('/terms')}
                        style={{ background: 'none', border: 'none', color: 'var(--olive)', textDecoration: 'underline', padding: 0, font: 'inherit', cursor: 'pointer' }}
                      >
                        Terms of International Trade
                      </button>.
                    </span>
                  </label>
                  {errors.consent && <span className="form-error" style={{ display: 'block' }}>{errors.consent}</span>}
                </div>

                <Button
                  variant="primary"
                  type="submit"
                  disabled={isSubmitting}
                  style={{ width: '100%', height: '52px', fontSize: '16px' }}
                >
                  {isSubmitting ? 'Registering trade indent...' : 'Submit Request for Quotation'}
                </Button>
              </form>
            </div>

            {/* RIGHT 5 COLUMNS: DIRECT TRADE OFFICERS & OPERATIONAL FACILITIES */}
            <div
              style={{
                gridColumn: 'span 5',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
              }}
              className="quote-contact-col reveal reveal-delay-1"
            >
              {/* WhatsApp Fast Track Panel */}
              <div
                style={{
                  backgroundColor: 'var(--navy)',
                  color: 'var(--ivory)',
                  padding: '28px 24px',
                  borderRadius: 'var(--radius)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <MessageSquare size={18} strokeWidth={1.5} color="var(--olive-light)" />
                  <span className="label-caps" style={{ color: 'var(--olive-light)', fontWeight: 600 }}>
                    Fast-Track WhatsApp Desk
                  </span>
                </div>
                <h3 style={{ color: 'var(--ivory)', fontSize: '20px', lineHeight: '26px', marginBottom: '10px' }}>
                  Need immediate vessel freight rates?
                </h3>
                <p style={{ color: 'var(--bone)', fontSize: '13px', lineHeight: '20px', marginBottom: '20px' }}>
                  Connect directly with our senior trade officer for real-time spot pricing, harvest lot photos, and JNPT stuffing slots.
                </p>

                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    height: '46px',
                    backgroundColor: 'var(--ivory)',
                    color: 'var(--navy)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '14px',
                    fontWeight: 600,
                    borderRadius: 'var(--radius)',
                    textDecoration: 'none',
                    transition: 'all 180ms ease',
                  }}
                >
                  <MessageSquare size={16} color="var(--navy)" />
                  <span>Launch WhatsApp Trade Desk</span>
                </a>
              </div>

              {/* Direct Named Trade Officers Card */}
              <div
                style={{
                  backgroundColor: 'var(--bone)',
                  border: '1px solid var(--line)',
                  borderRadius: 'var(--radius)',
                  padding: '28px 24px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                  <UserCheck size={18} strokeWidth={1.5} color="var(--olive)" />
                  <span className="label-caps" style={{ color: 'var(--navy)', fontWeight: 600 }}>
                    Key Commercial Officers
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {/* Officer 1 */}
                  <div style={{ borderBottom: '1px solid var(--line)', paddingBottom: '14px' }}>
                    <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--ink)' }}>Sunil Jadhav</div>
                    <div style={{ fontSize: '12px', color: 'var(--olive)', marginBottom: '4px' }}>Head of Agricultural Procurement (Nashik / Solapur)</div>
                    <div style={{ fontSize: '13px', color: 'var(--charcoal)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Phone size={12} color="var(--muted)" />
                      <a href="tel:+919823045812" style={{ color: 'inherit', textDecoration: 'none' }}>+91 98230 45812</a>
                    </div>
                  </div>

                  {/* Officer 2 */}
                  <div style={{ borderBottom: '1px solid var(--line)', paddingBottom: '14px' }}>
                    <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--ink)' }}>Pooja Mehta</div>
                    <div style={{ fontSize: '12px', color: 'var(--olive)', marginBottom: '4px' }}>Export Documentation & Bank L/C Desk</div>
                    <div style={{ fontSize: '13px', color: 'var(--charcoal)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Mail size={12} color="var(--muted)" />
                      <a href="mailto:compliance@vasudhafreshline.com" style={{ color: 'inherit', textDecoration: 'none' }}>compliance@vasudhafreshline.com</a>
                    </div>
                  </div>

                  {/* Officer 3 */}
                  <div>
                    <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--ink)' }}>Rajesh Kulkarni</div>
                    <div style={{ fontSize: '12px', color: 'var(--olive)', marginBottom: '4px' }}>Cold-Chain Logistics & JNPT Port Coordinator</div>
                    <div style={{ fontSize: '13px', color: 'var(--charcoal)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Phone size={12} color="var(--muted)" />
                      <a href="tel:+912532578941" style={{ color: 'inherit', textDecoration: 'none' }}>+91 253 257 8941</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Operational Bases Card */}
              <div
                style={{
                  backgroundColor: 'var(--ivory)',
                  border: '1px solid var(--line)',
                  borderRadius: 'var(--radius)',
                  padding: '28px 24px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                  <MapPin size={18} strokeWidth={1.5} color="var(--olive)" />
                  <span className="label-caps" style={{ color: 'var(--navy)', fontWeight: 600 }}>
                    Operational Locations
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '13px', lineHeight: '21px', color: 'var(--charcoal)' }}>
                  <div>
                    <strong style={{ color: 'var(--ink)', display: 'block', marginBottom: '2px' }}>
                      1. Nashik Packhouse & Cold Storage Facility:
                    </strong>
                    <span>Plot No. 42-B, Agro-Processing Zone, Vinchur Wine & Food Park, Niphad, Nashik - 422209, Maharashtra, India</span>
                  </div>

                  <div style={{ borderTop: '1px solid var(--line)', paddingTop: '12px' }}>
                    <strong style={{ color: 'var(--ink)', display: 'block', marginBottom: '2px' }}>
                      2. JNPT Maritime Dispatch Office:
                    </strong>
                    <span>Suite 408, Platinum Techno Park, Sector 30A, Vashi, Navi Mumbai - 400705, Maharashtra (JNPT Reefer Transit Desk)</span>
                  </div>
                </div>
              </div>

              {/* Statutory Registrations Card */}
              <div
                style={{
                  backgroundColor: 'var(--bone)',
                  border: '1px solid var(--line)',
                  borderRadius: 'var(--radius)',
                  padding: '24px',
                  fontSize: '12px',
                  color: 'var(--muted)',
                  lineHeight: '19px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}>
                  <ShieldCheck size={16} color="var(--olive)" />
                  <span style={{ fontWeight: 600, color: 'var(--navy)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    Statutory Registrations
                  </span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                  <div><strong>IEC:</strong> 0324089121</div>
                  <div><strong>APEDA RCMC:</strong> MUM/2024/09182</div>
                  <div><strong>FSSAI:</strong> 11524998000341</div>
                  <div><strong>GSTIN:</strong> 27AAHFV5921Q1ZP</div>
                  <div><strong>LLPIN:</strong> AAZ-8492</div>
                  <div><strong>Port:</strong> JNPT Nhava Sheva (INNSA)</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .quote-form-col, .quote-contact-col {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </main>
  );
};
