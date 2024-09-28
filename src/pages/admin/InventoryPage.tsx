import { useContext } from "react";
import DropDown from "../../components/dropDown";
import AddCategoryModal from "../../components/modals/addCategory";
import AddProductModal from "../../components/modals/addProduct";
import AddSubCategoryModal from "../../components/modals/addSubCategory";
import DeleteProductsModal from "../../components/modals/deleteProducts";
import InventoryTable from "../../components/tabls/inventory/InventoryTable";
import { ModalsContext } from "../../contexts/modalsContext";
import EditProductModal from "../../components/modals/editProduct";

export default function InventoryPage() {
  const { setOpenAddCategory, setOpenAddSubCategory, setOpenAddProduct } =
    useContext(ModalsContext) as {
      setOpenAddCategory: (value: boolean) => void;
      setOpenAddSubCategory: (value: boolean) => void;
      setOpenAddProduct: (value: boolean) => void;
    };

  return (
    <div className="w-screen p-5 flex flex-col gap-7 myContainer">
      {<AddCategoryModal />}
      {<AddSubCategoryModal />}
      {<AddProductModal />}
      {<EditProductModal />}
      <DeleteProductsModal />
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl text-primary font-medium">مدیرت کالا ها</h1>
        </div>
        <div>
          <div className="md:hidden">
            <DropDown />
          </div>
          <div className="hidden md:flex gap-4">
            <button
              onClick={() => setOpenAddProduct(true)}
              className="py-1 px-4 text-[#fff] bg-primary rounded-md"
            >
              افزودن کالا
            </button>
            <button
              onClick={() => setOpenAddCategory(true)}
              className="py-1 px-4 text-[#fff] bg-primary rounded-md"
            >
              افزودن دسته بندی
            </button>
            <button
              onClick={() => setOpenAddSubCategory(true)}
              className="py-1 px-4 text-[#fff] bg-primary rounded-md"
            >
              افزودن زیر دسته بندی
            </button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <InventoryTable />
      </div>
    </div>
  );
}
