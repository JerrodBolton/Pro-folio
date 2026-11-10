# Boards Personal Website · Claude handoff

This handoff covers the About Me and Contact pages, the public resume download, and the pending portrait. Use it alongside the portfolio build guide.

## Who does what

- **Jerrod Bolton** owns the portfolio and decides when changes go live.
- **ChatGPT** organizes the requirements, prepares the copy and assets, and reviews the result.
- **Claude** implements and tests the website changes. Prepare them for Jerrod to review before merging or deploying.

## Where to pick up

- [Portfolio repository](https://github.com/JerrodBolton/Pro-folio)
- [Draft pull request #1](https://github.com/JerrodBolton/Pro-folio/pull/1) on branch `portfolio-about-contact`

The draft already contains the About Me bio and Contact page copy. Start by checking that branch so you can build on the existing work. The public resume and its download button still need to be added. The portrait is pending until Jerrod supplies the photo.

## About Me · `about.html`

Use the resume summary as the opening bio, followed by the background, education, and experience. Keep the copy in first person.

**Opening bio**

> I’m an Artificial Intelligence and Advancing Computer Science student at the University of Advancing Technology. My experience includes recruitment outreach, teaching software engineering, supporting IT procurement, and leading AI projects.

**Background**

> I enjoy making technical concepts easier to understand, whether I’m teaching beginners or working with a project team. I’m interested in helping people see how AI and automation can solve practical problems.

**Education**

> University of Advancing Technology, Tempe, Arizona · Expected graduation May 2027

**Skills and experience**

> My technical work includes Python, JavaScript, Java, React, and Firebase. I’ve taught software engineering at Persevere, supported IT procurement with Arizona ASET, and led Animai Kingdom, a team project to develop an AI desk companion.

Add Jerrod’s portrait to the Background section once he provides it. Use `Jerrod Bolton` as the alt text.

### Resume download

- Use [Jerrod-Bolton-Public-Resume.pdf](https://chatgpt.com/library?file_id=libfile_7afbac364bdc81919ecc419ba8e8b8ae&account_id=personal). Jerrod can download the file and attach it to Claude if Claude needs the PDF itself.
- Place the PDF at `assets/documents/Jerrod-Bolton-Public-Resume.pdf` and link to that local asset from the **Download Resume (PDF)** button.
- Place **Connect on LinkedIn** beside the download button and point it to [Jerrod’s LinkedIn](https://www.linkedin.com/in/jerrodbolton/).
- Publish only the public copy of the PDF. It has Jerrod’s phone number and email removed from the visible page, searchable text, and links. Keep those details out of the website copy and source files.

## Contact · `contact.html`

**Page heading** — Contact Jerrod Bolton

**Page copy**

> I’m an Artificial Intelligence and Advancing Computer Science student at the University of Advancing Technology in Tempe, Arizona. My experience includes leading AI projects, teaching software engineering, and supporting IT procurement. Reach out to talk about AI, software projects, or opportunities to work together.

- **Connect on LinkedIn** is the primary contact button. [LinkedIn](https://www.linkedin.com/in/jerrodbolton/)
- **View my GitHub** is the secondary button. [GitHub](https://github.com/jerrodbolton)

## Review before handoff

- [ ] Confirm the About Me page starts with the resume-based bio.
- [ ] Confirm the **Download Resume (PDF)** button downloads the public PDF from the site preview.
- [ ] Open the downloaded PDF and confirm the phone number and email are absent.
- [ ] Check the LinkedIn and GitHub buttons and the layout on desktop and mobile.
- [ ] Share the updated draft for Jerrod’s review.
