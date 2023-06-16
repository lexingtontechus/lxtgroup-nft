"use client";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMedal,
  faCommentsDollar,
  faMagnifyingGlassDollar,
  faWarehouse,
  faTruckArrowRight,
  faBusinessTime,
} from "@fortawesome/free-solid-svg-icons";

const loader = ({ src, width, quality }) => {
  return `https://storageapi.fleek.co/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lxtgroup-images/${src}?w=${width}&q=${
    quality || 75
  }`;
};

export default function StartUp() {
  return (
    <main>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url('https://storageapi.fleek.co/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lxtgroup-images/hyperlocal.png')",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-accent">
              HYPERLOCAL MICROSERVICES
            </h1>
            <p className="mb-5">Accelerated Startup Business Investment</p>
          </div>
        </div>
      </div>

      <section className="pb-20 -mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-accent w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-primary p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-md bg-indigo-400">
                    <FontAwesomeIcon
                      icon={faMagnifyingGlassDollar}
                      size="lg"
                      className="text-primary"
                      beat
                    />
                  </div>
                  <h6 className="text-xl font-semibold text-primary">
                    Our Mission
                  </h6>
                  <p className="mt-2 mb-4 text-primary">
                    Launching hyperlocal startups.
                  </p>
                  <p className="mt-2 mb-4 text-primary">Food Delivery</p>
                  <p className="mt-2 mb-4 text-primary">Logistics Service</p>
                  <p className="mt-2 mb-4 text-primary">
                    Transportation Service
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-accent w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-primary p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-md bg-sky-400">
                    <FontAwesomeIcon
                      icon={faCommentsDollar}
                      size="lg"
                      className="text-primary"
                      beat
                    />
                  </div>
                  <h6 className="text-xl font-semibold text-primary">
                    Our Investments
                  </h6>
                  <p className="mt-2 mb-4 text-primary">
                    Investing in hyperlocal business startups.
                  </p>
                  <p className="mt-2 mb-4 text-primary">
                    Sustainable offline to online hyperlocal business startups.
                  </p>
                  <p className="mt-2 mb-4 text-primary">
                    Future of local eCommerce powered by microservices
                    techologies & marketplace platforms.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-accent w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-primary p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-md bg-emerald-400">
                    <FontAwesomeIcon
                      icon={faMedal}
                      size="lg"
                      className="text-primary"
                      beat
                    />
                  </div>
                  <h6 className="text-xl font-semibold text-primary">
                    Our Growth
                  </h6>
                  <p className="mt-2 mb-4 text-primary">
                    Automation, upskilling & training.
                  </p>
                  <p className="mt-2 mb-4 text-primary">
                    Sustainable SMB in personalized services.
                  </p>
                  <p className="mt-2 mb-4 text-primary">
                    Future of eCommerce powered by virtual & augmented reality.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/*Delivery Food*/}
          <div className="flex flex-wrap items-center mx-4 p-8 rounded-lg bg-accent">
            <div className="w-full md:w-6/12 lg:7/12 px-4 mr-auto ml-auto">
              <h3 className="text-3xl mb-2 font-semibold leading-normal text-primary">
                The Future Of Local Business
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-primary-content">
                Supporting Transportation Service Companies & Transportation
                Service Networks.
              </p>
              <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-primary-content">
                Launch a hyperlocal transportation service that caters to your
                niche market, e.g.
              </p>
              <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-primary-content">
                Local business routes Welfare causes Afterschool pickup Senior
                citizens
              </p>
            </div>

            <div className="w-full md:w-6/12 lg:5/12  px-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words bg-base-100 w-full mb-6 shadow-lg rounded-lg">
                <Image
                  loader={loader}
                  src="delivery_food.png"
                  alt="Food Delivery Technology"
                  width={200}
                  height={200}
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <h4 className="text-xl font-bold text-primary">
                    Food Delivery / Cloud Kitchens
                  </h4>
                  <p className="text-md font-light mt-2 text-secondary">
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
        <div className="container mx-auto p-8">
          <div className="items-center flex flex-wrap bg-accent mx-8 py-8 rounded-lg">
            <div className="w-full md:w-6/12 lg:5/12 px-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-base-100">
                <Image
                  loader={loader}
                  src="delivery_medical.png"
                  alt="Medical Delivery Technology"
                  width={400}
                  height={400}
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <h4 className="text-xl font-bold text-primary">
                    Parcel & Logistics
                  </h4>
                  <p className="text-md font-light mt-2 text-secondary">
                    Your customers conduct orders, make payments, track and
                    electronically confirm deliveries.
                  </p>
                  <p className="text-md font-light mt-2 text-secondary">
                    Your delivery fleet can accept, manage and carry out
                    delivery orders.
                  </p>
                </blockquote>
              </div>
            </div>
            {/*Delivery Medical*/}
            <div className="w-full md:w-6/12 lg:7/12 ml-auto mr-auto px-4">
              <div className="md:pr-12">
                <h3 className="text-3xl font-semibold text-primary">
                  Transportation Services
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-primary">
                  Launching hyperlocal startups.
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div className="text-primary p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-md bg-indigo-400">
                        <FontAwesomeIcon
                          icon={faWarehouse}
                          size="lg"
                          className="text-primary"
                          beat
                        />{" "}
                      </div>
                      <div>
                        <h4 className="text-primary-content ml-2 mb-4">
                          Provide business infrastructure to launch.
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div className="text-primary-content p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-md bg-emerald-400">
                        <FontAwesomeIcon
                          icon={faTruckArrowRight}
                          size="lg"
                          className="text-primary"
                          beat
                        />
                      </div>
                      <div>
                        <h4 className="text-primary-content ml-2 mb-4">
                          Launch a hyperlocal service in your city.
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div className="text-primary p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-md bg-blue-400">
                        <FontAwesomeIcon
                          icon={faBusinessTime}
                          size="lg"
                          className="text-primary"
                          beat
                        />
                      </div>
                      <div>
                        <h4 className="text-primary-content ml-2 mb-4">
                          Dynamic realtime management of your fleet & eCommerce
                          operations.
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
