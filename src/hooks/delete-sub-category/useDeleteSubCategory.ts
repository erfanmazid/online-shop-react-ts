import { useMutation } from "@tanstack/react-query";
import httpRequest from "../../services/http-request";

export const useDeleteSubCategory = () => {
  return useMutation({
    mutationKey: ["deleteSubCategory"],
    mutationFn: async (id: string) =>
      await httpRequest.delete(`/api/subcategories/${id}`),
  });
};
