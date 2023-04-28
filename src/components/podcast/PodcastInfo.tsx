import { FC, PropsWithChildren } from "react";
import { TwoComponentsLayout } from "../layouts/TwoComponentLayout";
import PodcastLateral from "./PodcastLateral";
import { usePodcastInfo } from "../../helpers/hooks/usePodcastInfo";

const PodcastInfo: FC<PropsWithChildren> = ({ children }) => {
  const { info, loading } = usePodcastInfo();
  const { author, description, img, title, link } = info;
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
