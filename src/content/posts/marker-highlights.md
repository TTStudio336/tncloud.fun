---
title: Markdown 标记高亮
published: 2026-08-28
description: 在 Shirone Markdown 中使用基于设计令牌的标记语法突出关键词句。
tags: [示例, Markdown, 排版, Shirone]
category: 指南
lang: zh-CN
draft: false
---

标记高亮可以突出某个短语，而无需将整段内容变成独立组件。构建时，它们会被渲染为原生 `<mark>` 元素，并继承当前启用的 M3E 配色系统。

## 默认强调

如果希望使用文章的主色来突出内容，请使用 `==text==`。例如，在普通段落中突出 ==读者应当记住的一项决定==。

如果需要更明显的层级，标记中也可以嵌套 ==**Markdown 强调语法**==。

## 语义颜色

如果需要表达不同的语义色调，可以添加后缀。可用变体包括 `primary`、`secondary`、`tertiary`、`error` 和 `tip`。

- ==Primary 将短语与当前主题色关联起来=={.primary}
- ==Secondary 以较柔和的方式表达补充区分=={.secondary}
- ==Tertiary 添加另一种编辑提示色=={.tertiary}
- ==Error 标记需要修正的情况=={.error}
- ==Tip 突出实用建议=={.tip}

## 编写语法

```markdown
==Primary marker==

==Secondary marker=={.secondary}
==Tertiary marker=={.tertiary}
==Error marker=={.error}
==Tip marker=={.tip}
```

行内代码（如 `==标记语法示例==`）和围栏代码示例会保持原样，因此文档可以讲解语法而不会实际触发高亮。
