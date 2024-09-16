import { useQuery } from "@tanstack/react-query";
import httpRequest from "../../services/http-request";

export const useGetProduct = (query: string) => {
  return useQuery({
    queryKey: ["products", query],
    queryFn: async () =>
      query === ""
        ? await httpRequest.get(`/api/products?page=1&limit=4`)
        : await httpRequest.get(`/api/products${query}`),
  });
};
