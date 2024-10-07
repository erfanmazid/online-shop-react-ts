import { QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import { queryClient } from "../lib";
import { ConfigProvider } from "antd";
import { ModalsProvider } from "../contexts/modalsContext";
import { Provider } from "react-redux";
import { persistor, store } from "../store/store";
import { PersistGate } from "redux-persist/integration/react";

interface Props {
  children: ReactNode;
}

const Providers = ({ children }: Props) => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ConfigProvider direction="rtl">
          <ModalsProvider>
            <Provider store={store}>
              <PersistGate loading={null} persistor={persistor}>
                {children}
              </PersistGate>
            </Provider>
          </ModalsProvider>
        </ConfigProvider>
      </QueryClientProvider>
      <ToastContainer rtl />
    </>
  );
};

export default Providers;
