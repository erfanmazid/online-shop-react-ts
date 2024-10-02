import { Link } from "react-router-dom";
import ProductCart from "../../../../../../components/card";
import { ProductsEntity } from "../../../../../../types/products";

export default function CategoryItemsComponents({
  data,
  title,
  id,
}: {
  data: ProductsEntity[];
  title: string;
  id: string;
}) {
  return (
    <div>
      <Link to={`/products/all?category=${id}`}>
        <h1 className="text-2xl text-primary p-1 cursor-pointer w-fit mb-2">
          {title}
        </h1>
      </Link>
      <div className="w-full overflow-x-auto p-1 flex gap-3">
        <div className="flex gap-x-3">
          {data?.map((item) => {
            return <ProductCart key={item._id} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}
