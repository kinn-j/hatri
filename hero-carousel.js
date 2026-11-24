(function () {
  const hero = document.getElementById("top");
  const track = hero.querySelector(".hero-track");
  const slides = [...track.children];
  const dots = [...hero.querySelectorAll(".hero-dot")];
  const motion = hero.querySelector(".hero-motion");
  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  let current = 0;
  let paused = false;
  let hovered = false;
  let timer;
  let swipe;

  function schedule() {
    clearTimeout(timer);
    if (paused || hovered || swipe || reduced.matches || document.hidden ||
        (hero.contains(document.activeElement) && document.activeElement !== motion) ||
        !hero.getClientRects().length) return;
    timer = setTimeout(() => show(current + 1), 2000);
  }

  function show(index) {
    current = (index + slides.length) % slides.length;
    track.style.transform = "translateX(" + (-100 * current) + "%)";
    slides.forEach((slide, i) => {
      const active = i === current;
      slide.inert = !active;
      slide.setAttribute("aria-hidden", String(!active));
      dots[i].setAttribute("aria-current", String(active));
    });
    schedule();
  }

  dots.forEach((dot, index) => dot.addEventListener("click", () => show(index)));
  motion.addEventListener("click", () => {
    paused = !paused;
    motion.setAttribute("aria-label", paused ? "Play slides" : "Pause slides");
    motion.firstElementChild.textContent = paused ? "▶" : "Ⅱ";
    schedule();
  });
  hero.addEventListener("pointerenter", event => {
    if (event.pointerType === "mouse") {
      hovered = true;
      schedule();
    }
  });
  hero.addEventListener("pointerleave", () => {
    hovered = false;
    schedule();
  });
  hero.addEventListener("focusin", schedule);
  hero.addEventListener("focusout", () => queueMicrotask(schedule));

  track.addEventListener("touchstart", event => {
    if (event.touches.length !== 1) return;
    const touch = event.touches[0];
    swipe = {x: touch.clientX, y: touch.clientY};
    schedule();
  }, {passive: true});
  track.addEventListener("touchend", event => {
    if (!swipe) return;
    const touch = event.changedTouches[0];
    const dx = touch.clientX - swipe.x;
    const dy = touch.clientY - swipe.y;
    swipe = undefined;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
      event.preventDefault();
      show(current + (dx < 0 ? 1 : -1));
    } else {
      schedule();
    }
  });
  track.addEventListener("touchcancel", () => {
    swipe = undefined;
    schedule();
  });

  function syncMotion() {
    if (reduced.matches && document.activeElement === motion) dots[current].focus();
    motion.hidden = reduced.matches;
    schedule();
  }

  reduced.addEventListener("change", syncMotion);
  document.addEventListener("visibilitychange", schedule);
  new ResizeObserver(schedule).observe(hero);
  syncMotion();
})();

function renderActiveCollection() {
  const collection = document.body.dataset.collection;
  if (!collection) return;
  const winter = collection === "winter";
  const occasion = winter ? "Winter" : "Christmas";
  const includeNonVeg = winter && $("winter-nonveg").checked;
  const groups = new Map();
  const label = (en, hi) => escapeHTML(T(en, hi));
  const titles = {Soup: ["Soups", "सूप"], Baked: ["Cakes & baking", "केक और बेकिंग"], Drink: ["Drinks", "पेय"], Sweet: ["Sweets", "मिठाइयाँ"], Snack: ["Snacks", "नाश्ता"], Main: ["Mains", "मुख्य व्यंजन"]};
  const ingredients = ids => ids.map(id => escapeHTML(nmx(id))).join(", ") || T("None", "कोई नहीं");

  MEALS.forEach((recipe, index) => {
    if (!recipe[8].includes(occasion) || (winter && !includeNonVeg && !isVegetarianDish(recipe))) return;
    const dish = dishState(recipe);
    const category = winter && MEASURED_RECIPES[dish.n]?.soup ? "Soup" : course(dish.n);
    const photo = IMG[pslug(dish.n)];
    if (!groups.has(category)) groups.set(category, []);
    const onList = dish.x.filter(id => cartQuantity(id));
    const missing = dish.x.filter(id => !cartQuantity(id));
    const optional = dish.oh.concat(dish.ox);
    const added = cartDishComplete(dish.n, dish.ing, dish.x);
    groups.get(category).push(`<article class="card">
      ${photo ? recipeImage(photo, false) : ""}
      <h3>${label(dish.n, HI[dish.n] || dish.n)}</h3>
      ${winter && !dish.v ? '<p class="sub">'+label("Contains meat or egg", "मांस या अंडा शामिल है")+'</p>' : ""}
      <p><b>${label("In your pantry", "पैंट्री में")}</b> · ${ingredients(dish.h)}</p>
      <p><b>${label("Still to add", "जोड़ना बाकी")}</b> · ${ingredients(missing)}</p>
      ${onList.length ? '<p><b>'+label("On shopping list", "खरीदारी सूची में")+'</b> · '+ingredients(onList)+'</p>' : ''}
      ${optional.length ? '<p class="sub">'+label("Optional", "वैकल्पिक")+' · '+ingredients(optional)+'</p>' : ''}
      <div class="row"><button class="btn sm" data-open-dish="${index}" aria-haspopup="dialog" aria-controls="dtray">${label("View recipe", "रेसिपी देखें")}</button>
      ${dish.x.length ? `<button class="btn primary sm" data-cart-add-dish="${index}" ${added ? "disabled" : ""}>${added ? label("Added ✓", "जोड़ा गया ✓") : missing.length ? label("Add missing ingredients", "बाकी सामग्री जोड़ें") : label("Add dish to cart", "व्यंजन कार्ट में जोड़ें")}</button>` : '<span class="chip have">'+label("Ready to cook", "बनाने के लिए तैयार")+'</span>'}</div>
    </article>`);
  });
  renderHTML($(collection + "-recipes"), Array.from(groups, ([category, cards]) =>
    '<h2>'+label(...(titles[category] || [category, HI[category] || category]))+'</h2><div class="collection-grid">'+cards.join("")+'</div>'
  ).join(""));
}

(function () {
  const collections = {
    christmas: { page: $("christmas-page"), trigger: document.querySelector(".hero-cta") },
    winter: { page: $("winter-page"), trigger: $("winter-link") }
  };
  const homeTitle = document.title;
  const diet = $("winter-nonveg");
  let active = "";

  function route() {
    const hash = location.hash.slice(1);
    const next = Object.hasOwn(collections, hash) ? hash : "";
    if (next === active) return;
    const previous = active;
    active = next;
    document.querySelector("dialog[open]")?.close();
    setView("recipes");
    document.body.classList.toggle("collection-open", !!active);
    if (active) document.body.dataset.collection = active;
    else delete document.body.dataset.collection;
    if (previous) collections[previous].page.hidden = true;
    document.title = homeTitle;
    if (active) {
      const { page } = collections[active];
      page.hidden = false;
      if (active === "winter") diet.checked = nonveg;
      const heading = page.querySelector("h1");
      document.title = heading.innerText + " · Hatri";
      renderActiveCollection();
      heading.focus({ preventScroll: true });
    } else {
      collections[previous].trigger.focus({ preventScroll: true });
    }
    window.scrollTo(0, 0);
    document.dispatchEvent(new Event("hatri:collection-change"));
  }

  for (const [id, { trigger }] of Object.entries(collections)) {
    trigger.addEventListener("click", event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      history.pushState({ collectionFromHome: id }, "", trigger.hash);
      route();
    });
    $(id + "-back").addEventListener("click", event => {
      if (history.state?.collectionFromHome === id) {
        event.preventDefault();
        history.back();
      }
    });
  }
  diet.addEventListener("change", renderActiveCollection);
  window.addEventListener("hashchange", route);
  route();
})();
