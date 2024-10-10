import { Pagination } from "antd";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import "./pagination.css"; // Import custom styles

interface props {
  pageSize: number;
  total: number;
}

export default function Pagiantion({ pageSize, total }: props) {
  const [searchParams, setSearchParams] = useSearchParams();

  const page: string | null = searchParams.get("page");
  const curr = page === null ? 1 : page;

  const status = searchParams.get("status");

  useEffect(() => {
    if (status) {
      setSearchParams((prev) => {
        prev.set("page", "1");
        return prev;
      });
    }
  }, [status]);

  return (
    <Pagination
      total={total}
      showSizeChanger
      defaultCurrent={1}
      defaultPageSize={pageSize || Number(searchParams.get("limit")) || 4}
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
