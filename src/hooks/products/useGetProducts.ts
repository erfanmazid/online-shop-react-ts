import { useQuery } from "@tanstack/react-query";
import httpRequest from "../../services/http-request";

export const useGetProduct = (query: string) => {
  return useQuery({
    queryKey: ["products"],
    queryFn: async () =>
      query === ""
        ? await httpRequest.get(`/api/products`)
        : await httpRequest.get(`/api/products${query}`),
  });
};
