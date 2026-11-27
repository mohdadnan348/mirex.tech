# MirexTech EmailJS contact form setup

The contact form uses EmailJS with these supplied client-side identifiers:
- Service ID: `service_d353yqa`
- Template ID: `template_m52knit`
- Public Key: `m5cyahMkW74k2v9wq`

The code uses these as defaults and allows Vite environment variables to override them:
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

The `.env.example` file contains the exact variable names and supplied values. Copy it to `.env` for local development if needed. Do not put private email account passwords or SMTP credentials in frontend code.

## EmailJS dashboard checks
1. Confirm service `service_d353yqa` is connected and shows as active.
2. Confirm template `template_m52knit` exists and is enabled.
3. In the template's recipient / To Email setting, set `hello.mirextech@gmail.com` (or the verified business inbox you intend to receive enquiries at).
4. Map the template body to these parameters as needed:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{phone}}`
   - `{{company}}`
   - `{{service}}`
   - `{{budget}}`
   - `{{preferred_contact}}`
   - `{{message}}`
   - `{{reply_to}}`
   - `{{subject}}`
5. In EmailJS security / allowed origins, allow the production domain `mirextech.in` and `www.mirextech.in` if both are used. Add localhost only for local testing.
6. Rebuild and redeploy the frontend after changing Vite environment variables; Vite injects `VITE_*` values at build time.

## Contact form behavior
- Validates required fields, email format and phone length.
- Sends the form with `emailjs.send(serviceId, templateId, templateParams, publicKey)`.
- Shows success only when EmailJS resolves successfully.
- On failure, displays a direct email and WhatsApp fallback containing the submitted form details.
- The existing website phone and WhatsApp destination are preserved.

## Verification
The project archive and source-level checks were validated. A real EmailJS send cannot be confirmed without access to the owner's EmailJS dashboard and a live deployed browser session. After deployment, submit a test enquiry and confirm the email arrives in the intended inbox (also check spam).


## Netlify environment variable names
The Contact page reads `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, and `VITE_EMAILJS_PUBLIC_KEY`.
If Netlify currently has only `NEXT_PUBLIC_EMAILJS_*` variables, those names will not be read by this Vite app. Add the three `VITE_EMAILJS_*` names above in Netlify Site configuration → Environment variables, then trigger a fresh deploy. The supplied values are also present as source defaults, but matching environment names is recommended.
