import { useQuery } from "@tanstack/react-query";
import httpRequest from "../../services/http-request";

export const useGetSubCategory = () => {
  return useQuery({
    queryKey: ["getSubCategory"],
    queryFn: async () => await httpRequest.get("/api/subcategories?limit=1000"),
  });
};
