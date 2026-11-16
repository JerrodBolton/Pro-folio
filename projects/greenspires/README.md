# Greenspires

Mobile journaling prototype that connects reflection entries to growth of a virtual plant.

**Objectives:** AI 1, ACS 4  
**Status:** Public prototype source; AI feature planned  
**Tools:** TypeScript, React Native, Expo, React Navigation, AsyncStorage, Expo SecureStore

**Objective connection (AI 1):** AI journaling feature is planned; the AI integration must be implemented and demonstrated.

## Review links

- [GitHub repository](https://github.com/JerrodBolton/Greenspires)
- [Inspected snapshot](https://github.com/JerrodBolton/Greenspires/tree/23aae1df5e4975d730ff26bb4f1f2619c78b8138)
- [Commit history](https://github.com/JerrodBolton/Greenspires/commits/main/)
- [README: readme.md](https://github.com/JerrodBolton/Greenspires/blob/23aae1df5e4975d730ff26bb4f1f2619c78b8138/readme.md)
- [Source code: App.tsx](https://github.com/JerrodBolton/Greenspires/blob/23aae1df5e4975d730ff26bb4f1f2619c78b8138/App.tsx)
- [Source code: screens/HomeScreen.tsx](https://github.com/JerrodBolton/Greenspires/blob/23aae1df5e4975d730ff26bb4f1f2619c78b8138/screens/HomeScreen.tsx)
- [Dependencies: package.json](https://github.com/JerrodBolton/Greenspires/blob/23aae1df5e4975d730ff26bb4f1f2619c78b8138/package.json)
- [Source code: storage/plantStorage.ts](https://github.com/JerrodBolton/Greenspires/blob/23aae1df5e4975d730ff26bb4f1f2619c78b8138/storage/plantStorage.ts)
- [Demo video: screenshots/ScreenRecording_08-14-2026 23-14-17_1.MP4](https://github.com/JerrodBolton/Greenspires/blob/23aae1df5e4975d730ff26bb4f1f2619c78b8138/screenshots/ScreenRecording_08-14-2026%2023-14-17_1.MP4)

## Present in the reviewed source

- Plant selection/naming and locally stored plant state.
- Session reflection entries, growth points/stages and reset flow.
- Onboarding, home and settings screens; screenshots and a recording are present.

## Next work

- [ ] Optional: implement AI-generated reflection replies (not part of its current ACS 4 placement).
- [ ] Persist journal history; currently entries are held in screen state.
- [ ] Run/document iOS or Android and desktop/mobile checks; scripts alone do not prove tested devices.

## Evidence boundary

No AI integration found in the reviewed HomeScreen implementation. Mobile runtime and authorship/contribution were not independently tested.

## Running it

The README documents `npm install`, then `npm start`; package.json has Android, iOS and web scripts.

**Still required:** Compatible Expo environment/device and recorded platform checks.

_These steps were inferred from the files; they have not been run as a test._

## Project folder

- `images/` — screenshots, logos, diagrams and other pictures
- `code/` — working code. The current code is on GitHub at https://github.com/JerrodBolton/Greenspires; clone it or copy files here to work on it
- `docs/` — notes, test results, write-ups and other evidence

---

- [All projects and the Boards plan](../../README.md#5-boards-project-plan--ai-and-acs)
