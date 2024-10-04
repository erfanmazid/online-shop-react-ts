import { Pagination } from "antd";
import { useSearchParams } from "react-router-dom";
import "./pagination.css"; // Import custom styles

interface props {
  pageSize: number;
  total: number;
}

export default function Pagiantion({ pageSize, total }: props) {
  const [serchParams, setSearchParams] = useSearchParams();

  const page: string | null = serchParams.get("page");
  const curr = page === null ? 1 : page;

  return (
    <Pagination
      total={total}
      showSizeChanger
      defaultCurrent={1}
      defaultPageSize={pageSize || Number(serchParams.get("limit")) || 4}
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
      className="custom-pagination"
    />
  );
}
