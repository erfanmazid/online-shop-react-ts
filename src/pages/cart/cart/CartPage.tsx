import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartItem } from "../../../store/cartSlice";
import { useCartSelector } from "../../../store/hooks";
import CartItemsCompment from "./components/cartItems";
import CartDeleteModal from "./components/deleteModal";
import EmptyCartComponent from "./components/emptyCart";
import WebCart from "./components/webCart";

export default function CartPage() {
  const navigate = useNavigate();

  const [open, setOpen] = useState<boolean>(false);
  const [deleteAll, setDeleteAll] = useState<boolean>(false);
  const [productId, setProductId] = useState<string>("");

  const cartItems: CartItem[] = useCartSelector(
    (state) =>
      // state.cart.items.reduce((value, item) => value + item.quantity, 0)
      state.cart.items
  );

  const clearPersistedData = () => {
    setOpen(true);
    setDeleteAll(true);
  };

  return (
    <>
      {open && (
        <CartDeleteModal
          productId={productId}
          setOpen={setOpen}
          deleteAll={deleteAll}
          setDeleteAll={setDeleteAll}
        />
      )}
      <div className="flex justify-center items-center flex-col gap-7 p-5 myContainer relative">
        {cartItems.length > 0 && (
          <WebCart
            items={cartItems}
            setOpen={setOpen}
            setProductId={setProductId}
            setDeleteAll={setDeleteAll}
          />
        )}
        <div className="w-full flex justify-between items-center md:hidden">
          <button
            onClick={clearPersistedData}
            disabled={cartItems.length === 0}
          >
            <img
              src="/assets/trash.svg"
              alt=""
              className={cartItems.length > 0 ? "" : "opacity-40 disabled"}
            />
          </button>
          <h1 className="text-xl font-medium">سبد خرید</h1>
          <img
            src="/assets/backArrow.svg"
            alt=""
            onClick={() => navigate(-1)}
          />
        </div>
        {cartItems.length === 0 && <EmptyCartComponent />}
        <div className="md:hidden w-full">
          {cartItems.length > 0 && (
            <CartItemsCompment
              items={cartItems}
              setOpen={setOpen}
              setProductId={setProductId}
            />
          )}
        </div>
      </div>
    </>
  );
}
