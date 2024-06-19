import { Inter } from "next/font/google";
import Head from "next/head"; // Make sure to import Head
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "King-David Mansion",
  description: "King David Mansion accommodation website made by Boris Ladyjensky",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <meta name="description" content="A brief description of your page" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta property="og:image" content="https://www.villa-bs.co.il/kingdavidicon.png" />
        <meta property="og:title" content="King-David Mansion" />
        <meta property="og:description" content="Explore the luxurious King David Mansion, meticulously designed to offer a unique accommodation experience. Nestled in a serene location, this site features elegant interiors, state-of-the-art amenities, and a captivating ambiance perfect for relaxation and rejuvenation. Discover your ideal getaway and indulge in the exclusivity and privacy that King David Mansion provides." />
        <meta property="og:url" content="https://www.villa-bs.co.il" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.villa-bs.co.il/kingdavidicon.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
