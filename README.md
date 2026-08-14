# Just Blame Mike — Website

A Next.js 14 website for Just Blame Mike digital marketing agency.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Font:** Inter (via next/font)
- **Deployment:** Vercel, Netlify, or any Node.js host

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm start
```

## Project Structure

```
justblamemike/
├── app/
│   ├── layout.js                    # Root layout (header, footer, heaven mode, org schema)
│   ├── globals.css                  # Global styles + Tailwind + Heaven Mode CSS
│   ├── page.js                      # Home page (/)
│   ├── components/
│   │   ├── Header.js                # Sticky nav with services dropdown + mobile menu
│   │   ├── Footer.js                # Site footer
│   │   ├── FadeIn.js                # Scroll-triggered animation
│   │   ├── UI.js                    # SectionLabel, OrangeBtn, PlaceholderImg, CTA
│   │   ├── Schema.js                # JSON-LD schema helpers (Organization, Service, Breadcrumb, etc.)
│   │   ├── ThemeProvider.js         # Heaven mode context provider
│   │   ├── HeavenToggle.js          # Dark/light mode toggle banner
│   │   └── AuditForm.js             # Reusable audit request form
│   ├── services/
│   │   ├── layout.js                # Services section SEO metadata
│   │   ├── page.js                  # Services overview (/services)
│   │   ├── google-ads/
│   │   │   ├── page.js              # Google Ads page with schema (/services/google-ads)
│   │   │   └── content.js           # Google Ads client content + audit form
│   │   ├── meta-ads/
│   │   │   ├── page.js              # Meta Ads page with schema (/services/meta-ads)
│   │   │   └── content.js           # Meta Ads client content + audit form
│   │   ├── web-design/
│   │   │   ├── page.js              # Web Design page with schema (/services/web-design)
│   │   │   └── content.js           # Web Design client content + audit form
│   │   └── seo/
│   │       ├── page.js              # SEO page with schema (/services/seo)
│   │       └── content.js           # SEO client content + audit form
│   ├── case-studies/
│   │   ├── layout.js                # SEO metadata
│   │   └── page.js                  # Case studies (/case-studies)
│   └── contact/
│       ├── layout.js                # SEO metadata
│       └── page.js                  # Contact page (/contact)
├── public/
│   └── logo.jpg                     # Brand logo
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
└── package.json
```

## All Routes

| Route                    | Description                                      |
| ------------------------ | ------------------------------------------------ |
| `/`                      | Home — hero, stats, services, work preview, CTA  |
| `/services`              | Services overview with links to each service     |
| `/services/google-ads`   | Google Ads — detailed service page + audit form   |
| `/services/meta-ads`     | Meta Ads — detailed service page + audit form     |
| `/services/web-design`   | Web Design — detailed service page + audit form   |
| `/services/seo`          | SEO — detailed service page + audit form          |
| `/case-studies`          | Empty case study cards (add your own content)     |
| `/contact`               | Contact form + info                               |

## Features

### Heaven Mode 😇
Click the banner at the top of the site to toggle between dark mode and "Heaven Mode" — a light, cloudy theme. It's stored in session so it persists while browsing.

### Schema / Structured Data
Every page has JSON-LD structured data for SEO. The helpers are in `app/components/Schema.js`:
- **Organization** schema on every page (via root layout)
- **Service** schema on each service page
- **BreadcrumbList** on service pages
- **LocalBusiness** available for contact page
- **WebPage** helper available for any page

To check schema on any URL, use: https://search.google.com/test/rich-results

To customise, edit the schema helper functions in `Schema.js` or pass different data directly.

### Audit Forms
Each service page has a "Get Your Free [Service] Audit" form. Currently client-side only — wire up to your backend:
- **Formspree:** Add `action="https://formspree.io/f/YOUR_ID"` and `method="POST"` to the form
- **API route:** Create `app/api/audit/route.js`
- **Third party:** Integrate with HubSpot, Mailchimp, etc.

## Customisation

### Adding images
Replace `<PlaceholderImg>` components with `<Image>` from `next/image`:
```jsx
import Image from 'next/image';
<Image src="/your-image.jpg" alt="Description" width={800} height={450} className="rounded-2xl" />
```
Put images in the `/public` folder.

### Brand colours
Defined in `tailwind.config.js`:
- `brand-orange`: #f48c25
- `brand-dark`: #1a1008
- `brand-cream`: #f8f7f5
- `brand-warm`: #2a1f14

### Changing your domain
Search for `justblamemike.com` across the schema files and update to your actual domain.

## Deploy to Vercel (easiest)

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repo
4. Click Deploy

Free hosting, automatic HTTPS, custom domain support.

---

Built with ☕ and blame. — Mike
