import type { AppProps } from "next/app";
import "../app/globals.css";
import Head from "next/head";
import favicon from "@/app/favicon.ico";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href={favicon.src} />
        <title>シスイアーカイブ</title>
        <meta httpEquiv="Content-Language" content="ja" />
        <meta
          name="google-site-verification"
          content="SlGqNPN_A71o3UL54Oe0CfB97-zlXQCmyyMP4OlgZp8"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
