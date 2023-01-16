import React, { useContext, useRef } from "react";
import { createContext, useState } from "react";

const LanguageContext = createContext(undefined);

type Lang = "PL" | "ENG";

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [lang, setLang] = useState<Lang>("ENG");

  const toggleLang = () => (lang === "ENG" ? setLang("PL") : setLang("ENG"));

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useMenuContext = () => {
  const ctx = useContext(LanguageContext);

  if (!ctx) {
    throw new Error(
      "Missing LanguageContext, it's not wrapped in LanguageProvider"
    );
  }
  return ctx;
};
