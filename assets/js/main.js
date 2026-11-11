// Point every SIP / Animai Kingdom link at the one shared URL
// (window.SITE_CONFIG in site-config.js). Opens in the current tab.
(function () {
  const url = window.SITE_CONFIG && window.SITE_CONFIG.ANIMAI_KINGDOM_URL;
  if (!url) return;
  document.querySelectorAll("a[data-animai-link]").forEach((a) => {
    a.href = url;
  });
})();

// Mobile navigation toggle (shared by every page)
(function () {
  const nav = document.querySelector(".site-nav");
  const toggle = document.querySelector(".nav-toggle");
  if (!nav || !toggle) return;

  function setOpen(open) {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.textContent = open ? "Close" : "Menu";
  }

  toggle.addEventListener("click", () => {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("is-open")) {
      setOpen(false);
      toggle.focus();
    }
  });

  // Decorative code on the left side of the mobile menu.
  // Plain text only (built with textContent); never executed.
  const CODE = [
    '<!DOCTYPE html>',
    '<html lang="en">',
    '<head>',
    '  <meta charset="UTF-8">',
    '  <title>Let me know more about you</title>',
    '</head>',
    '<body>',
    '  <nav>',
    '    <ul>',
    '      <li><a href="#">Send email</a></li>',
    '    </ul>',
    '  </nav>',
    '<style>',
    '  .aboutMe {',
    '    color: green;',
    '    text-align: center;',
    '  }',
    '  h1 {',
    '    color: red;',
    '    background-color: slategrey;',
    '  }',
    '</style>',
    '  <h1>Who are you and what',
    '    do you like to do?</h1>',
    '  <div class="aboutme">',
    '    <p>This is AI counseling,',
    '      prepare to be questioned.</p>',
    '  </div>',
    '  <ol>',
    '    <li>What is your name?</li>',
    '    <li>What is your birthday?</li>',
    '    <li>Where are you from?</li>',
    '  </ol>',
    '<script>',
    '  let name;',
    '  name = prompt("What is your name");',
    '  console.log(name);',
    '</script>',
    '</body>',
    '</html>',
  ];

  function highlight(line, parent) {
    // Color tags green, quoted strings orange, keywords mint
    const re = /(<\/?[a-zA-Z!][^>\s]*|>|"[^"]*"|\blet\b)/g;
    let last = 0;
    for (const m of line.matchAll(re)) {
      if (m.index > last) parent.append(line.slice(last, m.index));
      const tok = m[0];
      const span = document.createElement("span");
      span.className = tok.startsWith('"') ? "s" : tok === "let" ? "k" : "t";
      span.textContent = tok;
      parent.append(span);
      last = m.index + tok.length;
    }
    if (last < line.length) parent.append(line.slice(last));
    parent.append("\n");
  }

  const list = nav.querySelector(".nav-list");
  if (list) {
    const li = document.createElement("li");
    li.className = "nav-code";
    li.setAttribute("aria-hidden", "true");
    const pre = document.createElement("pre");
    const code = document.createElement("code");
    CODE.forEach((line) => highlight(line, code));
    pre.append(code);
    li.append(pre);
    list.append(li);
  }

  // Close the menu if the window grows past the mobile breakpoint
  window.matchMedia("(min-width: 821px)").addEventListener("change", (mq) => {
    if (mq.matches) setOpen(false);
  });
})();
