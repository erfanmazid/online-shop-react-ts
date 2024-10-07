import { useDispatch } from "react-redux";
import useGetProduct from "../../../hooks/get-product/useGetProduct";
import BreadcrumbComponent from "../productCategory/components/breadcrumb";
import ImageSlider from "./components/imageSlider";
import { addToCart, CartItem, removeFromCart } from "../../../store/cartSlice";
import { useCartSelector } from "../../../store/hooks";
import { toast } from "react-toastify";

export default function SingleProductPage() {
  const param = window.location.pathname.split("/").pop();
  const { data } = useGetProduct(param || "");

  const itemId = data?.data.data.product._id;

  const items = {
    id: data?.data.data.product._id,
    title: data?.data.data.product.name,
    price: data?.data.data.product.price,
  };

  const dispatch = useDispatch();
  const cartItems: CartItem[] = useCartSelector(
    (state) =>
      // state.cart.items.reduce((value, item) => value + item.quantity, 0)
      state.cart.items
  );

  function handelAddToCart() {
    dispatch(addToCart(items));
  }

  function handelPlus() {
    const item = cartItems.find((item) => item.id === itemId);
    if (item) {
      if (data?.data.data.product.quantity > item.quantity) {
        dispatch(addToCart(items));
      } else {
        toast.warning("موجودی کافی نیست");
      }
    } else {
      console.log("error");
    }
  }

  function handelMines() {
    dispatch(removeFromCart(itemId));
  }

  return (
    <div className="container mx-auto p-5 grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Breadcrumb */}
      <div className="lg:col-span-12 flex items-center justify-start gap-2 text-sm text-gray-500">
        <BreadcrumbComponent
          value={[
            { title: "خانه", link: "/" },
            {
              title: `دسته بندی محصولات`,
              link: `/products/all`,
            },
            {
              title: `${data?.data.data.product.category.name}`,
              link: `/products/all?category=${data?.data.data.product.category._id}`,
            },
            {
              title: data?.data.data.product.name,
              link: `/product/${data?.data.data.product._id}`,
            },
          ]}
        />
      </div>

      {/* بخش تصاویر محصول */}
      <div className="lg:col-span-6 bg-primary shadow-md rounded-lg p-5">
        <ImageSlider images={data?.data.data.product.images} />
      </div>

      {/* بخش اطلاعات سریع محصول */}
      <div className="lg:col-span-6 flex flex-col gap-5 bg-primary text-[#fff] p-6 rounded-lg shadow-xl">
        <h1 className="text-4xl font-bold">{data?.data.data.product.name}</h1>
        <p className="text-lg">
          <span className="underline">
            {data?.data.data.product.category.name} /{" "}
            {data?.data.data.product.subcategory.name}
          </span>
        </p>
        <div className="flex items-center justify-between text-2xl font-semibold">
          <p>
            قیمت:{" "}
            <span className="font-bold">
              {data?.data.data.product.price.toLocaleString("fa-IR")} تومان
            </span>
          </p>
          <p>
            موجودی:{" "}
            <span className="font-bold">
              {data?.data.data.product.quantity.toLocaleString("fa-IR")}
            </span>
          </p>
        </div>
        <p className="text-lg font-medium">۱۸ ماه گارانتی شرکتی</p>
        <div className="flex items-center justify-between mt-5">
          <p className="text-lg">ارسال فوری</p>
          <img src="/image/car.svg" alt="Delivery" className="w-8 h-8" />
        </div>
        <div className="w-full flex justify-center items-center mt-6">
          {cartItems.find((item) => item.id === itemId) ? (
            <div className="flex justify-center items-center w-full gap-2">
              <button
                className="w-2/5 py-4 text-lg font-bold bg-tint-3 hover:bg-tint-5 rounded-lg shadow-2xl transition-all duration-300"
                onClick={handelPlus}
              >
                +
              </button>
              <p className="w-1/5 flex justify-center items-center py-4 rounded-lg bg-tint-3 text-lg">
                {cartItems.find((item) => item.id === itemId)?.quantity}
              </p>
              <button
                className="w-2/5 py-4 text-lg font-bold bg-tint-3 hover:bg-tint-5 rounded-lg shadow-2xl transition-all duration-300"
                onClick={handelMines}
              >
                -
              </button>
            </div>
          ) : (
            <button
              className="w-full py-4 text-lg font-bold bg-tint-3 hover:bg-tint-5 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300"
              onClick={handelAddToCart}
            >
              افزودن به سبد خرید
            </button>
          )}
        </div>
      </div>

      {/* بخش توضیحات محصول */}
      <div className="lg:col-span-12 bg-[#fff] p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold text-blue-700 mb-4">توضیحات محصول</h3>
        <div
          className="product-description text-lg text-gray-6 leading-relaxed"
          dangerouslySetInnerHTML={{
            __html: data?.data.data.product.description,
          }}
        />
      </div>
    </div>
  );
}
