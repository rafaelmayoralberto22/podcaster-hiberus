import { KeyboardEvent, useTransition } from "react";
import { HomeSearchProps } from "../../types/HomeSearchProps";

export const useHomeSearch = ({
  onSearch,
}: Pick<HomeSearchProps, "onSearch">) => {
  const [isPending, startTransition] = useTransition();

  const onKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    !isPending &&
      startTransition(() => {
        onSearch((e.target as HTMLInputElement).value);
      });
  };

  return { onKeyUp };
};
