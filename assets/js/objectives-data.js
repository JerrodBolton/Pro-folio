/* ==========================================================
   Degree objectives + evidence data
   ----------------------------------------------------------
   1. OBJECTIVES  — official UAT wording (Spring 2026). Copied
      verbatim. Do NOT edit, shorten, or paraphrase.
   2. PROJECTS    — editable project details. Fill these in as
      verified evidence becomes available.
   3. MAPPINGS    — which projects support which objective, with
      an explanation specific to that objective.
      status: "verified"  → confirmed against real evidence
              "suggested" → shows "Suggested match · not verified"
   ========================================================== */

const OBJECTIVES = {
  ai: {
    name: "Artificial Intelligence",
    short: "AI",
    items: [
      "Create and integrate cognitive artificial intelligence into applications.",
      "Create and evolve natural language processing systems.",
      "Demonstrate proficiency in designing and developing machine learning systems using industry approaches and patterns.",
      "Design and employ deep learning systems using best practices and conventions.",
      "Demonstrate a deep understanding of neural networks and their role in creating intelligent systems.",
      "Design, create, or integrate reinforcement learning, large language models, and genetic algorithms in intelligent software.",
    ],
  },
  acs: {
    name: "Advancing Computer Science",
    short: "ACS",
    items: [
      "Document a software development process to analyze a problem and to design, build and test software solutions.",
      "Demonstrate software development skills using more than one programming language and development environment.",
      "Implement data-driven solutions.",
      "Design and implement software solutions for multiple platforms including mobile devices.",
      "Design, develop, and maintain object-oriented software solutions utilizing inheritance, encapsulation, polymorphism, and abstraction.",
      "Within software solutions, describe, implement and analyze data structure techniques.",
    ],
  },
};

/* Leave a field empty ("" or []) and the page shows "Evidence to be added". */
const PROJECTS = {
  "animai-kingdom": {
    title: "Animai Kingdom",
    summary: "AI desk companion project — my Student Innovation Project.",
    page: "projects/animai-kingdom.html",
    contribution: "",
    tools: "",
    evidence: [
      // { type: "Screenshot", label: "Companion home screen", href: "assets/images/animai-home.jpg" },
      // { type: "Demo video", label: "Two-minute walkthrough", href: "https://…" },
      // { type: "Source code", label: "GitHub repository", href: "https://github.com/…" },
    ],
    results: "",
    reflection: "",
  },
  "local-ai-assistant": {
    title: "Local AI Assistant",
    summary: "Local AI assistant project. (Working title — confirm the current name.)",
    page: "projects/local-ai-assistant.html",
    contribution: "",
    tools: "",
    evidence: [],
    results: "",
    reflection: "",
  },
  "data-structures-coursework": {
    title: "Data Structures coursework",
    summary: "Stack and Queue trace exercises from CS coursework.",
    page: "",
    contribution: "",
    tools: "",
    evidence: [],
    results: "",
    reflection: "",
  },
};

/* Key format: "<degree>-<number>", e.g. "ai-1", "acs-6".
   Every match below is a SUGGESTION to review — none is verified yet. */
const MAPPINGS = {
  "ai-1": [
    {
      project: "animai-kingdom",
      status: "suggested",
      connection: "Possible match: Animai Kingdom brings AI companions into an application. Confirm which AI features are working and what you built.",
    },
    {
      project: "local-ai-assistant",
      status: "suggested",
      connection: "Possible match: the assistant integrates AI into a usable application. Confirm what it does today.",
    },
  ],
  "ai-2": [
    {
      project: "local-ai-assistant",
      status: "suggested",
      connection: "Possible match if the assistant understands or generates natural-language requests. Confirm the NLP work you did.",
    },
  ],
  "ai-6": [
    {
      project: "local-ai-assistant",
      status: "suggested",
      connection: "Possible match if the assistant runs or integrates a large language model. Confirm the model and how you integrated it.",
    },
  ],
  "acs-2": [
    {
      project: "animai-kingdom",
      status: "suggested",
      connection: "Possible match: compare the languages and development environments used across your projects. Confirm which ones apply.",
    },
  ],
  "acs-6": [
    {
      project: "data-structures-coursework",
      status: "suggested",
      connection: "Possible match: Stack and Queue trace exercises describe and analyze data structure techniques. Add the assignment files as evidence.",
    },
  ],
};
