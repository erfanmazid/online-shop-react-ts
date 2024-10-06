import { CategoriesEntity } from "../../../../types/category";
import AllCategory from "./components/allcategory";
import GetProductItem from "./getProductItem";

export default function ShowCategoryProducts({
  data,
  length,
  isLoading,
}: {
  data: CategoriesEntity[];
  length: number;
  isLoading: boolean;
}) {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-24">
        <div className="loader" />
      </div>
    );
  }

  const list = data?.slice(0, length).map((category) => {
    const param = `?limit=6&category=${category._id}`;
    return GetProductItem({ param });
  });

  return (
    <div className="w-full flex flex-col gap-7 mt-6">
      <AllCategory data={list} />
    </div>
  );
}
