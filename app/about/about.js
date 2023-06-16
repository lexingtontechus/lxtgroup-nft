"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const loader = ({ src, width, quality }) => {
  return `https://storageapi.fleek.co/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lxtgroup-images/${src}?w=${width}&q=${
    quality || 75
  }`;
};
export default function Privacy() {
  return (
    <main>
      <div
        className="hero min-h-screen backdrop-opacity-50"
        style={{
          backgroundImage:
            "url('https://storage.fleek-internal.com/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lxtgroup-images/header.jpg')",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-accent uppercase">
              QUANTUM MANAGEMENT
            </h1>
            <p className="mb-5 text-xl">
              Human systems, a necessary part of the theory argues that the
              purposes, values, aspirations, and motivations of people working
              in an organization, and the emergent organizational culture, must
              be seen as part of its system dynamics.
            </p>
          </div>
        </div>
      </div>

      <section className="relative bg-base-100 ">
        <div className="">
          {/*container mx-auto px-4*/}
          <div className="relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg bg-neutral px-6 shadow-xl">
            <div className="flex flex-wrap justify-center">
              <div className="relative flex w-full justify-center px-4 lg:order-2 lg:w-3/12">
                <Image
                  loader={loader}
                  alt="LXT GROUP LLC"
                  src="logo_lxtgroup_circle.svg"
                  width="150"
                  height="150"
                  className="rounded-half absolute -m-16 -ml-20 h-auto max-w-150-px border-none align-middle lg:-ml-16"
                />
              </div>
            </div>

            <div className="mt-12 pt-8 text-center">
              <h3 className="mb-2 mt-4 text-4xl font-semibold leading-normal text-primary">
                LXT GROUP LLC
              </h3>
              <div className="mb-2 mt-0 text-sm font-bold uppercase leading-normal text-secondary">
                <i className="fas fa-map-marker-alt mr-2 text-lg text-primary"></i>
                Los Angeles, California
              </div>
              <div className="align-center">
                <button
                  className="mb-1 mr-1 h-4 w-4 rounded-full px-8 align-middle outline-none focus:outline-none"
                  type="button"
                >
                  <Link
                    href="https://www.linkedin.com/company/lxtgroup"
                    target="_blank"
                    rel="noreferrer"
                    title="LinkedIn"
                  >
                    <svg
                      viewBox="0 0 448 512"
                      height="25"
                      width="25"
                      className="fill-primary hover:fill-secondary"
                    >
                      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                    </svg>
                  </Link>
                </button>
                <button
                  className="mb-1 mr-1 h-4 w-4 rounded-full px-8 align-middle outline-none focus:outline-none"
                  type="button"
                >
                  <Link
                    href="https://angel.co/company/lxt-group"
                    target="_blank"
                    rel="noreferrer"
                    title="Angel List"
                  >
                    <svg
                      viewBox="0 0 448 512"
                      height="25"
                      width="25"
                      className="fill-primary hover:fill-secondary"
                    >
                      <path d="M347.1 215.4c11.7-32.6 45.4-126.9 45.4-157.1 0-26.6-15.7-48.9-43.7-48.9-44.6 0-84.6 131.7-97.1 163.1C242 144 196.6 0 156.6 0c-31.1 0-45.7 22.9-45.7 51.7 0 35.3 34.2 126.8 46.6 162-6.3-2.3-13.1-4.3-20-4.3-23.4 0-48.3 29.1-48.3 52.6 0 8.9 4.9 21.4 8 29.7-36.9 10-51.1 34.6-51.1 71.7C46 435.6 114.4 512 210.6 512c118 0 191.4-88.6 191.4-202.9 0-43.1-6.9-82-54.9-93.7zM311.7 108c4-12.3 21.1-64.3 37.1-64.3 8.6 0 10.9 8.9 10.9 16 0 19.1-38.6 124.6-47.1 148l-34-6 33.1-93.7zM142.3 48.3c0-11.9 14.5-45.7 46.3 47.1l34.6 100.3c-15.6-1.3-27.7-3-35.4 1.4-10.9-28.8-45.5-119.7-45.5-148.8zM140 244c29.3 0 67.1 94.6 67.1 107.4 0 5.1-4.9 11.4-10.6 11.4-20.9 0-76.9-76.9-76.9-97.7.1-7.7 12.7-21.1 20.4-21.1zm184.3 186.3c-29.1 32-66.3 48.6-109.7 48.6-59.4 0-106.3-32.6-128.9-88.3-17.1-43.4 3.8-68.3 20.6-68.3 11.4 0 54.3 60.3 54.3 73.1 0 4.9-7.7 8.3-11.7 8.3-16.1 0-22.4-15.5-51.1-51.4-29.7 29.7 20.5 86.9 58.3 86.9 26.1 0 43.1-24.2 38-42 3.7 0 8.3.3 11.7-.6 1.1 27.1 9.1 59.4 41.7 61.7 0-.9 2-7.1 2-7.4 0-17.4-10.6-32.6-10.6-50.3 0-28.3 21.7-55.7 43.7-71.7 8-6 17.7-9.7 27.1-13.1 9.7-3.7 20-8 27.4-15.4-1.1-11.2-5.7-21.1-16.9-21.1-27.7 0-120.6 4-120.6-39.7 0-6.7.1-13.1 17.4-13.1 32.3 0 114.3 8 138.3 29.1 18.1 16.1 24.3 113.2-31 174.7zm-98.6-126c9.7 3.1 19.7 4 29.7 6-7.4 5.4-14 12-20.3 19.1-2.8-8.5-6.2-16.8-9.4-25.1z" />
                    </svg>
                  </Link>
                </button>
              </div>

              <div className="mb-2 mt-10 text-primary-content">
                The Decentralized Web (3.0)
              </div>
              <div className="mb-2 text-primary-content">
                IPFS - The Distributed Web
              </div>
              <button
                className="mb-1 mr-1 h-4 w-4 rounded-full align-middle outline-none focus:outline-none"
                type="button"
              >
                <Image
                  loader={loader}
                  src="polygon.svg"
                  alt="Polygon"
                  height="25"
                  width="25"
                />
              </button>
              <Link
                className="mb-2 mr-4 inline-block whitespace-nowrap py-2 text-sm font-bold uppercase leading-relaxed text-secondary"
                href="https://polygonscan.com/tx/0x120cd9cc6b3c8b143a56dc51f10d39624df4d1880ff5fe00ddc66c9234a57e03"
                alt="Polygon"
                rel="noreferrer"
                target="_blank"
              >
                Verify On Polygon
              </Link>
            </div>

            <div className="mt-10 border-t border-primary-200 py-10 text-center">
              <div className="flex flex-wrap justify-center">
                <div className="w-full px-4 lg:w-9/12">
                  <h3 className="mb-2 text-4xl font-semibold leading-normal text-primary">
                    Our focus is sustainable projects.
                  </h3>
                  <ul className="mb-4 text-lg leading-relaxed text-secondary">
                    <li>Cell and Plant-Based</li>
                    <li>From Bench to Production</li>
                    <li>Crypto-Hedge Fund</li>
                    <li>SmartFX</li>
                    <li>Web 3.0</li>
                  </ul>

                  <p className="mb-4 text-lg leading-relaxed text-secondary">
                    Part of the publicly accessible Ethereum blockchain.
                    <br />
                    Providing an impressive level of openness, transparency and
                    enhanced security.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
