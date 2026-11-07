# Claude Code desktop – UI interaction design system

A design-system-style catalog of every interface element Claude can show in the Claude desktop app's Code tab: question cards, task list, next-step box, inline widgets, session cards, panes and more. For each element: what it's for, what you can do with it, its technical specs and a demo.

> Unofficial. Not affiliated with or endorsed by Anthropic. "Claude" is a trademark of Anthropic.

## Why this exists

It started with a small annoyance. Claude answered almost only in text, so every reply had to be typed, even a plain "y" or "n". A yes/no question could have been two buttons, the recommended one more prominent. File names came without a link to open them. Commands had to be copied into a terminal somewhere else.

Trying out what else Claude could do showed a whole set of buttons, cards, panes and links it can use instead of text. A final request for a report on all of them became this catalog.

The idea behind it: **technology out of sight**. An AI tool should spend its power on saving people steps (typing, copying, looking for things) and keep the machinery invisible.

**The principle, reply cost:** when Claude needs something from you, it should use the control that costs you the least effort and attention. From cheapest to most expensive:

1. Nothing: Claude decides (when the choice is low-risk and reversible) and says what it assumed.
2. One click: a button that answers or acts.
3. One click to open: a link to the file, pane, session or page.
4. A Run button on a command.
5. A block to copy and paste somewhere else.
6. A typed reply, only for open questions.

## Status

Draft (31 Oct 2026). 19 elements in three groups: in the chat stream, under the latest message, panes and window.

- **Specs:** checked against Claude's own tool definitions in a desktop-app session on 31 Oct 2026. The app changes often, so limits may drift.
- **Demos:** simulations built in HTML and CSS. They show structure and behaviour, not the app's exact pixels. Real screenshots of each element are planned.

## How it's built

[Astro](https://astro.build) with [Starlight](https://starlight.astro.build): sidebar, search and light/dark mode come with it.

- `src/content/docs/<group>/<element>.mdx` – one file per element. Purpose (`description`), source tool, tag, actions (`can`) and specs live in the frontmatter; the body holds the demo inside `<Demo>`.
- `src/content.config.ts` – the frontmatter schema, so a missing or misspelled field fails the build.
- `src/components/MarkdownContent.astro` – renders purpose, actions and specs from the frontmatter on every element page.
- `src/components/Demo.astro` – the demo stage; `src/components/demos/` holds the interactive demos.
- `src/styles/mocks.css` – page parts and the mock primitives (`.m-card`, `.m-btn`…). The demo palette copies the app, not Starlight.

To add an element, copy an existing `.mdx` file in the right group and set `sidebar.order`.

## Run it locally

Needs Node 22.23 or newer.

```bash
npm install
npm run dev
```

Then go to http://localhost:4321. `npm run build` writes the static site to `dist/`.

## Deploy

Vercel builds it as an Astro project (`vercel.json`). Every push redeploys.

## Author

Marc Vidal Moreno – UX designer and frontend developer.
