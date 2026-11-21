# MirexTech Website

React + TypeScript + Vite website for MirexTech.

## Local development

```bash
npm install
cp .env.example .env
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Contact form configuration

The contact form uses EmailJS. Configure these Vite environment variables in your local `.env` file and in your hosting provider's environment settings:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

In the EmailJS service/template dashboard, configure the verified recipient mailbox that should receive enquiries. The website does not store submissions in a database. Enquiries are sent to the recipient configured in the EmailJS template/service.\n\nThe EmailJS template should accept the following parameters:

- `from_name`
- `from_email`
- `phone`
- `company`
- `service`
- `budget`
- `preferred_contact`
- `subject`
- `message`
- `reply_to`

The public key is intended for browser use. Never add EmailJS private keys, SMTP credentials, or other server secrets to Vite client-side environment variables.

If the EmailJS variables are not configured, the form displays an error and does not show a false success state. Visitors can still contact MirexTech using the WhatsApp, phone and email links.

## SEO files

- `public/robots.txt`
- `public/sitemap.xml`
- Organization structured data and default social metadata in `index.html`

Review the sitemap after adding or removing routes and submit it to Google Search Console once the site is deployed.

## Deployment notes

The project includes `netlify.toml` for Netlify deployment. Set the EmailJS variables in the Netlify site environment before deploying.

## Analytics

No analytics provider or measurement ID was present in the supplied source. Event tracking for WhatsApp clicks, phone clicks, quote requests and form submissions is therefore not active. Add an approved analytics provider and its measurement ID before enabling event tracking; no fabricated analytics calls are included.

## Feature notes

- The floating WhatsApp action and direct phone/email links are available without a backend.
- The former simulated AI chat widget is not displayed because it was not connected to an AI service or backend.
- Customer testimonials and active job listings are intentionally not published until verified content is supplied.
- Portfolio cover images are representative visuals where actual product screenshots were not included in the supplied source.
