"use client";
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
      <div className="hero min-h-screen svg-contact">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold text-accent uppercase">
              Invest In Something Meaningful.
            </h1>
            <p className="mb-5">
              {" "}
              Technology alone cannot solve the sustainability & climate change
              crises.
            </p>
          </div>
        </div>
      </div>

      <section className="relative block bg-neutral">
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
