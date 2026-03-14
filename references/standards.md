# Standards

Use these standards for every generated project unless the user explicitly overrides them.

## Engineering Rules

- Prefer `pnpm`.
- Prefer TypeScript.
- Prefer typed boundaries instead of loose runtime guessing.
- Do not add meaningless `try/catch`.
- Do not use `as any` and then recover with chains of `typeof`; infer the real type or model it explicitly.
- Validate external or persisted input at boundaries with schema-based validation when the project needs it.
- Keep structure simple and production-oriented; avoid demo boilerplate.

## UI Language

This design language is restrained rather than decorative.

- Use neutral backgrounds such as `#fcfcfc`, `#fafafa`, and white surfaces.
- Use low-contrast gray borders instead of loud colored chrome.
- Keep typography tight and calm; favor medium weight over heavy bolding.
- Use small or medium radii; avoid oversized pill-heavy UI by default.
- Let spacing and hierarchy do the work; avoid stacking many loud cards.
- Prefer a native-tool feeling over a marketing-page feeling.
- Use accent color only when status or emphasis truly needs it.
- Avoid purple bias.

## Frontend Defaults

- Preserve `prefers-reduced-motion`.
- Keep focus states visible.
- Favor a single visual system across popup, settings, onboarding, and in-page surfaces.
- Avoid adding unnecessary component abstractions in the initial project.
