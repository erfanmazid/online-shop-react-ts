import { Link } from "react-router-dom";
import { CartItem } from "../../../../../store/cartSlice";

export default function SingleItem({
  item,
  handelPlus,
  handelMines,
}: {
  item: CartItem;
  handelPlus: (item: CartItem) => void;
  handelMines: (itemId: string) => void;
}) {
  return (
    <div className="flex justify-between items-center p-2 bg-gray-50 gap-2 hover:bg-gray-100">
      <div className="w-3/5 space-y-2">
        <Link to={`/product/${item.id}`}>
          <p className="text-sm font-medium line-clamp-1 hover:text-primary">
            {item.title}
          </p>
        </Link>
        <p className="text-sm text-gray-6 font-medium">
          {(item.price * item.quantity).toLocaleString("fa-IR")} تومان
        </p>
      </div>
      <div className="bg-tint-2 rounded-md p-1 flex gap-3 w-2/5 px-5 justify-between">
        <button
          className="text-lg text-primary font-medium"
          onClick={() => handelPlus(item)}
        >
          +
        </button>
        <p className="text-lg text-primary">
          {item.quantity.toLocaleString("fa-IR")}
        </p>
        <button
          className="text-lg text-primary font-medium"
          onClick={() => handelMines(item.id)}
        >
          -
        </button>
      </div>
    </div>
  );
}
