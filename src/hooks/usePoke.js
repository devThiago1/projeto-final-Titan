import { useState, useEffect } from "react";
import apiClient from "../api/client";

export function usePoke(name) {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!name) return;

    async function fetchPokemon() {
      setLoading(true);
      setError(null);

      try {
        const response = await apiClient.get(`/pokemon/${name.toLowerCase()}`);

        setPokemon({
          id: response.data.id,
          name: response.data.name,
          sprite:
            response.data.sprites.other["official-artwork"].front_default ??
            response.data.sprites.front_default,

          types: response.data.types.map((t) => t.type.name),
          height: response.data.height / 10,
          weight: response.data.weight / 10,
          abilities: response.data.abilities.map((a) => a.ability.name),
          stats: response.data.stats.map((s) => ({
            name: s.stat.name,
            value: s.base_stat,
          })),
        });
      } catch (err) {
        setError(err.response?.status === 404 ? "not-found" : "request-failed");
        setPokemon(null);
      } finally {
        setLoading(false);
      }
    }

    fetchPokemon();
  }, [name]);

  return { pokemon, loading, error };
}
