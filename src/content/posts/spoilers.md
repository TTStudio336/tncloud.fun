---
title: Markdown 剧透内容
published: 2026-08-28
description: 在 Shirone Markdown 中隐藏行内答案，同时确保剧透内容仍可访问。
tags: [示例, Markdown, 无障碍, Shirone]
category: 指南
lang: zh-CN
draft: false
---

剧透语法可以隐藏简短答案或剧情细节，但不会将其从文档中移除。将鼠标悬停在原生控件上、聚焦控件或激活控件，即可显示内容。

## 行内详情

答案是 :spoiler[**42**]，周围的句子仍然是普通 Markdown。

剧透内容也可以包含 `行内代码`，例如 :spoiler[带有 **强调** 的较长细节]。

## 编写语法

```markdown
答案是 :spoiler[42]。
```

生成的 HTML 使用带有 `aria-expanded` 状态的原生按钮。即使没有 JavaScript，鼠标悬停和键盘聚焦仍可显示文本；可选运行时则会添加点击和键盘切换功能。
