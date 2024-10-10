import { useMutation } from "@tanstack/react-query";
import httpRequest from "../../services/http-request";

export const useEditOrder = () => {
  return useMutation({
    mutationKey: ["editOrders"],
    mutationFn: async ({ id, data }: { id: string; data: FormData }) =>
      await httpRequest.patch(`/api/orders/${id}`, data),
    onSuccess: () => {},
    onError: () => {},
  });
};
