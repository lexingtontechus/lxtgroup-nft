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
              <h2 className="card-title text-accent">Our Mission</h2>
              <p>Launching hyperlocal startups.</p>
              <p>Food Delivery</p>
              <p>Logistics Service</p>
              <p>Transportation Service Launching hyperlocal startups.</p>
            </div>
          </div>

          <div className="grow card card-compact w-full md:w-3/12 bg-primary text-primary-content">
            <figure>
              <img
                src="https://storage.fleek-internal.com/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lxtgroup-images/card_investment.jpg"
                alt="Our Investments"
              />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title text-accent">Our Investments</h2>
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
              <h2 className="card-title text-accent">Our Growth</h2>
              <p>Automation, upskilling & training.</p>
              <p>Sustainable SMB in personalized services.</p>
              <p>Future of eCommerce powered by virtual & augmented reality.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-8">
        <div className="flex flex-wrap items-center rounded-lg bg-neutral">
          <div className="md:w-6/12 ml-auto mr-auto w-full p-4 bg-neutral">
            <div
              className="grow card card-compact w-full bg-neutral text-primary-content
            break-words shadow-lg"
            >
              <figure className="image-full">
                <img
                  className="w-full"
                  src="https://storage.fleek-internal.com/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lxtgroup-images/delivery-food1.jpg"
                  alt="Delivery Technology"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-accent">Parcel & Logistics</h2>
                <ul className="list list-inside list-disc">
                  <li className="my-2 font-light leading-relaxed">
                    Your customers conduct orders, make payments, track and
                    electronically confirm deliveries. Your delivery fleet can
                    accept, manage and carry out delivery orders.
                  </li>
                  <li className="my-2 font-light leading-relaxed">
                    Supporting business infrastructure on launch.
                  </li>
                  <li className="my-2 font-light leading-relaxed">
                    Dynamic realtime management of your fleet & eCommerce
                    operations.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="md:w-6/12 ml-auto mr-auto w-full p-4 bg-neutral">
            <div className="grow card card-compact w-full bg-neutral text-primary-content break-words shadow-lg">
              <figure className="image-full">
                <img
                  className="w-full"
                  src="https://storage.fleek-internal.com/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lxtgroup-images/delivery-food2.jpg"
                  alt="Food Delivery Technology"
                />
              </figure>
              <div className="card-body p-4">
                <h2 className="card-title text-accent">
                  Food Delivery / Cloud Kitchens
                </h2>
                <ul className="list list-inside list-disc">
                  <li className="my-2 font-light leading-relaxed">
                    Support restaurants, food networks & cloud kitchens business
                    models.
                  </li>
                  <li className="my-2 font-light leading-relaxed">
                    Support Transportation Service Companies & Transportation
                    Service Networks.
                  </li>
                  <li className="my-2 font-light leading-relaxed">
                    Launch a hyperlocal service that caters to your business
                    market,
                    <br />
                    <span className="text-xs">
                      e.g. Local business routes. Welfare causes. Afterschool
                      pickup. Senior citizens support.
                    </span>
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
