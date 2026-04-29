<h1 align="center">lyralex-blog</h1>

<p align="center">
  <a href="README_ZH.md">中文版本</a> |
  <a href="https://lyralex.qzz.io">Live Demo</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Astro-5.0-BC52EE?style=flat-square&logo=astro" alt="Astro 5.0">
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS 3.4">
  <img src="https://img.shields.io/badge/License-MIT-00A86B?style=flat-square&logo=opensourceinitiative&logoColor=white" alt="MIT License">
  <img src="https://img.shields.io/github/deployments/chinskylee/chinskylee.github.io/github-pages?label=GitHub%20Pages&style=flat-square&logo=github" alt="GitHub Pages">
</p>

<p align="center">
  A personal blog built with Astro, featuring physics research notes, vibe coding guides, and technical tutorials.
</p>

---

## Features

- **Blazing Fast** - Astro's zero-JS default output with islands architecture
- **Dark Mode** - System-aware theme with manual toggle (light/dark)
- **Content Collections** - Type-safe Markdown/MDX blog posts with tags
- **Audio Support** - Built-in audio player for narrated articles
- **Math Rendering** - KaTeX support for LaTeX formulas
- **Full-Text Search** - Pagefind integration for static search
- **RSS Feed** - Auto-generated RSS with audio enclosures
- **Reading Progress** - Navigation with progress tracking
- **Responsive Design** - Mobile-first with collapsible menu

## Tech Stack

- **Framework**: [Astro 5.0](https://astro.build)
- **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com) + Typography plugin
- **Icons**: Google Material Symbols Outlined
- **Fonts**: Space Grotesk (headlines) + Inter (body)
- **Math**: [KaTeX](https://katex.org) for LaTeX rendering
- **Search**: [Pagefind](https://pagefind.app) for static search
- **Deployment**: GitHub Actions → GitHub Pages

## Quick Start

```bash
# Clone the repository
git clone https://github.com/chinskylee/chinskylee.github.io.git
cd chinskylee.github.io

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
chinskylee.github.io/
├── public/
│   ├── images/          # Static images
│   ├── audio/           # Audio files for narrated posts
│   ├── favicon.ico      # Multi-size favicon
│   └── CNAME           # Custom domain
├── src/
│   ├── components/      # Astro components (NavBar, Footer, etc.)
│   ├── layouts/         # Page layouts (BaseLayout)
│   ├── pages/           # Routes (index, blog, tags, archive)
│   │   ├── blog/
│   │   │   ├── [...slug].astro  # Blog post template
│   │   │   └── index.astro      # Blog list page
│   │   └── tags/
│   │       └── [tag].astro      # Tag filter page
│   ├── content/
│   │   ├── config.ts    # Content collection config
│   │   └── blog/       # Markdown blog posts
│   └── styles/         # Global styles
├── astro.config.mjs     # Astro configuration
├── tailwind.config.mjs  # Tailwind configuration
└── package.json        # Dependencies
```

## Writing Posts

Create a new Markdown file in `src/content/blog/`:

```markdown
---
title: "Your Post Title"
description: "A brief description of your post"
pubDate: 2026-04-29
tags: ["physics", "tutorial"]
draft: false
audio:  # Optional audio narration
  src: "/audio/your-audio.m4a"
  title: "Audio Title"
  bitrate: "256KBPS"
---

Your content here... Support **Markdown** and $LaTeX$ math!

$$
E = mc^2
$$
```

## Customization

### Site Info
Edit `astro.config.mjs`:
```javascript
export default defineConfig({
  site: 'https://yourdomain.com',
  base: '/',
  // ...
})
```

### Theme Colors
Modify `tailwind.config.mjs`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#705a4a',
      // Add your custom colors
    }
  }
}
```

### Content
- **Blog posts**: `src/content/blog/`
- **Pages**: `src/pages/`
- **Components**: `src/components/`

## RSS Feed

The blog automatically generates RSS feed at `/rss.xml` with:
- Full content in RSS items
- Audio enclosures for narrated posts
- Proper Atom formatting

## Deployment

Automatically deployed to GitHub Pages via GitHub Actions on every push to `main` branch.

**Manual deployment:**
```bash
npm run build
# Upload dist/ folder to your hosting provider
```

## Content Categories

- **Physics Research** - Nanophotonics, LSPR, quantum optics
- **Vibe Coding** - AI-assisted programming guides
- **Tech Tutorials** - Astro, GitHub Pages, tooling
- **Personal Notes** - Learning journey and reflections

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Links

- **Live Site**: [lyralex.qzz.io](https://lyralex.qzz.io)
- **GitHub**: [@chinskylee](https://github.com/chinskylee)
- **Email**: chinskylee@outlook.com

---

<p align="center">
  Built with 💜 using <a href="https://astro.build">Astro</a>
</p>
