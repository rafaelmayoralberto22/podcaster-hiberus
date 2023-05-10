import { QueryClient } from "@tanstack/react-query";

const time = 1000 * 60 * 60 * 24; // 24 hours

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: time,
      cacheTime: time,
      refetchOnWindowFocus: false,
    },
  },
});
