import { Link } from "react-router-dom";
import {
  addToCart,
  CartItem,
  removeFromCart,
} from "../../../../../../store/cartSlice";
import useGetProduct from "../../../../../../hooks/get-product/useGetProduct";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

export default function WebSingleItem({
  item,
  setOpen,
  setProductId,
}: {
  item: CartItem;
  setOpen: (open: boolean) => void;
  setProductId: (productId: string) => void;
}) {
  const { data } = useGetProduct(item.id);
  const dispatch = useDispatch();

  function handelPlus(item: CartItem) {
    if (data?.data.data.product.quantity === item.quantity) {
      toast.warning("موجودی کافی نیست");
      return;
    }
    dispatch(addToCart(item));
  }

  function handelMines(itemId: string) {
    if (item.quantity === 1) {
      setOpen(true);
      setProductId(itemId);
      return;
    }

    dispatch(removeFromCart(itemId));
  }

  return (
    <div className="flex justify-between items-center p-2 border border-gray-4 rounded-md min-h-[128px]">
      <div className="p-3">
        <img
          src={`http://${data?.data.data.product.images[0]}`}
          className="h-32 w-32 object-contain mix-blend-multiply"
          alt=""
        />
      </div>
      <div className="w-2/3 space-y-2">
        <div className="w-fit">
          <Link to={`/product/${item.id}`}>
            <p className="text-sm font-medium line-clamp-1 hover:text-primary w-fit">
              {item.title}
            </p>
          </Link>
        </div>
        <p className="text-sm text-gray-6 font-medium">گارانتی ۱۸ ماه شرکتی</p>
        <div className="bg-tint-2 rounded-md p-1 flex gap-3 w-fit px-5 justify-between">
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
      <div className="flex flex-col gap-3 w-1/3 px-5 justify-around items-end h-full">
        <img src="/assets/trash.svg" className="w-6" alt="" />
        <p className="text-lg text-gray-8 font-medium text-center">
          {(item.price * item.quantity).toLocaleString("fa-IR")} تومان
        </p>
      </div>
    </div>
  );
}
