import { useQuery } from "@tanstack/react-query";
import httpRequest from "../../services/http-request";

const useGetOrderById = (id: string | undefined) => {
  return useQuery({
    queryKey: ["orders", id],
    queryFn: async () => await httpRequest.get(`/api/orders/${id}`),
    enabled: !!id,
  });
};
export default useGetOrderById;
