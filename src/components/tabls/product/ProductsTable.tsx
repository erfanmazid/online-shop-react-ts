import React, { useState } from "react";
import type { TableProps } from "antd";
import { Table } from "antd";
import { useGetProduct } from "../../../hooks/products/useGetProducts";
import Pagiantion from "../../pagiination";
import CreateParams from "../../../pages/admin/params";

interface DataType {
  key: string;
  product: string;
  price: number;
  quantity: string;
}

interface ProductTableProps {
  onTableChange: (updatedRow: DataType) => void;
  resetEditState: boolean; // افزودن prop برای ریست کردن وضعیت ویرایش
}

const ProductTable: React.FC<ProductTableProps> = ({
  onTableChange,
  resetEditState,
}) => {
  const params = CreateParams();
  const { data: product } = useGetProduct(params);
  const arr: DataType[] = [];

  const [editPrices, setEditPrices] = useState<{
    [key: string]: number | null;
  }>({});
  const [editQuantities, setEditQuantities] = useState<{
    [key: string]: number | null;
  }>({});

  for (let i = 0; i < product?.data.data.products?.length; i++) {
    arr.push({
      key: product?.data?.data.products[i]?._id,
      product: product?.data?.data.products[i]?.name,
      price: product?.data?.data.products[i]?.price,
      quantity: product?.data?.data.products[i]?.quantity,
    });
  }

  // وقتی ذخیره موفقیت‌آمیز بود، وضعیت ویرایش ریست شود
  React.useEffect(() => {
    if (resetEditState) {
      setEditPrices({});
      setEditQuantities({});
    }
  }, [resetEditState]);

  const handlePriceEdit = (key: string, value: number) => {
    setEditPrices((prev) => ({
      ...prev,
      [key]: value,
    }));
    onTableChange({ key, price: value, quantity: editQuantities[key] });
  };

  const handleQuantityEdit = (key: string, value: number) => {
    setEditQuantities((prev) => ({
      ...prev,
      [key]: value,
    }));
    onTableChange({ key, price: editPrices[key], quantity: value });
  };

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "کالا",
      dataIndex: "product",
      key: "product",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "قیمت",
      dataIndex: "price",
      key: "price",
      render: (text, record) =>
        editPrices[record.key] !== undefined ? (
          <input
            type="number"
            className="border border-primary p-1 rounded-md outline-none"
            value={editPrices[record.key] ?? text}
            onChange={(e) =>
              handlePriceEdit(record.key, Number(e.target.value))
            }
            min={0}
            step={1}
          />
        ) : (
          <p
            onClick={() =>
              setEditPrices((prev) => ({ ...prev, [record.key]: record.price }))
            }
          >
            {text.toLocaleString("fa-IR")}
          </p>
        ),
    },
    {
      title: "موجودی",
      dataIndex: "quantity",
      key: "quantity",
      render: (text, record) =>
        editQuantities[record.key] !== undefined ? (
          <input
            type="number"
            className="border border-primary p-1 rounded-md outline-none"
            value={editQuantities[record.key] ?? Number(text)}
            onChange={(e) =>
              handleQuantityEdit(record.key, Number(e.target.value))
            }
            min={0}
            step={1}
          />
        ) : (
          <p
            onClick={() =>
              setEditQuantities((prev) => ({
                ...prev,
                [record.key]: Number(record.quantity),
              }))
            }
          >
            {Number(text).toLocaleString("fa-IR")}
          </p>
        ),
    },
  ];

  const data: DataType[] = arr;

  return (
    <div className="flex flex-col gap-5 z-0">
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        className="z-0"
      />
      <Pagiantion
        pageSize={product?.data.per_page}
        total={product?.data.total}
      />
    </div>
  );
};

export default ProductTable;
