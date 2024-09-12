import { useMutation } from "@tanstack/react-query";
import httpRequest from "../../services/http-request";

export const useLogin = () => {
  return useMutation({
    mutationKey: ["login"],
    mutationFn: async (data) => await httpRequest.post("/api/auth/login", data),
    onSuccess: () => {
      //   toast.success("با موفقیت لاگین شدید.", {
      //     position: "top-center",
      //     autoClose: 5000,
      //   });
    },
    onError: () => {
      // toast.error("خطایی رخ داد.", { position: "top-center", autoClose: 5000 });
    },
  });
};
