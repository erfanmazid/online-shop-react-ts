import { useContext } from "react";
import { ModalsContext } from "../../../contexts/modalsContext";
import EditProducrtsForm from "./components/form";

export default function EditProductModal() {
  const { openEditProduct, setOpenEditProduct } = useContext(ModalsContext) as {
    openEditProduct: boolean;
    setOpenEditProduct: (value: boolean) => void;
  };

  return (
    <div
      className={
        openEditProduct
          ? "w-screen h-screen fixed top-0 left-0 bg-gray-8 bg-opacity-60 flex justify-center items-center z-50"
          : "hidden"
      }
    >
      <div className="w-3/4 h-3/4 bg-[white] rounded-md p-5 flex flex-col gap-5 relative">
        <img
          src="/assets/close.svg"
          className="absolute top-3 left-3 md:hidden"
          alt=""
          onClick={
            openEditProduct === true
              ? () => setOpenEditProduct(false)
              : () => {}
          }
        />
        <h1 className="text-3xl text-center text-primary mt-5">ویرایش محصول</h1>
        <div className="flex flex-col gap-5 w-full h-[85%] md:flex-row overflow-y-auto">
          <EditProducrtsForm />
        </div>
        <button
          onClick={() => setOpenEditProduct(false)}
          className="hidden md:block bg-primary py-2 text-[#fff] rounded-md w-[400px] mx-auto"
        >
          خروج
        </button>
      </div>
    </div>
  );
}
