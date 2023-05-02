import Skeleton from "react-loading-skeleton";
import LoadingBox from "./LoadingBox";

const LoadingPodcast = () => {
  return (
    <div className="home-podcast">
      <div className="home-list" role="listitem">
        {new Array(12).fill("").map((_, index) => (
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
