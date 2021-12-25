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
export default function Startups() {
  const [isPlaying, setIsPlaying] = useState(true);
  return (
    <>
      <Head>
        <title>LXT GROUP | Startups</title>
      
      </Head>
      <IndexNavbar transparent />
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
              <div className="pt-24 w-full lg:w-10/12 px-4 ml-auto mr-auto text-center">
                <div className="p-2">
                  <h1 className="text-white text-center font-semibold text-5xl pb-4">
                    HYPERLOCAL MICROSERVICES
                  </h1>
                  <ReactPlayer
                    url="https://storageapi.fleek.co/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lxtgroup-videos/startups.mp4"
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
                  ;
                  <div className="pt-2 w-full h-4/12">
                    <p className="mt-2 mb-4 text-blueGray-400 text-center">
                      Accelerated Startup Business Investment
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
                      <i className="fab fa-empire"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Our Mission</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Launching hyperlocal startups.
                    </p>
                    <ul className="list-none">
                      <li className="py-1">
                        <div className="flex items-center">
                          <div>
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                              <i className="fas fa-hamburger"></i>
                            </span>
                          </div>
                          <div>
                            <h4 className="text-blueGray-500 text-left">
                              Food Delivery
                            </h4>
                          </div>
                        </div>
                      </li>

                      <li className="py-1">
                        <div className="flex items-center">
                          <div>
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                              <i className="fas fa-truck"></i>
                            </span>
                          </div>
                          <div>
                            <h4 className="text-blueGray-500 text-left">
                              Logistics Service
                            </h4>
                          </div>
                        </div>
                      </li>
                      <li className="py-1">
                        <div className="flex items-center">
                          <div>
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                              <i className="fas fa-shuttle-van"></i>
                            </span>
                          </div>
                          <div>
                            <h4 className="text-blueGray-500 text-left">
                              Transportation Service
                            </h4>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                      <i className="fas fa-hand-holding-water"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Our Investments</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Investing in hyperlocal business startups.
                    </p>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Sustainable offline to online hyperlocal business
                      startups.
                    </p>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Future of local eCommerce powered by microservices
                      techologies & marketplace platforms.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      <i className="fas fa-fingerprint"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Our Growth</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Automation, upskilling & training.
                    </p>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Sustainable SMB in personalized services.
                    </p>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Future of eCommerce powered by virtual & augmented
                      reality.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*Delivery Food*/}
            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  The Future Of Local Business
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                  Supporting Transportation Service Companies & Transportation
                  Service Networks.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                  Launch a hyperlocal transportation service that caters to your
                  niche market, e.g.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                  Local business routes Welfare causes Afterschool pickup Senior
                  citizens
                </p>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
                  <img
                    alt="Food Delivery Technology"
                    src="/delivery_food.png"
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
                      Food Delivery / Cloud Kitchens
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      Supporting restaurants, food networks & cloud kitchens
                      business models.
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
                    alt="Medical Delivery Technology"
                    layout="responsive"
                    src="/delivery_medical.png"
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
                      Parcel & Logistics
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      Your customers conduct orders, make payments, track and
                      electronically confirm deliveries.
                    </p>
                    <p className="text-md font-light mt-2 text-white">
                      Your delivery fleet can accept, manage and carry out
                      delivery orders.
                    </p>
                  </blockquote>
                </div>
              </div>
              {/*Delivery Medical*/}
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <h3 className="text-3xl font-semibold">
                    Transportation Services
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                    Launching hyperlocal startups.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                            <i className="fas fa-warehouse"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Provide business infrastructure to launch.
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                            <i className="fas fa-shipping-fast"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Launch a hyperlocal service in your city.
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                            <i className="fas fa-business-time"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Dynamic realtime management of your fleet &
                            eCommerce operations.
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
