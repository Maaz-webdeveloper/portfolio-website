# 🚀 Maaz-webdeveloper Portfolio

> A sleek, blazing-fast personal portfolio showcasing projects, skills, and contact information — built with modern web technologies and a focus on performance and developer experience.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-brightgreen?style=for-the-badge&logo=vercel)](https://maaz-dev-portfolio.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-13-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

---

## 🌐 Live Demo

👉 **[https://maaz-dev-portfolio.vercel.app](https://www.maazdev.me/)**

---

## ✨ Features

- ⚡ **Blazing Fast** — Built on Next.js 13 App Router with server components
- 🎨 **Stunning UI** — Animated particle background, glowing gradients, and smooth transitions
- 📝 **MDX-Powered Projects** — Project pages authored in MDX via Contentlayer
- 🌗 **Dark-First Design** — Elegant dark theme with zinc/white color palette
- 📱 **Fully Responsive** — Optimized for all screen sizes
- 🔍 **SEO Ready** — Proper metadata and semantic HTML

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **[Next.js 13](https://nextjs.org/)** | React framework with App Router & server components |
| **[TypeScript](https://www.typescriptlang.org/)** | Type-safe JavaScript for robust, maintainable code |
| **[Tailwind CSS](https://tailwindcss.com/)** | Utility-first CSS for rapid, consistent styling |
| **[Contentlayer](https://contentlayer.dev/)** | Type-safe MDX content pipeline for project pages |
| **[Framer Motion](https://www.framer.com/motion/)** | Smooth animations and page transitions |
| **[Lucide React](https://lucide.dev/)** | Clean, consistent icon set |
| **[rehype-pretty-code](https://rehype-pretty-code.netlify.app/)** | Syntax highlighting for MDX code blocks |
| **[Upstash Redis](https://upstash.com/)** | Edge-compatible view counter for projects |
| **[Rome](https://rome.tools/)** | Unified linter and formatter |

---

## 📁 Project Structure

```
portfolio-website/
├── app/                    # Next.js 13 App Router
│   ├── components/         # Shared UI components
│   │   ├── analytics.tsx   # View tracking component
│   │   ├── card.tsx        # Reusable project card
│   │   ├── mdx.tsx         # MDX rendering utilities
│   │   ├── nav.tsx         # Navigation bar
│   │   └── particles.tsx   # Animated particle background
│   ├── contact/            # /contact route
│   │   └── page.tsx
│   ├── projects/           # /projects route
│   │   ├── [slug]/         # Dynamic project detail pages
│   │   ├── article.tsx     # Project article component
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── layout.tsx          # Root layout with fonts & metadata
│   └── page.tsx            # Home page
│
├── content/                # MDX content (Contentlayer source)
│   └── projects/           # Individual project MDX files
│
├── public/                 # Static assets (images, resume PDF)
├── types/                  # Shared TypeScript type definitions
├── util/                   # Utility/helper functions
│
├── contentlayer.config.js  # Contentlayer schema & MDX plugins
├── next.config.mjs         # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** `v20.x` or higher
- **pnpm** — [Install pnpm](https://pnpm.io/installation)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Maaz-webdeveloper/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Fill in the required values in `.env.local` (e.g. Upstash Redis credentials for view counts).

4. **Start the development server**

   ```bash
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
pnpm build
pnpm start
```

### Lint & Format

```bash
pnpm fmt
```

---

## 📄 License

This project is licensed under the [MIT License](./LICENSE).

---

<p align="center">Made with ❤️ by <a href="https://maaz-dev-portfolio.vercel.app">Maaz</a></p>
