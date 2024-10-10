import { useState } from "react";
import { useNavigate } from "react-router-dom";
import StepsComponent from "../cart/components/steps";
import AddressComponent from "./components/address";
import DatePickerComponent from "./components/datePicker";
import DeliveryComponent from "./components/delivery";
import MobileConfirm from "./components/mobileConfirm";

export default function ShippingPage() {
  const navigate = useNavigate();
  const [shipping, setShipping] = useState(0);
  const [shippingDate, setShippingDate] = useState<string | null>(null);
  localStorage.setItem("shippingDate", shippingDate as string);
  localStorage.setItem("shipping", shipping.toString());

  return (
    <div className="flex justify-center items-center flex-col gap-7 p-5 myContainer relative">
      <div className="w-[70%] mx-auto hidden md:block">
        <StepsComponent currentNum={1} />
      </div>
      <div className="flex justify-between items-center w-full md:hidden">
        <div className="w-6"></div>
        <p className="text-xl font-bold">تکمیل اطلاعات</p>
        <img src="/assets/backArrow.svg" alt="" onClick={() => navigate(-1)} />
      </div>
      <div className="w-full flex flex-col gap-5 md:flex-row">
        <div className="flex flex-col gap-5 md:w-3/5">
          <DeliveryComponent setShipping={setShipping} />
          <AddressComponent />
          <DatePickerComponent setShippingDate={setShippingDate} />
        </div>
        <div className="w-full md:w-2/5">
          <MobileConfirm shipping={shipping} />
        </div>
      </div>
    </div>
  );
}
