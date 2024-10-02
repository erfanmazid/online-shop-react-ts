import { Breadcrumb, ConfigProvider } from "antd";
import { Link } from "react-router-dom";

const BreadcrumbComponent = ({
  value,
}: {
  value: { title: string; link: string }[];
}) => {
  const items = value?.map((item) => {
    return {
      title: <Link to={item.link}>{item.title}</Link>,
    };
  });

  return (
    <ConfigProvider direction="rtl">
      <Breadcrumb items={items} />
    </ConfigProvider>
  );
};

export default BreadcrumbComponent;
