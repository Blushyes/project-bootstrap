---
name: project-bootstrap
description: "Guide project creation with reusable stack choices, setup steps, coding rules, and restrained UI conventions. Use when deciding how to create a new project, what stack to use, which official docs to follow, or how to bootstrap a repo according to these personal defaults. Current documented recipe: browser extensions with WXT, Solid, Tailwind CSS v4, TypeScript, and pnpm."
---

# Project Bootstrap

Use this skill as a creation recipe, not as a template pack. Explain how to start the project with the right stack, point to the official docs, and keep the result aligned with the standards reference.

## Workflow

1. Identify the project type the user wants.
2. Read [references/project-types.md](./references/project-types.md) to see whether a recipe already exists.
3. Read the project-type reference and [references/standards.md](./references/standards.md).
4. Tell the user the recommended stack, the official docs to follow, and the concrete bootstrap steps.
5. If the type is not documented yet, add a new reference recipe instead of creating templates or scaffold assets.

## Current Recipe

- `browser-extension`
  - Stack: `WXT + Solid + Tailwind CSS v4 + TypeScript + pnpm`
  - Reference: [references/browser-extension.md](./references/browser-extension.md)

## Files To Use

- Standards: [references/standards.md](./references/standards.md)
- Project catalog: [references/project-types.md](./references/project-types.md)
- Browser extension recipe: [references/browser-extension.md](./references/browser-extension.md)

## Rule

Do not maintain starter templates, generated boilerplate, or local scaffold scripts in this skill unless the user explicitly asks for them later. Keep the skill focused on stack decisions, setup steps, and official references.
