"use client";
import Image from "next/image";

const loader = ({ src, width, quality }) => {
  return `https://storage.fleek-internal.com/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lxtgroup-images/${src}?w=${width}&q=${
    quality || 75
    //https://storage.fleek-internal.com/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lxtgroup-images/card_mission.jpg
  }`;
};

export default function StartUp() {
  return (
    <main className="mb-8">
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

      <section className="container mx-auto my-8 px-8">
        <div className="flex flex-wrap gap-4 content-center justify-center">
          <div className="grow card card-compact w-full md:w-3/12 bg-primary text-primary-content">
            <figure>
              <img
                src="https://storage.fleek-internal.com/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lxtgroup-images/card_mission.jpg"
                alt="Our Mission"
              />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title">Our Mission</h2>
              <p>Launching hyperlocal startups.</p>
              <p>Food Delivery</p>
              <p>Logistics Service</p>
              <p>Transportation Service</p>
            </div>
          </div>
          <div className="grow card card-compact w-full md:w-3/12 bg-primary text-primary-content">
            <figure>
              <img
                src="https://storage.fleek-internal.com/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lxtgroup-images/card_investment.jpg"
                alt="Our Mission"
              />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title">Our Investments</h2>
              <p>Investing in hyperlocal business startups.</p>
              <p>Sustainable offline to online hyperlocal business startups.</p>
              <p>
                Future of local eCommerce powered by microservices techologies &
                marketplace platforms.
              </p>
            </div>
          </div>
          <div className="grow card card-compact w-full md:w-3/12 bg-primary text-primary-content">
            <figure>
              <img
                src="https://storage.fleek-internal.com/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lxtgroup-images/card_growth.jpg"
                alt="Our Mission"
              />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title">Our Growth</h2>
              <p>Automation, upskilling & training.</p>
              <p>Sustainable SMB in personalized services.</p>
              <p>Future of eCommerce powered by virtual & augmented reality.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-8">
        <div className="flex flex-wrap items-center rounded-lg bg-accent">
          <div className="lg:7/12 ml-auto mr-auto w-full px-4 md:w-6/12">
            <h3 className="mb-2 text-3xl font-semibold leading-normal text-primary">
              The Future Of Local Business
            </h3>
            <p className="mb-4 mt-4 text-lg font-light leading-relaxed text-primary-content">
              Supporting Transportation Service Companies & Transportation
              Service Networks.
            </p>
            <p className="mb-4 mt-0 text-lg font-light leading-relaxed text-primary-content">
              Launch a hyperlocal transportation service that caters to your
              niche market, e.g.
            </p>
            <p className="mb-4 mt-0 text-lg font-light leading-relaxed text-primary-content">
              Local business routes Welfare causes Afterschool pickup Senior
              citizens
            </p>
          </div>

          <div className="card lg:5/12 ml-auto mr-auto w-full p-8 md:w-6/12">
            <div
              className="grow card card-compact w-full bg-neutral text-primary-content
            break-words shadow-lg"
            >
              <figure>
                <img
                  src="https://storage.fleek-internal.com/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lxtgroup-images/delivery_food.png"
                  alt="Food Delivery Technology"
                />
              </figure>
              <div className="card-body p-4">
                <h2 className="card-title"> Food Delivery / Cloud Kitchens</h2>
                <p>
                  Supporting restaurants, food networks & cloud kitchens
                  business models.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8 container mx-auto px-8">
        <div className="flex flex-wrap items-center rounded-lg bg-accent">
          <div className="lg:5/12 ml-auto mr-auto w-full p-8 md:w-6/12 bg-accent">
            <div
              className="grow card card-compact w-full bg-neutral text-primary-content
            break-words shadow-lg"
            >
              <figure>
                <img
                  src="https://storage.fleek-internal.com/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lxtgroup-images/delivery_medical.png"
                  alt="Medical Delivery Technology"
                />
              </figure>
              <div className="card-body p-4">
                <h2 className="card-title">Parcel & Logistics</h2>
                <p>
                  Your customers conduct orders, make payments, track and
                  electronically confirm deliveries. Your delivery fleet can
                  accept, manage and carry out delivery orders.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:7/12 ml-auto mr-auto w-full px-4 md:w-6/12">
            <h3 className="text-3xl font-semibold text-primary">
              {" "}
              Transportation Services
            </h3>
            <p className="text-md font-light mt-2 text-primary-content">
              Launching hyperlocal startups.
            </p>
            <p className="text-md font-light mt-2 text-primary-content">
              Provide business infrastructure to launch.
            </p>
            <p className="text-md font-light mt-2 text-primary-content">
              Launch a hyperlocal service in your city.
            </p>
            <p className="text-md font-light mt-2 text-primary-content">
              Dynamic realtime management of your fleet & eCommerce operations.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
