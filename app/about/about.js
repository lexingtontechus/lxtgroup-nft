"use client";
import Link from "next/link";
import Image from "next/image";

const loader = ({ src, width, quality }) => {
  return `https://storage.fleek-internal.com/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lxtgroup-images/${src}?w=${width}&q=${
    quality || 75
  }`;
};
export default function About() {
  return (
    <main>
      <div className="hero min-h-screen svg-about">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold text-accent uppercase">
              QUANTUM MANAGEMENT
            </h1>
            <p className="my-8 text-2xl">
              Investing in the future of FoodTech, BioTech, SmartFX &
              Hyperlocal Microservices.
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
                <div className="rounded-half absolute -m-16 -ml-20 h-auto max-w-150-px border-none align-middle lg:-ml-16">
                  <Logo />
                </div>
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
                className="mb-1 mr-4 h-4 w-4 rounded-full align-middle outline-none focus:outline-none"
                type="button"
              >
                <Polygon />
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

            <div className="mt-10 border-t border-accent py-10 text-center">
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
function Polygon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 125 125">
      <defs>
        <clipPath>
          <rect
            id="Rectangle_32"
            data-name="Rectangle 32"
            width="125"
            height="125"
            transform="translate(385 345)"
            fill="#fff"
          />
        </clipPath>
      </defs>
      <g id="favicon" transform="translate(-385 -345)">
        <g id="Mask_Group_3" data-name="Mask Group 3">
          <path
            id="Path_151"
            data-name="Path 151"
            d="M91.487,31.85a7.794,7.794,0,0,0-7.605,0L66.434,41.97l-11.855,6.6L37.132,58.69a7.8,7.8,0,0,1-7.605,0L15.658,50.77a7.566,7.566,0,0,1-3.8-6.38V28.77a7.114,7.114,0,0,1,3.8-6.38l13.645-7.7a7.8,7.8,0,0,1,7.605,0l13.645,7.7a7.566,7.566,0,0,1,3.8,6.38V38.89l11.855-6.82V21.95a7.114,7.114,0,0,0-3.8-6.38L37.132,1.051a7.8,7.8,0,0,0-7.605,0L3.8,15.571A7.114,7.114,0,0,0,0,21.95V51.21a7.114,7.114,0,0,0,3.8,6.38l25.724,14.52a7.8,7.8,0,0,0,7.605,0l17.447-9.9,11.855-6.82,17.448-9.9a7.794,7.794,0,0,1,7.605,0l13.645,7.7a7.567,7.567,0,0,1,3.8,6.38v15.62a7.114,7.114,0,0,1-3.8,6.38l-13.645,7.92a7.8,7.8,0,0,1-7.605,0l-13.645-7.7a7.567,7.567,0,0,1-3.8-6.38V65.289l-11.855,6.82v10.12a7.114,7.114,0,0,0,3.8,6.38l25.724,14.52a7.8,7.8,0,0,0,7.605,0l25.724-14.52a7.567,7.567,0,0,0,3.8-6.38V52.97a7.114,7.114,0,0,0-3.8-6.38Z"
            transform="translate(387 354.939)"
            fill="#8247e5"
          />
        </g>
      </g>
    </svg>
  );
}

function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 393.75 393.75"
      preserveAspectRatio="xMidYMid meet"
      height="150"
      width="150"
    >
      <defs id="SvgjsDefs2207" />
      <g
        featurekey="rootContainer"
        transform="matrix(7.875,0,0,7.875,0,0)"
        fill="#F6F6F6"
      >
        <circle cx="25" cy="25" r="25" fill="#F6F6F6" />
      </g>
      <g
        featurekey="UFHKJ9-0"
        transform="matrix(2.5564905797032815,0,0,2.5564905797032815,68.43511126938303,40.322269079362606)"
        fill="#6D9280"
      >
        <g
          xmlns="http://www.w3.org/2000/svg"
          transform="translate(0,-952.36218)"
          fill="#6D9280"
        >
          <path
            d="m 60.7828,964.36215 27.1809,0.8834 -27.1809,25.9958 z m -1.9745,1.4513 0,26.7845 -25.2681,0 c 8.6166,-8.7334 16.8796,-17.8103 25.2681,-26.7845 z m 27.7053,3.628 3.4864,1.1989 -12.5877,7.4768 z m -68.1835,2.9656 5.5226,0 12.8654,14.0705 -5.9854,6.1204 -12.4026,0 c 9e-4,-6.7347 0,-13.4597 0,-20.1909 z m -1.9746,1.2304 0,5.8364 -6.3555,0 z m 3.363,20.9796 38.627,0 -10.7675,29.43465 z m 39.0898,4.54286 0,41.20229 -12.5878,-6.8775 c 4.1972,-11.443 8.3886,-22.879 12.5878,-34.32479 z"
            fill="#6D9280"
            fillOpacity="1"
            stroke="none"
            marker="none"
            visibility="visible"
            display="inline"
            overflow="visible"
          />
        </g>
      </g>
      <g
        id="SvgjsG2210"
        featurekey="nameFeature-0"
        transform="matrix(2.2882358444145687,0,0,2.2882358444145687,98.71176415558543,276.3047033547783)"
        fill="#6D9192"
      >
        <path
          d="M1 20 l0 -16 l2 0 l0 14 l2.6 0 l0 2 l-4.6 0 z M6.2 20 l2 -8.04 l-1.8 -7.96 l2 0 l0.8 5.6 l0.2 0 l0.8 -5.6 l2 0 l-1.8 7.42 l2 8.58 l-2 0 l-1 -5.66 l-0.2 0 l-1 5.66 l-2 0 z M13 5.800000000000001 l0 -1.8 l6 0 l0 1.8 l-2 0 l0 14.2 l-2 0 l0 -14.2 l-2 0 z M24.400000000000002 11.58 c0 -5.58 0 -7.78 3 -7.78 c2.28 0 2.82 1.26 2.96 4.28 l-1.86 0 c-0.08 -2.18 -0.3 -2.68 -1.1 -2.68 c-1.12 0 -1.12 0.98 -1.12 6.18 c0 5.78 0 6.62 1.12 6.62 c1.06 0 1.12 -0.76 1.12 -5 l-1.32 0 l0 -1.6 l3.2 0 l0 0.78 c0 5.6 0 7.82 -3 7.82 s-3 -2.22 -3 -8.62 z M32 20 l0 -16 l3.24 0 c2.06 0 2.76 1.26 2.76 3.68 c0 2.18 -0.26 3.42 -0.88 4.02 l0 0.12 c0.52 0.18 0.68 1.12 0.88 3.46 l0.4 4.72 l-2 0 l-0.26 -4.72 c-0.14 -2.38 -0.5 -2.88 -1.1 -2.88 l-1.04 0 l0 7.6 l-2 0 z M34 10.8 l1.24 0 c0.7 0 0.9 -0.7 0.9 -3.12 c0 -1.58 -0.3 -2.08 -0.9 -2.08 l-1.24 0 l0 5.2 z M39.8 11.58 c0 -5.58 0.12 -7.78 3.12 -7.78 s3.12 2.2 3.12 7.78 c0 6.4 -0.12 8.62 -3.12 8.62 s-3.12 -2.22 -3.12 -8.62 z M41.8 11.58 c0 5.78 0 6.62 1.12 6.62 s1.12 -0.84 1.12 -6.62 c0 -5.2 0 -6.18 -1.12 -6.18 s-1.12 0.98 -1.12 6.18 z M47.74 11.58 l0 -7.58 l2 0 l0 7.58 c0 5.78 0 6.62 1 6.62 s1 -0.84 1 -6.62 l0 -7.58 l2 0 l0 7.58 c0 6.4 0 8.62 -3 8.62 s-3 -2.22 -3 -8.62 z M55.64 20 l0 -16 l3.24 0 c2.06 0 2.6 1.26 2.76 4.28 l0 0.64 c-0.16 3.02 -0.7 4.28 -2.76 4.28 l-1.24 0 l0 6.8 l-2 0 z M57.64 11.6 l1.24 0 c0.6 0 0.82 -0.5 0.9 -2.68 l0 -0.64 c-0.08 -2.18 -0.3 -2.68 -0.9 -2.68 l-1.24 0 l0 6 z M67.44 20 l0 -16 l2 0 l0 14 l2.6 0 l0 2 l-4.6 0 z M73.24 20 l0 -16 l2 0 l0 14 l2.6 0 l0 2 l-4.6 0 z M78.83999999999999 11.58 c0 -5.58 0 -7.78 2.8 -7.78 c2.06 0 2.62 1.26 2.76 4.28 l-1.86 0 c-0.08 -2.18 -0.3 -2.68 -0.9 -2.68 c-0.92 0 -0.92 0.98 -0.92 6.18 c0 5.78 0 6.62 0.92 6.62 c0.66 0 0.86 -0.5 0.9 -3.08 l1.88 0 c-0.12 3.7 -0.62 5.08 -2.78 5.08 c-2.8 0 -2.8 -2.22 -2.8 -8.62 z"
          fill="#6D9192"
        />
      </g>
    </svg>
  );
}
