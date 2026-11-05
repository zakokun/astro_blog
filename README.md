# 雑魚君的博客

使用 [Astro](https://astro.build) 构建的个人博客，界面基于
[astro-theme-ink](https://github.com/willimt/astro-theme-ink) 主题定制。

线上域名：<https://blog.zakokun.com>

## 本地开发

需要 Node.js 22.12 或更高版本，以及 pnpm。

```bash
pnpm install
pnpm dev
```

生产构建和本地预览：

```bash
pnpm build
pnpm preview
```

构建命令会同时生成 Pagefind 中文全文搜索索引。

## 新增文章

每篇文章是 `src/content/blog/` 中的一个 Markdown 或 MDX 文件。文件名就是文章路由：

```text
src/content/blog/my-post-slug.md
```

对应：

```text
https://blog.zakokun.com/blog/my-post-slug/
```

文章 frontmatter：

```markdown
---
title: "文章标题"
description: "显示在文章列表和搜索结果中的一句话简介。"
publishDate: "2026-11-04"
tags: ["随笔"]
---
```

首页按发布时间显示最近的文章。

## 站点设置

- `src/site-config.ts`：站点名称、作者信息、社交链接、导航和评论设置。
- `src/content/page/about.mdx`：关于页正文。
- `public/avatar.jpeg`：作者头像。
- `src/assets/styles/`：Ink 的全局配色、排版和文章样式。

## Cloudflare Pages

- Framework preset：`Astro`
- Build command：`pnpm build`
- Build output directory：`dist`
- Node.js：`22.12` 或更高版本

## 主题许可

当前界面基于 MIT License 的
[willimt/astro-theme-ink](https://github.com/willimt/astro-theme-ink)。
主题自身包含从 astro-theme-pure 移植的 Apache-2.0 代码，具体许可见主题仓库说明。
