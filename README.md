# Claude Code desktop – UI interaction design system

A design-system-style catalog of every interface element Claude can show in the Claude desktop app's Code tab: question cards, task list, next-step box, inline widgets, session cards, panes and more. For each element: what it's for, what you can do with it, its technical specs and a demo.

> Unofficial. Not affiliated with or endorsed by Anthropic. "Claude" is a trademark of Anthropic.

## Status

Draft (31 Oct 2026). 19 elements in three groups: in the chat stream, under the latest message, panes and window.

- **Specs:** checked against Claude's own tool definitions in a desktop-app session on 31 Oct 2026. The app changes often, so limits may drift.
- **Demos:** simulations built in HTML and CSS. They show structure and behaviour, not the app's exact pixels. Real screenshots of each element are planned.

## Run it locally

No build step. Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 4173
```

Then go to http://localhost:4173.

## Deploy

Static site: import the repo in Vercel with no framework preset. Every push redeploys.

## Author

Marc Vidal Moreno – UX designer and frontend developer.
