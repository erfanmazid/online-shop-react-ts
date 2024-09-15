import { createContext, useState } from "react";

export const ModalsContext = createContext<unknown>({});

export const ModalsProvider = ({ children }: { children: React.ReactNode }) => {
  const [openAddCategory, setOpenAddCategory] = useState<boolean>(false);
  const [openAddSubCategory, setOpenAddSubCategory] = useState<boolean>(false);
  const [openAddProduct, setOpenAddProduct] = useState<boolean>(false);

  return (
    <ModalsContext.Provider
      value={{
        setOpenAddCategory,
        openAddCategory,
        setOpenAddSubCategory,
        openAddSubCategory,
        openAddProduct,
        setOpenAddProduct,
      }}
    >
      {children}
    </ModalsContext.Provider>
  );
};
