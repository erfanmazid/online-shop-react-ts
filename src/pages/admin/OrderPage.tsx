import RadioButton from "../../components/radioButton";
import OrdersTable from "../../components/tabls/order/OrdersTable";

export default function OrderPage() {
  return (
    <div className="myContainer flex flex-col gap-5 p-5">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-md md:text-xl font-semibold text-primary">
            مدیریت سفارش ها
          </h1>
        </div>
        <div>
          <RadioButton />
        </div>
      </div>
      <OrdersTable />
    </div>
  );
}
