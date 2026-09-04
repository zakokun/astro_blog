# Blog project guidance

## Project boundaries

- This repository is a personal Astro blog. Keep AI guidance outside `src/`, `public/`, and `dist/` so it cannot become site content or a published asset.
- Preserve the author's existing prose, opinions, and unpublished material. Do not invent personal experiences, quotations, company details, data, or sources.
- Treat publishing, deployment, and changes to finished articles as separate actions that require an explicit request.

## Writing work

- Use the `blog-writing` skill for article ideas, interviews, outlines, drafts, rewrites, and prose review.
- When a new article begins, collect concrete material before drafting unless the author explicitly asks for an immediate working draft.
- Keep ordinary coding, styling, build, and deployment tasks free of writing-editor behavior unless the task also concerns article content.

## Repository work

- Preserve unrelated working-tree changes.
- After changing site code or content structure, run the smallest relevant check; use `npm run build` when a full Astro build is warranted.
