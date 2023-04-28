import { FC, useId } from "react";
import { HomeListProps } from "../../types/HomeListProps";
import HomeListItem from "./HomeListItem";
import EmptyList from "../empty/EmptyList";

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
