"use client";
import React from "react";
import ContactForm from "./contactform.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandHoldingDollar,
  faHandHoldingDroplet,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <main>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-accent">
              Diverse. Resilient. Sustainable.
            </h1>
            <p className="mb-5">Your story starts with us.</p>
          </div>
        </div>
      </div>

      <section className="pb-8 relative block">
        <div className="container mx-auto px-4 mt-8">
          <div className="flex flex-wrap text-center justify-center">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold text-primary">
                What Can't Tech Do?
              </h2>
              <p className="text-lg leading-relaxed mt-4 mb-4 text-primary">
                Technology alone cannot solve the sustainability & climate
                change crises.
              </p>
              <h3 className="text-2xl font-semibold text-primary">
                Invest In Something Meaningful.
              </h3>
            </div>
          </div>
          <div className="flex flex-wrap mt-12 justify-center">
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="p-3 w-12 h-12 shadow-lg rounded-md bg-emerald-400 inline-flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faHandHoldingDollar}
                  size="lg"
                  className="text-primary"
                  beat
                />
              </div>
              <h6 className="text-xl mt-5 font-semibold text-primary">
                Portfolio Management
              </h6>
              <p className="mt-2 mb-4 text-primary">Quant hedge fund</p>
            </div>
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="p-3 w-12 h-12 shadow-lg rounded-md bg-blue-400 inline-flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faHandHoldingDroplet}
                  size="lg"
                  className="text-primary"
                  beat
                />
              </div>
              <h5 className="text-xl mt-5 font-semibold text-primary">
                Grow your market
              </h5>
              <p className="mt-2 mb-4 text-primary">
                Rapid hyper-local service expansion
              </p>
            </div>
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="p-3 w-12 h-12 shadow-lg rounded-md bg-red-400 inline-flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faRocket}
                  size="lg"
                  className="text-primary"
                  beat
                />
              </div>
              <h5 className="text-xl mt-5 font-semibold text-primary">
                Launch time
              </h5>
              <p className="mt-2 mb-4 text-primary">Accelerated scaling</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative block mt-8 bg-netutral">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center">
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-neutral">
                <div className="flex-auto p-5 lg:p-10">
                  <h4 className="text-2xl font-semibold text-primary">
                    Want to work with us?
                  </h4>
                  <p className="leading-relaxed mt-1 mb-4 text-primary">
                    Complete this form and we will get back to you in 24 hours.
                  </p>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
