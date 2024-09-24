import localFont from "next/font/local";

import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

import "./app.css";
import Header from "@/components/Header";
import ViewCanvas from "@/components/ViewCanvas";
import Footer from "@/components/Footer";

const alpino = localFont({
  src: "../../public/fonts/Alpino-Variable.woff2",
  display: "swap",
  weight: "100 900",
  variable: "--font-alpino",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={alpino.variable}>
      <head>
        {/* Primary Meta Tags */}
        <title>Cocotein - electrolyte fruit water</title>
        <meta name="title" content="Cocotein - electrolyte fruit water" />
        <meta
          name="description"
          content="Discover the refreshing taste of Cocotein."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cocotein.vercel.app/" />
        <meta
          property="og:title"
          content="Cocotein - electrolyte fruit water"
        />
        <meta
          property="og:description"
          content="Discover the refreshing taste of Cocotein"
        />
        <meta property="og:image" content="./screenshot.png" />

        {/* Twitter */}
        <meta
          property="twitter:card"
          content="Cocotein - electrolyte fruit water"
        />
        <meta property="twitter:url" content="https://cocotein.vercel.app/" />
        <meta property="twitter:title" content="Homepage" />
        <meta
          property="twitter:description"
          content="Discover the refreshing taste of Cocotein."
        />
        <meta property="twitter:image" content="./screenshot.png" />
      </head>
      <body className="overflow-x-hidden bg-yellow-300">
        <Header />
        <main>
          {children}
          <ViewCanvas />
        </main>
        <Footer />
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
