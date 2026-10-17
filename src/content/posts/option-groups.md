---
title: Markdown 选项组
published: 2026-08-28
description: 使用紧凑且可同步的 M3E 选项组展示相关 Markdown 方案。
tags: [示例, Markdown, 选项卡, Shirone]
category: 指南
lang: zh-CN
draft: false
---

选项组可以将功能相同的说明放在一起，而不必重复周围的解释。每个选项都支持完整的块级 Markdown；所选值也可以与同一页面上的其他选项组同步。

## 选择包管理器

使用 `@tab:active` 指定初始选项。标题后的 `#` 后缀可以设置稳定的值，同时不影响显示标题。

::: tabs#package-manager

@tab npm

使用 npm 安装软件包：

```powershell
npm install astro
```

@tab:active **pnpm**#pnpm

使用 pnpm 安装软件包：

```powershell
pnpm.cmd add astro
```

@tab Bun#bun

使用 Bun 安装软件包：

```powershell
bun add astro
```

:::

## 运行项目

此选项组使用 `package-manager` ID。选择上方的选项后，下方对应的命令也会更新，并且系统会记住该选择，供下次访问时使用。

::: tabs#package-manager

@tab npm

```powershell
npm run dev
```

@tab pnpm

```powershell
pnpm.cmd dev
```

@tab Bun#bun

```powershell
bun run dev
```

:::

## 多个备选项

较长的选项标题会保持在同一行，并在窄屏上于自身导航区域内滚动。

::: tabs

@tab 本地工作站

开发功能时使用本地工具链。

@tab 托管预览环境

发布临时预览版本以供审核。

@tab 持续集成

对每项变更执行稳定、可重复的验证。

@tab 生产环境部署

将已验证的构建产物部署到生产环境。

@tab 离线恢复流程

网络不可用时，从本地构建产物恢复。

:::

## 编写语法

````markdown
::: tabs#package-manager

@tab npm

在此填写 npm 相关说明。

@tab:active **pnpm**#pnpm

在此填写 pnpm 相关说明。

:::
````

每个选项组至少需要两个 `@tab` 区块，并且每个区块的标记与正文之间都需要有一个空行。无效或不完整的选项组会保留为可读的普通 Markdown。
