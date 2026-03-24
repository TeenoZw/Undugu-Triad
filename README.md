# Undugu Triad Engineering Website

Next.js marketing site for Undugu Triad Engineering, prepared for deployment on Netlify.

## Getting started

1. Install dependencies with `npm install`.
2. The project includes a bundled logo asset at `public/undugu-triad-logo.svg`, based on the logo artwork you provided.
3. Start the local dev server with `npm run dev`.

## Project structure

- `app/page.tsx` - homepage
- `app/success/page.tsx` - form success page
- `app/globals.css` - site styles
- `public/undugu-triad-logo.svg` - company logo image
- `netlify.toml` - Netlify build config for Next.js

## Contact form setup

The enquiry form is marked up for Netlify Forms.

After your first deploy on Netlify:

1. Confirm the `contact` form appears under `Forms`.
2. Add email notifications for `info@undugutriad.co.zw`.
3. Make sure `info@undugutriad.co.zw` is active in Zoho Mail so form notifications arrive correctly.

## Deployment notes

- Netlify will detect and build the Next.js app using the Next.js plugin.
- The website can be hosted on Netlify while email stays on Zoho Mail.
- Point your domain `undugutriad.co.zw` to Netlify for the site and keep your mail DNS records configured for Zoho.
