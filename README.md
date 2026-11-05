# 雑魚君的博客

使用 [Astro](https://astro.build) 构建的个人博客，界面基于
[Mare Blog](https://github.com/Niceeepoiu/mare-blog) 主题定制。

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
pubDate: "2026-11-04"
featured: false
tags: ["随笔"]
---
```

`featured: true` 的文章会显示在首页。

## 站点设置

- `site.config.ts`：站点名称、作者信息、社交链接、域名、导航和评论设置。
- `src/content/page/about.mdx`：关于页正文。
- `public/avatar.jpeg`：作者头像。
- `src/styles/global.css`：全局配色、排版和文章样式。

## Cloudflare Pages

- Framework preset：`Astro`
- Build command：`pnpm build`
- Build output directory：`dist`
- Node.js：`22.12` 或更高版本

## 主题许可

当前界面基于 [Niceeepoiu/mare-blog](https://github.com/Niceeepoiu/mare-blog)，
早期版本基于 [whydevils/astro-scholar](https://github.com/whydevils/astro-scholar)。
两者均使用 MIT License；署名保留在 `LICENSE` 中。
