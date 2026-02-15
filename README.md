# Vastra Vaibhav Enterprises — E-commerce Site

A responsive React e-commerce site for **Vastra Vaibhav Enterprises** with a blue-and-white theme, product browsing, and dynamic pricing (no login, signup, or cart).

## Tech stack

- **React 18** + **Vite**
- **React Router** for navigation
- Reusable components: Navbar, Footer, SocialBar, ImageShowcase, SelectGroup, PriceDisplay

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

Build for production:

```bash
npm run build
npm run preview
```

## Images (from your PDF)

The app expects these images in the `public` folder:

1. **Hero / fallback:** `public/vv.jpg` — already copied from your project root if you had `vv.jpg` there.
2. **Bedsheets:** `public/images/bedsheets.jpg` — use the single best-looking bedsheet image from your PDF. If missing, the bedsheets page falls back to `vv.jpg`.
3. **Towels:** `public/images/towels.jpg` — use the single best-looking towel image from your PDF. If missing, the towels page falls back to `vv.jpg`.

To add images from your PDF:

- Export or screenshot the chosen bedsheet image and save as `public/images/bedsheets.jpg`.
- Export or screenshot the chosen towel image and save as `public/images/towels.jpg`.

## Structure

- **Home:** Hero banner, product showcase (Bedsheets & Towels), navbar with social icons (fixed on the right).
- **Bedsheets:** Size (King/Queen) → Dimension (cm) → dynamic price. Copy and pricing as specified.
- **Towels:** GSM (400 / 600) → dynamic price. Copy and pricing as specified.

No login, signup, or cart — browsing and price display only.
