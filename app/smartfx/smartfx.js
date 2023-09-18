"use client";
import Image from "next/image";

const loader = ({ src, width, quality }) => {
  return `https://storage.fleek-internal.com/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lxtgroup-images/${src}?w=${width}&q=${
    quality || 75
  }`;
};

export default function SmartFX() {
  return (
    <main className="mb-8">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url('https://storageapi.fleek.co/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lxtgroup-images/forex_etf1.png')",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-accent">
              INVESTMENT MANAGEMENT
            </h1>
            <p className="mb-5">
              Management fund exclusively focused on investing in AI & ML driven
              strategies.
            </p>
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
              <p>
                Build AI & Machine Learning driven algorithms for SmartFX
                platforms.
              </p>
              <p>
                Sustainable investment portfolios across a wide range of
                technologies & industries.
              </p>
              <p>Web3 DeFi & payments solutions</p>
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
              <p>Investing in digital assets management & SmartFX.</p>
              <p>
                Investing in Education & Fintech Defi business opportunities.
              </p>
              <p>Investing in eCommerce ecosystems powered by fintech.</p>
            </div>
          </div>
          <div className="grow card card-compact w-full md:w-3/12 bg-primary text-primary-content">
            <figure>
              <img
                src="https://storage.fleek-internal.com/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lxtgroup-images/card_growth.jpg"
                alt="Our Growth"
              />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title text-accent">Our Growth</h2>
              <p>Quant-driven SmartFX SaaS platform.</p>
              <p>
                Realtime ML of market conditions producing exceptional returns.
              </p>
              <p>
                Superior investment returns through value-add income assets &
                properties aqcuisitions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-8">
        <div className="flex flex-wrap items-center rounded-sm bg-neutral">
          <div className="md:w-6/12 ml-auto mr-auto w-full p-4 bg-neutral">
            <div className="grow card card-compact w-full bg-neutral text-primary-content break-words shadow-lg">
              <figure className="image-full">
                <img
                  className="w-full h-96"
                  src="https://storage.fleek-internal.com/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lxtgroup-images/crypto_etf1.png"
                  alt="Whitelabel"
                />
              </figure>
              <div className="card-body p-4">
                <h2 className="card-title text-accent">
                  Customized Whitelabel Solutions
                </h2>
                <ul className="list list-inside list-disc">
                  <li className="my-2 font-light leading-relaxed">
                    Licensed Platform
                  </li>
                  <li className="my-2 font-light leading-relaxed">
                    Realtime assets tracking.
                  </li>
                  <li className="my-2 font-light leading-relaxed">
                    Realtime risk management.
                  </li>
                  <li className="my-2 font-light leading-relaxed">
                    Realtime position decisions.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="md:w-6/12 ml-auto mr-auto w-full p-4 bg-neutral">
            <div className="grow card card-compact w-full bg-neutral text-primary-content break-words shadow-lg">
              <figure className="image-full">
                <img
                  className="w-full h-96"
                  src="https://storage.fleek-internal.com/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lxtgroup-images/crypto_etf2.png"
                  alt="SmartFX"
                />
              </figure>
              <div className="card-body p-4">
                <h2 className="card-title text-accent">Forex SmartFX</h2>
                <ul className="list list-inside list-disc">
                  <li className="my-2 font-light leading-relaxed">
                    Live trading built on our proprietary smart trading
                    algorithms.
                  </li>
                  <li className="my-2 font-light leading-relaxed">
                    Funds are comprised of currency futures contracts.
                  </li>
                  <li className="my-2 font-light leading-relaxed">
                    Optimized leverage & liquidity.
                  </li>
                  <li className="my-2 font-light leading-relaxed">
                    Curated currency baskets & dynamic pairing selections.
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
