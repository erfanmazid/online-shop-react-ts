import ShippingRadioButton from "../radio";

export default function DeliveryComponent({
  setShipping,
}: {
  setShipping: (shipping: number) => void;
}) {
  return (
    <div className="w-full p-5 border border-gray-4 rounded-md flex flex-col gap-3 md:flex-row items-center md:justify-between">
      <p className="w-full text-lg flex items-center gap-2 pb-3 border-b border-gray-4 md:border-none md:pb-0 md:w-fit">
        <span>
          <img src="/assets/car.svg" alt="" />
        </span>
        روش تحویل سفارش
      </p>
      <ShippingRadioButton setShipping={setShipping} />
    </div>
  );
}
