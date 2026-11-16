# Pixel Bang

Local text-to-image command-line app that turns written prompts into generated images, running entirely on my own computer.

**Objectives:** AI 1, AI 4  
**Status:** Public implementation source; prompt/output documentation pending  
**Tools:** Python 3.12+, PyTorch, Hugging Face diffusers, transformers, accelerate; Stability AI SDXL-Turbo; uv

**Objective connection (AI 1, AI 4):** Integrates a pretrained deep-learning diffusion model into a working local application.

## Review links

- [GitHub repository](https://github.com/JerrodBolton/pixel-bag)
- [Inspected snapshot](https://github.com/JerrodBolton/pixel-bag/tree/ba0189709d74d348c290c9714d676c9bc10317a2)
- [Commit history](https://github.com/JerrodBolton/pixel-bag/commits/main/)
- [Source code: generate.py](https://github.com/JerrodBolton/pixel-bag/blob/ba0189709d74d348c290c9714d676c9bc10317a2/generate.py)
- [Dependencies: pyproject.toml](https://github.com/JerrodBolton/pixel-bag/blob/ba0189709d74d348c290c9714d676c9bc10317a2/pyproject.toml)
- [Sample output: outputs/cabin.png](https://github.com/JerrodBolton/pixel-bag/blob/ba0189709d74d348c290c9714d676c9bc10317a2/outputs/cabin.png)

## Present in the reviewed source

- `generate.py` loads the `stabilityai/sdxl-turbo` model with `AutoPipelineForText2Image` in half precision (fp16).
- Uses the Apple Silicon GPU (MPS) when available, then CUDA, then CPU.
- Command-line options: the prompt, `--steps` (default 2; 1–4 suits Turbo), `--seed` for repeatable results and `--out` for the file path.
- Images save as PNG files in `outputs/`; three generated images are committed there.
- Code comments explain the pipeline parts: text encoder, UNet denoiser, VAE and scheduler.

## Next work

- [ ] Add a README to the repository (it is currently empty) with setup and usage.
- [ ] Record the prompt, seed and step count behind each saved output.
- [ ] Write up how the diffusion pipeline works and how it is integrated.
- [ ] Optional: replace the placeholder `src/hf_image_gen/__init__.py` or remove the unused `hf-image-gen` script entry.

## Evidence boundary

Source inspected November 16, 2026; it was not run here. `src/hf_image_gen/__init__.py` is still the uv template placeholder, so the working entry point is `generate.py`. The prompts used for the committed outputs are not recorded.

## Running it

```sh
uv run generate.py "a cozy cabin in a snowy forest, golden hour"
uv run generate.py "a corgi astronaut" --steps 4 --seed 42 --out corgi.png
```

The model weights download once to `~/.cache/huggingface`. SDXL-Turbo fits in about 16 GB of memory.

_These steps come from the usage notes in `generate.py`; they have not been run as a test._

## Project folder

- `images/` — screenshots, logos, diagrams and other pictures
- `code/` — working code. The current code is on GitHub at https://github.com/JerrodBolton/pixel-bag; clone it or copy files here to work on it
- `docs/` — notes, test results, write-ups and other evidence

---

- [All projects and the Boards plan](../../README.md#5-boards-project-plan--ai-and-acs)
