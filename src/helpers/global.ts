import { EntryEntity } from "../types/PodcastType";

export const flattenMessages = (nestedMessages: any, prefix = "") => {
  return Object.keys(nestedMessages).reduce((messages: any, key: any) => {
    const value = nestedMessages[key];
    const prefixedKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === "string") {
      messages[prefixedKey] = value;
    } else {
      Object.assign(messages, flattenMessages(value, prefixedKey));
    }
    return messages;
  }, {});
};

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

export const msToTime = (duration: number) => {
  const date = new Date(duration);
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  return `${minutes}:${seconds}`;
};
