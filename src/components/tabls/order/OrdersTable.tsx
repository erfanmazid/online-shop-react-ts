import type { TablePaginationConfig, TableProps } from "antd";
import { Table } from "antd";
import useGetOrders from "../../../hooks/get-orders/useGetOrders";
import CreateParams from "../../../pages/admin/params";
import Pagiantion from "../../pagiination";
import convertToJalali from "./components/dateFormater";
import {
  FilterValue,
  SorterResult,
  TableCurrentDataSource,
} from "antd/es/table/interface";
import { useSearchParams } from "react-router-dom";

interface DataType {
  key: string;
  username: string;
  price: string;
  times: string;
  status: string;
}

const OrdersTable: React.FC = () => {
  const params = CreateParams();
  const [serchParams, setSearchParams] = useSearchParams();
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

  const handleChange = (
    _pagination: TablePaginationConfig,
    _filters: Record<string, FilterValue | null>,
    sorter: SorterResult<DataType> | SorterResult<DataType>[],
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _extra: TableCurrentDataSource<DataType>
  ) => {
    if (Array.isArray(sorter)) {
      console.log(sorter.map((s) => s.order));
    } else {
      if (sorter.order === undefined) {
        serchParams.delete("sort");
        setSearchParams(serchParams);
      } else if (sorter.order === "ascend") {
        serchParams.set("sort", "createdAt");
        setSearchParams(serchParams);
      } else if (sorter.order === "descend") {
        serchParams.set("sort", "-createdAt");
        setSearchParams(serchParams);
      }
    }
  };

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
      sorter: true,
      sortDirections: ["ascend", "descend"],
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
        onChange={handleChange}
      />
      <Pagiantion pageSize={orders?.data.per_page} total={orders?.data.total} />
    </div>
  );
};

export default OrdersTable;
