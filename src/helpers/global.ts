import { HomeData } from "../types/HomeListProps";

export const orderByPodcast = (entry: HomeData[]) => {
  return entry.sort((a, b) => a.label.localeCompare(b.label));
};

export const applyFilters = (
  criteria: string,
  podcasts: HomeData[]
): HomeData[] => {
  return orderByPodcast(
    podcasts.filter(
      (item) =>
        item.label.toLowerCase().includes(criteria.toLowerCase()) ||
        item.author.toLowerCase().includes(criteria.toLowerCase())
    )
  );
};
