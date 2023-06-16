/* eslint-disable react/jsx-no-target-blank */

import {
  showcaseOne,
  showcaseTwo,
  showcaseThree,
} from "./components/dataShowcase";
import Showcases from "./components/showcases";
import Link from "next/link";
const loader = ({ src, width, quality }) => {
  return `https://storageapi.fleek.co/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lxtgroup-images/${src}?w=${width}&q=${
    quality || 75
  }`;
};
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
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url('https://storage.fleek-internal.com/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lxtgroup-images/header.jpg')",
        }}
      >
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold text-accent">LXT GROUP LLC</h1>
            <h2 className="text-4xl font-bold uppercase my-8 text-primary-content">
              Quantum Management
            </h2>
            <h3 className="py-6 text-primary font-bold">
              Investing in the future of FoodTech, BioTech, <br />
              Crypto EFT & Hyperlocal Microservices.
            </h3>
            <button className="btn btn-primary uppercase rounded-md">
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
