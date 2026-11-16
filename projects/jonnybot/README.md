# Jonnybot

Grid-based security-robot simulation that explores actions and updates a Q-table from cell rewards.

**Objectives:** AI 3, AI 6  
**Status:** Public Q-learning source; evaluation and GA extension pending  
**Tools:** Python, Tkinter, random; tabular Q-learning

## Review links

- [GitHub repository](https://github.com/JerrodBolton/AI_Class)
- [Inspected snapshot](https://github.com/JerrodBolton/AI_Class/tree/38f55e2eeff88464f84337e716baadff07c55eb3)
- [Commit history](https://github.com/JerrodBolton/AI_Class/commits/main/)
- [Source code: app.py](https://github.com/JerrodBolton/AI_Class/blob/38f55e2eeff88464f84337e716baadff07c55eb3/app.py)

## Present in the reviewed source

- 6-by-10 grid, four movement actions and a per-state action-value dictionary.
- Q-learning update with learning_rate=0.1, discount_factor=0.9 and epsilon=0.2 in the reviewed public version.
- User-controlled episode move count, timed steps, start/reset controls, reward cells including +500.

## Next work

- [ ] Collect repeatable learning comparisons and persist the Q-table if needed.
- [ ] Fix/verify reward reporting: total_reward is not updated in the reviewed file.
- [ ] Add and evaluate the proposed genetic patrol-route optimizer for AI 6.

## Evidence boundary

Earlier notes used epsilon=0.7; public app.py currently uses 0.2. The +500 value is a fixed cell reward, not evidence of a moving target/catch system. No GA implementation was found.

## Running it

In AI_Class, run `python app.py` in a Python environment with Tkinter.

**Still required:** Desktop display and learning/result checks; no trained model file is required for the tabular implementation.

_These steps were inferred from the files; they have not been run as a test._

## Project folder

- `images/` — screenshots, logos, diagrams and other pictures
- `code/` — working code. The current code is on GitHub at https://github.com/JerrodBolton/AI_Class; clone it or copy files here to work on it
- `docs/` — notes, test results, write-ups and other evidence

---

- [All projects and the Boards plan](../../README.md#5-boards-project-plan--ai-and-acs)
