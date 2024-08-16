import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./Provider";

const inter = Inter({ subsets: ["latin"], weight:['300','400','500','600','800'] });

export const metadata = {
  title: "Affiliate Assist",
  description: "...",
  icons:{
    icon:'/icon.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-primary text-tcolor"}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
