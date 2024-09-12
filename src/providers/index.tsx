import { QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import { queryClient } from "../lib";
import { ConfigProvider } from "antd";

interface Props {
  children: ReactNode;
}

const Providers = ({ children }: Props) => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ConfigProvider direction="rtl">{children}</ConfigProvider>
      </QueryClientProvider>
      <ToastContainer rtl />
    </>
  );
};

export default Providers;
