---
title: Markdown 折叠面板
published: 2026-08-28
description: 将可选的 Markdown 内容收纳到紧凑、易访问的 M3E 折叠面板中。
tags: [示例, Markdown, 折叠面板, Shirone]
category: 指南
lang: zh-CN
draft: false
---

折叠面板可以将相关的可选详情收纳在一起。标题和正文均支持 Markdown 行内语法与块级语法；借助浏览器原生的折叠语义，无需客户端 JavaScript 也能使用。

## 独立面板

默认情况下，各面板可以独立展开。标题前加上 `:+` 可让该面板初始展开；当分组使用 `expand` 时，标题前加上 `:-` 可让该面板保持收起。

::: collapse
- **软件包要求**

  请使用 Node.js 22 或更高版本，并在安装软件包前启用 Corepack。

- :+ 安装依赖

  在仓库根目录运行工作区的软件包命令。

  ```powershell
  pnpm.cmd install
  ```

- 验证命令

  构建生产版本前，先检查内容处理流程。

  - `pnpm.cmd check:manifest`
  - `npx.cmd astro check`
:::

## 手风琴模式

如果希望一次只展开一个答案，请添加 `accordion`。浏览器会直接对原生折叠区域进行分组，因此展开另一个面板时，前一个会自动收起，无需进行 hydration。

::: collapse accordion expand
- 这里的 `expand` 有什么作用？

  如果没有面板使用 `:+` 标记，它会让第一个面板在初始状态下展开。

- 标题中可以使用 Markdown 吗？

  可以。标题支持行内 **强调** 和 `code`，面板正文则支持完整的块级 Markdown。

- 窄屏上会怎样显示？

  内容边距会缩小，长文本会自动换行，嵌入的代码也会保留独立的水平滚动区域。
:::

## 编写语法

````markdown
::: collapse accordion
- :+ 第一个标题

  第一个面板的内容。

- 带有 `code` 的第二个标题

  第二个面板的内容。
:::
````

容器中必须恰好包含一个顶层无序列表。每个列表项都需要包含标题段落、一个空行和正文内容。无效或混杂的输入会保留为普通且可读的 Markdown 列表。
