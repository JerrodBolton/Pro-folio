# Jerrod Bolton · Boards Portfolio

Everything about this portfolio in one place: what the website is, how it is built, what has been done so far, and the project plan for the University of Advancing Technology (UAT) Boards review in Artificial Intelligence (AI) and Advancing Computer Science (ACS).

**Last updated:** November 12, 2026

> This file combines the three earlier READMEs: the website handoff (`README.md`), the SIP link instructions (`README-SIP-Links.md`) and the Boards project plan (`README-Boards-Project-Plan.md`).

## Contents

1. [The website](#1-the-website)
2. [What has been built so far](#2-what-has-been-built-so-far)
3. [About Me and Contact pages](#3-about-me-and-contact-pages)
4. [Animai Kingdom (SIP) links](#4-animai-kingdom-sip-links)
5. [Boards project plan — AI and ACS](#5-boards-project-plan--ai-and-acs)

---

## 1. The website

A static personal portfolio for the Boards review. It uses plain HTML, CSS and JavaScript, with no build step.

- **Repository:** [github.com/JerrodBolton/Pro-folio](https://github.com/JerrodBolton/Pro-folio)
- **Previously supplied deployment URL:** [endearing-stardust-9137dd.netlify.app](https://endearing-stardust-9137dd.netlify.app/) (not re-tested against the current code)

### Pages

| Page | File | What it shows |
|---|---|---|
| Home | `index.html` | Space artwork hero, the JB logo, and the "Where it all began" column of the first code Jerrod wrote |
| Portfolio | `portfolio.html` | Animai Kingdom, VORTEXA, Greenspires and Pixel Bang with development status |
| Degree Objectives | `objectives.html` | Flip cards for the 6 AI and 6 ACS objectives, each listing its matched projects |
| About Me | `about.html` | Resume-based bio, education and experience, and a resume button |
| Contact | `contact.html` | LinkedIn and GitHub contact buttons |
| VORTEXA | `projects/vortexa/index.html` | Detail page for the local-LLM assistant |
| Animai Kingdom / SIP | `projects/animai-kingdom/index.html`, `sip.html` | Point visitors to the separate Animai Kingdom website |

### Where things live

| File | Purpose |
|---|---|
| `assets/js/objectives-data.js` | Official objective wording (`OBJECTIVES`), every project record (`PROJECTS`) and the objective-to-project matches (`MAPPINGS`) |
| `assets/js/objectives.js` | Builds the flip cards, the project detail view and the Flip all button |
| `assets/js/site-config.js` | `ANIMAI_KINGDOM_URL`, the one shared Animai Kingdom website address |
| `assets/js/main.js` | Shared page behavior: the menu, and rewriting every `data-animai-link` to the Animai Kingdom URL |
| `assets/css/styles.css` | Site-wide styles, including the phone layouts |
| `assets/css/objectives.css` | Objective cards, detail view, sticky flip-back button and Flip all button |
| `assets/documents/Jerrod-Bolton-Public-Resume.pdf` | Public resume with phone number and email removed |
| `assets/images/` | The website's own artwork: backgrounds, the JB logos and the favicon |
| `projects/<name>/` | Everything for one project: its README, `images/`, `code/` and `docs/` (plus a page, for VORTEXA and Animai Kingdom) |

### Project folders

Each project has its own folder in `projects/`. Its README describes what the project is, its status, tools, objectives, links and next steps. Inside are three folders to work in: `images/` for screenshots, logos and diagrams; `code/` for the project's code; and `docs/` for notes, test results and other evidence.

| Project | Objectives | Status |
|---|---|---|
| [Animai Kingdom](projects/animai-kingdom/README.md) | AI 1, AI 2, ACS 1 | Prototype — in development |
| [Pixel Bang](projects/pixel-bang/README.md) | AI 1, AI 4 | Public implementation source; prompt/output documentation pending |
| [Greenspires](projects/greenspires/README.md) | AI 1, ACS 4 | Public prototype source; AI feature planned |
| [VORTEXA](projects/vortexa/README.md) | AI 2, AI 6 | Public implementation source; runtime/evaluation pending |
| [Python II Speech-to-Text](projects/python-speech-to-text/README.md) | AI 2 | Public speech prototype source; runtime/evaluation pending |
| [Jonnybot](projects/jonnybot/README.md) | AI 3, AI 6 | Public Q-learning source; evaluation and GA extension pending |
| [NEURIX](projects/neurix/README.md) | AI 3, AI 5 | Planned; not built |
| [WILDSIGHT](projects/wildsight/README.md) | AI 4, AI 5 | Planned; not built |
| [Safe Bank](projects/safe-bank/README.md) | ACS 1 | Public prototype source and planning evidence; fixes pending |
| [Boards Personal Website](projects/boards-personal-website/README.md) | ACS 1, ACS 4 | Public website source; deployment/device checks pending |
| [Java Inheritance Assignment](projects/java-inheritance/README.md) | ACS 2, ACS 5 | Reported coursework; exact source not located |
| [IoT Hydration Tilt Alarm](projects/iot-hydration-alarm/README.md) | ACS 2 | Reported project; exact hydration implementation not located |
| [Cookie Salmon](projects/cookie-salmon/README.md) | ACS 3 | Public data-processing source; demo/tests pending |
| [Bus Mall](projects/bus-mall/README.md) | ACS 3, ACS 6 | Public implementation source; image assets missing |
| [Java Generics and Binary Search Tree](projects/java-generics-bst/README.md) | ACS 5, ACS 6 | Reported coursework; exact source not located |

### Run it locally

Serve the folder as a static site and open the home page:

```sh
python3 -m http.server 8000
# then visit http://localhost:8000/index.html
```

### Updating objective matches

Edit `assets/js/objectives-data.js`:

- Keep the official text in `OBJECTIVES` unchanged.
- Add or edit a project in `PROJECTS`. Leave `contribution`, `results` or `reflection` empty (`""`) until there is real evidence; the page then shows "Evidence to be added". An empty `evidence` list shows "Source evidence to be added".
- Matches in `MAPPINGS` use keys like `"ai-1"` or `"acs-6"`. Keep `status: "suggested"` until the evidence and contribution are reviewed; change it to `"verified"` only after that.

---

## 2. What has been built so far

### Timeline

| Date | Work |
|---|---|
| Feb–Jul 2022 | First version of the site: early pages, About page, images and a skills outline |
| Nov 4, 2026 | Rebuilt the portfolio for the UAT Boards review |
| Nov 9, 2026 | Added resume-based About Me and Contact pages |
| Nov 9, 2026 | Added space/astronaut artwork, the JB logo and an updated footer; trimmed objective details and pinned the detail view's back button |
| Nov 9, 2026 | Phone polish: homepage artwork, hero, menu (with decorative code behind it) and page titles |
| Nov 11, 2026 | Linked every SIP / Animai Kingdom reference to the official website |
| Nov 11, 2026 | Added Animai Kingdom and VORTEXA project logos |
| Nov 11, 2026 | Resume now opens in a new tab instead of downloading |
| Nov 12, 2026 | Mapped projects to all 12 objectives from the Boards plan, with GitHub evidence links and status for each project |
| Nov 12, 2026 | Filled in the VORTEXA page from the GitHub audit |
| Nov 12, 2026 | Added WILDSIGHT and Pixel Bang to the Portfolio page with development status |
| Nov 12, 2026 | Added Animai Kingdom to AI 1, AI 2 and ACS 1 with its source links |
| Nov 12, 2026 | Kept the project showcase on the Portfolio page and removed the homepage Featured Projects section |
| Nov 12, 2026 | Objectives page: Flip all button in the bottom-right corner, and each card's flip-back button stays on screen while scrolling |
| Nov 16, 2026 | Replaced WILDSIGHT with Greenspires on the Portfolio page |
| Nov 16, 2026 | Added the Pixel Bang source repository (pixel-bag) to the Portfolio and Objectives pages |
| Nov 12, 2026 | Phones: the "Where it all began" caption and the first code now appear after the hero |

### Website features

- **Objective flip cards.** Each card shows the official objective. Flip it to see the matched projects, then open a project for its purpose, tools, evidence links and status. Animai Kingdom entries go straight to its own website.
- **Flip all.** A button fixed at the bottom-right corner flips every card to its projects and back. On phones it shortens to "Flip all" / "Unflip all" so it fits beside a card's own button.
- **Sticky flip-back.** On a tall flipped card, "Flip back to objective" rides along the bottom of the screen until the end of the card.
- **Honest status labels.** Every match says "Suggested match · not verified" until reviewed. Missing evidence says so instead of using placeholder links.
- **"Where it all began."** The homepage shows the first code Jerrod ever wrote, with a caption. On desktop it runs down the left side; on phones the caption and code come after the hero.
- **Accessibility.** Keyboard-reachable controls, screen-reader announcements when cards flip, and reduced-motion support.

---

## 3. About Me and Contact pages

**Status:** Built. The About page uses the resume-based bio, and the resume button opens the public PDF in a new tab. The portrait is still pending.

### Who does what

- **Jerrod Bolton** owns the portfolio and decides when changes go live.
- **ChatGPT** organizes the requirements, prepares the copy and assets, and reviews the result.
- **Claude** implements and tests the website changes and prepares them for Jerrod's review.

### About Me · `about.html`

The opening bio comes from the resume summary, followed by background, education and experience, in first person.

**Opening bio**

> I'm an Artificial Intelligence and Advancing Computer Science student at the University of Advancing Technology. My experience includes recruitment outreach, teaching software engineering, supporting IT procurement, and leading AI projects.

**Background**

> I enjoy making technical concepts easier to understand, whether I'm teaching beginners or working with a project team. I'm interested in helping people see how AI and automation can solve practical problems.

**Education**

> University of Advancing Technology, Tempe, Arizona · Expected graduation May 2027

**Skills and experience**

> My technical work includes Python, JavaScript, Java, React, and Firebase. I've taught software engineering at Persevere, supported IT procurement with Arizona ASET, and led Animai Kingdom, a team project to develop an AI desk companion.

**Portrait:** Add it to the Background section when the photo is ready, with the alt text `Jerrod Bolton`. The spot is marked by a comment in `about.html`.

### Resume

- The public copy is at `assets/documents/Jerrod-Bolton-Public-Resume.pdf`. The **View Resume (PDF)** button opens it in a new tab.
- **Connect on LinkedIn** sits beside it and goes to [LinkedIn](https://www.linkedin.com/in/jerrodbolton/).
- Publish only the public copy. Its phone number and email are removed from the visible page, the searchable text and the links. Keep those details out of the website copy and source files.

### Contact · `contact.html`

**Heading:** Contact Jerrod Bolton

> I'm an Artificial Intelligence and Advancing Computer Science student at the University of Advancing Technology in Tempe, Arizona. My experience includes leading AI projects, teaching software engineering, and supporting IT procurement. Reach out to talk about AI, software projects, or opportunities to work together.

- **Connect on LinkedIn** is the primary button. [LinkedIn](https://www.linkedin.com/in/jerrodbolton/)
- **View my GitHub** is the secondary button. [GitHub](https://github.com/jerrodbolton)

### Review checklist

- [ ] The About Me page starts with the resume-based bio.
- [ ] The resume button opens the public PDF from the live site.
- [ ] The opened PDF has no phone number or email.
- [ ] The LinkedIn and GitHub buttons work, and the layout looks right on desktop and mobile.
- [ ] The portrait is added once supplied.

---

## 4. Animai Kingdom (SIP) links

**Status:** Built. Every reference links to `http://animaikingdom.com`, set once in `assets/js/site-config.js`.

Animai Kingdom is Jerrod's Student Innovation Project (SIP). It has its own website and paid domain, which is the destination for the project, its development and its progress. The portfolio keeps brief summaries and objective explanations, and sends visitors to that site for everything else. It does not rebuild a second SIP website inside the portfolio.

### Rules

- Every visible reference to the SIP or Animai Kingdom is a link to the official site. That covers the SIP menu item on desktop and mobile; names such as Animai Kingdom, My SIP and Student Innovation Project; project titles, cards, logos, images and buttons; and Animai Kingdom entries on the objective cards. "Animai Kingdom" is the displayed name.
- Links open the official website in the current tab. Animai Kingdom cards go straight there instead of opening an internal detail page or flip interaction.
- Link only the relevant words inside paragraphs, not surrounding text.
- Use real, keyboard-accessible links with visible focus and meaningful names. Avoid links or buttons nested inside a linked card.
- The address lives in one shared setting, `ANIMAI_KINGDOM_URL`. To change the domain, update `site-config.js` and the plain `href` fallbacks in the HTML (search the project for `animaikingdom.com`).

### Completion checks

- [ ] Search all pages for SIP, Student Innovation Project, Animai Kingdom and Anime Kingdom (any capitalization) and confirm each uses the official URL.
- [ ] No placeholder destinations, dead internal SIP links or conflicting card click handlers.
- [ ] Desktop and mobile menus, project cards, objective entries and inline links all work.
- [ ] Keyboard navigation works, and each link opens the official website.

---

## 5. Boards project plan — AI and ACS

**Student:** Jerrod Bolton  
**Updated:** November 12, 2026  
**Source:** Boards-Project-Review.xlsx, saved version 5, plus a GitHub source audit on November 12, 2026.

[Jump to verified GitHub links and project descriptions](#github-evidence-audit-and-website-handoff). The project records themselves now live in `assets/js/objectives-data.js`.

### Current requirements

- Two projects per objective, except AI 1, AI 2 and ACS 1, which have three.
- Six AI objectives and six ACS objectives: 27 project placements total.
- Keep each project within two objective placements across this plan. **Exception:** Animai Kingdom is allowed three placements (AI 1, AI 2 and ACS 1).
- The current allocation uses 15 distinct projects.
- Every slot has a project name. Nine allocated projects now have verified public source locations; four reported projects still need exact implementation links, and two projects are planned. This is not a claim that the projects or objectives are complete.
- NEURIX and WILDSIGHT are planned and have not been built yet.
- Confirm objective-specific evidence and suitability with the SME during review.

The objective descriptions below are working summaries. Use the official degree-objective wording for final submissions.

### AI objective matches

| Objective | Focus | Project 1 | Project 2 | Project 3 |
|---|---|---|---|---|
| AI 1 | Create and integrate cognitive AI into applications | Pixel Bang | Greenspires | Animai Kingdom |
| AI 2 | Create and evolve natural language processing systems | VORTEXA | Python II Speech-to-Text | Animai Kingdom |
| AI 3 | Design and develop machine-learning systems | Jonnybot | NEURIX | — |
| AI 4 | Design and employ deep-learning systems | Pixel Bang | WILDSIGHT | — |
| AI 5 | Explain neural networks and their role | NEURIX | WILDSIGHT | — |
| AI 6 | Integrate LLMs, reinforcement learning and genetic algorithms | VORTEXA | Jonnybot | — |

#### AI work still needed

| Project | Current position | Next work |
|---|---|---|
| Pixel Bang | Public text-to-image source (SDXL-Turbo via Hugging Face diffusers) | Record the prompts behind the saved outputs, add a repository README with setup steps, and explain how the diffusion pipeline works. |
| Animai Kingdom | Prototype — in development; public prototype source | Document your contribution, run the conversation/speech prototype and record example sessions. Do not claim Raspberry Pi deployment, hardware functionality or testing until shown. |
| VORTEXA | Public desktop source in Python-II-class/Vortexa IIII | Model preference and integration code found. Confirm the actual installed model/runtime, improve a language-processing behavior, and compare results on the same test inputs. |
| Python II Speech-to-Text | Public week-three speech prototype; runtime/accuracy not tested | Evaluate transcription against a reference transcript and measure before/after improvement. Response generation is simulated in this version. |
| Jonnybot | Public Q-learning source in AI_Class/app.py | Demonstrate learning across repeated runs. Public epsilon is 0.2. Genetic-algorithm functionality is still missing. |
| NEURIX | New project, planned | Build, train and evaluate a neural intent classifier. |
| WILDSIGHT | New project, planned | Build, train and evaluate an animal-image CNN. |

**AI 6 gap:** VORTEXA supplies the LLM component and Jonnybot supplies reinforcement learning. A proposed extension is a genetic patrol-route optimizer inside Jonnybot. It needs a fitness function, selection, crossover, mutation and evaluation against a baseline. Do not describe this feature as implemented until it works.

### NEURIX — Learning Intent Assistant

**Placements:** AI 3 and AI 5.  
**Status:** Planned; not yet built.

NEURIX will use a VORTEXA-inspired chat interface, but its central task is training a small neural network to classify the intent of a message. It remains a separate project from VORTEXA.

| Example input | Intended category |
|---|---|
| “Remind me to study Java.” | Reminder |
| “Explain binary search.” | Learning help |
| “Help me organize tonight.” | Planning |
| “I need some encouragement.” | Motivation |

#### First version

1. Create labeled example sentences for the four categories.
2. Keep separate training, validation and test examples. Remove duplicate or near-duplicate examples across splits.
3. Train a small neural-network classifier.
4. Display its predicted intent and model confidence score.
5. Let the user correct a prediction and save that correction for later training.
6. Retrain deliberately; saving a correction does not automatically change the model.
7. Compare the original and improved model on the same held-out evaluation data. Do not train on that test set.

#### Evidence to save

- Dataset labels, split method and class counts.
- Training code, saved model and settings.
- Baseline and improved evaluation results.
- Correct and incorrect predictions.
- A network diagram explaining inputs, layers, outputs, learning and limitations.
- An explanation that a model confidence score is not a guarantee of correctness.

### WILDSIGHT — Animal Image Classifier

**Placements:** AI 4 and AI 5.  
**Status:** Planned; not yet built.

WILDSIGHT will accept an uploaded animal photo and predict **cat, dog or bird**, using a small convolutional neural network (CNN).

#### First version

1. Choose a labeled image dataset with suitable usage terms and document its source.
2. Remove duplicate images and create separate training, validation and test sets.
3. Prepare images consistently. Apply training augmentation only to training data.
4. Train a small CNN and save the model and settings.
5. Plot training and validation loss and accuracy.
6. Evaluate once on the reserved test set after model selection. Report per-class performance and examples of mistakes.
7. Add a simple image-upload interface after the model works.

#### Evidence to save

- Dataset source, class counts and split method.
- Model architecture and explanation of convolution, pooling and classification layers used.
- Training code, settings, saved model and learning curves.
- Test results, a confusion matrix and incorrect predictions.
- Limitations, including that an image outside the three categories may still receive one of those labels.
- A working demonstration of image upload and prediction.

### ACS objective matches

| Objective | Focus | Project 1 | Project 2 | Project 3 |
|---|---|---|---|---|
| ACS 1 | Document analysis, design, development and testing | Safe Bank | Boards Personal Website | Animai Kingdom |
| ACS 2 | Use multiple programming languages and development environments | Java Inheritance Assignment | IoT Hydration Tilt Alarm | — |
| ACS 3 | Implement data-driven solutions | Cookie Salmon | Bus Mall | — |
| ACS 4 | Build for multiple platforms, including mobile | Boards Personal Website | Greenspires | — |
| ACS 5 | Demonstrate inheritance, encapsulation, polymorphism and abstraction | Java Inheritance Assignment | Java Generics and Binary Search Tree | — |
| ACS 6 | Describe, implement and analyze data structures | Java Generics and Binary Search Tree | Bus Mall | — |

#### ACS work still needed

| Project | Next work |
|---|---|
| Safe Bank | Document requirements, design, personal contribution and testing. Fix the undefined `getLocalStorageWithdraw()` call and validate transaction inputs. |
| Boards Personal Website | Record requirements, design decisions, changes and tests. Demonstrate desktop and mobile interaction and layout. |
| Java Inheritance Assignment | Locate the exact code and development environment. Identify inheritance, overriding, private state and abstraction where implemented. |
| IoT Hydration Tilt Alarm | Verify the actual code, language, environment and working hardware. Its pairing with Java remains conditional on qualifying language/environment evidence. |
| Cookie Salmon | Demonstrate sales calculations, store totals and input handling. Confirm personal contribution. |
| Bus Mall | Restore missing product images. Demonstrate voting, charts and storage. Explain object arrays, vote-update loops and runtime. |
| Greenspires | Confirm the platform and demonstrate a working mobile build. |
| Java Generics and Binary Search Tree | Locate and run the assignment. Demonstrate insertion, searching and traversal; explain runtime and OOP design. |

**ACS 5 check:** Across the selected evidence, identify concrete examples of all four required OOP concepts. A class or tree implementation alone does not prove all four are present.

### Supporting assignments and backups

| Item | Current role |
|---|---|
| Epic Crossover Fan Fiction assignment | Supporting evidence for AI 2. Story generation, review and revision alone do not establish development of an NLP system. |
| AI hierarchy diagram assignment | Supporting evidence for AI 5. Expand neural-network explanations alongside actual project results. |
| YouTube 2.0, Ja Holder, Java Searching and Sorting, AI Song Library and other project-log entries | Backups pending code, contribution and objective review. |
| IP Address Tracker | Reserve: the reviewed frontend was a Hello World scaffold. Locate a working implementation before allocating it. |
| Solo Leveling Workout Generator | Remains outside the current allocation, following the earlier decision to leave it out. |

### Starting order

This is a sequence for beginning the work, not a requirement to finish every project in one evening.

1. **VORTEXA:** Run the current version. Save model/runtime details and ten language test inputs with outputs. Improve one behavior and repeat the same tests.
2. **Java Binary Search Tree:** Locate and run the assignment. Capture operation tests and write a short explanation of its classes and runtime.
3. **NEURIX:** Create the labeled intent dataset, split it, and build the first training script before polishing the interface.
4. **WILDSIGHT:** Prepare the image dataset and first CNN training run before adding the upload interface.
5. **Jonnybot:** Capture learning results, then implement and evaluate the proposed genetic optimizer.
6. **Remaining projects:** Finish speech-to-text, verify IoT evidence, implement Greenspires features, and test/document the web and data projects.

### Evidence checklist for each project

- [ ] Repository or source-code location.
- [ ] Project purpose and the objective(s) it supports.
- [ ] Course, dates and professor, where applicable; do not guess unconfirmed class associations.
- [ ] Individual contribution, especially for team projects.
- [ ] Setup and run instructions, dependencies and model details where applicable.
- [ ] Working demonstration or screenshots.
- [ ] Appropriate tests or evaluations and recorded results.
- [ ] Explanation of design choices and known limitations.
- [ ] Objective-specific evidence: training results, NLP improvements, mobile tests, OOP examples or runtime analysis as applicable.
- [ ] Clear status: planned, in progress, working or ready for review.

All 24 slots are now named. The next goal is working software and evidence for each placement.


### GitHub evidence audit and website handoff

**Evidence checked:** November 12, 2026 (Phoenix). This audit inspected repository metadata, directory trees and source files. It did not execute the applications, install dependencies, test hardware or verify live deployments.

Public implementation source was located for **10 of the 15 allocated projects** (Pixel Bang added November 16, 2026). The two Java assignments and the exact hydration alarm still need implementation links. NEURIX and WILDSIGHT remain plans. A repository under Jerrod's account establishes a source location; individual contribution and objective completion still need their own evidence.

The links below point to the inspected commit so the professor can review the same version. Repository links and commit-history links allow review of later work. No placeholder URL or unrelated person's repository is used as proof.

#### Quick evidence index

| Project | Objectives | Public evidence | Website status |
|---|---|---|---|
| Pixel Bang | AI 1, AI 4 | [Repository](https://github.com/JerrodBolton/pixel-bag) | Public implementation source; prompt/output documentation pending |
| Animai Kingdom | AI 1, AI 2, ACS 1 | [Website](http://animaikingdom.com) · [Repository](https://github.com/JerrodBolton/Animai) | Prototype — in development |
| Greenspires | AI 1, ACS 4 | [Repository](https://github.com/JerrodBolton/Greenspires) | Public prototype source; AI feature planned |
| VORTEXA | AI 2, AI 6 | [Repository](https://github.com/JerrodBolton/Python-II-class) | Public implementation source; runtime/evaluation pending |
| Python II Speech-to-Text | AI 2 | [Repository](https://github.com/JerrodBolton/Python-II-class) | Public speech prototype source; runtime/evaluation pending |
| Jonnybot | AI 3, AI 6 | [Repository](https://github.com/JerrodBolton/AI_Class) | Public Q-learning source; evaluation and GA extension pending |
| NEURIX | AI 3, AI 5 | No implementation link located | Planned; not built |
| WILDSIGHT | AI 4, AI 5 | No implementation link located | Planned; not built |
| Safe Bank | ACS 1 | [Repository](https://github.com/JerrodBolton/Jerrod_Robert.safebank) | Public prototype source and planning evidence; fixes pending |
| Boards Personal Website | ACS 1, ACS 4 | [Repository](https://github.com/JerrodBolton/Pro-folio) | Public website source; deployment/device checks pending |
| Java Inheritance Assignment | ACS 2, ACS 5 | No implementation link located | Reported coursework; exact source not located |
| IoT Hydration Tilt Alarm | ACS 2 | No implementation link located | Reported project; exact hydration implementation not located |
| Cookie Salmon | ACS 3 | [Repository](https://github.com/JerrodBolton/20220728-CookieSalmonProject) | Public data-processing source; demo/tests pending |
| Bus Mall | ACS 3, ACS 6 | [Repository](https://github.com/JerrodBolton/busmall3) | Public implementation source; image assets missing |
| Java Generics and Binary Search Tree | ACS 5, ACS 6 | No implementation link located | Reported coursework; exact source not located |

#### Project descriptions, code links and development work

##### Pixel Bang

**Objectives:** AI 1, AI 4  
**Status:** Public implementation source; prompt/output documentation pending  
**Tools:** Python, PyTorch, Hugging Face diffusers, transformers, accelerate; Stability AI SDXL-Turbo; uv

**Website description:** Local text-to-image command-line app that turns written prompts into generated images.

**Code links:**

- [Repository](https://github.com/JerrodBolton/pixel-bag) · [Inspected snapshot](https://github.com/JerrodBolton/pixel-bag/tree/ba0189709d74d348c290c9714d676c9bc10317a2)
- [Source code: generate.py](https://github.com/JerrodBolton/pixel-bag/blob/ba0189709d74d348c290c9714d676c9bc10317a2/generate.py)
- [Dependencies: pyproject.toml](https://github.com/JerrodBolton/pixel-bag/blob/ba0189709d74d348c290c9714d676c9bc10317a2/pyproject.toml)
- [Sample output: outputs/cabin.png](https://github.com/JerrodBolton/pixel-bag/blob/ba0189709d74d348c290c9714d676c9bc10317a2/outputs/cabin.png)

**Present in the reviewed source:**

- `generate.py` loads `stabilityai/sdxl-turbo` with `AutoPipelineForText2Image` in half precision.
- Picks the Apple Silicon GPU (MPS), then CUDA, then CPU.
- Command-line options for the prompt, step count, seed and output path; saves PNGs to `outputs/`.
- Three generated images are committed in `outputs/`.

**Next work:**

- [ ] Add a repository README (it is currently empty) with setup and usage.
- [ ] Record the prompt, seed and step count behind each saved output.
- [ ] Explain how the diffusion pipeline (text encoder, UNet, VAE, scheduler) is integrated.

**Evidence boundary:** Source inspected November 16, 2026; it was not run. `src/hf_image_gen/__init__.py` is still the uv template placeholder, so the working entry point is `generate.py`.

##### Animai Kingdom

**Objectives:** AI 1, AI 2, ACS 1 (the one project allowed three placements)  
**Status:** Prototype — in development  
**Tools:** Python, Anthropic API, speech helpers — confirm full stack with the repository

**Website description:** An AI animal companion designed for conversation, productivity, motivation and brainstorming.

**Objective connections (all `suggested` until reviewed):**

- **AI 1:** Integrates conversational AI, character personalities, and speech features into a companion application.
- **AI 2:** Processes natural-language conversations through text and speech. Evidence should show language-processing improvements and before-and-after evaluation.
- **ACS 1:** Demonstrates the software-development process through requirements, design, implementation, testing, and documented individual contributions.

**Review links:**

- [Main project website](http://animaikingdom.com) — separate SIP website, configured in site-config.js
- [Public prototype repository](https://github.com/JerrodBolton/Animai)
- [Reviewed source: main_app.py](https://github.com/JerrodBolton/Animai/blob/1cfc5b48cf777261e24281b416a186874220750c/main_app.py)

**Present in the reviewed source:**

- Claude replies through the `anthropic` client, with a system prompt built from a character's personality, backstory and speaking style (characters.py).
- Optional voice mode using `listen`/`speak` helpers from voice.py.

**Next work:**

- [ ] Document your personal contribution.
- [ ] Run the prototype and record example conversation and voice sessions.
- [ ] Explain how the AI model, character personalities and speech features are integrated.
- [ ] AI 2: Improve one language-processing behavior and compare before-and-after results on the same test conversations.
- [ ] ACS 1: Record requirements, design, implementation and testing steps, plus your individual contributions.

**Evidence boundary:** The mapping stays `suggested` until the evidence and contribution are reviewed. Raspberry Pi deployment, hardware functionality and testing are not claimed.

##### Greenspires

**Objectives:** AI 1, ACS 4  
**Status:** Public prototype source; AI feature planned  
**Tools:** TypeScript, React Native, Expo, React Navigation, AsyncStorage, Expo SecureStore

**Website description:** Mobile journaling prototype that connects reflection entries to growth of a virtual plant.

**Objective connection (AI 1):** AI journaling feature is planned; the AI integration must be implemented and demonstrated.

**Review links:**

- [GitHub repository](https://github.com/JerrodBolton/Greenspires)
- [Inspected snapshot](https://github.com/JerrodBolton/Greenspires/tree/23aae1df5e4975d730ff26bb4f1f2619c78b8138)
- [Commit history](https://github.com/JerrodBolton/Greenspires/commits/main/)
- [README: readme.md](https://github.com/JerrodBolton/Greenspires/blob/23aae1df5e4975d730ff26bb4f1f2619c78b8138/readme.md)
- [Source code: App.tsx](https://github.com/JerrodBolton/Greenspires/blob/23aae1df5e4975d730ff26bb4f1f2619c78b8138/App.tsx)
- [Source code: screens/HomeScreen.tsx](https://github.com/JerrodBolton/Greenspires/blob/23aae1df5e4975d730ff26bb4f1f2619c78b8138/screens/HomeScreen.tsx)
- [Dependencies: package.json](https://github.com/JerrodBolton/Greenspires/blob/23aae1df5e4975d730ff26bb4f1f2619c78b8138/package.json)
- [Source code: storage/plantStorage.ts](https://github.com/JerrodBolton/Greenspires/blob/23aae1df5e4975d730ff26bb4f1f2619c78b8138/storage/plantStorage.ts)
- [Demo video: screenshots/ScreenRecording_08-14-2026 23-14-17_1.MP4](https://github.com/JerrodBolton/Greenspires/blob/23aae1df5e4975d730ff26bb4f1f2619c78b8138/screenshots/ScreenRecording_08-14-2026%2023-14-17_1.MP4)

**Present in the reviewed source:**

- Plant selection/naming and locally stored plant state.
- Session reflection entries, growth points/stages and reset flow.
- Onboarding, home and settings screens; screenshots and a recording are present.

**Next work:**

- [ ] Optional: implement AI-generated reflection replies (not part of its current ACS 4 placement).
- [ ] Persist journal history; currently entries are held in screen state.
- [ ] Run/document iOS or Android and desktop/mobile checks; scripts alone do not prove tested devices.

**Evidence boundary:** No AI integration found in the reviewed HomeScreen implementation. Mobile runtime and authorship/contribution were not independently tested.

##### VORTEXA

**Objectives:** AI 2, AI 6  
**Status:** Public implementation source; runtime/evaluation pending  
**Tools:** Python, CustomTkinter, llama-cpp-python, Pillow; GGUF models

**Website description:** Desktop local-LLM assistant with a chat interface, model switching and session conversation history.

**Review links:**

- [GitHub repository](https://github.com/JerrodBolton/Python-II-class)
- [Inspected snapshot](https://github.com/JerrodBolton/Python-II-class/tree/11bb8112f01da9d7c5331e08954aa438f09e5ba1)
- [Commit history](https://github.com/JerrodBolton/Python-II-class/commits/main/)
- [Source code: Vortexa IIII/main.py](https://github.com/JerrodBolton/Python-II-class/blob/11bb8112f01da9d7c5331e08954aa438f09e5ba1/Vortexa%20IIII/main.py)
- [Source code: Vortexa IIII/llm.py](https://github.com/JerrodBolton/Python-II-class/blob/11bb8112f01da9d7c5331e08954aa438f09e5ba1/Vortexa%20IIII/llm.py)
- [Dependencies: Vortexa IIII/requirements.txt](https://github.com/JerrodBolton/Python-II-class/blob/11bb8112f01da9d7c5331e08954aa438f09e5ba1/Vortexa%20IIII/requirements.txt)
- [Source code: Vortexa IIII/hub.py](https://github.com/JerrodBolton/Python-II-class/blob/11bb8112f01da9d7c5331e08954aa438f09e5ba1/Vortexa%20IIII/hub.py)

**Present in the reviewed source:**

- Vortexa IIII contains a modular GUI, worker threads/queues, model loading and streamed responses.
- llm.py configures Dolphin3.0-Llama3.1-8B_Q5_K_M.gguf as preferred model, with fallback to available GGUF files.
- A system persona, recent message history and token-budget trimming are implemented.

**Next work:**

- [ ] Save before/after NLP behavior tests and document personal contribution.
- [ ] Confirm actual installed model, hardware and dependency setup.
- [ ] Demonstrate LLM integration for AI 6; does not itself supply genetic algorithms.

**Evidence boundary:** Model weights are not established as included. Configuration is evidence of integration code, not proof of installed weights or measured performance. Multiple folders are iterations of one project.

##### Python II Speech-to-Text

**Objectives:** AI 2  
**Status:** Public speech prototype source; runtime/evaluation pending  
**Tools:** Python, RealtimeSTT, RealtimeTTS/Kokoro, faster-whisper

**Website description:** Speech transcription and spoken-response prototype with interruption handling.

**Review links:**

- [GitHub repository](https://github.com/JerrodBolton/Python-II-class)
- [Inspected snapshot](https://github.com/JerrodBolton/Python-II-class/tree/11bb8112f01da9d7c5331e08954aa438f09e5ba1)
- [Commit history](https://github.com/JerrodBolton/Python-II-class/commits/main/)
- [README: week three/readme.md](https://github.com/JerrodBolton/Python-II-class/blob/11bb8112f01da9d7c5331e08954aa438f09e5ba1/week%20three/readme.md)
- [Source code: week three/TTSandSTT.py](https://github.com/JerrodBolton/Python-II-class/blob/11bb8112f01da9d7c5331e08954aa438f09e5ba1/week%20three/TTSandSTT.py)
- [Dependencies: week three/requirements.txt](https://github.com/JerrodBolton/Python-II-class/blob/11bb8112f01da9d7c5331e08954aa438f09e5ba1/week%20three/requirements.txt)

**Present in the reviewed source:**

- week three/TTSandSTT.py calls AudioToTextRecorder.text() and prints recognized speech.
- Uses tiny.en for recording/transcription configuration and Kokoro af_bella for speech synthesis.
- Interruption sets an event and stops speech playback; the token generator checks the event.

**Next work:**

- [ ] Record transcription results against a reference transcript.
- [ ] Compare error rates before/after changing one preprocessing/model setting.
- [ ] Replace the explicitly simulated response generator only if adding a real LLM is in scope.

**Evidence boundary:** Response text is simulated in this version, not generated by an LLM. Hardware/audio runtime and accuracy were not tested. Keep this separate from VORTEXA’s typed-chat work.

##### Jonnybot

**Objectives:** AI 3, AI 6  
**Status:** Public Q-learning source; evaluation and GA extension pending  
**Tools:** Python, Tkinter, random; tabular Q-learning

**Website description:** Grid-based security-robot simulation that explores actions and updates a Q-table from cell rewards.

**Review links:**

- [GitHub repository](https://github.com/JerrodBolton/AI_Class)
- [Inspected snapshot](https://github.com/JerrodBolton/AI_Class/tree/38f55e2eeff88464f84337e716baadff07c55eb3)
- [Commit history](https://github.com/JerrodBolton/AI_Class/commits/main/)
- [Source code: app.py](https://github.com/JerrodBolton/AI_Class/blob/38f55e2eeff88464f84337e716baadff07c55eb3/app.py)

**Present in the reviewed source:**

- 6-by-10 grid, four movement actions and a per-state action-value dictionary.
- Q-learning update with learning_rate=0.1, discount_factor=0.9 and epsilon=0.2 in the reviewed public version.
- User-controlled episode move count, timed steps, start/reset controls, reward cells including +500.

**Next work:**

- [ ] Collect repeatable learning comparisons and persist the Q-table if needed.
- [ ] Fix/verify reward reporting: total_reward is not updated in the reviewed file.
- [ ] Add and evaluate the proposed genetic patrol-route optimizer for AI 6.

**Evidence boundary:** Earlier notes used epsilon=0.7; public app.py currently uses 0.2. The +500 value is a fixed cell reward, not evidence of a moving target/catch system. No GA implementation was found.

##### NEURIX

**Objectives:** AI 3, AI 5  
**Status:** Planned; not built  
**Tools:** Proposed: Python, small neural-network classifier and desktop GUI

**Website description:** Planned learning assistant that predicts reminder, learning-help, planning or motivation intent from a message.

**Implementation link:** Not located. Keep the source/demo button absent until a real link is available.

**Next work:**

- [ ] Create labeled sentences and separate training/validation/test sets.
- [ ] Train a neural classifier and show predicted intent with a confidence score.
- [ ] Save corrections for deliberate retraining; compare held-out results.
- [ ] Explain architecture, learning, errors and limitations.

**Evidence boundary:** No repository or implementation located; do not show a GitHub or demo button until a real destination exists.

##### WILDSIGHT

**Objectives:** AI 4, AI 5  
**Status:** Planned; not built  
**Tools:** Proposed: Python, small CNN and image-upload interface

**Website description:** Planned animal-image classifier that predicts cat, dog or bird from an uploaded photo.

**Implementation link:** Not located. Keep the source/demo button absent until a real link is available.

**Next work:**

- [ ] Choose a licensed dataset and remove duplicate images.
- [ ] Create separate train/validation/test sets, then train a small CNN.
- [ ] Save learning curves, a confusion matrix, per-class results and errors.
- [ ] Add upload interface after model evaluation; explain limitations.

**Evidence boundary:** No repository, dataset or trained model located. The current evidence is the approved project plan.

##### Safe Bank

**Objectives:** ACS 1  
**Status:** Public prototype source and planning evidence; fixes pending  
**Tools:** HTML, CSS, JavaScript, DOM events, browser storage

**Website description:** Educational banking prototype created with Robert to practice deposits, withdrawals and balance calculations.

**Review links:**

- [GitHub repository](https://github.com/JerrodBolton/Jerrod_Robert.safebank)
- [Inspected snapshot](https://github.com/JerrodBolton/Jerrod_Robert.safebank/tree/8175c0398573739fa5cade758ed29b3de49e9c65)
- [Commit history](https://github.com/JerrodBolton/Jerrod_Robert.safebank/commits/main/)
- [README: README.md](https://github.com/JerrodBolton/Jerrod_Robert.safebank/blob/8175c0398573739fa5cade758ed29b3de49e9c65/README.md)
- [Source code: mySafe.js](https://github.com/JerrodBolton/Jerrod_Robert.safebank/blob/8175c0398573739fa5cade758ed29b3de49e9c65/mySafe.js)
- [Source code: mySafe.html](https://github.com/JerrodBolton/Jerrod_Robert.safebank/blob/8175c0398573739fa5cade758ed29b3de49e9c65/mySafe.html)
- [Wireframe: img/Wireframe.jpeg](https://github.com/JerrodBolton/Jerrod_Robert.safebank/blob/8175c0398573739fa5cade758ed29b3de49e9c65/img/Wireframe.jpeg)

**Present in the reviewed source:**

- README records the team’s project plan and intended features.
- mySafe.js contains transaction arrays, deposit/withdrawal handlers, balance calculations and currency formatting.
- A wireframe image is committed.

**Next work:**

- [ ] Fix undefined getLocalStorageWithdraw() call and validate transaction amounts.
- [ ] Resolve the initial balance mismatch between comments and code.
- [ ] Document requirements, design, tests/results and Jerrod’s specific contribution.

**Evidence boundary:** Account/password creation is a README goal, not verified completed authentication. Do not describe it as a real or secure banking service.

##### Boards Personal Website

**Objectives:** ACS 1, ACS 4  
**Status:** Public website source; deployment/device checks pending  
**Tools:** HTML, CSS, JavaScript; data-driven objective cards

**Website description:** Personal portfolio showing projects, degree objectives, About, contact and SIP links.

**Review links:**

- [GitHub repository](https://github.com/JerrodBolton/Pro-folio)
- [Inspected snapshot](https://github.com/JerrodBolton/Pro-folio/tree/19c8c7391992b052ba8c45ec615627943c519cc9)
- [Commit history](https://github.com/JerrodBolton/Pro-folio/commits/main/)
- [README: README.md](https://github.com/JerrodBolton/Pro-folio/blob/19c8c7391992b052ba8c45ec615627943c519cc9/README.md)
- [Source code: index.html](https://github.com/JerrodBolton/Pro-folio/blob/19c8c7391992b052ba8c45ec615627943c519cc9/index.html)
- [Source code: portfolio.html](https://github.com/JerrodBolton/Pro-folio/blob/19c8c7391992b052ba8c45ec615627943c519cc9/portfolio.html)
- [Source code: objectives.html](https://github.com/JerrodBolton/Pro-folio/blob/19c8c7391992b052ba8c45ec615627943c519cc9/objectives.html)
- [Source code: assets/js/objectives-data.js](https://github.com/JerrodBolton/Pro-folio/blob/19c8c7391992b052ba8c45ec615627943c519cc9/assets/js/objectives-data.js)
- [Source code: assets/js/site-config.js](https://github.com/JerrodBolton/Pro-folio/blob/19c8c7391992b052ba8c45ec615627943c519cc9/assets/js/site-config.js)

**Present in the reviewed source:**

- Home, portfolio, objectives, About/contact and project-page HTML files.
- Shared styles/scripts and separate objective definitions, project data and mappings.
- site-config.js points SIP/Animai Kingdom links to http://animaikingdom.com.

**Next work:**

- [ ] Import this handoff into assets/js/objectives-data.js without changing the official objective text.
- [ ] Update the old mappings to the current two-project allocation.
- [ ] Document design/tests and test desktop/mobile behavior.
- [ ] Check the previously provided Netlify URL before presenting it as a verified live demo.

**Evidence boundary:** Repository code was inspected; the deployed Netlify site was not run/checked in this audit. Existing source mappings still reflect older suggestions.

##### Java Inheritance Assignment

**Objectives:** ACS 2, ACS 5  
**Status:** Reported coursework; exact source not located  
**Tools:** Java and development environment — unverified

**Website description:** Reported Java class-hierarchy assignment intended to demonstrate inheritance and other OOP concepts.

**Implementation link:** Not located. Keep the source/demo button absent until a real link is available.

**Reported in our project review; not confirmed by source here:**

- Java inheritance coursework was identified in the project plan.

**Next work:**

- [ ] Upload the actual .java files and README.
- [ ] Identify parent/child classes, overridden methods, encapsulation and abstraction.
- [ ] Document environment, run instructions, test output and personal contribution.

**Evidence boundary:** No matching Java source/repository located. JavaScript repositories are not evidence of a Java assignment.

##### IoT Hydration Tilt Alarm

**Objectives:** ACS 2  
**Status:** Reported project; exact hydration implementation not located  
**Tools:** Exact hydration stack unverified; related IoT work uses Arduino C++/M5Core2

**Website description:** Reported sensor-triggered hydration reminder whose exact source still needs uploading or identifying.

**Implementation link:** Not located. Keep the source/demo button absent until a real link is available.

**Reported in our project review; not confirmed by source here:**

- A hydration tilt alarm was described in the project review.

**Next work:**

- [ ] Locate/upload the exact alarm sketch, circuit and hardware demo.
- [ ] Confirm its language/environment differs from the Java assignment.
- [ ] Document trigger behavior and tests.

**Evidence boundary:** IMU and Gosh-dang-it contain real related IoT coursework, but neither was verified as this hydration alarm. Do not relabel their code as the alarm.

##### Cookie Salmon

**Objectives:** ACS 3  
**Status:** Public data-processing source; demo/tests pending  
**Tools:** HTML, CSS, JavaScript, constructor/prototype methods, arrays

**Website description:** Store-sales estimator that calculates hourly cookie sales from simulated customer counts and average purchases.

**Review links:**

- [GitHub repository](https://github.com/JerrodBolton/20220728-CookieSalmonProject)
- [Inspected snapshot](https://github.com/JerrodBolton/20220728-CookieSalmonProject/tree/463898f38f0fd6623b12c6a7daae585a854fa008)
- [Commit history](https://github.com/JerrodBolton/20220728-CookieSalmonProject/commits/main/)
- [README: README.md](https://github.com/JerrodBolton/20220728-CookieSalmonProject/blob/463898f38f0fd6623b12c6a7daae585a854fa008/README.md)
- [Source code: main.js](https://github.com/JerrodBolton/20220728-CookieSalmonProject/blob/463898f38f0fd6623b12c6a7daae585a854fa008/main.js)
- [Source code: sales.html](https://github.com/JerrodBolton/20220728-CookieSalmonProject/blob/463898f38f0fd6623b12c6a7daae585a854fa008/sales.html)

**Present in the reviewed source:**

- CityLocations stores per-store input parameters and hourly arrays.
- Generates customer counts within a range, calculates sales, renders store rows and totals.
- A form adds locations and refreshes the aggregate footer.

**Next work:**

- [ ] Test input conversion and validation, store totals and grand totals.
- [ ] Confirm contribution and record a working demonstration.
- [ ] Expand the very short repository README with setup and design notes.

**Evidence boundary:** Uses simulated customer data; do not claim real sales analytics, AI predictions or a trained model.

##### Bus Mall

**Objectives:** ACS 3, ACS 6  
**Status:** Public implementation source; image assets missing  
**Tools:** HTML, CSS, JavaScript, Chart.js, localStorage

**Website description:** Product-voting application that counts image views/selections, plots results and saves voting data.

**Review links:**

- [GitHub repository](https://github.com/JerrodBolton/busmall3)
- [Inspected snapshot](https://github.com/JerrodBolton/busmall3/tree/e7b76205357ed06ad0b09bbac4dbacf4e7384a04)
- [Commit history](https://github.com/JerrodBolton/busmall3/commits/main/)
- [README: README.md](https://github.com/JerrodBolton/busmall3/blob/e7b76205357ed06ad0b09bbac4dbacf4e7384a04/README.md)
- [Source code: java.js](https://github.com/JerrodBolton/busmall3/blob/e7b76205357ed06ad0b09bbac4dbacf4e7384a04/java.js)
- [Source code: index.html](https://github.com/JerrodBolton/busmall3/blob/e7b76205357ed06ad0b09bbac4dbacf4e7384a04/index.html)

**Present in the reviewed source:**

- ItemImage objects store name, file path, timesShown and timesSelected in an array.
- Displays three choices and ends after ten selections; prepares a Chart.js bar chart.
- Serializes and restores the product array through localStorage.

**Next work:**

- [ ] Restore images: code expects images/*.jpg, but no images directory exists in the reviewed tree.
- [ ] Run voting/chart/storage tests and document contribution.
- [ ] Explain array traversal and update costs for ACS 6.

**Evidence boundary:** The file java.js is JavaScript, not Java. Missing images prevent the intended visual demo until restored.

##### Java Generics and Binary Search Tree

**Objectives:** ACS 5, ACS 6  
**Status:** Reported coursework; exact source not located  
**Tools:** Java, generics and tree data structures — implementation unverified

**Website description:** Reported Java binary-search-tree coursework intended to demonstrate data structures and OOP design.

**Implementation link:** Not located. Keep the source/demo button absent until a real link is available.

**Reported in our project review; not confirmed by source here:**

- Java generics/BST coursework was identified in the project plan.

**Next work:**

- [ ] Upload exact tree classes, driver and tests.
- [ ] Verify supported operations rather than assuming insert/search/traversal all exist.
- [ ] Explain runtime and actual OOP concepts; add operation test output.

**Evidence boundary:** No matching Java tree repository or file located. Do not link unrelated coursework as implementation proof.

#### Additional useful evidence

These items remain supporting material or backups. They do not silently replace the current objective allocations.

- [Greenspires screenshots](https://github.com/JerrodBolton/Greenspires/tree/23aae1df5e4975d730ff26bb4f1f2619c78b8138/screenshots) — Two screenshot files and a demonstration recording are present; the media was located, not watched or visually validated in this audit.
- [Greenspires project proposal](https://docs.google.com/document/d/18GoryGLgd33fsjFrEtMmp290EBDMLFS_Q_eXBmviJtw/edit?usp=sharing) — Linked by the repository README; document contents and professor access were not checked.
- [Greenspires UML diagram](https://lucid.app/lucidchart/5933c296-cc2e-4d40-b51d-caa7bd1ce281/edit) — Linked by the repository README; diagram contents and access were not checked.
- [IMU course repository](https://github.com/JerrodBolton/IMU) — Real Arduino/M5Core2 sensor and networking coursework. No hydration-specific implementation was identified.
- [IMU course overview](https://github.com/JerrodBolton/IMU/blob/d5738e5ee1a48cef4a3536093ea8d560aeb0b5d2/readme.md) — Course overview only; not evidence that every described exercise is implemented.
- [Gosh-dang-it counter source](https://github.com/JerrodBolton/Gosh-dang-it/blob/7e091869a78cfe766a9f25c174bcdd51fab7b1de/Final_Project/FP.ino) — M5Core2/Arduino C++ button tallies, screen feedback and ThingSpeak upload logic. Its README discusses Firebase/Sheets, but reviewed firmware uses ThingSpeak. This is a counter, not the hydration alarm.
- [Gosh-dang-it README](https://github.com/JerrodBolton/Gosh-dang-it/blob/7e091869a78cfe766a9f25c174bcdd51fab7b1de/README.md) — Includes project concept and planned AI enhancements; those AI enhancements are not verified implemented.
- [YouTube 2.0](https://github.com/JerrodBolton/Youtube2.0) — Reserve: React project tree located. Personal implementation and a working API/demo still need review.
- [Solo Leveling Workout Generator](https://github.com/JerrodBolton/Python_Class/blob/1a29c3b5967009e7b7db39fe0bfeda6b94ac8240/final_project/app.py) — Reserve under the earlier decision to leave it out. Path presence rechecked; its code was not re-audited for this handoff.
- [Solo Leveling README](https://github.com/JerrodBolton/Python_Class/blob/1a29c3b5967009e7b7db39fe0bfeda6b94ac8240/final_project/readme.md) — Existing project documentation path located.
- [AI Song Library](https://github.com/JerrodBolton/AI-song-library) — Reserve: index.html, README and audio assets are present; source tree alone does not establish an AI software integration.
- [Public Animai prototype](https://github.com/JerrodBolton/Animai/blob/1cfc5b48cf777261e24281b416a186874220750c/main_app.py) — Now allocated to AI 1 (see Animai Kingdom above). SIP-related Python source importing Anthropic, character definitions and speech helpers. Do not infer Raspberry Pi deployment or completed hardware.
- [Animai prototype dependencies](https://github.com/JerrodBolton/Animai/blob/1cfc5b48cf777261e24281b416a186874220750c/requirements.txt) — Dependency-file path located in the same public prototype repository.
- [SIP website configuration](https://github.com/JerrodBolton/Pro-folio/blob/19c8c7391992b052ba8c45ec615627943c519cc9/assets/js/site-config.js) — The source currently configures http://animaikingdom.com. Keep SIP/Animai links directed to its separate website.
- [Previously supplied portfolio URL](https://endearing-stardust-9137dd.netlify.app/) — User-provided URL; live deployment and its relationship to the current repository were not tested in this audit.

Related IoT source contains embedded credential values. Do not copy credentials or secret-header contents into website examples. Review and remove exposed values before publishing code excerpts; no credential values are reproduced in this README.

#### Running or reviewing projects locally

These are starting procedures inferred from the files, not successful runtime tests performed for this audit.

| Project | Starting procedure | What is still required |
|---|---|---|
| VORTEXA | In the Python-II-class repository, enter `Vortexa IIII`, create an environment, install its `requirements.txt`, add a compatible GGUF model under `models`, and run `python main.py`. | Hardware-specific llama-cpp setup, model license/weights and actual run verification. |
| Speech-to-Text | Enter `week three`, install its requirements, and run `python TTSandSTT.py`. | Microphone, audio setup/model downloads and measured transcription tests. |
| Jonnybot | In AI_Class, run `python app.py` in a Python environment with Tkinter. | Desktop display and learning/result checks; no trained model file is required for the tabular implementation. |
| Greenspires | The README documents `npm install`, then `npm start`; package.json has Android, iOS and web scripts. | Compatible Expo environment/device and recorded platform checks. |
| Safe Bank | Serve the repository as a static site and open `mySafe.html`. | Fix the withdrawal path before treating it as a working demo. |
| Cookie Salmon | Serve the repository as a static site and open `sales.html`. | Validate inputs and totals. |
| Bus Mall | Serve the repository as a static site and open `index.html`. | Restore image assets and verify chart/storage behavior. |
| Boards website | Serve the Pro-folio repository as a static site and open `index.html`. | Test mobile/desktop behavior and confirm deployment. |

#### Website integration instructions

**Status:** Applied to the website on November 12, 2026. Kept here as the rules for future updates.

The inspected website keeps its objective and project content in [assets/js/objectives-data.js](https://github.com/JerrodBolton/Pro-folio/blob/19c8c7391992b052ba8c45ec615627943c519cc9/assets/js/objectives-data.js). It currently has older suggested mappings, so the README's two-project mapping is the intended update. This handoff does **not** change or deploy the website or create GitHub repositories.

1. Keep the official text in `OBJECTIVES` unchanged.
2. Merge the project records below into the existing `PROJECTS` object. Keep the `local-ai-assistant` ID for VORTEXA. The `animai-kingdom` record keeps `externalUrl` (from site-config.js) so its card links to the separate website, and `sourceUrl` adds a GitHub source link beside it.
3. Replace/merge all 12 current objective mappings with the entries below. Each objective gets exactly two projects.
4. Keep mapping `status: "suggested"` until the objective evidence and contribution are reviewed. Public source availability and objective approval are different facts.
5. Display the development status visibly on project cards/details. In the compatible records below it is included in the summary, so it remains visible with the current schema.
6. Render evidence links with their labels. If an evidence array is empty, show “Source evidence to be added” and omit GitHub/demo buttons. Do not turn missing URLs into `#` links.
7. Keep results and contribution fields empty where not confirmed; do not invent test scores, completion dates, ownership claims or professor approvals.
8. Keep the separate SIP URL controlled through `site-config.js`. No SIP routing changes are needed for this update.

#### Project and mapping records

The code-ready project and mapping records from this audit have been applied to the website. They now live in [`assets/js/objectives-data.js`](assets/js/objectives-data.js), which is the source of truth for every project record and objective match.

#### Immediate upload checklist

- [ ] Add the nine verified public source locations to the project cards.
- [ ] Keep NEURIX/WILDSIGHT labeled Planned; no source/demo button yet.
- [x] Upload Pixel Bang ([pixel-bag](https://github.com/JerrodBolton/pixel-bag)).
- [ ] Locate/upload the two Java assignments and exact hydration alarm.
- [ ] Record personal contributions, demos and tests without treating plans as completed features.
- [ ] Verify the links from the published website while signed out.
- [ ] Use the existing spreadsheet to track implementation and evidence status; this audit did not edit it.
