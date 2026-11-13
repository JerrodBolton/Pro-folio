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
    // Has its own website: objective entries link straight there
    // instead of opening the detail view. URL lives in site-config.js.
    externalUrl: (window.SITE_CONFIG || {}).ANIMAI_KINGDOM_URL || "http://animaikingdom.com",
    page: "",
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
  "pixel-bang": {
    "title": "Pixel Bang",
    "summary": "Local text-to-image project intended to turn written prompts into generated images. Status: Reported local project; public code not located.",
    "page": "",
    "contribution": "",
    "tools": "Python/local image-generation stack — verify model and libraries",
    "evidence": [],
    "results": "",
    "reflection": ""
  },
  "greenspires": {
    "title": "Greenspires",
    "summary": "Mobile journaling prototype that connects reflection entries to growth of a virtual plant. Status: Public prototype source; AI feature planned.",
    "page": "",
    "contribution": "",
    "tools": "TypeScript, React Native, Expo, React Navigation, AsyncStorage, Expo SecureStore",
    "evidence": [
      {
        "type": "GitHub",
        "label": "Repository",
        "href": "https://github.com/JerrodBolton/Greenspires"
      },
      {
        "type": "README",
        "label": "readme.md",
        "href": "https://github.com/JerrodBolton/Greenspires/blob/23aae1df5e4975d730ff26bb4f1f2619c78b8138/readme.md"
      },
      {
        "type": "Source code",
        "label": "App.tsx",
        "href": "https://github.com/JerrodBolton/Greenspires/blob/23aae1df5e4975d730ff26bb4f1f2619c78b8138/App.tsx"
      },
      {
        "type": "Source code",
        "label": "screens/HomeScreen.tsx",
        "href": "https://github.com/JerrodBolton/Greenspires/blob/23aae1df5e4975d730ff26bb4f1f2619c78b8138/screens/HomeScreen.tsx"
      },
      {
        "type": "Dependencies",
        "label": "package.json",
        "href": "https://github.com/JerrodBolton/Greenspires/blob/23aae1df5e4975d730ff26bb4f1f2619c78b8138/package.json"
      },
      {
        "type": "Source code",
        "label": "storage/plantStorage.ts",
        "href": "https://github.com/JerrodBolton/Greenspires/blob/23aae1df5e4975d730ff26bb4f1f2619c78b8138/storage/plantStorage.ts"
      },
      {
        "type": "Demo video",
        "label": "screenshots/ScreenRecording_08-14-2026 23-14-17_1.MP4",
        "href": "https://github.com/JerrodBolton/Greenspires/blob/23aae1df5e4975d730ff26bb4f1f2619c78b8138/screenshots/ScreenRecording_08-14-2026%2023-14-17_1.MP4"
      }
    ],
    "results": "",
    "reflection": ""
  },
  "local-ai-assistant": {
    "title": "VORTEXA",
    "summary": "Desktop local-LLM assistant with a chat interface, model switching and session conversation history. Status: Public implementation source; runtime/evaluation pending.",
    "page": "projects/local-ai-assistant.html",
    "contribution": "",
    "tools": "Python, CustomTkinter, llama-cpp-python, Pillow; GGUF models",
    "evidence": [
      {
        "type": "GitHub",
        "label": "Repository",
        "href": "https://github.com/JerrodBolton/Python-II-class"
      },
      {
        "type": "Source code",
        "label": "Vortexa IIII/main.py",
        "href": "https://github.com/JerrodBolton/Python-II-class/blob/11bb8112f01da9d7c5331e08954aa438f09e5ba1/Vortexa%20IIII/main.py"
      },
      {
        "type": "Source code",
        "label": "Vortexa IIII/llm.py",
        "href": "https://github.com/JerrodBolton/Python-II-class/blob/11bb8112f01da9d7c5331e08954aa438f09e5ba1/Vortexa%20IIII/llm.py"
      },
      {
        "type": "Dependencies",
        "label": "Vortexa IIII/requirements.txt",
        "href": "https://github.com/JerrodBolton/Python-II-class/blob/11bb8112f01da9d7c5331e08954aa438f09e5ba1/Vortexa%20IIII/requirements.txt"
      },
      {
        "type": "Source code",
        "label": "Vortexa IIII/hub.py",
        "href": "https://github.com/JerrodBolton/Python-II-class/blob/11bb8112f01da9d7c5331e08954aa438f09e5ba1/Vortexa%20IIII/hub.py"
      }
    ],
    "results": "",
    "reflection": ""
  },
  "python-speech-to-text": {
    "title": "Python II Speech-to-Text",
    "summary": "Speech transcription and spoken-response prototype with interruption handling. Status: Public speech prototype source; runtime/evaluation pending.",
    "page": "",
    "contribution": "",
    "tools": "Python, RealtimeSTT, RealtimeTTS/Kokoro, faster-whisper",
    "evidence": [
      {
        "type": "GitHub",
        "label": "Repository",
        "href": "https://github.com/JerrodBolton/Python-II-class"
      },
      {
        "type": "README",
        "label": "week three/readme.md",
        "href": "https://github.com/JerrodBolton/Python-II-class/blob/11bb8112f01da9d7c5331e08954aa438f09e5ba1/week%20three/readme.md"
      },
      {
        "type": "Source code",
        "label": "week three/TTSandSTT.py",
        "href": "https://github.com/JerrodBolton/Python-II-class/blob/11bb8112f01da9d7c5331e08954aa438f09e5ba1/week%20three/TTSandSTT.py"
      },
      {
        "type": "Dependencies",
        "label": "week three/requirements.txt",
        "href": "https://github.com/JerrodBolton/Python-II-class/blob/11bb8112f01da9d7c5331e08954aa438f09e5ba1/week%20three/requirements.txt"
      }
    ],
    "results": "",
    "reflection": ""
  },
  "jonnybot": {
    "title": "Jonnybot",
    "summary": "Grid-based security-robot simulation that explores actions and updates a Q-table from cell rewards. Status: Public Q-learning source; evaluation and GA extension pending.",
    "page": "",
    "contribution": "",
    "tools": "Python, Tkinter, random; tabular Q-learning",
    "evidence": [
      {
        "type": "GitHub",
        "label": "Repository",
        "href": "https://github.com/JerrodBolton/AI_Class"
      },
      {
        "type": "Source code",
        "label": "app.py",
        "href": "https://github.com/JerrodBolton/AI_Class/blob/38f55e2eeff88464f84337e716baadff07c55eb3/app.py"
      }
    ],
    "results": "",
    "reflection": ""
  },
  "neurix": {
    "title": "NEURIX",
    "summary": "Planned learning assistant that predicts reminder, learning-help, planning or motivation intent from a message. Status: Planned; not built.",
    "page": "",
    "contribution": "",
    "tools": "Proposed: Python, small neural-network classifier and desktop GUI",
    "evidence": [],
    "results": "",
    "reflection": ""
  },
  "wildsight": {
    "title": "WILDSIGHT",
    "summary": "Planned animal-image classifier that predicts cat, dog or bird from an uploaded photo. Status: Planned; not built.",
    "page": "",
    "contribution": "",
    "tools": "Proposed: Python, small CNN and image-upload interface",
    "evidence": [],
    "results": "",
    "reflection": ""
  },
  "safe-bank": {
    "title": "Safe Bank",
    "summary": "Educational banking prototype created with Robert to practice deposits, withdrawals and balance calculations. Status: Public prototype source and planning evidence; fixes pending.",
    "page": "",
    "contribution": "",
    "tools": "HTML, CSS, JavaScript, DOM events, browser storage",
    "evidence": [
      {
        "type": "GitHub",
        "label": "Repository",
        "href": "https://github.com/JerrodBolton/Jerrod_Robert.safebank"
      },
      {
        "type": "README",
        "label": "README.md",
        "href": "https://github.com/JerrodBolton/Jerrod_Robert.safebank/blob/8175c0398573739fa5cade758ed29b3de49e9c65/README.md"
      },
      {
        "type": "Source code",
        "label": "mySafe.js",
        "href": "https://github.com/JerrodBolton/Jerrod_Robert.safebank/blob/8175c0398573739fa5cade758ed29b3de49e9c65/mySafe.js"
      },
      {
        "type": "Source code",
        "label": "mySafe.html",
        "href": "https://github.com/JerrodBolton/Jerrod_Robert.safebank/blob/8175c0398573739fa5cade758ed29b3de49e9c65/mySafe.html"
      },
      {
        "type": "Wireframe",
        "label": "img/Wireframe.jpeg",
        "href": "https://github.com/JerrodBolton/Jerrod_Robert.safebank/blob/8175c0398573739fa5cade758ed29b3de49e9c65/img/Wireframe.jpeg"
      }
    ],
    "results": "",
    "reflection": ""
  },
  "boards-personal-website": {
    "title": "Boards Personal Website",
    "summary": "Personal portfolio showing projects, degree objectives, About, contact and SIP links. Status: Public website source; deployment/device checks pending.",
    "page": "",
    "contribution": "",
    "tools": "HTML, CSS, JavaScript; data-driven objective cards",
    "evidence": [
      {
        "type": "GitHub",
        "label": "Repository",
        "href": "https://github.com/JerrodBolton/Pro-folio"
      },
      {
        "type": "README",
        "label": "README.md",
        "href": "https://github.com/JerrodBolton/Pro-folio/blob/19c8c7391992b052ba8c45ec615627943c519cc9/README.md"
      },
      {
        "type": "Source code",
        "label": "index.html",
        "href": "https://github.com/JerrodBolton/Pro-folio/blob/19c8c7391992b052ba8c45ec615627943c519cc9/index.html"
      },
      {
        "type": "Source code",
        "label": "portfolio.html",
        "href": "https://github.com/JerrodBolton/Pro-folio/blob/19c8c7391992b052ba8c45ec615627943c519cc9/portfolio.html"
      },
      {
        "type": "Source code",
        "label": "objectives.html",
        "href": "https://github.com/JerrodBolton/Pro-folio/blob/19c8c7391992b052ba8c45ec615627943c519cc9/objectives.html"
      },
      {
        "type": "Source code",
        "label": "assets/js/objectives-data.js",
        "href": "https://github.com/JerrodBolton/Pro-folio/blob/19c8c7391992b052ba8c45ec615627943c519cc9/assets/js/objectives-data.js"
      },
      {
        "type": "Source code",
        "label": "assets/js/site-config.js",
        "href": "https://github.com/JerrodBolton/Pro-folio/blob/19c8c7391992b052ba8c45ec615627943c519cc9/assets/js/site-config.js"
      }
    ],
    "results": "",
    "reflection": ""
  },
  "java-inheritance": {
    "title": "Java Inheritance Assignment",
    "summary": "Reported Java class-hierarchy assignment intended to demonstrate inheritance and other OOP concepts. Status: Reported coursework; exact source not located.",
    "page": "",
    "contribution": "",
    "tools": "Java and development environment — unverified",
    "evidence": [],
    "results": "",
    "reflection": ""
  },
  "iot-hydration-alarm": {
    "title": "IoT Hydration Tilt Alarm",
    "summary": "Reported sensor-triggered hydration reminder whose exact source still needs uploading or identifying. Status: Reported project; exact hydration implementation not located.",
    "page": "",
    "contribution": "",
    "tools": "Exact hydration stack unverified; related IoT work uses Arduino C++/M5Core2",
    "evidence": [],
    "results": "",
    "reflection": ""
  },
  "cookie-salmon": {
    "title": "Cookie Salmon",
    "summary": "Store-sales estimator that calculates hourly cookie sales from simulated customer counts and average purchases. Status: Public data-processing source; demo/tests pending.",
    "page": "",
    "contribution": "",
    "tools": "HTML, CSS, JavaScript, constructor/prototype methods, arrays",
    "evidence": [
      {
        "type": "GitHub",
        "label": "Repository",
        "href": "https://github.com/JerrodBolton/20220728-CookieSalmonProject"
      },
      {
        "type": "README",
        "label": "README.md",
        "href": "https://github.com/JerrodBolton/20220728-CookieSalmonProject/blob/463898f38f0fd6623b12c6a7daae585a854fa008/README.md"
      },
      {
        "type": "Source code",
        "label": "main.js",
        "href": "https://github.com/JerrodBolton/20220728-CookieSalmonProject/blob/463898f38f0fd6623b12c6a7daae585a854fa008/main.js"
      },
      {
        "type": "Source code",
        "label": "sales.html",
        "href": "https://github.com/JerrodBolton/20220728-CookieSalmonProject/blob/463898f38f0fd6623b12c6a7daae585a854fa008/sales.html"
      }
    ],
    "results": "",
    "reflection": ""
  },
  "bus-mall": {
    "title": "Bus Mall",
    "summary": "Product-voting application that counts image views/selections, plots results and saves voting data. Status: Public implementation source; image assets missing.",
    "page": "",
    "contribution": "",
    "tools": "HTML, CSS, JavaScript, Chart.js, localStorage",
    "evidence": [
      {
        "type": "GitHub",
        "label": "Repository",
        "href": "https://github.com/JerrodBolton/busmall3"
      },
      {
        "type": "README",
        "label": "README.md",
        "href": "https://github.com/JerrodBolton/busmall3/blob/e7b76205357ed06ad0b09bbac4dbacf4e7384a04/README.md"
      },
      {
        "type": "Source code",
        "label": "java.js",
        "href": "https://github.com/JerrodBolton/busmall3/blob/e7b76205357ed06ad0b09bbac4dbacf4e7384a04/java.js"
      },
      {
        "type": "Source code",
        "label": "index.html",
        "href": "https://github.com/JerrodBolton/busmall3/blob/e7b76205357ed06ad0b09bbac4dbacf4e7384a04/index.html"
      }
    ],
    "results": "",
    "reflection": ""
  },
  "java-bst": {
    "title": "Java Generics and Binary Search Tree",
    "summary": "Reported Java binary-search-tree coursework intended to demonstrate data structures and OOP design. Status: Reported coursework; exact source not located.",
    "page": "",
    "contribution": "",
    "tools": "Java, generics and tree data structures — implementation unverified",
    "evidence": [],
    "results": "",
    "reflection": ""
  },
};

/* Key format: "<degree>-<number>", e.g. "ai-1", "acs-6".
   Two projects per objective, from README-Boards-Project-Plan.md (Nov 12, 2026).
   Every match is still a SUGGESTION — keep status "suggested" until the
   objective evidence and personal contribution have been reviewed. */
const MAPPINGS = {
  "ai-1": [
    {
      "project": "pixel-bang",
      "status": "suggested",
      "connection": "Integrates a local image model; verify model and outputs."
    },
    {
      "project": "greenspires",
      "status": "suggested",
      "connection": "AI reflection replies are planned; mobile prototype source is available."
    }
  ],
  "ai-2": [
    {
      "project": "local-ai-assistant",
      "status": "suggested",
      "connection": "Local chat generation/history code exists; add measured NLP improvement evidence."
    },
    {
      "project": "python-speech-to-text",
      "status": "suggested",
      "connection": "Transcription prototype exists; add before/after accuracy evaluation."
    }
  ],
  "ai-3": [
    {
      "project": "jonnybot",
      "status": "suggested",
      "connection": "Q-table update code exists; demonstrate learning and correct evaluation."
    },
    {
      "project": "neurix",
      "status": "suggested",
      "connection": "Planned neural intent classifier; training and evaluation must be implemented."
    }
  ],
  "ai-4": [
    {
      "project": "pixel-bang",
      "status": "suggested",
      "connection": "Verify the image model and explain deep-learning integration."
    },
    {
      "project": "wildsight",
      "status": "suggested",
      "connection": "Planned CNN image classifier; model training and test evidence required."
    }
  ],
  "ai-5": [
    {
      "project": "neurix",
      "status": "suggested",
      "connection": "Planned neural classifier; explain architecture, learning and limitations."
    },
    {
      "project": "wildsight",
      "status": "suggested",
      "connection": "Planned CNN; explain layers, learning curves, evaluation and errors."
    }
  ],
  "ai-6": [
    {
      "project": "local-ai-assistant",
      "status": "suggested",
      "connection": "LLM integration code is available; document contribution and runtime."
    },
    {
      "project": "jonnybot",
      "status": "suggested",
      "connection": "RL code is available; proposed genetic optimizer is not implemented."
    }
  ],
  "acs-1": [
    {
      "project": "safe-bank",
      "status": "suggested",
      "connection": "Team README, wireframe and code exist; document contribution, tests and fixes."
    },
    {
      "project": "boards-personal-website",
      "status": "suggested",
      "connection": "Site source exists; collect requirements, design and testing records."
    }
  ],
  "acs-2": [
    {
      "project": "java-inheritance",
      "status": "suggested",
      "connection": "Reported Java assignment; source and development environment missing."
    },
    {
      "project": "iot-hydration-alarm",
      "status": "suggested",
      "connection": "Exact alarm source missing; related IoT code is not a substitute."
    }
  ],
  "acs-3": [
    {
      "project": "cookie-salmon",
      "status": "suggested",
      "connection": "Code calculates simulated store sales and aggregate totals; test correctness."
    },
    {
      "project": "bus-mall",
      "status": "suggested",
      "connection": "Code counts votes/views and saves results; restore images and test."
    }
  ],
  "acs-4": [
    {
      "project": "boards-personal-website",
      "status": "suggested",
      "connection": "Website source exists; verify desktop/mobile execution and usability."
    },
    {
      "project": "greenspires",
      "status": "suggested",
      "connection": "React Native/Expo source and media exist; verify actual supported platforms."
    }
  ],
  "acs-5": [
    {
      "project": "java-inheritance",
      "status": "suggested",
      "connection": "Locate Java code and demonstrate actual OOP features."
    },
    {
      "project": "java-bst",
      "status": "suggested",
      "connection": "Locate tree code and demonstrate actual OOP features."
    }
  ],
  "acs-6": [
    {
      "project": "java-bst",
      "status": "suggested",
      "connection": "Locate tree implementation and analyze supported operations/runtime."
    },
    {
      "project": "bus-mall",
      "status": "suggested",
      "connection": "Object arrays and loops exist; add operation and runtime analysis."
    }
  ],
};
