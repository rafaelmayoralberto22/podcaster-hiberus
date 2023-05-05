import { FC, useMemo } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";
import { use18Intl } from "../../helpers/hooks/use18Intl";
import { EntryEntity } from "../../types/PodcastType";

const HomeListItem: FC<{ item: EntryEntity }> = ({ item }) => {
  const { t } = use18Intl();

  const { label, author, img, url } = useMemo(() => {
    return {
      label: item["im:name"].label,
      author: `${t("author")}: ${item["im:artist"].label}`,
      img: item?.["im:image"]?.[0]?.label,
      url: `podcast/${item.id.attributes["im:id"]}`,
    };
  }, [item, t]);

  return (
    <Link to={url}>
      <div className="home-list_item">
        <div className="home-list_item_content_image">
          <LazyLoadImage
            src={img}
            alt={`${label}, ${author}`}
            width="100%"
            height="100%"
            className="home-list_item_image"
            effect="blur"
            role="img"
          />
        </div>
        <div className="home-list_item_description">
          <p className="home-list_item_label" title={label}>
            {label}
          </p>
          <p className="home-list_item_author" title={author}>
            {author}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default HomeListItem;
