import { useState } from "react";
import { toast } from "react-toastify";

export default function TakhfifComponent() {
  const [takhfif, setTakhfif] = useState<string | null>(null);

  function handelTakhfif() {
    if (takhfif === "abc") {
      toast.success("کد تخفیف با موفقیت اعمال شد");
      localStorage.setItem("takhfif", "50000");
    } else {
      toast.error("کد تخفیف اشتباه است");
    }
  }
  return (
    <div className="w-full p-5 border border-gray-4 rounded-md flex flex-col gap-3 md:flex-row items-center md:gap-10">
      <p className="w-full text-lg flex items-center gap-2 pb-3 border-b border-gray-4 md:border-none md:pb-0 md:w-fit">
        <span>
          <img src="/assets/discount.svg" alt="" />
        </span>
        ثبت کد تخفیف
      </p>
      <div className="flex gap-2 md:w-[70]">
        <input
          type="text"
          className="w-2/3 py-2 px-3 border border-gray-4 rounded-md"
          placeholder="کد تخفیف"
          onChange={(e) => setTakhfif(e.target.value)}
        />
        <button
          className={
            takhfif
              ? "bg-primary text-[#fff] text-sm px-5 py-2 rounded-md"
              : "bg-primary text-[#fff] text-sm px-5 py-2 rounded-md opacity-50"
          }
          disabled={takhfif ? false : true}
          onClick={handelTakhfif}
        >
          ثبت کد
        </button>
      </div>
    </div>
  );
}
