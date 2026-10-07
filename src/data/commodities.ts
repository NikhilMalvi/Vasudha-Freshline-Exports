import { IMAGES } from './images';

export interface ProductDetailData {
  slug: string;
  name: string;
  category: string;
  eyebrow: string;
  oneLiner: string;
  shortSummary: string;
  origin: string;
  seasonSummary: string;
  keyFacts: { label: string; value: string }[];
  specs: {
    group: string;
    rows: { label: string; value: string }[];
  }[];
  seasonalityMonths: ('peak' | 'available' | 'off')[]; // Jan to Dec (12 items)
  seasonalityNote: string;
  extraNotice?: {
    title: string;
    content: string;
    badge?: string;
  };
  packingPhotos: {
    label: string;
    subtext: string;
    aspectRatio: '4:5' | '3:2' | '16:9';
    src?: string;
  }[];
  qualityCertifications: string[];
  documentsSupplied: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedSlugs: string[];
}

export const PRODUCTS_DATA: Record<string, ProductDetailData> = {
  pomegranates: {
    slug: 'pomegranates',
    name: 'Pomegranates',
    category: 'Fresh Fruits',
    eyebrow: 'FRESH FRUIT',
    oneLiner: 'Export-grade pomegranates from Maharashtra, packed and shipped by reefer container.',
    shortSummary: 'Bhagwa variety grown across Maharashtra. Known for soft ruby arils, high brix content, and uniform skin colour. Graded into export carton counts 9 through 15.',
    origin: 'Solapur / Nashik, Maharashtra, India',
    seasonSummary: 'Year-round availability with peak export harvest September through March.',
    keyFacts: [
      { label: 'Variety', value: 'Bhagwa (Super Sindhuri)' },
      { label: 'Origin', value: 'Maharashtra, India [CONFIRM: Packing cluster]' },
      { label: 'Size grades', value: 'Counts 9, 10, 12, 14, 15 (180g – 400g+)' },
      { label: 'Packing', value: '3.5 kg / 5.0 kg corrugated export box' },
      { label: 'Season', value: 'September – March (Peak) · Secondary harvest available' },
    ],
    specs: [
      {
        group: 'PRODUCT',
        rows: [
          { label: 'Variety', value: 'Bhagwa (Super Sindhuri)' },
          { label: 'Origin', value: 'Maharashtra, India (Solapur & Nashik agricultural belts)' },
          { label: 'Size & Calibre', value: 'Counts 9 (350-400g), 10 (300-350g), 12 (250-300g), 14 (200-250g), 15 (180-200g)' },
          { label: 'Colour & Appearance', value: 'Glossy deep red rind with soft dark-red arils, blemish-free grade' },
          { label: 'Brix Level', value: '15° – 17° Brix natural sugar balance' },
        ],
      },
      {
        group: 'PACKING',
        rows: [
          { label: 'Carton Format', value: '5-ply corrugated telescopic export cartons with ventilation holes' },
          { label: 'Net Weight per Pack', value: '3.5 kg net (standard European/Gulf) or 5.0 kg net' },
          { label: 'Internal Packaging', value: 'Plastic moulded trays, foam netting, and food-grade paper liners' },
          { label: 'Labelling', value: 'Export batch number, count calibre, net weight, barcode, buyer branding [CONFIRM]' },
        ],
      },
      {
        group: 'SHIPPING',
        rows: [
          { label: 'Container Specification', value: '40ft High Cube Reefer (DAIKIN / Carrier Transicold equipped)' },
          { label: 'Transit Temperature', value: '+5.0°C to +7.0°C with fresh air exchange (15 CMH)' },
          { label: 'Relative Humidity', value: '90% – 95% RH to prevent rind dehydration' },
          { label: 'Quantity per Container', value: 'Approx. 4,400 to 5,000 cartons (20 standard sea pallets)' },
          { label: 'Port of Loading', value: 'JNPT / Nhava Sheva (INNSA), Mumbai' },
          { label: 'Incoterms Offered', value: 'FOB JNPT, CIF Discharge Port, CFR' },
        ],
      },
      {
        group: 'TERMS',
        rows: [
          { label: 'Minimum Order Quantity', value: '1 Full Container Load (40ft Reefer FCL)' },
          { label: 'Payment Terms', value: 'Confirmed Irrevocable LC at sight, CAD, or TT advance + balance [CONFIRM]' },
          { label: 'Sample Policy', value: 'Commercial air-courier sample carton dispatched upon qualified RFQ' },
        ],
      },
      {
        group: 'QUALITY',
        rows: [
          { label: 'Shelf Life', value: '45 to 60 days from harvest under unbroken +5°C storage' },
          { label: 'Traceability', value: 'APEDA AnarNet farm-to-container traceability registration [CONFIRM]' },
          { label: 'Certifications', value: 'Phytosanitary inspection, Certificate of Origin, GlobalG.A.P. [CONFIRM]' },
        ],
      },
    ],
    seasonalityMonths: ['peak', 'peak', 'peak', 'available', 'available', 'off', 'off', 'available', 'peak', 'peak', 'peak', 'peak'],
    seasonalityNote: 'Main export window operates September to March. Off-season shipments sourced from irrigated orchard clusters upon advance contract.',
    extraNotice: {
      title: 'Traceability and Cold Chain Assurance',
      content: 'Consignments are loaded directly into pre-tripped reefer containers at the cold store with dual calibrated temperature data loggers inserted inside pallet cores.',
      badge: 'Cold Chain Protocol',
    },
    packingPhotos: [
      {
        label: 'Bhagwa pomegranate grading table and calibre sizing gauge',
        subtext: 'Documentary photograph · Natural studio light · Neutral stone surface · 4:5',
        aspectRatio: '4:5',
        src: IMAGES.pomegranates,
      },
      {
        label: 'Packed 3.5kg corrugated telescopic export cartons with moulded trays',
        subtext: 'Documentary photograph · Top-down packing view · 3:2',
        aspectRatio: '3:2',
        src: IMAGES.pomegranatesCut,
      },
      {
        label: 'Palletized cartons entering pre-cooling chamber at packhouse',
        subtext: 'Documentary photograph · Clean facility cold room · 3:2',
        aspectRatio: '3:2',
        src: IMAGES.pomegranatesBox,
      },
    ],
    qualityCertifications: [
      'Official Phytosanitary Certificate (Plant Quarantine of India)',
      'Certificate of Origin (Chamber of Commerce)',
      'APEDA AnarNet Farm Registration [CONFIRM]',
      'Pesticide Residue Analysis Report (NABL accredited laboratory)',
    ],
    documentsSupplied: [
      'Clean on Board Ocean Bill of Lading',
      'Commercial Invoice with HSN code declaration',
      'Detailed Packing List (gross/net weight and carton counts)',
      'Original Phytosanitary Certificate',
      'Original Certificate of Origin',
      'Container Temperature Log Data (USB extract upon arrival)',
    ],
    faqs: [
      {
        question: 'Which pomegranate variety do you export?',
        answer: 'We export the Bhagwa variety exclusively. Bhagwa is the benchmark export variety from India, celebrated for sweet soft seeds, high brix levels, and thick glossy rind that withstands maritime voyages.',
      },
      {
        question: 'How are pomegranates kept fresh during maritime transit?',
        answer: 'Produce undergoes forced-air pre-cooling within 4 hours of harvest to reach +5°C. Cargo is shipped in 40ft High Cube Reefers maintained at +5°C to +7°C with 90-95% humidity and controlled ventilation. Continuous temperature loggers monitor every pallet.',
      },
      {
        question: 'What is the minimum order quantity?',
        answer: 'Our standard MOQ is 1 Full Container Load (40ft High Cube Reefer), holding approximately 4,400 to 5,000 cartons (approx. 18-20 Metric Tons net).',
      },
      {
        question: 'Can you supply private label branded cartons?',
        answer: 'Yes. For multi-container contracts confirmed in advance, we print export cartons featuring buyer corporate branding, multilingual statutory texts, and custom barcode labels.',
      },
      {
        question: 'Which trade documents are provided with each shipment?',
        answer: 'Every container is accompanied by a Clean Bill of Lading, Commercial Invoice, Detailed Packing List, Official Phytosanitary Certificate, Certificate of Origin, and container seal record.',
      },
    ],
    relatedSlugs: ['fresh-fruits', 'onions'],
  },

  onions: {
    slug: 'onions',
    name: 'Fresh Red & White Onions',
    category: 'Fresh Vegetables',
    eyebrow: 'FRESH VEGETABLES',
    oneLiner: 'Export-calibrated red and white onions from Nashik in heavy mesh bags by container load.',
    shortSummary: 'Direct sourcing from Nashik and surrounding Maharashtra agricultural belts. Low moisture leakage, cured dry outer skins, and calibrated sizing for Gulf and regional distribution hubs.',
    origin: 'Nashik / Lasalgaon, Maharashtra, India',
    seasonSummary: 'Export season runs October through April, peaking December to February.',
    keyFacts: [
      { label: 'Varieties', value: 'Light Red / Dark Red / White Dehydration' },
      { label: 'Origin', value: 'Nashik & Ahmednagar, Maharashtra, India' },
      { label: 'Size grades', value: '45mm – 55mm / 55mm+ calibrated' },
      { label: 'Packing', value: '10 kg / 20 kg / 25 kg leno mesh bags' },
      { label: 'Season', value: 'October to April (Peak: December to February)' },
    ],
    specs: [
      {
        group: 'PRODUCT',
        rows: [
          { label: 'Varieties Offered', value: 'Nashik Light Red, Deep Red, and White Globe Onions' },
          { label: 'Origin', value: 'Nashik / Lasalgaon agricultural belt, Maharashtra, India' },
          { label: 'Calibration & Sizing', value: '45mm to 55mm (medium export grade) and 55mm+ (large grade)' },
          { label: 'Quality Attributes', value: 'Firm bulbs, cured outer papery skin (3-4 layers), minimal double-hearts' },
          { label: 'Dry Matter Content', value: 'High soluble solids ensuring extended ocean voyage shelf life' },
        ],
      },
      {
        group: 'PACKING',
        rows: [
          { label: 'Primary Packaging', value: 'Heavyweight red or yellow polypropylene leno mesh bags' },
          { label: 'Bag Net Weights', value: '10 kg, 20 kg, or 25 kg net per bag (buyer specified)' },
          { label: 'Sewing & Sealing', value: 'Heavy-gauge overlock stitching with drawstrings and tag inserts' },
          { label: 'Palletization', value: 'Floor-stacked (loose stowage) or palletized on treated wooden pallets' },
        ],
      },
      {
        group: 'SHIPPING',
        rows: [
          { label: 'Container Types', value: '40ft High Cube Reefer (+0°C to +2°C) or 40ft Ventilated Dry Container' },
          { label: 'Container Payload', value: '28.0 to 29.5 Metric Tons per 40ft container' },
          { label: 'Transit Mode', value: 'Direct sea freight from JNPT (Nhava Sheva) to Arabian Gulf & Asian ports' },
          { label: 'Port of Loading', value: 'JNPT / Nhava Sheva (INNSA), Maharashtra' },
          { label: 'Incoterms Offered', value: 'FOB JNPT, CIF, CFR' },
        ],
      },
      {
        group: 'TERMS',
        rows: [
          { label: 'Minimum Order Quantity', value: '1 Full Container Load (40ft FCL approx. 28-29 MT)' },
          { label: 'Payment Terms', value: 'Irrevocable LC at sight or CAD against copy documents [CONFIRM]' },
          { label: 'Pricing Basis', value: 'Spot container quote or indexed forward contract based on APMC market rate' },
        ],
      },
      {
        group: 'QUALITY',
        rows: [
          { label: 'Curing & Dryness', value: 'Field-cured under ambient shelter to reduce internal condensation' },
          { label: 'Fumigation / Phytosanitary', value: 'Pre-shipment Methyl Bromide / Phosphine fumigation where mandated' },
          { label: 'Certifications', value: 'Phytosanitary Certificate, APEDA export clearance, Certificate of Origin' },
        ],
      },
    ],
    seasonalityMonths: ['peak', 'peak', 'available', 'available', 'off', 'off', 'off', 'off', 'off', 'available', 'peak', 'peak'],
    seasonalityNote: 'Export availability starts in October with fresh Kharif crop, peaks December through February with Late Kharif/Rabi, and continues through April.',
    extraNotice: {
      title: 'Current Export Status & Shipping Notice',
      content: 'Current shipping notice: Indian onion export policy and Gulf container freight schedules are monitored daily by our desk. We provide binding proforma quotes valid for 48 hours to protect buyers against freight volatility.',
      badge: 'Active Export Window',
    },
    packingPhotos: [
      {
        label: 'Calibrated 50mm red onions in leno mesh bags at Nashik loading yard',
        subtext: 'Documentary photograph · Covered packhouse staging · 4:5',
        aspectRatio: '4:5',
        src: IMAGES.onions,
      },
      {
        label: 'Manual sizing check with precision ring gauge on sorting table',
        subtext: 'Documentary photograph · Natural daylight · 3:2',
        aspectRatio: '3:2',
        src: IMAGES.onionsMesh,
      },
      {
        label: 'Container stuffing with floor-stowed 25kg red mesh bags at JNPT',
        subtext: 'Documentary photograph · Port terminal reefer yard · 3:2',
        aspectRatio: '3:2',
        src: IMAGES.onionsWhite,
      },
    ],
    qualityCertifications: [
      'Official Phytosanitary Certificate (Plant Quarantine Organization)',
      'Certificate of Origin (Government Authorized Chamber)',
      'APEDA Export Registration [CONFIRM]',
      'Fumigation Certificate (where destination port mandates)',
    ],
    documentsSupplied: [
      'Ocean Bill of Lading (Clean on Board)',
      'Commercial Invoice with HSN declaration',
      'Weight Certificate & Detailed Packing List',
      'Phytosanitary Certificate',
      'Certificate of Origin',
    ],
    faqs: [
      {
        question: 'What is the difference between light red and dark red onions?',
        answer: 'Nashik light red onions have higher dry matter and lower moisture, making them superior for long maritime journeys of 15 to 30 days. Dark red onions offer intense color and pungent flavor, preferred for faster Gulf transits.',
      },
      {
        question: 'How do you prevent sprouting and fungal rot during ocean transit?',
        answer: 'We only bag onions that have undergone thorough natural sun-curing to harden outer bulb scales. Cargo is shipped in ventilated containers or reefers set to +0°C to +2°C with proper dehumidification.',
      },
      {
        question: 'How many bags fit into a 40ft container?',
        answer: 'A 40ft High Cube container accommodates approx. 1,120 to 1,160 bags of 25 kg each (approx. 28.5 to 29.0 Metric Tons net).',
      },
      {
        question: 'What is the current Indian government export duty or minimum export price?',
        answer: 'Indian export duties change periodically. Our trade desk provides current government tariff and net landed cost in our 2-minute RFQ quotation.',
      },
      {
        question: 'Can you accommodate third-party inspection prior to container sealing?',
        answer: 'Yes. Importers may appoint SGS, Bureau Veritas or Intertek to inspect bag weights, calibration and moisture levels at the packhouse before container stuffing.',
      },
    ],
    relatedSlugs: ['pomegranates', 'fresh-vegetables'],
  },

  rice: {
    slug: 'rice',
    name: 'Rice (Basmati & Non-Basmati)',
    category: 'Grains & Cereals',
    eyebrow: 'GRAINS & CEREALS',
    oneLiner: 'Export-grade milled Basmati and Non-Basmati rice in heavy export bags by 20ft container.',
    shortSummary: 'Long-grain non-basmati (IR64, PR11, Sona Masoori) and aromatic 1121 Basmati rice for commercial distributors and packaging companies. Rigorous sortex cleaning and controlled broken percentages.',
    origin: 'Northern & Central Agricultural Belts, India',
    seasonSummary: 'Milled rice available year-round from modern sortex milling clusters.',
    keyFacts: [
      { label: 'Varieties', value: '1121 Basmati, IR64, PR11, Sona Masoori' },
      { label: 'Milling', value: '100% Sortex Cleaned & Double Polished' },
      { label: 'Broken Grain', value: 'Under 2% (Basmati) · 5% / 10% (Non-Basmati)' },
      { label: 'Packing', value: '10 kg, 25 kg, 50 kg PP / BOPP bags' },
      { label: 'Container Load', value: '25 to 26 Metric Tons per 20ft Dry FCL' },
    ],
    specs: [
      {
        group: 'PRODUCT',
        rows: [
          { label: 'Varieties Supplied', value: '1121 Basmati (Steam / Sella / Raw), IR64 Parboiled, PR11, Sona Masoori' },
          { label: 'Average Grain Length', value: '8.35mm+ (1121 Basmati) · 6.0mm – 6.5mm (Non-Basmati long grain)' },
          { label: 'Purity & Sortex', value: '99% pure sortex clean, free of foreign matter, stones or discolored grains' },
          { label: 'Moisture Content', value: 'Max 12.5% (Basmati) · Max 14.0% (Non-Basmati)' },
          { label: 'Broken Percentage', value: 'Max 1-2% for Basmati · 5% standard export for Non-Basmati' },
        ],
      },
      {
        group: 'PACKING',
        rows: [
          { label: 'Export Bag Formats', value: 'Woven Polypropylene (PP), Non-woven fabric, or laminated BOPP bags' },
          { label: 'Bag Net Sizes', value: '5 kg, 10 kg, 20 kg, 25 kg, and 50 kg net' },
          { label: 'Private Label Packing', value: 'Custom printed multi-color BOPP bags available on contract [CONFIRM]' },
          { label: 'Container Desiccants', value: 'Container dry-bags placed inside FCL to control voyage humidity' },
        ],
      },
      {
        group: 'SHIPPING',
        rows: [
          { label: 'Container Size', value: '20ft Dry General Cargo Container (heavy density cargo)' },
          { label: 'Container Capacity', value: '25.0 to 26.0 Metric Tons net per 20ft FCL' },
          { label: 'Port of Loading', value: 'JNPT / Nhava Sheva or Mundra Port, India' },
          { label: 'Incoterms Offered', value: 'FOB, CIF, CFR' },
        ],
      },
      {
        group: 'TERMS',
        rows: [
          { label: 'Minimum Order Quantity', value: '1 Full 20ft Container Load (approx. 25-26 Metric Tons)' },
          { label: 'Payment Terms', value: '100% Irrevocable LC at sight or 30% advance + 70% against OBL [CONFIRM]' },
          { label: 'Sample Policy', value: 'Courier sample parcels (500g – 1kg) dispatched for lab evaluation' },
        ],
      },
      {
        group: 'QUALITY',
        rows: [
          { label: 'Milling Standards', value: 'Modern Satake / Buhler optical color sorter processing' },
          { label: 'Crop Year', value: 'Current crop year or aged rice (1-2 years aged for premium basmati)' },
          { label: 'Certifications', value: 'FSSAI, Phytosanitary, Certificate of Origin, Non-GMO declaration' },
        ],
      },
    ],
    seasonalityMonths: ['available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available'],
    seasonalityNote: 'Milled grain is available continuously throughout all 12 calendar months from temperature-controlled grain silos.',
    extraNotice: {
      title: 'Commercial Grain Notice',
      content: 'We supply both commercial African non-basmati programs and Gulf premium aged basmati packaging programs. Request a formal lab sample with your RFQ.',
      badge: 'Continuous Supply',
    },
    packingPhotos: [
      {
        label: '1121 Basmati raw and steam grains measured against calibrated metric ruler',
        subtext: 'Documentary photograph · Neutral surface · 4:5',
        aspectRatio: '4:5',
        src: IMAGES.rice,
      },
      {
        label: 'Palletized 25kg BOPP laminated rice bags ready for container loading',
        subtext: 'Documentary photograph · Dry warehousing yard · 3:2',
        aspectRatio: '3:2',
        src: IMAGES.riceGrains,
      },
      {
        label: 'Stuffing 20ft dry container with kraft paper lining and desiccant packs',
        subtext: 'Documentary photograph · JNPT logistics park · 3:2',
        aspectRatio: '3:2',
        src: IMAGES.riceSack,
      },
    ],
    qualityCertifications: [
      'Phytosanitary Certificate (Plant Quarantine Authority)',
      'Certificate of Origin (Government Chamber)',
      'NABL Laboratory Grain Analysis Report',
      'Non-GMO & Fumigation Certificate',
    ],
    documentsSupplied: [
      'Original Bill of Lading (3/3 set)',
      'Signed Commercial Invoice',
      'Weight & Quality Certificate',
      'Certificate of Origin',
      'Phytosanitary Certificate',
    ],
    faqs: [
      {
        question: 'What broken percentage do you offer for Non-Basmati rice?',
        answer: 'Our export standard is 5% broken grain maximum. We also supply 10% or 25% broken specifications based on importer contract terms.',
      },
      {
        question: 'Can you provide private label packaging for retail distribution?',
        answer: 'Yes. For recurring container contracts, we manufacture and pack into buyer-branded BOPP bags in 5kg, 10kg, 20kg and 25kg net formats.',
      },
      {
        question: 'Why do you load 25-26 MT into a 20ft container instead of 40ft?',
        answer: 'Rice is dense heavy cargo. A 20ft container reaches maritime road weight limits (approx. 26 Metric Tons net) before filling internal cubic space, making 20ft dry containers the most economical shipping format.',
      },
      {
        question: 'How do you safeguard against weevils and moisture damage during ocean transit?',
        answer: 'Cargo is fumigated under gas-tight tarpaulins with certified compounds prior to loading. Containers are lined with moisture-barrier kraft paper and equipped with calcium chloride desiccant bags.',
      },
      {
        question: 'Can we receive physical samples before issuing our contract?',
        answer: 'Yes. We courier 500g to 1kg sample parcels via DHL / FedEx to verified corporate buyers with grain test certificates.',
      },
    ],
    relatedSlugs: ['spices', 'onions'],
  },

  spices: {
    slug: 'spices',
    name: 'Indian Spices',
    category: 'Spices',
    eyebrow: 'SPICES',
    oneLiner: 'Export-grade whole and ground Indian spices with certified purity and low moisture.',
    shortSummary: 'Whole export spices including machine-cleaned cumin seeds (Jeera), coriander seeds, turmeric fingers and whole dried chillies. Cleaned and packed in moisture-protected bags with full laboratory analysis.',
    origin: 'Gujarat, Rajasthan, Maharashtra, India',
    seasonSummary: 'Harvest seasons vary by spice; available year-round in sealed warehousing.',
    keyFacts: [
      { label: 'Key Spices', value: 'Cumin (Jeera), Turmeric, Coriander, Dried Chilli' },
      { label: 'Purity Level', value: '99.0% to 99.5% Machine / Sortex Cleaned' },
      { label: 'Moisture', value: 'Strictly under 9.0% – 10.0%' },
      { label: 'Testing', value: 'Ethylene Oxide (EtO) & Microbiological analysis' },
      { label: 'Packing', value: '25 kg / 50 kg multiwall paper or PP bags' },
    ],
    specs: [
      {
        group: 'PRODUCT',
        rows: [
          { label: 'Spices Supplied', value: 'Cumin Seeds (Cuminum cyminum), Turmeric Fingers (Curcuma longa), Coriander Seeds, Dry Red Chillies' },
          { label: 'Purity & Grade', value: 'Singapore Grade / Europe Grade (99.0% to 99.5% clean)' },
          { label: 'Moisture Limit', value: 'Max 8.5% to 9.5% dependent on spice variety' },
          { label: 'Volatile Oil / Curcumin', value: 'High essential oil content · Turmeric curcumin 2.5% – 5.0% [CONFIRM per lot]' },
          { label: 'Extraneous Matter', value: 'Less than 0.5% after precision optical sorting' },
        ],
      },
      {
        group: 'PACKING',
        rows: [
          { label: 'Export Packaging', value: 'Multi-ply paper bags with poly liner, or heavy woven PP bags with inner seal' },
          { label: 'Net Unit Weight', value: '25 kg or 50 kg net per package' },
          { label: 'Bale Packing (Chilli)', value: 'Hydraulically pressed 10kg/25kg cartons or gunny bales' },
          { label: 'Pallet Protection', value: 'Shrink-wrapped pallets with corner edge boards' },
        ],
      },
      {
        group: 'SHIPPING',
        rows: [
          { label: 'Container Format', value: '20ft Dry FCL (approx. 15-18 MT) or 40ft Dry FCL (approx. 26 MT)' },
          { label: 'Moisture Defense', value: 'Container moisture traps and silica absorbent poles fitted' },
          { label: 'Port of Loading', value: 'JNPT / Nhava Sheva or Mundra Port, India' },
          { label: 'Incoterms Offered', value: 'FOB, CIF, CFR' },
        ],
      },
      {
        group: 'TERMS',
        rows: [
          { label: 'Minimum Order Quantity', value: '1 Full Container Load (or mixed spice container upon contract approval)' },
          { label: 'Payment Terms', value: 'Irrevocable LC at sight or CAD [CONFIRM]' },
          { label: 'Quality Verification', value: 'Certificate of Analysis (COA) dispatched with every shipping advice' },
        ],
      },
      {
        group: 'QUALITY',
        rows: [
          { label: 'EtO Compliance', value: 'Tested for ethylene oxide and pesticide residues per destination market rules' },
          { label: 'Microbiology', value: 'Tested for Salmonella, E. Coli, yeast & mould' },
          { label: 'Certifications', value: 'Spices Board Registration [CONFIRM], FSSAI, Phytosanitary, Origin' },
        ],
      },
    ],
    seasonalityMonths: ['peak', 'peak', 'peak', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'peak', 'peak'],
    seasonalityNote: 'Cumin and coriander harvest runs January through April; turmeric harvest peaks February through May. Properly warehoused stock is supplied year-round.',
    extraNotice: {
      title: 'Ethylene Oxide (EtO) & Residue Protocol',
      content: 'In accordance with Spices Board guidelines, all spice lots destined for international ports undergo mandatory NABL accredited laboratory screening for EtO and pesticide residues.',
      badge: 'Lab Tested',
    },
    packingPhotos: [
      {
        label: 'Sortex-cleaned cumin seed sample scoop on stainless steel evaluation tray',
        subtext: 'Documentary photograph · Neutral background · 4:5',
        aspectRatio: '4:5',
        src: IMAGES.spices,
      },
      {
        label: 'Double-polished Salem turmeric fingers in sealed export sacks',
        subtext: 'Documentary photograph · Natural daylight · 3:2',
        aspectRatio: '3:2',
        src: IMAGES.spicesTurmeric,
      },
      {
        label: 'Sealed export bags with humidity monitoring cards inside 20ft container',
        subtext: 'Documentary photograph · Clean container stowage · 3:2',
        aspectRatio: '3:2',
        src: IMAGES.spicesCumin,
      },
    ],
    qualityCertifications: [
      'Certificate of Analysis (COA) from NABL Accredited Laboratory',
      'Official Phytosanitary Certificate',
      'Spices Board Registration [CONFIRM]',
      'Certificate of Origin (Authorized Chamber)',
    ],
    documentsSupplied: [
      'Original Bill of Lading',
      'Commercial Invoice',
      'Detailed Packing List',
      'Laboratory Analysis Report (EtO, Moisture, Purity)',
      'Phytosanitary Certificate',
      'Certificate of Origin',
    ],
    faqs: [
      {
        question: 'Do you provide laboratory test reports for ethylene oxide (EtO)?',
        answer: 'Yes. In strict alignment with Spices Board norms and European/Gulf regulations, lot test reports for EtO and chemical residues from accredited NABL labs are provided on request.',
      },
      {
        question: 'Can you supply mixed spice containers?',
        answer: 'Yes. Subject to container volume planning, we can load a single 20ft or 40ft container with balanced pallets of cumin seeds, coriander seeds, and turmeric.',
      },
      {
        question: 'What is the moisture percentage in your cumin and coriander seeds?',
        answer: 'Moisture is strictly kept below 9.0%, ensuring raw seeds remain free from mold growth and retain essential aromatics during ocean voyages.',
      },
      {
        question: 'Are your spices irradiated or steam-treated?',
        answer: 'We supply both raw machine-cleaned/sortex-cleaned grades and steam-sterilized lots depending on buyer specifications and destination country import requirements.',
      },
      {
        question: 'What is the container loading capacity for whole spices?',
        answer: 'A 20ft container carries approximately 18 Metric Tons of cumin or coriander, while a 40ft container carries approximately 26 Metric Tons.',
      },
    ],
    relatedSlugs: ['rice', 'onions'],
  },

  'fresh-fruits': {
    slug: 'fresh-fruits',
    name: 'Fresh Seasonal Fruits',
    category: 'Fresh Fruits',
    eyebrow: 'FRESH FRUITS',
    oneLiner: 'Export-grade table grapes, bananas and seasonal fruits managed through strict cold chain.',
    shortSummary: 'Seasonal export fruits including Thompson and Sonaka seedless table grapes, Cavendish bananas and seasonal tropical varieties handled through cold-chain protocols and reefer container transport.',
    origin: 'Maharashtra & Gujarat Horticultural Belts, India',
    seasonSummary: 'Grapes: January to April · Bananas: Year-round · Mangoes: April to June.',
    keyFacts: [
      { label: 'Core Fruits', value: 'Table Grapes, Cavendish Bananas, Mangoes [CONFIRM: full list]' },
      { label: 'Grape Varieties', value: 'Thompson Seedless, Sonaka, Sharad Seedless' },
      { label: 'Cold Chain', value: 'Pre-cooled to designated core temp within 4 hours' },
      { label: 'Packing', value: 'Punnets / carry pouches in corrugated master cartons' },
      { label: 'Transit', value: '40ft High Cube Reefer (-0.5°C for grapes / +13°C for bananas)' },
    ],
    specs: [
      {
        group: 'PRODUCT',
        rows: [
          { label: 'Fruit Categories', value: 'Fresh Table Grapes, Cavendish Bananas (Grand Naine), Mangoes (Alphonso, Kesar)' },
          { label: 'Grape Calibre', value: 'Berry size 16mm – 18mm+ diameter, minimum 16° Brix sweetness' },
          { label: 'Banana Calibre', value: 'Finger length minimum 18cm – 22cm, calibration 39mm to 46mm' },
          { label: 'Ripeness at Harvest', value: 'Harvested at optimum physiological maturity for sea transit' },
        ],
      },
      {
        group: 'PACKING',
        rows: [
          { label: 'Grapes Packing', value: '4.5 kg or 5.0 kg net cartons (10 x 500g clear punnets or carry pouches)' },
          { label: 'SO2 In-Carton Pads', value: 'Slow-release sulfur dioxide generator pads to inhibit Botrytis rot' },
          { label: 'Bananas Packing', value: '13 kg / 18.14 kg net bottom-telescopic cartons with poly vacuum liner' },
          { label: 'Palletization', value: 'Reinforced 4-way entry sea pallets corner-boarded and strapped' },
        ],
      },
      {
        group: 'SHIPPING',
        rows: [
          { label: 'Container Types', value: '40ft High Cube Reefer with controlled atmosphere / microventilation' },
          { label: 'Grapes Transit Temp', value: '-0.5°C to +0.0°C · 90-95% RH' },
          { label: 'Bananas Transit Temp', value: '+13.0°C to +13.5°C (prevents chilling injury)' },
          { label: 'Payload', value: 'Grapes: approx. 2,400 cartons (approx. 12 MT net) · Bananas: 1,540 boxes (approx. 20 MT)' },
          { label: 'Port of Loading', value: 'JNPT / Nhava Sheva (INNSA), Mumbai' },
          { label: 'Incoterms Offered', value: 'FOB, CIF, CFR' },
        ],
      },
      {
        group: 'TERMS',
        rows: [
          { label: 'Minimum Order Quantity', value: '1 Full 40ft Reefer FCL' },
          { label: 'Payment Terms', value: 'Confirmed LC at sight or CAD against shipping documents [CONFIRM]' },
          { label: 'Temperature Verification', value: 'Dual single-use USB temperature data loggers inside pallets' },
        ],
      },
      {
        group: 'QUALITY',
        rows: [
          { label: 'Pre-Cooling', value: 'Mandatory forced-air tunnel pre-cooling before carton stuffing' },
          { label: 'Residue Management', value: 'APEDA Grapenet monitoring and MRL compliance [CONFIRM]' },
          { label: 'Certifications', value: 'Phytosanitary Certificate, GlobalG.A.P. [CONFIRM], Certificate of Origin' },
        ],
      },
    ],
    seasonalityMonths: ['peak', 'peak', 'peak', 'available', 'off', 'off', 'off', 'off', 'off', 'off', 'available', 'peak'],
    seasonalityNote: 'Table grapes export window runs January to April. Cavendish bananas are supplied across all 12 calendar months.',
    extraNotice: {
      title: 'Dedicated Fruit Cold Chain Notice',
      content: 'Fresh fruits require precise temperature holding. Our containers are pre-cooled and dispatched under continuous GPS temperature tracking from packhouse to vessel hook.',
      badge: 'Controlled Transit',
    },
    packingPhotos: [
      {
        label: 'Pre-cooled Thompson seedless grapes inspected in 500g punnet trays',
        subtext: 'Documentary photograph · Packhouse cold room · 4:5',
        aspectRatio: '4:5',
        src: IMAGES.fruits,
      },
      {
        label: 'Export bananas clustered and packed in vacuum-sealed plastic liners',
        subtext: 'Documentary photograph · Clean packing table · 3:2',
        aspectRatio: '3:2',
        src: IMAGES.fruitsBananas,
      },
      {
        label: 'Stowage of palletized fruit cartons in 40ft High Cube Reefer container',
        subtext: 'Documentary photograph · Loading dock · 3:2',
        aspectRatio: '3:2',
        src: IMAGES.fruitsGrapes,
      },
    ],
    qualityCertifications: [
      'Official Phytosanitary Certificate',
      'Certificate of Origin',
      'GrapeNet Traceability Registration [CONFIRM]',
      'Pesticide Residue Analysis Report (NABL Laboratory)',
    ],
    documentsSupplied: [
      'Ocean Bill of Lading',
      'Commercial Invoice',
      'Detailed Packing List',
      'Phytosanitary Certificate',
      'Certificate of Origin',
      'Container Temperature Loggers Certificate',
    ],
    faqs: [
      {
        question: 'When is the Indian table grape export season active?',
        answer: 'The primary export harvest for Indian table grapes operates from January to mid-April, offering Thompson Seedless and Sonaka varieties.',
      },
      {
        question: 'How do you prevent stem browning and mold in grapes during shipment?',
        answer: 'We enforce forced-air pre-cooling within 4 hours of picking, use food-grade dual-release SO2 generator pads, and maintain -0.5°C continuously with 90-95% humidity.',
      },
      {
        question: 'Can you supply Cavendish bananas year-round?',
        answer: 'Yes. India produces bananas continuously across seasons. We source Grand Naine Cavendish bananas packed into 13kg or 18.14kg boxes year-round.',
      },
      {
        question: 'Do you offer air freight for sensitive mangoes or small trial shipments?',
        answer: 'Yes. For premium mangoes (Alphonso / Kesar) or urgent orders, we arrange air cargo consignments directly through Mumbai Chhatrapati Shivaji Airport (BOM).',
      },
      {
        question: 'What is the container loading capacity for table grapes?',
        answer: 'A 40ft High Cube Reefer accommodates approximately 2,400 cartons of 5.0 kg net each (approx. 12 Metric Tons net) palletized on 20 standard marine pallets.',
      },
    ],
    relatedSlugs: ['pomegranates', 'fresh-vegetables'],
  },

  'fresh-vegetables': {
    slug: 'fresh-vegetables',
    name: 'Fresh Vegetables',
    category: 'Fresh Vegetables',
    eyebrow: 'FRESH VEGETABLES',
    oneLiner: 'Cold-chain packed green chillies, okra, ginger and fresh vegetables by container load.',
    shortSummary: 'Commercial wholesale consignments of green chillies (G4), fresh ginger, okra (bhindi) and lemons. Harvested, sorted and packed under strict temperature control for regional distribution.',
    origin: 'Western India Horticultural Belt',
    seasonSummary: 'Supplied year-round with seasonal production cycles across growing districts.',
    keyFacts: [
      { label: 'Core Vegetables', value: 'Green Chillies (G4), Okra (Bhindi), Ginger, Lemon [CONFIRM: full list]' },
      { label: 'Harvest Cycle', value: 'Daily farm gate arrivals to packing station' },
      { label: 'Grading', value: 'Hand-sorted by size, firmness, and uniform colour' },
      { label: 'Packing', value: '4 kg / 5 kg ventilated corrugated export cartons' },
      { label: 'Shipping Mode', value: 'Reefer maritime FCL or direct Air Cargo ULD' },
    ],
    specs: [
      {
        group: 'PRODUCT',
        rows: [
          { label: 'Vegetable Types', value: 'Green Chillies (G4 / Bullet), Okra / Ladyfinger, Fresh Ginger, Seedless Lemon' },
          { label: 'Chillies Sizing', value: 'Length 6cm – 9cm, uniform green, fresh green calyx attached' },
          { label: 'Okra Sizing', value: 'Length 7cm – 10cm, tender pod, fiberless grade' },
          { label: 'Ginger Sizing', value: 'Washed and dried whole rhizomes, 100g – 250g+ hand grade' },
        ],
      },
      {
        group: 'PACKING',
        rows: [
          { label: 'Carton Construction', value: 'Heavy corrugated fiberboard (CFB) with side ventilation slots' },
          { label: 'Carton Net Weight', value: '3.5 kg / 4.0 kg / 5.0 kg net per carton' },
          { label: 'Lining Material', value: 'Breathable micro-perforated liners to prevent moisture condensation' },
          { label: 'Pallet Stacking', value: 'Interlocked pallet configuration with vertical corner guards' },
        ],
      },
      {
        group: 'SHIPPING',
        rows: [
          { label: 'Reefer Settings', value: '+8.0°C to +10.0°C for green chillies & okra (avoids chilling burn)' },
          { label: 'Air Cargo Option', value: 'Direct Unit Load Devices (ULD) via Mumbai (BOM) for quick transits' },
          { label: 'Maritime Port', value: 'JNPT / Nhava Sheva (INNSA), Mumbai' },
          { label: 'Incoterms Offered', value: 'FOB, CIF, CFR' },
        ],
      },
      {
        group: 'TERMS',
        rows: [
          { label: 'Minimum Order Quantity', value: '1 FCL Reefer (Maritime) or 1,500 kg (Air Freight consignment)' },
          { label: 'Payment Terms', value: 'Irrevocable LC at sight or Advance TT [CONFIRM]' },
          { label: 'Inspection Protocol', value: 'Phytosanitary inspection at port / airport quarantine facility' },
        ],
      },
      {
        group: 'QUALITY',
        rows: [
          { label: 'Field Heat Removal', value: 'Pre-cooled in staging cold room prior to carton sealing' },
          { label: 'Residue Verification', value: 'Tested for chemical compliance according to importing market standards' },
          { label: 'Certifications', value: 'Phytosanitary Certificate, Certificate of Origin, FSSAI' },
        ],
      },
    ],
    seasonalityMonths: ['available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available'],
    seasonalityNote: 'Vegetable crops rotate across micro-climatic zones in Maharashtra, Karnataka and Gujarat, maintaining consistent year-round supply.',
    extraNotice: {
      title: 'Perishable Logistics Notice',
      content: 'Fresh vegetables like green chillies and okra are time-sensitive. We support expedited ocean transit to Gulf ports (3-5 days voyage) or same-day air dispatch.',
      badge: 'Time-Critical Handling',
    },
    packingPhotos: [
      {
        label: 'G4 green chillies graded by length on stainless steel packhouse counter',
        subtext: 'Documentary photograph · Clean inspection environment · 4:5',
        aspectRatio: '4:5',
        src: IMAGES.vegetables,
      },
      {
        label: 'Tender export okra packed in 4kg ventilated corrugated cartons',
        subtext: 'Documentary photograph · Natural daylight · 3:2',
        aspectRatio: '3:2',
        src: IMAGES.vegetablesOkra,
      },
      {
        label: 'Consolidated vegetable pallets staged in temperature-controlled dock',
        subtext: 'Documentary photograph · Cold chain facility · 3:2',
        aspectRatio: '3:2',
        src: IMAGES.vegetablesGinger,
      },
    ],
    qualityCertifications: [
      'Official Phytosanitary Certificate (Plant Quarantine Organization)',
      'Certificate of Origin (Authorized Chamber of Commerce)',
      'FSSAI Food Safety Compliance',
      'MRL Residue Test Report',
    ],
    documentsSupplied: [
      'Air Waybill (AWB) or Ocean Bill of Lading (OBL)',
      'Commercial Invoice with HSN numbers',
      'Detailed Packing List',
      'Original Phytosanitary Certificate',
      'Certificate of Origin',
    ],
    faqs: [
      {
        question: 'How do you keep green chillies from turning red or rotting in transit?',
        answer: 'Chillies are harvested early morning, pre-cooled to extract field heat, packed with breathable liners, and maintained strictly at +8°C to +10°C. This arrests ethylene production and preserves crisp green firmness.',
      },
      {
        question: 'Do you offer air cargo shipments for fresh vegetables?',
        answer: 'Yes. For destinations requiring fast transit (like Gulf or European specialty wholesale), we ship daily palletized consignments via Mumbai International Airport (BOM).',
      },
      {
        question: 'Can we order mixed containers of chillies, okra, ginger and lemon?',
        answer: 'Yes, provided the items share compatible temperature holding protocols (+8°C to +10°C), we can consolidate multiple fresh vegetables in a single container.',
      },
      {
        question: 'What is the carton packing weight for fresh vegetables?',
        answer: 'We standardly pack in 4 kg or 5 kg net corrugated cartons. Custom packaging weights can be accommodated for bulk contract buyers.',
      },
      {
        question: 'How do you ensure phytosanitary clearance for Europe or Gulf?',
        answer: 'Every vegetable consignment is inspected by the Plant Quarantine Organization of India prior to vessel or flight departure, ensuring freedom from regulated pests.',
      },
    ],
    relatedSlugs: ['onions', 'fresh-fruits'],
  },
};
