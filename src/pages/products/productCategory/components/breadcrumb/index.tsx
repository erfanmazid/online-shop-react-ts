import { Breadcrumb, ConfigProvider } from "antd";
import { Link } from "react-router-dom";

const BreadcrumbComponent: React.FC = () => {
  return (
    <ConfigProvider direction="rtl">
      <Breadcrumb
        items={[
          {
            title: <Link to={"/"}>خانه</Link>,
          },
          {
            title: <a href="">مرکز برنامه</a>,
          },
          {
            title: <a href="">لیست برنامه‌ها</a>,
          },
          {
            title: "یک برنامه",
          },
        ]}
      />
    </ConfigProvider>
  );
};

export default BreadcrumbComponent;
