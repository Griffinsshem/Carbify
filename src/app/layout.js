import { Jost } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Carbify",
  description: "A simple car rental app built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`
          ${jost.variable}
          antialiased
        `}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
