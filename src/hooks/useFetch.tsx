import { useEffect, useState } from "react";

type TypeFetchParams = {
  url: string;
  method: string;
  body?: object;
};

export const useFetch = ({ url, method, body }: TypeFetchParams) => {
  const [data, setData] = useState<unknown>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const options = {
          method,
          headers: {
            "Content-Type": "application/json",
          },
          ...(body ? { body: JSON.stringify(body) } : {}),
        };

        const response = await fetch(url, options);

        if (!response.ok) {
          setError(`Ошибка: ${response.status}`);
        }

        const result = await response.json;
        setData(result);
      } catch (error) {
        setError(`Ошибка: ${error}`);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [body, method, url]);

  return [data, loading, error];
};
