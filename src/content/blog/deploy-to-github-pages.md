---
title: "如何使用 Astro + GitHub Pages 搭建个人博客"
description: "详细介绍如何将 Astro 项目部署到 GitHub Pages，以及日常维护和内容发布的工作流程"
pubDate: 2026-04-05
tags: ["astro", "github-pages", "tutorial", "web"]
draft: false
---

最近我用 Astro 框架搭建了这个个人博客，并部署到了 GitHub Pages。整个过程比想象中简单，而且完全免费。这篇博客记录了完整的部署流程和后续维护方法，希望能帮助到有同样需求的朋友。

![博客截图](/images/astro-blog.png)

## 技术栈选择

在搭建博客之前，我对比了几种主流方案：

- **WordPress**: 功能强大但太重，需要数据库和服务器
- **Jekyll/Hugo**: 静态生成器，但模板语言不够灵活
- **Next.js**: 功能强大但构建输出较大
- **Astro**: 零 JS 默认输出， Islands 架构，完美契合内容型网站

最终选择 Astro 是因为：
1. **性能优异** - 默认零 JavaScript，页面加载极快
2. **现代化开发** - 支持 React/Vue/Svelte 组件，开发体验好
3. **Markdown 原生支持** - 内容写作非常方便
4. **GitHub Pages 友好** - 纯静态输出，部署简单

## 部署流程

### 1. 创建 GitHub 仓库

首先创建一个新的 GitHub 仓库，命名建议：
- 如果使用 `username.github.io`，可以直接作为主页
- 如果使用其他名称（如 `blog`），会部署到 `username.github.io/blog`

```bash
cd your-blog-project
git init
git remote add origin https://github.com/username/username.github.io.git
```

### 2. 配置 GitHub Actions

在项目根目录创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build site
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

这个 Workflow 会在每次推送到 `main` 分支时自动构建并部署。

### 3. 配置 Astro

在 `astro.config.mjs` 中设置正确的 `site` 和 `base`：

```javascript
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://yourdomain.com',  // 你的域名
  base: '/',                        // 如果是子目录，改为 '/blog/'
  integrations: [tailwind()],
  output: 'static',
  build: {
    format: 'directory'
  }
});
```

### 4. 启用 GitHub Pages

在 GitHub 仓库设置中：
1. 进入 **Settings** → **Pages**
2. **Source** 选择 "GitHub Actions"
3. 保存设置

### 5. 配置自定义域名（可选）

如果要使用自定义域名：

1. 在 `public/` 目录下创建 `CNAME` 文件，内容为域名：
   ```
   yourdomain.com
   ```

2. 在域名服务商处添加 DNS 记录：
   - 类型: CNAME
   - 主机: 你的子域名（如 `yoursubdomain`）
   - 值: `username.github.io`

3. 等待 DNS 生效（通常几分钟到几小时）

### 6. 首次部署

```bash
# 提交代码
git add -A
git commit -m "Initial commit"
git push -u origin main
```

推送后，GitHub Actions 会自动开始构建和部署。可以在仓库的 **Actions** 标签页查看进度。

部署完成后，访问你的域名即可看到网站！

## 日常维护 workflow

### 发布新文章

Astro 使用 Content Collections 管理文章，所有文章存放在 `src/content/blog/` 目录：

1. **创建新文件**：
   ```bash
   touch src/content/blog/my-new-post.md
   ```

2. **添加 frontmatter**：
   ```markdown
   ---
   title: "文章标题"
   description: "文章描述"
   pubDate: 2026-04-05
   tags: ["tag1", "tag2"]
   draft: false
   ---
   
   文章内容...
   ```

3. **写作内容**：支持标准 Markdown 语法，以及代码块、表格等扩展语法

4. **本地预览**：
   ```bash
   npm run dev
   # 访问 http://localhost:4321
   ```

5. **提交发布**：
   ```bash
   git add -A
   git commit -m "Add new post: 文章标题"
   git push
   ```

推送后 GitHub Actions 会自动重新构建和部署，约 1-2 分钟后新文章就会上线。

### 文章管理

#### 草稿功能

将 `draft: true` 设为草稿，正式发布时改为 `false`：

```yaml
---
title: "未完成的文章"
draft: true  # 设为 true 不会显示在网站上
---
```

#### 标签系统

文章支持标签分类：

```yaml
tags: ["physics", "quantum-mechanics", "tutorial"]
```

标签页面会自动生成，访问 `/tags/physics` 查看所有带该标签的文章。

#### 文章排序

文章默认按 `pubDate` 降序排列，最新的文章显示在最前面。

### 修改网站配置

如需修改网站标题、描述等，编辑 `src/consts.ts`：

```typescript
export const SITE_TITLE = 'My Blog';
export const SITE_DESCRIPTION = 'Welcome to my blog!';
```

### 更新主题样式

本项目使用 Tailwind CSS，样式配置在 `tailwind.config.mjs`。修改颜色、字体等：

```javascript
export default {
  theme: {
    extend: {
      colors: {
        primary: '#705a4a',
        // ...
      }
    }
  }
};
```

## 常见问题

### 部署失败怎么办？

1. 检查 **Actions** 日志，查看具体错误
2. 常见原因：
   - Node.js 版本不兼容 → 更新 `deploy.yml` 中的版本
   - 依赖安装失败 → 检查 `package.json` 是否有冲突
   - 构建错误 → 本地运行 `npm run build` 查看详细错误

### 如何回滚到旧版本？

GitHub Pages 会自动部署最新版本，如需回滚：

```bash
git revert HEAD  # 撤销最新提交
git push
```

或使用 GitHub 的提交历史，找到之前的提交，点击 "Revert"。

### 图片资源放哪里？

放在 `public/` 目录下，构建时会自动复制到输出目录：

```
public/
  images/
    my-photo.jpg
```

在 Markdown 中引用：

```markdown
![描述](/images/my-photo.jpg)
```

### 自定义域名 HTTPS

GitHub Pages 自动为自定义域名提供 HTTPS 证书，无需额外配置。如果提示证书错误，检查 DNS 配置是否正确。

## 总结

使用 Astro + GitHub Pages 搭建博客的优势：

- **零成本** - GitHub Pages 免费托管
- **高性能** - Astro 生成的静态网站加载极快
- **开发友好** - 组件化开发，热更新，现代化工具链
- **自动化** - GitHub Actions 自动部署，推送即发布
- **版本控制** - 所有内容和代码都在 Git 中管理

对于内容创作者来说，这套方案既保留了 Markdown 写作的简洁，又能享受到现代前端开发的便利。最重要的是，整个流程完全免费且稳定可靠。

如果你也想搭建类似博客，希望这篇教程能有所帮助！

---

**参考链接：**
- [Astro 官方文档](https://docs.astro.build/)
- [GitHub Pages 文档](https://docs.github.com/en/pages)
- [本博客源码](https://github.com/chinskylee/chinskylee.github.io)
