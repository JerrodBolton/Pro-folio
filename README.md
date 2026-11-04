# Jerrod Bolton — Portfolio Website README

## Project goal

Update my existing personal portfolio for my University of Advancing Technology (UAT) Boards review on November 16, 2026, at 2:45 p.m. Showcase my strongest work and clearly connect project evidence to my degree objectives.

This README is a starting brief for Claude or another coding assistant. It describes the requested work; it does not claim the repository has been inspected or changes have been implemented.

## Existing website and repository

- Live website: https://endearing-stardust-9137dd.netlify.app/
- GitHub repository: https://github.com/JerrodBolton/Pro-folio
- Editor: VS Code.
- Intended stack: plain HTML, CSS, and JavaScript.
- Hosting: Netlify.

Start by reviewing the repository, its existing instructions, files, and deployment configuration. Preserve useful content and adapt the existing structure before introducing new files or dependencies.

## Approved color palette

This palette replaces the earlier orange-and-emerald futuristic theme.

| Color | Hex | Intended use |
| --- | --- | --- |
| Purple | #A78BFA | Main buttons, links, highlights, and focus indicators |
| Black | #121212 | Main background |
| White | #FFFFFF | Headings and main text |
| Gray | #B0B0B0 | Supporting text |
| Dark army green | #303820 | Secondary surfaces, badges, and small accents |

Keep black and purple dominant. Use dark army green sparingly. Use white text on dark green and black text on purple buttons. Avoid using dark green as small text on black. Verify contrast for actual text and interactive states.

The final visual direction should be clean, readable, and polished. The old orange-and-green image is not an approved requirement for this new palette. Confirm any new background imagery before adding it.

### Starter CSS variables

```css
:root {
  --color-purple: #A78BFA;
  --color-black: #121212;
  --color-white: #FFFFFF;
  --color-gray: #B0B0B0;
  --color-army-green: #303820;

  --background: var(--color-black);
  --text: var(--color-white);
  --text-muted: var(--color-gray);
  --accent: var(--color-purple);
  --secondary-surface: var(--color-army-green);
}

body {
  margin: 0;
  background: var(--background);
  color: var(--text);
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.6;
}

a {
  color: var(--accent);
}

.button-primary {
  background: var(--accent);
  color: var(--color-black);
}

.badge-secondary {
  background: var(--secondary-surface);
  color: var(--color-white);
}

:focus-visible {
  outline: 3px solid var(--accent);
  outline-offset: 4px;
}
```

These are starting tokens, not a complete stylesheet. Integrate them into the existing CSS after reviewing it.

## Navigation and content

Use this menu in this order:

**Home · Portfolio · Objectives · SIP · About Me · Contact**

| Section | Requirements |
| --- | --- |
| Home | Compact introduction, my photo, and 1–3 featured projects near the top. |
| Portfolio | My strongest work, with project titles, descriptions, screenshots, demos, GitHub links, and links to detailed project pages. |
| Objectives | Official degree objectives copied verbatim, with relevant supporting projects and evidence beneath each. |
| SIP | Animai Kingdom: purpose, innovation, my contributions, current progress, and demonstrations. |
| About Me | Background, AI and ACS studies, skills, experience, and current resume. |
| Contact | LinkedIn and/or a working contact form instead of displaying my email address directly. |

### Home

Visitors should see my strengths in the first 3–5 seconds. Reduce the size of “Hey, I Am…” so it can fit on one line where space permits. Aim to show 1–3 featured projects before scrolling on desktop. On mobile, prioritize readable content and early visibility of featured work without forcing everything into one screen.

### Portfolio and Objectives serve different purposes

Portfolio highlights my best work; quality matters more than quantity.

Objectives collects all relevant evidence supporting degree requirements. Eligible work can include coursework, Production Studios, SIP, internships, personal projects, freelance work, and client work when permission is available.

I study Artificial Intelligence and Advancing Computer Science. Confirm whether I am presenting both degrees. I will provide the six official objectives for each degree being presented from Canvas. They can be found in “What to Expect from SIP410” or near the bottom of the course Home page.

Do not invent, paraphrase, or rewrite official objectives. A project can support multiple objectives when its connection to each is explained. Keep missing objectives clearly marked in development until the official wording is provided.

### SIP: Animai Kingdom

Animai Kingdom is my AI desk companion project. Describe its purpose, intended innovation, my role, progress, and demonstrations using verified information I provide. Distinguish working features from planned features.

### About Me and Contact

Include my AI and ACS studies, background, skills, experience, and approved current resume. Confirm my LinkedIn URL and any missing biographical information.

If adding a contact form, configure and test real submission handling. Do not present a decorative form as functional.

## Project detail template

Use this structure for each project:

- **Title:** Project name.
- **Purpose:** What it does and the problem it solves.
- **Status:** Current stage and working features.
- **My contribution:** What I personally designed or built.
- **Team:** Team members and their roles, if applicable.
- **Tools:** Languages, libraries, hardware, and services used.
- **Decisions:** Why I chose those tools and that approach.
- **Evidence:** Screenshots, demo videos, source code, and PDFs.
- **Results:** What worked and what the project achieved.
- **Reflection:** Lessons learned, challenges, and future improvements.
- **Objectives supported:** Relevant objective numbers and a clear explanation of the connection.

Potential projects include Animai Kingdom and my local AI assistant. Confirm the assistant’s current name, features, and evidence before writing its description. Select any additional featured project with me.

Use “Read more” links for full details so overview pages remain easy to scan.

## Materials to gather

- [ ] Official AI objectives copied from Canvas.
- [ ] Official ACS objectives if presenting that degree too.
- [ ] Confirmed list of projects and their objective mappings.
- [ ] Current project descriptions and my contributions.
- [ ] Screenshots and demonstration videos.
- [ ] GitHub or other evidence links for each project.
- [ ] My approved photo.
- [ ] Current resume PDF.
- [ ] LinkedIn URL.
- [ ] Updated theme imagery, if desired.
- [ ] Contact form destination/configuration if using a form.

Ask for missing material rather than inventing details or accomplishments.

## Build checklist

1. **Review the repository.** Identify existing pages, stylesheets, scripts, assets, instructions, and Netlify settings. Explain what can be reused.
2. **Organize the evidence.** Gather official objectives and match projects to each one.
3. **Build navigation and Objectives.** Prioritize the academic evidence needed for the review.
4. **Build Portfolio and SIP.** Add concise summaries and detailed project pages.
5. **Update Home.** Make the introduction compact and show strong projects early.
6. **Apply the approved palette.** Use purple, black, white, gray, and dark army green consistently.
7. **Complete About Me and Contact.** Add approved content and functional contact links or form.
8. **Verify the site.** Test content, navigation, media, responsive layouts, and contact functionality.
9. **Prepare for Boards.** Practice explaining each objective, the evidence, my role, and my decisions.

## Suggested organization

Adapt this to the repository after inspecting it; these paths are suggestions, not a description of its current files.

- `index.html`: homepage.
- `portfolio.html`: selected work.
- `objectives.html`: degree objectives and evidence.
- `sip.html`: Animai Kingdom.
- `about.html`: biography, skills, experience, and resume.
- `contact.html`: LinkedIn and/or contact form.
- `projects/`: individual project detail pages.
- `assets/css/`: shared styles.
- `assets/js/`: navigation and other interaction.
- `assets/images/`: photos and screenshots.
- `assets/documents/`: approved PDFs.

Keep navigation and styling consistent across pages.

## Local preview and hosting

After inspecting the actual structure, document the correct preview command and site root.

For a basic static site, open the site folder in VS Code and preview it with a local web server, such as Live Server if already installed. Use the actual homepage path.

Retain existing Netlify settings unless the structure requires changes. Confirm the publish directory matches the site files. Plain static HTML/CSS/JavaScript may not require a build command, but inspect the current setup before changing it.

## Acceptance checklist

- [ ] All six navigation items work on every page.
- [ ] Desktop homepage shows featured work early.
- [ ] Mobile layout has readable text and no horizontal overflow.
- [ ] Official objectives match Canvas wording exactly.
- [ ] Each objective has relevant evidence and an explanation.
- [ ] Project descriptions accurately distinguish my work from teammates’ work.
- [ ] Planned and completed features are clearly distinguished.
- [ ] All images load and have appropriate alternative text.
- [ ] Videos, GitHub links, PDFs, and “Read more” links work.
- [ ] Evidence links are accessible to reviewers.
- [ ] Keyboard navigation and focus indicators work.
- [ ] Color contrast is readable in all interactive states.
- [ ] Contact links work; form submissions are tested if a form is included.
- [ ] Site is checked in multiple browsers and on a phone.
- [ ] No unfinished placeholder content is presented as completed work.

## Instructions for Claude or the coding assistant

Read this README and inspect the existing repository first. Work with me one manageable step at a time using clear language. Explain which files you change and why. Ask for missing objectives, images, links, or project information. Preserve useful content and keep the implementation easy to maintain in VS Code.

Start by summarizing the existing project structure and identifying the first concrete changes needed for navigation and Objectives.

