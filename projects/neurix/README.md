# NEURIX

Planned learning assistant that predicts reminder, learning-help, planning or motivation intent from a message.

**Objectives:** AI 3, AI 5  
**Status:** Planned; not built  
**Tools:** Proposed: Python, small neural-network classifier and desktop GUI

**Implementation link:** Not located. Keep the source/demo button absent until a real link is available.

## Next work

- [ ] Create labeled sentences and separate training/validation/test sets.
- [ ] Train a neural classifier and show predicted intent with a confidence score.
- [ ] Save corrections for deliberate retraining; compare held-out results.
- [ ] Explain architecture, learning, errors and limitations.

## Evidence boundary

No repository or implementation located; do not show a GitHub or demo button until a real destination exists.

## Build plan

**Placements:** AI 3 and AI 5.  
**Status:** Planned; not yet built.

NEURIX will use a VORTEXA-inspired chat interface, but its central task is training a small neural network to classify the intent of a message. It remains a separate project from VORTEXA.

| Example input | Intended category |
|---|---|
| “Remind me to study Java.” | Reminder |
| “Explain binary search.” | Learning help |
| “Help me organize tonight.” | Planning |
| “I need some encouragement.” | Motivation |

### First version

1. Create labeled example sentences for the four categories.
2. Keep separate training, validation and test examples. Remove duplicate or near-duplicate examples across splits.
3. Train a small neural-network classifier.
4. Display its predicted intent and model confidence score.
5. Let the user correct a prediction and save that correction for later training.
6. Retrain deliberately; saving a correction does not automatically change the model.
7. Compare the original and improved model on the same held-out evaluation data. Do not train on that test set.

### Evidence to save

- Dataset labels, split method and class counts.
- Training code, saved model and settings.
- Baseline and improved evaluation results.
- Correct and incorrect predictions.
- A network diagram explaining inputs, layers, outputs, learning and limitations.
- An explanation that a model confidence score is not a guarantee of correctness.

## Project folder

- `images/` — screenshots, logos, diagrams and other pictures
- `code/` — put the project's code here (no public source has been found yet)
- `docs/` — notes, test results, write-ups and other evidence

---

- [All projects and the Boards plan](../../README.md#5-boards-project-plan--ai-and-acs)
