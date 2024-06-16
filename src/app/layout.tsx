import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import favicon from "@/app/favicon.ico";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "シスイアーカイブ",
  description: "紫水キキ誕生日企画2024",
  twitter: {
    card: "summary_large_image",
    site: "@chinari819",
    title: "シスイアーカイブ",
    images: "https://raw.githubusercontent.com/project774fan/kiki2024/main/public/img/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <Head>
        <link rel="icon" href={favicon.src} />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
