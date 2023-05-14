"use client";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMedal,faPowerOff, faArrowUpRightDots,faHeartPulse,faRecycle, faParachuteBox} from "@fortawesome/free-solid-svg-icons";

const loader = ({ src, width, quality }) => {
  return `https://storageapi.fleek.co/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lxtgroup-images/${src}?w=${width}&q=${
    quality || 75
  }`;
};

const BioTech = () => { 
  return (
    <>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover from-transparent"
            style={{
              backgroundImage:
                "url('https://storageapi.fleek.co/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lxtgroup-images/pharmatech.png')",
            }}
          >
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="pt-24 w-full lg:w-10/12 px-4 ml-auto mr-auto text-center">
                <div className="p-2">
                  <h1 className="text-primary-50 font-bold text-4xl text-center pb-4 uppercase">
                    BIOTECH INVESTMENT
                  </h1>

                  <div className="pt-2 w-full h-4/12">
                    <p className="mt-2 mb-4 text-primary-100 font-semibold text-center">
                      Synthetic biology & biofabrication offers increased
                      sustainability, standardization and reproducibility.
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
                    <div className="p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-md bg-red-500">
                    <FontAwesomeIcon icon={faMedal} size="lg" className="text-primary-50" beat/>
                    </div>
                    <h6 className="text-xl font-semibold text-primary-50">Our Mission</h6>
                    <p className="mt-2 mb-4 text-primary-100">
                      Investing in the sustainable future of food & medical
                      advances.
                    </p>
                    <p className="mt-2 mb-4 text-primary-100">
                      Sustainable & high yield foodtech products & water
                      sources.
                    </p>
                    <p className="mt-2 mb-4 text-primary-100">
                      Future of eCommerce powered by virtual & augmented
                      reality.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-primary-400 w-full mb-4 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-primary-100 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-md bg-sky-500">
                         <FontAwesomeIcon icon={faPowerOff} size="lg" className="text-primary-50" beat/>
                    </div>
                    <h6 className="text-xl font-semibold text-primary-50">Our Investments</h6>
                    <p className="mt-2 mb-4 text-primary-100">
                      We invest in plant-based & cell-based innovations. If you
                      are a start-ups that fits our missionInvesting in the
                      sustainable future of food & medical advances.
                    </p>
                    <p className="mt-2 mb-4 text-primary-100">
                      Sustainable & high yield foodtech products & water
                      sources.
                    </p>
                    <p className="mt-2 mb-4 text-primary-100">
                      Future of eCommerce powered by virtual & augmented
                      reality.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-primary-400 w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-primary-100 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-md bg-emerald-400">
                      <FontAwesomeIcon icon={faArrowUpRightDots} size="lg" className="text-primary-50" beat/>
                    </div>
                    <h6 className="text-xl font-semibold text-primary-50">Our Growth</h6>
                    <p className="mt-2 mb-4 text-primary-100">
                      Accelerating innovation and action for sustainable growth.
                    </p>
                    <p className="mt-2 mb-4 text-primary-100">
                      Embracing technology powering food systems
                      transformation.
                    </p>
                    <p className="mt-2 mb-4 text-primary-100">
                      Embracing technology, leveraging AI and Machine Learning.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mx-4 p-8 bg-primary-400 rounded-lg">
              <div className="w-full md:w-6/12 lg:7/12 px-4 mr-auto ml-auto">
                <h3 className="text-primary-50 text-3xl mb-2 font-semibold leading-normal">
                  The Future Of Food
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-primary-100">
                  Technology that meets future needs.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-primary-100">
                  Sustainable & high yield foodtech products & water sources.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-primary-100">
                  Future of eCommerce powered by virtual & augmented reality.
                </p>
              </div>

              <div className="w-full md:w-6/12 lg:5/12 p-8 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-primary-800">
                  <Image
                  loader={loader}
                    alt="Food Loves Tech"
                    className="w-full align-middle rounded-t-lg"
                    src="foodlovestech.png"
                    width={400}
                    height={400}
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
                <div className="relative flex flex-col min-w-0 break-words bg-primary-800 w-full mb-6 shadow-lg rounded-lg">
                  <Image
                  loader={loader}
                    alt="BioTech"
                    src="biotech.png"
                    width={400}
                    height={400}
                    className="w-full align-middle rounded-t-lg"
                  />
                   <blockquote className="relative p-8 mb-4">
                    <h4 className="text-xl font-bold text-primary-50">
                     BioTechnology
                    </h4>
                    <p className="text-md font-light mt-2 text-primary-50">
                      Biology & Technology integration to address farming challenges.
                    </p>
                  </blockquote>
                </div>
              </div>

              <div className="w-full md:w-6/12 lg:7/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <h3 className="text-primary-50 text-3xl font-semibold">
                    Bio Technology Evolution
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-primary-50">
                    Synthetic & biotech inventions & startups.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-primary-100 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-md bg-emerald-400">
                            <FontAwesomeIcon icon={faHeartPulse} size="lg" className="text-primary-50" beat/>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-primary-100 ml-2 mb-4">
                            Affordable & alternate healthcare solutions
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-primary-100 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-md bg-emerald-400">
                            <FontAwesomeIcon icon={faParachuteBox} size="lg" className="text-primary-50" beat/>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-primary-100 ml-2 mb-4">
                            Food supply chain security
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-primary-100 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-md bg-emerald-400">
                          <FontAwesomeIcon icon={faRecycle} size="lg" className="text-primary-50" beat/>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-primary-100 ml-2 mb-4">
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
}

export default BioTech;