import FailPage from "./components/fail";
import SuccessPage from "./components/success";

export default function OrderResult() {
  const location = window.location.pathname.split("/")[2];
  return (
    <div className="p-5 flex justify-center items-center">
      {location === "success" ? <SuccessPage /> : <FailPage />}
    </div>
  );
}
