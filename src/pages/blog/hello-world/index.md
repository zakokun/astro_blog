---
layout: '../../../layouts/BlogPost.astro'
title: 'Hello, blog'
date: '2026-05-13'
description: 'A first post to show the folder-per-article structure.'
tags: ['meta']
---

This is the first placeholder post.

Each article lives in its own folder:

```text
src/pages/blog/hello-world/
├── index.md
└── image.png
```

Put the article body in `index.md`. Images and other files can sit next to it, then be referenced with relative paths such as `./image.png`.
