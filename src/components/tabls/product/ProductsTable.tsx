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

const ProductTable: React.FC = () => {
  const params = CreateParams();
  const { data: product } = useGetProduct(params);
  console.log(product?.data);
  const arr: DataType[] = [];

  for (let i = 0; i < product?.data.data.products?.length; i++) {
    arr.push({
      key: product?.data?.data.products[i]?._id,
      product: product?.data?.data.products[i]?.name,
      price: product?.data?.data.products[i]?.price,
      quantity: product?.data?.data.products[i]?.quantity,
    });
  }

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
    },
    {
      title: "موجودی",
      dataIndex: "quantity",
      key: "quantity",
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
