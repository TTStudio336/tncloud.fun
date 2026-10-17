---
title: Shirone Markdown 扩展功能
published: 2026-08-19
pinned: true
description: 了解 Shirone 的自定义 Markdown 扩展、丰富组件和编写语法。
tags: [示例, Markdown, 扩展, 主题, Shirone]
series: markdown-syntax-guide
seriesOrder: 3
category: 指南
lang: zh-CN
draft: false
---

Shirone 提供了一系列主题专属的 Markdown 扩展和自定义语法容器。这些扩展基于原生 unified AST 处理流程构建，会在站点构建期间渲染为语义清晰、易于访问的 HTML，**不会产生客户端 JavaScript hydration 开销**，并且**完全遵循 M3E 设计令牌**。

## 文件树

文件树可以将多层项目结构、源码层级和终端目录输出转换为紧凑的交互式树形视图，并自动提供扩展名图标、差异高亮和可折叠分支。

### 1. 嵌套列表语法（`:::file-tree`）

如果要直接使用 Markdown 嵌套列表书写文件层级，请使用 `:::file-tree` 块级指令。

```markdown
:::file-tree{title="Shirone 源码目录"}
- src
  - components/
    - ++ Navigation.svelte # 新增组件
    - -- Button.astro # 已移除组件
  - content
    - posts/
      - markdown-enhancements.md
  - layouts/
    - PostLayout.astro
  - plugins
    - markdown/
      - rehype-file-tree.mjs
  - styles
    - markdown/
      - trees.css
  - **content.config.ts** # 重要文件
- public/
  - favicon.svg
- package.json
:::
```

:::file-tree{title="Shirone 源码目录"}
- src
  - components/
    - ++ Navigation.svelte # 新增组件
    - -- Button.astro # 已移除组件
  - content
    - posts/
      - markdown-enhancements.md
  - layouts/
    - PostLayout.astro
  - plugins
    - markdown/
      - rehype-file-tree.mjs
  - styles
    - markdown/
      - trees.css
  - **content.config.ts** # 重要文件
- public/
  - favicon.svg
- package.json
:::

#### 编写规则与标记

- **差异状态**：在条目前加上 `++`（绿色背景和徽标）或 `--`（红色背景和删除线），即可突出变更。
- **注释**：`#` 后的文本会作为弱化、右对齐的行内注释显示。
- **强调**：用 `**粗体**` 包裹名称，即可突出显示重要文件。
- **可折叠文件夹**：根据嵌套列表推断出的目录默认展开。添加尾随斜杠（如 `components/`）即可创建默认折叠的目录，读者可以点击或使用键盘导航展开。

---

### 2. 终端输出语法（```` ```file-tree ````）

如果已使用 `tree` 等命令行工具生成目录树文本，可直接将其粘贴到 `file-tree` 围栏代码块中。Unicode 分支字符（`├──`、`└──`、`│`）和 ASCII 分支都会自动解析。

````markdown
```file-tree title="构建输出" icon="simple"
dist
├── _astro/
│   ├── index.css
│   └── page.js
└── favicon.ico
```
````

```file-tree title="Build output" icon="simple"
dist
├── _astro/
│   ├── index.css
│   └── page.js
└── favicon.ico
```

#### 配置选项

- `title="string"`：设置自定义树标题和无障碍标签。
- `icon="colored" | "simple"`：选择多色扩展名图标（默认 `colored`）或简约单色图标（`simple`）。

---

## 代码树

交互式代码树在左侧提供多层文件导航，并可在右侧即时切换代码面板。对于多文件示例、模块或完整目录讲解，它能带来类似 IDE 的阅读体验。

### 1. 容器语法（`:::code-tree`）

在 `:::code-tree` 块级指令中组合多个围栏代码块。每个代码块都通过 `title="path/to/file"` 指定文件路径。

````markdown
:::code-tree{title="Shirone 组件示例" height="380px" entry="src/Button.svelte"}
```svelte title="src/Button.svelte"
<script lang="ts">
  let { label = "点击我" } = $props();
</script>

<button class="m3-btn">{label}</button>
```

```stylus title="src/styles/button.styl"
.m3-btn
  background: var(--primary)
  color: var(--on-primary)
  border-radius: var(--shape-corner-m)
```

```json title="package.json"
{
  "name": "button-demo",
  "version": "1.0.0"
}
```
:::
````

:::code-tree{title="Shirone Component Demo" height="380px" entry="src/Button.svelte"}
```svelte title="src/Button.svelte"
<script lang="ts">
  let { label = "Click me" } = $props();
</script>

<button class="m3-btn">{label}</button>
```

```stylus title="src/styles/button.styl"
.m3-btn
  background: var(--primary)
  color: var(--on-primary)
  border-radius: var(--shape-corner-m)
```

```json title="package.json"
{
  "name": "button-demo",
  "version": "1.0.0"
}
```
:::

#### 配置与标记

- `title="string"`：设置代码树的标题和无障碍标签。
- `height="string"`：设置桌面视图的高度（默认 `420px`，例如 `380px`、`26rem`）。
- `entry="filepath"`：指定首次加载时激活的文件。
- `icon="colored" | "simple"`：在彩色文件图标和简约单色图标之间切换。
- `:active`：在任意围栏代码块上添加 `:active`，将其设为默认激活的选项卡。

---

### 2. 本地目录自动导入（`@[code-tree]`）

直接指定工作区中的本地目录路径，即可在构建时自动扫描并生成交互式代码树，无需手动复制文件内容。

```markdown
@[code-tree title="动画工具" entry="status.ts"](/src/utils/anime)
```

@[code-tree title="站点配置" entry="siteConfig.ts"](/src/config)
