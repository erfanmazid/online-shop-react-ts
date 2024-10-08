import { useQuery } from "@tanstack/react-query";
import httpRequest from "../../services/http-request";

const useGetUserInfo = (id: string | undefined) => {
  return useQuery({
    queryKey: ["user"],
    queryFn: async () => await httpRequest.get(`/api/users/${id}`),
    enabled: !!id,
  });
};
export default useGetUserInfo;
