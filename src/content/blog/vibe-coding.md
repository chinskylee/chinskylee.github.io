---
title: "何以氛围编程：AI时代的编程入门指南"
description: "通过轻松且“不太专业”的方式，这篇文章向ai时代想要了解和开始使用ai编程工具的小白提供一些参考。文中会包涵小白入门也许会用到的一些资源和工具，基础的概念、思路，以及我个人对氛围编程的理解和一些看法。"
pubDate: 2026-04-06
audio:
  src: "/audio/How_metal_nanoparticle_resonance_amplifies_light.m4a"
  title: "vibe.m4a"
  bitrate: "256KBPS"
tags: ["vibe-coding", "ai", "tutorial", "introduction"]
draft: true
---



## 1. AI时代，编程的定位，如何使用

过去甚至是现在，编程对于大多数普通人来说，是一种高端的概念，一种模糊的术语。但是在ai工具层出不穷的时代，编程似乎将不再单单是一种专业人士从事的工作，他正在以惊人的速度走进普通人的生活。

编程，构建可以和计算机硬件进行沟通的桥梁。过去，这种沟通需要我们学习特定的编程语言，理解复杂的语法和逻辑结构。但现在，随着ai工具的发展，编程不仅仅是人和计算机之间的沟通，而是人通过与高度浓缩的海量数据沟通来实现一个目标的中间过程。

目前相当流行一个词“氛围编程”，我觉得还蛮贴切的。在“funk，citypop”的环绕声中，输入文字，得到美丽的作品，这确是一种独特的氛围。现在，你可能只需要明确你所需要的功能，理解实现这个功能可能需要的过程(类似于算法和数据结构)，便可以在ai的协助下实现他。你不再需要理解一些不太直观、需要耗费大量时间和精力来训练的编程语言。而实现这个功能的中间过程就是编程，ai编程不再是由人来掌控和理解的过程，现在更像是一种黑盒，你看不到黑盒内部的结构，但是你能通过结构化的输入，来让这个黑盒输出你想要的结果。问题就是在于怎样在这个黑盒内部千变万化的同时，保证输出的结果尽量始终如一。在对黑盒没有任何约束，且输入模糊不清时，输出的结果将会展现出较大的随机性，而我们似乎不太想要这种抽奖式的体验。这时，有几个地方可以调整：

* 输入的明确和结构化程度(prompt的质量)
* 中间黑盒的结构(agent、skills、mcp这些组件和claudecode、opencode这些工具框架)
* 黑盒的处理输入和输出的逻辑(LLM大语言模型)

那就挺明确的了，我们一般只需要给一个好用的工具配上合适的组件和优秀的LLM再加以明确的、结构化的输入，那就可以离可控的、令人满意的结果更近一步。


## 2. 我入门ai编程的一些历程

接下来我想具体讲讲作为非专业人士，我是如何入门(可能还不算，也许是还在门口徘徊)ai编程的。主要是我个人的一些浅薄的理解，接下来会介绍一些可能有用的工具。

我接触到这个领域是在2023年，那时的ai编程工具还主要停留在“聊天”和“crtl+c v”上。更多的，可能是一种可以实时咨询的“专家”，也可能是比较智能的“搜索引擎”。

在那之后，有很长一段时间没有跟进过ai编程的进度，而ai编程的范式也在向着“氛围编程”默默地迈进。在2025年我开始了解到ai集成的IDE(即Integrated Development Environment,集成式开发环境)，开始自己动手使用trae等IDE。而在2025年末，我又结识了[iflow cli](https://cli.iflow.cn/)(现在他将要和我们说再见了)，从而开始研究CLI(即command line interface,命令行界面)，LLM在CLI中可以借助系统的命令行来运行命令。虽然在IDE中也可以通过终端运行系统命令，但是CLI似乎有些不同，这更像是那个“黑盒”了：没有文件编辑，只有文字输入和结果输出；没有复杂的界面，只有极致的简洁和性能。在CLI地陪伴下，我学习了git版本控制和并开始使用GitHub远程代码仓库。在折腾CLI的过程中，我也去了解了linux系统，给windows电脑安上了wsl，给Android手机安上了termux(这些后面展开说)。为了更好地远程协作，顺带着了解了一些网络通信的知识，内网穿透、ssh、https。与此同时，我也注意到像notebooklm这样优秀的ai集成知识库，透过gemini网页端、stitch看到了ai编程的前端设计潜力。当2026年初，openclaw火遍全球，我们似乎又发现了另一种可能。

## 3. wsl与termux


wsl是一个在windows上运行linux系统的工具，而termux是一个在android上运行linux系统的工具。wsl和termux都可以让我们在不同的设备上体验到类linux的环境，从而更好地使用一些命令行工具和编程环境。

wsl和termux的安装和配置可以参考[这里](https://www.ubuntu.com/tutorials/install-on-windows-11)和[这里](https://termux.com/).


## 4. Git版本控制和GitHub远程代码仓库

关于git版本控制的部分我不过多赘述了，在b站有许多优秀的中文git入门教程，比如[git入门](https://www.bilibili.com/video/BV134411h73h/)。而本地git仓库和GitHub协作的例子可以参考我的博客的构建过程。下面给出一些常用的git命令：

| Method | Description |
|--------|-------------|
| Refraction Angles | Uses minimum deviation in prisms; requires high transparency ($k \approx 0$). |
| Slab Transmittance | Measures reflectance and transmittance of a thin slab at near-normal incidence. |
| Kramers-Kronig | Analyzes reflectance over a wide range to derive the phase shift. |
| Ellipsometry | Directly measures amplitude ratios and phase shifts for reflected light. |
| Fresnel/Oblique | Uses reflectances for various polarizations at two oblique angles. |


在GitHub上可以设置actions用于自动化操作，比如编译代码和自动部署网站。


## 5. 我的CLI和LLM选择以及网页端工具




## 6. notebooklm和ai集成的知识库



---

*文章开头有语音概览*