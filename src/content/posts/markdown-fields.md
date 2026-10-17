---
title: Markdown 字段卡片
description: 用于记录 API 和组件参数的文档卡片。
published: 2026-08-30
category: 指南
draft: true
---

同一 API 或组件包含多个相关选项时，可以使用 `field-group`。在开启行中填写字段名称，然后在说明文字之前添加元数据标签。

:::: field-group

::: field tex
@type object
@optional

TeX 解析器选项。
:::

::: field output
@type `'svg' | 'chtml'`
@default `'svg'`
@optional

输出格式，可以是 SVG 或通用 HTML。
:::

::::

## 基本字段

同一组中可以混合标记必填、可选和已弃用状态。默认值会与类型分开显示，方便快速浏览。

:::: field-group

::: field title
@type string
@required

组件中显示的标题。该值会出现在页面标题中，应尽量简短，便于快速浏览。
:::

::: field disabled
@type boolean
@default `false`
@optional

控件是否在初始状态下禁用。
:::

::: field locale
@type `'en' | 'zh-CN' | 'ja-JP'`
@default `'en'`
@optional

用于格式化日期、数字和无障碍标签的区域设置。
:::

::::

## 富文本说明

说明内容使用普通 Markdown。元数据行之后仍然可以使用链接、强调、列表和行内代码。

:::: field-group

::: field render
@type `(value: unknown) => string`
@required

将值渲染到最终输出中。回调应返回**安全字符串**，并且可以使用 `formatValue` 辅助函数。

- 确保渲染结果具有确定性。
- 避免在回调中发起网络请求。
:::

::: field retries
@type number
@default `3`
@optional

请求被报告失败前允许的最大尝试次数。
:::

::: field legacyMode
@type boolean
@deprecated

为保持向后兼容而保留。新的集成应改用 `compatibility`。
:::

::::

## 独立字段

如果只需在示例或代码块旁说明一个选项，也可以单独使用字段，无需分组。

::: field format
@type `'short' | 'long'`
@default `'short'`
@optional

控制结果的格式。
:::

## 编写说明

- `@type` 和 `@default` 的值会以代码标记的形式呈现。
- `@required`、`@optional` 和 `@deprecated` 会添加状态徽标。
- 元数据之后的普通 Markdown 内容会作为字段说明显示。
- 未知的 `@tags` 会作为说明文本显示，而不会被丢弃。
