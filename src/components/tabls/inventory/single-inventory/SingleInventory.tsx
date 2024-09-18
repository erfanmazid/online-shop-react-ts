import { useContext } from "react";
import { ModalsContext } from "../../../../contexts/modalsContext";

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

interface props {
  product: products;
  index: number;
}

export default function SingleInventory({ product, index }: props) {
  const { setOpenDeleteProduct, setProductId } = useContext(ModalsContext) as {
    openDeleteProduct: boolean;
    setOpenDeleteProduct: (value: boolean) => void;
    setProductId: (value: string) => void;
  };

  function handelDelete() {
    setProductId(product._id);
    setOpenDeleteProduct(true);
  }

  return (
    <tr className={index % 2 === 0 ? "border-b bg-tint-1" : "border-b"}>
      <td className=" p-3 mx-auto">
        <img
          src={`http://localhost:8000/images/products/thumbnails/${product.thumbnail}`}
          className="w-24 mx-auto mix-blend-multiply"
          alt={product.name}
        />
      </td>
      <td className=" p-3">
        <p>{product.name}</p>
      </td>
      <td className=" p-3">
        {product.category.name + " / " + product.subcategory.name}
      </td>
      <td className=" p-3">
        <div className="flex justify-evenly gap-2">
          <button className="bg-warning-light py-1 rounded-lg text-[#fff] px-4">
            ویرایش
          </button>
          <button
            className="bg-error-light py-1 rounded-lg text-[#fff] px-4"
            onClick={handelDelete}
          >
            حذف
          </button>
        </div>
      </td>
    </tr>
  );
}
