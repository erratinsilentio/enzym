import React, { useContext, useRef } from "react";
import { createContext, useState } from "react";

const MenuContext = createContext(undefined);

export const MenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    console.log(open);
  };

  return (
    <MenuContext.Provider value={{ isOpen, toggleOpen }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenuContext = () => {
  const ctx = useContext(MenuContext);

  if (!ctx) {
    throw new Error("Missing MenuContext, it's not wrapped in MenuProvider");
  }
  return ctx;
};
