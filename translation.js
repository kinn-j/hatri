// Hatri is authored in English. Keep the original text and translate the rendered UI.
globalThis.HatriTranslation = (() => {
  const cacheKey = "hatri-google-hi-v1";
  const endpoint = "https://translate.googleapis.com/translate_a/single";
  const cache = new Map();
  const records = new WeakMap();
  const pending = new Map();
  const failed = new Map();
  const urgent = new Set(), background = new Set();
  const roots = new Set();
  const attributes = ["aria-label", "aria-description", "title", "placeholder", "alt"];
  const ignored = "script,style,noscript,template,[translate=no]";
  let language = "en", active = 0, frame, flush, save, retry, scroll, lastError = 0, retryDelay = 5000;

  function read(node, attribute) {
    return attribute ? node.getAttribute(attribute) : node.data;
  }

  function record(node, attribute) {
    let fields = records.get(node);
    if (!fields) records.set(node, fields = new Map());
    const value = read(node, attribute);
    let entry = fields.get(attribute);
    if (!entry || (value !== entry.source && value !== entry.output)) {
      entry = { source: value, output: null, waiting: false };
      fields.set(attribute, entry);
    }
    return entry;
  }

  function write(node, attribute, value) {
    if (read(node, attribute) === value) return;
    if (attribute) node.setAttribute(attribute, value);
    else node.data = value;
  }

  function target(node, attribute) {
    const element = attribute ? node : node.parentElement;
    return element?.closest(ignored) ? "en" : language;
  }

  function apply(node, attribute, entry, translated) {
    if (record(node, attribute) !== entry || entry.source == null) return;
    if (translated == null) {
      write(node, attribute, entry.source);
      return;
    }
    entry.output = entry.source.replace(entry.source.trim(), () => translated);
    write(node, attribute, entry.output);
  }

  function persist() {
    clearTimeout(save);
    save = null;
    try { localStorage.setItem(cacheKey, JSON.stringify([...cache].slice(-3000))); } catch {}
  }

  async function fetchGroup(sources) {
    const query = sources.map((text, i) => i ? `[${String(i).padStart(4, "0")}]\n${text}` : text).join("\n");
    const url = new URL(endpoint);
    url.search = new URLSearchParams({ client: "gtx", sl: "en", tl: "hi", dt: "t", q: query });
    const response = await fetch(url, { signal: AbortSignal.timeout(10000) });
    if (!response.ok) throw Error("Google Translate returned an error");
    const data = await response.json();
    const result = data[0]?.filter(part => typeof part?.[0] === "string").map(part => part[0]).join("") || "";
    if (sources.length === 1 && result.trim()) return [result.trim()];
    const parts = result.split(/\s*\[(\d{4})\]\s*/);
    if (parts.length === sources.length * 2 - 1 &&
        sources.every((_, i) => parts[i * 2].trim() && (!i || Number(parts[i * 2 - 1]) === i))) {
      return sources.map((_, i) => parts[i * 2].trim());
    }
    if (sources.length === 1) throw Error("Google Translate returned empty text");
    // A marker can be changed by the service. Split the request instead of applying mismatched text.
    const middle = Math.ceil(sources.length / 2);
    const first = await fetchGroup(sources.slice(0, middle));
    return first.concat(await fetchGroup(sources.slice(middle)));
  }

  function finish(sources, values) {
    sources.forEach((source, i) => {
      const value = values?.[i] || null;
      if (value) {
        cache.set(source, value);
        failed.delete(source);
      } else {
        failed.set(source, Date.now());
      }
      pending.get(source)?.resolve(value);
      pending.delete(source);
    });
    if (values) {
      retryDelay = 5000;
      if (!save) save = setTimeout(persist, 400);
    } else if (language === "hi") {
      if (Date.now() - lastError > 30000) {
        lastError = Date.now();
        document.dispatchEvent(new Event("hatri:translation-error"));
      }
      if (!retry) retry = setTimeout(() => {
        retry = null;
        failed.clear();
        queue(document.body);
        const title = document.querySelector("title");
        if (title) queue(title);
        retryDelay = Math.min(retryDelay * 2, 60000);
      }, retryDelay);
    }
  }

  function drain() {
    flush = null;
    while (active < 3 && (urgent.size || background.size)) {
      const sources = [];
      let size = 0;
      for (const source of [...urgent, ...background]) {
        const length = encodeURIComponent(source).length + 24;
        if (sources.length && (size + length > 3800 || sources.length >= 24)) break;
        sources.push(source);
        size += length;
        urgent.delete(source); background.delete(source);
      }
      active++;
      fetchGroup(sources).then(values => finish(sources, values), () => finish(sources))
        .finally(() => { active--; schedule(); });
    }
  }

  function schedule() {
    if (!flush && active < 3 && (urgent.size || background.size)) flush = setTimeout(drain, 35);
  }

  function request(source, priority = true) {
    if (cache.has(source)) return Promise.resolve(cache.get(source));
    if (Date.now() - (failed.get(source) || 0) < 5000) return Promise.resolve(null);
    let entry = pending.get(source);
    if (!entry) {
      entry = {};
      entry.promise = new Promise(resolve => { entry.resolve = resolve; });
      pending.set(source, entry);
      (priority ? urgent : background).add(source);
      schedule();
    } else {
      if (priority && background.delete(source)) urgent.add(source);
    }
    return entry.promise;
  }

  function nearViewport(element) {
    if (element.tagName === "TITLE") return true;
    const rect = element.getBoundingClientRect();
    return rect.width > 0 && rect.height > 0 && rect.bottom > -100 &&
      rect.top < innerHeight + 180 && rect.right > -100 && rect.left < innerWidth + 100;
  }

  function translate(node, attribute = "") {
    const entry = record(node, attribute);
    if (target(node, attribute) === "en") return apply(node, attribute, entry, null);
    const source = entry.source?.trim();
    if (!source || !/\p{Script=Latin}/u.test(source) || /^(?:https?:\/\/|@\S+$|\S+@\S+$)/i.test(source)) return;
    if (cache.has(source)) return apply(node, attribute, entry, cache.get(source));
    const priority = nearViewport(attribute ? node : node.parentElement);
    if (entry.waiting) {
      if (priority && background.delete(source)) urgent.add(source);
      return;
    }
    entry.waiting = true;
    request(source, priority).then(value => {
      entry.waiting = false;
      if (value && node.isConnected && target(node, attribute) === "hi") apply(node, attribute, entry, value);
    });
  }

  function scan(node, restore = false) {
    if (node.nodeType === Node.TEXT_NODE) return translate(node);
    if (!(node instanceof Element) || node.matches(ignored) || (!restore && node.closest(ignored))) return;
    if (!restore && node.tagName !== "TITLE" &&
        (node.hidden || (node.matches("dialog") && !node.open) || getComputedStyle(node).display === "none")) return;
    for (const attribute of attributes) if (node.hasAttribute(attribute)) translate(node, attribute);
    if (!restore && node.matches("details:not([open])")) {
      const summary = node.querySelector(":scope > summary");
      if (summary) scan(summary);
      return;
    }
    for (const child of node.childNodes) scan(child, restore);
  }

  function update() {
    frame = null;
    const batch = [...roots];
    roots.clear();
    for (const node of batch) if (node.isConnected) scan(node);
  }

  function queue(root) {
    if (language !== "hi") return;
    roots.add(root);
    if (!frame) frame = requestAnimationFrame(update);
  }

  const observer = new MutationObserver(changes => {
    for (const change of changes) {
      if (change.type === "childList") {
        for (const node of change.addedNodes) queue(node);
      } else if (change.type === "characterData") {
        queue(change.target);
      } else if (attributes.includes(change.attributeName)) {
        translate(change.target, change.attributeName);
      } else {
        queue(change.target);
      }
    }
  });

  function setLanguage(value) {
    if (value === language) return;
    language = value;
    observer.disconnect();
    if (value === "en") {
      clearTimeout(retry);
      clearTimeout(flush);
      retry = null;
      flush = null;
      roots.clear();
      for (const source of [...urgent, ...background]) {
        pending.get(source)?.resolve(null);
        pending.delete(source);
      }
      urgent.clear();
      background.clear();
      scan(document.body, true);
      if (document.querySelector("title")) scan(document.querySelector("title"), true);
      return;
    }
    try {
      for (const [source, translated] of JSON.parse(localStorage.getItem(cacheKey) || "[]")) {
        if (!cache.has(source)) cache.set(source, translated);
      }
    } catch {}
    observer.observe(document.documentElement, { subtree: true, childList: true, characterData: true,
      attributes: true, attributeFilter: [...attributes, "open", "hidden", "translate", "data-v", "data-collection"] });
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    queue(document.body);
    if (document.querySelector("title")) queue(document.querySelector("title"));
  }

  addEventListener("online", () => { failed.clear(); queue(document.body); });
  addEventListener("pagehide", () => { if (save) persist(); });
  document.addEventListener("scroll", event => {
    if (language !== "hi") return;
    clearTimeout(scroll);
    scroll = setTimeout(() => queue(event.target instanceof Element ? event.target : document.body), 120);
  }, { capture: true, passive: true });
  document.addEventListener("hatri:view-change", () => queue(document.body));

  return {
    setLanguage,
    source(node, attribute = "") {
      const entry = records.get(node)?.get(attribute);
      const value = read(node, attribute);
      return entry && value === entry.output ? entry.source : value;
    },
    lookup(text) { return cache.get(text); },
    warm(texts, onProgress, onSettled) {
      for (const text of texts) {
        if (!/\p{Script=Latin}/u.test(text)) { onSettled(text); continue; }
        request(text, false).then(value => { if (value) onProgress(); })
          .finally(() => onSettled(text));
      }
    },
  };
})();
