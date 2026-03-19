---
name: project-bootstrap
description: "Use the local project-bootstrap skill to create new projects from internal templates and shared standards. Trigger this skill when bootstrapping a new repo, choosing a supported default stack, or extending the local template system. Current implemented type: browser extensions with WXT, Solid, Tailwind CSS v4, TypeScript, pnpm, typed webext messaging, Shadow DOM content UI, and a project-local Chromium profile."
---

# Project Bootstrap

Use the local CLI and templates inside this skill instead of rebuilding starters by hand.

## Workflow

1. Read [./references/project-types.md](./references/project-types.md) to find the supported project type.
2. Read the project-type reference and [./references/standards.md](./references/standards.md).
3. Use the local CLI at `./scripts/project-bootstrap`.
4. Prefer the built-in template for deterministic boilerplate.
5. After creation, apply the references and standards when implementing product-specific logic.

## CLI

```bash
scripts/project-bootstrap list
scripts/project-bootstrap info browser-extension
scripts/project-bootstrap doctor browser-extension
scripts/project-bootstrap create browser-extension my-extension --dest <parent-dir>
```

## Files To Use

- Types catalog: [./references/project-types.md](./references/project-types.md)
- Shared standards: [./references/standards.md](./references/standards.md)
- Browser extension recipe: [./references/browser-extension.md](./references/browser-extension.md)
- Template boundary: [./references/template-boundary.md](./references/template-boundary.md)
- CLI: `scripts/project-bootstrap`
- Templates: `assets/templates/`

## Rule

Use the templates in `assets/templates/` for high-reuse boilerplate. Use the references for stack decisions, implementation constraints, and post-bootstrap guidance. This skill is self-contained and should not depend on any path outside this directory.
