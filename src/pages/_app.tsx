import { type AppType } from "next/dist/shared/lib/utils";
import { MenuProvider } from "../utils/MenuContext";
import { LanguageProvider } from "../utils/LanguageContext";
import "@fontsource/abel";
import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <LanguageProvider>
      <MenuProvider>
        <Component {...pageProps} />
      </MenuProvider>
    </LanguageProvider>
  );
};

export default MyApp;
