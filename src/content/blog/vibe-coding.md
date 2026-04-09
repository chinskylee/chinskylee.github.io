---
title: "何以氛围编程：AI时代的编程入门指南"
description: "通过轻松且“不太专业”的方式，这篇文章向ai时代想要了解和开始使用ai编程工具的小白提供一些参考。文中会包涵小白入门也许会用到的一些资源和工具，基础的概念、思路，以及我个人对氛围编程的理解和一些看法。"
pubDate: 2026-04-09
audio:
  src: "/audio/AI时代氛围编程生存指南.m4a"
  title: "vibe.m4a"
  bitrate: "256KBPS"
tags: ["vibe-coding", "ai", "tutorial", "introduction"]
draft: false
---



## 1. AI时代，编程的定位，如何使用


过去甚至是现在，编程对于大多数普通人来说，是一种高端的概念，一种模糊的术语。但是在ai工具层出不穷的时代，编程似乎将不再单单是一种专业人士从事的工作，他正在以惊人的速度走进普通人的生活。

### “黑盒”的诞生

编程，构建可以和计算机硬件进行沟通的桥梁。过去，这种沟通需要我们学习特定的编程语言，理解复杂的语法和逻辑结构。但现在，随着ai工具的发展，编程不仅仅是人和计算机之间的沟通，而是人通过与高度浓缩的海量数据沟通来实现一个目标的中间过程。

目前相当流行一个词“氛围编程”，我觉得还蛮贴切的。在“funk，citypop”的环绕声中，输入文字，得到美丽的作品，这确是一种独特的氛围。现在，你可能只需要明确你所需要的功能，理解实现这个功能可能需要的过程(类似于算法和数据结构)，便可以在ai的协助下实现他。你不再需要理解一些不太直观、需要耗费大量时间和精力来训练的编程语言。而实现这个功能的中间过程就是编程，ai编程不再是由人来掌控和理解的过程，现在更像是一种黑盒，你看不到黑盒内部的结构，但是你能通过结构化的输入，来让这个黑盒输出你想要的结果。问题就是在于怎样在这个黑盒内部千变万化的同时，保证输出的结果尽量始终如一。

### 驾驭“黑盒”

在对黑盒没有任何约束，且输入模糊不清时，输出的结果将会展现出较大的随机性，而我们似乎不太想要这种抽奖式的体验。这时，有几个地方可以调整：

* 输入的明确和结构化程度(prompt的质量)
* 中间黑盒的结构(agent、skills、mcp这些组件和claudecode、opencode这些工具框架)
* 黑盒的处理输入和输出的逻辑(LLM大语言模型)

那就挺明确的了，我们一般只需要给一个好用的工具配上合适的组件和优秀的LLM再加以明确的、结构化的输入，那就可以离可控的、令人满意的结果更近一步。

![黑盒](/images/Gemini_Generated_Image_lz4pxdlz4pxdlz4p.png)

## 2. 我入门ai编程的一些历程

接下来我想具体讲讲作为非专业人士，我是如何入门(可能还不算，也许是还在门口徘徊)ai编程的。主要是我个人的一些浅薄的理解，接下来会介绍一些可能有用的工具。

### 初入ai编程的世界

我接触到这个领域是在2023年，那时的ai编程工具还主要停留在“聊天”和“crtl+c v”上。更多的，可能是一种可以实时咨询的“专家”，也可能是比较智能的“搜索引擎”。

在那之后，有很长一段时间没有跟进过ai编程的进度，而ai编程的范式也在向着“氛围编程”默默地迈进。在2025年我开始了解到ai集成的IDE(即Integrated Development Environment,集成式开发环境)，开始自己动手使用trae等IDE。

### 学习cli和网页端工具

而在2025年末，我又结识了[iflow cli](https://cli.iflow.cn/)(现在他将要和我们说再见了)，从而开始研究CLI(即command line interface,命令行界面)，LLM在CLI中可以借助系统的命令行来运行命令。虽然在IDE中也可以通过终端运行系统命令，但是CLI似乎有些不同，这更像是那个“黑盒”了：没有文件编辑，只有文字输入和结果输出；没有复杂的界面，只有极致的简洁和性能。在CLI地陪伴下，我学习了git版本控制和并开始使用GitHub远程代码仓库。在折腾CLI的过程中，我也去了解了linux系统，给windows电脑安上了wsl，给Android手机安上了termux(这些后面展开说)。为了更好地远程协作，顺带着了解了一些网络通信的知识，内网穿透、ssh、https。

与此同时，我也注意到像notebooklm这样优秀的ai集成知识库，透过gemini网页端、stitch看到了ai编程的前端设计潜力。当2026年初，openclaw火遍全球，我们似乎又发现了另一种可能。


## 3. 必要的环境与知识

### wsl与termux


wsl是一个在windows上运行linux系统的工具，而termux是一个在android上运行linux系统的工具。wsl和termux可以让我们在不同的设备上体验到类linux的环境，从而更好地使用一些命令行工具和编程环境。

关于wsl的安装，可以直接在Microsoft Store中搜索并安装，之后再安装ubuntu系统即可。安装完成后需要进行重启。注意最好将wsl中安装的系统迁移至非系统盘，以防止c盘空间不足,具体的迁移教程可以参考这个[知乎帖子](https://zhuanlan.zhihu.com/p/621873601)。关于termux，之后可能会单独写一期。

在安装好wsl以及ubuntu系统后，可以对终端进行一些优化，推荐字体[Maple Mono NF CN](https://github.com/subframe7536/maple-font/releases)，终端模拟器[wezterm](https://wezterm.org/)。我目前在使用的是fish shell，在很多情况下fish shell的命令与原生的bash命令不太一致，不方便新手按照教程进行学习，还是建议使用默认的bash shell。


### Git版本控制和GitHub远程代码仓库

关于git版本控制的部分我不过多赘述了，在b站有许多优秀的中文git入门教程，比如[【GeekHour】一小时Git教程](https://www.bilibili.com/video/BV1HM411377j)。而本地git仓库和GitHub协作的例子可以参考我的[博客构建过程](https://lyralex.qzz.io/blog/deploy-to-github-pages/)。下面给出一些常用的git命令：

| 命令 | 用途 | 常见写法 |
|------|------|----------|
| `git init` | 在当前目录创建一个新的 git 仓库 | `git init` |
| `git status` | 查看当前工作区、暂存区和分支状态 | `git status` |
| `git add` | 把修改加入暂存区 | `git add .` 或 `git add 文件名` |
| `git commit` | 把暂存区内容提交到本地仓库 | `git commit -m "提交说明"` |
| `git log` | 查看提交历史 | `git log --oneline --graph --all` |
| `git diff` | 查看文件改动内容 | `git diff` 或 `git diff --staged` |
| `git branch` | 查看、创建或删除分支 | `git branch` / `git branch 分支名` |
| `git switch` | 切换到其他分支 | `git switch 分支名` |
| `git merge` | 合并分支 | `git merge 分支名` |
| `git clone` | 克隆远程仓库到本地 | `git clone 仓库地址` |
| `git remote` | 查看或配置远程仓库 | `git remote -v` |
| `git pull` | 拉取远程更新并合并到本地 | `git pull` |
| `git push` | 推送本地提交到远程仓库 | `git push origin 分支名` |
| `git restore` | 撤销工作区或暂存区的修改 | `git restore 文件名` / `git restore --staged 文件名` |
| `git reset` | 回退提交或取消暂存 | `git reset HEAD^` / `git reset 文件名` |

如果不熟悉终端的命令和操作可以直接在vscode中用图形用户界面进行仓库初始化、添加、提交和推送等操作。



在GitHub上可以设置actions用于自动化操作，比如编译代码和自动部署网站。github action的这个配置文件完全可以让ai工具在完全理解这个项目的基础上来写。


## 4. 我的CLI和LLM选择以及工具


### 准备工作

许多工具都提供方便的一键安装方式，部分需要使用nodejs的npm包管理器来安装。

相比于直接在windows系统中运行，在wsl中环境配置和依赖安装会方便一些。可以通过以下命令来安装依赖：

```
sudo apt update && sudo apt upgrade -y
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt install -y build-essential
```

### 我使用的工具和习惯


在cli工具方面，选择比较多。我之前习惯使用的iflow cli将在2026年4月17日停止api服务，可以迁移到[qodercli](https://qoder.com/zh/cli)进行使用。另外，[qwen code](https://qwen.ai/qwencode)每天有1000次的免费次数。

claude code可以通过：
```
npm i -g @anthropic-ai/claude-code
```
来进行安装。安装好后通过命令claude来启动。

而opencode是一款开源的cli工具，需要bun来运行，但其有一键安装命令：

```
curl -fsSL https://opencode.ai/install | bash
```
同样的用opencode命令来启动。可以和opencode对话，让其安装oh-my-openagent插件。这一插件可以很好地提升opencode在ai编程的规范性，提高结果可用度。

api方面，可以选择[modelscope](https://www.modelscope.cn/)，会有限速和使用频率限制，可以体验到glm-5和kimi-k2.5等开源模型。如果是学生的话，可以进行GitHub学生认证，每个月可以有GitHub copilot 300次高级模型的使用额度。而在opencode中除了几款免费提供的模型外，还可以通过登录认证的方式(输入/model命令，选择GitHub copilot作为提供商)，使用GitHub copilot的模型。另外，[ollama](https://ollama.com/)也提供云模型，每天有一定的使用额度。


关于gemini网页版，其本身具有记忆，能够记住您之前的选择，配合chrome插件[Voyager](https://chromewebstore.google.com/detail/voyager/iifacdnjakkhjjiengaffnegbndgingi)，可以进行对话管理和分类，同时可以在侧边栏方便的跳转到对应的会话节点。使用[stitch](https://stitch.withgoogle.com/)可以设计出美观的前端风格，可以将代码导入到gemini中，在tools里选择canvas，可以进行前端的设计和各种功能的实现；将gemini生成的前端代码导入到opencode的Hephaestus (Deep Agent)模式中，可以将前端逻辑优化，做成可用的应用。

### notebooklm和ai集成的知识库

可以使用[folo](https://folo.is/)进行rss订阅，例如我的博客，在subscribe中复制订阅链接，贴入即可；当订阅源有新内容时就会发送通知。

使用notebooklm可以对已有的知识进行多种方式的总结和提炼，例如slides、reports和架构图等，有利于我们掌握一个新的概念和知识体系。这里我放一张notebooklm生成的“如何使用notbooklm”的架构图。

![notebooklm教程架构图](/images/AI-Tool-Power-User-Workflow.webp)

## 5.一些总结


在“氛围编程”这个过程中，最重要的能力可能不再只是“会不会写代码”，而是能不能把需求说清楚、能不能判断结果对不对、能不能在出问题时找到原因。换句话说，ai可以帮我们提高效率，但它不能替代我们对目标的理解，也不能替代我们对结果的负责。

所以我觉得，比较合适的姿势不是完全依赖ai，也不是排斥ai，而是把它当成一个很强的工具：该让它写的时候让它写，该自己检查的时候自己检查，该去学基础知识的时候就老老实实去学。这样一来，ai才真的能帮助我们把注意力放到更重要的地方，比如想法、设计、判断和创造。

如果你只是刚开始接触这些工具，不用一下子把所有东西都学会。先从一个最顺手的cli或ide开始，先学会提问、修改、提交、部署，再慢慢补git、linux、网络这些基础知识。只要能持续做出一点点东西，理解就会在这个过程中慢慢长出来。

---

*文章开头有语音概览*