import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import ReactPlayer from "react-player";
// components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
//Images
import ImgCrypto from "../public/crypto_etf2.png";
import ImgForex from "../public/forex_etf1.png";

export default function ETF() {
  const [isPlaying, setIsPlaying] = useState(true);
  return (
    <>
      <Head>
        <title>LXT GROUP | ETF</title>
        <meta
          property="description="
          content="Investment management of Crypto, digital & Forex assets."
          key="description"
        />
      </Head>

      <IndexNavbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: "url('/crypto_banner.png')"
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
                  <h1 className="text-white text-center font-semibold text-5xl pb-4">
                    INVESTMENT MANAGEMENT
                  </h1>
                  <ReactPlayer
                    url="https://storageapi.fleek.co/a2d41cff-44ad-49e9-a80a-2d1aafc21231-bucket/lxtgroup-videos/etf.mp4"
                    height="320"
                    width="240"
                    controls
                    playing={isPlaying}
                    config={{
                      file: {
                        attributes: {
                          controlsList: "nodownload"
                        }
                      }
                    }}
                  />
                  ;
                  <div className="pt-2 w-8/12 h-4/12">
                    <p className="mt-2 mb-4 text-blueGray-400 text-center">
                      Cryptocurrency hedge fund exclusively focused on investing
                      in digital assets
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
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-award"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Our Mission</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Build AI & Machine Learning driven algorithms for ETF
                      platforms.
                    </p>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Sustainable investment portfolios across a wide range of
                      technologies & industries.
                    </p>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Web 3.0 - DeFi & Crypto payments solutions for our
                      clients.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                      <i className="fab fa-bitcoin"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Our Investments</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Investing in digital assets management, currency ETF &
                      Forex .
                    </p>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Investing in Education & Fintech Defi business
                      opportunities.
                    </p>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Investing in eCommerce ecosystems powered by digital
                      crypto currencies.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      <i className="fas fa-rocket"></i>
                    </div>
                    <h6 className="text-xl font-semibold">LAUNCHING Q2 2022</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Quant-driven Forex & Crypto investment platform.
                    </p>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Predicting specific market conditions to produce
                      exceptional returns to investors.
                    </p>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Superior investment returns by means of acquiring
                      value-add income assets & properties.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Crypto ETF
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                  Algorithmic tracking of crypto indices & transactions.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                  Direct & indirect exposure to digital assets.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                  Includes crypto miners, companies engaged in blockchain,
                  crypto transactions, purveyors of blockchain technology,
                  including hardware and software, and more.
                </p>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
                  <img
                    alt="Crypto ETF"
                    src="https://storageapi.fleek.co/a2d41cff-44ad-49e9-a80a-2d1aafc21231-bucket/lxtgroup-images/crypto_etf2.png"
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
                        className="text-blueGray-700 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">Crypto ETF</h4>
                    <p className="text-md font-light mt-2 text-white">
                      Encompassing all aspects of digital assets management.
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
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
                  <img
                    alt="Forex ETF"
                    src="https://storageapi.fleek.co/a2d41cff-44ad-49e9-a80a-2d1aafc21231-bucket/lxtgroup-images/forex_etf1.png"
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
                        className="text-blueGray-700 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      Forex & Currency ETF
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      Live trading built on our proprietary smart trading
                      algorithms.
                    </p>
                  </blockquote>
                </div>
              </div>

              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <h3 className="text-3xl font-semibold">
                    Forex & Currency ETF
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                    Funds are comprised of currency futures contracts.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                            <i className="fas fa-money-bill-alt"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Algorithm driven smart trading of Forex & Currency
                            ETF contracts.
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                            <i className="fas fa-money-bill-wave"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Optimized leverage & liquidity.
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                            <i className="fas fa-piggy-bank"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Curated currency baskets & dynamic pairing
                            selections.
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
