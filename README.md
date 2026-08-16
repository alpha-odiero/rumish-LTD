# RUMISH LTD

Hardware and building supplies e-commerce website for RUMISH LTD, based in Nakuru, Kenya. Browse products, build a cart, and send orders via WhatsApp.

**Live sites:**
- [GitHub Pages](https://alpha-odiero.github.io/rumish-LTD/)
- [Netlify](https://rumishltd.netlify.app/)

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router, static export)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/) icons

## Features

- 44+ products across 12 categories
- Product search and category filtering
- Shopping cart with localStorage persistence
- WhatsApp order integration
- Quote request form
- Delivery information page
- Responsive design (mobile + desktop)
- Static export for zero-server hosting

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Static output is generated in the `out/` directory.

## Deployment

### Netlify

Connected to the GitHub repo. Pushes to `main` auto-deploy. See `netlify.toml` for config.

### GitHub Pages

Uses GitHub Actions (`.github/workflows/deploy.yml`). The `BASE_PATH` env var is set to `/rumish-LTD` during CI so all asset paths are prefixed correctly.

## Project Structure

```
src/
  app/            # Pages and layouts (Next.js App Router)
  assets/         # Product images and logo
  components/     # UI, layout, cart, product, and contact components
  context/        # React context (cart state)
  data/           # Product, category, and service data
  hooks/          # Custom React hooks
  lib/            # Constants, navigation, cart store, helpers
  utils/          # Utility functions
```

## Contact

- **Address:** Lower Bedi Rd, Nakuru, Kenya
- **Phone:** 0733 321945
- **WhatsApp:** [Send a message](https://wa.me/254733321945)

## License

All rights reserved. &copy; 2026 RUMISH LTD.
