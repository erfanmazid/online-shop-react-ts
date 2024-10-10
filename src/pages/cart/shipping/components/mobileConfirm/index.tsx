import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { CartItem } from "../../../../../store/cartSlice";
import { useCartSelector } from "../../../../../store/hooks";
export default function MobileConfirm({ shipping }: { shipping: number }) {
  const navigate = useNavigate();

  const location = window.location.pathname;
  const takhfif = Number(localStorage.getItem("takhfif"));

  const cartItems: CartItem[] = useCartSelector(
    (state) =>
      // state.cart.items.reduce((value, item) => value + item.quantity, 0)
      state.cart.items
  );

  const totalPrice = cartItems.reduce(
    (value, item) => value + item.price * item.quantity,
    0
  );

  return (
    <div className="w-full h-fit border border-gray-4 rounded-md p-5">
      <div className="flex justify-between items-center">
        <p className="text-lg font-medium">
          سبد خرید ({cartItems.length.toLocaleString("fa-IR")})
        </p>
      </div>
      {location === "/payment" && (
        <div className="w-full flex flex-col mt-3 border-t border-gray-4 p-3 gap-4">
          <div className="flex justify-between items-center w-full">
            <p className="text-lg font-medium">تخفیف</p>
            <p className="text-lg text-shade-1 font-medium">
              {takhfif.toLocaleString("fa-IR")} تومان
            </p>
          </div>
        </div>
      )}
      <div className="w-full flex flex-col mt-3 border-t border-gray-4 p-3 gap-4">
        <div className="flex justify-between items-center w-full">
          <p className="text-lg font-medium">هزینه ارسال</p>
          <p className="text-lg text-shade-1 font-medium">
            {shipping.toLocaleString("fa-IR")} تومان
          </p>
        </div>
        {shipping === 0 && (
          <div className="flex justify-between items-start w-full gap-3">
            <img src="/public/assets/warn.svg" className="w-10" alt="" />
            <p className="text-sm text-warning font-medium">
              هزینه ارسال در ادامه بر اساس آدرس، زمان و نحوه ارسال انتخابی شما
              محاسبه و به این مبلغ اضافه خواهد شد.
            </p>
          </div>
        )}
      </div>
      <div className="w-full flex flex-col mt-3 border-t border-gray-4 p-3 gap-4">
        <div className="flex justify-between items-center w-full">
          <p className="text-lg font-medium">مبلغ قابل پرداخت</p>
          <p className="text-lg text-shade-1 font-medium">
            {(shipping > 0
              ? shipping + totalPrice - takhfif
              : totalPrice - takhfif
            ).toLocaleString("fa-IR")}{" "}
            تومان
          </p>
        </div>
        <button
          className="w-full bg-primary text-[#fff] font-bold py-2 rounded-md"
          disabled={shipping === 0}
          onClick={() =>
            location === "/payment"
              ? navigate("/profile")
              : navigate("/payment")
          }
        >
          {Cookies.get("accessToken")
            ? location === "/payment"
              ? "تایید و پرداخت"
              : "تکمیل اطلاعات"
            : "ورود به حساب کاربری"}
        </button>
      </div>
    </div>
  );
}
