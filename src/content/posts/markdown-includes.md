---
title: "Markdown 文件包含"
published: 2026-08-28
description: "在构建时包含 Markdown 文件或其部分内容。"
tags: [Markdown, Shirone]
category: 指南
draft: false
---

Shirone 可以包含本地 Markdown 文件，或安全地截取其中一部分。

<!-- @include: src/content/snippets/include-example.md#public-api -->

同时也支持包含整个文件和指定行范围：

```markdown
<!-- @include: src/content/snippets/include-example.md -->
<!-- @include: src/content/snippets/include-example.md{1-4} -->
<!-- @include: src/content/snippets/include-example.md{5-} -->
<!-- @include: src/content/snippets/include-example.md{-4} -->
```

围栏代码中的包含注释会保持原样。
