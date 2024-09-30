import { ProductsEntity } from "../../../../../../types/products";

export default function SingleProductCart({ item }: { item: ProductsEntity }) {
  //   console.log(item);

  return (
    <div className="min-w-56 w-56 border border-gray-4 rounded-md p-1 text-center h-full flex flex-col items-center gap-2 cursor-pointer overflow-hidden hover:border-primary duration-300">
      <img
        src={`http://${item.images?.[0]}`}
        className="w-28 duration-300"
        alt=""
      />
      <h1 className="text-sm line-clamp-2">{item.name}</h1>
      <p className="text-sm">{item.price.toLocaleString("fa-IR")} تومان</p>
    </div>
  );
}
