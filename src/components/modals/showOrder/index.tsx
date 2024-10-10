import {
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  ReactPortal,
  useContext,
} from "react";
import { ModalsContext } from "../../../contexts/modalsContext";
import useGetOrderById from "../../../hooks/get-order-by-id/useGetOrderById";
import convertToJalali from "../../tabls/order/components/dateFormater";
import { Link } from "react-router-dom";
import { useEditOrder } from "../../../hooks/edit-order";
import { toast } from "react-toastify";

export default function ShowOrderModal() {
  const { openShowOrder, setOpenShowOrder, orderId } = useContext(
    ModalsContext
  ) as {
    openShowOrder: boolean;
    setOpenShowOrder: (value: boolean) => void;
    orderId: string | undefined;
  };
  const { data, isLoading } = useGetOrderById(orderId);
  const { mutate } = useEditOrder();
  if (isLoading) {
    return <div>loading</div>;
  }

  const handelClick = () => {
    mutate({ id: orderId, data: { deliveryStatus: true } });
    setOpenShowOrder(false);
    toast.success("سفارش ویرایش شد");
  };

  return (
    <div
      className={
        openShowOrder
          ? "w-screen h-screen fixed top-0 left-0 right-0 bottom-0 bg-gray-8 bg-opacity-60 flex justify-center items-center z-50"
          : "hidden"
      }
    >
      <div className="w-3/4 h-3/4 bg-[white] rounded-md p-2 md:p-5 flex flex-col gap-5 relative">
        <div className="flex flex-col p-5 gap-4 min-h-full">
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
              <span>{convertToJalali(data?.data.data.order.createdAt)} </span>
            </p>
            <p>
              زمان تحویل سفارش:{" "}
              <span>
                {convertToJalali(data?.data.data.order.deliveryDate)}{" "}
              </span>
            </p>
          </div>
          <div className="flex-1 flex flex-col gap-3 overflow-y-auto">
            {data?.data.data.order.products.map(
              (item: {
                product: {
                  name:
                    | string
                    | number
                    | boolean
                    | ReactElement<any, string | JSXElementConstructor<any>>
                    | Iterable<ReactNode>
                    | ReactPortal
                    | null
                    | undefined;
                };
              }) => (
                <div
                  key={item._id}
                  className="flex justify-between items-center w-full bg-tint-2 rounded-lg p-3 border border-tint-4"
                >
                  <div className="flex gap-5 items-center justify-center">
                    <img
                      src={`http://${item.product?.images?.[0]}`}
                      className="w-10 h-10 object-contain mix-blend-multiply"
                      alt=""
                    />
                    <Link to={`/product/${item.product?._id}`}>
                      <p className="text-lg">
                        {item?.product?.name?.toLocaleString("fa-IR")}
                      </p>
                    </Link>
                  </div>
                  <div className="flex gap-6 items-center justify-center">
                    <p className="text-lg">
                      تعداد: {item.count.toLocaleString("fa-IR")}
                    </p>
                    <p className="text-lg">
                      قیمت: {item?.product?.price?.toLocaleString("fa-IR")}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
          <div className="flex justify-center items-center">
            {data?.data.data.order.deliveryStatus ? (
              <p>
                در تاریخ {convertToJalali(data?.data.data.order.updatedAt)}{" "}
                تحویل داده شد
              </p>
            ) : (
              <button
                onClick={handelClick}
                className="bg-primary py-1 rounded-lg text-[#fff] px-4"
              >
                تحویل شد
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
