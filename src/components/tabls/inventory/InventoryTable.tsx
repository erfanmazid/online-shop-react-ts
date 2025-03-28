import type { TablePaginationConfig, TableProps } from "antd";
import { Space, Table } from "antd";
import { useGetProduct } from "../../../hooks/products/useGetProducts";
import Pagiantion from "../../pagiination";
import CreateParams from "../../../pages/admin/params";
import { useContext } from "react";
import { ModalsContext } from "../../../contexts/modalsContext";
import {
  FilterValue,
  SorterResult,
  TableCurrentDataSource,
} from "antd/es/table/interface";
import { Link, useSearchParams } from "react-router-dom";

interface DataType {
  key: string;
  product: string;
  category: string;
  image: string;
}

const InventoryTable: React.FC = () => {
  const params = CreateParams();
  const [serchParams, setSearchParams] = useSearchParams();

  const { data: product } = useGetProduct(params);
  const arr: DataType[] = [];

  for (let i = 0; i < product?.data.data.products?.length; i++) {
    arr.push({
      key: product?.data?.data.products[i]?._id,
      product: product?.data?.data.products[i]?.name,
      category:
        product?.data?.data.products[i]?.category.name +
        " / " +
        product?.data?.data.products[i]?.subcategory.name,
      image: product?.data?.data.products[i]?.images[0],
    });
  }

  const {
    setOpenDeleteProduct,
    setProductId,
    setOpenEditProduct,
    setEditProductId,
  } = useContext(ModalsContext) as {
    openDeleteProduct: boolean;
    setOpenDeleteProduct: (value: boolean) => void;
    setOpenEditProduct: (value: boolean) => void;
    setProductId: (value: string) => void;
    setEditProductId: (value: string) => void;
  };

  function handelDelete(_id: string) {
    setProductId(_id);
    setOpenDeleteProduct(true);
  }

  function handelEdit(_id: string) {
    console.log(_id);
    setEditProductId(_id);
    setOpenEditProduct(true);
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
        serchParams.set("sort", "category");
        setSearchParams(serchParams);
      } else if (sorter.order === "descend") {
        serchParams.set("sort", "-category");
        setSearchParams(serchParams);
      }
    }
  };

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "تصویر",
      dataIndex: "image",
      key: "image",
      render: (image) => (
        <img
          src={`http://${image}`}
          alt="thumbnail"
          className="w-20 mix-blend-multiply"
        />
      ),
    },
    {
      title: "نام کالا",
      dataIndex: "product",
      key: "product",
      render: (text, record) => (
        <Link to={`/product/${record.key}`}>
          <a>{text}</a>
        </Link>
      ),
    },
    {
      title: "دسته بندی",
      dataIndex: "category",
      key: "category",
      sorter: true,
      sortDirections: ["ascend", "descend"],
    },
    {
      title: "عملیات",
      dataIndex: "actions",
      key: "actions",
      render: (_, record) => (
        <Space size="middle" className="flex flex-col md:flex-row">
          <button
            className="bg-warning-light py-1 rounded-lg text-[#fff] px-4"
            onClick={() => handelEdit(record.key)}
          >
            ویرایش
          </button>
          <button
            className="bg-error-light py-1 rounded-lg text-[#fff] px-4"
            onClick={() => handelDelete(record.key)}
          >
            حذف
          </button>
        </Space>
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
        onChange={handleChange}
      />
      <Pagiantion
        pageSize={product?.data.per_page}
        total={product?.data.total}
      />
    </div>
  );
};

export default InventoryTable;
