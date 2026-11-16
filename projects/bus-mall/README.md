# Bus Mall

Product-voting application that counts image views/selections, plots results and saves voting data.

**Objectives:** ACS 3, ACS 6  
**Status:** Public implementation source; image assets missing  
**Tools:** HTML, CSS, JavaScript, Chart.js, localStorage

## Review links

- [GitHub repository](https://github.com/JerrodBolton/busmall3)
- [Inspected snapshot](https://github.com/JerrodBolton/busmall3/tree/e7b76205357ed06ad0b09bbac4dbacf4e7384a04)
- [Commit history](https://github.com/JerrodBolton/busmall3/commits/main/)
- [README: README.md](https://github.com/JerrodBolton/busmall3/blob/e7b76205357ed06ad0b09bbac4dbacf4e7384a04/README.md)
- [Source code: java.js](https://github.com/JerrodBolton/busmall3/blob/e7b76205357ed06ad0b09bbac4dbacf4e7384a04/java.js)
- [Source code: index.html](https://github.com/JerrodBolton/busmall3/blob/e7b76205357ed06ad0b09bbac4dbacf4e7384a04/index.html)

## Present in the reviewed source

- ItemImage objects store name, file path, timesShown and timesSelected in an array.
- Displays three choices and ends after ten selections; prepares a Chart.js bar chart.
- Serializes and restores the product array through localStorage.

## Next work

- [ ] Restore images: code expects images/*.jpg, but no images directory exists in the reviewed tree.
- [ ] Run voting/chart/storage tests and document contribution.
- [ ] Explain array traversal and update costs for ACS 6.

## Evidence boundary

The file java.js is JavaScript, not Java. Missing images prevent the intended visual demo until restored.

## Running it

Serve the repository as a static site and open `index.html`.

**Still required:** Restore image assets and verify chart/storage behavior.

_These steps were inferred from the files; they have not been run as a test._

## Project folder

- `images/` — screenshots, logos, diagrams and other pictures
- `code/` — working code. The current code is on GitHub at https://github.com/JerrodBolton/busmall3; clone it or copy files here to work on it
- `docs/` — notes, test results, write-ups and other evidence

---

- [All projects and the Boards plan](../../README.md#5-boards-project-plan--ai-and-acs)
