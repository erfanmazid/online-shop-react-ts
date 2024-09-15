import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ModalsContext } from "../../../contexts/modalsContext";
import { useGetCategory } from "../../../hooks/get-category/useGetCategory";
import { CategoriesEntity } from "../../../types/category";
import { useGetSubCategory } from "../../../hooks/get-sub-category/useGetSubCategory";
import { toast } from "react-toastify";
import { useCreateSubCategory } from "../../../hooks/create-sub-category/useCreateSubCategory";
import { useDeleteSubCategory } from "../../../hooks/delete-sub-category/useDeleteSubCategory";

const formSchema = z.object({
  category: z.string().min(1, "لطفا دسته بندی را انتخاب کنید."),
  name: z.string().min(2, "نام دسته بندی باید بیشتر از ۲ کلمه باشد."),
});

export default function AddSubCategoryModal() {
  const qc = useQueryClient();
  const { openAddSubCategory, setOpenAddSubCategory } = useContext(
    ModalsContext
  ) as {
    openAddSubCategory: boolean;
    setOpenAddSubCategory: (value: boolean) => void;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      category: "",
      name: "",
    },
    resolver: zodResolver(formSchema),
  });

  const { mutate } = useCreateSubCategory();
  const { mutate: deleteSubCategory } = useDeleteSubCategory();

  const onSubmit = (data: { category: string; name: string }) => {
    console.log(data);
    mutate(data, {
      onSuccess: () => {
        setOpenAddSubCategory(false);
        reset();
        qc.invalidateQueries({ queryKey: ["getSubCategory"] });
        toast.success("دسته بندی با موفقیت اضافه شد");
      },
      onError: () => {
        toast.error("دسته بندی اضافه نشد");
      },
    });
  };

  const { data, isLoading } = useGetCategory();
  const { data: subCategories } = useGetSubCategory();

  return (
    <div
      className={
        openAddSubCategory
          ? "w-screen h-screen fixed top-0 left-0 bg-gray-8 bg-opacity-60 flex justify-center items-center z-50"
          : "hidden"
      }
    >
      <div className="w-3/4 h-3/4 bg-[white] rounded-md p-5 flex flex-col gap-5 relative">
        <img
          src="/assets/close.svg"
          className="absolute top-3 left-3 md:hidden"
          alt=""
          onClick={
            openAddSubCategory === true
              ? () => setOpenAddSubCategory(false)
              : () => {}
          }
        />
        <h1 className="text-3xl text-center text-primary mt-5">
          دسته بندی جدید
        </h1>
        <div className="flex flex-col gap-5 w-full h-[85%] md:flex-row">
          <form
            className="w-full flex flex-col gap-5"
            onSubmit={handleSubmit(onSubmit)}
          >
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
                {data?.data.data.categories.map(
                  (category: CategoriesEntity) => (
                    <option key={category._id} value={category._id}>
                      {category.name}
                    </option>
                  )
                )}
              </select>
              {errors.category && (
                <p className="text-sm text-error">{errors.category.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="name">نام زیر دسته بندی :</label>
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
            <button className="text-[#fff] bg-primary rounded-md py-2 px-4">
              افزودن
            </button>
          </form>
          <div className="w-full h-full overflow-y-hidden">
            <h2 className="text-xl text-primary font-medium text-center">
              لیست زیر دسته بندی ها
            </h2>
            <div className="w-full h-[77%] md:h-full flex justify-center overflow-y-scroll">
              {isLoading ? (
                <div className="w-7 h-7 border-l-2 border-r-2 border-t-2 rounded-full animate-spin">
                  <p> در حال بارگذاری</p>
                </div>
              ) : (
                <div className="w-full h-full flex flex-col gap-3 mt-3">
                  {subCategories?.data.data.subcategories?.map(
                    (category: CategoriesEntity) => (
                      <div
                        key={category._id}
                        className="w-full p-2 bg-primary rounded-md flex justify-center items-center "
                        onClick={() =>
                          deleteSubCategory(category._id, {
                            onSuccess: () => {
                              qc.invalidateQueries({
                                queryKey: ["getSubCategory"],
                              });
                              toast.success("دسته بندی با موفقیت حذف شد");
                            },
                          })
                        }
                      >
                        <p className="text-[#fff]">{category.name}</p>
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        <button
          onClick={() => setOpenAddSubCategory(false)}
          className="hidden md:block bg-primary py-2 text-[#fff] rounded-md w-[400px] mx-auto"
        >
          خروج
        </button>
      </div>
    </div>
  );
}
