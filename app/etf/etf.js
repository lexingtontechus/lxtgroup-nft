"use client";
import Image from "next/image";

const loader = ({ src, width, quality }) => {
  return `https://storage.fleek-internal.com/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lxtgroup-images/${src}?w=${width}&q=${
    quality || 75
  }`;
};

export default function ETF() {
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
              <h2 className="card-title text">Our Mission</h2>
              <p>
                Build AI & Machine Learning driven algorithms for ETF platforms.
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
              <h2 className="card-title">Our Investments</h2>
              <p>
                Investing in digital assets management, currency ETF & Forex.
              </p>
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
              <h2 className="card-title">Our Growth</h2>
              <p>Quant-driven Forex & Crypto investment platform.</p>
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
        <div className="flex flex-wrap items-center rounded-lg bg-accent">
          <div className="lg:7/12 ml-auto mr-auto w-full px-4 md:w-6/12">
            <h3 className="mb-2 text-3xl font-semibold leading-normal text-primary">
              Crypto ETF
            </h3>
            <p className="mb-4 mt-4 text-lg font-light leading-relaxed text-primary-content">
              Algorithmic tracking of crypto indices & transactions.
            </p>
            <p className="mb-4 mt-0 text-lg font-light leading-relaxed text-primary-content">
              Direct & indirect exposure to digital assets.
            </p>
            <p className="mb-4 mt-0 text-lg font-light leading-relaxed text-primary-content">
              Includes crypto miners, companies engaged in blockchain, crypto
              transactions, purveyors of blockchain technology, including
              hardware and software, and more.
            </p>
          </div>

          <div className="lg:5/12 ml-auto mr-auto w-full p-8 md:w-6/12 bg-accent">
            <div className="grow card card-compact w-full bg-neutral text-primary-content break-words shadow-lg">
              <figure>
                <img
                  src="https://storage.fleek-internal.com/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lxtgroup-images/crypto_etf2.png"
                  alt="Crypto ETF"
                />
              </figure>
              <div className="card-body p-4">
                <h2 className="card-title">Crypto Fund</h2>
                <p>SEC Approved Management Fund.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8 container mx-auto px-8">
        <div className="flex flex-wrap items-center rounded-lg bg-accent">
          <div className="lg:5/12 ml-auto mr-auto w-full p-8 md:w-6/12 bg-accent">
            <div className="grow card card-compact w-full bg-neutral text-primary-content break-words shadow-lg">
              <figure>
                <img
                  src="https://storage.fleek-internal.com/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lxtgroup-images/crypto_etf1.png"
                  alt="Forex ETF"
                />
              </figure>
              <div className="card-body p-4">
                <h2 className="card-title">Forex & Currency ETF</h2>
                <p>
                  Live trading built on our proprietary smart trading
                  algorithms.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:7/12 ml-auto mr-auto w-full px-4 md:w-6/12">
            <h3 className="text-3xl font-semibold text-primary mb-2">ETF</h3>
            <p className="mb-4 mt-0 text-lg font-light leading-relaxed text-primary-content">
              Funds are comprised of currency futures contracts.
            </p>
            <p className="mb-4 mt-0 text-lg font-light leading-relaxed text-primary-content">
              Algorithm driven smart trading of Forex & Currency ETF contracts.
            </p>
            <p className="mb-4 mt-0 text-lg font-light leading-relaxed text-primary-content">
              Optimized leverage & liquidity.
            </p>
            <p className="mb-4 mt-0 text-lg font-light leading-relaxed text-primary-content">
              Curated currency baskets & dynamic pairing selections.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
