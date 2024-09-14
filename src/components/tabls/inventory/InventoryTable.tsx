/* eslint-disable @typescript-eslint/no-explicit-any */
import Pagiantion from "../../pagiination";
import SingleInventory from "./single-inventory/SingleInventory";

interface products {
  _id: string;
  category: Category;
  subcategory: Subcategory;
  name: string;
  price: number;
  quantity: number;
  brand: string;
  discount: number;
  description: string;
  thumbnail: string;
  images?: string[] | null;
  slugname: string;
}

interface Category {
  _id: string;
  name: string;
  icon: string;
  createdAt: string;
  updatedAt: string;
  slugname: string;
  __v: number;
}
interface Subcategory {
  _id: string;
  category: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  slugname: string;
  __v: number;
}

export default function InventoryTable({ producs, pageSize, total }: any) {
  return (
    <div className="overflow-x-auto overflow-y-auto max-h-[800px] ">
      <table className="w-max border border-collapse rounded-lg">
        <thead>
          <tr className="border-b-2 bg-tint-5 border-black">
            <th className="p-3">تصویر</th>
            <th className="p-3">نام کالا</th>
            <th className="p-3">دسته بندی</th>
            <th className="p-3">عملیات</th>
          </tr>
        </thead>
        <tbody>
          {producs?.map((product: products, index: number) => (
            <SingleInventory
              product={product}
              index={index}
              key={product._id}
            />
          ))}
        </tbody>
        <tfoot>
          <div className="p-3">
            <Pagiantion pageSize={pageSize} total={total} />
          </div>
        </tfoot>
      </table>
    </div>
  );
}
