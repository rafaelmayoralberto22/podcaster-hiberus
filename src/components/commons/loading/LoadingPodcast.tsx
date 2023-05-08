import { FC } from "react";
import Skeleton from "react-loading-skeleton";
import { LoadingPodcastProps } from "../../../types/LoadingPodcastProps";
import LoadingBox from "./LoadingBox";

const LoadingPodcast: FC<LoadingPodcastProps> = ({ repeatItems = 12 }) => {
  return (
    <div className="home-podcast">
      <div className="home-list" role="listitem">
        {new Array(repeatItems).fill("").map((_, index) => (
          <Skeleton
            wrapper={LoadingBox}
            height={250}
            key={`loading-skeleton-${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default LoadingPodcast;
