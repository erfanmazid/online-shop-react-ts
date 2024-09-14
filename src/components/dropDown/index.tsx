import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { ModalsContext } from "../../contexts/modalsContext";
import { useContext } from "react";

const DropDown: React.FC = () => {
  const { setOpenAddCategory, openAddCategory } = useContext(ModalsContext) as {
    setOpenAddCategory: (value: boolean) => void;
    openAddCategory: boolean;
  };
  const items: MenuProps["items"] = [
    {
      label: "افزودن کالا",
      key: "0",
    },
    {
      type: "divider",
    },
    {
      label: "افزودن دسته بندی",
      key: "1",
      onClick: () => setOpenAddCategory(!openAddCategory),
    },
    {
      type: "divider",
    },
    {
      label: "افزودن زیر دسته بندی",
      key: "2",
    },
  ];

  return (
    <Dropdown menu={{ items }} trigger={["click"]}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          عملیات ها
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};

export default DropDown;
