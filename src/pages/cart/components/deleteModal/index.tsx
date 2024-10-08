import { useDispatch } from "react-redux";
import { clearCart, removeFromCart } from "../../../../store/cartSlice";
import { persistor } from "../../../../store/store";
import { toast } from "react-toastify";

export default function CartDeleteModal({
  productId,
  setOpen,
  deleteAll,
  setDeleteAll,
}: {
  productId: string;
  deleteAll: boolean;
  setOpen: (open: boolean) => void;
  setDeleteAll: (open: boolean) => void;
}) {
  const dispatch = useDispatch();

  function handelDelete() {
    if (deleteAll) {
      persistor.purge();
      dispatch(clearCart());
      setDeleteAll(false);
      toast.success("محصولات با موفقیت حذف شدند");
    } else {
      dispatch(removeFromCart(productId));
      toast.success("محصول با موفقیت حذف شد");
    }
    setOpen(false);
  }

  function handelCancel() {
    setDeleteAll(false);
    setOpen(false);
  }

  return (
    <div className="w-screen h-screen absolute -top-[76px] left-0 bg-black bg-opacity-70 flex justify-center items-center transition-opacity duration-300 ease-in-out p-7 md:-top-20">
      <div className="h-[200px] bg-gradient-to-r from-gray-100 to-gray-50 rounded-lg shadow-xl transform scale-105 flex flex-col justify-evenly items-center p-8 gap-5 animate-fadeIn">
        <p className="text-xl font-semibold text-gray-800 text-center">
          {deleteAll
            ? "از حذف همه محصولات اطمینان دارید؟"
            : "از حذف این محصول اطمینان دارید؟"}
        </p>
        <div className="flex justify-between gap-5 w-full">
          <button
            className="w-1/2 bg-error-light text-[#fff] px-6 py-3 rounded-lg shadow-md hover:bg-error hover:scale-105 transition-all duration-200 ease-in-out"
            onClick={handelCancel}
          >
            خیر
          </button>
          <button
            className="w-1/2 bg-tint-3 text-[#fff] px-6 py-3 rounded-lg shadow-md hover:bg-tint-4 hover:scale-105 transition-all duration-200 ease-in-out"
            onClick={handelDelete}
          >
            بله
          </button>
        </div>
      </div>
    </div>
  );
}
