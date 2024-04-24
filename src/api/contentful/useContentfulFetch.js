import { useState, useEffect } from "react";
import { client } from "./client";

export function useContentfulEntries(contentType) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    client
      .getEntries({
        content_type: contentType,
      })
      .then((res) => {
        setData(res.items.map((item) => item.fields));
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { data, loading, error };
}
