# Fork 部署指南

本文档提供将本项目 fork 到你的 GitHub 账号后，进行详细部署的配置说明。

## 快速开始（最小化修改）

要让 fork 后的项目快速部署，你只需要修改 **3 个文件**：

1. **删除 `public/CNAME`** - 该文件包含自定义域名绑定
2. **编辑 `astro.config.mjs`**（第 5 行）- 更新 `site` URL
3. **编辑 `src/pages/subscribe.astro`**（第 6 行）- 修复 RSS feed URL

完成这些修改后，推送到你的 `main` 分支，GitHub Actions 将自动部署到 GitHub Pages。

---

## 详细修改说明

### 🔴 必须修改（影响部署）

#### 1. 删除 `public/CNAME`

**文件：** `public/CNAME`

**当前内容：**
```
lyralex.qzz.io
```

**问题：** 该文件告诉 GitHub Pages 将自定义域名 `lyralex.qzz.io` 绑定到仓库。Fork 后保留此文件会导致部署冲突。

**解决方案：**
```bash
git rm public/CNAME
```

**注意：** 如果以后你想使用自己的自定义域名，可以创建一个新的 `CNAME` 文件，内容为你的域名。

---

#### 2. 更新 `astro.config.mjs`

**文件：** `astro.config.mjs`（第 5 行）

**当前配置：**
```javascript
export default defineConfig({
  site: 'https://lyralex.qzz.io',
  base: '/',
  // ...
});
```

**问题：** 此配置影响以下内容：
- RSS feed URL
- Sitemap 生成
- Canonical URL
- Open Graph 图片 URL

所有生成的链接都会指向原网站。

**解决方案：** 将 `site` 和 `base` 改为你的 fork 仓库的实际 URL：

| 仓库类型 | `site` 值 | `base` 值 |
|---------|----------|-------------|
| `username.github.io`（主仓库） | `https://username.github.io` | `'/'` |
| 普通仓库（如 `username/my-blog`） | `https://username.github.io` | `'/my-blog'` |

**`username.github.io` 仓库示例：**
```javascript
export default defineConfig({
  site: 'https://你的用户名.github.io',
  base: '/',
  // ...
});
```

**普通仓库示例（如 `你的用户名/my-blog`）：**
```javascript
export default defineConfig({
  site: 'https://你的用户名.github.io',
  base: '/my-blog',  // ⚠️ 重要：这里要加上你的仓库名！
  // ...
});
```

**⚠️ 重要提示：** 如果普通仓库忘记修改 `base`，所有资源路径（CSS、JS、图片）都会错误，网站将无法正常加载。

---

#### 3. 修复 `src/pages/subscribe.astro`

**文件：** `src/pages/subscribe.astro`（第 6 行）

**当前代码：**
```javascript
const rssUrl = 'https://lyralex.qzz.io/rss.xml';
```

**问题：** 订阅页面硬编码了 RSS feed URL。

**解决方案：** 使用带 fallback 的动态 URL 生成：
```javascript
const rssUrl = Astro.site 
  ? new URL('/rss.xml', Astro.site).toString() 
  : '/rss.xml';
```

这将自动使用 `astro.config.mjs` 中的 `site` URL。fallback 确保即使 `site` 未配置，页面也不会崩溃。

**⚠️ 重要：** 确保在部署前已更新 `astro.config.mjs`（步骤 2），否则 `Astro.site` 会是 `undefined`。

---

### 🟡 建议修改（影响显示和用户体验）

#### 4. 更新 `README.md`

**文件：** `README.md`

**需要修改的内容：**
- 第 5 行：将在线演示链接从 `https://lyralex.qzz.io` 改为你的网站 URL
- 第 12 行：更新 badge 图片 URL（将 `chinskylee/chinskylee.github.io` 改为 `你的用户名/你的仓库名`）
- 第 47-48 行：更新 clone 命令
- 第 66 行：更新项目结构示例
- 第 174-176 行：更新链接（网站、GitHub、邮箱）

**示例：**
```markdown
<p align="center">
  <a href="README_ZH.md">中文版本</a> |
  <a href="https://你的用户名.github.io">在线演示</a>
</p>
```

---

#### 5. 更新 `README_ZH.md`

与上述相同的修改，但针对中文版本。

---

#### 6. 更新 `src/pages/index.astro`

**文件：** `src/pages/index.astro`

**需要修改的内容（多处）：**
- 第 65、71 行：GitHub 个人资料链接（`https://github.com/chinskylee`）
- 第 78、91、104、108、133、136 行：项目展示链接
- 第 126、129 行：联系信息（邮箱和 GitHub）

**注意：** 这些只是显示内容的修改。不修改也能正常运行，但访问者会看到原作者的信息。

---

#### 7. 自定义首页内容

首页（`src/pages/index.astro`）使用两个组件来显示主要内容。以下是自定义各部分的方法：

##### 7.1 修改你的名字（Hero 区域）

**文件：** `src/components/Hero.astro`（第 6 行）

**当前代码：**
```html
<h1 class="font-headline text-4xl sm:text-5xl md:text-8xl font-bold tracking-tighter text-on-surface leading-[0.9]">
  CHINSKY&nbsp;<span class="text-primary">LEE</span>
</h1>
```

**修改方法：**
- 将 `CHINSKY` 替换为你的名字
- 将 `LEE` 替换为你的姓氏
- 保留 `&nbsp;` 作为名字间的非换行空格

**示例：**
```html
<h1 class="...">
  JOHN&nbsp;<span class="text-primary">DOE</span>
</h1>
```

---

##### 7.2 更新自我介绍

**文件：** `src/components/Hero.astro`（第 10 行）

**当前代码：**
```html
<p class="font-headline text-base sm:text-lg md:text-2xl uppercase tracking-widest text-outline border-l-4 border-primary pl-3 md:pl-6">
  A STUDENT MAJORING IN PHYSICS
</p>
```

**修改方法：**
- 将文本改为描述你自己的内容（保持简短，使用大写字母以符合样式）

**示例：**
```html
<p class="...">
  A SOFTWARE ENGINEER & AI ENTHUSIAST
</p>
```

---

##### 7.3 更新个人描述

**文件：** `src/components/Hero.astro`（第 14-16 行）

**当前代码：**
```html
<p class="text-on-surface-variant leading-relaxed text-sm md:text-base lg:text-xl max-w-2xl">
  Harnessing subwavelength flow of light through mathematical elegance and nanophotonic rigor. Currently investigating LSPR effect in AuNPs and its application in biosensing.
</p>
```

**修改方法：**
- 替换为你的个人描述
- 保持简洁（1-2 句话）

**示例：**
```html
<p class="...">
  Building modern web applications with AI assistance. Exploring the intersection of technology and creativity.
</p>
```

---

##### 7.4 自定义 Terminal 日志（状态区域）

**文件：** `src/components/TerminalLog.astro`

**需要修改的部分：**

**标题**（第 7 行）：
```html
<span class="break-words">SYSTEM_REPORT_v2.log</span>
```
→ 改为你自己的标题，例如：`MY_STATUS.log`

**状态条目**（第 14-33 行）：

| 行号 | 标签 | 需要更改的内容 |
|------|-------|-------------------|
| 18 | `INITIALIZING_SYSTEM:` | 你的背景/起始故事 |
| 23 | `RESEARCH_FOCUS:` | 你的主要焦点/兴趣 |
| 28 | `LOCATION_DATA:` | 你的位置 |
| 33 | `CURRENT_STATUS:` | 你当前的状态 |

**修改示例：**
```html
<div class="flex gap-2 md:gap-4">
  <span class="text-outline shrink-0 text-xs md:text-base">[10:41:53]</span>
  <p class="break-words min-w-0"><span class="text-primary">INITIALIZING_SYSTEM:</span> Started coding at age 12 with a passion for technology.</p>
</div>
```

---

##### 7.5 修改首页版块标题

**文件：** `src/pages/index.astro`

**最近文章版块**（第 14-15 行）：
```html
<h2 ...>FEATURED_POSTS</h2>
<p ...>Modest insights into physics & tech notes</p>
```
→ 改为你自己的版块标题和副标题

**GitHub 项目版块**（第 49-52 行）：
```html
<h2 ...>GITHUB_PROJECTS</h2>
<p ...>
  Lately, I've been leaning into the intuition of vibe coding...
</p>
```
→ 更新版块标题和描述

**联系我版块**（第 88-89 行）：
```html
<h2 ...>GET_IN_TOUCH</h2>
<p ...>Direct channels for collaboration</p>
```
→ 改为你喜欢的联系版块标题

---

##### 7.6 添加新首页版块

**文件：** `src/pages/index.astro`

要添加新版块，在 `<main>` 标签内插入一个新的 `<section>` 块。使用现有版块作为模板。

**新版块模板：**
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
  
  <!-- 你的版块内容 here -->
  <div class="mt-8">
    <p>Your content goes here...</p>
  </div>
</section>
```

**重要提示：**
- 添加 `scroll-mt-28` 以防止固定导航栏覆盖内容
- 如果需要顶部导航，添加 `id` 属性
- 遵循现有设计模式（使用 `border-t` 进行分隔）

**示例：添加"技能"版块**
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

然后，如果要在顶部菜单中添加导航链接，请在 `src/components/NavBar.astro` 中添加。

---

#### 8. 更新 `src/components/MobileMenu.astro`

**文件：** `src/components/MobileMenu.astro`

**需要修改的内容：**
- 第 55 行：GitHub 链接
- 第 60 行：邮箱链接

---

### 🟢 可选修改

#### 8. 更新 `LICENSE`

**文件：** `LICENSE`（第 3 行）

**当前内容：**
```
Copyright (c) 2026 Alexander (chinskylee)
```

**注意：** 如果你继续开发 fork 后的项目，可以考虑将版权信息更新为你的名字。

---

#### 9. 更新博客内容

**文件：** `src/content/blog/*.md`



---

#### 10. 处理 `index.html`（根目录）

**文件：** `index.html`（根目录）

**观察：** 这看起来是手动创建的静态 HTML 文件，不是由 Astro 构建生成的。

**包含内容：**
- 第 4-5 行：Favicon 路径指向 `/images/chinskylee.png`
- 第 374、380、436、439、443、446 行：硬编码的链接
- 标题显示 "Aris Thorne"（不是你的名字）

**建议：** 这个文件可能是遗留文件。项目使用 Astro 进行构建，所以 `index.html` 可能不会被使用。如果你使用 Astro 构建系统，考虑删除它。

---

## GitHub Pages 设置

**⚠️ 重要提示：** 你必须在推送代码**之前**先配置 GitHub Pages。

### 步骤 1：配置 GitHub Pages（先做这个！）

1. 在 GitHub 上进入你的 fork 仓库
2. 导航到 **Settings** → **Pages**
3. 在 **Build and deployment** 下：
   - Source：选择 **GitHub Actions**
4. `.github/workflows/deploy.yml` 中的工作流将准备就绪。

### 步骤 2：推送你的修改

配置好 GitHub Pages 后，推送你的修改：

```bash
git add .
git commit -m "配置 fork 部署"
git push origin main
```

GitHub Actions 工作流将自动构建和部署你的网站。

**注意：**
- 首次部署可能需要几分钟。后续部署会更快。
- 如果你在配置 Pages 之前就推送了代码，Actions 标签页会显示工作流错误。只需配置好 Pages，然后重新运行工作流即可。

---

## 常见问题

### 问题：404 页面未找到

**原因：** GitHub Pages 未配置或首次构建未完成。

**解决方案：**
- 等待 2-3 分钟让首次构建完成
- 检查 **Settings** → **Pages** 查看部署状态
- 检查 **Actions** 标签页查看构建错误

---

### 问题：自定义域名冲突

**原因：** 推送前忘记删除 `public/CNAME`。

**解决方案：**
```bash
git rm public/CNAME
git commit -m "删除自定义域名 CNAME"
git push origin main
```

然后在设置中重新配置 GitHub Pages。

---

### 问题：RSS Feed 链接指向旧网站

**原因：** 没有更新 `astro.config.mjs` 或 `src/pages/subscribe.astro`。

**解决方案：** 按照上面的"必须修改"部分操作。

---

## 项目结构说明

本项目使用：
- **Astro 5.0**（静态输出：`output: 'static'`）
- **Tailwind CSS 3.4**（样式）
- **GitHub Actions**（自动部署）
- **RSS feed**（支持音频附件）
- **KaTeX**（数学公式渲染）
- **Pagefind**（静态搜索）

所有依赖都是公开的 npm 包。没有私有或本地依赖。

---

## 许可证

本项目采用 MIT 许可证 - 详见 [LICENSE](LICENSE) 文件。

MIT 许可证允许你：
- Fork 和修改项目
- 用于个人或商业用途
- 带或不带署名重新分发（尽管署名是受欢迎的）

---

## 需要帮助？

如果遇到本指南未涵盖的问题：
1. 查看 [Astro 文档](https://docs.astro.build/zh-cn/)
2. 检查 [GitHub Actions 日志](https://github.com/你的用户名/你的仓库/actions)


---

**最后更新：** 2026 年 4 月 29 日
