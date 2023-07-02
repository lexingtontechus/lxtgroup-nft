"use client";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mvolprar");

  if (state.succeeded) {
    return (
      <div className="block uppercase text-primary-content text-md font-bold mb-2">
        Thanks for reaching out, our team will get in touch with you soon!
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="relative w-full mb-8">
        <label
          htmlFor="full-name"
          className="block uppercase text-primary-content text-xs font-bold mb-2"
        >
          Full Name
        </label>
        <input
          className="mt-2 block w-full text-primary"
          type="text"
          name="name"
          id="full-name"
          placeholder="First and Last"
          required=""
        />

        <label
          htmlFor="email"
          className="block uppercase text-primary-content text-xs font-bold mt-2 mb-2"
        >
          Email address
        </label>
        <input
          className="mt-2 block w-full text-primary"
          id="email"
          type="email"
          name="email"
          placeholder="Your email address"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="border-0 px-3 py-3 placeholder-primary-300 text-primary-content bg-base-100 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
          placeholder="Email"
        />
        <fieldset id="fs-frm-selects">
          <label className="block uppercase text-primary-content text-xs font-bold mt-2 mb-2">
            Inquiry type
            <select
              className="block w-full mt-2 p-2 text-primary"
              name="inquiry"
              id="inquiry"
              required=""
            >
              <option value="Select an inquiry type" disabled="">
                Select an inquiry type
              </option>
              <option value="BioTech">BioTech</option>
              <option value="FoodTech">FoodTech</option>
              <option value="SmartFX">SmartFX</option>
              <option value="Hyperlocal Microservices">
                Hyperlocal Microservices{" "}
              </option>
              <option value="Startup Pitch">Startup Pitch</option>
              <option value="Investment Opportunity">
                Investment Opportunity
              </option>
            </select>
          </label>
        </fieldset>
        <label
          htmlFor="message"
          className="block uppercase text-primary-content text-xs font-bold mt-2 mb-2"
        >
          Your message
        </label>
        <textarea
          className="mt-2 mb-2 block w-full text-primary"
          rows="3"
          id="message"
          name="message"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <input
          type="hidden"
          name="_inquiry"
          id="email-subject"
          value="Website Inquiry"
        />
        <button
          type="submit"
          disabled={state.submitting}
          className="btn btn-primary active:bg-base-100 text-sm font-bold uppercase mt-2 px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
