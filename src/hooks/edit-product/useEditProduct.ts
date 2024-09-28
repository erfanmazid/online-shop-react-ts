import { useMutation } from "@tanstack/react-query";
import httpRequest from "../../services/http-request";

export const useEditProduct = () => {
  return useMutation({
    mutationKey: ["editProduct"],
    mutationFn: async ({ id, data }: { id: string; data: FormData }) =>
      await httpRequest.patch(`/api/products/${id}`, data),
    onSuccess: () => {},
    onError: () => {},
  });
};
