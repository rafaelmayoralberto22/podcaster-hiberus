import { Episode } from "../types/Epidsode";
import { PodcastInfoProps } from "../types/PodcastLateralProps";
import { EntryEntity } from "../types/PodcastType";

export const pastDays = (date: Date) => {
  const now = new Date();

  const diff = now.getTime() - date.getTime();
  return Math.round(diff / (24 * 60 * 60 * 1000));
};

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

export const isEpisodesType = (entity: PodcastInfoProps): entity is Episode =>
  !!(entity as Episode)?.results;
