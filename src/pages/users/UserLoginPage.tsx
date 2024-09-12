import { Link, useNavigate } from "react-router-dom";
import LoginForm from "../../components/forms/loginForm";

export default function UserLoginPage() {
  const navigat = useNavigate();
  return (
    <div className="w-full h-screen flex justify-center items-center p-5 gap-12 relative md:flex-row myContainer mx-auto dark:bg-black">
      <img
        src="/assets/backArrow.svg"
        alt=""
        className="absolute top-5 left-5 md:hidden dark:fill-primary"
        onClick={() => navigat(-1)}
      />
      <div className="w-full h-full flex flex-col justify-center items-center p-5 gap-12">
        <h1 className="text-primary text-2xl font-medium text-center">
          ورود به حساب کاربری
        </h1>
        <LoginForm />
        <Link to={"/signup"} className="text-shade-1 text-lg font-medium">
          ساخت حساب کاربری
        </Link>
        <button
          onClick={() => navigat(-1)}
          className="font-medium hidden md:block"
        >
          بازگشت
        </button>
      </div>
      <div className="hidden md:block">
        <img src="/image/login-image.jpg" alt="" />
      </div>
    </div>
  );
}
