import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";

interface Props {
  children: ReactNode;
}
const client = new QueryClient();
const Providers = ({ children }: Props) => {
  return (
    <>
      <QueryClientProvider client={client}>{children}</QueryClientProvider>
      <ToastContainer rtl />
    </>
  );
};

export default Providers;
