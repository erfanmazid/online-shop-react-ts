import { useSelector, type TypedUseSelectorHook } from "react-redux";
import { RootState } from "./store";

export const useCartSelector: TypedUseSelectorHook<RootState> = useSelector;
