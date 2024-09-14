import { useContext } from "react";
import DropDown from "../../components/dropDown";
import AddCategoryModal from "../../components/modals/addCategory";
import InventoryTable from "../../components/tabls/inventory/InventoryTable";
import { ModalsContext } from "../../contexts/modalsContext";
import { useGetProduct } from "../../hooks/products/useGetProducts";

export default function InventoryPage() {
  const { data, isLoading } = useGetProduct("");

  const { setOpenAddCategory } = useContext(ModalsContext) as {
    setOpenAddCategory: (value: boolean) => void;
  };

  if (isLoading) {
    return (
      <div className=" text-center justify-center items-center flex gap-4 myContainer">
        <h1 className="text-3xl font-bold">در حال بارگزاری</h1>
        <div className="w-7 h-7 border-l-2 border-r-2 border-t-2 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="w-screen p-5 flex flex-col gap-7 myContainer mx-auto">
      {<AddCategoryModal />}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl text-primary font-medium">مدیرت کالا ها</h1>
        </div>
        <div>
          <div className="md:hidden">
            <DropDown />
          </div>
          <div className="hidden md:flex gap-4">
            <button className="py-1 px-4 text-[#fff] bg-primary rounded-md">
              افزودن کالا
            </button>
            <button
              onClick={() => setOpenAddCategory(true)}
              className="py-1 px-4 text-[#fff] bg-primary rounded-md"
            >
              افزودن دسته بندی
            </button>
            <button className="py-1 px-4 text-[#fff] bg-primary rounded-md">
              افزودن زیر دسته بندی
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center ">
        <InventoryTable
          producs={data?.data.data.products}
          pageSize={data?.data.per_page}
          total={data?.data.total}
        />
      </div>
    </div>
  );
}
