---
title: Mermaid 图表集
published: 2024-05-02
description: 展示流程、交互、数据模型、日程安排和项目历史等 Mermaid 图表示例。
tags: [示例, 演示, Markdown, Mermaid]
category: 示例
lang: zh-CN
draft: false
---

Mermaid 可以将 Markdown 中的文本描述转换为图表。以下示例使用 Shirone 的内容工作流，展示技术文章和项目笔记中常见的图表类型。

## 流程图

流程图用于描述一个流程，包括决策分支以及返回前序步骤的路径。

```mermaid
flowchart TD
    accTitle: 文章发布流程
    accDescr: 文章在发布前依次经过撰写、验证、预览和构建。验证失败时会返回修改。
    Draft[撰写 Markdown] --> Check{验证通过？}
    Check -->|否| Revise[修改文章]
    Revise --> Check
    Check -->|是| Preview[本地预览]
    Preview --> Build[构建静态页面]
    Build --> Publish[发布]
```

## 时序图

时序图按照时间顺序展示参与者之间的交互。此示例展示一次 Swup 导航从发起请求到渲染 Mermaid 图表的过程。

```mermaid
sequenceDiagram
    accTitle: 站内导航后的图表渲染
    accDescr: 读者发起导航后，Swup 替换文章内容，Mermaid 渲染器再增强新页面中的图表。
    actor Reader as 读者
    participant Browser as 浏览器
    participant Swup
    participant Content as 文章区域
    participant Renderer as Mermaid 渲染器
    Reader->>Browser: 打开另一篇文章
    Browser->>Swup: 开始站内导航
    Swup->>Content: 替换页面内容
    Swup-->>Renderer: 触发 content:replace
    Renderer->>Content: 查找 Mermaid 容器
    Renderer-->>Browser: 插入主题化 SVG
```

## 实体关系图

实体关系图用于描述结构化数据及其关系，例如作者、文章、标签和评论之间的联系。

```mermaid
erDiagram
    accTitle: 博客内容关系
    accDescr: 作者撰写文章，文章接收评论，关联记录则将文章与多个标签连接起来。
    AUTHOR ||--o{ POST : writes
    POST ||--o{ COMMENT : receives
    POST ||--o{ POST_TAG : classified_by
    TAG ||--o{ POST_TAG : groups
    AUTHOR {
        string id PK
        string display_name
    }
    POST {
        string slug PK
        string title
        datetime published_at
        string author_id FK
    }
    COMMENT {
        string id PK
        string post_slug FK
        string body
    }
    TAG {
        string id PK
        string label
    }
    POST_TAG {
        string post_slug FK
        string tag_id FK
    }
```

## 类图

类图用于展示软件设计中的职责、公共方法和依赖方向。

```mermaid
classDiagram
    accTitle: Markdown 渲染模块
    accDescr: 内容处理流程使用 Mermaid 插件生成回退标记，客户端渲染器随后将其增强为 SVG。
    class ContentPipeline {
        +render(markdown)
        +collectMetadata()
    }
    class MermaidPlugin {
        +transform(codeFence)
        +createFallback()
    }
    class DiagramRenderer {
        +initialize()
        +renderAll()
        +refreshTheme()
    }
    class ThemeTokens {
        +primary
        +surface
        +outline
    }
    ContentPipeline --> MermaidPlugin : 使用
    DiagramRenderer --> MermaidPlugin : 增强输出
    DiagramRenderer --> ThemeTokens : 读取
```

## 状态图

状态图展示对象的生命周期，以及使其在不同状态间转换的事件。

```mermaid
stateDiagram-v2
    accTitle: 文章生命周期
    accDescr: 文章从草稿进入审核并发布，也可能退回修改，或最终归档。
    [*] --> Draft
    Draft --> InReview : 提交
    InReview --> Draft : 要求修改
    InReview --> Published : 批准
    Published --> Draft : 撤回
    Published --> Archived : 归档
    Archived --> [*]
```

## XY 图表

XY 图表将柱状图和折线图组合在一起，用于比较共享坐标轴上的数值和趋势。

```mermaid
xychart-beta
    accTitle: 六周内容表现
    accDescr: 柱状图显示标准化后的每周发布量，折线显示标准化后的阅读完成率。
    title "六周内容表现"
    x-axis "周" [1, 2, 3, 4, 5, 6]
    y-axis "相对得分" 0 --> 100
    bar [36, 52, 44, 68, 76, 84]
    line [48, 55, 62, 61, 73, 81]
```

## 饼图

饼图可以直观比较各类别在整体中所占的比例。

```mermaid
pie showData
    accTitle: 文章主题占比
    accDescr: 工程占百分之四十，设计系统占百分之二十五，其余由指南和随笔构成。
    title 文章主题占比
    "工程" : 40
    "设计系统" : 25
    "指南" : 20
    "随笔" : 15
```

## 甘特图

甘特图沿日历时间轴排列任务、依赖关系和里程碑。

```mermaid
gantt
    accTitle: 主题发布计划
    accDescr: 发布计划依次经过需求确认、交互设计、组件开发、测试和发布。
    title 主题发布计划
    dateFormat YYYY-MM-DD
    axisFormat %m/%d
    section 设计
    确认需求 :done, brief, 2024-05-06, 2d
    完善交互 :done, interaction, after brief, 3d
    section 实现
    开发组件 :active, components, after interaction, 6d
    编写示例 :examples, after interaction, 4d
    section 验证
    自动化测试 :tests, after components, 3d
    发布 :milestone, release, after tests, 0d
```

## 思维导图

思维导图以一个中心主题为起点，展开相关领域和支撑概念。

```mermaid
mindmap
  root((Shirone))
    内容体验
      Markdown
      搜索
      图表
    界面系统
      M3E 令牌
      响应式布局
      配色方案
    工程质量
      Astro Check
      Playwright
      无障碍
```

## 时间线

时间线可以概括重要事件或阶段，无需提供精确的日历时长。

```mermaid
timeline
    title Mermaid 支持的演进
    流程设计 : 检测 Mermaid 围栏代码
             : 保留源码回退内容
    客户端增强 : 按需加载运行时
              : 应用主题令牌
    稳定性 : 支持 Swup 导航
           : 验证响应式和无障碍输出
```

## 用户旅程

用户旅程图展示任务各阶段中的操作、参与者和体验评分。

```mermaid
journey
    accTitle: 读者理解技术文章的过程
    accDescr: 读者发现一篇文章，通过结合正文和图表理解内容，然后继续探索相关主题。
    title 读者理解技术文章的过程
    section 发现
      浏览文章列表: 4: Reader
      选择主题: 5: Reader
    section 理解
      阅读文章: 4: Reader
      查看关系图: 5: Reader
    section 继续探索
      打开相关文章: 4: Reader
      收藏页面: 3: Reader
```

## Git 提交图

Git 提交图展示功能分支上的工作进展，以及它最终如何合并回主分支。

```mermaid
gitGraph
    accTitle: Mermaid 功能分支历史
    accDescr: 功能分支添加渲染器和测试后，合并到主分支并发布。
    commit id: "base"
    branch mermaid
    checkout mermaid
    commit id: "add-renderer"
    commit id: "add-tests"
    checkout main
    merge mermaid id: "merge-mermaid"
    commit id: "release"
```

## 看板

看板按照工作流状态对任务分组，方便快速查看当前进度。

```mermaid
kanban
  backlog[待办]
    docs[编写作者文档]
    examples[扩展示例数据]
  active[进行中]
    themes[验证主题适配]
  complete[已完成]
    fallback[源码回退]
    rendering[客户端渲染]
```

## 桑基图

桑基图通过连线宽度表示流量或其他数值在不同节点之间的流动情况。

```mermaid
sankey-beta
Landing,Reading,720
Discovery,Reading,430
Reading,Explore,360
Reading,Topics,210
Reading,Outbound,140
```

每个示例都使用标准的 `mermaid` 围栏代码。服务器会保留可读的源标记，浏览器则将其增强为符合当前主题的 SVG。切换主题或通过 Swup 导航至本文时，图表都会重新渲染。