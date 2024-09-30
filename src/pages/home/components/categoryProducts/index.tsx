import { CategoriesEntity } from "../../../../types/category";
import AllCategory from "./components/allcategory";
import GetProductItem from "./getProductItem";

export default function ShowCategoryProducts({
  data,
  length,
  status,
}: {
  data: CategoriesEntity[];
  length: number;
  status: boolean;
}) {
  const list = [];
  if (status) {
    return null;
  }
  for (let i = 0; i < length; i++) {
    const param: string = `?limit=6&category=${data?.[i]._id}`;
    const porducts = GetProductItem({ param });
    list.push(porducts);
  }

  return (
    <div className="w-full flex flex-col gap-7 mt-5">
      {<AllCategory data={list} />}
    </div>
  );
}
