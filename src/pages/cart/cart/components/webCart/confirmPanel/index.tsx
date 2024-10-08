import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { CartItem } from "../../../../../../store/cartSlice";
export default function WebConfirmPanel({
  allPrice,
  items,
  setDeleteAll,
  open,
}: {
  allPrice: number;
  items: CartItem[];
  setDeleteAll: (open: boolean) => void;
  open: (open: boolean) => void;
}) {
  const navigate = useNavigate();
  function handeleDelete() {
    setDeleteAll(true);
    open(true);
  }
  return (
    <div className="w-2/5 h-fit border border-gray-4 rounded-md p-5">
      <div className="flex justify-between items-center">
        <p className="text-lg font-medium">سبد خرید ({items.length})</p>
        <img src="/assets/trash.svg" onClick={handeleDelete} alt="" />
      </div>
      <div className="w-full flex flex-col mt-3 border-t border-gray-4 p-3 gap-4">
        <div className="flex justify-between items-center w-full">
          <p className="text-lg font-medium">هزینه ارسال</p>
          <p className="text-lg text-shade-1 font-medium">۰ تومان</p>
        </div>
        <div className="flex justify-between items-start w-full gap-3">
          <img src="/public/assets/warn.svg" className="w-10" alt="" />
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
            {allPrice.toLocaleString("fa-IR")} تومان
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
