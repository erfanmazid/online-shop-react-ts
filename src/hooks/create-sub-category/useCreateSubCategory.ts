import { useMutation } from "@tanstack/react-query";
import httpRequest from "../../services/http-request";

export const useCreateSubCategory = () => {
  return useMutation({
    mutationKey: ["createSubCategory"],
    mutationFn: async (data: { category: string; name: string }) =>
      await httpRequest.post("/api/subcategories", data),
    onSuccess: () => {},
    onError: () => {},
  });
};
