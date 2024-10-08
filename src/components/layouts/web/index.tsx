import { Outlet } from "react-router-dom";
import WebHeader from "../../headers/WebHeader";
import WebFooter from "../../footer/WebFooter";

export default function WebLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <WebHeader />
      <div className="flex-1">
        <Outlet />
      </div>
      <WebFooter />
    </div>
  );
}
