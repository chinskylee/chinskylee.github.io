<h1 align="center">lyralex-blog（中文版）</h1>

<p align="center">
  <a href="README.md">English Version</a> |
  <a href="https://lyralex.qzz.io">在线演示</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Astro-5.0-BC52EE?style=flat-square&logo=astro" alt="Astro 5.0">
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS 3.4">
  <img src="https://img.shields.io/badge/许可证-MIT-00A86B?style=flat-square&logo=opensourceinitiative&logoColor=white" alt="MIT许可证">
  <img src="https://img.shields.io/github/deployments/chinskylee/chinskylee.github.io/github-pages?label=GitHub%20Pages&style=flat-square&logo=github" alt="GitHub Pages">
</p>

<p align="center">
  基于 Astro 构建的个人博客，包含物理研究笔记、氛围编程指南和技术教程。
</p>

---

## 功能特性

- **极速加载** - Astro 默认零 JS 输出，采用 Islands 架构
- **深色模式** - 系统感知主题，支持手动切换（亮色/暗色）
- **内容集合** - 类型安全的 Markdown/MDX 博客文章，支持标签系统
- **音频支持** - 内置音频播放器，支持带旁白的文章
- **数学渲染** - 集成 KaTeX，支持 LaTeX 公式
- **全文搜索** - Pagefind 静态搜索集成
- **RSS 订阅** - 自动生成 RSS，支持音频附件
- **阅读进度** - 带进度跟踪的导航
- **响应式设计** - 移动端优先，支持可折叠菜单

## 技术栈

- **框架**: [Astro 5.0](https://astro.build)
- **样式**: [Tailwind CSS 3.4](https://tailwindcss.com) + Typography 插件
- **图标**: Google Material Symbols Outlined
- **字体**: Space Grotesk (标题) + Inter (正文)
- **数学公式**: [KaTeX](https://katex.org)
- **搜索**: [Pagefind](https://pagefind.app)
- **部署**: GitHub Actions → GitHub Pages

## 快速开始

```bash
# 克隆仓库
git clone https://github.com/chinskylee/chinskylee.github.io.git
cd chinskylee.github.io

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 生产环境构建
npm run build

# 预览生产构建
npm run preview
```

## 项目结构

```
chinskylee.github.io/
├── public/
│   ├── images/          # 静态图片
│   ├── audio/           # 文章音频文件
│   ├── favicon.ico      # 多尺寸网站图标
│   └── CNAME           # 自定义域名
├── src/
│   ├── components/      # Astro 组件（导航栏、页脚等）
│   ├── layouts/         # 页面布局（BaseLayout）
│   ├── pages/           # 路由（首页、博客、标签、归档）
│   │   ├── blog/
│   │   │   ├── [...slug].astro  # 博客文章模板
│   │   │   └── index.astro      # 博客列表页
│   │   └── tags/
│   │       └── [tag].astro      # 标签筛选页
│   ├── content/
│   │   ├── config.ts    # 内容集合配置
│   │   └── blog/       # Markdown 博客文章
│   └── styles/         # 全局样式
├── astro.config.mjs     # Astro 配置
├── tailwind.config.mjs  # Tailwind 配置
└── package.json        # 依赖项
```

## 撰写文章

在 `src/content/blog/` 目录下创建新的 Markdown 文件：

```markdown
---
title: "文章标题"
description: "文章简要描述"
pubDate: 2026-04-29
tags: ["physics", "tutorial"]
draft: false
audio:  # 可选：音频旁白
  src: "/audio/your-audio.m4a"
  title: "音频标题"
  bitrate: "256KBPS"
---

这里是正文内容... 支持 **Markdown** 和 $LaTeX$ 数学公式！

$$
E = mc^2
$$
```

## 自定义配置

### 站点信息
编辑 `astro.config.mjs`：
```javascript
export default defineConfig({
  site: 'https://yourdomain.com',
  base: '/',
  // ...
})
```

### 主题颜色
修改 `tailwind.config.mjs`：
```javascript
theme: {
  extend: {
    colors: {
      primary: '#705a4a',
      // 添加自定义颜色
    }
  }
}
```

### 内容管理
- **博客文章**: `src/content/blog/`
- **页面**: `src/pages/`
- **组件**: `src/components/`

## RSS 订阅

博客自动生成 RSS 订阅源 `/rss.xml`，包含：
- RSS 项目完整内容
- 带旁白文章的音频附件
- 标准 Atom 格式

## 部署

每次推送到 `main` 分支时，通过 GitHub Actions 自动部署到 GitHub Pages。

**手动部署：**
```bash
npm run build
# 将 dist/ 文件夹上传到你的托管服务商
```

## 内容分类

- **物理研究** - 纳米光子学、LSPR、量子光学
- **氛围编程** - AI 辅助编程指南
- **技术教程** - Astro、GitHub Pages、工具使用
- **个人笔记** - 学习历程与思考

## 许可证

本项目采用 MIT 许可证 - 详见 [LICENSE](LICENSE) 文件。

## 相关链接

- **在线访问**: [lyralex.qzz.io](https://lyralex.qzz.io)
- **GitHub**: [@chinskylee](https://github.com/chinskylee)
- **邮箱**: chinskylee@outlook.com

---

<p align="center">
  用 💜 基于 <a href="https://astro.build">Astro</a> 构建
</p>
