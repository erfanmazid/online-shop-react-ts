import { Dispatch, SetStateAction } from "react";
import { NavLink } from "react-router-dom";

interface props {
  status: boolean;
  setNav: Dispatch<SetStateAction<boolean>>;
}

export default function MobileNav({ status, setNav }: props) {
  function handelClose() {
    setNav((prev) => !prev);
  }
  return (
    <div
      className={
        status
          ? "h-screen w-screen bg-gray-6 bg-opacity-50 absolute right-0 top-0 duration-500 md:hidden z-50"
          : "h-screen w-screen bg-gray-6 bg-opacity-50 absolute -top-0 -right-[769px] duration-500 md:hidden z-50"
      }
      onClick={handelClose}
    >
      <div
        className="h-screen w-[70%] bg-[#fff] duration-700 p-5 flex flex-col gap-y-3 sm:w-[55%]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full flex justify-between items-center">
          <div>
            <img src="/assets/close.svg" onClick={handelClose} alt="" />
          </div>
          <div>
            <img src="/image/logo.png" className="w-9 h-9" alt="logo" />
          </div>
        </div>
        <ul className="flex flex-col gap-y-7 font-semibold mt-7">
          <li>
            <NavLink
              onClick={handelClose}
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-primary pb-2 border-b border-primary duration-300"
                  : "text-gray-7 hover:text-tint-5 duration-300"
              }
            >
              صفحه اصلی
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={handelClose}
              to="/products/category/all"
              className={({ isActive }) =>
                isActive
                  ? "text-primary pb-2 border-b border-primary duration-300"
                  : "text-gray-7 hover:text-tint-5 duration-300"
              }
            >
              لیست محصولات
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={handelClose}
              to="/about-us"
              className={({ isActive }) =>
                isActive
                  ? "text-primary pb-2 border-b border-primary duration-300"
                  : "text-gray-7 hover:text-tint-5 duration-300"
              }
            >
              ارتباط با ما
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
