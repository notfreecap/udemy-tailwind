"use client";

import { Raleway } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const raleway = Raleway({ subsets: ["latin"], weight: ["400", "700"] });
const openSans = Raleway({ subsets: ["latin"], weight: ["400", "700"] });

// export const metadata = {
//   title: "Fylo",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={localStorage.getItem("theme") ?? "dark"}>
      <Head>
        <title>Fylo</title>
        <meta about="Some app for fun" />
      </Head>
      <body
        className={`dark:bg-darkBlue dark:text-white font-opensans ${raleway.className}`}
      >
        {children}
      </body>
    </html>
  );
}