# WILDSIGHT

Planned animal-image classifier that predicts cat, dog or bird from an uploaded photo.

**Objectives:** AI 4, AI 5  
**Status:** Planned; not built  
**Tools:** Proposed: Python, small CNN and image-upload interface

**Implementation link:** Not located. Keep the source/demo button absent until a real link is available.

## Next work

- [ ] Choose a licensed dataset and remove duplicate images.
- [ ] Create separate train/validation/test sets, then train a small CNN.
- [ ] Save learning curves, a confusion matrix, per-class results and errors.
- [ ] Add upload interface after model evaluation; explain limitations.

## Evidence boundary

No repository, dataset or trained model located. The current evidence is the approved project plan.

## Build plan

**Placements:** AI 4 and AI 5.  
**Status:** Planned; not yet built.

WILDSIGHT will accept an uploaded animal photo and predict **cat, dog or bird**, using a small convolutional neural network (CNN).

### First version

1. Choose a labeled image dataset with suitable usage terms and document its source.
2. Remove duplicate images and create separate training, validation and test sets.
3. Prepare images consistently. Apply training augmentation only to training data.
4. Train a small CNN and save the model and settings.
5. Plot training and validation loss and accuracy.
6. Evaluate once on the reserved test set after model selection. Report per-class performance and examples of mistakes.
7. Add a simple image-upload interface after the model works.

### Evidence to save

- Dataset source, class counts and split method.
- Model architecture and explanation of convolution, pooling and classification layers used.
- Training code, settings, saved model and learning curves.
- Test results, a confusion matrix and incorrect predictions.
- Limitations, including that an image outside the three categories may still receive one of those labels.
- A working demonstration of image upload and prediction.

## Project folder

- `images/` — screenshots, logos, diagrams and other pictures
- `code/` — put the project's code here (no public source has been found yet)
- `docs/` — notes, test results, write-ups and other evidence

---

- [All projects and the Boards plan](../../README.md#5-boards-project-plan--ai-and-acs)
