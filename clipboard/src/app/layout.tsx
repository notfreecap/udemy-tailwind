import { Bai_Jamjuree } from "next/font/google";
import "./globals.css";

const inter = Bai_Jamjuree({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bai-jamjuree",
});

export const metadata = {
  title: "Clipboard",
  description:
    "Clipboard is a demo app to propagate the things you copy between yout different devices.",
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
