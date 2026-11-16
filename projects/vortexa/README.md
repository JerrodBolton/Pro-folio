# VORTEXA

Desktop local-LLM assistant with a chat interface, model switching and session conversation history.

**Objectives:** AI 2, AI 6  
**Status:** Public implementation source; runtime/evaluation pending  
**Tools:** Python, CustomTkinter, llama-cpp-python, Pillow; GGUF models

## Review links

- [GitHub repository](https://github.com/JerrodBolton/Python-II-class)
- [Inspected snapshot](https://github.com/JerrodBolton/Python-II-class/tree/11bb8112f01da9d7c5331e08954aa438f09e5ba1)
- [Commit history](https://github.com/JerrodBolton/Python-II-class/commits/main/)
- [Source code: Vortexa IIII/main.py](https://github.com/JerrodBolton/Python-II-class/blob/11bb8112f01da9d7c5331e08954aa438f09e5ba1/Vortexa%20IIII/main.py)
- [Source code: Vortexa IIII/llm.py](https://github.com/JerrodBolton/Python-II-class/blob/11bb8112f01da9d7c5331e08954aa438f09e5ba1/Vortexa%20IIII/llm.py)
- [Dependencies: Vortexa IIII/requirements.txt](https://github.com/JerrodBolton/Python-II-class/blob/11bb8112f01da9d7c5331e08954aa438f09e5ba1/Vortexa%20IIII/requirements.txt)
- [Source code: Vortexa IIII/hub.py](https://github.com/JerrodBolton/Python-II-class/blob/11bb8112f01da9d7c5331e08954aa438f09e5ba1/Vortexa%20IIII/hub.py)

## Present in the reviewed source

- Vortexa IIII contains a modular GUI, worker threads/queues, model loading and streamed responses.
- llm.py configures Dolphin3.0-Llama3.1-8B_Q5_K_M.gguf as preferred model, with fallback to available GGUF files.
- A system persona, recent message history and token-budget trimming are implemented.

## Next work

- [ ] Save before/after NLP behavior tests and document personal contribution.
- [ ] Confirm actual installed model, hardware and dependency setup.
- [ ] Demonstrate LLM integration for AI 6; does not itself supply genetic algorithms.

## Evidence boundary

Model weights are not established as included. Configuration is evidence of integration code, not proof of installed weights or measured performance. Multiple folders are iterations of one project.

## Running it

In the Python-II-class repository, enter `Vortexa IIII`, create an environment, install its `requirements.txt`, add a compatible GGUF model under `models`, and run `python main.py`.

**Still required:** Hardware-specific llama-cpp setup, model license/weights and actual run verification.

_These steps were inferred from the files; they have not been run as a test._

## Project folder

- `index.html` — the VORTEXA page on the website
- `images/VORTEXA_logo.png` — full-size logo
- `images/vortexa-logo-web.jpg` — smaller logo used on the website
- `images/` — screenshots, logos, diagrams and other pictures
- `code/` — working code. The current code is on GitHub at https://github.com/JerrodBolton/Python-II-class; clone it or copy files here to work on it
- `docs/` — notes, test results, write-ups and other evidence

---

- [All projects and the Boards plan](../../README.md#5-boards-project-plan--ai-and-acs)
- [Project page on the website](index.html)
