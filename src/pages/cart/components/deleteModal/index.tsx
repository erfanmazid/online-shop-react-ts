import { useDispatch } from "react-redux";
import { removeFromCart } from "../../../../store/cartSlice";

export default function CartDeleteModal({
  productId,
  setOpen,
}: {
  productId: string;
  setOpen: (open: boolean) => void;
}) {
  const dispatch = useDispatch();
  function handelDelete() {
    dispatch(removeFromCart(productId));
    setOpen(false);
  }
  return (
    <div className="w-screen h-screen absolute -top-20 left-0 bg-gray-6 bg-opacity-80 flex justify-center items-center">
      <div className="h-[200px] bg-[#fff] rounded-md flex flex-col justify-evenly items-center p-5 gap-3">
        <p className="text-lg font-medium">
          آیا میخواهید این محصول را حذف کنید؟
        </p>
        <div className="flex justify-between gap-5 w-full">
          <button
            className="bg-error-light w-1/2 text-[#fff] px-5 py-2 rounded-md"
            onClick={() => setOpen(false)}
          >
            خیر
          </button>
          <button
            className="bg-primary w-1/2 text-[#fff] px-5 py-2 rounded-md"
            onClick={handelDelete}
          >
            بله
          </button>
        </div>
      </div>
    </div>
  );
}
