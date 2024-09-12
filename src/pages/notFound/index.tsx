import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen p-5 flex flex-col gap-7 items-center">
      <img src="/image/404.jpg" alt="" className="max-h-96" />
      <h1 className="text-3xl text-primary">صفحه مورد نظر یافت نشد</h1>
      <button
        onClick={() => navigate("/")}
        className="bg-primary text-[#fff] text-xl w-full rounded-md py-2 max-w-80"
      >
        بازگشت به صفحه اصلی
      </button>
    </div>
  );
}
