---
layout: '../../../layouts/BlogPost.astro'
title: 'English Demo: A Rich Markdown Field Note'
date: '2026-05-11'
description: 'A compact English sample post that exercises headings, prose, lists, quotes, tables, code, links, and footnotes.'
tags: ['demo', 'english', 'markdown']
---

This demo post is designed to make the blog layout work a little harder. It includes **strong emphasis**, *italic text*, `inline code`, external links, structured lists, a blockquote, a data table, and a short code sample.

The content itself is intentionally lightweight. The goal is to provide a realistic shape for technical notes, project updates, and research logs.

## Context

A useful blog post usually answers a few practical questions:

1. What changed?
2. Why does it matter?
3. What should the reader do next?

When those answers are visible in the first few paragraphs, the rest of the post becomes easier to scan.

### Editorial Checklist

- [x] Lead with the topic.
- [x] Keep paragraphs short.
- [x] Use lists for steps and decisions.
- [ ] Add screenshots when the post depends on visual context.

> A demo article should not be clever. It should be broad enough to expose layout problems before real content does.

## Comparison Table

| Element | Purpose | What to Verify |
| --- | --- | --- |
| Heading | Creates hierarchy | Spacing and anchor behavior |
| List | Groups related points | Indentation and rhythm |
| Code block | Shows implementation detail | Overflow and contrast |
| Quote | Highlights a sentence | Left border and line height |

## Code Sample

Here is a tiny JavaScript helper:

```js
const posts = [
  { title: '中文 Demo', language: 'zh' },
  { title: 'English Demo', language: 'en' },
  { title: '日本語 Demo', language: 'ja' },
];

const visiblePosts = posts.filter((post) => post.language !== 'draft');
console.log(visiblePosts.map((post) => post.title));
```

For a local production check, run `npm run build` and inspect the generated routes.

---

## Closing Notes

This post can remain in the repository as a fixture for future theme work. If the typography changes, this page should make regressions easy to spot. The Markdown format here follows the broad shape described by [CommonMark](https://commonmark.org/).[^commonmark]

[^commonmark]: This footnote is included to test footnote rendering and link placement.
