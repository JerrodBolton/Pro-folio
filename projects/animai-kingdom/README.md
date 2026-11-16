# Animai Kingdom

An AI animal companion designed for conversation, productivity, motivation and brainstorming.

**Objectives:** AI 1, AI 2, ACS 1 (the one project allowed three placements)  
**Status:** Prototype — in development  
**Tools:** Python, Anthropic API, speech helpers — confirm full stack with the repository

## Objective connections (all `suggested` until reviewed)

- **AI 1:** Integrates conversational AI, character personalities, and speech features into a companion application.
- **AI 2:** Processes natural-language conversations through text and speech. Evidence should show language-processing improvements and before-and-after evaluation.
- **ACS 1:** Demonstrates the software-development process through requirements, design, implementation, testing, and documented individual contributions.

## Review links

- [Main project website](http://animaikingdom.com) — separate SIP website, configured in site-config.js
- [Public prototype repository](https://github.com/JerrodBolton/Animai)
- [Reviewed source: main_app.py](https://github.com/JerrodBolton/Animai/blob/1cfc5b48cf777261e24281b416a186874220750c/main_app.py)

## Present in the reviewed source

- Claude replies through the `anthropic` client, with a system prompt built from a character's personality, backstory and speaking style (characters.py).
- Optional voice mode using `listen`/`speak` helpers from voice.py.

## Next work

- [ ] Document your personal contribution.
- [ ] Run the prototype and record example conversation and voice sessions.
- [ ] Explain how the AI model, character personalities and speech features are integrated.
- [ ] AI 2: Improve one language-processing behavior and compare before-and-after results on the same test conversations.
- [ ] ACS 1: Record requirements, design, implementation and testing steps, plus your individual contributions.

## Evidence boundary

The mapping stays `suggested` until the evidence and contribution are reviewed. Raspberry Pi deployment, hardware functionality and testing are not claimed.

## Project folder

- `index.html` — forwards old links to the [Animai Kingdom website](http://animaikingdom.com)
- `images/AK_logo.png` — full-size logo
- `images/animai-kingdom-logo-web.png` — smaller logo used on the website
- `images/` — screenshots, logos, diagrams and other pictures
- `code/` — working code. The current code is on GitHub at https://github.com/JerrodBolton/Animai; clone it or copy files here to work on it
- `docs/` — notes, test results, write-ups and other evidence

---

- [All projects and the Boards plan](../../README.md#5-boards-project-plan--ai-and-acs)
- [Project page on the website](http://animaikingdom.com)
