import { Pagination } from "antd";

interface props {
  pageSize: number;
  total: number;
}
export default function Pagiantion({ pageSize, total }: props) {
  return (
    <Pagination
      total={total}
      showSizeChanger
      defaultCurrent={1}
      defaultPageSize={pageSize}
      pageSizeOptions={[4, 8, 16]}
      locale={{ items_per_page: "/ کالا هر صفحه " }}
      onChange={(page, pageSize) => {
        console.log(page, pageSize);
      }}
    />
  );
}
