export type HomeListProps = {
  data: HomeData[];
};

export type HomeData = {
  id: string;
  label: string;
  author: string;
  img: string;
  url: string;
};
