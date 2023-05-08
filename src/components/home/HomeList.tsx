import { FC, useId } from "react";
import { HomeListProps } from "../../types/HomeListProps";
import EmptyList from "../commons/empty/EmptyList";
import HomeListItem from "./HomeListItem";

const HomeList: FC<HomeListProps> = ({ data }) => {
  const id = useId();

  if (!data.length) return <EmptyList />;

  return (
    <div className="home-list">
      {data.map((item) => (
        <HomeListItem
          key={`${id}-${item.id.attributes["im:id"]}`}
          {...{ item }}
        />
      ))}
    </div>
  );
};

export default HomeList;
