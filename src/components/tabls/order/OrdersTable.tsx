import type { TableProps } from "antd";
import { Table } from "antd";
import useGetOrders from "../../../hooks/get-orders/useGetOrders";
import CreateParams from "../../../pages/admin/params";
import Pagiantion from "../../pagiination";
import convertToJalali from "./components/dateFormater";

interface DataType {
  key: string;
  username: string;
  price: string;
  times: string;
  status: string;
}

const OrdersTable: React.FC = () => {
  const params = CreateParams();
  const { data: orders } = useGetOrders(params);
  const arr: DataType[] = [];

  for (let i = 0; i < orders?.data.data.orders?.length; i++) {
    const price = orders?.data.data.orders[i].totalPrice;

    arr.push({
      key: orders?.data?.data.orders[i]?._id,
      username:
        orders?.data?.data.orders[i]?.user.firstname +
        " " +
        orders?.data?.data.orders[i]?.user.lastname,
      price: price.toLocaleString("fa-IR"),
      times: convertToJalali(orders?.data.data.orders[i].createdAt),
      status: "جزییات",
    });
  }

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "نام کاربر",
      dataIndex: "username",
      key: "username",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "مجموع مبلغ پرداختی",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "زمان ثبت سفارش",
      dataIndex: "times",
      key: "times",
    },
    {
      title: "برسی سفارش",
      dataIndex: "status",
      key: "status",
      render: (text) => <a>{text}</a>,
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
      <Pagiantion pageSize={orders?.data.per_page} total={orders?.data.total} />
    </div>
  );
};

export default OrdersTable;
