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
    <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <Link to={`/products/all?category=${id}`}>
        <h1 className="text-lg sm:text-xl font-bold text-primary cursor-pointer mb-4">
          {title}
        </h1>
      </Link>
      <div className="w-full overflow-x-auto flex gap-3 p-2">
        {data?.map((item) => (
          <ProductCart key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
}
