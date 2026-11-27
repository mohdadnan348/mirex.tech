# MirexTech – Phase 6, 7 & 8

## Phase 6 – Contact and custom quote flow
- Pricing CTAs carry the selected package/service into `/contact`.
- Contact form validates email and phone length, includes a honeypot field, and shows submission feedback.
- EmailJS remains the primary delivery integration when configured.
- If EmailJS environment variables are absent, the form opens a prefilled email to `hello.mirextech@gmail.com` as a fallback.
- Existing contact phone and WhatsApp destinations were preserved exactly from the supplied Phase 5 ZIP.

### Required deployment environment variables
Set these in the hosting provider's environment settings (never commit real credentials):
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

## Phase 7 – SEO, analytics, performance and accessibility
- Preserved existing title, description, canonical, Open Graph and Organization JSON-LD metadata.
- Added font preconnect hints, viewport-fit, skip link, keyboard focus visibility and reduced-motion support.
- Added vendor chunk splitting and disabled production source maps.
- Added optional Google Analytics 4 loader. It only runs after cookie consent is accepted.
- Configure `VITE_GA_MEASUREMENT_ID` only if you have a GA4 measurement ID. Analytics remains off when unset.
- Sitemap XML validated and includes the industry pages.

## Phase 8 – Testing checklist
Run locally before deployment:
1. `npm ci`
2. `npm run build`
3. `npm run dev`
4. Test `/`, `/about`, `/services`, every `/services/:slug`, `/industries`, every `/industries/:slug`, `/projects`, every `/projects/:slug`, `/pricing`, `/crm`, `/contact`, `/blog`, `/careers`, `/privacy`, `/terms`.
5. Test pricing CTA pre-fills the selected service in Contact.
6. Test Contact form with valid/invalid data and verify EmailJS delivery using test credentials.
7. Test desktop, tablet and mobile widths; keyboard navigation; reduced-motion preference; dark/light themes.
8. Test all external links, WhatsApp and email links.
9. Deploy to staging, verify direct deep-link refreshes (SPA fallback), then deploy production.
10. Verify sitemap and canonical URLs in Search Console after deployment.

## Verification status
- ZIP integrity and sitemap XML validation: passed.
- Automated browser/mobile, live EmailJS delivery, GA4 reporting and production deployment: not run in this environment.
- Production TypeScript/Vite build: not run because dependencies were not installed in the supplied ZIP environment.
