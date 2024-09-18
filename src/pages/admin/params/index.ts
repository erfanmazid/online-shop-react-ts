import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const CreateParams = () => {
  const [searchParams] = useSearchParams();
  const pageParams: string | null = searchParams.get("page");
  const limitParams: string | null = searchParams.get("limit");
  const statusParams: string | null = searchParams.get("status");
  const sortParams: string | null = searchParams.get("sort");
  const [params, setParams] = useState<string>("");

  useEffect(() => {
    if (
      pageParams !== null &&
      limitParams !== null &&
      statusParams === null &&
      sortParams === null
    ) {
      setParams(`?page=${pageParams}&limit=${limitParams}`);
    } else if (
      pageParams !== null &&
      limitParams !== null &&
      statusParams !== null
    ) {
      if (statusParams === "all") {
        setParams(`?page=${pageParams}&limit=${limitParams}`);
      } else if (statusParams === "delivered") {
        setParams(
          `?page=${pageParams}&limit=${limitParams}&deliveryStatus=true`
        );
      } else if (statusParams === "undelivered") {
        setParams(
          `?page=${pageParams}&limit=${limitParams}&deliveryStatus=false`
        );
      } else {
        setParams(`?page=${pageParams}&limit=${limitParams}`);
      }
    } else if (pageParams !== null && limitParams === null) {
      setParams(`?page=${pageParams}&limit=4`);
    } else if (pageParams === null && limitParams !== null) {
      setParams(`?page=1&limit=${limitParams}`);
    } else if (
      pageParams === null &&
      limitParams === null &&
      statusParams !== null
    ) {
      if (statusParams === "all") {
        setParams(`?page=${pageParams}&limit=${limitParams}`);
      } else if (statusParams === "delivered") {
        setParams(
          `?page=${pageParams}&limit=${limitParams}&deliveryStatus=true`
        );
      } else if (statusParams === "undelivered") {
        setParams(
          `?page=${pageParams}&limit=${limitParams}&deliveryStatus=false`
        );
      } else {
        setParams(`?page=${pageParams}&limit=${limitParams}`);
      }
    } else if (
      pageParams === null &&
      limitParams === null &&
      statusParams === null &&
      sortParams !== null
    ) {
      setParams(`?page=1&limit=4&sort=${sortParams}`);
    } else if (
      pageParams !== null &&
      limitParams !== null &&
      statusParams === null &&
      sortParams !== null
    ) {
      setParams(`?page=${pageParams}&limit=${limitParams}&sort=${sortParams}`);
    } else {
      setParams(`?page=1&limit=4`);
    }

    return () => {};
  }, [pageParams, limitParams, statusParams, sortParams]);

  return params;
};

export default CreateParams;
