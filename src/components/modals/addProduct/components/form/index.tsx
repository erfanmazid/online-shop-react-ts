import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useCreateProduct } from "../../../../../hooks/create-product/useCreateProduct";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
import { useContext } from "react";
import { ModalsContext } from "../../../../../contexts/modalsContext";
import { CategoriesEntity } from "../../../../../types/category";
import CustomCKEditor from "../ckEditor";
import { useGetCategory } from "../../../../../hooks/get-category/useGetCategory";
import { useGetSubCategoryCustom } from "../../../../../hooks/get-sub-category-custom/useGetSubCategoryCustom";

const reg = /^\d+$/;

const formSchema = z.object({
  category: z.string().min(1, "لطفا دسته بندی را انتخاب کنید."),
  subcategory: z.string().min(1, "لطفا زیر دسته بندی را انتخاب کنید."),
  name: z.string().min(2, "نام دسته بندی باید بیشتر از ۲ کلمه باشد."),
  price: z
    .string()
    .min(1, "لطفا قیمت را وارد کنید.")
    .regex(reg, "قیمت باید عدد باشد."),
  quantity: z
    .string()
    .min(1, "لطفا تعداد را وارد کنید.")
    .regex(reg, "تعداد باید عدد باشد."),
  brand: z.string().min(1, "لطفا برند را وارد کنید."),
  discount: z
    .string()
    .min(1, "لطفا تخفیف را وارد کنید.")
    .regex(reg, "تخفیف باید عدد باشد."),
  description: z.string().min(1, "لطفا توضیحات را وارد کنید."),
  images: z.any(),
  thumbnail: z.any(),
});
export type ProductFormType = z.infer<typeof formSchema>;

export default function ProducrtsForm() {
  const qc = useQueryClient();
  const { openAddProduct, setOpenAddProduct } = useContext(ModalsContext) as {
    openAddProduct: boolean;
    setOpenAddProduct: (value: boolean) => void;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
    watch,
  } = useForm({
    defaultValues: {
      category: "",
      subcategory: "",
      name: "",
      price: "",
      quantity: "",
      brand: "",
      discount: "",
      description: "",
      thumbnail: undefined,
    },
    resolver: zodResolver(formSchema),
  });
  const { mutate } = useCreateProduct();

  const onSubmit = (data: ProductFormType) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("category", data.category);
    formData.append("subcategory", data.subcategory);
    formData.append("brand", data.brand);
    formData.append("description", data.description);
    formData.append("price", data.price.toString());
    formData.append("quantity", data.quantity.toString());
    formData.append("thumbnail", data.thumbnail[0]);
    formData.append("images", data.thumbnail[0]);
    console.log(formData);

    mutate(formData, {
      onError: (e) => {
        console.log(e);
        toast.error("دسته بندی اضافه نشد");
      },
      onSuccess: () => {
        setOpenAddProduct(!openAddProduct);
        reset();
        qc.invalidateQueries({ queryKey: ["products"] });
        toast.success("دسته بندی با موفقیت اضافه شد");
      },
    });
  };

  const { data: category } = useGetCategory();
  const { data: subcategory } = useGetSubCategoryCustom({
    params: watch().category,
    key: watch().category,
  });

  return (
    <form
      className="w-full flex flex-col gap-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-3">
        <label htmlFor="name">نام محصول :</label>
        <input
          type="text"
          id="name"
          className={
            errors.name
              ? "border-2 border-error px-3 py-2 rounded-md outline-none"
              : "border border-black px-3 py-2 rounded-md outline-none"
          }
          {...register("name")}
        />
        {errors.name && (
          <p className="text-sm text-error">{errors.name.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="price">قیمت محصول :</label>
        <input
          type="text"
          id="price"
          className={
            errors.price
              ? "border-2 border-error px-3 py-2 rounded-md outline-none"
              : "border border-black px-3 py-2 rounded-md outline-none"
          }
          {...register("price")}
        />
        {errors.price && (
          <p className="text-sm text-error">{errors.price.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="quantity">تعداد محصول :</label>
        <input
          type="text"
          id="quantity"
          className={
            errors.quantity
              ? "border-2 border-error px-3 py-2 rounded-md outline-none"
              : "border border-black px-3 py-2 rounded-md outline-none"
          }
          {...register("quantity")}
        />
        {errors.quantity && (
          <p className="text-sm text-error">{errors.quantity.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="brand">برند محصول :</label>
        <input
          type="text"
          id="brand"
          className={
            errors.brand
              ? "border-2 border-error px-3 py-2 rounded-md outline-none"
              : "border border-black px-3 py-2 rounded-md outline-none"
          }
          {...register("brand")}
        />
        {errors.brand && (
          <p className="text-sm text-error">{errors.brand.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="discount">تخفیف محصول :</label>
        <input
          type="text"
          id="discount"
          className={
            errors.discount
              ? "border-2 border-error px-3 py-2 rounded-md outline-none"
              : "border border-black px-3 py-2 rounded-md outline-none"
          }
          {...register("discount")}
        />
        {errors.discount && (
          <p className="text-sm text-error">{errors.discount.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="name">دسته بندی :</label>
        <select
          id="category"
          {...register("category")}
          className={
            errors.category
              ? "border-2 border-error px-3 py-2 rounded-md outline-none"
              : "border border-black px-3 py-2 rounded-md outline-none"
          }
        >
          <option value="" selected hidden>
            انتخاب کنید
          </option>
          {category?.data.data.categories.map((category: CategoriesEntity) => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-sm text-error">{errors.category.message}</p>
        )}
      </div>
      <div
        className={watch().category === "" ? "hidden" : "flex flex-col gap-3"}
      >
        <label htmlFor="subcategory"> زیر دسته بندی :</label>
        <select
          id="subcategory"
          {...register("subcategory")}
          className={
            errors.category
              ? "border-2 border-error px-3 py-2 rounded-md outline-none"
              : "border border-black px-3 py-2 rounded-md outline-none"
          }
        >
          <option value="" selected hidden>
            انتخاب کنید
          </option>
          {subcategory?.data.data.subcategories.map(
            (subcategory: CategoriesEntity) => (
              <option key={subcategory._id} value={subcategory._id}>
                {subcategory.name}
              </option>
            )
          )}
        </select>
        {errors.subcategory && (
          <p className="text-sm text-error">{errors.subcategory.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="description" className="mb-2 pb-2">
          توضیحات
        </label>
        <CustomCKEditor
          name="description"
          controls={control}
          rules={{ required: "توضیحات نباید خالی باشد" }}
        />
        {errors.description && (
          <p className="text-sm text-error mt-2">
            {errors.description.message}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="file">تصاویر محصول :</label>
        <input
          type="file"
          id="file"
          className={
            errors.thumbnail
              ? "border-2 border-error px-3 py-2 rounded-md outline-none"
              : "border border-black px-3 py-2 rounded-md outline-none"
          }
          {...register("thumbnail")}
        />
        {errors.thumbnail && (
          <p className="text-sm text-error">{errors.thumbnail.message}</p>
        )}
      </div>

      <button className="text-[#fff] bg-primary rounded-md py-2 px-4">
        افزودن
      </button>
    </form>
  );
}
