import { useContext } from "react";
import { ModalsContext } from "../../../contexts/modalsContext";
import { useDeleteProduct } from "../../../hooks/delete-product/useDeleteProduct";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";

export default function DeleteProductsModal() {
  const { openDeleteProduct, setOpenDeleteProduct, productId } = useContext(
    ModalsContext
  ) as {
    openDeleteProduct: boolean;
    setOpenDeleteProduct: (value: boolean) => void;
    productId: string | undefined;
  };

  const { mutate } = useDeleteProduct();
  const qc = useQueryClient();

  function handelDelete() {
    mutate(productId, {
      onSuccess: () => {
        toast.success("محصول با موفقیت حذف شد");
        qc.invalidateQueries({ queryKey: ["products"] });
        setOpenDeleteProduct(false);
      },
      onError: () => {
        toast.error("محصول حذف نشد");
      },
    });
  }

  return (
    <div
      className={
        openDeleteProduct
          ? "w-screen h-screen fixed top-0 left-0 bg-gray-8 bg-opacity-60 flex justify-center items-center z-50"
          : "hidden"
      }
    >
      <div className="w-3/4 h-2/4 bg-[white] rounded-md p-5 flex flex-col gap-5 relative">
        <div className="flex-1 flex justify-center items-center flex-col gap-7">
          <h2 className="text-lg font-semibold text-primary text-center">
            از حذف محصول اطمینان دارید؟
          </h2>
          <div className="flex flex-col gap-2 w-full">
            <button
              onClick={() => setOpenDeleteProduct(false)}
              className="bg-primary py-2 text-[#fff] rounded-md w-[70%] max-w-[400px] mx-auto"
            >
              خیر
            </button>
            <button
              onClick={handelDelete}
              className="bg-error-light py-2 text-[#fff] rounded-md w-[70%] max-w-[400px] mx-auto"
            >
              بله
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
