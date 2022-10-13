import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setIspending] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setIspending(true);
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        setIspending(false);
        setError(null);
        setData(data);
      } catch (error) {
        setIspending(false);
        setData(null);
        setError("could not fetch the data");
      }
    };
    fetchData();
    return () => controller.abort();
  }, [url]);
  return { data, isPending, error };
}
