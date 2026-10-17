---
title: Markdown 缩写词
published: 2026-08-28
description: 一次性定义常见缩写，并在文章中随时查看其完整含义。
tags: [示例, Markdown, 排版, Shirone]
category: 指南
lang: zh-CN
draft: false
---

缩写词可以让技术文章更加简洁，同时也为有需要的读者保留完整释义。定义后的术语会渲染为原生 `abbr` 元素，读者将鼠标悬停其上或使用辅助技术时，都可以查看释义。

## 正文示例

SSR 优先的输出方式可以确保 JavaScript 运行前，初始文档就已可见。评估阅读体验时，LCP 和 CLS 可以反映首屏内容是否快速呈现且保持稳定。

缩写词也可以出现在普通 Markdown 内容中，例如 **SSR** 相关说明；但代码字面量（如 `SSR`）和链接（如 [LCP 文档](https://web.dev/articles/lcp)）不会受到影响。

## 定义术语

定义可以放在同一 Markdown 文档的任意位置。定义本身不会显示为段落，只有本文中匹配的术语才会应用语义化缩写效果。

```markdown
*[SSR]: Server-Side Rendering
*[LCP]: Largest Contentful Paint
*[CLS]: Cumulative Layout Shift

SSR 会在客户端代码运行前提供 HTML 响应。
```

*[SSR]: Server-Side Rendering
*[LCP]: Largest Contentful Paint
*[CLS]: Cumulative Layout Shift

## 编写规则

术语必须以字母或数字开头，后续可以包含字母、数字、句点、下划线、加号和连字符。每条定义仅对当前文章生效；无效或重复的定义会保留为普通 Markdown，不会悄悄覆盖已有术语。
