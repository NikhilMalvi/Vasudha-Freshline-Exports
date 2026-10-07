# Vasudha-Freshline-Exports

Official B2B website and export inquiry platform for **Vasudha Freshline Exports LLP**, an Indian exporter of agricultural commodities, fresh fruits, vegetables, milled rice, and whole spices. Built with React, TypeScript, and Vite.

---

## 🏛️ Brand & Architectural Overview
This platform is designed as a **trust-and-enquiry website** for international buyers, wholesalers, retail chains, and container importers. It embodies the aesthetic of a **quiet European trading house**:
- **Design Philosophy:** Minimalist, calm, factual, and modern. Lots of whitespace, strict 12-column grid, 1px hairlines (`#D9D5C8`), real documentary photography, and Newsreader serif headings paired with Inter sans-serif body.
- **Brand Palette:**
  - `--ivory`: `#FAF8F3` (Warm editorial paper background)
  - `--bone`: `#F0EDE4` (Alternate limestone section backgrounds)
  - `--line`: `#DFDBD0` (1px razor-sharp hairlines)
  - `--navy`: `#151C17` (Deep Botanical Obsidian Noir — buttons & dark architectural sections, zero blue)
  - `--navy-hover`: `#222D25` (Deep forest charcoal hover)
  - `--olive`: `#55602E` (Rich Mediterranean olive accents & links)
  - `--olive-light`: `#B4BC7C` (Crisp luminescent olive on dark)
  - `--ink`: `#121512` (Headlines)
  - `--charcoal`: `#2C302C` (Authoritative body text)
  - `--muted`: `#5C605C` (Captions & metadata)

---

## 📦 Key Commodities Exported
1. **Bhagwa Pomegranates:** Calibrated counts 9–15, 3.5kg / 5.0kg 5-ply CFB cartons.
2. **Fresh Onions:** Nashik Red, Pink & White (45–60mm), 10kg/25kg/50kg Leno mesh bags.
3. **Milled Rice:** 1121 Basmati, Sella & Non-Basmati, 20kg/25kg/50kg BOPP woven bags.
4. **Whole Spices:** Cumin (Jeera), Turmeric (high-curcumin), dried red chillies.
5. **Fresh Fruits:** Thompson table grapes, Cavendish bananas, Alphonso mangoes.
6. **Fresh Field Vegetables:** G4 green chillies, tender okra, ginger, lemons.

---

## ✨ High-Value Features & Components
- **Sub-2-Minute RFQ Generator:** Full container load inquiry form with validation and reference number generation (`VF-xxxx`).
- **Official Export Brochure & Profile Modal (`BrochureModal.tsx`):** Printable export specification sheet with native PDF download formatting.
- **Quick Contact Slideout Drawer (`QuickContactDrawer.tsx`):** Fast WhatsApp trade desk generator, office lines, and packhouse location.
- **Statutory Accreditations Ribbon (`AccreditationRibbon.tsx`):** APEDA, FSSAI, DGFT/IEC, Phytosanitary, MSME, and GST verification tags.
- **Logistics Highway Corridor (`LogisticsCorridor.tsx`):** Highlights the 4.5-hour (~185 km) cold-chain transit from Nashik packhouses to JNPT Port (Nhava Sheva, INNSA) and maritime sailing schedules to Jebel Ali, Colombo, Port Klang, Singapore, Dammam, and Rotterdam.
- **Packaging Formats Showcase (`PackagingFormats.tsx`):** Technical breakdown of 5-ply CFB cartons, Leno mesh bags, BOPP sacks, clamshell punnets, and private label OEM branding.
- **Commercial Importer FAQ (`BuyerFaq.tsx`):** Contractual answers for MOQ, Incoterms (FOB/CFR/CIF), L/C & T/T terms, SGS/Geo-Chem third-party inspection, and TempTale data loggers.
- **12-Month Crop Seasonality Matrix (`SeasonalityGrid.tsx`):** Interactive availability schedule.
- **Documentary Video Player:** Embedded packhouse loading, PTI container yard inspection, and wholesale market discharge footage.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/NikhilMalvi/Vasudha-Freshline-Exports.git

# Navigate into project directory
cd Vasudha-Freshline-Exports

# Install dependencies
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
```bash
npm run build
```
Creates an optimized production bundle in the `dist/` directory.

---

## 🌐 Deploy to Vercel

This repository is pre-configured for instant deployment on [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FNikhilMalvi%2FVasudha-Freshline-Exports)

### Simple Steps to Deploy:
1. Log in to your [Vercel Dashboard](https://vercel.com).
2. Click **Add New...** &rarr; **Project**.
3. Select your repository: **`NikhilMalvi/Vasudha-Freshline-Exports`**.
4. Vercel automatically detects the configuration from `vercel.json`:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **Deploy**. The site will be live with custom domain support, global CDN caching, and SPA routing support.

---

## 📄 License
Proprietary — All rights reserved by **Vasudha Freshline Exports LLP**.
