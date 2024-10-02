import { Outlet } from "react-router-dom";
import WebHeader from "../../headers/WebHeader";
import WebFooter from "../../footer/WebFooter";

export default function WebLayout() {
  return (
    <div>
      <WebHeader />
      <Outlet />
      <WebFooter />
    </div>
  );
}
