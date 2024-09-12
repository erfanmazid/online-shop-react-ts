import { useMutation } from "@tanstack/react-query";
import httpRequest from "../../services/http-request";

export const useLogOut = () => {
  return useMutation({
    mutationKey: ["logout"],
    mutationFn: async () => await httpRequest("/api/auth/logout"),
    onSuccess: (res) => {
      console.log(res);
    },
    onError: () => {},
  });
};
