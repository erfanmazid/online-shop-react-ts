import { useGetCategory } from "../../../../../../hooks/get-category/useGetCategory";
import { ProductsEntity } from "../../../../../../types/products";
import CategoryItemsComponents from "../categoryItems";

export default function AllCategory({ data }: { data: ProductsEntity[][] }) {
  const { data: category } = useGetCategory();

  return (
    <div className="grid grid-cols-1 gap-6">
      {data?.map((item: ProductsEntity[], index: number) => {
        const categoryName = category?.data.data.categories[index]?.name;
        const categoryId = category?.data.data.categories[index]?._id;

        if (!categoryName || !categoryId) return null;

        return (
          <CategoryItemsComponents
            key={index}
            data={item}
            title={categoryName}
            id={categoryId}
          />
        );
      })}
    </div>
  );
}
