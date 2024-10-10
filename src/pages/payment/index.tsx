import { useNavigate } from "react-router-dom";
import StepsComponent from "../cart/cart/components/steps";
import PamentComponent from "./components/pament";
import TakhfifComponent from "./components/takhfif";
import MobileConfirm from "../cart/shipping/components/mobileConfirm";

export default function PaymentResultPage() {
  const navigate = useNavigate();

  localStorage.setItem("takhfif", "0");

  const shipping = Number(localStorage.getItem("shipping"));

  return (
    <div className="flex justify-center items-center flex-col gap-7 p-5 myContainer relative">
      <div className="w-[70%] mx-auto hidden md:block">
        <StepsComponent currentNum={2} />
      </div>
      <div className="flex justify-between items-center w-full md:hidden">
        <div className="w-6"></div>
        <p className="text-xl font-bold">تکمیل اطلاعات</p>
        <img src="/assets/backArrow.svg" alt="" onClick={() => navigate(-1)} />
      </div>
      <div className="w-full flex flex-col gap-5 md:flex-row">
        <div className="flex flex-col gap-5 md:w-3/5">
          <TakhfifComponent />
          <PamentComponent />
        </div>
        <div className="w-full md:w-2/5">
          <MobileConfirm shipping={shipping} />
        </div>
      </div>
    </div>
  );
}
