// Merge only edits made since the last local snapshot. Maps merge per key and
// shopping groups and Table selections merge by their stable item identities.
globalThis.HatriPreferences = (() => {
  const copy = value => value === undefined ? undefined : JSON.parse(JSON.stringify(value));
  const isMap = value => value !== null && typeof value === 'object' && !Array.isArray(value);
  const safeKey = key => key !== '__proto__' && key !== 'constructor' && key !== 'prototype';
  function equal(a, b) {
    if (a === b) return true;
    if (Array.isArray(a) && Array.isArray(b)) return a.length === b.length && a.every((value, i) => equal(value, b[i]));
    if (!isMap(a) || !isMap(b)) return false;
    const keys = Object.keys(a);
    return keys.length === Object.keys(b).length && keys.every(key => Object.hasOwn(b, key) && equal(a[key], b[key]));
  }
  const identity = {
    cartMeals: item => JSON.stringify([item.name, [...new Set(item.ingredients)].sort()]),
    tableSelections: item => JSON.stringify(item.kind === 'meal' ? ['meal', item.names.slice().sort()] : ['dish', item.name])
  };

  function merge(before, changed, latest, field = '') {
    if (equal(before, changed)) return copy(latest);
    if (Array.isArray(before) && Array.isArray(changed) && Object.hasOwn(identity, field)) {
      const key = identity[field];
      const index = entries => Object.fromEntries((entries || []).filter(item => item &&
        (field === 'cartMeals' ? Array.isArray(item.ingredients) : item.kind !== 'meal' || Array.isArray(item.names)))
        .map(item => [key(item), item]));
      return Object.values(merge(index(before), index(changed), index(Array.isArray(latest) ? latest : [])));
    }
    if (isMap(before) && isMap(changed)) {
      const result = isMap(latest) ? copy(latest) : {};
      for (const key of new Set([...Object.keys(before), ...Object.keys(changed)])) {
        if (!safeKey(key) || equal(before[key], changed[key])) continue;
        if (Object.hasOwn(changed, key)) result[key] = merge(before[key], changed[key], result[key], key);
        else delete result[key];
      }
      return result;
    }
    return copy(changed);
  }

  function values(value, check) {
    return Object.fromEntries(Object.entries(isMap(value) ? value : {}).filter(([key, entry]) =>
      safeKey(key) && key.length > 0 && key.length <= 160 && check(entry)));
  }

  return {copy, equal, isMap, merge, values};
})();
