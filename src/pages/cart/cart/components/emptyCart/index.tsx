import { useNavigate } from "react-router-dom";

export default function EmptyCartComponent() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-96 flex flex-col justify-center items-center border border-gray-4 rounded-md p-2 relative md:h-[600px]">
      <img
        src="/image/empty.png"
        alt=""
        className="w-2/3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 sm:w-[325px]"
      />
      <p className="text-lg text-gray-6 z-10">سبد خرید شما خالی میباشد</p>
      <button
        className="text-md text-[#fff] bg-primary px-5 py-2 rounded-md z-10 mt-3"
        onClick={() => navigate("/products/all")}
      >
        لیست محصولات
      </button>
    </div>
  );
}
