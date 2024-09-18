import { useQuery } from "@tanstack/react-query";
import httpRequest from "../../services/http-request";

const useGetOrders = (query: string) => {
  return useQuery({
    queryKey: ["orders", query],
    queryFn: async () =>
      query === ""
        ? await httpRequest.get(`/api/orders?page=1&limit=4`)
        : await httpRequest.get(`/api/orders${query}`),
  });
};
export default useGetOrders;
