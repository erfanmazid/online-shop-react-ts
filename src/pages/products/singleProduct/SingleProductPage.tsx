import useGetProduct from "../../../hooks/get-product/useGetProduct";
import BreadcrumbComponent from "../productCategory/components/breadcrumb";
import ImageSlider from "./components/imageSlider";

export default function SingleProductPage() {
  const param = window.location.pathname.split("/").pop();
  const { data } = useGetProduct(param || "");

  return (
    <div className="myContainer flex flex-col gap-5">
      {
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
      }
      <div className="flex flex-col gap-5 mb-5">
        <div className="flex gap-5 items-center border-gray-4 border-b p-2">
          <h1 className="text-3xl font-bold text-primary">
            {data?.data.data.product.name}
          </h1>
          <p className="text-sm">
            {data?.data.data.product.category.name} /{" "}
            {data?.data.data.product.subcategory.name}
          </p>
        </div>
        <div className="flex gap-5 justify-between">
          <div className="w-[400px] border border-gray-4 rounded-md p-3">
            {<ImageSlider images={data?.data.data.product.images} />}
          </div>
          <div className=" h-[400px] p-5 rounded-md bg-shade-2 flex flex-col justify-between">
            <div className="flex flex-col gap-5 text-[#fff]">
              <p className="text-xl font-serif">
                قیمت: {data?.data.data.product.price.toLocaleString("fa-IR")}{" "}
                تومان
              </p>
              <p className="text-xl font-serif">
                موجودی:{" "}
                {data?.data.data.product.quantity.toLocaleString("fa-IR")}
              </p>
              <p className="text-xl font-serif">۱۸ ماه گارانتی شرکتی</p>
              {/* <p className="text-xl font-serif">
                آخرین بروزرسانی:{" "}
                {convertToJalali(data?.data.data.product.updatedAt)}
              </p> */}
              <div className="w-full flex justify-between items-center gap-5">
                <p className="text-xl font-serif">ارسال فوری</p>
                <img src="/image/car.svg" alt="" />
              </div>
            </div>
            <div>
              <button className="w-full py-2 text-[#fff] font-bold bg-tint-2 rounded-lg shadow-2xl">
                افزودن به سبد خرید
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-xl text-tint-6 font-bold">توضیحات</h3>
          <div
            className="product-description flex flex-col items-center text-right"
            dangerouslySetInnerHTML={{
              __html: data?.data.data.product.description,
            }}
          />
        </div>
      </div>
    </div>
  );
}
