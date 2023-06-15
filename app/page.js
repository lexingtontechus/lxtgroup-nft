/* eslint-disable react/jsx-no-target-blank */

import {
  showcaseOne,
  showcaseTwo,
  showcaseThree,
} from "./components/dataShowcase";
import Showcases from "./components/showcases";
import Link from "next/link";

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
const Home = () => {
  return (
    <>
      <div className="hero min-h-screen bg-base-300">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold text-accent">LXT GROUP LLC</h1>
            <h2 className="text-4xl font-bold uppercase my-8 text-base-content">
              Quantum Management
            </h2>
            <p className="py-6 text-primary">
              Investing in the future of FoodTech, BioTech, <br />
              Crypto EFT & Hyperlocal Microservices.
            </p>
            <button className="btn btn-primary uppercase">
              <Link href="/contact">Contact</Link>
            </button>
          </div>
        </div>
      </div>
      <Showcases data={showcaseOne} />
      <Showcases imgPos="right" data={showcaseTwo} />
      <Showcases data={showcaseThree} />
    </>
  );
};
export default Home;
