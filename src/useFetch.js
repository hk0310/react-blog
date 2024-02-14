import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    fetch(url, { signal: abortController.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error(`${res.status}: ${res.statusText}`);
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        if (!err.name === "AbortError") {
          setError(err.message);
          setIsPending(false);
        }
      });

    return () => abortController.abort();
  }, [url]);

  return { data, isPending, error };
}
