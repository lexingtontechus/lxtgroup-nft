"use client";
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMedal,faCommentsDollar, faMagnifyingGlassDollar, faMoneyBillTransfer,faMoneyBillWave,faPiggyBank} from "@fortawesome/free-solid-svg-icons";

const loader = ({ src, width, quality }) => {
  return `https://storageapi.fleek.co/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lxtgroup-images/${src}?w=${width}&q=${
    quality || 75
  }`;
};

const ETF = () => {
    return (
    <>
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://storageapi.fleek.co/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lxtgroup-images/forex_etf1.png')"
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
                  <h1 className="text-primary-50 text-center font-bold text-4xl pb-4 uppercase">
                    INVESTMENT MANAGEMENT
                  </h1>
                  <div className="pt-2 w-full h-4/12">
                    <p className="mt-2 mb-4 text-primary-100 fond-semibold text-center">
                      Management fund exclusively focused on investing in AI & ML driven strategies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="pb-20 bg-primary-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-primary-400 w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-primary-50 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-md bg-red-500">
                            <FontAwesomeIcon icon={faMedal} size="lg" className="text-primary-50" beat/>
                    </div>
                    <h6 className="text-xl font-semibold text-primary-50">Our Mission</h6>
                    <p className="mt-2 mb-4 text-primary-500">
                      Build AI & Machine Learning driven algorithms for ETF
                      platforms.
                    </p>
                    <p className="mt-2 mb-4 text-primary-500">
                      Sustainable investment portfolios across a wide range of
                      technologies & industries.
                    </p>
                    <p className="mt-2 mb-4 text-primary-500">
                      Web 3.0 - DeFi & Crypto payments solutions for our
                      clients.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-primary-400 w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-primary-50 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-md bg-sky-500">
                             <FontAwesomeIcon icon={faCommentsDollar} size="lg" className="text-primary-50" beat/>
                    </div>
                    <h6 className="text-xl font-semibold text-primary-50">Our Investments</h6>
                    <p className="mt-2 mb-4 text-primary-500">
                      Investing in digital assets management, currency ETF &
                      Forex .
                    </p>
                    <p className="mt-2 mb-4 text-primary-500">
                      Investing in Education & Fintech Defi business
                      opportunities.
                    </p>
                    <p className="mt-2 mb-4 text-primary-500">
                      Investing in eCommerce ecosystems powered by digital
                      crypto currencies.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-primary-400 w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-primary-50 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-500">
                             <FontAwesomeIcon icon={faMagnifyingGlassDollar} size="lg" className="text-primary-50" beat/>
                    </div>
                    <h6 className="text-xl font-semibold text-primary-50">Our Fund</h6>
                    <p className="mt-2 mb-4 text-primary-500">
                      Quant-driven Forex & Crypto investment platform.
                    </p>
                    <p className="mt-2 mb-4 text-primary-500">
                      Realtime ML of market conditions producing
                      exceptional returns.
                    </p>
                    <p className="mt-2 mb-4 text-primary-500">
                      Superior investment returns through value-add income assets & properties aqcuisitions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mx-4 mt-8 bg-primary-400 rounded-lg">
              <div className="w-full md:w-6/12 lg:7/12 px-4 mr-auto ml-auto">
                <h3 className="text-3xl mb-2 font-semibold leading-normal text-primary-50">
                  Crypto ETF
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-primary-100">
                  Algorithmic tracking of crypto indices & transactions.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-primary-100">
                  Direct & indirect exposure to digital assets.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-primary-100">
                  Includes crypto miners, companies engaged in blockchain,
                  crypto transactions, purveyors of blockchain technology,
                  including hardware and software, and more.
                </p>
              </div>

              <div className="w-full md:w-6/12 lg:5/12 p-8 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-primary-800">
                  <Image
                  loader={loader}
                    alt="Crypto ETF"
                    src="crypto_etf2.png"
                    width={400}
                    height={400}
                    className="w-full align-middle rounded-t-lg"
                  />
                <blockquote className="relative p-8 mb-4">
                    <h4 className="text-xl font-bold text-primary-50">
                      Crypto Fund
                    </h4>
                    <p className="text-md font-light mt-2 text-primary-50">
                      SEC Approved Management Fund.
                    </p>
                  </blockquote>
                  </div>
                 
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-6/12 lg:5/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-primary-800">
                  <Image
                  loader={loader}
                    alt="Forex ETF"
                    src="crypto_etf1.png"
                    width={400}
                    height={400}
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <h4 className="text-xl font-bold text-primary-50">
                      Forex & Currency ETF
                    </h4>
                    <p className="text-md font-light mt-2 text-primary-50">
                      Live trading built on our proprietary smart trading
                      algorithms.
                    </p>
                  </blockquote>
                </div>
              </div>

              <div className="w-full md:w-6/12 lg:7/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <h3 className="text-3xl font-semibold text-primary-50">
                    Forex & Currency ETF
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-primary-500">
                    Funds are comprised of currency futures contracts.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                        <span className="text-primary-100 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-md bg-emerald-400">
                          <FontAwesomeIcon icon={faMoneyBillTransfer} size="lg" className="text-primary-50" beat/>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-primary-100 ml-2 mb-4">
                            Algorithm driven smart trading of Forex & Currency
                            ETF contracts.
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                       <span className="text-primary-100 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-md bg-emerald-400">
                          <FontAwesomeIcon icon={faMoneyBillWave} size="lg" className="text-primary-50" beat/>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-primary-100 ml-2 mb-4">
                            Optimized leverage & liquidity.
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                       <span className="text-primary-100 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-md bg-emerald-400">
                          <FontAwesomeIcon icon={faPiggyBank} size="lg" className="text-primary-50" beat/>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-primary-100 ml-2 mb-4">
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
    </>
  );
}
export default ETF;