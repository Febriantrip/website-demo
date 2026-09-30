# Nexora Website Demo

<p align="center">
  <strong>One React company-profile engine with six industry-specific experiences for distributor, retail, fashion, textile, manufacturing, and service businesses.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-Frontend-61DAFB?logo=react&logoColor=111" alt="React">
  <img src="https://img.shields.io/badge/Vite-Build-646CFF?logo=vite&logoColor=fff" alt="Vite">
  <img src="https://img.shields.io/badge/JavaScript-ESM-F7DF1E?logo=javascript&logoColor=111" alt="JavaScript">
  <img src="https://img.shields.io/badge/GitHub_Pages-Deploy-222?logo=github&logoColor=fff" alt="GitHub Pages">
  <img src="https://img.shields.io/badge/Responsive-Mobile_First-0F766E" alt="Responsive">
</p>

## Overview

**Nexora Website Demo** is a reusable company-profile concept built to demonstrate how one technical foundation can adapt to very different business identities.

Instead of maintaining six separate websites, the project uses a shared React experience and a structured industry configuration layer. Switching industries changes the visual direction, messaging, metrics, services, showcase content, process narrative, and calls to action while preserving one maintainable application.

The project is intentionally **frontend-only**. Quote requests are composed in the browser and handed off to WhatsApp, so no database or backend service is required.

## Industry experiences

| Experience | Positioning |
| --- | --- |
| **Distributor** | Distribution coverage, warehousing, fulfillment, and market execution |
| **Retail** | Store experience, product discovery, campaign, and conversion |
| **Fashion** | Editorial commerce, lookbook, collection storytelling, and brand experience |
| **Textile** | Material library, technical specifications, dyeing, finishing, and development |
| **Manufacturing** | Production capability, quality control, engineering, and compliance |
| **Services** | Expertise, process, outcomes, case-study framing, and support |

## Interaction highlights

- Industry switcher with six distinct content systems
- Cinematic hero composition
- Pointer-reactive visual treatment
- Scroll-progress indicator
- IntersectionObserver-based reveal animations
- Responsive navigation
- Animated marquee
- KPI / metric presentation
- Interactive showcase selector
- Step-by-step process sections
- Dynamic visual themes per industry
- WhatsApp quotation modal
- Reduced dependency footprint
- Responsive desktop and mobile layouts

## Architecture

~~~mermaid
flowchart LR
    V[Visitor] --> APP[React Application]
    APP --> STATE[Selected Industry]
    STATE --> CFG[Industry Configuration]
    CFG --> HERO[Hero / Metrics]
    CFG --> CAP[Capabilities]
    CFG --> SHOW[Showcase]
    CFG --> PROC[Process]
    CFG --> CTA[Contact / Quote]

    CTA --> FORM[Quote Modal]
    FORM --> WA[WhatsApp Handoff]
~~~

Industry content is centralized in `src/data/industries.js`, while shared UI components render the selected industry's presentation.

## Tech stack

| Layer | Technology |
| --- | --- |
| UI | React |
| Build tooling | Vite |
| Language | JavaScript / JSX |
| Icons | Lucide React |
| Styling | Modular CSS files and CSS custom properties |
| Interaction | React state, browser events, IntersectionObserver |
| Deployment | GitHub Actions + GitHub Pages |
| Lead handoff | WhatsApp deep link |

## Repository structure

~~~text
website-demo/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── src/
│   ├── components/
│   │   ├── BrandMark.jsx
│   │   ├── HeroVisual.jsx
│   │   ├── IndustryMenu.jsx
│   │   ├── QuoteModal.jsx
│   │   └── SectionHeader.jsx
│   ├── data/
│   │   └── industries.js
│   ├── styles/
│   │   ├── animations.css
│   │   ├── base.css
│   │   ├── layout.css
│   │   ├── responsive.css
│   │   ├── tokens.css
│   │   └── visuals.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
~~~

## Local development

Install dependencies:

~~~bash
npm install
~~~

Start the development server:

~~~bash
npm run dev
~~~

Create a production build:

~~~bash
npm run build
~~~

Preview the production bundle:

~~~bash
npm run preview
~~~

## Customization

The main content system lives in:

~~~text
src/data/industries.js
~~~

Each industry defines its own:

- hero copy and imagery
- marquee content
- metrics
- story and positioning
- capability cards
- showcase items
- process steps
- contact messaging

Shared layout and interaction behavior remain in the React components.

## Lead flow

The quotation form collects:

- contact name
- company name
- project requirement

On submit, the app formats the brief into a WhatsApp message and opens a `wa.me` link. No form data is stored by this repository.

## GitHub Pages deployment

The repository contains a GitHub Actions workflow that:

1. checks out `main`
2. installs dependencies with `npm ci`
3. builds the Vite project
4. uploads `dist/` as a Pages artifact
5. deploys the artifact to GitHub Pages

The Vite base path is configured for the `/website-demo/` project path.

## Demo-data note

**NEXORA / PT Nexora Creative Digital is a fictional demo identity.**

The contact details, industry metrics, business statistics, capability examples, and showcase content are illustrative demo material. They should not be interpreted as audited claims about a real company.

External photographs are referenced from Unsplash URLs and are used as visual demo assets.

## Repository hygiene

This project does not require production credentials or a database.

The repository ignores:

- `node_modules/`
- `dist/`
- `.env`
- local backup directories

Do not replace the demo contact data with private customer information before publishing a fork.

## Author

**Febrian Tri Prasmanto**  
Full-Stack Programmer

- GitHub: [@Febriantrip](https://github.com/Febriantrip)
- LinkedIn: [linkedin.com/in/febriantrip](https://www.linkedin.com/in/febriantrip)

---

<p align="center">
  One codebase, six industries, six different first impressions.
</p>
