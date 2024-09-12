import { useMutation } from "@tanstack/react-query";
import httpRequest from "../../services/http-request";

export const useSignup = () => {
  return useMutation({
    mutationKey: ["signup"],
    mutationFn: async (data) =>
      await httpRequest.post("/api/auth/signup", data),
    onSuccess: () => {},
    onError: () => {},
  });
};
