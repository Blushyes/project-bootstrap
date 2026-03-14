# Browser Extension Recipe

Use this recipe when the user wants a new browser extension project.

## Recommended Stack

- `WXT`
- `Solid`
- `Tailwind CSS v4`
- `TypeScript`
- `pnpm`
- `@webext-core/messaging` for typed extension-internal messaging

## Official Docs

- WXT introduction: https://wxt.dev/guide/introduction.html
- WXT installation: https://wxt.dev/guide/installation.html
- WXT entrypoints: https://wxt.dev/guide/essentials/entrypoints
- WXT TypeScript config: https://wxt.dev/guide/essentials/config/typescript.html
- Solid docs: https://docs.solidjs.com/
- Tailwind with Vite: https://tailwindcss.com/docs/installation/using-vite
- `@webext-core/messaging` docs: https://webext-core.aklinker1.io/messaging/installation
- `webext-core` repo: https://github.com/aklinker1/webext-core

## Creation Steps

1. Create the project with WXT using `pnpm dlx wxt@latest init`.
2. Choose the Solid starter when WXT asks for the framework.
3. Install frontend styling dependencies with `pnpm add -D tailwindcss @tailwindcss/vite`.
4. Install typed messaging with `pnpm add @webext-core/messaging`.
5. Configure Tailwind in `wxt.config.ts` with the Vite plugin.
6. Create a shared CSS entry such as `assets/app.css` and add `@import "tailwindcss";`.
7. Keep `tsconfig.json` aligned with WXT + Solid:
   - extend `./.wxt/tsconfig.json`
   - set `jsx` to `preserve`
   - set `jsxImportSource` to `solid-js`
8. Organize extension entrypoints explicitly:
   - `entrypoints/background.ts`
   - `entrypoints/content.tsx`
   - `entrypoints/popup/`
   - `entrypoints/options/`
   - `entrypoints/install/`
   - `entrypoints/update/`
9. Add a shared messaging module such as `src/shared/messaging.ts`:
   - import `defineExtensionMessaging` from `@webext-core/messaging`
   - define one `ProtocolMap` that describes every cross-context message
   - export the messaging helpers from that single module
10. Use that shared messaging module across extension contexts:
   - background registers handlers with `onMessage`
   - popup, content, or other entrypoints call `sendMessage`
   - if the background needs to message a content script, pass `tabId`
11. Add package scripts at minimum:
   - `dev`
   - `build`
   - `compile`
12. Apply the restrained UI conventions from [standards.md](./standards.md).

## Project Shape

Keep the initial project structure simple:

- one shared app stylesheet
- one shared typed messaging module for extension-internal communication
- one popup surface
- one options/settings surface
- install/update pages only if the product needs onboarding or release notes
- content script only when the extension interacts with page DOM

## Messaging Guidance

Prefer `@webext-core/messaging` over hand-written `browser.runtime.sendMessage` wrappers when multiple extension contexts need to communicate.

- Put the protocol in one place, for example `src/shared/messaging.ts`
- Model the protocol with a `ProtocolMap`
- Keep request and response types explicit
- Let background own side effects and orchestration
- Let popup/content/options send typed requests instead of importing background logic directly

For page-context communication from a content script to an injected script or webpage, `@webext-core/messaging/page` is also available. The official docs recommend:

- `defineCustomEventMessaging` when iframe communication is not needed
- `defineWindowMessaging` when iframe communication is needed

## Conventions

- Prefer `WXT` defaults instead of hand-rolled browser extension wiring.
- Prefer `Solid` signals and simple components over unnecessary abstraction.
- Prefer `@webext-core/messaging` for cross-entrypoint messaging inside the extension.
- Prefer neutral, low-chrome UI instead of generic dashboard styling.
- Do not add speculative business logic during bootstrap.
- Do not guess types; define them.
