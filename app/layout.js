import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false; //FA config

import "./index.css";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
   title: "LXT Group LLC",
  description:
    "Quantum Management - Investing in the future of FoodTech, BioTech, Crypto EFT & Hyperlocal Microservices",
  keywords: [
    "Unstoppable",
    "Web 3",
    "WEB3",
    "Blockchain",
    "IPFS",
    "Interplantary File System",
    "Fleek",
    "Storj",
    "Quantum Management",
    "FoodTech",
    "BioTech",
    "Hyperlocal Microservices",
    "Crypto",
    "Forex",
    "ETF",
    "Pharmatech",
  ],
};

export const openGraphImage = {
  images: [
    "https://storageapi.fleek.co/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lxtgroup-images/seo_logo_lxtgroup.png",
  ],
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full bg-primary-700 mx-auto">
        <Navbar />
        {children}
      <Footer />
      </div>
      </body>
    </html>
  );
}
