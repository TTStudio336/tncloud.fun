---
title: Markdown 步骤流
published: 2026-08-27
description: 在 Shirone 中以紧凑、易访问的步骤流呈现有序说明。
tags: [示例, Markdown, 步骤, Shirone]
category: 指南
lang: zh-CN
draft: false
---

对于有严格先后顺序的流程，可以使用步骤流。该组件不会打断文章的阅读节奏：简洁的编号轨道帮助读者定位，而标题、段落、链接、列表和代码仍保留各自原生的 Markdown 语义。

## 有序列表语法

使用 `:::steps` 容器包裹一个 Markdown 有序列表。每个顶层列表项都会成为一个步骤。

````markdown
:::steps[部署到生产环境]
1. **克隆并准备工作区**

   克隆仓库并进入项目目录。

   ```powershell
   git clone https://github.com/LyraVoid/Shirone.git
   Set-Location Shirone
   ```

2. **安装依赖**

   使用仓库指定的包管理器。

   ```powershell
   pnpm.cmd install
   ```

3. **运行项目检查**

   确认 Astro 诊断和 TypeScript 检查均已通过。

   ```powershell
   npx.cmd astro check
   pnpm.cmd type-check
   ```

4. **构建生产站点**

   生成静态站点和搜索索引。

   ```powershell
   pnpm.cmd build
   ```
:::
````

:::steps[部署到生产环境]
1. **克隆并准备工作区**

   克隆仓库并进入项目目录。

   ```powershell
   git clone https://github.com/LyraVoid/Shirone.git
   Set-Location Shirone
   ```

2. **安装依赖**

   使用仓库指定的包管理器。

   ```powershell
   pnpm.cmd install
   ```

3. **运行项目检查**

   确认 Astro 诊断和 TypeScript 检查均已通过。

   ```powershell
   npx.cmd astro check
   pnpm.cmd type-check
   ```

4. **构建生产站点**

   生成静态站点和搜索索引。

   ```powershell
   pnpm.cmd build
   ```
:::

## 选项

- `:::steps[标题]` 或 `title="标题"` 可以添加可见标题和无障碍名称。
- `start=4` 可以更改起始步骤编号。
- 容器中必须恰好包含一个有序列表。无效或混杂的输入会保留为普通且可读的 Markdown，不会被启发式地解析。
- 内容会在站点构建期间完成渲染，不会增加客户端 JavaScript 或网络请求。
