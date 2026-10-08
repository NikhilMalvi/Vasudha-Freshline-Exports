/**
 * Curated high-resolution documentary photography assets
 * Strictly aligned with Master Lite Image Shopping List:
 * - Natural light, clean background, neutral surfaces
 * - No faces, no readable text or logos, no handshakes
 * - One clear agricultural subject per frame
 */

export const IMAGES = {
  // 01-pomegranate-cut-open (Home hero, Products, Pomegranates page)
  pomegranatesCut: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=1200&q=80',

  // 02-pomegranates-crate (Pomegranates page, Gallery)
  pomegranatesBox: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=1000&q=80',

  // 03-red-onions-loose (Home hero, Products, Onions page)
  onions: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=1000&q=80',

  // 04-red-onions-net-bag (Home hero, Onions page)
  onionsMesh: 'https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?auto=format&fit=crop&w=1000&q=80',
  onionsWhite: 'https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?auto=format&fit=crop&w=1000&q=80',

  // 05-onions-sorting-hands (Onions page, Gallery)
  onionsSortingHands: 'https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?auto=format&fit=crop&w=1000&q=80',

  // 06-rice-grains-scoop (Home hero, Products, Rice page)
  riceGrains: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=1000&q=80',

  // 07-rice-sacks (Rice page, Gallery)
  riceSack: 'https://images.unsplash.com/photo-1594489428504-5c0c480a15fd?auto=format&fit=crop&w=1000&q=80',

  // 08-spices-bowls (Products, Spices page)
  spices: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1000&q=80',
  spicesCumin: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=1000&q=80',
  spicesTurmeric: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=1000&q=80',

  // 09-fruit-crate-mixed (Products, Fresh Fruits page)
  fruits: 'https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=1000&q=80',
  fruitsGrapes: 'https://images.unsplash.com/photo-1596363505729-4190a9506133?auto=format&fit=crop&w=1000&q=80',
  fruitsBananas: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=1000&q=80',

  // 10-vegetable-crate-mixed (Products, Fresh Vegetables page)
  vegetables: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1000&q=80',
  vegetablesOkra: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?auto=format&fit=crop&w=1000&q=80',
  vegetablesGinger: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&w=1000&q=80',

  // 11-hands-sorting-produce (About, Home about, Gallery)
  packhouseInspection: 'https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?auto=format&fit=crop&w=1200&q=80',

  // 12-warehouse-crates-pallets (About, Gallery, Packing sections)
  portContainers: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',

  // 13-containers-yard (Home video, Gallery)
  containersYard: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80',

  // 14-container-ship-port (Home gallery, Gallery)
  oceanVessel: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',

  // 15-container-loading (Gallery, Packing sections)
  containerLoading: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80',

  // 16-documents-desk (Certificates hero)
  documentsDesk: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',

  // Fallback commodity keys
  pomegranates: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=1000&q=80',
  rice: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1000&q=80',
};

export const SHOPPING_LIST_MAPPING: Record<string, { searchWords: string; usedOn: string; url: string }> = {
  '01-pomegranate-cut-open': {
    searchWords: 'pomegranate cut open',
    usedOn: 'Home hero, Products, Pomegranates page',
    url: IMAGES.pomegranatesCut,
  },
  '02-pomegranates-crate': {
    searchWords: 'pomegranates crate market',
    usedOn: 'Pomegranates page, Gallery',
    url: IMAGES.pomegranatesBox,
  },
  '03-red-onions-loose': {
    searchWords: 'red onions',
    usedOn: 'Home hero, Products, Onions page',
    url: IMAGES.onions,
  },
  '04-red-onions-net-bag': {
    searchWords: 'red onions net bag OR onion sack',
    usedOn: 'Home hero, Onions page',
    url: IMAGES.onionsMesh,
  },
  '05-onions-sorting-hands': {
    searchWords: 'sorting onions hands OR onion harvest',
    usedOn: 'Onions page, Gallery',
    url: IMAGES.onionsSortingHands,
  },
  '06-rice-grains-scoop': {
    searchWords: 'basmati rice grains scoop',
    usedOn: 'Home hero, Products, Rice page',
    url: IMAGES.riceGrains,
  },
  '07-rice-sacks': {
    searchWords: 'rice sacks stacked OR rice bags',
    usedOn: 'Rice page, Gallery',
    url: IMAGES.riceSack,
  },
  '08-spices-bowls': {
    searchWords: 'whole spices bowls',
    usedOn: 'Products, Spices page',
    url: IMAGES.spices,
  },
  '09-fruit-crate-mixed': {
    searchWords: 'fruit crate market',
    usedOn: 'Products, Fresh Fruits page',
    url: IMAGES.fruits,
  },
  '10-vegetable-crate-mixed': {
    searchWords: 'vegetable crate market',
    usedOn: 'Products, Fresh Vegetables page',
    url: IMAGES.vegetables,
  },
  '11-hands-sorting-produce': {
    searchWords: 'sorting vegetables hands OR packing fruit',
    usedOn: 'About, Home about, Gallery',
    url: IMAGES.packhouseInspection,
  },
  '12-warehouse-crates-pallets': {
    searchWords: 'warehouse pallets crates',
    usedOn: 'About, Gallery, Packing sections',
    url: IMAGES.portContainers,
  },
  '13-containers-yard': {
    searchWords: 'shipping containers yard',
    usedOn: 'Home video, Gallery',
    url: IMAGES.containersYard,
  },
  '14-container-ship-port': {
    searchWords: 'container ship port',
    usedOn: 'Home gallery, Gallery',
    url: IMAGES.oceanVessel,
  },
  '15-container-loading': {
    searchWords: 'loading shipping container forklift',
    usedOn: 'Gallery, Packing sections',
    url: IMAGES.containerLoading,
  },
  '16-documents-desk': {
    searchWords: 'paperwork documents desk pen',
    usedOn: 'Certificates hero',
    url: IMAGES.documentsDesk,
  },
};
