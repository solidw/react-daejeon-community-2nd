import { useState, useEffect } from 'react';

function useAsync(callback, deps = [], skip = false) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const fetchedData = await callback();
      setData(fetchedData);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (skip) {
      return;
    }

    fetchData();
  }, deps);

  return {
    loading,
    error,
    data,
    refetch: fetchData,
  };
}

export default useAsync;
