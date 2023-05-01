import { useEffect, useState } from "react";
import { CORS_PROXY_ALLOWORIGINS } from "../constants";
import { pastDays } from "../global";

type Props<S> = {
  queryKey: string;
  url: string;
  init?: S;
  callback?: (data: any, cache: boolean) => any | void;
};

export const useQuery = <S>({ queryKey, url, init, callback }: Props<S>) => {
  const [data, setData] = useState<S | null>(init ?? null);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      return fetch(
        `${CORS_PROXY_ALLOWORIGINS}?${new URLSearchParams({
          url,
        })}`
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
    try {
      const response = await getData();
      if (response.ok) {
        let newData = await response.json();

        if (callback) {
          newData = await callback(newData, false);
        }

        localStorage.setItem(
          queryKey,
          JSON.stringify({ response: newData, expireTime: new Date() })
        );

        setData(newData);
      }
    } catch (e) {
      console.error(e);
    }

    setLoading(false);
  };

  const processCache = async () => {
    setLoading(true);
    try {
      const cache = JSON.parse(
        localStorage.getItem(queryKey) ??
          JSON.stringify({ response: null, expireTime: null })
      );
      const { response, expireTime } = cache;
      if (!!expireTime && !!response) {
        if (pastDays(new Date(expireTime)) > 0 && !!response) {
          processNetwork();
          return;
        }
        const hData = callback ? await callback(response, true) : response;
        setData(hData);
      } else {
        processNetwork();
        return;
      }
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  useEffect(process, []);

  return { data, loading };
};
