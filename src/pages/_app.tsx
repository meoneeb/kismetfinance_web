import { type AppType } from "next/dist/shared/lib/utils";
import "../styles/globals.css";
import SiteHeader from "../commonComponents/header/SiteHeader";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <html lang="en">
      <header>
        <SiteHeader />
      </header>
      <body className={""}>
        <Component {...pageProps} />
      </body>
    </html>
  );
};

export default MyApp;
