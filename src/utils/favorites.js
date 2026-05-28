const STORAGE_KEY = 'uikit_favorites';

export function getFavorites() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function addFavorite(item) {
  const favorites = getFavorites();
  if (!favorites.find((f) => f.id === item.id)) {
    const updated = [...favorites, item];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return updated;
  }
  return favorites;
}

export function removeFavorite(itemId) {
  const favorites = getFavorites();
  const updated = favorites.filter((f) => f.id !== itemId);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return updated;
}

export function toggleFavorite(item) {
  const favorites = getFavorites();
  const exists = favorites.find((f) => f.id === item.id);
  if (exists) return removeFavorite(item.id);
  return addFavorite(item);
}

export function isFavorite(itemId) {
  return getFavorites().some((f) => f.id === itemId);
}
