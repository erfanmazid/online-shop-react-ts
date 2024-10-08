import { CartItem } from "../../../../store/cartSlice";
import StepsComponent from "../steps";
import WebConfirmPanel from "./confirmPanel";
import WebShowCartItem from "./showCartItem";

export default function WebCart({
  items,
  setOpen,
  setProductId,
  setDeleteAll,
}: {
  items: CartItem[];
  setOpen: (open: boolean) => void;
  setProductId: (productId: string) => void;
  setDeleteAll: (deleteAll: boolean) => void;
}) {
  const allPrice = items.reduce(
    (value, item) => value + item.price * item.quantity,
    0
  );

  return (
    <div className="hidden md:flex flex-col gap-5 w-full">
      <div className="w-[70%] mx-auto">
        <StepsComponent currentNum={0} />
      </div>
      <div className="flex gap-3 w-full">
        <WebShowCartItem
          open={setOpen}
          setProductId={setProductId}
          items={items}
        />
        <WebConfirmPanel
          allPrice={allPrice}
          items={items}
          setDeleteAll={setDeleteAll}
          open={setOpen}
        />
      </div>
    </div>
  );
}
