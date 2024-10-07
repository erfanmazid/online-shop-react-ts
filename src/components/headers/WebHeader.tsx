import Cookies from "js-cookie";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import MobileNav from "./nav/mobileNav";
import { Badge } from "antd";
import { useCartSelector } from "../../store/hooks";

export default function WebHeader() {
  const [nav, setNav] = useState<boolean>(false);
  const [isCartHovered, setIsCartHovered] = useState<boolean>(false);

  const role = localStorage.getItem("role");
  const handelNav = () => {
    setNav((prev) => !prev);
  };

  const accessToken: string | undefined = Cookies.get("accessToken");
  const navigate = useNavigate();

  const cartItems = useCartSelector((state) => state.cart.items);
  const totalItems = cartItems.length;

  return (
    <div className="shadow-md">
      <header className="flex justify-between items-center mx-auto p-5 myContainer relative dark:text-[#fff]">
        <div className="cursor-pointer w-[52px] md:w-[150px] flex justify-start items-center">
          <MobileNav status={nav} setNav={setNav} />
          <svg
            className="md:hidden"
            onClick={handelNav}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 7.75H3C2.59 7.75 2.25 7.41 2.25 7C2.25 6.59 2.59 6.25 3 6.25H21C21.41 6.25 21.75 6.59 21.75 7C21.75 7.41 21.41 7.75 21 7.75Z"
              fill="#353535"
              className="fill-primary"
            />
            <path
              d="M21 12.75H3C2.59 12.75 2.25 12.41 2.25 12C2.25 11.59 2.59 11.25 3 11.25H21C21.41 11.25 21.75 11.59 21.75 12C21.75 12.41 21.41 12.75 21 12.75Z"
              fill="#353535"
              className="fill-primary"
            />
            <path
              d="M21 17.75H3C2.59 17.75 2.25 17.41 2.25 17C2.25 16.59 2.59 16.25 3 16.25H21C21.41 16.25 21.75 16.59 21.75 17C21.75 17.41 21.41 17.75 21 17.75Z"
              fill="#353535"
              className="fill-primary"
            />
          </svg>
          <Link to="/">
            <h1 className="text-3xl text-center font-bold text-primary hidden md:block md:w-[150px]">
              اسم سایت
            </h1>
          </Link>
        </div>
        <div>
          <Link to="/">
            <h1 className="text-3xl font-bold text-primary md:hidden">
              اسم سایت
            </h1>
          </Link>
          <nav className="hidden md:block">
            <ul className="flex gap-x-7 font-semibold">
              <li>
                <NavLink
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
                  to="/products/all"
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
          </nav>
        </div>
        <div className="flex gap-3 md:w-[150px] items-center justify-center relative">
          <Badge count={totalItems} size="default">
            <div
              className="bg-tint-1 rounded w-6 h-6 md:w-10 md:h-10 flex justify-center items-center cursor-pointer relative"
              onMouseEnter={() => setIsCartHovered(true)}
              onMouseLeave={() => setIsCartHovered(false)}
              onClick={() => navigate("/cart")}
            >
              <img src="/assets/cart.svg" className="md:w-6 md:h-6" alt="" />
            </div>
          </Badge>

          {/* Dropdown نمایش سبد خرید */}
          {isCartHovered && totalItems > 0 && (
            <div
              className="absolute top-full left-0 bg-[#fff] shadow-lg w-64 p-4 rounded-lg z-10 transition-all duration-300 ease-in-out"
              onMouseEnter={() => setIsCartHovered(true)}
              onMouseLeave={() => setIsCartHovered(false)}
              style={{
                opacity: isCartHovered ? 1 : 0,
                transform: isCartHovered ? "scale(1)" : "scale(0.95)",
              }}
            >
              <ul>
                {cartItems.map((item) => (
                  <li
                    key={item.id}
                    className="flex justify-between items-center mb-2"
                  >
                    <div>
                      <p className="text-sm font-bold line-clamp-1">
                        {item.title}
                      </p>
                      <p className="text-xs text-gray-7">
                        تعداد: {item.quantity}
                      </p>
                    </div>
                    <p className="text-sm font-bold text-primary">
                      {(item.price * item.quantity).toLocaleString("fa-IR")}{" "}
                      تومان
                    </p>
                  </li>
                ))}
              </ul>
              <div className="mt-4 text-center">
                <button
                  onClick={() => navigate("/cart")}
                  className="w-full bg-primary text-[#fff] py-2 rounded-lg"
                >
                  مشاهده سبد خرید
                </button>
              </div>
            </div>
          )}

          <div
            className="bg-tint-1 rounded w-6 h-6 flex md:w-10 md:h-10 justify-center items-center cursor-pointer"
            onClick={
              accessToken
                ? role === "ADMIN"
                  ? () => navigate("/admin/dashboard/inventory")
                  : () => navigate("/profile")
                : () => navigate("/login")
            }
          >
            <img src="/assets/user.svg" className="md:w-6 md:h-6" alt="" />
          </div>
        </div>
      </header>
    </div>
  );
}
