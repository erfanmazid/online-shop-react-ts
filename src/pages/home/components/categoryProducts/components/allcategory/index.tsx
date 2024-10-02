import { useGetCategory } from "../../../../../../hooks/get-category/useGetCategory";
import { ProductsEntity } from "../../../../../../types/products";
import CategoryItemsComponents from "../categoryItems";

export default function AllCategory({ data }: { data: ProductsEntity[][] }) {
  const { data: category } = useGetCategory();
  return (
    <>
      {data?.map((item: ProductsEntity[], index: number) => {
        return (
          <CategoryItemsComponents
            key={index}
            data={item}
            title={category?.data.data.categories[index].name}
            id={category?.data.data.categories[index]._id}
          />
        );
      })}
    </>
  );
}
