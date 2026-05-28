<div align="center">
<img src="https://img.shields.io/badge/UIKit-v0.1.0-7c3aed?style=for-the-badge&logoColor=white" />
<img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js&logoColor=white" />
<img src="https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
<img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" />
<br />
<br />
# UIKit
 
**Beautiful UI components. Ready to copy.**
 
Interactive previews, copy-paste code, zero backend. Just ship faster with perfectly crafted components.
 
[Browse Components](#) · [Report a Bug](../../issues) · [Request a Component](../../issues)
 
</div>
---
 
## About
 
UIKit is an open collection of ready-to-use React + Tailwind CSS components. Every component ships with a live interactive preview so you can see exactly how it looks and behaves before dropping it into your codebase — no account, no install, no backend required.
 
Built for developers who want to move fast without sacrificing quality.
 
---
 
## Features
 
- **500+ Components** — buttons, cards, modals, tables, dashboards, and more
- **Live Previews** — every component renders interactively in the browser
- **One-Click Copy** — grab the React + Tailwind code straight to your clipboard
- **Dark Mode** — full dark/light theme toggle, persisted across sessions
- **Category Filtering** — quickly filter by component type
- **Favorites** — bookmark components you use often, saved to localStorage
- **Zero Backend** — completely static, no API or database needed
- **Fully Responsive** — works on mobile, tablet, and desktop
---
 
## Tech Stack
 
| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| Styling | [Tailwind CSS 3](https://tailwindcss.com/) |
| Language | JavaScript (JSX) |
| Font | [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) |
| Package Manager | npm |
 
---
 
## Getting Started
 
### Prerequisites
 
- Node.js `18+`
- npm `9+`
### Installation
 
```bash
# 1. Clone the repository
git clone https://github.com/your-username/uikit.git
cd uikit
 
# 2. Install dependencies
npm install
 
# 3. Start the development server
npm run dev
```
 
Open [http://localhost:3000](http://localhost:3000) in your browser.
 
### Build for Production
 
```bash
npm run build
npm start
```
 
---
 
## How to Use the Components
 
Every component on UIKit is designed to be copied directly into your project. Here's the workflow:
 
**1. Browse** — scroll through the component grid or use the category tabs to find what you need.
 
**2. Preview** — hover over any card to see the live interactive preview.
 
**3. Copy** — click **Copy Code** on the card to copy the React + Tailwind snippet to your clipboard.
 
**4. Paste** — drop it into your project. Components are self-contained and rely only on Tailwind utility classes.
 
```jsx
// Example: Gradient Button
export default function GradientButton() {
  return (
    <button className="px-5 py-2 rounded-lg bg-gradient-to-r from-violet-500 to-purple-600 text-white text-sm font-semibold shadow-lg shadow-violet-500/40">
      Click me
    </button>
  );
}
```
 
> All components are written in React with Tailwind CSS. No external component libraries required.
 
---
 
## Project Structure
 
```
uikit/
├── src/
│   ├── app/
│   │   ├── layout.js        # Root layout, metadata, fonts
│   │   ├── page.js          # Main page (state, theme, favorites)
│   │   └── globals.css      # Tailwind directives + custom utilities
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── CategoryTabs.jsx
│   │   ├── ComponentCard.jsx
│   │   ├── ComponentPreview.jsx
│   │   ├── FeaturedSection.jsx
│   │   ├── FavoritesModal.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── CTASection.jsx
│   │   └── Footer.jsx
│   └── utils/
│       ├── data.js          # Component metadata + categories
│       └── favorites.js     # localStorage helpers
├── tailwind.config.js
├── postcss.config.mjs
└── next.config.ts
```
 
---
 
## Contributing
 
> 🚧 **Contribution guidelines are currently under development.** This section will be updated soon with a full guide on how to submit new components, report bugs, and propose features.
 
In the meantime, feel free to open an [issue](../../issues) if you find a bug or have a component request.
 
---
 
## Built By
 
<div align="center">
Made with ❤️ for developers who just want to ship.
 
<br />
⭐ If you find this useful, consider starring the repo — it helps a lot!
 
</div>
