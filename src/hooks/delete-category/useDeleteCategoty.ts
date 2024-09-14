import { useMutation } from "@tanstack/react-query";
import httpRequest from "../../services/http-request";

export const useDeleteCategory = () => {
  return useMutation({
    mutationKey: ["deleteCategory"],
    mutationFn: async (id: string) =>
      await httpRequest.delete(`/api/categories/${id}`),
  });
};
