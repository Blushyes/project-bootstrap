# Project Types

Current project recipes shipped inside this skill:

## browser-extension

- Status: implemented
- Stack: `WXT + Solid + Tailwind v4 + TypeScript + @webext-core/messaging`
- Reference: [browser-extension.md](./browser-extension.md)
- Template: `assets/templates/browser-extension/`
- CLI: `scripts/project-bootstrap`
- Focus:
  - official setup steps
  - stack choice
  - project structure
  - coding rules
  - restrained UI baseline
  - reusable boilerplate via the skill template

## Adding More Types

When extending this platform:

1. add a new template under `assets/templates/`
2. extend `scripts/project-bootstrap` to create and inspect the new type
3. add the type here with its stack and internal paths
4. reuse the shared standards unless the type needs explicit overrides
