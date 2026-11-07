# Claude UI field guide – project context

## Origin (Marc, 2026-11-07)

Working with Claude, Marc saw it answer almost only in text, leaving him to type a reply even when it was just "y" or
"n". Three cases he noticed:

- a yes/no choice that could be two buttons, the recommended one more prominent;
- file names mentioned without a link to open them;
- commands he could only copy and paste into an external terminal.

Experimenting with this showed him the UI elements and interactive flows Claude has for taking action or collecting
his input. He then asked Claude for a report on every UI element it had at hand and could use: this repo grew from
that report.

**Motto:** technology out of sight – ease of use, invisible intelligence, collaboration, minimal usage, practicality.
Marc's wider question: how AI tools, with their strengths, can improve people's experience of technology.

## Core principle: reply cost

Every time Claude needs something from the person, it picks the control that costs them the least effort and
attention. Text the person has to type, copy or hunt down is the last resort, not the default.

Input-cost ladder, cheapest first:

1. **Nothing** – Claude decides (low-risk, reversible) and states the assumption.
2. **One click** – a button that answers or acts (next-step box, question card, task card, plan approval).
3. **One click to open** – a link to the file, line, pane, session or page.
4. **Run button** – a single-line command in a `bash` fence, or run it in a Terminal tab and link the tab.
5. **Copy block** – text the person must paste elsewhere (a message to send, a multi-line command).
6. **Typed reply** – only for open-ended input no control can offer.

## Trigger → element

| When Claude is about to… | Use | Element page |
| --- | --- | --- |
| ask yes/no or pick 2–4 options | buttons, recommended first and most prominent | `under-message/nextstep`, `chat/question` |
| mention a file or line | markdown link, path relative to the repo | `chat/markdown` |
| show a diff, file, terminal, browser | open the pane | `panes/panes` |
| give a command | Run button, or run it in a Terminal tab | `panes/terminal` |
| propose separate work | a card with the brief inside, never a prompt to paste | `chat/task-card`, `chat/offer` |
| need approval for a plan | plan approval | `under-message/plan` |
| show progress on multi-step work | task list | `under-message/tasklist` |
| explain something visual or comparative | inline widget | `chat/widget` |
| need a folder | folder picker | `chat/folder` |

Self-check before sending a reply: *Does it end in a question the person must type an answer to? Does it name a file,
command or place they must find on their own?* If yes, move it up the ladder.

## How to apply in this repo

- Each element page should say which typing, copying or searching step the element removes, in human terms
  (attention, cognitive load, perceived effort), not only its technical spec.
- When comparing elements, rank them by reply cost.
- Calm UI: one primary action per moment; secondary options stay quieter.
