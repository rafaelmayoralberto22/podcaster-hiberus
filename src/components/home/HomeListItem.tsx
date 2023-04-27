import { FC, useMemo } from "react";
import { EntryEntity } from "../../models/PodcastType";
import { use18Intl } from "../../helpers/hooks/use18Intl";
import { Link } from "react-router-dom";

const HomeListItem: FC<{ item: EntryEntity }> = ({ item }) => {
  const { t } = use18Intl();

  const { label, author, img, url } = useMemo(() => {
    return {
      label: item["im:name"].label,
      author: `${t("author")}: ${item["im:artist"].label}`,
      img: item?.["im:image"]?.[0]?.label,
      url: `podcast/${item.id.attributes["im:id"]}`,
    };
  }, [item]);

  return (
    <Link to={url}>
      <div className="home-list_item">
        <img
          className="home-list_item_image"
          src={img}
          alt={`${label}, ${author}`}
          role="img"
        />
        <p className="home-list_item_label">{label}</p>
        <p className="home-list_item_author">{author}</p>
      </div>
    </Link>
  );
};

export default HomeListItem;
