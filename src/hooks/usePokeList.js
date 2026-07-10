import { useState, useCallback } from "react";
import apiClient from "../api/client";

const LIMIT = 20;

export function usePokeList() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const fetchMore = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    setError(null);
    try {
      const listRes = await apiClient.get("/pokemon", {
        params: { limit: LIMIT, offset },
      });

      if (listRes.data.results.length === 0) {
        setHasMore(false);
        return;
      }

      const requests = listRes.data.results.map((p) =>
        apiClient.get(`/pokemon/${p.name}`),
      );
      const responses = await Promise.all(requests);

      const newPokemons = responses.map((res) => ({
        id: res.data.id,
        name: res.data.name,
        sprite: res.data.sprites.front_default,
        types: res.data.types.map((t) => t.type.name),
      }));

      setPokemons((prev) => [...prev, ...newPokemons]);
      setOffset((prev) => prev + LIMIT);
      setHasMore(listRes.data.next !== null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [loading, hasMore, offset]);

  return { pokemons, loading, error, hasMore, fetchMore };
}
