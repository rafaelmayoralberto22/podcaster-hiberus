import { ChangeEvent, useEffect, useState, useTransition } from "react";
import { HomeSearchProps } from "../../types/HomeSearchProps";
import { SEARCH_KEY_STORE } from "../constants";

export const useHomeSearch = ({
  onSearch,
}: Pick<HomeSearchProps, "onSearch">) => {
  const [isPending, startTransition] = useTransition();
  const [value, setValue] = useState("");

  useEffect(() => {
    const key = localStorage.getItem(SEARCH_KEY_STORE);
    if (key) {
      setValue(key);
    }
  }, []);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    !isPending &&
      startTransition(() => {
        const value = e.target.value;
        onSearch(value);
        setValue(value);
        localStorage.setItem(SEARCH_KEY_STORE, value);
      });
  };

  return { value, onChange };
};
