import { useMutation } from "@tanstack/react-query";
import httpRequest from "../../services/http-request";

export const useCreateProduct = () => {
  return useMutation({
    mutationKey: ["createProduct"],
    mutationFn: async (data: FormData) =>
      await httpRequest.post("/api/products", data),
    onSuccess: () => {},
    onError: () => {},
  });
};
