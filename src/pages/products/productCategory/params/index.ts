import QueryString from "qs";
import { useSearchParams } from "react-router-dom";

export default function ProductsParamsGenerator(): string {
  const [serchParams] = useSearchParams();
  const searchParams = Object.fromEntries(Array.from(serchParams));
  const queryString = QueryString.stringify(searchParams);
  return `?limit=1000&${queryString}`;
}
