import { Outlet } from "react-router-dom";
import WebHeader from "../../headers/WebHeader";

export default function ProductLayout() {
  return (
    <div>
      <WebHeader />
      <Outlet />
    </div>
  );
}
