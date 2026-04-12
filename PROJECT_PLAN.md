# 🏗️ NRV Enterprises Website — Project Plan

> Created: 12 April 2026
> Status: Phase 1 ✅ | Phase 2 ✅ | Phase 3 ✅ Complete | Phase 4 — Next

---

## 📌 Project Overview

**Client:** NRV Enterprises
**Business:** Trading in Lubricants & Machine-related products
**Team Size:** 3 members
**Goals:** Online presence, branding, customer trust, lead generation, product catalog, multilanguage support

---

## 📐 Architecture Overview

```
nrv-enterprises/
├── app/                  # Next.js 14 App Router
│   ├── [locale]/         # i18n routing (en/hi)
│   │   ├── page.tsx      # Home
│   │   ├── about/
│   │   ├── products/
│   │   ├── services/
│   │   ├── why-us/
│   │   ├── contact/
│   │   └── inquiry/
├── components/           # Reusable UI components
│   ├── layout/           # Navbar, Footer, etc.
│   ├── ui/               # Buttons, Cards, Forms
│   └── sections/         # Page sections (Hero, CTA, etc.)
├── lib/                  # Utilities, i18n config
├── messages/             # en.json, hi.json (translations)
├── public/               # Images, icons, logo (later)
├── sanity/               # CMS schema & config
└── styles/               # Global styles
```

**Data Flow:**
```
Sanity CMS → Next.js (SSG/ISR) → Vercel CDN → User
     ↑
  Raj updates products/content here (no code needed)
```

---

## 🛠️ Tech Stack

| Layer | Tech | Why |
|-------|------|-----|
| Frontend Framework | Next.js 14 | Fast, SEO-friendly, great for business sites |
| Styling | Tailwind CSS | Clean, responsive, fast to build |
| Animations | Framer Motion | Smooth, professional animations |
| CMS | Sanity.io | Free tier, easy to update without touching code |
| Multilanguage | next-intl | Best fit for Next.js App Router |
| Forms / Lead gen | React Hook Form + EmailJS | Contact/inquiry forms, no backend needed |
| Hosting | Vercel (free tier) | Best match for Next.js |
| Domain | Hostinger | Affordable, already familiar |

---

## 📄 Pages

1. **Home** — Hero, tagline, quick intro, highlights
2. **About Us** — Company story, team, trust signals
3. **Products** — Catalog (Lubricants, Machine parts — filterable)
4. **Services** — What you offer beyond products
5. **Why Choose Us** — USPs, certifications, experience
6. **Contact** — Form, phone, address, map
7. **Inquiry / Get Quote** — Lead generation form

---

## 📦 Phases & Timeline

### Phase 1 — Foundation *(Week 1)*
> Setup, structure, no design yet

| Stage | Task | Status |
|-------|------|--------|
| 1.1 | Init Next.js 14 + Tailwind + folder structure | ✅ Done |
| 1.2 | Setup i18n (English + Hindi routing) | ✅ Done |
| 1.3 | Create Navbar + Footer components | ✅ Done |
| 1.4 | Setup Sanity CMS + connect to project | ✅ Done |
| 1.5 | Define Sanity schemas (Products, Services, Company Info) | ✅ Done |

**Deliverable:** Running app locally, CMS connected, language switching works

---

### Phase 2 — Core Pages *(Week 2)*
> Build all pages with real content structure

| Stage | Task | Status |
|-------|------|--------|
| 2.1 | Home page (Hero + sections) | ✅ Done |
| 2.2 | About Us page | ✅ Done |
| 2.3 | Products page + individual product pages | ✅ Done |
| 2.4 | Services page | ✅ Done |
| 2.5 | Why Choose Us page | ✅ Done |

**Deliverable:** All pages visible, content pulled from Sanity

---

### Phase 3 — Lead Gen + Forms *(Week 3)*
> Make the site work for business

| Stage | Task | Status |
|-------|------|--------|
| 3.1 | Contact page with form + EmailJS integration | ✅ Done |
| 3.2 | Inquiry / Get Quote form | ✅ Done |
| 3.3 | WhatsApp floating button | ✅ Done |
| 3.4 | Google Maps embed (office location) | ✅ Done |

**Deliverable:** Forms working, leads hitting your email

---

### Phase 4 — Design Polish *(Week 4)*
> Make it look premium

| Stage | Task | Status |
|-------|------|--------|
| 4.1 | Framer Motion animations (scroll reveals, hero) | ⬜ Pending |
| 4.2 | Mobile responsiveness audit | ⬜ Pending |
| 4.3 | Color theme finalization + typography | ⬜ Pending |
| 4.4 | Logo placeholder + favicon | ⬜ Pending |
| 4.5 | Loading states, error pages (404) | ⬜ Pending |

**Deliverable:** Site looks professional and feels smooth

---

### Phase 5 — SEO + Launch *(Week 5)*
> Get found on Google, go live

| Stage | Task | Status |
|-------|------|--------|
| 5.1 | Meta tags, OG images, sitemap | ⬜ Pending |
| 5.2 | Performance audit (Lighthouse) | ⬜ Pending |
| 5.3 | Deploy to Vercel | ⬜ Pending |
| 5.4 | Domain setup (Hostinger) | ⬜ Pending |
| 5.5 | Final testing across devices | ⬜ Pending |

**Deliverable:** 🚀 Live website

---

## 🔑 Key Decisions

| Decision | Choice | Reason |
|----------|--------|--------|
| Framework | Next.js 14 | SEO + speed |
| Styling | Tailwind CSS | Fast, consistent |
| Animation | Framer Motion | Professional feel |
| CMS | Sanity.io | Free, easy to use |
| Forms | EmailJS | No backend needed |
| Multilang | next-intl | Best for App Router |
| Hosting | Vercel (free) | Perfect for Next.js |
| Domain | Hostinger | Cheap, already familiar |

---

## ✅ Working Agreement

- One phase at a time — build → review → approve → next phase
- CMS first so content can be updated independently at any time
- Mobile-first design always
- Logo to be added later (placeholder used initially)

---

## 📝 Change Log

| Date | Change |
|------|--------|
| 12-04-2026 | Project plan created |
| 12-04-2026 | Phase 1 completed — Next.js, Tailwind, i18n, Navbar, Footer, Sanity install, Sanity schemas |
