# Hacker Portfolio

A Matrix-themed portfolio website built with Next.js 16, TypeScript, and styled-jsx. Features a dynamic code rain background, CRT scanlines effect, and neon green UI elements.

## Features

- 🎨 **Matrix Theme**: Dynamic code rain animation with customizable speed and spacing
- 📱 **Responsive Design**: Fully responsive layout that works on all devices
- ⚡ **Next.js 16**: Built with Next.js App Router and TypeScript
- 🎯 **Performance**: Optimized static site generation for fast loading
- 🔥 **Modern UI**: Neon green panels, glowing effects, and smooth animations

## Tech Stack

- **Framework**: Next.js 16.1 (App Router)
- **Language**: TypeScript
- **Styling**: styled-jsx
- **Fonts**: Geist Sans & Geist Mono

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Development

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### Build

```bash
npm run build
npm run start
```

## Project Structure

```
hacker-portfolio/
├── src/
│   ├── app/
│   │   ├── _components/      # React components (organized by category)
│   │   │   ├── background/   # Background effects
│   │   │   │   ├── MatrixRain.tsx # Code rain animation
│   │   │   │   ├── MatrixRainClient.tsx # Client wrapper for SSR
│   │   │   │   └── ScanLines.tsx # CRT scanlines effect
│   │   │   ├── sections/     # Content sections
│   │   │   │   ├── Hero.tsx   # Welcome section
│   │   │   │   ├── Experience.tsx # Work experience
│   │   │   │   ├── Skills.tsx # Skills section
│   │   │   │   └── Projects.tsx # Projects grid
│   │   │   ├── cards/         # Reusable card components
│   │   │   │   └── ProjectCard.tsx # Individual project card
│   │   │   └── layout/        # Layout components
│   │   │       └── TabView.tsx # Navigation tabs
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Home page
│   │   └── globals.css       # Global styles
│   └── lib/
│       ├── types.ts          # TypeScript interfaces
│       └── portfolioData.ts  # Portfolio content data
├── package.json
└── tsconfig.json
```

## Customization

All portfolio content is centralized in `src/lib/portfolioData.ts`. Update this file to customize:

- Personal information (name, title, bio)
- Work experience
- Skills (technical & soft skills)
- Projects
- Social media links

## Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Deploy automatically

### Other Platforms

Build the project first:

```bash
npm run build
```

Then deploy the `.next` folder and `package.json` to any Node.js hosting platform.

## License

See [LICENSE](../LICENSE) file for details.
