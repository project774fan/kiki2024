import type { AppProps } from "next/app";
import "../app/globals.css";
import Head from "next/head";
import favicon from "@/app/favicon.ico";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href={favicon.src} />
        <meta httpEquiv="Content-Language" content="ja" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
