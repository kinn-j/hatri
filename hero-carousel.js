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

  hero.querySelector(".hero-cta").addEventListener("click", () => {
    const search = document.getElementById("rq");
    search.value = T("Christmas", "क्रिसमस");
    search.dispatchEvent(new Event("input", {bubbles: true}));
    const heading = document.querySelector("#results h2");
    heading.tabIndex = -1;
    heading.focus();
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
