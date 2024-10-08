import { useDispatch } from "react-redux";
import {
  addToCart,
  CartItem,
  removeFromCart,
} from "../../../../../store/cartSlice";
import SingleItem from "./SingleItem";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function CartItemsCompment({
  items,
  setOpen,
  setProductId,
}: {
  items: CartItem[];
  setOpen: (open: boolean) => void;
  setProductId: (productId: string) => void;
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handelPlus(item: CartItem) {
    dispatch(addToCart(item));
  }

  function handelMines(itemId: string) {
    if (items.find((item) => item.id === itemId)?.quantity === 1) {
      setOpen(true);
      setProductId(itemId);
      return;
    }

    dispatch(removeFromCart(itemId));
  }

  const allPrice = items.reduce(
    (value, item) => value + item.price * item.quantity,
    0
  );

  return (
    <div className="w-full flex flex-col border border-gray-4 rounded-md gap-4 p-3">
      <div className="flex flex-col overflow-y-auto max-h-[250px]">
        {items.map((item) => (
          <SingleItem
            key={item.id}
            item={item}
            handelPlus={handelPlus}
            handelMines={handelMines}
          />
        ))}
      </div>
      <div className="w-full flex flex-col mt-3 border-t border-gray-4 p-3 gap-4">
        <div className="flex justify-between items-center w-full">
          <p className="text-lg font-medium">هزینه ارسال</p>
          <p className="text-lg text-shade-1 font-medium">۰ تومان</p>
        </div>
        <div className="flex justify-between items-start w-full gap-3">
          <img src="/public/assets/warn.svg" alt="" />
          <p className="text-sm text-warning font-medium">
            هزینه ارسال در ادامه بر اساس آدرس، زمان و نحوه ارسال انتخابی شما
            محاسبه و به این مبلغ اضافه خواهد شد.
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col mt-3 border-t border-gray-4 p-3 gap-4">
        <div className="flex justify-between items-center w-full">
          <p className="text-lg font-medium">مبلغ قابل پرداخت</p>
          <p className="text-lg text-shade-1 font-medium">
            {allPrice.toLocaleString("IR-fa")} تومان
          </p>
        </div>
        <button
          className="w-full bg-primary text-[#fff] font-bold py-2 rounded-md"
          onClick={() =>
            Cookies.get("accessToken")
              ? navigate("/shipping")
              : navigate("/login")
          }
        >
          {Cookies.get("accessToken") ? "تکمیل اطلاعات" : "ورود به حساب کاربری"}
        </button>
      </div>
    </div>
  );
}
