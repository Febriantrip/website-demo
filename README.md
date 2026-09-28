# Nexora Distribution — React Company Website

Modern distributor company profile built with React + Vite.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Production build

```bash
npm run build
```

Output is created in `dist/`.

## Main customization

Edit `src/data/company.js` for:
- Company name
- Contact details / WhatsApp
- Product categories
- Statistics

Edit the text/sections in `src/App.jsx`.

## Database

This version intentionally does **not** require a database. The quotation form routes directly to WhatsApp, making the company profile fast and simple to deploy. If a CMS, lead storage, catalog management, login, or admin panel is added later, use MySQL as the database.

## Design notes

The site uses an original visual system inspired by premium industrial/distribution websites: cinematic hero motion, staggered entrance animations, floating KPI cards, marquees, scroll reveals, animated network routes, interactive product imagery, responsive mobile navigation, and reduced-motion accessibility support.
