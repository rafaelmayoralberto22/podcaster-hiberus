import { FC, PropsWithChildren } from "react";
import { usePodcastInfo } from "../../helpers/hooks/usePodcastInfo";
import EmptyList from "../empty/EmptyList";
import { TwoComponentsLayout } from "../layouts/TwoComponentLayout";
import PodcastLateral from "./PodcastLateral";

const PodcastInfo: FC<PropsWithChildren> = ({ children }) => {
  const { info, loading } = usePodcastInfo();
  const { author, description, img, title, link } = info;

  if (!title && !description && !author && !link && !loading)
    return <EmptyList />;

  return (
    <TwoComponentsLayout
      type="HORIZONTAL"
      first={
        <PodcastLateral
          {...{ author, description, img, title, link, loading }}
        />
      }
      second={<>{children}</>}
    />
  );
};

export default PodcastInfo;
