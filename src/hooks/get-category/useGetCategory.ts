import { useQuery } from "@tanstack/react-query";
import httpRequest from "../../services/http-request";

export const useGetCategory = () => {
  return useQuery({
    queryKey: ["getCategory"],
    queryFn: async () => await httpRequest.get("/api/categories?limit=1000"),
  });
};
