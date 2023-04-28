import { FC } from "react";
import { use18Intl } from "../../helpers/hooks/use18Intl";
import { HomeSearchProps } from "../../types/HomeSearchProps";
import { useHomeSearch } from "../../helpers/hooks/useHomeSearch";

const HomeSearch: FC<HomeSearchProps> = ({ count, onSearch }) => {
  const { t } = use18Intl();
  const { onKeyUp } = useHomeSearch({ onSearch });

  return (
    <section className="home-search">
      <span className="home-search_count">{count}</span>

      <input
        type="text"
        role="search"
        placeholder={t("search-placeholder")}
        {...{ onKeyUp }}
      />
    </section>
  );
};
export default HomeSearch;
