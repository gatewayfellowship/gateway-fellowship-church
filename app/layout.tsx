import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gateway Fellowship, Gilbert, AZ",
  description: "A Christ-centered church in Gilbert, Arizona",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} dark:bg-zinc-900 bg-zinc-50`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
