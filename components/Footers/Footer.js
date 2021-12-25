import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-blueGray-200 pt-8 pb-6">
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
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold">Let's keep in touch!</h4>
              <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
                <a
                  className="hover:text-blueGray-300 text-blueGray-700 px-3 py-4 lg:py-2  items-center text-xs uppercase font-bold"
                  href="https://www.linkedin.com/company/lxtgroup"
                  target="_blank"
                  rel="noreferrer"
                  title="LinkedIn"
                >
                  <button
                    className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button"
                  >
                    <i className="fab fa-linkedin"></i>
                  </button>
                </a>
                <a
                  className="hover:text-blueGray-300 text-blueGray-700 px-3 py-4 lg:py-2  items-center text-xs uppercase font-bold"
                  href="https://angel.co/company/lxt-group/"
                  target="_blank"
                  rel="noreferrer"
                  title="Angel"
                >
                  <button
                    className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button"
                  >
                    <i className="fab fa-angellist"></i>
                  </button>
                </a>
                <a
                  className="hover:text-blueGray-300 text-blueGray-700 px-3 py-4 lg:py-2  items-center text-xs uppercase font-bold"
                  href="https://discord.gg/8nZndQn6m6"
                  target="_blank"
                  rel="noreferrer"
                  title="Discord"
                >
                  <button
                    className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 "
                    type="button"
                  >
                    <i className="fab fa-discord"></i>
                  </button>
                </a>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    LXT GROUP
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <Link href="/about">
                        <a
                          href="#lxt"
                          className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm border-none border-transparent"
                        >
                          About Us
                        </a>
                      </Link>
                    </li>
                    {/* <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://blog.lxtgroup.nft"
                      >
                        Blog
                      </a>
                   </li>*/}
                    <li>
                      <Link href="/contact">
                        <a
                          href="#lxt"
                          className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm border-none border-transparent"
                        >
                          Contact Us
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Legal
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <Link href="/terms">
                        <a
                          href="#lxt"
                          className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm border-none border-transparent"
                        >
                          Terms of Service
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/privacy">
                        <a
                          href="#lxt"
                          className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm border-none border-transparent"
                        >
                          Privacy Policy
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © {new Date().getFullYear()}{" "}
                <a
                  href="https://lxtgroup.ft"
                  className="text-blueGray-500 hover:text-blueGray-800"
                >
                  LXT GROUP LLC
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
