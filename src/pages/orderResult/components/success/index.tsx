import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ICreateNewOrder,
  useCreateNewOrder,
} from "../../../../hooks/create-new-order/useCreateNewOrder";
import { CartItem, clearCart } from "../../../../store/cartSlice";
import { useCartSelector } from "../../../../store/hooks";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { persistor } from "../../../../store/store";

export default function SuccessPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { mutate } = useCreateNewOrder();

  const cartItems: CartItem[] = useCartSelector(
    (state) =>
      // state.cart.items.reduce((value, item) => value + item.quantity, 0)
      state.cart.items
  );

  const products = cartItems.map((item) => {
    return {
      product: item.id,
      count: item.quantity,
    };
  });

  const payload: ICreateNewOrder = {
    products,
    user: Cookies.get("id"),
    deliveryStatus: false,
    deliveryDate: localStorage.getItem("shippingDate"),
  };
  console.log(payload);

  let orderPlaced = false;
  useEffect(() => {
    if (!orderPlaced) {
      mutate(payload);
      persistor.purge();
      dispatch(clearCart());
      orderPlaced = true;
    }
  }, [orderPlaced]);

  return (
    <div className="w-full flex flex-col gap-5 items-center justify-center md:gap-10">
      <img
        src="/image/success.png"
        className="w-2/5 md:w-1/5 transition-all duration-400"
        alt=""
      />
      <p className="text-xl font-bold text-primary md:text-4xl">
        پرداخت شما با موفقیت انجام شد!
      </p>
      <div className="flex flex-col gap-2 items-center justify-center  md:flex-row md:gap-6">
        <button
          className="text-lg text-primary border border-primary px-5 py-2 rounded-md"
          onClick={() => navigate("/")}
        >
          بازگشت به صفحه اصلی
        </button>
        <button
          className="text-lg text-[#fff] bg-primary border border-primary px-5 py-2 rounded-md w-[208px]"
          onClick={() => navigate("/profile")}
        >
          پیگیری سفارش
        </button>
      </div>
    </div>
  );
}
