import { useGetProduct } from "../../../../hooks/products/useGetProducts";

export default function GetProductItem({ param }: { param: string }) {
  const { data } = useGetProduct(param);
  const items = data?.data.data.products;

  return items;
}
