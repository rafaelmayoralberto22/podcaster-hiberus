import { ChangeEvent, useEffect, useState, startTransition } from "react";
import { HomeSearchProps } from "../../types/HomeSearchProps";
import { SEARCH_KEY_STORE } from "../constants";

export const useHomeSearch = ({
  onSearch,
}: Pick<HomeSearchProps, "onSearch">) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    const key = sessionStorage.getItem(SEARCH_KEY_STORE);
    if (key) {
      setValue(key);
    }
  }, []);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue(value);

    startTransition(() => {
      onSearch(value);
      sessionStorage.setItem(SEARCH_KEY_STORE, value);
    });
  };

  return { value, onChange };
};
