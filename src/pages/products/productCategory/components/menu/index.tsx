import { Menu } from "antd";
import type { MenuProps } from "antd";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { useGetCategory } from "../../../../../hooks/get-category/useGetCategory";
import { useSearchParams } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

const MenuComponent: React.FC = () => {
  const [serchParams, setSearchParams] = useSearchParams();

  const { data: categories, isSuccess } = useGetCategory();
  const [items, setItems] = useState<MenuItem[]>([
    {
      type: "divider",
    },
    {
      key: "title",
      label: <h3 className="text-xl font-bold text-primary">فیلتر ها</h3>,
      disabled: true,
    },
    {
      key: "sub1",
      label: <p className="font-semibold">دسته بندی</p>,
      children: [],
    },
    {
      type: "divider",
    },
  ]);

  useEffect(() => {
    if (isSuccess && categories?.data.data.categories) {
      // اضافه کردن آیتم "همه" به ابتدای لیست کتگوری‌ها
      const categoryItems = [
        { key: "all", label: "همه" }, // آیتم "همه" به عنوان اولین گزینه
        ...categories.data.data.categories.map(
          (item: { _id: string; name: string }) => ({
            key: item._id,
            label: item.name,
          })
        ),
      ];

      // اضافه کردن کتگوری‌ها به منو
      setItems((prevItems) => {
        return prevItems.map((item) => {
          if (item === null) return item;
          if (item.key === "sub1") {
            return {
              ...item,
              children: categoryItems,
            };
          }
          return item;
        }) as MenuItem[];
      });
    }
  }, [categories?.data.data.categories, isSuccess]);

  const onClick: MenuProps["onClick"] = (e) => {
    if (e.key === "all") {
      serchParams.delete("category");
      setSearchParams(serchParams);
      return;
    }
    serchParams.set("category", e.key);
    setSearchParams(serchParams);
  };

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .ant-menu-item-selected {
        background-color: #417f56 !important;
        color: #fff !important;
      }
      .ant-menu-item-selected .ant-menu-title-content{        
        color: #fff !important;
      }
      .ant-menu-submenu-selected .ant-menu-title-content p{
          color: #417f56 !important;
      }
      .ant-menu-submenu-selected .ant-menu-submenu-arrow {
          color: #417f56 !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <Menu
      onClick={onClick}
      style={{ width: 190 }}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      items={items}
      className={classNames("your-custom-menu", "bg-white")}
    />
  );
};

export default MenuComponent;
