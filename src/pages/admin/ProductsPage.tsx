import ProductTable from "../../components/tabls/product/ProductsTable";

export default function ProductsPage() {
  return (
    <div className="myContainer flex flex-col gap-5 p-5">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold text-primary">موجودی و قیمت ها</h1>
        <button
          className="bg-primary text-[#fff] text-lg py-1 px-4 rounded-md"
          disabled
        >
          ذخیره
        </button>
      </div>
      <ProductTable />
    </div>
  );
}
