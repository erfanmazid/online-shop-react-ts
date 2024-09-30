import { ProductsEntity } from "../../../../../../types/products";
import SingleProductCart from "../singlecart";

export default function CategoryItemsComponents({
  data,
  title,
}: {
  data: ProductsEntity[];
  title: string;
}) {
  return (
    <div>
      <h1 className="text-2xl text-primary p-1 cursor-pointer w-fit mb-2">
        {title}
      </h1>
      <div className="w-full overflow-x-auto h-52 p-1 flex gap-3">
        <div className="flex gap-x-3">
          {data?.map((item) => {
            return <SingleProductCart key={item._id} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}
