import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: true,
      throwOnError: false,
      gcTime: 5 * 60 * 1000,
      staleTime: 0,
    },
  },
});
