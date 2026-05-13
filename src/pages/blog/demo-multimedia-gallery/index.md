---
layout: '../../../layouts/BlogPost.astro'
title: '多媒体 Demo：图片墙、视频、音频与嵌入内容'
date: '2026-05-09'
description: '一篇用于测试多媒体排版的中文示例文章，重点包含多图 gallery、单图说明、音频、视频和嵌入内容。'
tags: ['demo', '多媒体', 'gallery', 'markdown']
---

这是一篇多媒体 demo 文章，主要用于检查博客在处理图片、图集、视频、音频和嵌入内容时的排版效果。正文会混合使用 Markdown 图片、HTML `figure`、响应式 gallery、媒体播放器和说明文字。

## 封面式单图

![晨光里的山脊](/images/demo-multimedia-gallery/gallery-01.svg)
*单张图片可以用 Markdown 原生语法插入，并在下一行添加说明文字。*

## 图片 Gallery

下面是一个由本地图片组成的 gallery。每个图片都放在当前文章目录中，正文使用相对路径引用。

<div class="media-gallery" aria-label="多图片示例 gallery">
  <figure>
    <img src="/images/demo-multimedia-gallery/gallery-01.svg" alt="晨光里的山脊" loading="lazy" />
    <figcaption>晨光里的山脊</figcaption>
  </figure>
  <figure>
    <img src="/images/demo-multimedia-gallery/gallery-02.svg" alt="城市夜色" loading="lazy" />
    <figcaption>城市夜色</figcaption>
  </figure>
  <figure>
    <img src="/images/demo-multimedia-gallery/gallery-03.svg" alt="桌面工作流" loading="lazy" />
    <figcaption>桌面工作流</figcaption>
  </figure>
  <figure>
    <img src="/images/demo-multimedia-gallery/gallery-04.svg" alt="海岸线" loading="lazy" />
    <figcaption>海岸线</figcaption>
  </figure>
  <figure>
    <img src="/images/demo-multimedia-gallery/gallery-05.svg" alt="数据看板" loading="lazy" />
    <figcaption>数据看板</figcaption>
  </figure>
  <figure>
    <img src="/images/demo-multimedia-gallery/gallery-06.svg" alt="抽象色块" loading="lazy" />
    <figcaption>抽象色块</figcaption>
  </figure>
</div>

## 图文混排

<figure class="media-feature">
  <img src="/images/demo-multimedia-gallery/gallery-05.svg" alt="数据看板示例" loading="lazy" />
  <figcaption>这类大图适合放产品截图、实验结果、旅途照片或设计稿预览。</figcaption>
</figure>

图文混排时，正文应该仍然保持稳定的行宽。图片可以打破节奏，但不应该让阅读路径变得混乱。

> 对多媒体文章来说，最需要检查的不是图片能不能显示，而是图片、说明文字、正文和播放器之间的间距是否自然。

## 视频示例

这里使用一个远程公开示例视频，用于测试浏览器原生播放器在正文中的显示效果。

<figure class="media-embed">
  <video controls preload="metadata" poster="/images/demo-multimedia-gallery/gallery-04.svg">
    <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
    当前浏览器不支持 HTML video。
  </video>
  <figcaption>视频示例：带 poster 的原生 HTML video。</figcaption>
</figure>

## 音频示例

<figure class="media-embed">
  <audio controls preload="metadata">
    <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3" type="audio/mpeg" />
    当前浏览器不支持 HTML audio。
  </audio>
  <figcaption>音频示例：原生 HTML audio 控件。</figcaption>
</figure>

## 嵌入内容

下面的 `iframe` 使用 `srcdoc` 提供本地内联内容，适合测试文章中的外部图表、地图、交互 demo 或可视化嵌入区域。

<div class="media-frame">
  <iframe
    title="内联嵌入示例"
    loading="lazy"
    srcdoc="<html><body style='margin:0;font-family:Inter,Arial,sans-serif;background:#0f172a;color:#e5e7eb;display:grid;place-items:center;height:100vh;'><div style='text-align:center;'><div style='font-size:42px;font-weight:700;'>Embedded Panel</div><p style='margin:12px 0 0;color:#93c5fd;'>iframe srcdoc demo</p></div></body></html>">
  </iframe>
</div>

## 媒体清单

| 类型 | 示例 | 备注 |
| --- | --- | --- |
| Markdown 图片 | `![alt](./image.svg)` | 最简单，适合单图 |
| HTML Gallery | `<div class="media-gallery">` | 适合多图片排列 |
| Video | `<video controls>` | 可设置 poster 和 source |
| Audio | `<audio controls>` | 适合访谈、播客、声音样本 |
| Iframe | `<iframe>` | 适合嵌入可视化或第三方内容 |

## 小结

这篇文章可以作为多媒体排版的测试页面。以后如果给博客增加 lightbox、瀑布流、图片懒加载策略、响应式图片或视频封面样式，可以优先用这篇文章做回归检查。
