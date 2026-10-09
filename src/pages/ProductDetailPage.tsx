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
  Globe,
  HelpCircle,
  FileCheck,
  PackageCheck,
  Image as ImageIcon,
} from 'lucide-react';
import { IMAGES } from '../data/images';
import { QuoteFormSection } from '../components/QuoteFormSection';

interface ProductDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
  onOpenRfq: (product?: string) => void;
  onOpenBrochure?: () => void;
}

interface ProductData {
  id: string;
  name: string;
  category: string;
  sentence: string;
  mainImage: string;
  thumbnails: string[];
  keyFacts: {
    variety: string;
    origin: string;
    packing: string;
    moq: string;
    season: string;
  };
  specTable: {
    product: { label: string; value: string }[];
    packing: { label: string; value: string }[];
    shipping: { label: string; value: string }[];
    terms: { label: string; value: string }[];
  };
  months: { month: string; status: 'peak' | 'available' | 'none' }[];
  isRealSeason?: boolean;
  packingCards: {
    title: string;
    caption: string;
    img?: string;
    isPlaceholder?: boolean;
  }[];
  supplyItems?: {
    name: string;
    img?: string;
    isPlaceholder?: boolean;
  }[];
  faq: { q: string; a: string }[];
  related: {
    id: string;
    name: string;
    category: string;
    path: string;
    img: string;
    desc: string;
  }[];
}

const PRODUCTS_MAP: Record<string, ProductData> = {
  pomegranates: {
    id: 'pomegranates',
    name: 'Pomegranates',
    category: 'Fresh fruit',
    sentence: 'Export-grade Bhagwa pomegranates packed in calibrated corrugated cartons.',
    mainImage: IMAGES.pomegranatesCut,
    thumbnails: [
      IMAGES.pomegranatesCut,
      IMAGES.pomegranates,
      IMAGES.pomegranatesBox,
    ],
    keyFacts: {
      variety: 'Bhagwa [Sample]',
      origin: 'Maharashtra, India [Sample]',
      packing: '3.5kg / 5kg cartons [Sample]',
      moq: '1 container (FCL)',
      season: 'Year-round [Sample]',
    },
    specTable: {
      product: [
        { label: 'Variety', value: 'Bhagwa (Sindhuri) [Sample]' },
        { label: 'Origin', value: 'India [Sample]' },
        { label: 'Size or grade', value: 'Count 9 to 15 (200g - 400g) [Sample]' },
        { label: 'Colour', value: 'Deep red arils, glossy red skin [Sample]' },
      ],
      packing: [
        { label: 'Packing type', value: 'Ventilated export cartons [Sample]' },
        { label: 'Net weight', value: '3.5 kg / 5.0 kg net per box [Sample]' },
        { label: 'Labelling', value: 'Buyer specifications / barcode [Sample]' },
      ],
      shipping: [
        { label: 'Container type', value: '40ft High Cube Reefer (+5°C to +7°C) [Sample]' },
        { label: 'Quantity per container', value: 'Approx. 4,400 to 5,000 cartons [Sample]' },
        { label: 'Port of loading', value: 'JNPT / Nhava Sheva, India [Sample]' },
        { label: 'Trade terms', value: 'FOB, CIF, CFR [Sample]' },
      ],
      terms: [
        { label: 'Minimum order', value: '1 container (FCL)' },
        { label: 'Payment terms', value: 'Irrevocable LC at sight / TT advance [Sample]' },
        { label: 'Samples', value: 'Available on request [Sample]' },
      ],
    },
    months: [
      { month: 'Jan', status: 'available' },
      { month: 'Feb', status: 'available' },
      { month: 'Mar', status: 'none' },
      { month: 'Apr', status: 'none' },
      { month: 'May', status: 'none' },
      { month: 'Jun', status: 'none' },
      { month: 'Jul', status: 'available' },
      { month: 'Aug', status: 'available' },
      { month: 'Sep', status: 'peak' },
      { month: 'Oct', status: 'peak' },
      { month: 'Nov', status: 'peak' },
      { month: 'Dec', status: 'peak' },
    ],
    isRealSeason: false,
    packingCards: [
      { title: 'Sorting & grading', caption: 'Defect-free inspection and size calibration.', img: IMAGES.packhouseInspection },
      { title: 'Palletising', caption: 'Corner protected cartons secured on wooden pallets.', img: IMAGES.portContainers },
      { title: 'Reefer loading', caption: 'Direct pre-cooled container stuffing for ocean freight.', img: IMAGES.containerLoading },
    ],
    faq: [
      { q: 'Which varieties of pomegranates do you export?', a: 'We primarily export the premium Indian Bhagwa variety, celebrated for its deep red arils, sweet taste and soft seeds [Sample].' },
      { q: 'What packaging options are available for overseas shipments?', a: 'Standard packaging is 3.5kg and 5kg corrugated export boxes with individual fruit paper cups or foam nets [Sample].' },
      { q: 'What is the minimum order quantity?', a: 'Minimum order is 1 container (FCL), typically a 40ft reefer container carrying calibrated cartons.' },
      { q: 'Can you provide pre-shipment quality and inspection reports?', a: 'Yes, phytosanitary certificates, quality inspection sheets, and pre-cooling logs accompany every shipment [Sample].' },
    ],
    related: [
      { id: 'fresh-fruits', name: 'Fresh fruits', category: 'Fresh fruit', path: '/products/fresh-fruits', img: IMAGES.fruits, desc: 'Seasonal fruit for export [Sample].' },
      { id: 'onions', name: 'Onions', category: 'Fresh vegetable', path: '/products/onions', img: IMAGES.onionsMesh, desc: 'Red onions in mesh bags, October to April.' },
    ],
  },

  onions: {
    id: 'onions',
    name: 'Onions',
    category: 'Fresh vegetable',
    sentence: 'Red onions for container shipments, sourced directly from Maharashtra farms.',
    mainImage: IMAGES.onionsMesh,
    thumbnails: [
      IMAGES.onionsMesh,
      IMAGES.onions,
      IMAGES.onionsSortingHands,
    ],
    keyFacts: {
      variety: 'Garwa / Red Onion [Sample]',
      origin: 'Nashik, Maharashtra [Sample]',
      packing: '10kg / 25kg mesh bags [Sample]',
      moq: '1 container (FCL)',
      season: 'October to April',
    },
    specTable: {
      product: [
        { label: 'Variety', value: 'Nashik Medium & Big Red Onion [Sample]' },
        { label: 'Origin', value: 'India [Sample]' },
        { label: 'Size or grade', value: '45mm to 65mm+ diameter [Sample]' },
        { label: 'Colour', value: 'Deep pink to red, firm skin [Sample]' },
      ],
      packing: [
        { label: 'Packing type', value: 'Red leno mesh bags with drawstrings [Sample]' },
        { label: 'Net weight', value: '10 kg, 20 kg or 25 kg bags [Sample]' },
        { label: 'Labelling', value: 'Printed customized bag bands [Sample]' },
      ],
      shipping: [
        { label: 'Container type', value: '40ft Reefer (+1°C to +3°C, 65% RH) or ventilated dry [Sample]' },
        { label: 'Quantity per container', value: '28 to 29 Metric Tonnes [Sample]' },
        { label: 'Port of loading', value: 'JNPT / Nhava Sheva, India [Sample]' },
        { label: 'Trade terms', value: 'FOB, CIF, CFR [Sample]' },
      ],
      terms: [
        { label: 'Minimum order', value: '1 container (FCL)' },
        { label: 'Payment terms', value: 'Irrevocable LC at sight / TT advance [Sample]' },
        { label: 'Samples', value: 'Available on request [Sample]' },
      ],
    },
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
    isRealSeason: true,
    packingCards: [
      { title: 'Sorting & grading', caption: 'Cleaned, sun-cured and mechanically calibrated.', img: IMAGES.onionsSortingHands },
      { title: 'Palletising', caption: 'Ventilated stacking to maintain continuous airflow.', img: IMAGES.portContainers },
      { title: 'Reefer loading', caption: 'Temperature and humidity controlled container stuffing.', img: IMAGES.containerLoading },
    ],
    faq: [
      { q: 'What is the seasonal availability for Indian red onions?', a: 'Indian red onions are available from October to April, with peak supply and optimal quality from December to February.' },
      { q: 'What mesh bag sizes are supplied?', a: 'We supply in 10kg, 20kg, and 25kg ventilated red mesh bags suitable for sea transit [Sample].' },
      { q: 'What is the minimum order quantity?', a: 'Minimum order is 1 container (FCL), typically loaded to 28-29 metric tonnes.' },
      { q: 'How is moisture managed during sea transport?', a: 'Onions are thoroughly dried and cured, transported in containers with active de-humidification settings [Sample].' },
    ],
    related: [
      { id: 'fresh-vegetables', name: 'Fresh vegetables', category: 'Fresh vegetable', path: '/products/fresh-vegetables', img: IMAGES.vegetables, desc: 'Seasonal vegetables for export [Sample].' },
      { id: 'pomegranates', name: 'Pomegranates', category: 'Fresh fruit', path: '/products/pomegranates', img: IMAGES.pomegranatesCut, desc: 'Export-grade fruit packed in cartons.' },
    ],
  },

  rice: {
    id: 'rice',
    name: 'Rice',
    category: 'Grain',
    sentence: 'Basmati and non-basmati rice grades, milled and packed for bulk international buyers.',
    mainImage: IMAGES.riceGrains,
    thumbnails: [
      IMAGES.riceGrains,
      IMAGES.riceSack,
      IMAGES.rice,
    ],
    keyFacts: {
      variety: 'Traditional & 1121 Basmati [Sample]',
      origin: 'Punjab & Haryana, India [Sample]',
      packing: '25kg / 50kg PP bags [Sample]',
      moq: '1 container (FCL)',
      season: 'Year-round [Sample]',
    },
    specTable: {
      product: [
        { label: 'Variety', value: '1121 Basmati, Sugandha, Sona Masoori [Sample]' },
        { label: 'Origin', value: 'India [Sample]' },
        { label: 'Size or grade', value: 'Average grain length 8.35mm+ (Basmati) [Sample]' },
        { label: 'Colour', value: 'Silky white / Golden parboiled [Sample]' },
      ],
      packing: [
        { label: 'Packing type', value: 'Non-woven, BOPP, or PP woven sacks [Sample]' },
        { label: 'Net weight', value: '10 kg, 25 kg, 50 kg bags [Sample]' },
        { label: 'Labelling', value: 'Custom brand packaging [Sample]' },
      ],
      shipping: [
        { label: 'Container type', value: '20ft Dry Heavy Container [Sample]' },
        { label: 'Quantity per container', value: '25 to 26 Metric Tonnes [Sample]' },
        { label: 'Port of loading', value: 'Mundra / Kandla / JNPT, India [Sample]' },
        { label: 'Trade terms', value: 'FOB, CIF, CFR [Sample]' },
      ],
      terms: [
        { label: 'Minimum order', value: '1 container (FCL)' },
        { label: 'Payment terms', value: 'Irrevocable LC at sight / TT advance [Sample]' },
        { label: 'Samples', value: 'Available on request [Sample]' },
      ],
    },
    months: [
      { month: 'Jan', status: 'peak' },
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
    isRealSeason: false,
    packingCards: [
      { title: 'Milling & sorting', caption: 'Optical color sorters remove discolored grains.', img: IMAGES.riceSack },
      { title: 'Palletising', caption: 'Heavy duty moisture barrier bags palletised.', img: IMAGES.portContainers },
      { title: 'Dry container loading', caption: 'Fumigated 20ft box containers filled to maximum payload.', img: IMAGES.containerLoading },
    ],
    faq: [
      { q: 'Which rice varieties are available?', a: 'We offer 1121 Steam/Sella Basmati, Pusa, Sugandha, as well as PR11 and Sona Masoori non-basmati grades [Sample].' },
      { q: 'Can you provide private label packaging?', a: 'Yes, we pack into customized BOPP bags with client branding and multilingual specifications [Sample].' },
      { q: 'What is the minimum order quantity?', a: 'Minimum order is 1 container (FCL), standard 20ft container holding 25-26 metric tonnes.' },
      { q: 'Are moisture and purity certificates provided?', a: 'Independent inspection certificates verifying moisture content under 12.5% and purity are provided [Sample].' },
    ],
    related: [
      { id: 'spices', name: 'Spices', category: 'Spice', path: '/products/spices', img: IMAGES.spices, desc: 'Whole and ground spices [Sample].' },
      { id: 'pomegranates', name: 'Pomegranates', category: 'Fresh fruit', path: '/products/pomegranates', img: IMAGES.pomegranatesCut, desc: 'Export-grade fruit packed in cartons.' },
    ],
  },

  spices: {
    id: 'spices',
    name: 'Spices',
    category: 'Spice',
    sentence: 'Whole and ground export-grade Indian spices, certified for international purity standards.',
    mainImage: IMAGES.spices,
    thumbnails: [
      IMAGES.spices,
      IMAGES.spicesTurmeric,
      IMAGES.spicesCumin,
    ],
    keyFacts: {
      variety: 'Whole & Ground Spices [Sample]',
      origin: 'Gujarat & Rajasthan, India [Sample]',
      packing: '25kg multiwall paper bags [Sample]',
      moq: '1 container (FCL)',
      season: 'Year-round [Sample]',
    },
    specTable: {
      product: [
        { label: 'Variety', value: 'Cumin seeds, Turmeric fingers, Coriander [Sample]' },
        { label: 'Origin', value: 'India [Sample]' },
        { label: 'Size or grade', value: 'Machine cleaned 99% / 99.5% purity [Sample]' },
        { label: 'Colour', value: 'Natural, unadulterated [Sample]' },
      ],
      packing: [
        { label: 'Packing type', value: 'Multi-ply craft paper bags / PP bags [Sample]' },
        { label: 'Net weight', value: '25 kg or 50 kg bags [Sample]' },
        { label: 'Labelling', value: 'Standard export markings [Sample]' },
      ],
      shipping: [
        { label: 'Container type', value: '20ft Dry Container with desiccant strips [Sample]' },
        { label: 'Quantity per container', value: '18 to 22 Metric Tonnes [Sample]' },
        { label: 'Port of loading', value: 'Mundra / Pipavav, India [Sample]' },
        { label: 'Trade terms', value: 'FOB, CIF, CFR [Sample]' },
      ],
      terms: [
        { label: 'Minimum order', value: '1 container (FCL)' },
        { label: 'Payment terms', value: 'Irrevocable LC at sight / TT advance [Sample]' },
        { label: 'Samples', value: 'Available on request [Sample]' },
      ],
    },
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
    isRealSeason: false,
    packingCards: [
      { title: 'Sorting & cleaning', caption: 'Purity filtration and metal detection checks.', img: IMAGES.spices },
      { title: 'Palletising', caption: 'Moisture-sealed pallets with desiccant protection.', img: IMAGES.portContainers },
      { title: 'Container loading', caption: 'Carefully loaded into clean dry containers.', img: IMAGES.containerLoading },
    ],
    faq: [
      { q: 'Which whole spices do you export?', a: 'Our range includes cumin seeds (jeera), turmeric fingers, coriander seeds, fenugreek, and black pepper [Sample].' },
      { q: 'What purity grades are offered?', a: 'We supply 99% to 99.5% machine clean and sortex cleaned qualities [Sample].' },
      { q: 'What is the minimum order quantity?', a: 'Minimum order is 1 container (FCL), approximately 18-22 tonnes depending on bulk density.' },
      { q: 'Can we combine multiple spices in one container?', a: 'Yes, multi-item consolidated spice containers can be arranged upon request [Sample].' },
    ],
    related: [
      { id: 'rice', name: 'Rice', category: 'Grain', path: '/products/rice', img: IMAGES.riceGrains, desc: 'Basmati and non-basmati [Sample].' },
      { id: 'pomegranates', name: 'Pomegranates', category: 'Fresh fruit', path: '/products/pomegranates', img: IMAGES.pomegranatesCut, desc: 'Export-grade fruit packed in cartons.' },
    ],
  },

  'fresh-fruits': {
    id: 'fresh-fruits',
    name: 'Fresh fruits',
    category: 'Fresh fruit',
    sentence: 'Table grapes, bananas and seasonal Indian fruits packed for cold-chain ocean transit.',
    mainImage: IMAGES.fruits,
    thumbnails: [
      IMAGES.fruits,
      IMAGES.packhouseInspection,
      IMAGES.portContainers,
    ],
    keyFacts: {
      variety: 'Table Grapes, Bananas, Mangoes [Sample]',
      origin: 'Maharashtra & Gujarat, India [Sample]',
      packing: '4.5kg / 5kg / 7kg cartons [Sample]',
      moq: '1 container (FCL)',
      season: 'Seasonal [Sample]',
    },
    specTable: {
      product: [
        { label: 'Variety', value: 'Thompson Seedless Grapes, G9 Bananas [Sample]' },
        { label: 'Origin', value: 'India [Sample]' },
        { label: 'Size or grade', value: 'Export calibrated brix and berry size [Sample]' },
        { label: 'Colour', value: 'Uniform natural fruit appearance [Sample]' },
      ],
      packing: [
        { label: 'Packing type', value: 'Pouch bags or punnets in corrugated cartons [Sample]' },
        { label: 'Net weight', value: '4.5 kg / 5 kg / 7 kg net cartons [Sample]' },
        { label: 'Labelling', value: 'Buyer specifications / barcode [Sample]' },
      ],
      shipping: [
        { label: 'Container type', value: '40ft Reefer with Controlled Atmosphere [Sample]' },
        { label: 'Quantity per container', value: 'Approx. 20 to 22 Metric Tonnes [Sample]' },
        { label: 'Port of loading', value: 'JNPT / Nhava Sheva, India [Sample]' },
        { label: 'Trade terms', value: 'FOB, CIF, CFR [Sample]' },
      ],
      terms: [
        { label: 'Minimum order', value: '1 container (FCL)' },
        { label: 'Payment terms', value: 'Irrevocable LC at sight / TT advance [Sample]' },
        { label: 'Samples', value: 'Available on request [Sample]' },
      ],
    },
    months: [
      { month: 'Jan', status: 'peak' },
      { month: 'Feb', status: 'peak' },
      { month: 'Mar', status: 'peak' },
      { month: 'Apr', status: 'available' },
      { month: 'May', status: 'available' },
      { month: 'Jun', status: 'none' },
      { month: 'Jul', status: 'none' },
      { month: 'Aug', status: 'available' },
      { month: 'Sep', status: 'available' },
      { month: 'Oct', status: 'available' },
      { month: 'Nov', status: 'available' },
      { month: 'Dec', status: 'peak' },
    ],
    isRealSeason: false,
    supplyItems: [
      { name: 'Table Grapes [Sample item]', img: IMAGES.fruitsGrapes },
      { name: 'Fresh Bananas [Sample item]', img: IMAGES.fruitsBananas },
      { name: 'Bhagwa Pomegranates [Sample item]', img: IMAGES.pomegranatesCut },
      { name: 'Fresh Mangoes [Sample item]', isPlaceholder: true },
      { name: 'Fresh Guavas [Sample item]', isPlaceholder: true },
      { name: 'Fresh Papayas [Sample item]', isPlaceholder: true },
    ],
    packingCards: [
      { title: 'Sorting & packing', caption: 'Packhouse grading with protective liners and punnets.', img: IMAGES.packhouseInspection },
      { title: 'Cold-chain pallets', caption: 'Rapid pre-cooling down to +0.5°C before pallet strapping.', img: IMAGES.portContainers },
      { title: 'Reefer loading', caption: 'Strict continuous temperature recorder logging.', img: IMAGES.containerLoading },
    ],
    faq: [
      { q: 'Which fresh fruits do you export throughout the year?', a: 'G9 Bananas are shipped year-round, while Thompson grapes, mangoes, and pomegranates follow seasonal harvesting windows [Sample].' },
      { q: 'How is fruit shelf life preserved during voyage?', a: 'Rapid pre-cooling, SO2 generator sheets for grapes, and controlled-atmosphere containers preserve firmness [Sample].' },
      { q: 'What is the minimum order quantity?', a: 'Minimum order is 1 container (FCL), approximately 20-22 tonnes in a 40ft High Cube reefer.' },
      { q: 'Are MRL and pesticide test certificates provided?', a: 'Yes, APEDA and accredited lab residue tests accompany European and Middle Eastern shipments [Sample].' },
    ],
    related: [
      { id: 'pomegranates', name: 'Pomegranates', category: 'Fresh fruit', path: '/products/pomegranates', img: IMAGES.pomegranatesCut, desc: 'Export-grade fruit packed in cartons.' },
      { id: 'fresh-vegetables', name: 'Fresh vegetables', category: 'Fresh vegetable', path: '/products/fresh-vegetables', img: IMAGES.vegetables, desc: 'Seasonal vegetables for export [Sample].' },
    ],
  },

  'fresh-vegetables': {
    id: 'fresh-vegetables',
    name: 'Fresh vegetables',
    category: 'Fresh vegetable',
    sentence: 'Cold-chain green and root vegetables, cleaned and packed for container sea freight.',
    mainImage: IMAGES.vegetables,
    thumbnails: [
      IMAGES.vegetables,
      IMAGES.onionsSortingHands,
      IMAGES.portContainers,
    ],
    keyFacts: {
      variety: 'Okra, Ginger, Green Chillies [Sample]',
      origin: 'Maharashtra & Gujarat, India [Sample]',
      packing: '4kg / 5kg / 10kg cartons [Sample]',
      moq: '1 container (FCL)',
      season: 'Seasonal [Sample]',
    },
    specTable: {
      product: [
        { label: 'Variety', value: 'Fresh Okra, G4 Green Chillies, Ginger [Sample]' },
        { label: 'Origin', value: 'India [Sample]' },
        { label: 'Size or grade', value: 'Export tender grade, uniform lengths [Sample]' },
        { label: 'Colour', value: 'Vibrant green, clean roots [Sample]' },
      ],
      packing: [
        { label: 'Packing type', value: 'Perforated corrugated cartons / mesh [Sample]' },
        { label: 'Net weight', value: '4 kg / 5 kg / 10 kg cartons [Sample]' },
        { label: 'Labelling', value: 'Buyer specifications / barcode [Sample]' },
      ],
      shipping: [
        { label: 'Container type', value: '40ft High Cube Reefer (+8°C to +10°C) [Sample]' },
        { label: 'Quantity per container', value: 'Approx. 12 to 14 Metric Tonnes [Sample]' },
        { label: 'Port of loading', value: 'JNPT / Nhava Sheva, India [Sample]' },
        { label: 'Trade terms', value: 'FOB, CIF, CFR [Sample]' },
      ],
      terms: [
        { label: 'Minimum order', value: '1 container (FCL)' },
        { label: 'Payment terms', value: 'Irrevocable LC at sight / TT advance [Sample]' },
        { label: 'Samples', value: 'Available on request [Sample]' },
      ],
    },
    months: [
      { month: 'Jan', status: 'available' },
      { month: 'Feb', status: 'available' },
      { month: 'Mar', status: 'available' },
      { month: 'Apr', status: 'none' },
      { month: 'May', status: 'none' },
      { month: 'Jun', status: 'none' },
      { month: 'Jul', status: 'none' },
      { month: 'Aug', status: 'available' },
      { month: 'Sep', status: 'available' },
      { month: 'Oct', status: 'peak' },
      { month: 'Nov', status: 'peak' },
      { month: 'Dec', status: 'peak' },
    ],
    isRealSeason: false,
    supplyItems: [
      { name: 'Red Onions [Sample item]', img: IMAGES.onions },
      { name: 'Fresh Okra [Sample item]', img: IMAGES.vegetablesOkra },
      { name: 'Fresh Ginger [Sample item]', img: IMAGES.vegetablesGinger },
      { name: 'Green Chillies [Sample item]', isPlaceholder: true },
      { name: 'Fresh Garlic [Sample item]', isPlaceholder: true },
      { name: 'Moringa / Drumsticks [Sample item]', isPlaceholder: true },
    ],
    packingCards: [
      { title: 'Sorting & packing', caption: 'Manual sorting for tender, defect-free green produce.', img: IMAGES.packhouseInspection },
      { title: 'Palletising', caption: 'Ventilated cartons stacked on pallets with air channels.', img: IMAGES.portContainers },
      { title: 'Reefer loading', caption: 'Strictly monitored temperature controlled container loading.', img: IMAGES.containerLoading },
    ],
    faq: [
      { q: 'Which fresh vegetables are suitable for sea shipment?', a: 'Okra, green chillies, fresh ginger, garlic, and onions tolerate reefer container transit exceptionally well [Sample].' },
      { q: 'What packaging is used for green chillies and okra?', a: 'We pack in 4kg and 5kg ventilated CFB (corrugated fibre board) cartons with moisture absorptive sheets [Sample].' },
      { q: 'What is the minimum order quantity?', a: 'Minimum order is 1 container (FCL), or consolidated multi-vegetable reefer container.' },
      { q: 'Are phytosanitary checks carried out prior to loading?', a: 'Every consignment undergoes Plant Quarantine inspection and phytosanitary clearance before port departure [Sample].' },
    ],
    related: [
      { id: 'onions', name: 'Onions', category: 'Fresh vegetable', path: '/products/onions', img: IMAGES.onionsMesh, desc: 'Red onions in mesh bags, October to April.' },
      { id: 'fresh-fruits', name: 'Fresh fruits', category: 'Fresh fruit', path: '/products/fresh-fruits', img: IMAGES.fruits, desc: 'Seasonal fruit for export [Sample].' },
    ],
  },
};

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  slug,
  onNavigate,
  onOpenRfq,
}) => {
  const productKey = slug.toLowerCase();
  const product = PRODUCTS_MAP[productKey] || PRODUCTS_MAP['pomegranates'];

  // Thumbnail swap state
  const [activeImage, setActiveImage] = useState<string>(product.mainImage);

  // Sync active image when slug changes
  React.useEffect(() => {
    setActiveImage(product.mainImage);
  }, [product.mainImage]);

  const whatsappUrl = `https://wa.me/910000000000?text=Hello%20Vasudha%20Freshline%20Exports%20LLP,%20I%20am%20interested%20in%20importing%20${encodeURIComponent(product.name)}.`;

  return (
    <div className="product-detail-flow" style={{ width: '100%', overflow: 'hidden' }}>
      {/* =====================================================================
          1. BREADCRUMB & 2. HERO (white with two glows)
          ===================================================================== */}
      <section
        className="section section-white has-glows"
        style={{
          paddingTop: '36px',
          paddingBottom: '72px',
          borderBottom: '1px solid var(--line)',
        }}
      >
        <div className="glow-orb glow-leaf-tl" aria-hidden="true" />
        <div className="glow-orb glow-blue-br" aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          {/* 1. Breadcrumb */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '14px',
              color: 'var(--muted)',
              marginBottom: '28px',
            }}
            aria-label="Breadcrumb"
          >
            <button
              type="button"
              onClick={() => onNavigate('/')}
              style={{ background: 'none', border: 'none', color: 'var(--muted)', cursor: 'pointer', padding: 0 }}
            >
              Home
            </button>
            <span>/</span>
            <button
              type="button"
              onClick={() => onNavigate('/products')}
              style={{ background: 'none', border: 'none', color: 'var(--muted)', cursor: 'pointer', padding: 0 }}
            >
              Products
            </button>
            <span>/</span>
            <span style={{ color: 'var(--navy)', fontWeight: 600 }}>{product.name}</span>
          </nav>

          {/* 2. HERO: Two Columns */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
              gap: '56px',
              alignItems: 'center',
            }}
          >
            {/* Left Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '560px' }}>
              <div>
                <span className="eyebrow">{product.category}</span>
              </div>

              <h1 style={{ fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: '1.14', margin: 0 }}>
                {product.name}
              </h1>

              <p className="sub-line" style={{ fontSize: '18px', color: 'var(--body)', margin: 0 }}>
                {product.sentence}
              </p>

              {/* Action Buttons */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  flexWrap: 'wrap',
                  marginTop: '8px',
                }}
              >
                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => onOpenRfq(product.name)}
                >
                  <span>Request a quote for {product.name.toLowerCase()}</span>
                  <ArrowRight size={17} />
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

              {/* Three olive ticks */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  flexWrap: 'wrap',
                  paddingTop: '18px',
                  borderTop: '1px solid var(--line)',
                  marginTop: '8px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: 600, color: 'var(--body)' }}>
                  <span style={{ color: 'var(--olive)', display: 'flex' }}>
                    <Check size={16} strokeWidth={2.6} />
                  </span>
                  <span>Clear specifications</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: 600, color: 'var(--body)' }}>
                  <span style={{ color: 'var(--olive)', display: 'flex' }}>
                    <Check size={16} strokeWidth={2.6} />
                  </span>
                  <span>Documents with every shipment</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: 600, color: 'var(--body)' }}>
                  <span style={{ color: 'var(--olive)', display: 'flex' }}>
                    <Check size={16} strokeWidth={2.6} />
                  </span>
                  <span>Replies within [Sample] hours</span>
                </div>
              </div>
            </div>

            {/* Right Column: Main image (4:5) + 3 Thumbnails + Floating KEY-FACTS CARD */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '480px',
                margin: '0 auto',
              }}
            >
              {/* Main Image Stage (4:5) */}
              <div
                style={{
                  width: '100%',
                  aspectRatio: '4 / 5',
                  minHeight: '480px',
                  borderRadius: 'var(--radius-img)',
                  overflow: 'hidden',
                  position: 'relative',
                  backgroundColor: 'var(--mist)',
                  boxShadow: 'var(--shadow-rest)',
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
                    transition: 'all 0.3s ease',
                  }}
                />
              </div>

              {/* Three Thumbnails */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '12px',
                  marginTop: '14px',
                }}
              >
                {product.thumbnails.map((thumb, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImage(thumb)}
                    style={{
                      aspectRatio: '4 / 3',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      border: activeImage === thumb ? '2px solid var(--navy)' : '2px solid transparent',
                      padding: 0,
                      cursor: 'pointer',
                      background: 'var(--mist)',
                      position: 'relative',
                      boxShadow: '0 2px 8px rgba(16, 16, 79, 0.04)',
                    }}
                    aria-label={`Select photo ${idx + 1}`}
                  >
                    <img
                      src={thumb}
                      alt={`${product.name} thumbnail ${idx + 1}`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                    />
                  </button>
                ))}
              </div>

              {/* Floating white KEY-FACTS CARD on lower-left corner */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '84px',
                  left: '-20px',
                  backgroundColor: 'var(--white)',
                  borderRadius: '16px',
                  boxShadow: '0 16px 40px rgba(16, 16, 79, 0.14)',
                  border: '1px solid var(--line)',
                  padding: '20px 24px',
                  width: 'min(92%, 300px)',
                  zIndex: 20,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '16px',
                    fontWeight: 800,
                    color: 'var(--navy)',
                    borderBottom: '1px solid var(--line)',
                    paddingBottom: '6px',
                  }}
                >
                  Key Facts
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '13px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--muted)' }}>Season:</span>
                    <strong style={{ color: 'var(--navy)' }}>{product.keyFacts.season}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--muted)' }}>Packing:</span>
                    <span style={{ color: 'var(--body)' }}>{product.keyFacts.packing}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--muted)' }}>Minimum order:</span>
                    <strong style={{ color: 'var(--navy)' }}>1 container (FCL)</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. KEY FACTS (mist)
          Four .card items in a row with icons
          ===================================================================== */}
      <section className="section section-mist">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
              gap: '24px',
            }}
          >
            <div className="card">
              <div className="icon-circle" style={{ marginBottom: '16px' }}>
                <Award size={24} />
              </div>
              <div style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '4px' }}>Variety</div>
              <h3 style={{ fontSize: '19px', margin: 0 }}>{product.keyFacts.variety}</h3>
            </div>

            <div className="card">
              <div className="icon-circle" style={{ marginBottom: '16px' }}>
                <Globe size={24} />
              </div>
              <div style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '4px' }}>Origin</div>
              <h3 style={{ fontSize: '19px', margin: 0 }}>{product.keyFacts.origin}</h3>
            </div>

            <div className="card">
              <div className="icon-circle" style={{ marginBottom: '16px' }}>
                <Package size={24} />
              </div>
              <div style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '4px' }}>Packing</div>
              <h3 style={{ fontSize: '19px', margin: 0 }}>{product.keyFacts.packing}</h3>
            </div>

            <div className="card">
              <div className="icon-circle" style={{ marginBottom: '16px' }}>
                <Ship size={24} />
              </div>
              <div style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '4px' }}>Minimum order</div>
              <h3 style={{ fontSize: '19px', margin: 0 }}>1 container (FCL)</h3>
            </div>
          </div>

          {/* Special addition for Onions: olive-tint info card */}
          {product.id === 'onions' && (
            <div
              style={{
                marginTop: '32px',
                backgroundColor: 'var(--olive-tint)',
                border: '1px solid rgba(104, 112, 54, 0.2)',
                borderRadius: '16px',
                padding: '20px 28px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
              }}
            >
              <div className="icon-circle" style={{ backgroundColor: 'var(--white)' }}>
                <Calendar size={22} style={{ color: 'var(--olive-deep)' }} />
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '16px', color: 'var(--olive-deep)' }}>
                  Season: October to April, peak December to February
                </div>
                <div style={{ fontSize: '14px', color: 'var(--body)', marginTop: '2px' }}>
                  Direct harvest from Nashik agricultural belt with optimal curing and firmness for overseas voyages.
                </div>
              </div>
            </div>
          )}

          {/* Special addition for Fresh Fruits & Fresh Vegetables: "Items we supply" */}
          {product.supplyItems && product.supplyItems.length > 0 && (
            <div style={{ marginTop: '56px' }}>
              <div style={{ marginBottom: '24px' }}>
                <span className="eyebrow" style={{ marginBottom: '8px' }}>Range</span>
                <h3 style={{ fontSize: '26px', margin: 0 }}>Items we supply</h3>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 170px), 1fr))',
                  gap: '20px',
                }}
              >
                {product.supplyItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="card"
                    style={{
                      padding: '16px',
                      alignItems: 'center',
                      textAlign: 'center',
                      gap: '12px',
                    }}
                  >
                    <div
                      style={{
                        width: '100%',
                        aspectRatio: '1 / 1',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        backgroundColor: 'var(--mist)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                      }}
                    >
                      {item.isPlaceholder ? (
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', color: 'var(--muted)' }}>
                          <ImageIcon size={24} />
                          <span style={{ fontSize: '11px' }}>Photo</span>
                        </div>
                      ) : (
                        <img
                          src={item.img}
                          alt={item.name}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      )}
                    </div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--navy)' }}>
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
          4. SPECIFICATION (white)
          Clean two-column table in 4 groups
          ===================================================================== */}
      <section className="section section-white">
        <div className="container">
          <div className="section-intro left">
            <span className="eyebrow">Specification</span>
            <h2>Product specification.</h2>
            <p className="sub-line">Clear technical parameters agreed in writing with every container.</p>
          </div>

          <div className="card" style={{ padding: '36px', overflowX: 'auto' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
                gap: '36px',
              }}
            >
              {/* Group 1: PRODUCT */}
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '14px',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--navy)',
                    borderBottom: '2px solid var(--navy)',
                    paddingBottom: '8px',
                    marginBottom: '16px',
                  }}
                >
                  Product
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {product.specTable.product.map((row, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        paddingBottom: '8px',
                        borderBottom: '1px solid var(--line)',
                        fontSize: '14px',
                      }}
                    >
                      <span style={{ color: 'var(--muted)' }}>{row.label}</span>
                      <strong style={{ color: 'var(--navy)', textAlign: 'right' }}>{row.value}</strong>
                    </div>
                  ))}
                </div>
              </div>

              {/* Group 2: PACKING */}
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '14px',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--navy)',
                    borderBottom: '2px solid var(--navy)',
                    paddingBottom: '8px',
                    marginBottom: '16px',
                  }}
                >
                  Packing
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {product.specTable.packing.map((row, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        paddingBottom: '8px',
                        borderBottom: '1px solid var(--line)',
                        fontSize: '14px',
                      }}
                    >
                      <span style={{ color: 'var(--muted)' }}>{row.label}</span>
                      <strong style={{ color: 'var(--navy)', textAlign: 'right' }}>{row.value}</strong>
                    </div>
                  ))}
                </div>
              </div>

              {/* Group 3: SHIPPING */}
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '14px',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--navy)',
                    borderBottom: '2px solid var(--navy)',
                    paddingBottom: '8px',
                    marginBottom: '16px',
                  }}
                >
                  Shipping
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {product.specTable.shipping.map((row, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        paddingBottom: '8px',
                        borderBottom: '1px solid var(--line)',
                        fontSize: '14px',
                      }}
                    >
                      <span style={{ color: 'var(--muted)' }}>{row.label}</span>
                      <strong style={{ color: 'var(--navy)', textAlign: 'right' }}>{row.value}</strong>
                    </div>
                  ))}
                </div>
              </div>

              {/* Group 4: TERMS */}
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '14px',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--navy)',
                    borderBottom: '2px solid var(--navy)',
                    paddingBottom: '8px',
                    marginBottom: '16px',
                  }}
                >
                  Terms
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {product.specTable.terms.map((row, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        paddingBottom: '8px',
                        borderBottom: '1px solid var(--line)',
                        fontSize: '14px',
                      }}
                    >
                      <span style={{ color: 'var(--muted)' }}>{row.label}</span>
                      <strong style={{ color: 'var(--navy)', textAlign: 'right' }}>{row.value}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. AVAILABILITY (mist)
          12-month calendar bar with legend
          ===================================================================== */}
      <section className="section section-mist">
        <div className="container">
          <div className="section-intro left">
            <span className="eyebrow">Seasonality</span>
            <h2>When it is available.</h2>
            <p className="sub-line">
              {product.isRealSeason
                ? 'Harvested from October to April with peak supply December to February.'
                : 'Commercial harvesting calendar for container booking [Sample months].'}
            </p>
          </div>

          <div className="card" style={{ padding: '32px' }}>
            {/* 12-Month Bar Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(12, 1fr)',
                gap: '8px',
                textAlign: 'center',
              }}
            >
              {product.months.map((m) => {
                const isPeak = m.status === 'peak';
                const isAvailable = m.status === 'available';

                return (
                  <div key={m.month} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div
                      style={{
                        height: '48px',
                        borderRadius: '10px',
                        backgroundColor: isPeak
                          ? 'var(--navy)'
                          : isAvailable
                          ? 'var(--olive)'
                          : 'transparent',
                        border: isPeak || isAvailable ? 'none' : '1px solid var(--line)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: isPeak || isAvailable ? 'var(--white)' : 'var(--muted)',
                        fontWeight: 700,
                        fontSize: '12px',
                      }}
                    >
                      {isPeak ? 'PEAK' : isAvailable ? '✓' : '—'}
                    </div>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--navy)' }}>
                      {m.month}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Legend */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '16px',
                borderTop: '1px solid var(--line)',
                paddingTop: '20px',
                marginTop: '28px',
                fontSize: '13px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '14px', height: '14px', borderRadius: '4px', backgroundColor: 'var(--navy)' }} />
                  <span>Peak season</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '14px', height: '14px', borderRadius: '4px', backgroundColor: 'var(--olive)' }} />
                  <span>Available</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '14px', height: '14px', borderRadius: '4px', border: '1px solid var(--line)' }} />
                  <span>Off-season</span>
                </div>
              </div>

              {!product.isRealSeason && (
                <span style={{ color: 'var(--muted)', fontSize: '12px' }}>Sample months</span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          6. PACKING AND LOADING (white)
          Three image .card items with captions
          ===================================================================== */}
      <section className="section section-white">
        <div className="container">
          <div className="section-intro left">
            <span className="eyebrow">Packing & Loading</span>
            <h2>Packed and loaded with care.</h2>
            <p className="sub-line">Cold-chain protocols protecting shelf-life until destination discharge.</p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
              gap: '32px',
            }}
          >
            {product.packingCards.map((card, idx) => (
              <div key={idx} className="card">
                <div className="card-img-wrap">
                  {card.isPlaceholder || !card.img ? (
                    <div className="placeholder-box" style={{ width: '100%', height: '100%' }}>
                      <ImageIcon size={32} style={{ color: 'var(--muted)' }} />
                      <span className="placeholder-caption">{card.title} placeholder</span>
                    </div>
                  ) : (
                    <img src={card.img} alt={card.title} className="card-img" />
                  )}
                </div>
                <h3 style={{ marginTop: '20px', marginBottom: '8px', fontSize: '20px' }}>{card.title}</h3>
                <p style={{ fontSize: '15px', color: 'var(--muted)' }}>{card.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          7. DOCUMENTS (mist)
          Six chips with icons
          ===================================================================== */}
      <section className="section section-mist">
        <div className="container">
          <div className="section-intro centered">
            <span className="eyebrow">Export Compliance</span>
            <h2>Documents with every shipment.</h2>
            <p className="sub-line">Standard documentation prepared accurately before vessel departure.</p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '20px',
              marginTop: '16px',
            }}
          >
            {[
              { label: 'Commercial invoice', icon: FileText },
              { label: 'Packing list', icon: PackageCheck },
              { label: 'Phytosanitary certificate', icon: ShieldCheck },
              { label: 'Certificate of origin', icon: Award },
              { label: 'Bill of lading', icon: Ship },
              { label: 'Quality report on request', icon: FileCheck },
            ].map((doc, idx) => {
              const Icon = doc.icon;
              return (
                <div
                  key={idx}
                  style={{
                    backgroundColor: 'var(--white)',
                    borderRadius: 'var(--radius-pill)',
                    padding: '16px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    border: '1px solid var(--line)',
                    boxShadow: '0 4px 16px rgba(16, 16, 79, 0.04)',
                  }}
                >
                  <div className="icon-circle" style={{ width: '40px', height: '40px', minWidth: '40px', minHeight: '40px' }}>
                    <Icon size={18} />
                  </div>
                  <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '15px', color: 'var(--navy)' }}>
                    {doc.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          8. HOW IT WORKS (white)
          The same five .step items as on Home
          ===================================================================== */}
      <section className="section section-white">
        <div className="container">
          <div className="section-intro centered">
            <span className="eyebrow">How it works</span>
            <h2>Your container in 5 <span className="text-highlight-leaf">steps</span>.</h2>
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
              <p className="step-desc">Share your requirements, destination port and requested schedule.</p>
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
                <span className="step-time-badge">[Sample] days</span>
              </div>
              <div className="step-title">Packing and loading</div>
              <p className="step-desc">Produce sorted, calibrated and loaded into reefer containers.</p>
            </div>

            <div className="step">
              <div className="step-header">
                <div className="step-number step-seq-4">4</div>
                <span className="step-time-badge">[Sample] days</span>
              </div>
              <div className="step-title">Documents</div>
              <p className="step-desc">Phytosanitary, certificate of origin and invoice drafts prepared.</p>
            </div>

            <div className="step">
              <div className="step-header">
                <div className="step-number step-seq-5">5</div>
                <span className="step-time-badge">[Sample] days</span>
              </div>
              <div className="step-title">Shipping and arrival</div>
              <p className="step-desc">Container tracked continuously from Indian port to discharge.</p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          9. QUESTIONS (mist)
          .accordion with four product questions + "Still have questions?" card
          ===================================================================== */}
      <section className="section section-mist">
        <div className="container">
          <div className="section-intro centered">
            <span className="eyebrow">FAQs</span>
            <h2>Common questions.</h2>
            <p className="sub-line">Practical details about importing {product.name.toLowerCase()} from India.</p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
              gap: '40px',
              alignItems: 'start',
            }}
          >
            {/* Accordion List */}
            <div className="accordion">
              {product.faq.map((item, idx) => (
                <details key={idx} open={idx === 0}>
                  <summary>
                    <span>{item.q}</span>
                    <div className="accordion-icon-circle">+</div>
                  </summary>
                  <div className="accordion-content">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>

            {/* "Still have questions?" Card */}
            <div className="card" style={{ padding: '36px', textAlign: 'center', alignItems: 'center' }}>
              <div className="icon-circle" style={{ margin: '0 auto 16px auto' }}>
                <HelpCircle size={26} />
              </div>
              <h3 style={{ marginBottom: '8px' }}>Still have questions?</h3>
              <p style={{ fontSize: '15px', color: 'var(--muted)', marginBottom: '24px' }}>
                Our export desk is on WhatsApp to answer custom packing or schedule queries.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{ width: '100%' }}
              >
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          10. RELATED PRODUCTS (white)
          Two product .card items
          ===================================================================== */}
      <section className="section section-white">
        <div className="container">
          <div className="section-intro left">
            <span className="eyebrow">Complementary</span>
            <h2>Related products.</h2>
            <p className="sub-line">Other agricultural commodities frequently ordered together.</p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
              gap: '32px',
              maxWidth: '840px',
            }}
          >
            {product.related.map((rel) => (
              <div key={rel.id} className="card">
                <div className="card-img-wrap">
                  <img src={rel.img} alt={rel.name} className="card-img" />
                </div>
                <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '8px', flexGrow: 1 }}>
                  <div>
                    <span className="eyebrow" style={{ fontSize: '11px', padding: '4px 10px' }}>
                      {rel.category}
                    </span>
                  </div>
                  <h3>{rel.name}</h3>
                  <p style={{ fontSize: '15px', color: 'var(--muted)', flexGrow: 1 }}>
                    {rel.desc}
                  </p>
                  <div style={{ marginTop: '12px' }}>
                    <button
                      type="button"
                      className="link"
                      onClick={() => onNavigate(rel.path)}
                      style={{ background: 'none', border: 'none', padding: 0 }}
                    >
                      <span>Explore</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          11. QUOTE FORM band (navy)
          Product preselected ONLY on its own product page!
          ===================================================================== */}
      <QuoteFormSection initialProduct={product.name} />
    </div>
  );
};
