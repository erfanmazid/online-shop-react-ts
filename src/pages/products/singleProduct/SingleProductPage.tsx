import useGetProduct from "../../../hooks/get-product/useGetProduct";
import BreadcrumbComponent from "../productCategory/components/breadcrumb";
import ImageSlider from "./components/imageSlider";

export default function SingleProductPage() {
  const param = window.location.pathname.split("/").pop();
  const { data } = useGetProduct(param || "");

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
        <button className="w-full mt-6 py-4 text-lg font-bold bg-tint-3 hover:bg-tint-5 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300">
          افزودن به سبد خرید
        </button>
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
