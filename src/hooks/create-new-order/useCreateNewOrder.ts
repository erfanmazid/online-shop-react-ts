import { useMutation } from "@tanstack/react-query";
import httpRequest from "../../services/http-request";

export interface ICreateNewOrder {
  user: string | undefined;
  products?: ProductsEntity[] | null;
  deliveryStatus: boolean;
  deliveryDate: string | null;
}
export interface ProductsEntity {
  product: string;
  count: number;
}

export const useCreateNewOrder = () => {
  return useMutation({
    mutationKey: ["createOrder"],
    mutationFn: async (data: ICreateNewOrder) =>
      await httpRequest.post("/api/orders", data),
    onSuccess: () => {},
    onError: () => {},
  });
};
