import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";
import SiteHeader from "../commonComponents/header/SiteHeader";

// Optional: DM Sans Font via next/font
import { DM_Sans } from "next/font/google";
import SiteFooter from "../commonComponents/footer/SiteFooter";
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Kismet Finance</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Your trusted financial partner" />
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={dmSans.variable}>
        <SiteHeader />
        <Component {...pageProps} />
        <SiteFooter />
      </div>
    </>
  );
};

export default MyApp;
