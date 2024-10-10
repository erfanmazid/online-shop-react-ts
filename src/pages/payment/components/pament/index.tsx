import { useState } from "react";

export default function PaymentComponent() {
  const [selectedBank, setSelectedBank] = useState<number | null>(null);

  const banks = [
    { id: 1, src: "/image/bank/1.png" },
    { id: 2, src: "/image/bank/2.png" },
    { id: 3, src: "/image/bank/3.png" },
  ];

  const handleSelectBank = (id: number) => {
    setSelectedBank(id);
  };

  return (
    <div className="w-full p-5 border border-gray-4 rounded-md flex flex-col gap-3 md:flex-row items-center md:gap-10">
      <p className="w-full text-lg flex items-center gap-2 pb-3 border-b border-gray-4 md:border-none md:pb-0 md:w-fit">
        <span>
          <img src="/assets/cash-cart.svg" alt="payment gateway" />
        </span>
        درگاه پرداخت
      </p>
      <div className="flex flex-col gap-2 w-full md:w-[70%]">
        <div className="flex gap-3 mx-auto">
          {banks.map((bank) => (
            <img
              key={bank.id}
              src={bank.src}
              alt={`bank ${bank.id}`}
              className={`w-16 h-16 md:w-24 md:h-24 cursor-pointer transition-all duration-300 ${
                selectedBank === bank.id
                  ? "border-2 border-primary rounded-md filter-none"
                  : "filter grayscale"
              }`}
              onClick={() => handleSelectBank(bank.id)}
            />
          ))}
        </div>
        <div className="flex flex-col gap-3 mx-auto text-center">
          <p className="text-[10px] font-bold text-gray-5 md:text-lg">
            پرداخت از طریق کلیه کارت‌های عضو شتاب امکان‌پذیر است.
          </p>
          <p className="text-[10px] font-bold text-gray-5 md:text-lg">
            (لطفا قبل از پرداخت فیلترشکن خود را خاموش کنید.)
          </p>
        </div>
      </div>
    </div>
  );
}
