# Browser Extension Recipe

Use this recipe when the user wants a new browser extension project.

Bootstrap path:

- Inspect with `scripts/project-bootstrap info browser-extension`
- Validate environment with `scripts/project-bootstrap doctor browser-extension`
- Create from template with `scripts/project-bootstrap create browser-extension <project-name> --dest <parent-dir>`

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

1. Use the local CLI to create the project from the browser-extension template.
2. Keep `WXT + Solid` as the extension baseline unless the user explicitly wants a different stack.
3. Keep `Tailwind CSS v4` wired through the WXT Vite config.
4. Keep `@webext-core/messaging` as the default typed messaging layer across extension contexts.
5. Keep `tsconfig.json` aligned with WXT + Solid:
   - extend `./.wxt/tsconfig.json`
   - set `jsx` to `preserve`
   - set `jsxImportSource` to `solid-js`
6. Keep the main entrypoints explicit:
   - `entrypoints/background.ts`
   - `entrypoints/content.tsx`
   - `entrypoints/popup/`
   - `entrypoints/options/`
   - `entrypoints/install/`
   - `entrypoints/update/`
7. Keep content UI rendered by `Solid` components inside a Shadow DOM host.
8. Reuse one project-local Chromium profile through WXT:
   - `webExt.chromiumProfile`
   - `webExt.keepProfileChanges = true`
   - `predev` should ensure the directory exists before `wxt`
9. Apply the restrained UI conventions from [standards.md](./standards.md).

## Project Shape

Keep the initial project structure simple:

- one shared app stylesheet
- one shared typed messaging module for extension-internal communication
- one popup surface
- one options/settings surface
- install/update pages only if the product needs onboarding or release notes
- content script only when the extension interacts with page DOM
- content UI mounted through Shadow DOM and rendered by SolidJS components
- one project-local Chromium profile reused by WXT during development

## Content UI Guidance

When the extension needs visible in-page UI:

- use a content script
- mount UI inside a Shadow DOM host
- render `Solid` components into that host
- keep content CSS isolated from the page by scoping it to the Shadow DOM
- avoid directly mixing extension UI markup into the page's normal DOM tree unless there is a strong reason

## Messaging Guidance

Prefer `@webext-core/messaging` over hand-written `browser.runtime.sendMessage` wrappers when multiple extension contexts need to communicate.

- put the protocol in one place, for example `src/shared/messaging.ts`
- model the protocol with a `ProtocolMap`
- keep request and response types explicit
- let background own side effects and orchestration
- let popup/content/options send typed requests instead of importing background logic directly

For page-context communication from a content script to an injected script or webpage, `@webext-core/messaging/page` is also available. The official docs recommend:

- `defineCustomEventMessaging` when iframe communication is not needed
- `defineWindowMessaging` when iframe communication is needed

## Dev Profile Guidance

Prefer a stable project-local Chrome profile for WXT development instead of letting each run create a fresh anonymous profile.

- keep the profile under the repo, for example `.wxt/chromium-profile`
- ensure the directory exists before running `wxt`
- keep profile changes so extension login state and test setup survive restarts
- do not assume the directory already exists; create it explicitly

## Template Boundary

For this project type:

- keep deterministic boilerplate in the template
- keep stack decisions and implementation rules in these references
- use [template-boundary.md](./template-boundary.md) when deciding whether a concern belongs in the template

## Conventions

- prefer `WXT` defaults instead of hand-rolled browser extension wiring
- prefer `Solid` signals and simple components over unnecessary abstraction
- prefer `@webext-core/messaging` for cross-entrypoint messaging inside the extension
- prefer neutral, low-chrome UI instead of generic dashboard styling
- do not add speculative business logic during bootstrap
- do not guess types; define them
