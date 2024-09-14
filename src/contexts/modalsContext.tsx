import { createContext, useState } from "react";

export const ModalsContext = createContext<unknown>({});

export const ModalsProvider = ({ children }: { children: React.ReactNode }) => {
  const [openAddCategory, setOpenAddCategory] = useState<boolean>(false);

  return (
    <ModalsContext.Provider value={{ setOpenAddCategory, openAddCategory }}>
      {children}
    </ModalsContext.Provider>
  );
};
