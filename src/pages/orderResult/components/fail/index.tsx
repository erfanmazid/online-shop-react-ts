import { useNavigate } from "react-router-dom";

export default function FailPage() {
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col gap-5 items-center justify-center md:gap-10">
      <img
        src="/image/fail.png"
        className="w-2/5 md:w-1/5 transition-all duration-400"
        alt=""
      />
      <p className="text-xl font-bold text-error md:text-4xl">
        پرداخت شما ناموفق بود !
      </p>
      <div className="flex flex-col gap-2 items-center justify-center  md:flex-row md:gap-6">
        <button
          className="text-lg text-error border border-error px-5 py-2 rounded-md"
          onClick={() => navigate("/")}
        >
          بازگشت به صفحه اصلی
        </button>
        <button
          className="text-lg text-[#fff] bg-error border border-error px-5 py-2 rounded-md w-[208px]"
          onClick={() => navigate("/cart")}
        >
          سفارش مجدد
        </button>
      </div>
    </div>
  );
}
