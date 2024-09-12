import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z, ZodType } from "zod";
import { useLogin } from "../../../hooks/login";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const formSchema: ZodType = z.object({
  username: z.string().min(2, "نام کاربری حداقل باید شامل ۲ کلمه باشد."),
  password: z.string().min(6, "رمز عبور باید حداقل شامل ۶ حرف یا رقم باشد."),
});
export default function LoginForm() {
  const [showPass, setShowPass] = useState<boolean>(false);

  const { mutate, isPending } = useLogin();

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
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutate(values, {
      onSuccess: (res) => {
        localStorage.setItem("role", res.data.data.user.role);

        Cookies.set("id", res.data.data.user._id);
        Cookies.set("accessToken", res.data.token.accessToken);
        Cookies.set("refreshToken", res.data.token.refreshToken);

        toast.success("با موفقیت وارد شدید");

        if (res.data.data.user.role === "USER") {
          navigate("/profile");
        }
        if (res.data.data.user.role === "ADMIN") {
          navigate("/admin/dashboard/inventory");
        }

        reset();
      },
      onError: () => {
        toast.error("نام کاربری یا کلمه عبور اشتباه است");
      },
    });
  }

  function handelPasswordShow() {
    setShowPass((prev) => !prev);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-7"
    >
      <div className="flex flex-col gap-2">
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
          <p className="text-[11px] xl:text-sm text-error">
            {errors.username.message}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-2">
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
          <p className="text-[11px] xl:text-sm text-error">
            {errors.password.message}
          </p>
        )}
      </div>
      <button type="submit" className="text-[#fff] bg-primary py-2 rounded-md">
        {isPending ? "درحال برسی ..." : "ورود به اکانت"}
      </button>
    </form>
  );
}
