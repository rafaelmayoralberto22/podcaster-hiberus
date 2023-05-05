import { FC } from "react";
import { use18Intl } from "../../helpers/hooks/use18Intl";
import { useHomeSearch } from "../../helpers/hooks/useHomeSearch";
import { HomeSearchProps } from "../../types/HomeSearchProps";

const HomeSearch: FC<HomeSearchProps> = ({ count, onSearch }) => {
  const { t } = use18Intl();
  const { value, onChange } = useHomeSearch({ onSearch });

  return (
    <section className="home-search">
      <span className="home-search_count">{count}</span>

      <input
        type="text"
        role="search"
        placeholder={t("search-placeholder")}
        {...{ value, onChange }}
      />
    </section>
  );
};
export default HomeSearch;
