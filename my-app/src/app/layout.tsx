import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThirdwebProvider } from "thirdweb/react";
import { GoogleTagManager } from "@next/third-parties/google";

import { Gnosis, Ethereum } from "@thirdweb-dev/chains";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Black W3B | Blockchain Consultations",
  description:
    "Empowering Black communities through Web3 consulting. Gain knowledge in blockchain, DeFi, and cryptocurrency to take control of your financial future. Learn, build, and grow with expert guidance tailored to those in need.",
    icons: {
      icon: "../../public/favicon.ico",
      apple: "../../public/favicon.ico",
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>

      <GoogleTagManager gtmId="G-YDS91V256T" />

        <ThirdwebProvider>{children}</ThirdwebProvider>
      </body>
    </html>
  );
}
