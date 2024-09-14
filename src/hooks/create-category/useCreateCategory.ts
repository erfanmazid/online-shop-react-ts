import { useMutation } from "@tanstack/react-query";
import httpRequest from "../../services/http-request";

export const useCreateCategory = () => {
  return useMutation({
    mutationKey: ["createCategory"],
    mutationFn: async (data) => await httpRequest.post("/api/categories", data),
    onSuccess: () => {},
    onError: () => {},
  });
};
