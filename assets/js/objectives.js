/* Objectives page: flip cards + expanded project detail view.
   Reads OBJECTIVES, PROJECTS and MAPPINGS from objectives-data.js. */
(function () {
  const listView = document.getElementById("objectives-list");
  const detailView = document.getElementById("detail-view");
  const detailBody = document.getElementById("detail-body");
  const announcer = document.getElementById("announcer");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  let lastOpener = null; // { key, project } used to restore focus
  let savedScroll = 0;

  const el = (tag, attrs = {}, ...children) => {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (k === "class") node.className = v;
      else if (k === "text") node.textContent = v;
      else node.setAttribute(k, v);
    }
    children.flat().forEach((c) => c && node.append(c));
    return node;
  };

  function announce(msg) {
    announcer.textContent = "";
    // brief delay so repeated messages are still read
    setTimeout(() => (announcer.textContent = msg), 50);
  }

  function statusBadge(status) {
    return status === "verified"
      ? el("span", { class: "badge badge-verified", text: "Verified" })
      : el("span", { class: "badge badge-suggested", text: "Suggested match · not verified" });
  }

  /* ---------- Build cards ---------- */

  function buildCard(degreeKey, index) {
    const degree = OBJECTIVES[degreeKey];
    const num = index + 1;
    const key = `${degreeKey}-${num}`;
    const label = `${degree.short} Objective ${num}`;
    const statement = degree.items[index];
    const matches = MAPPINGS[key] || [];

    // Front
    const flipBtn = el("button", { class: "flip-btn", type: "button", "data-action": "flip" },
      el("span", { text: "Flip to see projects" }),
      el("span", { class: "visually-hidden", text: ` for ${label}` }));
    const front = el("div", { class: "obj-face obj-front" },
      el("p", { class: "obj-label" },
        el("span", { class: "obj-degree", text: degree.name }),
        el("span", { class: "obj-num", text: label })),
      el("p", { class: "obj-statement", text: statement }),
      el("div", { class: "obj-actions" }, flipBtn));

    // Back
    const backList = el("ul", { class: "match-list" });
    if (matches.length === 0) {
      backList.append(el("li", { class: "match match-empty" },
        el("p", { class: "match-title", text: "Project to be selected" }),
        el("p", { class: "match-connection", text: "Evidence to be added." })));
    } else {
      matches.forEach((m) => {
        const p = PROJECTS[m.project];
        const name = p ? p.title : m.project;
        // Projects with their own website (Animai Kingdom) link straight to it
        const title = p && p.externalUrl
          ? el("a", { href: p.externalUrl, text: name })
          : name;
        const action = p && p.externalUrl
          ? el("a", { class: "detail-btn detail-link", href: p.externalUrl },
              el("span", { text: `Visit the ${name} website` }))
          : el("button", {
              class: "detail-btn", type: "button",
              "data-action": "detail", "data-key": key, "data-project": m.project,
            }, el("span", { text: "View details" }),
               el("span", { class: "visually-hidden", text: ` for ${name}, ${label}` }));
        backList.append(el("li", { class: "match" },
          el("div", { class: "match-head" },
            el("p", { class: "match-title" }, title),
            statusBadge(m.status)),
          el("p", { class: "match-connection", text: m.connection }),
          action));
      });
    }
    const unflipBtn = el("button", { class: "unflip-btn", type: "button", "data-action": "unflip" },
      el("span", { text: "← Flip back to objective" }),
      el("span", { class: "visually-hidden", text: ` ${num}` }));
    const back = el("div", { class: "obj-face obj-back" },
      el("p", { class: "obj-label" },
        el("span", { class: "obj-num", text: `${label} · Projects` }),
        el("span", { class: "obj-count", text: matches.length ? `${matches.length} project${matches.length > 1 ? "s" : ""}` : "" })),
      backList,
      el("div", { class: "obj-actions" }, unflipBtn));

    back.inert = true;
    back.setAttribute("aria-hidden", "true");
    back.classList.add("is-offstage");

    const card = el("li", { class: "obj-card", "data-key": key, "aria-label": label },
      el("div", { class: "obj-inner" }, front, back));
    return card;
  }

  function render() {
    for (const degreeKey of Object.keys(OBJECTIVES)) {
      const grid = document.getElementById(`grid-${degreeKey}`);
      OBJECTIVES[degreeKey].items.forEach((_, i) => grid.append(buildCard(degreeKey, i)));
    }
  }

  /* ---------- Flip ---------- */

  function setFlipped(card, flipped) {
    const inner = card.querySelector(".obj-inner");
    const front = card.querySelector(".obj-front");
    const back = card.querySelector(".obj-back");

    // Animate the card's height from the old face to the new face
    const oldH = inner.offsetHeight;
    front.classList.toggle("is-offstage", flipped);
    back.classList.toggle("is-offstage", !flipped);
    if (!reduceMotion.matches) {
      const newH = (flipped ? back : front).offsetHeight;
      inner.style.height = oldH + "px";
      void inner.offsetHeight;
      inner.style.height = newH + "px";
      const done = (e) => {
        if (e.propertyName !== "height") return;
        inner.style.height = "";
        inner.removeEventListener("transitionend", done);
      };
      inner.addEventListener("transitionend", done);
      setTimeout(() => (inner.style.height = ""), 700); // safety net
    }
    card.classList.toggle("is-flipped", flipped);
    front.inert = flipped;
    back.inert = !flipped;
    front.setAttribute("aria-hidden", String(flipped));
    back.setAttribute("aria-hidden", String(!flipped));
    const target = flipped
      ? back.querySelector(".detail-btn, .unflip-btn")
      : front.querySelector(".flip-btn");
    target.focus({ preventScroll: true });
    const label = card.getAttribute("aria-label");
    announce(flipped ? `${label}: showing projects` : `${label}: showing objective`);
  }

  listView.addEventListener("click", (e) => {
    const card = e.target.closest(".obj-card");
    if (!card) return;
    const actionEl = e.target.closest("[data-action]");
    const action = actionEl ? actionEl.dataset.action : null;

    if (action === "detail") {
      openDetail(actionEl.dataset.key, actionEl.dataset.project);
    } else if (action === "unflip") {
      setFlipped(card, false);
    } else if (action === "flip" || (!card.classList.contains("is-flipped") && e.target.closest(".obj-front"))) {
      // Clicking/tapping anywhere on the front flips it
      setFlipped(card, true);
    }
  });

  /* ---------- Detail view ---------- */

  function detailSection(title, content) {
    const empty = !content || (Array.isArray(content) && content.length === 0);
    const body = empty
      ? el("p", { class: "evidence-missing",
          text: Array.isArray(content) ? "Source evidence to be added" : "Evidence to be added" })
      : Array.isArray(content)
        ? el("ul", { class: "evidence-list" }, content.map((ev) =>
            el("li", {}, el("span", { class: "ev-type", text: ev.type }), " ",
              el("a", { href: ev.href, text: ev.label }))))
        : el("p", { text: content });
    return el("section", { class: "detail-section" }, el("h3", { text: title }), body);
  }

  function openDetail(key, projectId) {
    const [degreeKey, numStr] = key.split("-");
    const degree = OBJECTIVES[degreeKey];
    const num = Number(numStr);
    const project = PROJECTS[projectId];
    const match = (MAPPINGS[key] || []).find((m) => m.project === projectId);
    if (!project || !match) return;

    savedScroll = window.scrollY;
    lastOpener = { key, projectId };

    detailBody.replaceChildren(
      el("p", { class: "detail-crumb", text: `${degree.name} · ${degree.short} Objective ${num}` }),
      el("h2", { id: "detail-title", tabindex: "-1", text: project.title }),
      el("blockquote", { class: "detail-objective" },
        el("p", { class: "obj-num", text: `${degree.short} Objective ${num}` }),
        el("p", { text: degree.items[num - 1] })),
      el("div", { class: "detail-status" }, statusBadge(match.status)),
      el("div", { class: "detail-grid" },
        detailSection("Purpose", project.summary),
        detailSection("My contribution", project.contribution),
        detailSection("Tools", project.tools),
        detailSection("Evidence", project.evidence),
        detailSection("Results", project.results),
        detailSection("Reflection", project.reflection)),
      project.page
        ? el("p", { class: "detail-more" }, el("a", { href: project.page, text: `Full ${project.title} project page →` }))
        : ""
    );

    listView.hidden = true;
    detailView.hidden = false;
    detailView.classList.remove("is-entering");
    if (!reduceMotion.matches) {
      void detailView.offsetWidth; // restart animation
      detailView.classList.add("is-entering");
    }
    window.scrollTo({ top: detailView.offsetTop - 80, behavior: "instant" });
    document.getElementById("detail-title").focus({ preventScroll: true });
    announce(`Showing details for ${project.title}, ${degree.short} Objective ${num}`);
  }

  function closeDetail() {
    if (detailView.hidden) return;
    detailView.hidden = true;
    listView.hidden = false;
    window.scrollTo({ top: savedScroll, behavior: "instant" });
    if (lastOpener) {
      const btn = listView.querySelector(
        `.detail-btn[data-key="${lastOpener.key}"][data-project="${lastOpener.projectId}"]`);
      if (btn) btn.focus({ preventScroll: true });
    }
    announce("Back to objective cards");
  }

  detailView.querySelector(".detail-back-bottom").addEventListener("click", closeDetail);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !detailView.hidden) closeDetail();
  });

  render();
  document.documentElement.classList.add("js-ready");
})();
