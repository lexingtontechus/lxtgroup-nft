import React from "react";
//import Link from "next/link";
import { useState, useEffect } from "react";
import Head from "next/head";
//import Image from "next/image";

import ReactPlayer from "react-player";
// components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
//Images

export default function BioTech() {
  const [isPlaying, setIsPlaying] = useState(true);
  return (
    <>
      <Head>
        <title>LXT GROUP | BioTech</title>
      </Head>
      <IndexNavbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://storageapi.fleek.co/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lxtgroup-images/quantum_header.jpg')"
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="pt-24 w-full lg:w-10/12 px-4 ml-auto mr-auto text-center">
                <div className="p-2">
                  <h1 className="text-white font-semibold text-4xl text-center pb-4">
                    BIOTECH INVESTMENT
                  </h1>
                  <ReactPlayer
                    url="https://storageapi.fleek.co/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lxtgroup-videos/foodtech_biotech.mp4"
                    controls
                    height="320"
                    width="240"
                    playing={isPlaying}
                    config={{
                      file: {
                        attributes: {
                          controlsList: "nodownload"
                        }
                      }
                    }}
                  />
                  <div className="pt-2 w-full h-4/12">
                    <p className="mt-2 mb-4 text-stone-400 text-center">
                      Synthetic biology & biofabrication offers increased
                      sustainability, standardization and reproducibility.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-stone-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-stone-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-stone-100 w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fab fa-empire"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Our Mission</h6>
                    <p className="mt-2 mb-4 text-stone-500">
                      Investing in the sustainable future of food & medical
                      advances.
                    </p>
                    <p className="mt-2 mb-4 text-stone-500">
                      Sustainable & high yield foodtech products & water
                      sources.
                    </p>
                    <p className="mt-2 mb-4 text-stone-500">
                      Future of eCommerce powered by virtual & augmented
                      reality.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-stone-100 w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-sky-300">
                      <i className="fas fa-power-off"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Our Investments</h6>
                    <p className="mt-2 mb-4 text-stone-500">
                      We invest in plant-based & cell-based innovations. If you
                      are a start-ups that fits our missionInvesting in the
                      sustainable future of food & medical advances.
                    </p>
                    <p className="mt-2 mb-4 text-stone-500">
                      Sustainable & high yield foodtech products & water
                      sources.
                    </p>
                    <p className="mt-2 mb-4 text-stone-500">
                      Future of eCommerce powered by virtual & augmented
                      reality.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-stone-100 w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      <i className="fas fa-fingerprint"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Our Growth</h6>
                    <p className="mt-2 mb-4 text-stone-500">
                      Accelerating innovation and action for sustainable growth.
                    </p>
                    <p className="mt-2 mb-4 text-stone-500">
                      Embracing technology to power sustainable food systems
                      transformation.
                    </p>
                    <p className="mt-2 mb-4 text-stone-500">
                      Embracing technology &leveraging AI and Machine Learning.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  The Future Of Food
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-stone-600">
                  Technology that meets future needs.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-stone-600">
                  Sustainable & high yield foodtech products & water sources.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-stone-600">
                  Future of eCommerce powered by virtual & augmented reality.
                </p>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-stone-100 w-full mb-6 shadow-lg rounded-lg bg-stone-700">
                  <img
                    alt="Food Loves Tech"
                    layout="responsive"
                    className="w-full align-middle rounded-t-lg"
                    src="https://storageapi.fleek.co/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lxtgroup-images/foodlovestech.png"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-stone-700 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">FoodTech</h4>
                    <p className="text-md font-light mt-2 text-white">
                      FoodTech is an ecosystem made of all the agrifood
                      entrepreneurs and startups (from production to
                      distribution) innovating on the products, distribution,
                      marketing or business model.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-stone-100 w-full mb-6 shadow-lg rounded-lg bg-stone-700">
                  <img
                    alt="BioTech"
                    src="https://storageapi.fleek.co/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lxtgroup-images/biotech.png"
                    layout="responsive"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-stone-700 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">BioTech</h4>
                    <p className="text-md font-light mt-2 text-white">
                      BioTech is the use of living organisms & synthetic
                      alternatives to produce sustainable & affordable bio &
                      pharma applications.
                    </p>
                  </blockquote>
                </div>
              </div>

              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <h3 className="text-3xl font-semibold">
                    Evolution of Bio Technology
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-stone-500">
                    Synthetic & biotech inventions & startups.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-stone-900 bg-stone-100 mr-3">
                            <i className="fas fa-heartbeat"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-stone-500">
                            Affordable & alternate healthcare solutions
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-stone-900 bg-stone-100 mr-3">
                            <i className="fas fa-parachute-box"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-stone-500">
                            Food supply chain security
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-stone-900 bg-stone-100 mr-3">
                            <i className="fas fa-recycle"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-stone-500">
                            Repurposing waste into sustainable products
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
