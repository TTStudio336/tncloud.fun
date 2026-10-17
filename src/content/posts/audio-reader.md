---
title: "Audio Reader：日系动画神秘语音集"
published: 2026-08-29
description: 使用 Audio Reader 按需播放一组神秘的日语动画语音片段。
tags: [示例, Audio Reader]
series: media-embeds
seriesOrder: 2
category: 示例
draft: false
---

这些简短的日语语音片段，仿佛从动画场景的一角拾取而来：俏皮的呼唤、明快的问候、轻轻的笑声，以及几句出处不明的话语。它们是用于营造氛围的声音片段，并非台词转录，不妨让声音本身传达情绪。

在你选择收听之前，Audio Reader 不会加载这些片段。点击每个语音按钮后，才会加载并播放对应音频。

```markdown
:audio-reader[音频标题]{src="/assets/audio/filename.wav"}
```

## 语音片段

- **Baka**: :audio-reader[バカ]{src="/assets/audio/Baka.wav"}
- **Ciallo**: :audio-reader[Ciallo！！]{src="/assets/audio/Ciallo.wav"}
- **Ehe**: :audio-reader[开玩笑的语气]{src="/assets/audio/Ehe.wav"}
- **Imoi**: :audio-reader[イモい]{src="/assets/audio/Imoi.wav"}
- **Zako**: :audio-reader[雑魚じゃん、雑魚雑魚]{src="/assets/audio/Zako.wav"}

`src` 必须使用站点根路径或 HTTPS URL，指令标签也不能为空。无效或不完整的指令会保留为普通 Markdown，且不会加载 Audio Reader 资源。
