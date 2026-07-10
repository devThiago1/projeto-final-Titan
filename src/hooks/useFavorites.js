import { useState, useCallback, useEffect } from "react";

const STORAGE_KEY = "pokedex-favorites";

function loadFavorites() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [];
  } catch {
    return [];
  }
}

export function useFavorites() {
  const [favorites, setFavorites] = useState(loadFavorites);

  const toggleFavorite = useCallback((pokemon) => {
    setFavorites((prev) => {
      const exists = prev.some((p) => p.id === pokemon.id);
      return exists
        ? prev.filter((p) => p.id !== pokemon.id)
        : [...prev, pokemon];
    });
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const isFavorite = useCallback(
    (id) => favorites.some((p) => p.id === id),
    [favorites],
  );

  return { favorites, toggleFavorite, isFavorite };
}
