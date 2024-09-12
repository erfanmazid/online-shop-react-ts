import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useLogOut } from "../../hooks/logout/useLogOut";
import AdminNav from "./nav/adminMobileNav";

export default function AdminHeader() {
  const { mutate, isSuccess } = useLogOut();
  const navigate = useNavigate();
  const [nav, setNav] = useState<boolean>(false);

  const handelNav = () => {
    setNav((prev) => !prev);
  };

  function handelLogOut() {
    // این جا رو چ کنم؟؟؟
    mutate();
  }

  useEffect(() => {
    if (isSuccess) {
      Cookies.remove("accessToken");
      Cookies.remove("refreshToken");
      Cookies.remove("id");
      localStorage.removeItem("role");
      toast.success("با موفقیت خارج شدید");
      navigate("/");
    }
  }, [isSuccess, navigate]);

  return (
    <header className="flex justify-between items-center mx-auto p-5 myContainer relative  dark:text-[#fff]">
      <div className="cursor-pointer w-[80px] md:w-[150px] flex justify-start items-center">
        <AdminNav status={nav} setNav={setNav} />
        <img
          src="/assets/navBar.svg"
          onClick={handelNav}
          alt=""
          className="md:hidden"
        />
        <p className="text-lg font-medium text-primary hidden md:block">
          پنل مدیریت فروشگاه
        </p>
      </div>
      <div>
        <p className="text-xl font-bold text-primary md:hidden">
          پنل مدیریت فروشگاه
        </p>
        <ul className="gap-x-5 hidden md:flex mx-auto">
          <li>
            <NavLink
              to="/admin/dashboard/inventory"
              className={({ isActive }) =>
                isActive
                  ? "text-primary pb-2 border-b border-primary duration-300"
                  : "text-gray-7 hover:text-tint-5 duration-300"
              }
            >
              مدیریت کالاها
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/dashboard/order"
              className={({ isActive }) =>
                isActive
                  ? "text-primary pb-2 border-b border-primary duration-300"
                  : "text-gray-7 hover:text-tint-5 duration-300"
              }
            >
              مدیریت سفارش ها
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/dashboard/product"
              className={({ isActive }) =>
                isActive
                  ? "text-primary pb-2 border-b border-primary duration-300"
                  : "text-gray-7 hover:text-tint-5 duration-300"
              }
            >
              موجودی و قیمت ها
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-primary pb-2 border-b border-primary duration-300 hidden lg:block"
                  : "text-gray-7 hover:text-tint-5 duration-300 hidden lg:block"
              }
            >
              بازگشت به سایت
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="w-[80px] md:w-[150px] md:justify-center flex justify-end items-center gap-5">
        <p
          className="text-error-light text-xl font-medium cursor-pointer"
          onClick={handelLogOut}
        >
          خروج
        </p>
      </div>
    </header>
  );
}
