"use client";
import React from "react";
import ContactForm from "./contactform.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHandHoldingDollar, faHandHoldingDroplet, faRocket} from "@fortawesome/free-solid-svg-icons"

const Contact = () => {
  return (
    <>
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover opacity-75"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')"
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
                <div className="">
                  <h1 className="text-primary-50 font-semibold text-4xl uppercase">
                    Diverse. Resilient. Sustainable.
                  </h1>
                  <p className="mt-4 text-lg font-semibold text-primary-100">
                    Your story starts with us.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="pb-20 relative block bg-primary-700">
          <div className="container mx-auto px-4 mt-8">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-primary-100">
                  What Can't Tech Do?
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-primary-200">
                  Technology alone cannot solve the sustainability & climate
                  change crises.
                </p>
                <h3 className="text-2xl font-semibold text-primary-200">
                  Invest In Something Meaningful
                </h3>
              </div>
            </div>
            <div className="flex flex-wrap mt-12 justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="p-3 w-12 h-12 shadow-lg rounded-md bg-secondary-400 inline-flex items-center justify-center">
                <FontAwesomeIcon icon={faHandHoldingDollar} size="lg" className="text-primary-50" beat/>
                </div>
                <h6 className="text-xl mt-5 font-semibold text-primary-100">
                  Portfolio Management
                </h6>
                <p className="mt-2 mb-4 text-primary-400">
                 Quant hedge fund
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="p-3 w-12 h-12 shadow-lg rounded-md bg-secondary-400 inline-flex items-center justify-center">
                <FontAwesomeIcon icon={faHandHoldingDroplet} size="lg" className="text-primary-50" beat/>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-primary-100">
                  Grow your market
                </h5>
                <p className="mt-2 mb-4 text-primary-400">
                  Rapid hyper-local service expansion
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
               <div className="p-3 w-12 h-12 shadow-lg rounded-md bg-secondary-400 inline-flex items-center justify-center">
                <FontAwesomeIcon icon={faRocket} size="lg" className="text-primary-50" beat/>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-primary-100">
                  Launch time
                </h5>
                <p className="mt-2 mb-4 text-primary-400">Accelerated scaling</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="relative block mt-8 py-24 lg:pt-24 bg-primary-400">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-primary-200">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold text-primary-900">
                      Want to work with us?
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-primary-500">
                      Complete this form and we will get back to you in 24
                      hours.
                    </p>
                    <ContactForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
export default Contact;