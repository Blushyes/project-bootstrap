# Standards

Use these standards for every generated project unless the user explicitly overrides them.

## Engineering Rules

- prefer `pnpm`
- prefer TypeScript
- prefer typed boundaries instead of loose runtime guessing
- do not add meaningless `try/catch`
- do not use `as any` and then recover with chains of `typeof`; infer the real type or model it explicitly
- validate external or persisted input at boundaries with schema-based validation when the project needs it
- keep structure simple and production-oriented; avoid demo boilerplate

## UI Language

This design language is restrained rather than decorative.

- use neutral backgrounds such as `#fcfcfc`, `#fafafa`, and white surfaces
- use low-contrast gray borders instead of loud colored chrome
- keep typography tight and calm; favor medium weight over heavy bolding
- use small or medium radii; avoid oversized pill-heavy UI by default
- let spacing and hierarchy do the work; avoid stacking many loud cards
- prefer a native-tool feeling over a marketing-page feeling
- use accent color only when status or emphasis truly needs it
- avoid purple bias

## Frontend Defaults

- preserve `prefers-reduced-motion`
- keep focus states visible
- favor a single visual system across popup, settings, onboarding, and in-page surfaces
- avoid adding unnecessary component abstractions in the initial project
