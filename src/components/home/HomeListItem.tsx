import { FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { use18Intl } from "../../helpers/hooks/use18Intl";
import { HomeData } from "../../types/HomeListProps";
import "react-lazy-load-image-component/src/effects/blur.css";

const HomeListItem: FC<{ item: HomeData }> = ({ item }) => {
  const { t } = use18Intl();
  const { label, author, img, url } = item;
  const labelAuthor = `${t("author")}: ${author}`;

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
          <p className="home-list_item_author" title={labelAuthor}>
            {labelAuthor}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default HomeListItem;
