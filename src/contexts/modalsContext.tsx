import { createContext, useState } from "react";

export const ModalsContext = createContext<unknown>({});

export const ModalsProvider = ({ children }: { children: React.ReactNode }) => {
  const [openAddCategory, setOpenAddCategory] = useState<boolean>(false);
  const [openAddSubCategory, setOpenAddSubCategory] = useState<boolean>(false);
  const [openAddProduct, setOpenAddProduct] = useState<boolean>(false);
  const [openDeleteProduct, setOpenDeleteProduct] = useState<boolean>(false);
  const [openEditProduct, setOpenEditProduct] = useState<boolean>(false);
  const [openShowOrder, setOpenShowOrder] = useState<boolean>(false);
  const [productId, setProductId] = useState<string | undefined>(undefined);
  const [orderId, setOrderId] = useState<string | undefined>(undefined);
  const [editProductId, setEditProductId] = useState<string | undefined>(
    undefined
  );

  return (
    <ModalsContext.Provider
      value={{
        setOpenAddCategory,
        openAddCategory,
        setOpenAddSubCategory,
        openAddSubCategory,
        openAddProduct,
        setOpenAddProduct,
        openDeleteProduct,
        setOpenDeleteProduct,
        productId,
        setProductId,
        openEditProduct,
        setOpenEditProduct,
        editProductId,
        setEditProductId,
        openShowOrder,
        setOpenShowOrder,
        orderId,
        setOrderId,
      }}
    >
      {children}
    </ModalsContext.Provider>
  );
};
