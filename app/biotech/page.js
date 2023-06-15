"use client";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMedal,
  faPowerOff,
  faArrowUpRightDots,
  faHeartPulse,
  faRecycle,
  faParachuteBox,
} from "@fortawesome/free-solid-svg-icons";

const loader = ({ src, width, quality }) => {
  return `https://storageapi.fleek.co/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lxtgroup-images/${src}?w=${width}&q=${
    quality || 75
  }`;
};

const BioTech = () => {
  return (
    <>
      <div className="relative flex min-h-screen-75 content-center items-center justify-center pb-32 pt-16">
        <div
          className="from-transparent absolute top-0 h-full w-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://storageapi.fleek.co/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lxtgroup-images/pharmatech.png')",
          }}
        ></div>
        <div className="container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 pt-24 text-center lg:w-10/12">
              <div className="p-2">
                <h1 className="pb-4 text-center text-4xl font-bold uppercase text-primary-50">
                  BIOTECH INVESTMENT
                </h1>

                <div className="h-4/12 w-full pt-2">
                  <p className="mb-4 mt-2 text-center font-semibold text-primary-100">
                    Synthetic biology & biofabrication offers increased
                    sustainability, standardization and reproducibility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="-mt-24 bg-primary-200 pb-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full px-4 pt-6 text-center md:w-4/12 lg:pt-12">
              <div className="relative mb-8 flex w-full min-w-0 flex-col break-words rounded-lg bg-primary-400 shadow-lg">
                <div className="flex-auto px-4 py-5">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-md bg-red-500 p-3 text-center shadow-lg">
                    <FontAwesomeIcon
                      icon={faMedal}
                      size="lg"
                      className="text-primary-50"
                      beat
                    />
                  </div>
                  <h6 className="text-xl font-semibold text-primary-50">
                    Our Mission
                  </h6>
                  <p className="mb-4 mt-2 text-primary-100">
                    Investing in the sustainable future of food & medical
                    advances.
                  </p>
                  <p className="mb-4 mt-2 text-primary-100">
                    Sustainable & high yield foodtech products & water sources.
                  </p>
                  <p className="mb-4 mt-2 text-primary-100">
                    Future of eCommerce powered by virtual & augmented reality.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full px-4 text-center md:w-4/12">
              <div className="relative mb-4 flex w-full min-w-0 flex-col break-words rounded-lg bg-primary-400 shadow-lg">
                <div className="flex-auto px-4 py-5">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-md bg-sky-500 p-3 text-center text-primary-100 shadow-lg">
                    <FontAwesomeIcon
                      icon={faPowerOff}
                      size="lg"
                      className="text-primary-50"
                      beat
                    />
                  </div>
                  <h6 className="text-xl font-semibold text-primary-50">
                    Our Investments
                  </h6>
                  <p className="mb-4 mt-2 text-primary-100">
                    We invest in plant-based & cell-based innovations. If you
                    are a start-ups that fits our missionInvesting in the
                    sustainable future of food & medical advances.
                  </p>
                  <p className="mb-4 mt-2 text-primary-100">
                    Sustainable & high yield foodtech products & water sources.
                  </p>
                  <p className="mb-4 mt-2 text-primary-100">
                    Future of eCommerce powered by virtual & augmented reality.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full px-4 pt-6 text-center md:w-4/12 lg:pt-12">
              <div className="relative mb-8 flex w-full min-w-0 flex-col break-words rounded-lg bg-primary-400 shadow-lg">
                <div className="flex-auto px-4 py-5">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-md bg-emerald-400 p-3 text-center text-primary-100 shadow-lg">
                    <FontAwesomeIcon
                      icon={faArrowUpRightDots}
                      size="lg"
                      className="text-primary-50"
                      beat
                    />
                  </div>
                  <h6 className="text-xl font-semibold text-primary-50">
                    Our Growth
                  </h6>
                  <p className="mb-4 mt-2 text-primary-100">
                    Accelerating innovation and action for sustainable growth.
                  </p>
                  <p className="mb-4 mt-2 text-primary-100">
                    Embracing technology powering food systems transformation.
                  </p>
                  <p className="mb-4 mt-2 text-primary-100">
                    Embracing technology, leveraging AI and Machine Learning.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-4 flex flex-wrap items-center rounded-lg bg-primary-400 p-8">
            <div className="lg:7/12 ml-auto mr-auto w-full px-4 md:w-6/12">
              <h3 className="mb-2 text-3xl font-semibold leading-normal text-primary-50">
                The Future Of Food
              </h3>
              <p className="mb-4 mt-4 text-lg font-light leading-relaxed text-primary-100">
                Technology that meets future needs.
              </p>
              <p className="mb-4 mt-0 text-lg font-light leading-relaxed text-primary-100">
                Sustainable & high yield foodtech products & water sources.
              </p>
              <p className="mb-4 mt-0 text-lg font-light leading-relaxed text-primary-100">
                Future of eCommerce powered by virtual & augmented reality.
              </p>
            </div>

            <div className="lg:5/12 ml-auto mr-auto w-full p-8 md:w-6/12">
              <div className="relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg bg-primary-800 shadow-lg">
                <Image
                  loader={loader}
                  alt="Food Loves Tech"
                  className="w-full rounded-t-lg align-middle"
                  src="foodlovestech.png"
                  width={400}
                  height={400}
                />
                <blockquote className="relative mb-4 p-8">
                  <h4 className="text-xl font-bold text-primary-50">
                    Crypto Fund
                  </h4>
                  <p className="text-md mt-2 font-light text-primary-50">
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
          <div className="flex flex-wrap items-center">
            <div className="lg:5/12 ml-auto mr-auto w-full px-4 md:w-6/12">
              <div className="relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg bg-primary-800 shadow-lg">
                <Image
                  loader={loader}
                  alt="BioTech"
                  src="biotech.png"
                  width={400}
                  height={400}
                  className="w-full rounded-t-lg align-middle"
                />
                <blockquote className="relative mb-4 p-8">
                  <h4 className="text-xl font-bold text-primary-50">
                    BioTechnology
                  </h4>
                  <p className="text-md mt-2 font-light text-primary-50">
                    Biology & Technology integration to address farming
                    challenges.
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="lg:7/12 ml-auto mr-auto w-full px-4 md:w-6/12">
              <div className="md:pr-12">
                <h3 className="text-3xl font-semibold text-primary-50">
                  Bio Technology Evolution
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-primary-50">
                  Synthetic & biotech inventions & startups.
                </p>
                <ul className="mt-6 list-none">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-md bg-emerald-400 p-3 text-center text-primary-100 shadow-lg">
                          <FontAwesomeIcon
                            icon={faHeartPulse}
                            size="lg"
                            className="text-primary-50"
                            beat
                          />
                        </span>
                      </div>
                      <div>
                        <h4 className="mb-4 ml-2 text-primary-100">
                          Affordable & alternate healthcare solutions
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-md bg-emerald-400 p-3 text-center text-primary-100 shadow-lg">
                          <FontAwesomeIcon
                            icon={faParachuteBox}
                            size="lg"
                            className="text-primary-50"
                            beat
                          />
                        </span>
                      </div>
                      <div>
                        <h4 className="mb-4 ml-2 text-primary-100">
                          Food supply chain security
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-md bg-emerald-400 p-3 text-center text-primary-100 shadow-lg">
                          <FontAwesomeIcon
                            icon={faRecycle}
                            size="lg"
                            className="text-primary-50"
                            beat
                          />
                        </span>
                      </div>
                      <div>
                        <h4 className="mb-4 ml-2 text-primary-100">
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
    </>
  );
};

export default BioTech;
