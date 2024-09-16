import { Pagination } from "antd";
import { useSearchParams } from "react-router-dom";

interface props {
  pageSize: number;
  total: number;
}
export default function Pagiantion({ pageSize = 4, total }: props) {
  const [serchParams, setSearchParams] = useSearchParams();

  const page: string | null = serchParams.get("page");
  const curr = page === null ? 1 : page;

  return (
    <Pagination
      total={total}
      showSizeChanger
      defaultCurrent={1}
      defaultPageSize={pageSize}
      current={Number(curr)}
      pageSizeOptions={[4, 8, 16]}
      locale={{ items_per_page: "/ کالا هر صفحه " }}
      onChange={(page, pageSize) => {
        setSearchParams((prev) => {
          prev.set("page", page.toString());
          prev.set("limit", pageSize.toString());
          return prev;
        });
      }}
    />
  );
}
