import { useEffect, useState } from "react";
import { pastDays } from "../global";

type Props<S> = {
  queryKey: string;
  url: string;
  init?: S;
};

export const useQuery = <S>({ queryKey, url, init }: Props<S>) => {
  const [data, setData] = useState<S | null>(init ?? null);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      return fetch(
        `https://api.allorigins.win/get?url=${encodeURIComponent(`${url}`)}`
      );
    } catch (e) {
      throw e;
    }
  };

  const process = () => {
    if (localStorage.getItem(queryKey)) {
      processCache();
    } else {
      processNetwork();
    }
  };

  const processNetwork = async () => {
    setLoading(true);
    const response = await getData();
    if (response.ok) {
      const newData = await response.json();
      const content = newData.contents;
      localStorage.setItem(
        queryKey,
        JSON.stringify({ response: content, time: new Date() })
      );

      setData(JSON.parse(content));
    }

    setLoading(false);
  };

  const processCache = async () => {
    setLoading(true);
    const cache = JSON.parse(
      localStorage.getItem(queryKey) ??
        JSON.stringify({ response: null, time: null })
    );
    const { response, time } = cache;
    if (!!time && !!response) {
      if (pastDays(new Date(time)) > 0) {
        processNetwork();
        return;
      }
      setData(JSON.parse(response));
    } else {
      processNetwork();
      return;
    }
    setLoading(false);
  };

  useEffect(process, []);

  return { data, loading };
};
