# __DISPLAY_NAME__

__PROJECT_DESCRIPTION__

## Stack

- WXT
- Solid
- Tailwind CSS v4
- TypeScript
- pnpm
- @webext-core/messaging

## Development

```bash
pnpm install
pnpm dev
```

## Notes

- Reuses a project-local Chromium profile at `.wxt/chromium-profile`
- Renders content UI through Shadow DOM + Solid components
- Uses `@webext-core/messaging` for cross-entrypoint communication
