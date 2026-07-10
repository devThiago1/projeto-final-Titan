import { useState, useCallback } from "react";
import apiClient from "../api/client";

export function usePokeSearch() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const search = useCallback(async (query) => {
    if (!query.trim()) {
      setResult(null);
      setError(null);
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const response = await apiClient.get(
        `/pokemon/${query.trim().toLowerCase()}`,
      );
      setResult({
        id: response.data.id,
        name: response.data.name,
        sprite: response.data.sprites.front_default,
        types: response.data.types.map((t) => t.type.name),
      });
    } catch (err) {
      setResult(null);
      setError(err.response?.status === 404 ? "not-found" : "request-failed");
    } finally {
      setLoading(false);
    }
  }, []);

  const clearSearch = useCallback(() => {
    setResult(null);
    setError(null);
  }, []);

  return { result, loading, error, search, clearSearch };
}
