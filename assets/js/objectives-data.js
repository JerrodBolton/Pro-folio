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

/* Leave a field empty ("" or []) and the page shows "Evidence to be added".
   images: add `objectives: ["acs-1"]` to an image to show it only on those objective cards. */
const PROJECTS = {
  "animai-kingdom": {
    title: "Animai Kingdom",
    // Images shown in the swipeable gallery
    images: [
      { src: "projects/animai-kingdom/images/ak-shark-finished.jpg", alt: "Finished white 3D-printed Animai Kingdom shark character wearing a suit jacket", caption: "Finished 3D-printed shark" },
      { src: "projects/animai-kingdom/images/ak-shark-print.jpg", alt: "3D-printed shark figure on the print bed, still attached to its supports", caption: "Shark on the print bed, with supports" },
      { src: "projects/animai-kingdom/images/ak-wireframe-hero.jpg", alt: "Desktop wireframe of the Animai Kingdom homepage hero: Where Fantasy Companions Meet Artificial Intelligence", caption: "Website wireframe: homepage hero", objectives: ["acs-1"] },
      { src: "projects/animai-kingdom/images/ak-wireframe-home-about.jpg", alt: "Wireframe of the Animai Kingdom hero and About the Kingdom sections, with counts for 5 companions, 4 AI tools and 1 kingdom", caption: "Wireframe: hero and About the Kingdom", objectives: ["acs-1"] },
      { src: "projects/animai-kingdom/images/ak-wireframe-companions.jpg", alt: "Wireframe of The Five Guardians section listing HeyShark, Penguin, Hank the Eagle, Monkey King and Panda", caption: "Wireframe: the five companions", objectives: ["acs-1"] },
      { src: "projects/animai-kingdom/images/ak-wireframe-progress-ai.jpg", alt: "Wireframe of the Progress section at 65 percent and the AI Employees section listing ChatGPT, Gemini and Claude roles", caption: "Wireframe: progress and AI employees", objectives: ["acs-1"] },
      { src: "projects/animai-kingdom/images/ak-wireframe-how-to-join.jpg", alt: "Wireframe of the How to Use the Website guide and What's Coming Next section with a contact form", caption: "Wireframe: how to use and what's next", objectives: ["acs-1"] },
    ],
    summary: "An AI animal companion designed for conversation, productivity, motivation and brainstorming. Status: Prototype — in development.",
    // Has its own website: objective entries link straight there
    // instead of opening the detail view. URL lives in site-config.js.
    externalUrl: (window.SITE_CONFIG || {}).ANIMAI_KINGDOM_URL || "http://animaikingdom.com",
    // Public prototype repository, shown as a second link on objective cards
    sourceUrl: "https://github.com/JerrodBolton/Animai",
    page: "",
    contribution: "",
    tools: "",
    evidence: [
      { type: "Website", label: "Animai Kingdom", href: (window.SITE_CONFIG || {}).ANIMAI_KINGDOM_URL || "http://animaikingdom.com" },
      { type: "GitHub", label: "Public prototype repository", href: "https://github.com/JerrodBolton/Animai" },
      { type: "Source code", label: "main_app.py (reviewed version)", href: "https://github.com/JerrodBolton/Animai/blob/1cfc5b48cf777261e24281b416a186874220750c/main_app.py" },
    ],
    results: "",
    reflection: "",
  },
  "pixel-bang": {
    "title": "Pixel Bang",
    // Images shown in the swipeable gallery
    images: [
      { src: "projects/pixel-bang/images/pixel-bang-cabin.jpg", alt: "Generated image of a snow-covered log cabin in a pine forest at sunset", caption: "A cozy cabin in a snowy forest" },
      { src: "projects/pixel-bang/images/pixel-bang-red-mug.jpg", alt: "Generated photorealistic image of a glossy red mug on a dark table", caption: "“a mug that is red that’s on a table”" },
      { src: "projects/pixel-bang/images/pixel-bang-calico-cat.jpg", alt: "Generated illustration of a calico cat lying on a cushion", caption: "Calico cat from a loosely worded prompt" },
    ],
    "summary": "Local text-to-image command-line app that turns written prompts into generated images with SDXL-Turbo. Status: Public implementation source; prompt/output documentation pending.",
    "page": "",
    "contribution": "",
    "tools": "Python, PyTorch, Hugging Face diffusers, transformers, accelerate; Stability AI SDXL-Turbo; uv",
    "evidence": [
      {
        "type": "GitHub",
        "label": "Repository",
        "href": "https://github.com/JerrodBolton/pixel-bag"
      },
      {
        "type": "Source code",
        "label": "generate.py",
        "href": "https://github.com/JerrodBolton/pixel-bag/blob/ba0189709d74d348c290c9714d676c9bc10317a2/generate.py"
      },
      {
        "type": "Dependencies",
        "label": "pyproject.toml",
        "href": "https://github.com/JerrodBolton/pixel-bag/blob/ba0189709d74d348c290c9714d676c9bc10317a2/pyproject.toml"
      },
      {
        "type": "Sample output",
        "label": "outputs/cabin.png",
        "href": "https://github.com/JerrodBolton/pixel-bag/blob/ba0189709d74d348c290c9714d676c9bc10317a2/outputs/cabin.png"
      }
    ],
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
    // Images shown in the swipeable gallery
    images: [
      { src: "projects/vortexa/images/vortexa-chat-help.jpg", alt: "VORTEXA answering a message in character, with token count and response time", caption: "Streamed reply with token count and timing" },
      { src: "projects/vortexa/images/vortexa-chat-history.jpg", alt: "VORTEXA multi-turn conversation with saved conversations in the sidebar", caption: "Multi-turn chat and conversation list" },
      { src: "projects/vortexa/images/vortexa-model-switch.jpg", alt: "VORTEXA model menu listing two local GGUF models", caption: "Switching between local models" },
    ],
    "summary": "Desktop local-LLM assistant with a chat interface, model switching and session conversation history. Status: Public implementation source; runtime/evaluation pending.",
    "page": "projects/vortexa/index.html",
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
    // Images shown in the swipeable gallery
    images: [
      { src: "projects/jonnybot/images/jonnybot-reward-grid.jpg", alt: "Jonnybot on a 6-by-10 reward grid laid over a sci-fi room", caption: "Reward grid over the room map" },
      { src: "projects/jonnybot/images/jonnybot-first-grid.jpg", alt: "Early Jonnybot window with a plain labelled grid and the blue robot square", caption: "Early version with random moves" },
      { src: "projects/jonnybot/images/jonnybot-room-art.jpg", alt: "Top-down sci-fi room artwork used as the Jonnybot background", caption: "Room background art" },
    ],
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
        "type": "Live site",
        "label": "Try Safe Bank",
        "href": "https://jerrodbolton.github.io/Jerrod_Robert.safebank/mySafe.html"
      },
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
    // Images shown in the swipeable gallery
    images: [
      { src: "projects/boards-personal-website/images/boards-site-home.jpg", alt: "Home page of this portfolio site: Jerrod Bolton hero with an astronaut and citadel, Featured Projects cards for Animai Kingdom and VORTEXA, and the first-code column", caption: "Portfolio home page" },
      { src: "projects/boards-personal-website/images/boards-wireframe-home.jpg", alt: "Desktop wireframe of the portfolio home page: navigation, name and tagline, View Portfolio and Degree Objectives buttons, hero image and first-code snippet", caption: "Website wireframe: home page (desktop)", objectives: ["acs-1"] },
      { src: "projects/boards-personal-website/images/boards-wireframe-home-phone.jpg", alt: "Phone wireframe of the portfolio home page with a menu button, hero image, name, tagline and stacked buttons", caption: "Website wireframe: home page (phone)", objectives: ["acs-1"] },
      { src: "projects/boards-personal-website/images/boards-wireframe-portfolio.jpg", alt: "Wireframe of the Portfolio page listing Animai Kingdom, VORTEXA, WILDSIGHT and Pixel Bang with logos and descriptions", caption: "Website wireframe: Portfolio page", objectives: ["acs-1"] },
      { src: "projects/boards-personal-website/images/boards-wireframe-about.jpg", alt: "Wireframe of the About Me page with Background, Education, Skills and experience, and Resume sections", caption: "Website wireframe: About Me page", objectives: ["acs-1"] },
    ],
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
   Two projects per objective, from README-Boards-Project-Plan.md (Nov 12, 2026),
   except AI 1, AI 2 and ACS 1, which have three: Animai Kingdom is the
   one project allowed three objective placements.
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
      "connection": "AI journaling feature is planned; the AI integration must be implemented and demonstrated."
    },
    {
      "project": "animai-kingdom",
      "status": "suggested",
      "connection": "Integrates conversational AI, character personalities, and speech features into a companion application."
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
    },
    {
      "project": "animai-kingdom",
      "status": "suggested",
      "connection": "Processes natural-language conversations through text and speech. Evidence should show language-processing improvements and before-and-after evaluation."
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
    },
    {
      "project": "animai-kingdom",
      "status": "suggested",
      "connection": "Demonstrates the software-development process through requirements, design, implementation, testing, and documented individual contributions."
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
