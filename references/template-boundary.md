# Template Boundary

Use this rule when deciding whether something belongs in the template under `assets/templates/` or only in the references.

## Put It In The Template

- project-local Chromium profile reuse
- `predev` profile directory checks
- WXT + Solid + Tailwind wiring
- `tsconfig.json` and package scripts
- shared `@webext-core/messaging` protocol skeleton
- baseline popup/options/content/background structure
- Shadow DOM content mount skeleton
- restrained neutral base styling

## Keep It In References

- business logic
- domain-specific types
- product naming and branding
- feature-specific workflows
- install/update page business policy
- background orchestration details that depend on the product
- decisions that vary project by project
