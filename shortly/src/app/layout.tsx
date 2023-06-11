import { Poppins } from "next/font/google";
import "./globals.css";

const inter = Poppins({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Shortly",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}