# Ponytail — School Admission CRM

This project uses the **Ponytail** skill installed in Antigravity IDE at:
`~/.gemini/config/plugins/ponytail/skills/ponytail/SKILL.md`

Read that file for the full skill instructions. This adapter records only
project-specific constraints.

## Active mode: `full`

## Project constraints

- **No direct MongoDB access from the renderer or desktop packages.**
  All data goes through `@crm/api` (NestJS REST API).
- **Calling is manual log only.** No VoIP, no Twilio.
- **No speculative abstractions.** Build for the current phase. Later phases scaffold for themselves.
- **Renderer must be API-agnostic.** Use `VITE_API_URL` env variable; never hardcode localhost.
- **Soft-delete only.** No hard deletes on lead, employee, or school records (audit requirement).

## Phase guard

Each response must stay within the current approved phase.
Do not implement features from future phases.

## ponytail: markers

When a deliberate shortcut is taken (known ceiling), mark it:
```ts
// ponytail: <what was skipped>, upgrade when <condition>
```
