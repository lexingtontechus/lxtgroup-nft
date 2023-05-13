"use client";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMedal,faCommentsDollar, faMagnifyingGlassDollar, faWarehouse, faTruckArrowRight, faBusinessTime} from "@fortawesome/free-solid-svg-icons";

const loader = ({ src, width, quality }) => {
  return `https://storageapi.fleek.co/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lxtgroup-images/${src}?w=${width}&q=${
    quality || 75
  }`;
};

export default function Startups({props}) {
  return (
    <>
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://storageapi.fleek.co/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lxtgroup-images/hyperlocal.png')"
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
                    HYPERLOCAL MICROSERVICES
                  </h1>
                  <div className="pt-2 w-full h-4/12">
                    <p className="mt-2 mb-4 text-primary-100 text-center font-semibold">
                      Accelerated Startup Business Investment
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
                      <FontAwesomeIcon icon={faMagnifyingGlassDollar} size="lg" className="text-primary-50" beat/>
                    </div>
                    <h6 className="text-xl font-semibold text-primary-50">Our Mission</h6>
                    <p className="mt-2 mb-4 text-primary-100">
                      Launching hyperlocal startups.
                    </p>
                             <p className="mt-2 mb-4 text-primary-100">
                              Food Delivery
                            </p>
                            <p className="mt-2 mb-4 text-primary-100">
                              Logistics Service
                            </p>
                            <p className="mt-2 mb-4 text-primary-100">
                              Transportation Service
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
                    <p className="mt-2 mb-4 text-primary-100">
                      Investing in hyperlocal business startups.
                    </p>
                    <p className="mt-2 mb-4 text-primary-100">
                      Sustainable offline to online hyperlocal business
                      startups.
                    </p>
                    <p className="mt-2 mb-4 text-primary-100">
                      Future of local eCommerce powered by microservices
                      techologies & marketplace platforms.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-primary-400 w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                <div className="text-primary-50 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-md bg-emerald-500">
                            <FontAwesomeIcon icon={faMedal} size="lg" className="text-primary-50" beat/>
                    </div>
                    <h6 className="text-xl font-semibold text-primary-50">Our Growth</h6>
                    <p className="mt-2 mb-4 text-primary-100">
                      Automation, upskilling & training.
                    </p>
                    <p className="mt-2 mb-4 text-primary-100">
                      Sustainable SMB in personalized services.
                    </p>
                    <p className="mt-2 mb-4 text-primary-100">
                      Future of eCommerce powered by virtual & augmented
                      reality.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*Delivery Food*/}
            <div className="flex flex-wrap items-center mx-4 p-8 bg-primary-400 rounded-lg">
              <div className="w-full md:w-6/12 lg:7/12 px-4 mr-auto ml-auto">
                <h3 className="text-3xl mb-2 font-semibold leading-normal text-primary-50">
                  The Future Of Local Business
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-primary-100">
                  Supporting Transportation Service Companies & Transportation
                  Service Networks.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-primary-100">
                  Launch a hyperlocal transportation service that caters to your
                  niche market, e.g.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-primary-100">
                  Local business routes Welfare causes Afterschool pickup Senior
                  citizens
                </p>
              </div>

              <div className="w-full md:w-6/12 lg:5/12  px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-primary-100 w-full mb-6 shadow-lg rounded-lg bg-primary-700">
                  <Image
                    loader={loader}
                    src="delivery_food.png"
                    alt="Food Delivery Technology"
                    width={200}
                    height={200}
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <h4 className="text-xl font-bold text-primary-50">
                      Food Delivery / Cloud Kitchens
                    </h4>
                    <p className="text-md font-light mt-2 text-primary-50">
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
          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-6/12 lg:5/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-primary-800">
                 <Image
                    loader={loader}
                    src="delivery_medical.png"
                            alt="Medical Delivery Technology"
                    width={400}
                    height={400}
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <h4 className="text-xl font-bold text-primary-50">
                      Parcel & Logistics
                    </h4>
                    <p className="text-md font-light mt-2 text-primary-50">
                      Your customers conduct orders, make payments, track and
                      electronically confirm deliveries.
                    </p>
                    <p className="text-md font-light mt-2 text-primary-50">
                      Your delivery fleet can accept, manage and carry out
                      delivery orders.
                    </p>
                  </blockquote>
                </div>
              </div>
              {/*Delivery Medical*/}
              <div className="w-full md:w-6/12 lg:7/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <h3 className="text-3xl font-semibold text-primary-50">
                    Transportation Services
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-primary-100">
                    Launching hyperlocal startups.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div className="text-primary-50 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-md bg-red-500">
                      <FontAwesomeIcon icon={faWarehouse} size="lg" className="text-primary-50" beat/>  </div>
                        <div>
                          <h4 className="text-primary-100 ml-2 mb-4">
                            Provide business infrastructure to launch.
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                          <div className="text-primary-50 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-md bg-red-500">
                      <FontAwesomeIcon icon={faTruckArrowRight} size="lg" className="text-primary-50" beat/>
                        </div>
                        <div>
                         <h4 className="text-primary-100 ml-2 mb-4">
                            Launch a hyperlocal service in your city.
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                         <div className="text-primary-50 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-md bg-red-500">
                      <FontAwesomeIcon icon={faBusinessTime} size="lg" className="text-primary-50" beat/>
                        </div>
                        <div>
                          <h4 className="text-primary-100 ml-2 mb-4">
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
    </>
  );
}
