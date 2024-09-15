import { useMutation } from "@tanstack/react-query";
import httpRequest from "../../services/http-request";
import { ProductFormType } from "../../components/modals/addProduct";

export const useCreateProduct = () => {
  return useMutation({
    mutationKey: ["createProduct"],
    mutationFn: async (data: ProductFormType) =>
      await httpRequest.post("/api/products", data),
    onSuccess: () => {},
    onError: () => {},
  });
};
