/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { useState, useEffect } from "react";
//import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import ReactPlayer from "react-player";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

import ImgBioTech from "../public/biotech.png";
import ImgETF from "../public/biotech.png";
import ImgHyperlocal from "../public/biotech.png";

export default function Index() {
  const [isPlaying, setIsPlaying] = useState(true);
  const Emoji = (props) => (
    <span
      className="emoji"
      role="img"
      aria-label={props.label ? props.label : ""}
      aria-hidden={props.label ? "false" : "true"}
    >
      {props.symbol}
    </span>
  );
  return (
    <>
      <Head>
        <title>LXT GROUP | Home</title>
      </Head>
      <IndexNavbar fixed />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: "url('/quantum_header.jpg')"
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="pt-24 w-full lg:w-10/12 px-4 ml-auto mr-auto text-center justify-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl text-center uppercase pb-4">
                    Quantum Management
                  </h1>
                  <ReactPlayer
                    url="https://link.ap1.storjshare.io/s/jwylcpaqzdib5uqg32lltvzl527a/lxtgroup/quantum_management.mp4?wrap=0"
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
                  <div className="pt-2 w-8/12 h-4/12">
                    <p className="mt-2 mb-4 text-blueGray-500 text-center">
                      Investing in the future of FoodTech, PharmaTech, <br />
                      Crypto EFT & Hyperlocal Microservices.
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
                className="text-blueGray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="mt-0 md:mt-0 pb-40 relative bg-gray-300">
          {/*BIOTECH*/}
          <div className="container mx-auto px-4 pb-16 pt-16">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
                <div className="md:pr-12">
                  <h3 className="text-3xl font-semibold uppercase">
                    Bio Technology
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                    Advances in food technology spans from replacement food
                    sources to synthetic replacements of biopharma applications.
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                    We are investing in businesses that divest & diversify in,
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                            <i className="fas fa-apple-alt"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Alternative food sources that utilize new food
                            technologies.
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                            <i className="fas fa-microscope"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Synthetic pharma technologies to increase
                            accessibility to low cost pharmaceuticals.
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                            <i className="fas fa-notes-medical"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Biomanufacturing utilizing biological systems for
                            the production of medical products and therapies,
                            biomaterials, food & beverages, and specialty
                            chemicals.
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="w-full md:w-6/12 mr-auto px-4 pt-20 md:pt-0">
                <Image
                  alt="BioTech"
                  className="max-w-full rounded-lg shadow-xl"
                  layout="responsive"
                  style={{
                    transform:
                      "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)"
                  }}
                  src={ImgBioTech}
                />
              </div>
            </div>
          </div>

          {/*ETF */}
          <div className="container mx-auto px-4 pb-16 pt-16">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-6/12 mr-auto px-4 pt-20 md:pt-0">
                <Image
                  alt="Crypto EFT"
                  className="max-w-full rounded-lg shadow-xl"
                  layout="responsive"
                  style={{
                    transform:
                      "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)"
                  }}
                  src={ImgETF}
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
                <div className="md:pr-12">
                  <h3 className="text-3xl font-semibold uppercase">
                    Investment Management
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                    In Q2 2022, our FinTech initiative will launch a multi-asset
                    forex & crypto brokerage service.
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                    Our primary goal is to establish a wealth strategy for our
                    clients through the use of Artificial Intelligence-driven
                    Quantitative trading,
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                            <Emoji symbol="️️🏛" label="SEC Approved" />
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">SEC Approved</h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                            <Emoji symbol="👨‍🔬" label="Data Scientist" />
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Led by experienced brokers, traders & data
                            scientists
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                            <Emoji symbol="💹" label="Market Growth" />
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Dynamic AI & ML driven algorithms
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/*HYPERLOCAL */}
          <div className="container mx-auto  px-4 pb-16 pt-16">
            <div className="flex flex-wrap items-center">
              <div className="w-full md:w-6/12 px-4">
                <div className="flex flex-wrap">
                  <h3 className="text-3xl font-semibold uppercase">
                    Hyperlocal Microservices
                  </h3>
                  <div className="w-full md:w-6/12 px-4">
                    <div className="relative flex flex-col mt-4">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                          <i className="fas fa-map-marked-alt"></i>
                        </div>
                        <h6 className="text-xl mb-1 font-semibold">
                          Food Delivery
                        </h6>
                        <p className="mb-4 text-blueGray-500">
                          Launch a food delivery or cloud kitchen app or
                          marketplace
                        </p>
                      </div>
                    </div>
                    <div className="relative flex flex-col min-w-0">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                          <i className="fas fa-shuttle-van"></i>
                        </div>
                        <h6 className="text-xl mb-1 font-semibold">
                          Transportation Services
                        </h6>
                        <p className="mb-4 text-blueGray-500">
                          Launch a transportation delivery app or marketplace
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-6/12 px-4">
                    <div className="relative flex flex-col min-w-0 mt-4">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                          <i className="fab fa-medrt"></i>
                        </div>
                        <h6 className="text-xl mb-1 font-semibold">
                          Medical Delivery
                        </h6>
                        <p className="mb-4 text-blueGray-500">
                          Launch a medical or pharmacy delivery app or
                          marketplace
                        </p>
                      </div>
                    </div>
                    <div className="relative flex flex-col min-w-0">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                          <i className="fas fa-dolly-flatbed"></i>
                        </div>
                        <h6 className="text-xl mb-1 font-semibold">
                          Parcel Logistics Services
                        </h6>
                        <p className="mb-4 text-blueGray-500">
                          Launch a parcel delivery or logistics app or
                          marketplace
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto mt-16">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
                  <Image
                    alt="HYPERLOCAL MICROSERVICES"
                    layout="responsive"
                    src={ImgHyperlocal}
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
                        className="text-blueGray-700 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      HYPERLOCAL MICROSERVICES
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      Investing in new local business opportunities in Los
                      Angeles, CA & Orange County, CA.
                    </p>
                  </blockquote>
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
