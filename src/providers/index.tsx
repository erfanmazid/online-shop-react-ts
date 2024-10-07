import { QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import { queryClient } from "../lib";
import { ConfigProvider } from "antd";
import { ModalsProvider } from "../contexts/modalsContext";
import { Provider } from "react-redux";
import { store } from "../store/store";

interface Props {
  children: ReactNode;
}

const Providers = ({ children }: Props) => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ConfigProvider direction="rtl">
          <ModalsProvider>
            <Provider store={store}>{children}</Provider>
          </ModalsProvider>
        </ConfigProvider>
      </QueryClientProvider>
      <ToastContainer rtl />
    </>
  );
};

export default Providers;
