import { CartItem } from "../../../../../../store/cartSlice";
import WebSingleItem from "./singleItem";

export default function WebShowCartItem({
  items,
  open,
  setProductId,
}: {
  items: CartItem[];
  open: (open: boolean) => void;
  setProductId: (productId: string) => void;
}) {
  return (
    <div className="w-3/5 flex flex-col gap-4 border border-gray-4 rounded-md p-5 overflow-y-auto max-h-[500px]">
      {items.map((item) => (
        <WebSingleItem
          key={item.id}
          item={item}
          setOpen={open}
          setProductId={setProductId}
        />
      ))}
    </div>
  );
}
