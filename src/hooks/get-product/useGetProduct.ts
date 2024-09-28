import { useQuery } from "@tanstack/react-query";
import httpRequest from "../../services/http-request";

const useGetProduct = (id: string) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: async () => await httpRequest.get(`/api/products/${id}`),
    enabled: !!id,
  });
};
export default useGetProduct;
