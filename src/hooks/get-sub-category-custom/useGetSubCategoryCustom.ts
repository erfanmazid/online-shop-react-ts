import { useQuery } from "@tanstack/react-query";
import httpRequest from "../../services/http-request";

export const useGetSubCategoryCustom = ({
  params,
  key,
}: {
  params: string;
  key: unknown;
}) => {
  return useQuery({
    queryKey: ["getSubCategoryCustom", key],
    queryFn: async () =>
      await httpRequest.get(`/api/subcategories?limit=1000&category=${params}`),
    enabled: !!key,
  });
};
