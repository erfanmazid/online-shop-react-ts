import { Outlet } from "react-router-dom";
import WebHeader from "../../headers/WebHeader";

export default function WebLayout() {
  return (
    <div>
      <WebHeader />
      <Outlet />
    </div>
  );
}
