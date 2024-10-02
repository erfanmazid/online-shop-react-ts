import { Skeleton } from "antd";
import { useGetProduct } from "../../../../../hooks/products/useGetProducts";
import { ProductsEntity } from "../../../../../types/products";
import ProductsParamsGenerator from "../../params";
import ProductCart from "../card";

export default function AllCard() {
  const param = ProductsParamsGenerator();
  const { data, isLoading } = useGetProduct(param);
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  if (isLoading) {
    {
      arr.map((item) => {
        console.log(item);

        return <Skeleton key={item} />;
      });
    }
  }

  return (
    <>
      {data?.data.data.products.map((item: ProductsEntity) => {
        return <ProductCart key={item._id} item={item} />;
      })}
    </>
  );
}
