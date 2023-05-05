import { EntryEntity } from "../types/PodcastType";

export const orderByPodcast = (entry: EntryEntity[]) => {
  return entry.sort((a, b) =>
    a["im:name"].label.localeCompare(b["im:name"].label)
  );
};

export const applyFilters = (
  criteria: string,
  podcasts: EntryEntity[]
): EntryEntity[] => {
  return orderByPodcast(
    podcasts.filter(
      (item) =>
        item["im:name"].label.toLowerCase().includes(criteria.toLowerCase()) ||
        item["im:artist"].label.toLowerCase().includes(criteria.toLowerCase())
    )
  );
};
