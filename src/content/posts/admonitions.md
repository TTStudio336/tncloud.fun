---
title: Markdown 提示容器
published: 2026-08-27
description: 使用 Shirone 的 M3E Markdown 容器呈现说明、警告和可选详情。
tags: [示例, Markdown, 提示容器, Shirone]
category: 指南
lang: zh-CN
draft: false
---

提示容器可以在不打断文章阅读节奏的前提下，突出显示补充信息。所有形式都会在服务器端渲染，并使用统一、紧凑的 M3E 组件。

## 语义变体

::: note 部署说明
带空格的写法支持普通自定义标题，同时兼容原有语法。
:::

:::info
使用信息块补充中性背景，帮助读者理解当前章节。
:::

:::tip[现有的 **标签** 写法]
原有的方括号标签写法仍然可用，其中也可以包含 Markdown 行内强调。
:::

> [!IMPORTANT]
> GitHub Alert 语法也会进入同一渲染流程，因此现有文章仍能保持统一的视觉风格。

:::warning
运行生产构建前，请检查环境变量。
:::

:::caution
请勿在示例中发布凭据、本地配置或私钥。
:::

## 可选详情

::: details 查看完整命令
此折叠区域使用浏览器原生语义，即使没有客户端 JavaScript，也可以通过键盘访问。

```powershell
npx.cmd astro check
pnpm.cmd build
```

- 默认处于收起状态。
- 较长的代码可以在代码块内部滚动。
- 在窄屏上，容器宽度仍不会超出文章区域。
:::

## 编写语法

```markdown
:::note[现有标题写法]
容器内容
:::

::: warning 兼容 Plume 的标题写法
容器内容
:::

> [!TIP]
> GitHub Alert 写法

::: details 可选内容
读者展开后显示。
:::
```
