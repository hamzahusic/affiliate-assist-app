import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight:['500','600','800'] });

export const metadata = {
  title: "Affiliate Assist",
  description: "...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-primary text-tcolor"}>{children}</body>
    </html>
  );
}
