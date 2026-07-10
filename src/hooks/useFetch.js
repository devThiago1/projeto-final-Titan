import { useCallback, useEffect, useState } from "react";
import apiClient from "../api/client";

export function useFetch(endpoint, { params, canSearch = true } = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await apiClient.get(endpoint, { params });
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [endpoint, JSON.stringify(params)]);

  useEffect(() => {
    if (canSearch) {
      fetchData();
    }
  }, [fetchData, canSearch]);

  return { data, loading, error, refetch: fetchData };
}
