export default function WebFooter() {
  return (
    <footer className="w-full h-64 bg-primary p-5 flex justify-between items-center">
      <div className="myContainer w-full flex">
        <div className="w-full md:w-1/2 flex justify-around items-center p-2">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl text-[#fff] font-bold w-fit">
              دسترسی آسان
            </h2>
            <p className="text-[#fff] text-lg cursor-pointer w-fit">
              پرسش های متداول
            </p>
            <p className="text-[#fff] text-lg cursor-pointer w-fit">پشتیبانی</p>
            <p className="text-[#fff] text-lg cursor-pointer w-fit">
              درباره ما{" "}
            </p>
            <div className="flex gap-2">
              <img
                src="/assets/twitter.svg"
                alt="twitter"
                className="cursor-pointer"
              />
              <img
                src="/assets/instagram.svg"
                alt="instagram"
                className="cursor-pointer"
              />
              <img
                src="/assets/telegram.svg"
                alt="telegram"
                className="cursor-pointer"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl text-[#fff] font-bold">شعب فروشگاه</h2>
            <p className="text-[#fff] text-lg cursor-pointer w-fit">تهران</p>
            <p className="text-[#fff] text-lg cursor-pointer w-fit">مشهد</p>
            <p className="text-[#fff] text-lg cursor-pointer w-fit">شیراز</p>
            <p className="text-[#fff] text-lg cursor-pointer w-fit">اصفهان</p>
          </div>
        </div>
        <div className="hidden md:w-1/2 md:flex flex-col gap-2 p-2">
          <h2 className="text-2xl text-[#fff] font-bold w-fit">پیام به ما</h2>
          <div className="flex gap-5">
            <div className="flex flex-col gap-2 w-1/2">
              <input
                type="text"
                placeholder="نام و نام خانوادگی"
                className="py-[6px] px-3 rounded-md bg-primary border border-[#fff] text-[#fff] placeholder:text-[#fff]"
              />
              <input
                type="text"
                placeholder="شماره تماس"
                className="py-[6px] px-3 rounded-md bg-primary border border-[#fff] text-[#fff] placeholder:text-[#fff]"
              />
              <input
                type="text"
                placeholder="ایمیل"
                className="py-[6px] px-3 rounded-md bg-primary border border-[#fff] text-[#fff] placeholder:text-[#fff]"
              />
            </div>
            <div className="w-1/2 flex flex-col gap-2">
              <textarea
                className="py-1 px-3 rounded-md bg-primary border border-[#fff] text-[#fff] placeholder:text-[#fff] h-full resize-none"
                placeholder="پیام"
                name=""
                id=""
              ></textarea>
              <input
                type="button"
                value={"ارسال پیام"}
                className="py-1 px-3 rounded-md bg-primary border border-[#fff] text-[#fff] placeholder:text-[#fff] cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
