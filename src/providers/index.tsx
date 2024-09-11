import { QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import { queryClient } from "../lib";

interface Props {
  children: ReactNode;
}

const Providers = ({ children }: Props) => {
  return (
    <>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      <ToastContainer rtl />
    </>
  );
};

export default Providers;
