import { useMutation } from "@tanstack/react-query";
import httpRequest from "../../services/http-request";

export const useDeleteProduct = () => {
  return useMutation({
    mutationFn: async (productId: string | undefined) =>
      await httpRequest.delete(`/api/products/${productId}`),
    mutationKey: ["deleteProduct"],
  });
};
