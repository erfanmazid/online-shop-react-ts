import { Outlet } from "react-router-dom";
import AdminHeader from "../../headers/AdminHeader";

export default function AdminLayout() {
  return (
    <div>
      <AdminHeader />
      <Outlet />
    </div>
  );
}
