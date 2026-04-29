# Fork Deployment Guide

This document provides detailed instructions for deploying this project after forking it to your own GitHub account.

## Quick Start (Minimum Changes)

To get your fork deployed quickly, you only need to modify **3 files**:

1. **Delete `public/CNAME`** - This file contains the custom domain binding
2. **Edit `astro.config.mjs`** (line 5) - Update the `site` URL
3. **Edit `src/pages/subscribe.astro`** (line 6) - Fix the RSS feed URL

After these changes, push to your `main` branch and GitHub Actions will automatically deploy to GitHub Pages.

---

## Detailed Modifications

### 🔴 Must Modify (Critical for Deployment)

#### 1. Delete `public/CNAME`

**File:** `public/CNAME`

**Current content:**
```
lyralex.qzz.io
```

**Problem:** This file tells GitHub Pages to bind the custom domain `lyralex.qzz.io` to the repository. After forking, keeping this file will cause deployment conflicts.

**Solution:**
```bash
git rm public/CNAME
```

**Note:** If you want to use your own custom domain later, create a new `CNAME` file with your domain.

---

#### 2. Update `astro.config.mjs`

**File:** `astro.config.mjs` (line 5)

**Current configuration:**
```javascript
export default defineConfig({
  site: 'https://lyralex.qzz.io',
  base: '/',
  // ...
});
```

**Problem:** This configuration affects:
- RSS feed URLs
- Sitemap generation
- Canonical URLs
- Open Graph image URLs

All generated links will point to the original site.

**Solution:** Change the `site` and `base` to your fork's actual URL:

| Repository Type | `site` value | `base` value |
|----------------|--------------|-------------|
| `username.github.io` (main repo) | `https://username.github.io` | `'/'` |
| Regular repository | `https://username.github.io` | `'/reponame'` |

**Example for `username.github.io` repo:**
```javascript
export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/',
  // ...
});
```

**Example for regular repo (e.g., `yourusername/my-blog`):**
```javascript
export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/my-blog',  // IMPORTANT: Add your repo name here!
  // ...
});
```

**⚠️ Important:** If you forget to change `base` for a regular repository, all resource paths (CSS, JS, images) will be wrong and your site will not load properly.

---

#### 3. Fix `src/pages/subscribe.astro`

**File:** `src/pages/subscribe.astro` (line 6)

**Current code:**
```javascript
const rssUrl = 'https://lyralex.qzz.io/rss.xml';
```

**Problem:** The subscription page hardcodes the RSS feed URL.

**Solution:** Use dynamic URL generation with fallback:
```javascript
const rssUrl = Astro.site 
  ? new URL('/rss.xml', Astro.site).toString() 
  : '/rss.xml';
```

This will automatically use the `site` URL from `astro.config.mjs`. The fallback ensures the page won't crash if `site` is not configured.

**⚠️ Important:** Make sure you've updated `astro.config.mjs` (Step 2) before deploying, otherwise `Astro.site` will be `undefined`.

---

### 🟡 Recommended Modifications (Affects Display & UX)

#### 4. Update `README.md`

**Files:** `README.md`

**Changes needed:**
- Line 5: Update live demo link from `https://lyralex.qzz.io` to your site URL
- Line 12: Update badge image URL (change `chinskylee/chinskylee.github.io` to `yourusername/yourrepo`)
- Lines 47-48: Update clone command
- Line 66: Update project structure example
- Lines 174-176: Update links (website, GitHub, email)

**Example:**
```markdown
<p align="center">
  <a href="README_ZH.md">中文版本</a> |
  <a href="https://yourusername.github.io">Live Demo</a>
</p>
```

---

#### 5. Update `README_ZH.md`

Same changes as above, but for the Chinese version.

---

#### 6. Update `src/pages/index.astro`

**File:** `src/pages/index.astro`

**Changes needed (multiple lines):**
- Lines 65, 71: GitHub profile link (`https://github.com/chinskylee`)
- Lines 78, 91, 104, 108, 133, 136: Project showcase links
- Lines 126, 129: Contact information (email and GitHub)

**Note:** These are display-only changes. The site will function without them, but visitors will see the original author's information.

---

#### 7. Customize Homepage Content

The homepage (`src/pages/index.astro`) uses two components for the main content. Here's how to customize each part:

##### 7.1 Change Your Name (Hero Section)

**File:** `src/components/Hero.astro` (line 6)

**Current code:**
```html
<h1 class="font-headline text-4xl sm:text-5xl md:text-8xl font-bold tracking-tighter text-on-surface leading-[0.9]">
  CHINSKY&nbsp;<span class="text-primary">LEE</span>
</h1>
```

**How to modify:**
- Replace `CHINSKY` with your first name
- Replace `LEE` with your last name
- Keep the `&nbsp;` for non-breaking space between names

**Example:**
```html
<h1 class="...>
  JOHN&nbsp;<span class="text-primary">DOE</span>
</h1>
```

---

##### 7.2 Update Self-Introduction

**File:** `src/components/Hero.astro` (line 10)

**Current code:**
```html
<p class="font-headline text-base sm:text-lg md:text-2xl uppercase tracking-widest text-outline border-l-4 border-primary pl-3 md:pl-6">
  A STUDENT MAJORING IN PHYSICS
</p>
```

**How to modify:**
- Change the text to describe yourself (keep it short and in uppercase for style)

**Example:**
```html
<p class="...">
  A SOFTWARE ENGINEER & AI ENTHUSIAST
</p>
```

---

##### 7.3 Update Personal Description

**File:** `src/components/Hero.astro` (lines 14-16)

**Current code:**
```html
<p class="text-on-surface-variant leading-relaxed text-sm md:text-base lg:text-xl max-w-2xl">
  Harnessing subwavelength flow of light through mathematical elegance and nanophotonic rigor. Currently investigating LSPR effect in AuNPs and its application in biosensing.
</p>
```

**How to modify:**
- Replace with your own description
- Keep it concise (1-2 sentences)

**Example:**
```html
<p class="...">
  Building modern web applications with AI assistance. Exploring the intersection of technology and creativity.
</p>
```

---

##### 7.4 Customize Terminal Log (Status Section)

**File:** `src/components/TerminalLog.astro`

**Current sections to modify:**

**Title** (line 7):
```html
<span class="break-words">SYSTEM_REPORT_v2.log</span>
```
→ Change to your own title, e.g., `MY_STATUS.log`

**Status entries** (lines 14-33):

| Line | Label | Content to Change |
|------|-------|-------------------|
| 18 | `INITIALIZING_SYSTEM:` | Your background/start story |
| 23 | `RESEARCH_FOCUS:` | Your main focus/interests |
| 28 | `LOCATION_DATA:` | Your location |
| 33 | `CURRENT_STATUS:` | Your current status |

**Example modification:**
```html
<div class="flex gap-2 md:gap-4">
  <span class="text-outline shrink-0 text-xs md:text-base">[10:41:53]</span>
  <p class="break-words min-w-0"><span class="text-primary">INITIALIZING_SYSTEM:</span> Started coding at age 12 with a passion for technology.</p>
</div>
```

---

##### 7.5 Modify Homepage Section Titles

**File:** `src/pages/index.astro`

**Recent Posts Section** (lines 14-15):
```html
<h2 ...>FEATURED_POSTS</h2>
<p ...>Modest insights into physics & tech notes</p>
```
→ Change to your own section title and subtitle

**GitHub Projects Section** (lines 49-52):
```html
<h2 ...>GITHUB_PROJECTS</h2>
<p ...>
  Lately, I've been leaning into the intuition of vibe coding...
</p>
```
→ Update the section title and description

**Contact Section** (lines 88-89):
```html
<h2 ...>GET_IN_TOUCH</h2>
<p ...>Direct channels for collaboration</p>
```
→ Change to your preferred contact section title

---

##### 7.6 Add New Homepage Sections

**File:** `src/pages/index.astro`

To add a new section, insert a new `<section>` block in the `<main>` tag. Use existing sections as templates.

**Template for a new section:**
```html
<section class="space-y-8 border-t border-outline-variant pt-24 scroll-mt-28" id="your-section-id">
  <div class="space-y-4">
    <h2 class="font-headline text-2xl md:text-4xl font-bold tracking-tight" id="your-heading-id">
      YOUR_SECTION_TITLE
    </h2>
    <p class="font-label text-sm md:text-base text-outline uppercase tracking-widest">
      Your section subtitle
    </p>
  </div>
  
  <!-- Your section content here -->
  <div class="mt-8">
    <p>Your content goes here...</p>
  </div>
</section>
```

**Important notes:**
- Add `scroll-mt-28` to prevent fixed navbar from covering content
- Add `id` attributes for navigation (if using the top nav)
- Follow the existing design pattern (border-t for separation)

**Example: Add a "Skills" section**
```html
<section class="space-y-8 border-t border-outline-variant pt-24 scroll-mt-28" id="skills">
  <div class="space-y-4">
    <h2 class="font-headline text-2xl md:text-4xl font-bold tracking-tight" id="skills-heading">
      MY_SKILLS
    </h2>
    <p class="font-label text-sm md:text-base text-outline uppercase tracking-widest">
      Technologies I work with
    </p>
  </div>
  
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
    <div class="bg-surface-container p-4 text-center">React</div>
    <div class="bg-surface-container p-4 text-center">Node.js</div>
    <div class="bg-surface-container p-4 text-center">Python</div>
    <div class="bg-surface-container p-4 text-center">Astro</div>
  </div>
</section>
```

Then add the navigation link in `src/components/NavBar.astro` if you want it in the top menu.

---

#### 8. Update `src/components/MobileMenu.astro`

**File:** `src/components/MobileMenu.astro`

**Changes needed:**
- Line 55: GitHub link
- Line 60: Email link

---

### 🟢 Optional Modifications

#### 8. Update `LICENSE`

**File:** `LICENSE` (line 3)

**Current:**
```
Copyright (c) 2026 Alexander (chinskylee)
```

**Note:** If you continue developing the forked project, consider updating the copyright to your name.

---

#### 9. Update Blog Content

**Files:** `src/content/blog/*.md`



---

#### 10. Handle `index.html` (Root Directory)

**File:** `index.html` (root directory)

**Observation:** This appears to be a manually created static HTML file, not generated by Astro build.

**Contains:**
- Lines 4-5: Favicon paths pointing to `/images/chinskylee.png`
- Lines 374, 380, 436, 439, 443, 446: Hardcoded links
- Title shows "Aris Thorne" (not your name)

**Recommendation:** This file is likely a legacy file. The project uses Astro for building, so `index.html` may not be used. Consider deleting it if you're using the Astro build system.

---

## GitHub Pages Setup

**⚠️ Important:** You must configure GitHub Pages BEFORE pushing your changes for the first deployment.

### Step 1: Configure GitHub Pages (Do this FIRST)

1. Go to your forked repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Build and deployment**:
   - Source: Select **GitHub Actions**
4. The workflow in `.github/workflows/deploy.yml` will be ready to use

### Step 2: Push Your Changes

After configuring GitHub Pages, push your changes:

```bash
git add .
git commit -m "Configure fork for deployment"
git push origin main
```

The GitHub Actions workflow will automatically build and deploy your site.

**Note:** 
- The first deployment may take a few minutes. Subsequent deployments will be faster.
- If you push before configuring GitHub Pages, the Actions tab will show a workflow error. Just configure Pages and re-run the workflow.

---

## Common Issues

### Issue: 404 Page Not Found

**Cause:** GitHub Pages not configured or first build hasn't completed.

**Solution:**
- Wait 2-3 minutes for the first build to complete
- Check **Settings** → **Pages** for deployment status
- Check **Actions** tab for build errors

---

### Issue: Custom Domain Conflict

**Cause:** Forgot to delete `public/CNAME` before pushing.

**Solution:**
```bash
git rm public/CNAME
git commit -m "Remove custom domain CNAME"
git push origin main
```

Then reconfigure GitHub Pages in settings.

---

### Issue: RSS Feed Links Point to Old Site

**Cause:** Didn't update `astro.config.mjs` or `src/pages/subscribe.astro`.

**Solution:** Follow the "Must Modify" section above.

---

## Project Structure Notes

This project uses:
- **Astro 5.0** with static output (`output: 'static'`)
- **Tailwind CSS 3.4** for styling
- **GitHub Actions** for automatic deployment
- **RSS feed** with audio enclosures support
- **KaTeX** for math rendering
- **Pagefind** for static search

All dependencies are public npm packages. No private or local dependencies exist.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

The MIT License allows you to:
- Fork and modify the project
- Use it for personal or commercial purposes
- Redistribute with or without attribution (though attribution is appreciated)

---

## Need Help?

If you encounter issues not covered in this guide:
1. Check the [Astro Documentation](https://docs.astro.build)
2. Review the [GitHub Actions logs](https://github.com/yourusername/yourrepo/actions)


---

**Last Updated:** April 29, 2026
