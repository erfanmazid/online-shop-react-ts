import { Link, useNavigate } from "react-router-dom";
import SignupForm from "../../components/forms/signupForm";

export default function UserSignupPage() {
  const navigat = useNavigate();
  return (
    <div className="w-full h-fit overflow-y-scroll flex justify-center items-center p-5 gap-12 relative md:flex-row myContainer mx-auto dark:bg-black md:h-screen">
      <img
        src="/assets/backArrow.svg"
        alt=""
        className="absolute top-5 left-5 md:hidden dark:fill-primary"
        onClick={() => navigat(-1)}
      />
      <div className="w-full h-full flex flex-col justify-center items-center p-5 gap-8">
        <h1 className="text-primary text-2xl font-medium">
          ساخت حساب کاربری جدید
        </h1>
        <SignupForm />
        <Link to={"/login"} className="text-shade-1 text-lg font-medium">
          ورود به حساب کاربری
        </Link>
        <button
          onClick={() => navigat(-1)}
          className="font-medium hidden md:block"
        >
          بازگشت
        </button>
      </div>
      <div className="hidden lg:block">
        <img src="/image/signup-image.jpg" alt="" />
      </div>
    </div>
  );
}
