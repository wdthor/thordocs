# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Start dev server
pnpm dev

# Build static site
pnpm docs:build

# Preview built site
pnpm docs:preview
```

Package manager: **pnpm** (lockfile present, use pnpm not npm/yarn).

## Architecture

This is a **VitePress** documentation site — a personal learning notes repository ("ThorDocs"). There are no tests, no linting config, and no app logic; it's purely a static docs site.

**Key files:**
- `.vitepress/config.ts` — all site configuration: nav links, per-section sidebars, and site metadata
- `index.md` — home page with hero section and feature cards (uses VitePress home layout frontmatter)

**Content structure:** Each topic is a top-level directory (e.g., `vue/`, `godot/`, `react/`, `fastapi/`). Every directory typically has an `index.md` as the section landing page, plus numbered files for sequential notes (e.g., `1-setup.md`, `2-validation.md`).

**Sidebar registration:** Adding a new section requires registering it in the `sidebar` object in `.vitepress/config.ts` under its URL prefix (e.g., `"/new-topic/": [...]`). Dead links are suppressed globally via `ignoreDeadLinks: true`.

**No custom theme** — uses VitePress default theme with no overrides.
