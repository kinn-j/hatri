// Only send named navigation and feature events for a signed-in, opted-in account.
const surfaces = new Set(["recipes", "pantry", "plan", "order", "kitchen", "winter", "christmas"]);
const actions = [
  ["[data-rr-profile-open]", "profile_open"],
  ["[data-mf-open]", "filters_open"],
  ["[data-mf-apply]", "filters_apply"],
  ["[data-crs]", "category_select"],
  ["[data-pantry-cat]", "pantry_browse"],
  ["#pantrySlides [data-i],[data-pantry-bulk],#ings [data-i],#starter,#clear", "pantry_edit"],
  ["[data-cart-add-dish],[data-cart-add-listed],[data-cart-add-ingredient],[data-oi],[data-add]", "cart_add"],
  ["[data-cart-quantity],[data-cart-remove-dish]", "cart_edit"],
  ["[data-decide]", "decide"],
  ["#nvBtn,#hostelBtn", "mode_change"],
  ["#winter-nonveg", "mode_change"]
];

function surface() {
  const body = document.body;
  return ["pantry", "plan", "order"].find(view => body.classList.contains("sh-" + view))
    || body.dataset.collection || body.dataset.v || "recipes";
}

export function createActivityTracker(writeEvent) {
  const setting = document.getElementById("rr-activity-setting");
  const checkbox = document.getElementById("rr-activity-sharing");
  let uid = null;
  let sessionId;
  let sequence = 0;
  let pending = 0;
  let blocked = false;
  let lastSurface;
  let lastEventAt = 0;
  let searchTimer;
  const consentKey = () => "hatri-activity-sharing:" + uid;
  const optedIn = () => {
    try { return !!uid && localStorage.getItem(consentKey()) === "yes"; }
    catch { return false; }
  };

  function record(event, detail = "") {
    if (!optedIn() || blocked || navigator.onLine === false || pending >= 10) return false;
    const view = surface();
    if (!surfaces.has(view)) return false;
    const now = Date.now();
    if (!sessionId || now - lastEventAt >= 30 * 60_000) {
      sessionId = crypto.randomUUID();
      sequence = 0;
    }
    if (sequence >= 150) return false;
    lastEventAt = now;
    const account = uid;
    const activeSession = sessionId;
    const order = ++sequence;
    pending++;
    writeEvent(account, { sessionId, sequence: order, event, surface: view, detail })
      .catch(error => {
        if (error.code === "permission-denied" && uid === account && sessionId === activeSession) {
          if (!blocked) console.warn("Hatri activity sharing needs the published Firestore rules.");
          blocked = true;
        }
      })
      .finally(() => { pending--; });
    return true;
  }

  function visit() {
    const view = surface();
    if (view !== lastSurface && record("page_view")) lastSurface = view;
  }

  function resetSession() {
    clearTimeout(searchTimer);
    sessionId = lastSurface = undefined;
    blocked = false;
  }

  checkbox.addEventListener("change", () => {
    if (!uid) return;
    try {
      if (checkbox.checked) localStorage.setItem(consentKey(), "yes");
      else localStorage.removeItem(consentKey());
    } catch { checkbox.checked = optedIn(); }
    resetSession();
    visit();
  });
  window.addEventListener("storage", event => {
    if (!uid || (event.key !== null && event.key !== consentKey())) return;
    checkbox.checked = optedIn();
    resetSession();
    visit();
  });

  document.addEventListener("hatri:view-change", () => queueMicrotask(visit));
  document.addEventListener("hatri:collection-change", visit);
  document.addEventListener("hatri:recipe-open", event => {
    const recipe = event.detail;
    if (typeof recipe === "string" && /^[a-z0-9-]{1,110}$/.test(recipe)) {
      record("recipe_open", recipe);
    }
  });
  document.addEventListener("click", event => {
    const action = actions.find(([selector]) => event.target.closest?.(selector));
    if (action) record(action[1]);
  }, true);
  document.getElementById("rq").addEventListener("input", event => {
    clearTimeout(searchTimer);
    if (!optedIn() || !event.target.value.trim()) return;
    searchTimer = setTimeout(() => record("recipe_search"), 800);
  });

  return {
    setUser(userId) {
      if (uid === userId) return;
      uid = userId;
      resetSession();
      setting.hidden = !uid;
      checkbox.checked = optedIn();
      visit();
    }
  };
}
