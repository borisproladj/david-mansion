import { Inter } from "next/font/google";
import Head from "next/head"; // Make sure to import Head
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "King-David Mansion",
  description: "Made by Boris Ladyjensky",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
