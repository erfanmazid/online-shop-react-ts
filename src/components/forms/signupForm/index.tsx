import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { string, z, ZodType } from "zod";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSignup } from "../../../hooks/signup/useSignup";

const formSchema: ZodType = z.object({
  firstname: z.string().min(2, "نام باید حداقل شامل ۲ کلمه باشد."),
  lastname: z.string().min(2, "نام خانوادگی باید حداقل شامل ۲ کلمه باشد."),
  username: z.string().min(2, "نام کاربری حداقل باید شامل ۲ کلمه باشد."),
  password: z.string().min(6, "رمز عبور باید حداقل شامل ۶ حرف یا رقم باشد."),
  phoneNumber: z
    .string()
    .min(11, "شماره تماس باید ۱۱ رقم باشد.")
    .max(11, "شماره تماس باید ۱۱ رقم باشد."),
  address: string()
    .min(5, "آدرس باید بیشتر از ۵ حرف باشد.")
    .max(100, "آدرس باید کمتر از ۱۰۰ حرف باشد."),
});
export default function SignupForm() {
  const [showPass, setShowPass] = useState<boolean>(false);

  const { mutate, isPending } = useSignup();

  const navigate = useNavigate();

  const {
    reset,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver<ZodType<string>>(formSchema),
    defaultValues: {
      username: "",
      password: "",
      firstname: "",
      lastname: "",
      phoneNumber: "",
      address: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutate(values, {
      onSuccess: (res) => {
        localStorage.setItem("role", res.data.data.user.role);

        Cookies.set("accessToken", res.data.token.accessToken);
        Cookies.set("refreshToken", res.data.token.refreshToken);
        Cookies.set("id", res.data.data.user._id);

        toast.success("اکانت شما با موفقیت درست شد.");

        if (res.data.data.user.role === "USER") {
          navigate("/profile");
        }
        if (res.data.data.user.role === "ADMIN") {
          navigate("/admin/dashboard/inventory");
        }

        reset();
      },
      onError: () => {
        toast.error("خطایی رخ داد دوباره تلاش کنید!");
      },
    });
  }

  function handelPasswordShow() {
    setShowPass((prev) => !prev);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-7 md:gap-3"
    >
      <div className="flex flex-col md:flex-row gap-3 w-full">
        <div className="flex flex-col gap-2 w-full">
          <label
            htmlFor="firstname"
            className={errors.firstname ? "text-error" : "text-gray-5"}
          >
            نام
          </label>
          <input
            type="text"
            id="firstname"
            {...register("firstname")}
            className={
              errors.firstname
                ? "outline-none outline-error py-2 px-4 rounded-md"
                : "border border-gray-5 py-2 px-4 rounded-md outline-none"
            }
          />
          {errors.firstname && (
            <p className="text-sm lg:text-[11px] text-error">
              {errors.firstname.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label
            htmlFor="lastname"
            className={errors.lastname ? "text-error" : "text-gray-5"}
          >
            نام خانوادگی
          </label>
          <input
            type="text"
            id="lastname"
            {...register("lastname")}
            className={
              errors.lastname
                ? "outline-none outline-error py-2 px-4 rounded-md"
                : "border border-gray-5 py-2 px-4 rounded-md outline-none"
            }
          />
          {errors.lastname && (
            <p className="text-sm lg:text-[11px] text-error">
              {errors.lastname.message}
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-3 w-full ">
        <div className="flex flex-col gap-2 w-full">
          <label
            htmlFor="user"
            className={errors.username ? "text-error" : "text-gray-5"}
          >
            نام کاربری
          </label>
          <input
            type="text"
            id="user"
            dir="ltr"
            {...register("username")}
            className={
              errors.username
                ? "outline-none outline-error py-2 px-4 rounded-md"
                : "border border-gray-5 py-2 px-4 rounded-md outline-none"
            }
          />
          {errors.username && (
            <p className="text-sm lg:text-[11px] text-error">
              {errors.username.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label
            htmlFor="pass"
            className={errors.password ? "text-error" : "text-gray-5"}
          >
            کلمه عبور
          </label>
          <div className="relative w-full">
            <input
              type={showPass ? "text" : "password"}
              id="pass"
              dir="ltr"
              {...register("password")}
              className={
                errors.password
                  ? "outline-none outline-error py-2 px-4 rounded-md w-full"
                  : "border border-gray-5 py-2 px-4 rounded-md outline-none w-full"
              }
            />
            <img
              src={showPass ? "/assets/closeEye.svg" : "/assets/openEye.svg"}
              className="absolute top-3 right-3"
              onClick={handelPasswordShow}
            />
          </div>
          {errors.password && (
            <p className="text-sm lg:text-[11px] text-error">
              {errors.password.message}
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="phoneNumber"
          className={errors.phoneNumber ? "text-error" : "text-gray-5"}
        >
          شماره همراه
        </label>
        <input
          type="text"
          id="phoneNumber"
          dir="ltr"
          {...register("phoneNumber")}
          className={
            errors.phoneNumber
              ? "outline-none outline-error py-2 px-4 rounded-md"
              : "border border-gray-5 py-2 px-4 rounded-md outline-none"
          }
        />
        {errors.phoneNumber && (
          <p className="text-sm lg:text-[11px] text-error">
            {errors.phoneNumber.message}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="address"
          className={errors.address ? "text-error" : "text-gray-5"}
        >
          آدرس
        </label>
        <textarea
          id="address"
          {...register("address")}
          className={
            errors.address
              ? "outline-none outline-error py-2 px-4 rounded-md resize-none h-24"
              : "border border-gray-5 py-2 px-4 rounded-md outline-none h-24 resize-none"
          }
        />
        {errors.address && (
          <p className="text-sm lg:text-[11px]  text-error">
            {errors.address.message}
          </p>
        )}
      </div>

      <button type="submit" className="text-[#fff] bg-primary py-2 rounded-md">
        {isPending ? "درحال ساخت ..." : "ساخت به اکانت"}
      </button>
    </form>
  );
}
