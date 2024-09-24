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
        <meta name="title" content="Cocotein - Eectrolyte Fruit Water" />
        <meta
          name="description"
          content="Discover the refreshing taste of Cocotein made from pure coconut water without artificial additives or preservatives and promote coconut water’s ability to replenish the body with essential electrolytes ."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cocotein.vercel.app/" />
        <meta
          property="og:title"
          content="Cocotein - Electrolyte Fruit Water"
        />
        <meta
          property="og:description"
          content="Discover the refreshing taste of Cocotein made from pure coconut water without artificial additives or preservatives and promote coconut water’s ability to replenish the body with essential electrolytes ."
        />
        <meta
          property="og:image"
          content="https://cocotein.vercel.app/screenshot.png"
        />

        {/* Twitter */}
        <meta
          property="twitter:card"
          content="Cocotein - Electrolyte Fruit Water"
        />
        <meta property="twitter:url" content="https://cocotein.vercel.app/" />
        <meta property="twitter:title" content="Homepage" />
        <meta
          property="twitter:description"
          content="Discover the refreshing taste of Cocotein made from pure coconut water without artificial additives or preservatives and promote coconut water’s ability to replenish the body with essential electrolytes ."
        />
        <meta
          property="twitter:image"
          content="https://cocotein.vercel.app/screenshot.png"
        />
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
