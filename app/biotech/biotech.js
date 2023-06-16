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
export default function BioTechPage() {
  return (
    <main>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url('https://storageapi.fleek.co/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lxtgroup-images/pharmatech.png')",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-accent">
              BIOTECH INVESTMENT
            </h1>
            <p className="mb-5">
              Synthetic biology & biofabrication offers increased
              sustainability, standardization and reproducibility.
            </p>
          </div>
        </div>
      </div>

      <section className="-mt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full px-4 pt-6 text-center md:w-4/12 lg:pt-12">
              <div className="relative mb-8 flex w-full min-w-0 flex-col break-words rounded-lg bg-accent shadow-lg">
                <div className="flex-auto px-4 py-5">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-md bg-indigo-400 p-3 text-center shadow-lg">
                    <FontAwesomeIcon
                      icon={faMedal}
                      size="lg"
                      className="text-primary"
                      beat
                    />
                  </div>
                  <h6 className="text-xl font-semibold text-primary">
                    Our Mission
                  </h6>
                  <p className="mb-4 mt-2 text-primary-content">
                    Investing in the sustainable future of food & medical
                    advances.
                  </p>
                  <p className="mb-4 mt-2 text-primary-content">
                    Sustainable & high yield foodtech products & water sources.
                  </p>
                  <p className="mb-4 mt-2 text-primary-content">
                    Future of eCommerce powered by virtual & augmented reality.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full px-4 text-center md:w-4/12">
              <div className="relative mb-4 flex w-full min-w-0 flex-col break-words rounded-lg bg-accent shadow-lg">
                <div className="flex-auto px-4 py-5">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-md bg-sky-400 p-3 text-center text-primary-content shadow-lg">
                    <FontAwesomeIcon
                      icon={faPowerOff}
                      size="lg"
                      className="text-primary"
                      beat
                    />
                  </div>
                  <h6 className="text-xl font-semibold text-primary">
                    Our Investments
                  </h6>
                  <p className="mb-4 mt-2 text-primary-content">
                    We invest in plant-based & cell-based innovations. If you
                    are a start-ups that fits our missionInvesting in the
                    sustainable future of food & medical advances.
                  </p>
                  <p className="mb-4 mt-2 text-primary-content">
                    Sustainable & high yield foodtech products & water sources.
                  </p>
                  <p className="mb-4 mt-2 text-primary-content">
                    Future of eCommerce powered by virtual & augmented reality.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full px-4 pt-6 text-center md:w-4/12 lg:pt-12">
              <div className="relative mb-8 flex w-full min-w-0 flex-col break-words rounded-lg bg-accent shadow-lg">
                <div className="flex-auto px-4 py-5">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-md bg-emerald-400 p-3 text-center text-primary-content shadow-lg">
                    <FontAwesomeIcon
                      icon={faArrowUpRightDots}
                      size="lg"
                      className="text-primary"
                      beat
                    />
                  </div>
                  <h6 className="text-xl font-semibold text-primary">
                    Our Growth
                  </h6>
                  <p className="mb-4 mt-2 text-primary-content">
                    Accelerating innovation and action for sustainable growth.
                  </p>
                  <p className="mb-4 mt-2 text-primary-content">
                    Embracing technology powering food systems transformation.
                  </p>
                  <p className="mb-4 mt-2 text-primary-content">
                    Embracing technology, leveraging AI and Machine Learning.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-4 flex flex-wrap items-center rounded-lg bg-accent p-8">
            <div className="lg:7/12 ml-auto mr-auto w-full px-4 md:w-6/12">
              <h3 className="mb-2 text-3xl font-semibold leading-normal text-primary">
                The Future Of Food
              </h3>
              <p className="mb-4 mt-4 text-lg font-light leading-relaxed text-primary-content">
                Technology that meets future needs.
              </p>
              <p className="mb-4 mt-0 text-lg font-light leading-relaxed text-primary-content">
                Sustainable & high yield foodtech products & water sources.
              </p>
              <p className="mb-4 mt-0 text-lg font-light leading-relaxed text-primary-content">
                Future of eCommerce powered by virtual & augmented reality.
              </p>
            </div>

            <div className="lg:5/12 ml-auto mr-auto w-full p-8 md:w-6/12 bg-accent">
              <div className="relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg bg-neutral shadow-lg">
                <Image
                  loader={loader}
                  alt="Food Loves Tech"
                  className="w-full rounded-t-lg align-middle"
                  src="foodlovestech.png"
                  width={400}
                  height={400}
                />
                <blockquote className="relative mb-4 p-8">
                  <h4 className="text-xl font-bold text-primary">
                    Biodiverse Food Systems
                  </h4>
                  <p className="text-md mt-2 font-light text-primary-content">
                    Cellular agriculture & plant-based movement
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="container mx-auto px-8">
          <div className="flex flex-wrap items-center rounded-lg bg-accent">
            <div className="lg:5/12 ml-auto mr-auto w-full px-4 md:w-6/12">
              <div className="relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg bg-neutral shadow-lg">
                <Image
                  loader={loader}
                  alt="BioTech"
                  src="biotech.png"
                  width={400}
                  height={400}
                  className="w-full rounded-t-lg align-middle"
                />
                <blockquote className="relative mb-4 p-8">
                  <h4 className="text-xl font-bold text-primary">
                    BioTechnology
                  </h4>
                  <p className="text-md mt-2 font-light text-primary-content">
                    Biology & Technology integration to address farming
                    challenges.
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="lg:7/12 ml-auto mr-auto w-full px-4 md:w-6/12">
              <div className="md:pr-12">
                <h3 className="text-3xl font-semibold text-primary">
                  Bio Technology Evolution
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-primary">
                  Synthetic & biotech inventions & startups.
                </p>
                <ul className="mt-6 list-none">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-md bg-red-400 p-3 text-center text-primary-content shadow-lg">
                          <FontAwesomeIcon
                            icon={faHeartPulse}
                            size="lg"
                            className="text-primary"
                            beat
                          />
                        </span>
                      </div>
                      <div>
                        <h4 className="mb-4 ml-2 text-primary-content">
                          Affordable & alternate healthcare solutions
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-md bg-blue-400 p-3 text-center text-primary-content shadow-lg">
                          <FontAwesomeIcon
                            icon={faParachuteBox}
                            size="lg"
                            className="text-primary"
                            beat
                          />
                        </span>
                      </div>
                      <div>
                        <h4 className="mb-4 ml-2 text-primary-content">
                          Food supply chain security
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-md bg-indigo-400 p-3 text-center text-primary-content shadow-lg">
                          <FontAwesomeIcon
                            icon={faRecycle}
                            size="lg"
                            className="text-primary"
                            beat
                          />
                        </span>
                      </div>
                      <div>
                        <h4 className="mb-4 ml-2 text-primary-content">
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
  );
}
