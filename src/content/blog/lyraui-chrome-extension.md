---
title: "LyraUI：一个轻量级的本地 AI 浏览器扩展"
description: "记录开发 LyraUI Chrome 扩展的过程，如何与 AI 协作完成项目，以及项目的技术架构和实现效果。"
pubDate: 2026-05-01
tags: ["ai", "chrome-extension", "ollama", "project", "vibe-coding"]
draft: false
---

## 前言

最近我开发了一个名为 LyraUI 的 Chrome 浏览器扩展，它让用户可以方便地与本地运行的 Ollama 大模型进行对话。这个项目很小，功能也不复杂，但开发过程中有一些值得记录的地方，特别是如何借助 AI 工具来完成这样一个小项目。

## 为什么做这个

目前基于 Ollama 的本地 AI 工具已经不少了，比如 Open WebUI、Page Assist 等，功能都很丰富。但在实际使用中，我发现有时候只是想和本地模型简单聊几句，启动一个完整的 Web UI 显得有些重——需要启动服务、等待页面加载，而我只想快速问个问题。

于是我想做一个很轻量的工具：点击浏览器工具栏图标，新标签页打开就能用，不需要复杂配置，也没有多余的依赖。

项目取名 LyraUI，是因为天琴座（Lyra）是北天一个小而明亮的星座，这个扩展也希望做到同样——小巧但实用。

## 如何与 AI 协作开发

整个开发过程我主要借助了 AI 编程工具（iflow cli）来完成，具体来说：

1. **需求明确**：我先想清楚这个扩展要做什么——流式对话、思考过程预览、翻译面板、零配置。功能不多，但每个都要实用。

2. **技术选型**：参考了 Page Assist 等项目，最终选择 Manifest V3 + 原生 HTML/CSS/JS 的方案，没有用任何框架或构建工具。

3. **AI 辅助编码**：在开发过程中，我使用 AI 工具来帮助编写核心代码，比如：
   - Service Worker 中处理跨域问题的 `declarativeNetRequest` 方案
   - 流式响应的 ReadableStream 解析逻辑
   - 思考过程区块的动态渲染

4. **迭代优化**：先实现基本功能，然后逐步添加翻译面板、模型自动发现等特性。每次迭代都和 AI 讨论实现方案，选择最简洁的做法。

特别感谢 DeepSeek-V4-Pro、 iflow cli 以及 tencent/hy3-preview 在开发过程中提供的支持，以及 NanoBanana2 协助创建的 Logo。

## 项目结构

LyraUI 的项目结构非常简单：

```
LyraUI/
├── manifest.json        # Manifest V3 配置
├── bg.js               # Service Worker 后台脚本
├── chat.html           # 聊天页面
├── chat.js             # 聊天逻辑
├── render_functions.js # 渲染相关函数
├── libs/               # 第三方库（如果有）
├── demo/               # 演示截图
├── icon.png            # 扩展图标
├── README.md           # 英文文档
└── README-zh.md        # 中文文档
```

整个项目没有 `package.json`，没有 `node_modules`，也没有构建配置。所有代码都是原生 JS 写的，直接加载即可运行。

### 核心技术点

**Manifest V3**：这是 Chrome 扩展的强制规范。相比 V2，V3 用 Service Worker 替代了持久化后台页面，内存占用更小，也更符合"轻量"的定位。

**跨域问题的处理**：Chrome 扩展的 Service Worker 不允许设置 `Origin` 请求头，但 Ollama 默认只接受来自 `localhost` 的请求。解决方案是使用 `declarativeNetRequest` API 动态添加规则，在发往 Ollama 的请求中修改 `Origin` 头：

```javascript
chrome.declarativeNetRequest.updateDynamicRules({
  removeRuleIds: [1],
  addRules: [{
    id: 1, priority: 1,
    condition: {
      requestDomains: [hostname],
      requestMethods: ['post', 'put', 'delete']
    },
    action: {
      type: 'modifyHeaders',
      requestHeaders: [{
        header: 'Origin',
        operation: 'set',
        value: baseUrl
      }]
    }
  }]
});
```

**流式响应**：使用原生的 `ReadableStream` API 解析 SSE（Server-Sent Events）格式的流式数据，实现 token 级别的实时输出。

**思考过程预览**：对于 DeepSeek、QwQ 这类推理模型，会自动检测响应中的思考过程，并以可折叠的区块展示。

## 实现的效果

目前 LyraUI 实现了以下功能：

- **流式对话**：实时显示模型生成的每个 token，无需等待完整响应
- **思考过程预览**：支持 DeepSeek、QwQ 等推理模型，可折叠查看推理链条
- **内置翻译面板**：支持 12 种语言，推荐使用 translategemma 系列模型
- **零配置**：通过 Ollama 的 `/api/tags` 接口自动发现本地模型
- **轻量级**：无框架、无构建步骤、无依赖包，原生 JS 实现

安装方式也很简单：从 [Releases](https://github.com/chinskylee/LyraUI/releases) 下载 zip 包，解压后在 `chrome://extensions` 页面加载即可。

## 一些想法

这个项目很小，技术上也没有什么特别复杂的地方。但我觉得它填补了一个小场景：当你只是想和本地模型快速聊几句或者想翻译一段文本的时候，不需要启动 Docker、不需要打开完整的 Web UI，点击扩展图标就能用。

在开发过程中，我越来越感受到"氛围编程"的便利——不需要深入理解每一个 API 的细节，而是把需求说清楚，让 AI 来帮助实现。但同时，也需要对整体架构有基本的理解，才能判断 AI 给出的方案是否合理。

项目开源在 [https://github.com/chinskylee/LyraUI](https://github.com/chinskylee/LyraUI)，采用 MIT 协议。

---

*项目创建于 2026 年 4 月 28 日，目前版本 v1.1.0*
*本博客更新于 2026 年 5 月 1 日*
