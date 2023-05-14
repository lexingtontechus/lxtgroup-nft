/* eslint-disable react/jsx-no-target-blank */
"use client";
import {
  showcaseOne,
  showcaseTwo,
  showcaseThree,
} from "./components/dataShowcase";
import Showcases from "./components/showcases";

const Home = () => {
  return (
    <>
      <div className="min-h-screen-50 relative flex content-center items-center justify-center pb-32 pt-16">
        <div
          className="absolute top-0 h-full w-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://storageapi.fleek.co/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lxtgroup-images/quantum_header.jpg')",
          }}
        >
          <span
            id="blackOverlay"
            className="absolute h-full w-full bg-primary-950 opacity-75"
          ></span>
        </div>
        <div className="relative mx-auto w-full">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full items-center justify-center px-4 pt-24 text-center lg:w-10/12">
              <div className="p-2">
                <h1 className="pb-4 text-center text-4xl font-bold uppercase text-primary-100">
                  Quantum Management
                </h1>
                {/*<div className="w-full h-4/12">PLAYER</div>*/}
                <div className="h-4/12 w-full pt-2">
                  <p className="mb-4 mt-2 text-center text-lg font-semibold text-primary-100">
                    Investing in the future of FoodTech, BioTech, <br />
                    Crypto EFT & Hyperlocal Microservices.
                  </p>
                </div>
              </div>
            </div>
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
