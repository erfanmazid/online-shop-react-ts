import { useQuery } from "@tanstack/react-query";
import httpRequest from "../../services/http-request";

const useGetOrderById = (id: string) => {
  return useQuery({
    queryKey: ["orders", id],
    queryFn: async () => await httpRequest.get(`/api/orders/${id}`),
  });
};
export default useGetOrderById;
