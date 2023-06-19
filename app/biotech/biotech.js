"use client";
import Image from "next/image";

const loader = ({ src, width, quality }) => {
  return `https://storage.fleek-internal.com/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lxtgroup-images/${src}?w=${width}&q=${
    quality || 75
  }`;
};
export default function BioTechPage() {
  return (
    <main className="mb-8">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url('https://storageapi.fleek.co/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lxtgroup-images/pharmatech.png')",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-accent">
              BIOTECH INVESTMENT
            </h1>
            <p className="mb-5">
              Synthetic biology & biofabrication offers increased
              sustainability, standardization and reproducibility.
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
              <h2 className="card-title"> Our Mission</h2>
              <p>
                Investing in the sustainable future of food & medical advances.
              </p>
              <p>Sustainable & high yield foodtech products & water sources.</p>
              <p>Future of eCommerce powered by virtual & augmented reality.</p>
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
              <p>Plant-based & cell-based innovations.</p>
              <p>Food systems & medical advances.</p>
              <p>High yield foodtech products & water sources.</p>
              <p>eCommerce powered by virtual & augmented reality.</p>
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
              <p>Accelerating innovation and action for sustainable growth.</p>
              <p>Embracing technology powering food systems transformation.</p>
              <p>Embracing technology, leveraging AI and Machine Learning.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-8">
        <div className="flex flex-wrap items-center rounded-lg bg-accent">
          <div className="lg:7/12 ml-auto mr-auto w-full px-4 md:w-6/12">
            <h3 className="mb-2 text-3xl font-semibold leading-normal text-primary">
              The Future Of Food
            </h3>
            <p className="mb-4 mt-4 text-lg font-light leading-relaxed text-primary-content">
              Technology that meets future needs.
            </p>
            <p className="mb-4 mt-0 text-lg font-light leading-relaxed text-primary-content">
              Sustainable & high yield foodtech products & water sources.
            </p>
            <p className="mb-4 mt-0 text-lg font-light leading-relaxed text-primary-content">
              Future of eCommerce powered by virtual & augmented reality.
            </p>
          </div>

          <div className="lg:5/12 ml-auto mr-auto w-full p-8 md:w-6/12 bg-accent">
            <div
              className="grow card card-compact w-full bg-neutral text-primary-content
 break-words shadow-lg"
            >
              <figure>
                <img
                  src="https://storage.fleek-internal.com/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lxtgroup-images/foodlovestech.png"
                  alt="Food Loves Tech"
                />
              </figure>
              <div className="card-body p-4">
                <h2 className="card-title">Biodiverse Food Systems</h2>
                <p> Cellular agriculture & plant-based movement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="my-8 px-8 container mx-auto">
        <div className="flex flex-wrap items-center rounded-lg bg-accent">
          <div className="lg:5/12 ml-auto mr-auto w-full p-8 md:w-6/12 bg-accent">
            <div
              className="grow card card-compact w-full bg-neutral text-primary-content
 break-words shadow-lg"
            >
              <figure>
                <img
                  src="https://storage.fleek-internal.com/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lxtgroup-images/biotech.png"
                  alt="BioTech"
                />
              </figure>
              <div className="card-body p-4">
                <h2 className="card-title">BioTechnology</h2>
                <p>
                  {" "}
                  Biology & Technology integration to address farming
                  challenges.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:7/12 ml-auto mr-auto w-full px-4 md:w-6/12">
            <h3 className="text-3xl font-semibold text-primary mb-2">
              Bio Evolution
            </h3>
            <p className="mb-4 mt-0 text-lg font-light leading-relaxed text-primary-content">
              Synthetic & biotech inventions & startups.
            </p>
            <p className="mb-4 mt-0 text-lg font-light leading-relaxed text-primary-content">
              Affordable & alternate healthcare solutions
            </p>
            <p className="mb-4 mt-0 text-lg font-light leading-relaxed text-primary-content">
              Food supply chain security
            </p>
            <p className="mb-4 mt-0 text-lg font-light leading-relaxed text-primary-content">
              Repurposing waste into sustainable products
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
