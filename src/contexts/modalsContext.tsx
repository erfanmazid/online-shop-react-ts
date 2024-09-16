import { createContext, useState } from "react";

export const ModalsContext = createContext<unknown>({});

export const ModalsProvider = ({ children }: { children: React.ReactNode }) => {
  const [openAddCategory, setOpenAddCategory] = useState<boolean>(false);
  const [openAddSubCategory, setOpenAddSubCategory] = useState<boolean>(false);
  const [openAddProduct, setOpenAddProduct] = useState<boolean>(false);
  const [openDeleteProduct, setOpenDeleteProduct] = useState<boolean>(false);
  const [productId, setProductId] = useState<string | undefined>(undefined);

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
      }}
    >
      {children}
    </ModalsContext.Provider>
  );
};
