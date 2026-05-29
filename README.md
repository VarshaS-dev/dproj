# DriveOS Mobility Landing Page

A modern, responsive landing page for **DriveOS Mobility** — a fictional automotive technology company specializing in Software Defined Vehicles, AI for Mobility, and EV Technologies. Built with Next.js, TypeScript, and Tailwind CSS, the page showcases a premium dark-themed design with clean engineering-focused branding.

## Features

- Responsive design optimized for mobile and desktop
- Modern automotive technology UI with premium aesthetics
- Hero, About, Services, Technology & Innovation, Contact, and Footer sections
- Scroll reveal animations powered by Framer Motion
- Clean, reusable React components with clear separation of concerns
- Built with Next.js App Router and Tailwind CSS v4

## Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 16** | React framework with App Router |
| **TypeScript** | Type-safe development |
| **Tailwind CSS v4** | Utility-first styling and design tokens |
| **Framer Motion** | Subtle scroll reveal and entry animations |

## Getting Started

**Install dependencies:**

```bash
npm install
```

**Run the development server:**

```bash
npm run dev
```

**Build for production:**

```bash
npm run build
```

The app will be available at [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles, theme tokens, animations
│   ├── layout.tsx           # Root layout with fonts and SEO metadata
│   └── page.tsx             # Main page composing all sections
└── components/
    ├── ScrollReveal.tsx      # Reusable scroll animation wrapper
    ├── Navbar.tsx            # Fixed navbar with mobile menu
    ├── Hero.tsx              # Hero section with animated headline
    ├── About.tsx             # Company overview and stat cards
    ├── Services.tsx          # Six service offering cards
    ├── Technology.tsx        # Technology and innovation showcase
    ├── Contact.tsx           # Contact form (frontend only)
    └── Footer.tsx            # Footer with navigation and copyright
```

## Design Approach

- **Engineering-focused branding** — clean typography, structured layouts, and technical language that reflects an automotive software company
- **Dark premium theme** — `#050505` background with `#111111` surface cards for depth and contrast
- **Accent color palette** — cyan blue (`#00D4FF`) as the primary accent, purple (`#7C3AED`) for secondary highlights, and red (`#FF2D55`) used sparingly for CTAs
- **Simplicity and responsiveness** — mobile-first grid layouts, consistent spacing, and no unnecessary visual complexity
- **Maintainability** — modular components, Tailwind design tokens via `@theme inline`, and no external icon or UI libraries

## Notes

This project intentionally avoids unnecessary complexity such as 3D models, video backgrounds, complex state management, or API integrations. The focus is on clean implementation, responsive design, and delivering a polished user experience through strong UI fundamentals.
