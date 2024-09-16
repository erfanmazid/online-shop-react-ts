import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const CreateParams = () => {
  const [searchParams] = useSearchParams();
  const pageParams: string | null = searchParams.get("page");
  const limitParams: string | null = searchParams.get("limit");
  const [params, setParams] = useState<string>("");

  useEffect(() => {
    if (pageParams !== null && limitParams !== null) {
      setParams(`?page=${pageParams}&limit=${limitParams}`);
    } else if (pageParams !== null && limitParams === null) {
      setParams(`?page=${pageParams}&limit=4`);
    } else if (pageParams === null && limitParams !== null) {
      setParams(`?page=1&limit=${limitParams}`);
    } else {
      setParams(`?page=1&limit=4`);
    }

    return () => {};
  }, [pageParams, limitParams]);

  return params;
};

export default CreateParams;
