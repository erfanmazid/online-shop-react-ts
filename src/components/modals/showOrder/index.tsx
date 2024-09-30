import { useContext } from "react";
import { ModalsContext } from "../../../contexts/modalsContext";
import useGetOrderById from "../../../hooks/get-order-by-id/useGetOrderById";
import convertToJalali from "../../tabls/order/components/dateFormater";

export default function ShowOrderModal() {
  const { openShowOrder, setOpenShowOrder, orderId } = useContext(
    ModalsContext
  ) as {
    openShowOrder: boolean;
    setOpenShowOrder: (value: boolean) => void;
    orderId: string | undefined;
  };
  const { data, isLoading } = useGetOrderById(orderId);
  if (isLoading) {
    return <div>loading</div>;
  }

  return (
    <div
      className={
        openShowOrder
          ? "w-screen h-screen fixed top-0 left-0 right-0 bottom-0 bg-gray-8 bg-opacity-60 flex justify-center items-center z-50"
          : "hidden"
      }
    >
      <div className="w-3/4 h-3/4 bg-[white] rounded-md p-2 md:p-5 flex flex-col gap-5 relative">
        <div className="flex flex-col p-5 gap-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl text-primary">نمایش سفارش</h1>
            <div>
              <img
                src="/assets/close.svg"
                className="cursor-pointer"
                alt=""
                onClick={
                  openShowOrder === true
                    ? () => setOpenShowOrder(false)
                    : () => {}
                }
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p>
              نام مشتری:{" "}
              <span>
                {data?.data.data.order.user.firstname}{" "}
                {data?.data.data.order.user.lastname}
              </span>
            </p>
            <p>
              آدرس: <span>{data?.data.data.order.user.address} </span>
            </p>
            <p>
              شماره تماس: <span>{data?.data.data.order.user.phoneNumber} </span>
            </p>
            <p>
              زمان سفارش:{" "}
              <span>
                {convertToJalali(data?.data.data.order.user.createdAt)}{" "}
              </span>
            </p>
            <p>
              زمان تحویل سفارش:{" "}
              <span>
                {/* {convertToJalali(data?.data.data.order.user.deliveryDate)}{" "} */}
              </span>
            </p>
          </div>
          <div className="flex-1"></div>
          <div className="flex justify-center items-center">
            {data?.data.data.order.deliveryStatus ? (
              <p>
                در تاریخ {convertToJalali(data?.data.data.order.updatedAt)}{" "}
                تحویل داده شد
              </p>
            ) : (
              <button className="bg-primary py-1 rounded-lg text-[#fff] px-4">
                تحویل شد
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
