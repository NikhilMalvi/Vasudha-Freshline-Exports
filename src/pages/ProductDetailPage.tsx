import React, { useState } from 'react';
import {
  ArrowRight,
  Check,
  Download,
  Calendar,
  Package,
  Ship,
  FileText,
  ShieldCheck,
  Award,
  ChevronDown,
  FileCheck,
  Sparkles,
  CircleDot,
  Layers,
  Apple,
  Carrot,
} from 'lucide-react';
import { IMAGES } from '../data/images';

interface ProductDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
  onOpenRfq: (product?: string) => void;
}

interface SpecItem {
  label: string;
  value: string;
}

interface MonthItem {
  month: string;
  status: 'peak' | 'available' | 'none';
}

interface ProductConfig {
  id: string;
  name: string;
  category: string;
  colorVar: string;
  tintVar: string;
  badgeClass: string;
  sentence: string;
  mainImage: string;
  thumbnails: string[];
  floatingCard: {
    season: string;
    packing: string;
    moq: string;
  };
  keyFacts: {
    variety: string;
    origin: string;
    packing: string;
    moq: string;
  };
  isOnionSeasonCard?: boolean;
  itemsWeSupply?: {
    name: string;
    img: string;
  }[];
  specGroups: {
    title: string;
    items: SpecItem[];
  }[];
  months: MonthItem[];
  isRealSeason?: boolean;
  packingCards: {
    title: string;
    desc: string;
    img: string;
  }[];
  faq: {
    q: string;
    a: string;
  }[];
  relatedProducts: {
    id: string;
    name: string;
    category: string;
    path: string;
    img: string;
    desc: string;
    colorVar: string;
    badgeClass: string;
    icon: React.ElementType;
  }[];
}

const PRODUCTS_DATA: Record<string, ProductConfig> = {
  pomegranates: {
    id: 'pomegranates',
    name: 'Pomegranates',
    category: 'Fresh fruit',
    colorVar: 'var(--crimson)',
    tintVar: 'var(--crimson-tint)',
    badgeClass: 'badge-crimson',
    sentence: 'Export-grade Bhagwa pomegranates packed in calibrated corrugated cartons.',
    mainImage: IMAGES.pomegranatesCut,
    thumbnails: [
      IMAGES.pomegranatesCut,
      IMAGES.pomegranatesBox,
      IMAGES['01-pomegranate-cut-open'],
    ],
    floatingCard: {
      season: 'July to February',
      packing: '3.5kg / 5kg cartons',
      moq: '1 container (FCL)',
    },
    keyFacts: {
      variety: 'Bhagwa (Sindhuri)',
      origin: 'Maharashtra, India',
      packing: '3.5kg / 5kg cartons',
      moq: '1 container (FCL)',
    },
    specGroups: [
      {
        title: 'PRODUCT',
        items: [
          { label: 'Variety', value: 'Bhagwa (Sindhuri)' },
          { label: 'Origin', value: 'Maharashtra, India' },
          { label: 'Size or grade', value: 'Count 9 to 15 (200g - 400g+ per piece)' },
          { label: 'Colour', value: 'Glossy deep ruby red skin with dark crimson arils' },
        ],
      },
      {
        title: 'PACKING',
        items: [
          { label: 'Packing type', value: 'Ventilated 5-ply corrugated export cartons with foam netting' },
          { label: 'Net weight', value: '3.5 kg / 5.0 kg net per box' },
          { label: 'Labelling', value: 'Buyer specifications, barcode, and regulatory marks' },
        ],
      },
      {
        title: 'SHIPPING',
        items: [
          { label: 'Container type', value: '40ft High Cube Reefer (+5°C to +7°C, 90-95% RH)' },
          { label: 'Quantity per container', value: 'Approx. 4,400 to 5,000 cartons on 20 fumigated pallets' },
          { label: 'Port of loading', value: 'Nhava Sheva (JNPT) / Mundra, India' },
          { label: 'Trade terms', value: 'FOB, CIF, CFR per Incoterms 2020' },
        ],
      },
      {
        title: 'TERMS',
        items: [
          { label: 'Minimum order', value: '1 container (FCL)' },
          { label: 'Payment terms', value: '30% advance T/T, balance against shipping documents / L/C' },
          { label: 'Samples', value: 'Pre-shipment photo & video reports, airfreight samples on request' },
        ],
      },
    ],
    months: [
      { month: 'Jan', status: 'peak' },
      { month: 'Feb', status: 'available' },
      { month: 'Mar', status: 'none' },
      { month: 'Apr', status: 'none' },
      { month: 'May', status: 'none' },
      { month: 'Jun', status: 'none' },
      { month: 'Jul', status: 'available' },
      { month: 'Aug', status: 'available' },
      { month: 'Sep', status: 'available' },
      { month: 'Oct', status: 'peak' },
      { month: 'Nov', status: 'peak' },
      { month: 'Dec', status: 'peak' },
    ],
    packingCards: [
      {
        title: 'Packhouse Sorting',
        desc: 'Manual calibration and Brix testing with individual protective foam net wrappers.',
        img: IMAGES.packhouseInspection,
      },
      {
        title: 'Palletising & Strapping',
        desc: 'Vented cartons stacked on treated pallets with reinforced corner angle boards.',
        img: IMAGES.portContainers,
      },
      {
        title: 'Reefer Container Stuffing',
        desc: 'Pre-cooled 40ft reefer loading maintaining cold chain at +5°C throughout transit.',
        img: IMAGES.containerLoading,
      },
    ],
    faq: [
      {
        q: 'Which pomegranate variety do you export and what is the Brix level?',
        a: 'We primarily export the renowned Bhagwa (Sindhuri) variety, recognized for its deep ruby-red arils, soft chewable seeds, and a balanced natural sweetness of 15° to 16° Brix.',
      },
      {
        q: 'What packaging sizes and fruit counts are available?',
        a: 'Our standard packs are 3.5 kg net (Counts 9, 10, 12, 14) and 5.0 kg net (Counts 12, 15, 18), packed in telescopic corrugated boxes with foam nettings.',
      },
      {
        q: 'What is the minimum order quantity for ocean shipments?',
        a: 'The minimum order quantity is 1 container (FCL), equivalent to one 40ft refrigerated container carrying approx. 4,400 to 5,000 cartons on 20 pallets.',
      },
      {
        q: 'Can we inspect samples or receive pre-shipment quality logs?',
        a: 'Yes. We provide digital fruit count, Brix, and weight verification videos before container sealing, and can dispatch commercial samples via air cargo.',
      },
    ],
    relatedProducts: [
      {
        id: 'onions',
        name: 'Onions',
        category: 'Fresh vegetable',
        path: '/products/onions',
        img: IMAGES.onionsMesh,
        desc: 'Red onions in mesh bags, October to April.',
        colorVar: 'var(--plum)',
        badgeClass: 'badge-plum',
        icon: CircleDot,
      },
      {
        id: 'fresh-fruits',
        name: 'Fresh fruits',
        category: 'Fresh fruit',
        path: '/products/fresh-fruits',
        img: IMAGES.fruits,
        desc: 'Seasonal fresh fruit for export.',
        colorVar: 'var(--teal)',
        badgeClass: 'badge-teal',
        icon: Apple,
      },
    ],
  },

  onions: {
    id: 'onions',
    name: 'Onions',
    category: 'Fresh vegetable',
    colorVar: 'var(--plum)',
    tintVar: 'var(--plum-tint)',
    badgeClass: 'badge-plum',
    sentence: 'Red onions for container shipments, October to April.',
    mainImage: IMAGES.onionsMesh,
    thumbnails: [
      IMAGES.onions,
      IMAGES.onionsMesh,
      IMAGES.onionsSortingHands,
    ],
    floatingCard: {
      season: 'October to April (Peak Dec–Feb)',
      packing: '25kg / 50kg mesh bags',
      moq: '1 container (FCL)',
    },
    keyFacts: {
      variety: 'Nashik Red / Garwa & Pol',
      origin: 'Maharashtra, India',
      packing: '25kg / 50kg mesh bags',
      moq: '1 container (FCL)',
    },
    isOnionSeasonCard: true,
    specGroups: [
      {
        title: 'PRODUCT',
        items: [
          { label: 'Variety', value: 'Nashik Red (Garwa / Pol / Rangda)' },
          { label: 'Origin', value: 'Nashik, Maharashtra, India' },
          { label: 'Size or grade', value: '45mm - 55mm / 50mm - 60mm / 60mm+' },
          { label: 'Colour', value: 'Dark red / light pink cured outer skins' },
        ],
      },
      {
        title: 'PACKING',
        items: [
          { label: 'Packing type', value: 'Breathable leno mesh bags with drawstring' },
          { label: 'Net weight', value: '10kg / 20kg / 25kg / 50kg net' },
          { label: 'Labelling', value: 'Standard export print or custom private brand tag' },
        ],
      },
      {
        title: 'SHIPPING',
        items: [
          { label: 'Container type', value: '40ft High Cube Reefer (vented) or Ventilated Dry Box' },
          { label: 'Quantity per container', value: '28 to 29 Metric Tonnes (approx. 1,120 to 1,160 × 25kg bags)' },
          { label: 'Port of loading', value: 'Nhava Sheva (JNPT) / Mundra, India' },
          { label: 'Trade terms', value: 'FOB, CIF, CFR per Incoterms 2020' },
        ],
      },
      {
        title: 'TERMS',
        items: [
          { label: 'Minimum order', value: '1 container (FCL)' },
          { label: 'Payment terms', value: '30% advance T/T, balance against shipping documents' },
          { label: 'Samples', value: 'Pre-shipment batch sizing photos and weight tickets' },
        ],
      },
    ],
    isRealSeason: true,
    months: [
      { month: 'Jan', status: 'peak' },
      { month: 'Feb', status: 'peak' },
      { month: 'Mar', status: 'available' },
      { month: 'Apr', status: 'available' },
      { month: 'May', status: 'none' },
      { month: 'Jun', status: 'none' },
      { month: 'Jul', status: 'none' },
      { month: 'Aug', status: 'none' },
      { month: 'Sep', status: 'none' },
      { month: 'Oct', status: 'available' },
      { month: 'Nov', status: 'available' },
      { month: 'Dec', status: 'peak' },
    ],
    packingCards: [
      {
        title: 'Curing & Sizing',
        desc: 'Field-cured dry skins, mechanically sorted into 45mm+, 50mm+, and 60mm+ calibers.',
        img: IMAGES.onionsSortingHands,
      },
      {
        title: 'Mesh Bag Packing',
        desc: 'Breathable heavy-duty red/yellow leno bags allowing optimal in-transit airflow.',
        img: IMAGES.onionsMesh,
      },
      {
        title: 'Container Loading',
        desc: 'Careful container floor stuffing up to 29 MT with active ventilation.',
        img: IMAGES.containerLoading,
      },
    ],
    faq: [
      {
        q: 'What size calibers are available for export?',
        a: 'We supply 45mm - 55mm, 50mm - 60mm, and 60mm+ grades. All bulbs are well cured with tight necks and dry, intact outer skins.',
      },
      {
        q: 'What packaging configurations do you offer?',
        a: 'Red leno mesh bags in 10 kg, 20 kg, 25 kg, and 50 kg capacities. Palletized loading is also available on request.',
      },
      {
        q: 'What is the container loading capacity?',
        a: 'A 40ft container carries approximately 28 to 29 metric tonnes of mesh bags in floor-stuffed arrangement.',
      },
      {
        q: 'How do you prevent sprouting during ocean transit?',
        a: 'We export fully cured, dormant Nashik stock packed under controlled humidity with active container ventilation, guaranteeing 20+ days transit stability.',
      },
    ],
    relatedProducts: [
      {
        id: 'pomegranates',
        name: 'Pomegranates',
        category: 'Fresh fruit',
        path: '/products/pomegranates',
        img: IMAGES.pomegranatesCut,
        desc: 'Export-grade fruit packed in cartons.',
        colorVar: 'var(--crimson)',
        badgeClass: 'badge-crimson',
        icon: Sparkles,
      },
      {
        id: 'fresh-vegetables',
        name: 'Fresh vegetables',
        category: 'Fresh vegetable',
        path: '/products/fresh-vegetables',
        img: IMAGES.vegetables,
        desc: 'Seasonal fresh vegetables for export.',
        colorVar: 'var(--leaf)',
        badgeClass: 'badge-leaf',
        icon: Carrot,
      },
    ],
  },

  rice: {
    id: 'rice',
    name: 'Rice',
    category: 'Grain',
    colorVar: 'var(--saffron)',
    tintVar: 'var(--saffron-tint)',
    badgeClass: 'badge-saffron',
    sentence: 'Basmati and non-basmati rice, shipped in bulk and bagged container lots.',
    mainImage: IMAGES.riceGrains,
    thumbnails: [
      IMAGES.riceGrains,
      IMAGES.riceSack,
      IMAGES['06-rice-grains-scoop'],
    ],
    floatingCard: {
      season: 'Year-round (Aged stock)',
      packing: '10kg / 25kg / 50kg bags',
      moq: '1 container (FCL)',
    },
    keyFacts: {
      variety: '1121 Basmati / Sona Masoori',
      origin: 'Punjab & Haryana, India',
      packing: '10kg / 25kg / 50kg bags',
      moq: '1 container (FCL)',
    },
    specGroups: [
      {
        title: 'PRODUCT',
        items: [
          { label: 'Variety', value: '1121 Pusa Basmati / Traditional / Sona Masoori' },
          { label: 'Origin', value: 'Indo-Gangetic Plains, India' },
          { label: 'Size or grade', value: 'Average grain length: 8.35mm+ (1121) / 5.2mm (Non-Basmati)' },
          { label: 'Colour', value: 'Creamy white / golden parboiled (Sella)' },
        ],
      },
      {
        title: 'PACKING',
        items: [
          { label: 'Packing type', value: 'Non-woven, BOPP, multi-wall paper, or PP woven bags' },
          { label: 'Net weight', value: '5kg, 10kg, 20kg, 25kg, and 50kg' },
          { label: 'Labelling', value: 'Full customized private label graphic printing supported' },
        ],
      },
      {
        title: 'SHIPPING',
        items: [
          { label: 'Container type', value: '20ft Heavy Tested Dry Container (with kraft paper lining)' },
          { label: 'Quantity per container', value: '25 to 26 Metric Tonnes per 20ft box' },
          { label: 'Port of loading', value: 'Mundra / Kandla, India' },
          { label: 'Trade terms', value: 'FOB, CIF, CFR per Incoterms 2020' },
        ],
      },
      {
        title: 'TERMS',
        items: [
          { label: 'Minimum order', value: '1 container (FCL)' },
          { label: 'Payment terms', value: '30% advance T/T, balance against shipping documents / L/C' },
          { label: 'Samples', value: 'Certified laboratory grain test samples airfreighted on request' },
        ],
      },
    ],
    months: [
      { month: 'Jan', status: 'available' },
      { month: 'Feb', status: 'available' },
      { month: 'Mar', status: 'available' },
      { month: 'Apr', status: 'available' },
      { month: 'May', status: 'available' },
      { month: 'Jun', status: 'available' },
      { month: 'Jul', status: 'available' },
      { month: 'Aug', status: 'available' },
      { month: 'Sep', status: 'available' },
      { month: 'Oct', status: 'peak' },
      { month: 'Nov', status: 'peak' },
      { month: 'Dec', status: 'peak' },
    ],
    packingCards: [
      {
        title: 'Sortex Cleaning',
        desc: 'Advanced optical color sorters removing broken kernels and foreign particles to 99.5% purity.',
        img: IMAGES.packhouseInspection,
      },
      {
        title: 'Moisture Barrier Packing',
        desc: 'Laminated moisture-proof bags maintaining grain dryness below 12.5%.',
        img: IMAGES.riceSack,
      },
      {
        title: 'Container Lining & Desiccants',
        desc: 'Heavy kraft paper insulation and hanging silica gel bags protecting cargo during ocean transit.',
        img: IMAGES.containerLoading,
      },
    ],
    faq: [
      {
        q: 'Which Basmati and non-Basmati grades do you provide?',
        a: 'We supply aged 1121 Raw & Steam Basmati, 1509 Basmati, Sugandha, Sharbati, PR11/14, and Sona Masoori rice.',
      },
      {
        q: 'How long has the Basmati rice been aged?',
        a: 'Our premium export Basmati is aged for a minimum of 12 to 24 months, providing superior elongation (over 2.5×) without stickiness upon cooking.',
      },
      {
        q: 'Can you pack under our private supermarket brand?',
        a: 'Yes. We offer turnkey private labelling in BOPP, non-woven fabric, and master cartons with your custom brand artwork.',
      },
      {
        q: 'What is the standard container capacity for rice shipments?',
        a: 'A 20ft container carries 25 to 26 metric tonnes of bagged rice, maximizing weight economics per container.',
      },
    ],
    relatedProducts: [
      {
        id: 'spices',
        name: 'Spices',
        category: 'Spice',
        path: '/products/spices',
        img: IMAGES.spices,
        desc: 'Whole and ground spices.',
        colorVar: 'var(--blue)',
        badgeClass: 'badge-blue',
        icon: Package,
      },
      {
        id: 'pomegranates',
        name: 'Pomegranates',
        category: 'Fresh fruit',
        path: '/products/pomegranates',
        img: IMAGES.pomegranatesCut,
        desc: 'Export-grade fruit packed in cartons.',
        colorVar: 'var(--crimson)',
        badgeClass: 'badge-crimson',
        icon: Sparkles,
      },
    ],
  },

  spices: {
    id: 'spices',
    name: 'Spices',
    category: 'Spice',
    colorVar: 'var(--blue)',
    tintVar: 'var(--blue-tint)',
    badgeClass: 'badge-blue',
    sentence: 'Whole and ground Indian spices processed and packed for export.',
    mainImage: IMAGES.spices,
    thumbnails: [
      IMAGES.spices,
      IMAGES.spicesCumin,
      IMAGES.spicesTurmeric,
    ],
    floatingCard: {
      season: 'Year-round harvest',
      packing: '25kg / 50kg jute & PP bags',
      moq: '1 container (FCL)',
    },
    keyFacts: {
      variety: 'Cumin, Turmeric, Chilli, Coriander',
      origin: 'Gujarat & Rajasthan, India',
      packing: '25kg / 50kg jute & PP bags',
      moq: '1 container (FCL)',
    },
    specGroups: [
      {
        title: 'PRODUCT',
        items: [
          { label: 'Variety', value: 'Cumin (Jeera), Turmeric (Salem/Nizamabad), Red Chilli (Teja), Coriander' },
          { label: 'Origin', value: 'Western & Southern India' },
          { label: 'Size or grade', value: 'Machine Cleaned 99% / Sortex 99.5% / Ground powders' },
          { label: 'Colour', value: 'Natural uniform aromatic whole spices, zero artificial dyes' },
        ],
      },
      {
        title: 'PACKING',
        items: [
          { label: 'Packing type', value: 'Multi-layer paper bags, poly-lined jute sacks, or woven PP bags' },
          { label: 'Net weight', value: '25 kg / 50 kg net' },
          { label: 'Labelling', value: 'Food-grade batch code, harvest year, and gross/net marks' },
        ],
      },
      {
        title: 'SHIPPING',
        items: [
          { label: 'Container type', value: '20ft / 40ft Dry Freight Container with moisture barrier' },
          { label: 'Quantity per container', value: '18 to 22 MT per 20ft box (commodity density dependent)' },
          { label: 'Port of loading', value: 'Mundra / Nhava Sheva (JNPT), India' },
          { label: 'Trade terms', value: 'FOB, CIF, CFR per Incoterms 2020' },
        ],
      },
      {
        title: 'TERMS',
        items: [
          { label: 'Minimum order', value: '1 container (FCL)' },
          { label: 'Payment terms', value: '30% advance T/T, balance against shipping documents / L/C' },
          { label: 'Samples', value: 'Lab-tested volatile oil & purity sample packets available' },
        ],
      },
    ],
    months: [
      { month: 'Jan', status: 'available' },
      { month: 'Feb', status: 'peak' },
      { month: 'Mar', status: 'peak' },
      { month: 'Apr', status: 'peak' },
      { month: 'May', status: 'available' },
      { month: 'Jun', status: 'available' },
      { month: 'Jul', status: 'available' },
      { month: 'Aug', status: 'available' },
      { month: 'Sep', status: 'available' },
      { month: 'Oct', status: 'available' },
      { month: 'Nov', status: 'available' },
      { month: 'Dec', status: 'available' },
    ],
    packingCards: [
      {
        title: 'Optical Cleaning',
        desc: 'Sortex cleaned to eliminate dust, light seeds, and foreign materials.',
        img: IMAGES.spicesCumin,
      },
      {
        title: 'Aroma-Sealed Packaging',
        desc: 'Food-grade inner poly liners preserving volatile essential oils and aroma.',
        img: IMAGES.spicesTurmeric,
      },
      {
        title: 'Fumigated Stuffing',
        desc: 'Strict fumigation per destination country phytosanitary protocols before export dispatch.',
        img: IMAGES.containerLoading,
      },
    ],
    faq: [
      {
        q: 'Which specific whole and ground spices do you export?',
        a: 'Our core volume includes Cumin seeds (Europe / Singapore grade), Turmeric fingers & powder (curcumin 2.5% to 5%), Red Chilli (Teja / S17 / Sanam), Coriander seeds, and Black Pepper.',
      },
      {
        q: 'Are your spices tested for chemical residues and aflatoxin?',
        a: 'Yes. Every batch is certified for pesticide residue limits, aflatoxin, Salmonella, and heavy metals at NABL-accredited laboratories prior to stuffing.',
      },
      {
        q: 'Can we order mixed spice pallets in one container?',
        a: 'Subject to customs and cargo compatibility, we accommodate consolidated spice containers featuring multiple commodities on pallets.',
      },
      {
        q: 'What is the minimum order quantity?',
        a: '1 container (FCL), typically 18 to 22 metric tonnes in a 20ft container depending on spice density.',
      },
    ],
    relatedProducts: [
      {
        id: 'rice',
        name: 'Rice',
        category: 'Grain',
        path: '/products/rice',
        img: IMAGES.riceGrains,
        desc: 'Basmati and non-basmati grades.',
        colorVar: 'var(--saffron)',
        badgeClass: 'badge-saffron',
        icon: Layers,
      },
      {
        id: 'onions',
        name: 'Onions',
        category: 'Fresh vegetable',
        path: '/products/onions',
        img: IMAGES.onionsMesh,
        desc: 'Red onions in mesh bags, October to April.',
        colorVar: 'var(--plum)',
        badgeClass: 'badge-plum',
        icon: CircleDot,
      },
    ],
  },

  'fresh-fruits': {
    id: 'fresh-fruits',
    name: 'Fresh fruits',
    category: 'Fresh fruit',
    colorVar: 'var(--teal)',
    tintVar: 'var(--teal-tint)',
    badgeClass: 'badge-teal',
    sentence: 'Seasonal fresh fruit for export by the container, handled through cold-chain packhouses.',
    mainImage: IMAGES.fruits,
    thumbnails: [
      IMAGES.fruits,
      IMAGES.fruitsGrapes,
      IMAGES.fruitsBananas,
    ],
    floatingCard: {
      season: 'Seasonal calendars',
      packing: '4.5kg / 7kg / 13kg cartons',
      moq: '1 container (FCL)',
    },
    keyFacts: {
      variety: 'Grapes, Bananas, Mangoes, Papayas',
      origin: 'Maharashtra & Gujarat, India',
      packing: 'Calibrated export cartons',
      moq: '1 container (FCL)',
    },
    itemsWeSupply: [
      { name: 'Table Grapes (Sonaka & Thompson)', img: IMAGES.fruitsGrapes },
      { name: 'Cavendish Bananas (G9)', img: IMAGES.fruitsBananas },
      { name: 'Alphonso & Kesar Mangoes', img: IMAGES.fruits },
      { name: 'Fresh Papayas (Red Lady)', img: IMAGES.fruits },
      { name: 'Pink & White Guavas', img: IMAGES.fruits },
      { name: 'Fresh Watermelons', img: IMAGES.fruits },
    ],
    specGroups: [
      {
        title: 'PRODUCT',
        items: [
          { label: 'Variety', value: 'Table Grapes, Cavendish Bananas (Grand Naine), Mangoes, Papayas' },
          { label: 'Origin', value: 'Maharashtra, Gujarat, Tamil Nadu, India' },
          { label: 'Size or grade', value: 'Calibrated berry/finger size, export Grade A standards' },
          { label: 'Colour', value: 'Uniform natural skin hue, zero sun-scald or pest scars' },
        ],
      },
      {
        title: 'PACKING',
        items: [
          { label: 'Packing type', value: 'Ventilated 5-ply cartons with MAP liners and ethylene absorbers' },
          { label: 'Net weight', value: '4.5kg, 5.0kg, 7.0kg, or 13.5kg net' },
          { label: 'Labelling', value: 'Global traceability QR, farm origin code, weight specifications' },
        ],
      },
      {
        title: 'SHIPPING',
        items: [
          { label: 'Container type', value: '40ft High Cube Controlled Atmosphere (CA) / Reefer Container' },
          { label: 'Quantity per container', value: 'Approx. 1,540 to 2,400 cartons (configuration dependent)' },
          { label: 'Port of loading', value: 'Nhava Sheva (JNPT), Mumbai, India' },
          { label: 'Trade terms', value: 'FOB, CIF, CFR per Incoterms 2020' },
        ],
      },
      {
        title: 'TERMS',
        items: [
          { label: 'Minimum order', value: '1 container (FCL)' },
          { label: 'Payment terms', value: '30% advance T/T, balance against shipping documents' },
          { label: 'Samples', value: 'Pre-cooling logs, Brix calibration sheets and inspection photos' },
        ],
      },
    ],
    months: [
      { month: 'Jan', status: 'peak' },
      { month: 'Feb', status: 'peak' },
      { month: 'Mar', status: 'peak' },
      { month: 'Apr', status: 'available' },
      { month: 'May', status: 'available' },
      { month: 'Jun', status: 'available' },
      { month: 'Jul', status: 'available' },
      { month: 'Aug', status: 'available' },
      { month: 'Sep', status: 'available' },
      { month: 'Oct', status: 'available' },
      { month: 'Nov', status: 'peak' },
      { month: 'Dec', status: 'peak' },
    ],
    packingCards: [
      {
        title: 'Forced-Air Pre-Cooling',
        desc: 'Rapid temperature reduction within 4 hours of harvest to arrest ripening.',
        img: IMAGES.fruitsGrapes,
      },
      {
        title: 'MAP Protective Liners',
        desc: 'Modified Atmosphere Packaging bags preserving moisture and controlling respiration.',
        img: IMAGES.packhouseInspection,
      },
      {
        title: 'Controlled Atmosphere Reefers',
        desc: 'Precision ocean reefers maintaining continuous temperature and humidity logging.',
        img: IMAGES.containerLoading,
      },
    ],
    faq: [
      {
        q: 'Which fresh fruits do you export in container volumes?',
        a: 'Our primary export volumes comprise Indian Table Grapes (Jan-Apr), Cavendish G9 Bananas (Year-round), seasonal Mangoes (Apr-Jun), and Red Lady Papayas.',
      },
      {
        q: 'How is cold chain integrity maintained from farm to port?',
        a: 'Produce is harvested early morning, brought immediately to certified packhouses, pre-cooled in forced-air tunnels, and loaded directly into reefers on dock.',
      },
      {
        q: 'What is the minimum order quantity?',
        a: '1 container (FCL), typically one 40ft refrigerated container holding 1,540 to 2,400 cartons depending on pallet height.',
      },
      {
        q: 'Do shipments comply with European and Middle Eastern residue norms?',
        a: 'Yes. All orchard batches are tested at APEDA-recognized laboratories to ensure 100% compliance with destination MRL limits.',
      },
    ],
    relatedProducts: [
      {
        id: 'pomegranates',
        name: 'Pomegranates',
        category: 'Fresh fruit',
        path: '/products/pomegranates',
        img: IMAGES.pomegranatesCut,
        desc: 'Export-grade fruit packed in cartons.',
        colorVar: 'var(--crimson)',
        badgeClass: 'badge-crimson',
        icon: Sparkles,
      },
      {
        id: 'fresh-vegetables',
        name: 'Fresh vegetables',
        category: 'Fresh vegetable',
        path: '/products/fresh-vegetables',
        img: IMAGES.vegetables,
        desc: 'Seasonal fresh vegetables for export.',
        colorVar: 'var(--leaf)',
        badgeClass: 'badge-leaf',
        icon: Carrot,
      },
    ],
  },

  'fresh-vegetables': {
    id: 'fresh-vegetables',
    name: 'Fresh vegetables',
    category: 'Fresh vegetable',
    colorVar: 'var(--leaf)',
    tintVar: 'var(--leaf-tint)',
    badgeClass: 'badge-leaf',
    sentence: 'Seasonal fresh vegetables for export, sorted and packed to international specifications.',
    mainImage: IMAGES.vegetables,
    thumbnails: [
      IMAGES.vegetables,
      IMAGES.vegetablesOkra,
      IMAGES.vegetablesGinger,
    ],
    floatingCard: {
      season: 'Year-round rotational',
      packing: '4kg / 5kg / 10kg cartons',
      moq: '1 container (FCL)',
    },
    keyFacts: {
      variety: 'Green Chillies, Okra, Ginger, Drumstick',
      origin: 'Maharashtra & Karnataka, India',
      packing: 'Perforated export cartons',
      moq: '1 container (FCL)',
    },
    itemsWeSupply: [
      { name: 'Green Chillies (G4 & Bullet)', img: IMAGES.vegetables },
      { name: 'Fresh Okra (Lady Finger)', img: IMAGES.vegetablesOkra },
      { name: 'Fresh Ginger (Whole Rhizomes)', img: IMAGES.vegetablesGinger },
      { name: 'Red & White Onions', img: IMAGES.onionsMesh },
      { name: 'Fresh Drumsticks (Moringa)', img: IMAGES.vegetables },
      { name: 'Bitter Gourd (Karela) & Bottle Gourd', img: IMAGES.vegetables },
    ],
    specGroups: [
      {
        title: 'PRODUCT',
        items: [
          { label: 'Variety', value: 'G4 Green Chillies, Fresh Okra, Moringa Drumsticks, Ginger, Bottle Gourd' },
          { label: 'Origin', value: 'Western & Southern India' },
          { label: 'Size or grade', value: 'Calibrated pod length: Chillies 7-10cm / Okra 8-12cm' },
          { label: 'Colour', value: 'Bright uniform natural green, crisp and fiber-free' },
        ],
      },
      {
        title: 'PACKING',
        items: [
          { label: 'Packing type', value: 'Corrugated cartons with air circulation vents and parchment paper lining' },
          { label: 'Net weight', value: '4.0kg, 5.0kg, or 10.0kg net' },
          { label: 'Labelling', value: 'Barcoded export carton labeling with net weight and packing date' },
        ],
      },
      {
        title: 'SHIPPING',
        items: [
          { label: 'Container type', value: '40ft High Cube Reefer (+8°C to +12°C depending on commodity)' },
          { label: 'Quantity per container', value: 'Approx. 2,000 to 3,200 cartons on pallets' },
          { label: 'Port of loading', value: 'Nhava Sheva (JNPT) / Air Cargo Mumbai, India' },
          { label: 'Trade terms', value: 'FOB, CIF, CFR per Incoterms 2020' },
        ],
      },
      {
        title: 'TERMS',
        items: [
          { label: 'Minimum order', value: '1 container (FCL)' },
          { label: 'Payment terms', value: '30% advance T/T, balance against shipping documents' },
          { label: 'Samples', value: 'Inspection video recordings and sorting lot certificates' },
        ],
      },
    ],
    months: [
      { month: 'Jan', status: 'available' },
      { month: 'Feb', status: 'available' },
      { month: 'Mar', status: 'available' },
      { month: 'Apr', status: 'available' },
      { month: 'May', status: 'available' },
      { month: 'Jun', status: 'available' },
      { month: 'Jul', status: 'available' },
      { month: 'Aug', status: 'available' },
      { month: 'Sep', status: 'available' },
      { month: 'Oct', status: 'available' },
      { month: 'Nov', status: 'peak' },
      { month: 'Dec', status: 'peak' },
    ],
    packingCards: [
      {
        title: 'Sanitization & Grading',
        desc: 'Manual sorting for uniform length, thickness, and complete defect removal.',
        img: IMAGES.vegetablesOkra,
      },
      {
        title: 'Ventilated Carton Packing',
        desc: 'Food-grade moisture-absorbing paper inside perforated corrugated master boxes.',
        img: IMAGES.vegetablesGinger,
      },
      {
        title: 'Fast Reefer Dispatch',
        desc: 'Temperature regulated reefer loading (+9°C to +11°C) with real-time temperature tracking.',
        img: IMAGES.containerLoading,
      },
    ],
    faq: [
      {
        q: 'Which vegetables are available for sea container export?',
        a: 'We regularly ship G4 Green Chillies, Fresh Okra, Fresh Ginger, Moringa Drumsticks, and seasonal Gourds under strict cold-chain supervision.',
      },
      {
        q: 'How do you prevent condensation and decay during transit?',
        a: 'Vegetables are pre-cooled to remove field heat and packed with breathable food-grade liners in perforated cartons to allow uniform cold-air circulation.',
      },
      {
        q: 'What is the minimum order quantity?',
        a: '1 container (FCL). For highly perishable specialty greens, we also facilitate consolidated airfreight shipments.',
      },
      {
        q: 'Do you provide phytosanitary certification?',
        a: 'Yes. Every shipment includes government phytosanitary inspection certificates and pest-free declarations before vessel departure.',
      },
    ],
    relatedProducts: [
      {
        id: 'onions',
        name: 'Onions',
        category: 'Fresh vegetable',
        path: '/products/onions',
        img: IMAGES.onionsMesh,
        desc: 'Red onions in mesh bags, October to April.',
        colorVar: 'var(--plum)',
        badgeClass: 'badge-plum',
        icon: CircleDot,
      },
      {
        id: 'fresh-fruits',
        name: 'Fresh fruits',
        category: 'Fresh fruit',
        path: '/products/fresh-fruits',
        img: IMAGES.fruits,
        desc: 'Seasonal fresh fruit for export.',
        colorVar: 'var(--teal)',
        badgeClass: 'badge-teal',
        icon: Apple,
      },
    ],
  },
};

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  slug,
  onNavigate,
  onOpenRfq,
}) => {
  const productKey = PRODUCTS_DATA[slug] ? slug : 'pomegranates';
  const product = PRODUCTS_DATA[productKey];

  // Image Gallery state
  const [activeImage, setActiveImage] = useState<string>(product.mainImage);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Quote Form inside product detail page (Preselected with THIS product only)
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phoneCode: '+971',
    mobile: '',
    product: product.name,
    quantityNum: '',
    quantityUnit: 'containers',
    destinationCountry: '',
    companyName: '',
    email: '',
  });

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitting(true);
    setTimeout(() => {
      setFormSubmitting(false);
      setFormSubmitted(true);
    }, 600);
  };

  const scrollToQuote = () => {
    const el = document.getElementById('product-quote-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      onOpenRfq(product.name);
    }
  };

  const whatsappUrl = `https://wa.me/910000000000?text=Hello%20Vasudha%20Freshline%20Exports%20LLP,%20I%20would%20like%20to%20request%20a%20quote%20for%20${encodeURIComponent(product.name)}.`;

  return (
    <div className="product-detail-page-flow" style={{ width: '100%', overflow: 'hidden' }}>
      {/* =====================================================================
          1. HERO (white with two glows, split)
          Breadcrumb above: Home / Products / [Product]
          Left: category pill (tint), H1 (Manrope 800, 52px), sentence, 2 buttons, 3 ticks
          Right: 4:5 image, 3 thumbnails, floating card with product colour top bar
          ===================================================================== */}
      <section className="section section-white has-glows" style={{ paddingTop: '32px', paddingBottom: '72px' }}>
        <div className="glow-orb glow-leaf-tl" aria-hidden="true" />
        <div className="glow-orb glow-blue-br" aria-hidden="true" />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          {/* Breadcrumb */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '13px',
              color: 'var(--muted)',
              marginBottom: '32px',
            }}
            aria-label="Breadcrumb"
          >
            <button
              type="button"
              onClick={() => onNavigate('/')}
              style={{ background: 'none', border: 'none', padding: 0, color: 'var(--muted)', cursor: 'pointer', fontSize: '13px' }}
            >
              Home
            </button>
            <span>/</span>
            <button
              type="button"
              onClick={() => onNavigate('/products')}
              style={{ background: 'none', border: 'none', padding: 0, color: 'var(--muted)', cursor: 'pointer', fontSize: '13px' }}
            >
              Products
            </button>
            <span>/</span>
            <span style={{ color: 'var(--navy)', fontWeight: 600 }}>{product.name}</span>
          </nav>

          {/* Split Hero Layout */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
              gap: '56px',
              alignItems: 'center',
            }}
          >
            {/* Left Content */}
            <div>
              <div style={{ marginBottom: '14px' }}>
                <span
                  className="eyebrow"
                  style={{
                    backgroundColor: product.tintVar,
                    color: product.colorVar,
                    fontSize: '12px',
                    padding: '5px 14px',
                  }}
                >
                  {product.category}
                </span>
              </div>

              <h1
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  fontSize: 'clamp(36px, 4.5vw, 52px)',
                  lineHeight: '1.14',
                  color: 'var(--navy)',
                  margin: '0 0 16px 0',
                  letterSpacing: '-0.02em',
                }}
              >
                {product.name}
              </h1>

              <p
                style={{
                  fontSize: '18px',
                  lineHeight: '28px',
                  color: 'var(--body)',
                  marginBottom: '28px',
                  maxWidth: '540px',
                }}
              >
                {product.sentence}
              </p>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '32px' }}>
                <button
                  type="button"
                  className="btn-primary"
                  onClick={scrollToQuote}
                >
                  <span>Request a quote for {product.name}</span>
                  <ArrowRight size={16} />
                </button>

                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => onOpenRfq(product.name)}
                >
                  <Download size={16} />
                  <span>Download spec sheet</span>
                </button>
              </div>

              {/* Three Olive/Leaf Ticks */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: 'var(--body)' }}>
                  <div
                    style={{
                      width: '22px',
                      height: '22px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--leaf-tint)',
                      color: 'var(--leaf)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span>Clear specifications</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: 'var(--body)' }}>
                  <div
                    style={{
                      width: '22px',
                      height: '22px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--leaf-tint)',
                      color: 'var(--leaf)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span>Documents with every shipment</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: 'var(--body)' }}>
                  <div
                    style={{
                      width: '22px',
                      height: '22px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--leaf-tint)',
                      color: 'var(--leaf)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span>Replies within 4 hours</span>
                </div>
              </div>
            </div>

            {/* Right Media Gallery */}
            <div style={{ position: 'relative' }}>
              {/* Main Rounded Image (4:5) */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '4 / 5',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-md)',
                  backgroundColor: 'var(--mist)',
                }}
              >
                <img
                  src={activeImage}
                  alt={product.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'opacity 0.3s ease',
                  }}
                />

                {/* Floating Card on Lower-Left corner with 4px top bar */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '20px',
                    right: '20px',
                    backgroundColor: 'var(--white)',
                    borderRadius: '16px',
                    padding: '16px 20px',
                    boxShadow: 'var(--shadow-lg)',
                    border: '1px solid rgba(255, 255, 255, 0.8)',
                    zIndex: 2,
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '4px',
                      backgroundColor: product.colorVar,
                      borderTopLeftRadius: '16px',
                      borderTopRightRadius: '16px',
                    }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
                    <div>
                      <div style={{ fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase', fontWeight: 600 }}>Season</div>
                      <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--navy)' }}>{product.floatingCard.season}</div>
                    </div>
                    <div style={{ width: '1px', height: '24px', backgroundColor: 'var(--line)' }} />
                    <div>
                      <div style={{ fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase', fontWeight: 600 }}>Packing</div>
                      <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--navy)' }}>{product.floatingCard.packing}</div>
                    </div>
                    <div style={{ width: '1px', height: '24px', backgroundColor: 'var(--line)' }} />
                    <div>
                      <div style={{ fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase', fontWeight: 600 }}>Min. Order</div>
                      <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--leaf)' }}>{product.floatingCard.moq}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Three Thumbnails */}
              <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
                {product.thumbnails.map((thumb, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImage(thumb)}
                    style={{
                      flex: 1,
                      aspectRatio: '1',
                      borderRadius: '14px',
                      overflow: 'hidden',
                      padding: 0,
                      border: activeImage === thumb ? `3px solid ${product.colorVar}` : '2px solid transparent',
                      cursor: 'pointer',
                      boxShadow: 'var(--shadow-xs)',
                      backgroundColor: 'var(--mist)',
                      transition: 'border 0.2s ease, transform 0.2s ease',
                      transform: activeImage === thumb ? 'scale(1.02)' : 'none',
                    }}
                  >
                    <img
                      src={thumb}
                      alt={`${product.name} thumb ${idx + 1}`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. KEY FACTS (mist section)
          Four white cards in a row + Product-specific sections
          ===================================================================== */}
      <section className="section section-mist">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
              gap: '20px',
            }}
          >
            {/* Fact 1: Variety */}
            <div
              className="card"
              style={{
                backgroundColor: 'var(--white)',
                borderRadius: '18px',
                padding: '24px',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <div
                className="icon-circle"
                style={{
                  backgroundColor: product.tintVar,
                  color: product.colorVar,
                  marginBottom: '14px',
                  width: '44px',
                  height: '44px',
                }}
              >
                <Sparkles size={20} />
              </div>
              <div style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '4px' }}>
                Variety
              </div>
              <div style={{ fontSize: '17px', fontWeight: 700, color: 'var(--navy)' }}>
                {product.keyFacts.variety}
              </div>
            </div>

            {/* Fact 2: Origin */}
            <div
              className="card"
              style={{
                backgroundColor: 'var(--white)',
                borderRadius: '18px',
                padding: '24px',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <div
                className="icon-circle"
                style={{
                  backgroundColor: product.tintVar,
                  color: product.colorVar,
                  marginBottom: '14px',
                  width: '44px',
                  height: '44px',
                }}
              >
                <Ship size={20} />
              </div>
              <div style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '4px' }}>
                Origin
              </div>
              <div style={{ fontSize: '17px', fontWeight: 700, color: 'var(--navy)' }}>
                {product.keyFacts.origin}
              </div>
            </div>

            {/* Fact 3: Packing */}
            <div
              className="card"
              style={{
                backgroundColor: 'var(--white)',
                borderRadius: '18px',
                padding: '24px',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <div
                className="icon-circle"
                style={{
                  backgroundColor: product.tintVar,
                  color: product.colorVar,
                  marginBottom: '14px',
                  width: '44px',
                  height: '44px',
                }}
              >
                <Package size={20} />
              </div>
              <div style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '4px' }}>
                Packing
              </div>
              <div style={{ fontSize: '17px', fontWeight: 700, color: 'var(--navy)' }}>
                {product.keyFacts.packing}
              </div>
            </div>

            {/* Fact 4: Minimum order */}
            <div
              className="card"
              style={{
                backgroundColor: 'var(--white)',
                borderRadius: '18px',
                padding: '24px',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <div
                className="icon-circle"
                style={{
                  backgroundColor: product.tintVar,
                  color: product.colorVar,
                  marginBottom: '14px',
                  width: '44px',
                  height: '44px',
                }}
              >
                <ShieldCheck size={20} />
              </div>
              <div style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '4px' }}>
                Minimum Order
              </div>
              <div style={{ fontSize: '17px', fontWeight: 700, color: 'var(--leaf)' }}>
                {product.keyFacts.moq}
              </div>
            </div>
          </div>

          {/* Product Specific: Onions Season Card */}
          {product.isOnionSeasonCard && (
            <div
              style={{
                marginTop: '28px',
                backgroundColor: '#F1E6F4',
                borderRadius: '20px',
                padding: '24px 32px',
                border: '1px solid rgba(123, 63, 134, 0.2)',
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                flexWrap: 'wrap',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--white)',
                  color: 'var(--plum)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: 'var(--shadow-xs)',
                }}
              >
                <Calendar size={24} />
              </div>
              <div>
                <div style={{ fontSize: '17px', fontWeight: 700, color: 'var(--plum)' }}>
                  Season: October to April, peak December to February
                </div>
                <div style={{ fontSize: '14px', color: 'var(--body)', marginTop: '2px' }}>
                  Nashik Red crop harvested and natural field-cured for superior transit dormancy and shelf stability.
                </div>
              </div>
            </div>
          )}

          {/* Product Specific: Items We Supply (Fresh Fruits and Fresh Vegetables) */}
          {product.itemsWeSupply && (
            <div style={{ marginTop: '48px' }}>
              <div style={{ textAlign: 'center', marginBottom: '28px' }}>
                <span className="eyebrow" style={{ backgroundColor: product.tintVar, color: product.colorVar }}>
                  Portfolio
                </span>
                <h3 style={{ fontSize: '26px', color: 'var(--navy)', margin: '8px 0 0 0' }}>
                  Items we supply
                </h3>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 170px), 1fr))',
                  gap: '16px',
                }}
              >
                {product.itemsWeSupply.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      backgroundColor: 'var(--white)',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      border: '1px solid var(--border-subtle)',
                      boxShadow: 'var(--shadow-xs)',
                      textAlign: 'center',
                    }}
                  >
                    <div style={{ width: '100%', height: '110px', backgroundColor: 'var(--mist)', overflow: 'hidden' }}>
                      <img
                        src={item.img}
                        alt={item.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                    <div style={{ padding: '12px 10px', fontSize: '13px', fontWeight: 700, color: 'var(--navy)' }}>
                      {item.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* =====================================================================
          3. SPECIFICATION (white section)
          Intro (C) + White card with two-column table in 4 groups
          ===================================================================== */}
      <section className="section section-white">
        <div className="container">
          <div className="section-intro centered">
            <span className="eyebrow">Specification</span>
            <h2>Product <span className="text-highlight-leaf">specification</span>.</h2>
            <div className="section-intro-bar" />
            <p className="sub-line">Parameters agreed upfront and verified with phytosanitary documentation.</p>
          </div>

          <div
            className="card"
            style={{
              maxWidth: '920px',
              margin: '48px auto 0 auto',
              backgroundColor: 'var(--white)',
              borderRadius: '24px',
              padding: '40px',
              boxShadow: 'var(--shadow-md)',
              border: '1px solid var(--border-subtle)',
            }}
          >
            {product.specGroups.map((group, gIdx) => (
              <div
                key={gIdx}
                style={{
                  marginBottom: gIdx === product.specGroups.length - 1 ? 0 : '32px',
                  paddingBottom: gIdx === product.specGroups.length - 1 ? 0 : '24px',
                  borderBottom: gIdx === product.specGroups.length - 1 ? 'none' : '1px solid var(--line)',
                }}
              >
                <div
                  style={{
                    fontSize: '13px',
                    fontWeight: 800,
                    color: product.colorVar,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    marginBottom: '16px',
                  }}
                >
                  {group.title}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {group.items.map((item, iIdx) => (
                    <div
                      key={iIdx}
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
                        gap: '12px',
                        padding: '6px 0',
                        fontSize: '14px',
                      }}
                    >
                      <span style={{ color: 'var(--muted)', fontWeight: 500 }}>{item.label}</span>
                      <span style={{ color: 'var(--navy)', fontWeight: 600 }}>{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. AVAILABILITY (mist section)
          Intro (C) + White card with 12-month bar
          ===================================================================== */}
      <section className="section section-mist">
        <div className="container">
          <div className="section-intro centered">
            <span className="eyebrow">Availability</span>
            <h2>When it is <span className="text-highlight-blue">available</span>.</h2>
            <div className="section-intro-bar" />
            <p className="sub-line">Commercial seasonal availability from Indian harvest regions.</p>
          </div>

          <div
            className="card"
            style={{
              maxWidth: '920px',
              margin: '48px auto 0 auto',
              backgroundColor: 'var(--white)',
              borderRadius: '24px',
              padding: '40px 32px',
              boxShadow: 'var(--shadow-sm)',
              border: '1px solid var(--border-subtle)',
            }}
          >
            {/* 12-Month Bar Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(12, 1fr)',
                gap: '8px',
                textAlign: 'center',
              }}
            >
              {product.months.map((m, idx) => {
                const isPeak = m.status === 'peak';
                const isAvail = m.status === 'available';

                let bg = 'var(--mist)';
                let textColor = 'var(--muted)';
                let border = '1px solid var(--line)';

                if (isPeak) {
                  bg = 'var(--navy)';
                  textColor = '#FFFFFF';
                  border = '1px solid var(--navy)';
                } else if (isAvail) {
                  bg = product.colorVar;
                  textColor = '#FFFFFF';
                  border = `1px solid ${product.colorVar}`;
                }

                return (
                  <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--navy)' }}>{m.month}</span>
                    <div
                      style={{
                        width: '100%',
                        height: '48px',
                        borderRadius: '10px',
                        backgroundColor: bg,
                        border: border,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: textColor,
                        fontSize: '11px',
                        fontWeight: 700,
                        transition: 'transform 0.2s',
                      }}
                      title={`${m.month}: ${m.status}`}
                    >
                      {isPeak ? 'PEAK' : isAvail ? 'AVAIL' : '—'}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Legend */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '24px',
                marginTop: '32px',
                flexWrap: 'wrap',
                fontSize: '13px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '16px', height: '16px', borderRadius: '4px', backgroundColor: product.colorVar }} />
                <span style={{ fontWeight: 600, color: 'var(--navy)' }}>Available</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '16px', height: '16px', borderRadius: '4px', backgroundColor: 'var(--navy)' }} />
                <span style={{ fontWeight: 600, color: 'var(--navy)' }}>Peak season</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '16px', height: '16px', borderRadius: '4px', backgroundColor: 'var(--mist)', border: '1px solid var(--line)' }} />
                <span style={{ color: 'var(--muted)' }}>Off-season</span>
              </div>
            </div>

            {!product.isRealSeason && (
              <div style={{ textAlign: 'center', marginTop: '18px' }}>
                <span style={{ fontSize: '12px', color: 'var(--muted)', letterSpacing: '0.04em' }}>
                  Sample months
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. PACKING AND LOADING (white section)
          Intro (C) + Three image cards with captions
          ===================================================================== */}
      <section className="section section-white">
        <div className="container">
          <div className="section-intro centered">
            <span className="eyebrow">Packing</span>
            <h2>Packed and loaded with <span className="text-highlight-leaf">care</span>.</h2>
            <div className="section-intro-bar" />
            <p className="sub-line">Packhouse grading, pallet stability, and continuous cold chain integrity.</p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
              gap: '28px',
              marginTop: '48px',
            }}
          >
            {product.packingCards.map((card, idx) => (
              <div
                key={idx}
                className="card"
                style={{
                  padding: 0,
                  overflow: 'hidden',
                  borderRadius: '20px',
                  backgroundColor: 'var(--white)',
                  border: '1px solid var(--border-subtle)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <div style={{ width: '100%', height: '220px', overflow: 'hidden', backgroundColor: 'var(--mist)' }}>
                  <img
                    src={card.img}
                    alt={card.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div style={{ padding: '24px' }}>
                  <h3 style={{ fontSize: '18px', color: 'var(--navy)', margin: '0 0 8px 0' }}>{card.title}</h3>
                  <p style={{ fontSize: '14px', lineHeight: '22px', color: 'var(--muted)', margin: 0 }}>
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          6. DOCUMENTS (mist section)
          Intro (C) + Six white chips with icons
          ===================================================================== */}
      <section className="section section-mist">
        <div className="container">
          <div className="section-intro centered">
            <span className="eyebrow">Documents</span>
            <h2>Documents with <span className="text-highlight-blue">every shipment</span>.</h2>
            <div className="section-intro-bar" />
            <p className="sub-line">Full compliance paperwork prepared and dispatched before vessel arrival.</p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '18px',
              maxWidth: '920px',
              margin: '48px auto 0 auto',
            }}
          >
            {[
              { title: 'Commercial invoice', icon: FileText },
              { title: 'Packing list', icon: FileCheck },
              { title: 'Phytosanitary certificate', icon: ShieldCheck },
              { title: 'Certificate of origin', icon: Award },
              { title: 'Bill of lading (BL)', icon: Ship },
              { title: 'Quality report on request', icon: FileCheck },
            ].map((doc, idx) => {
              const DocIcon = doc.icon;
              return (
                <div
                  key={idx}
                  style={{
                    backgroundColor: 'var(--white)',
                    borderRadius: '16px',
                    padding: '20px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    boxShadow: 'var(--shadow-xs)',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  <div
                    className="icon-circle"
                    style={{
                      width: '42px',
                      height: '42px',
                      minWidth: '42px',
                      backgroundColor: product.tintVar,
                      color: product.colorVar,
                    }}
                  >
                    <DocIcon size={20} />
                  </div>
                  <span style={{ fontSize: '15px', fontWeight: 700, color: 'var(--navy)' }}>{doc.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          7. HOW IT WORKS (white section)
          The five step cards from Home page
          ===================================================================== */}
      <section className="section section-white has-glows">
        <div className="glow-orb glow-leaf-tl" aria-hidden="true" />
        <div className="glow-orb glow-blue-br" aria-hidden="true" />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-intro centered">
            <span className="eyebrow">How it works</span>
            <h2>Your container in 5 simple <span className="text-highlight-leaf">steps</span>.</h2>
            <div className="section-intro-bar" />
            <p className="sub-line">From first enquiry to arrival, exactly what to expect.</p>
          </div>

          <div className="steps-track" style={{ marginTop: '48px' }}>
            <div className="step-dashed-connector" />

            <div className="step">
              <div className="step-header">
                <div className="step-number step-seq-1">1</div>
                <span className="step-time-badge">1 min</span>
              </div>
              <div className="step-title">Enquiry</div>
              <p className="step-desc">Share your {product.name.toLowerCase()} specs, destination port and schedule.</p>
            </div>

            <div className="step">
              <div className="step-header">
                <div className="step-number step-seq-2">2</div>
                <span className="step-time-badge">Same day</span>
              </div>
              <div className="step-title">Specification</div>
              <p className="step-desc">Receive commercial specs, packing options and indicative rates.</p>
            </div>

            <div className="step">
              <div className="step-header">
                <div className="step-number step-seq-3">3</div>
                <span className="step-time-badge">3-5 days</span>
              </div>
              <div className="step-title">Packing and loading</div>
              <p className="step-desc">Produce sorted, calibrated and loaded into reefer containers.</p>
            </div>

            <div className="step">
              <div className="step-header">
                <div className="step-number step-seq-4">4</div>
                <span className="step-time-badge">1-2 days</span>
              </div>
              <div className="step-title">Documents</div>
              <p className="step-desc">Phytosanitary, certificate of origin and invoice drafts prepared.</p>
            </div>

            <div className="step">
              <div className="step-header">
                <div className="step-number step-seq-5">5</div>
                <span className="step-time-badge">Transit ETA</span>
              </div>
              <div className="step-title">Shipping and arrival</div>
              <p className="step-desc">Container tracked continuously from Indian port to discharge.</p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          8. QUESTIONS (mist section)
          Accordion with 4 product questions + leaf-tint card on right
          ===================================================================== */}
      <section className="section section-mist">
        <div className="container">
          <div className="section-intro centered">
            <span className="eyebrow">FAQs</span>
            <h2>Common <span className="text-highlight-blue">questions</span>.</h2>
            <div className="section-intro-bar" />
            <p className="sub-line">Clear answers on {product.name.toLowerCase()} specifications, packing, and minimums.</p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
              gap: '36px',
              marginTop: '48px',
              alignItems: 'start',
            }}
          >
            {/* Accordion Questions */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {product.faq.map((item, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div
                    key={idx}
                    style={{
                      backgroundColor: 'var(--white)',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      border: '1px solid var(--border-subtle)',
                      boxShadow: 'var(--shadow-xs)',
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      style={{
                        width: '100%',
                        padding: '20px 24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        background: 'none',
                        border: 'none',
                        textAlign: 'left',
                        cursor: 'pointer',
                        fontSize: '16px',
                        fontWeight: 700,
                        color: 'var(--navy)',
                      }}
                    >
                      <span>{item.q}</span>
                      <ChevronDown
                        size={18}
                        style={{
                          transition: 'transform 0.25s ease',
                          transform: isOpen ? 'rotate(180deg)' : 'none',
                          color: 'var(--muted)',
                          flexShrink: 0,
                          marginLeft: '12px',
                        }}
                      />
                    </button>
                    {isOpen && (
                      <div
                        style={{
                          padding: '0 24px 20px 24px',
                          fontSize: '14px',
                          lineHeight: '24px',
                          color: 'var(--muted)',
                        }}
                      >
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right: Leaf-tint card Still have questions? */}
            <div
              style={{
                backgroundColor: '#EEF3DC',
                borderRadius: '24px',
                padding: '36px',
                border: '1px solid rgba(91, 122, 31, 0.16)',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--white)',
                  color: 'var(--leaf)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: 'var(--shadow-xs)',
                }}
              >
                <ShieldCheck size={26} />
              </div>

              <h3 style={{ fontSize: '22px', color: 'var(--navy)', margin: 0 }}>
                Still have questions?
              </h3>
              <p style={{ fontSize: '15px', lineHeight: '24px', color: 'var(--body)', margin: 0 }}>
                Our produce export specialists can discuss custom grade sorting, ocean freight schedules, and tailored destination customs documents.
              </p>

              <div style={{ marginTop: '12px' }}>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                  style={{ width: '100%', maxWidth: '240px' }}
                >
                  <span>Chat on WhatsApp</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          9. RELATED PRODUCTS (white section)
          Two product cards
          ===================================================================== */}
      <section className="section section-white">
        <div className="container">
          <div className="section-intro centered">
            <span className="eyebrow">Explore</span>
            <h2>Related <span className="text-highlight-leaf">products</span>.</h2>
            <div className="section-intro-bar" />
            <p className="sub-line">Other export commodities frequently shipped together.</p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
              gap: '32px',
              maxWidth: '820px',
              margin: '48px auto 0 auto',
            }}
          >
            {product.relatedProducts.map((rel) => {
              const RelIcon = rel.icon;
              return (
                <div
                  key={rel.id}
                  className="card"
                  style={{
                    backgroundColor: 'var(--white)',
                    borderRadius: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <div className="card-img-wrap" style={{ position: 'relative', overflow: 'visible' }}>
                    <img src={rel.img} alt={rel.name} className="card-img" />
                    <div className={`card-icon-badge ${rel.badgeClass}`} title={rel.name}>
                      <RelIcon size={22} />
                    </div>
                  </div>

                  <div style={{ marginTop: '18px', display: 'flex', flexDirection: 'column', gap: '8px', flexGrow: 1 }}>
                    <div>
                      <span className="eyebrow" style={{ fontSize: '11px', padding: '4px 10px' }}>
                        {rel.category}
                      </span>
                    </div>
                    <h3 style={{ margin: 0, fontSize: '22px' }}>{rel.name}</h3>
                    <p style={{ fontSize: '15px', color: 'var(--muted)', flexGrow: 1, margin: 0 }}>
                      {rel.desc}
                    </p>
                    <div style={{ marginTop: '16px' }}>
                      <button
                        type="button"
                        className="link"
                        onClick={() => onNavigate(rel.path)}
                        style={{ background: 'none', border: 'none', padding: 0, color: rel.colorVar, cursor: 'pointer' }}
                      >
                        <span>Explore</span>
                        <ArrowRight size={15} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          10. QUOTE FORM (light, mist with glows)
          The same two-column quote section as on Home, with product preselected ONLY here!
          ===================================================================== */}
      <section className="section-quote-light has-glows" id="product-quote-section">
        <div className="glow-orb glow-leaf-tl" aria-hidden="true" />
        <div className="glow-orb glow-blue-br" aria-hidden="true" />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
              gap: '48px',
              alignItems: 'center',
            }}
          >
            {/* Left Column: Eyebrow pill + H2 + 4 leaf ticks */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <span className="eyebrow">
                  Get started
                </span>
              </div>

              <h2 style={{ fontSize: 'clamp(32px, 4vw, 44px)', lineHeight: '1.2', color: 'var(--navy)', margin: 0 }}>
                Request a quote for <span className="text-highlight-leaf">{product.name}</span>.
              </h2>
              <div className="section-intro-bar" style={{ margin: '4px 0 0 0' }} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '16px', color: 'var(--body)' }}>
                  <span style={{ color: 'var(--leaf)', display: 'flex' }}>
                    <Check size={18} strokeWidth={2.6} />
                  </span>
                  <span>Free enquiry, no obligation</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '16px', color: 'var(--body)' }}>
                  <span style={{ color: 'var(--leaf)', display: 'flex' }}>
                    <Check size={18} strokeWidth={2.6} />
                  </span>
                  <span>Specification and indicative price from our team</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '16px', color: 'var(--body)' }}>
                  <span style={{ color: 'var(--leaf)', display: 'flex' }}>
                    <Check size={18} strokeWidth={2.6} />
                  </span>
                  <span>One contact person from start to finish</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '16px', color: 'var(--body)' }}>
                  <span style={{ color: 'var(--leaf)', display: 'flex' }}>
                    <Check size={18} strokeWidth={2.6} />
                  </span>
                  <span>Your details stay private</span>
                </div>
              </div>
            </div>

            {/* Right Column: Large White Form Card with top gradient bar */}
            <div className="quote-white-card" style={{ position: 'relative' }}>
              <div className="form-card-topbar" />

              {formSubmitted ? (
                <div style={{ textAlign: 'center', padding: '40px 16px' }}>
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--leaf-tint)',
                      color: 'var(--leaf)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 20px auto',
                    }}
                  >
                    <Check size={32} strokeWidth={3} />
                  </div>
                  <h3 style={{ marginBottom: '8px' }}>Thank you. Your request is with our team.</h3>
                  <p style={{ color: 'var(--body)', fontSize: '16px', marginBottom: '24px' }}>
                    Our commercial specialists will review your {product.name} requirements and follow up with specifications and container pricing.
                  </p>
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        fullName: '',
                        phoneCode: '+971',
                        mobile: '',
                        product: product.name,
                        quantityNum: '',
                        quantityUnit: 'containers',
                        destinationCountry: '',
                        companyName: '',
                        email: '',
                      });
                    }}
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <h3 style={{ margin: 0, fontSize: '24px' }}>Tell us what you need.</h3>

                  {/* 1. Full name* */}
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                      Full name <span style={{ color: 'var(--crimson)' }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="Your name"
                      value={formData.fullName}
                      onChange={handleFormChange}
                      className="form-input-v4"
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: 'var(--radius-input)',
                        border: '1px solid var(--line)',
                        fontSize: '15px',
                        boxSizing: 'border-box',
                      }}
                    />
                  </div>

                  {/* 2. WhatsApp / mobile* with country-code selector */}
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                      WhatsApp / Mobile <span style={{ color: 'var(--crimson)' }}>*</span>
                    </label>
                    <div style={{ display: 'grid', gridTemplateColumns: '110px 1fr', gap: '8px' }}>
                      <select
                        name="phoneCode"
                        value={formData.phoneCode}
                        onChange={handleFormChange}
                        className="form-select-v4"
                        style={{
                          padding: '12px 10px',
                          borderRadius: 'var(--radius-input)',
                          border: '1px solid var(--line)',
                          fontSize: '14px',
                          backgroundColor: 'var(--white)',
                          cursor: 'pointer',
                        }}
                      >
                        <option value="+971">+971 (UAE)</option>
                        <option value="+966">+966 (KSA)</option>
                        <option value="+968">+968 (OM)</option>
                        <option value="+974">+974 (QA)</option>
                        <option value="+965">+965 (KW)</option>
                        <option value="+973">+973 (BH)</option>
                        <option value="+880">+880 (BD)</option>
                        <option value="+94">+94 (LK)</option>
                        <option value="+60">+60 (MY)</option>
                        <option value="+65">+65 (SG)</option>
                        <option value="+254">+254 (KE)</option>
                        <option value="+91">+91 (IN)</option>
                        <option value="+44">+44 (UK)</option>
                        <option value="+1">+1 (US)</option>
                      </select>
                      <input
                        type="tel"
                        name="mobile"
                        required
                        placeholder="Mobile number"
                        value={formData.mobile}
                        onChange={handleFormChange}
                        className="form-input-v4"
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          borderRadius: 'var(--radius-input)',
                          border: '1px solid var(--line)',
                          fontSize: '15px',
                          boxSizing: 'border-box',
                        }}
                      />
                    </div>
                  </div>

                  {/* 3. Product* (Preselected to this product!) */}
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                      Product <span style={{ color: 'var(--crimson)' }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="product"
                      readOnly
                      value={formData.product}
                      className="form-input-v4"
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: 'var(--radius-input)',
                        border: '1px solid var(--line)',
                        fontSize: '15px',
                        backgroundColor: 'var(--mist)',
                        color: 'var(--navy)',
                        fontWeight: 700,
                        boxSizing: 'border-box',
                      }}
                    />
                  </div>

                  {/* 4. Approx. quantity */}
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                      Approx. quantity
                    </label>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 140px', gap: '8px' }}>
                      <input
                        type="number"
                        name="quantityNum"
                        placeholder="e.g. 1, 2, 5"
                        min="1"
                        value={formData.quantityNum}
                        onChange={handleFormChange}
                        className="form-input-v4"
                        style={{
                          padding: '12px 14px',
                          borderRadius: 'var(--radius-input)',
                          border: '1px solid var(--line)',
                          fontSize: '15px',
                          boxSizing: 'border-box',
                        }}
                      />
                      <select
                        name="quantityUnit"
                        value={formData.quantityUnit}
                        onChange={handleFormChange}
                        className="form-select-v4"
                        style={{
                          padding: '12px 10px',
                          borderRadius: 'var(--radius-input)',
                          border: '1px solid var(--line)',
                          fontSize: '14px',
                          backgroundColor: 'var(--white)',
                          cursor: 'pointer',
                        }}
                      >
                        <option value="containers">Container(s)</option>
                        <option value="tonnes">Tonnes (MT)</option>
                      </select>
                    </div>
                  </div>

                  {/* 5. Destination country* */}
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                      Destination country <span style={{ color: 'var(--crimson)' }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="destinationCountry"
                      required
                      placeholder="e.g. UAE, Saudi Arabia, Netherlands"
                      value={formData.destinationCountry}
                      onChange={handleFormChange}
                      className="form-input-v4"
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: 'var(--radius-input)',
                        border: '1px solid var(--line)',
                        fontSize: '15px',
                        boxSizing: 'border-box',
                      }}
                    />
                  </div>

                  <div style={{ marginTop: '8px' }}>
                    <button
                      type="submit"
                      className="btn-primary"
                      disabled={formSubmitting}
                      style={{ width: '100%' }}
                    >
                      <span>{formSubmitting ? 'Submitting...' : 'Submit enquiry'}</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
