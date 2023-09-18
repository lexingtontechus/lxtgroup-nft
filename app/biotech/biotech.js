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
              <h2 className="card-title text-accent">Our Mission</h2>
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
              <h2 className="card-title  text-accent">Our Investments</h2>
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
              <h2 className="card-title  text-accent">Our Growth</h2>
              <p>Accelerating innovation and action for sustainable growth.</p>
              <p>Embracing technology powering food systems transformation.</p>
              <p>Embracing technology, leveraging AI and Machine Learning.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-8">
        <div className="flex flex-wrap items-center rounded-sm bg-neutral">
          <div className="md:w-6/12 ml-auto mr-auto w-full p-4 bg-neutral">
            <div className="grow card card-normal w-full bg-neutral break-words shadow-lg">
              <figure className="image-full max-h-80">
                <img
                  src="https://storage.fleek-internal.com/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lxtgroup-images/food_evolution.png"
                  alt="BioTech"
                />
              </figure>
              <div className="card-body p-4 text-primary-content">
                <h2 className="card-title text-accent">BioTechnology</h2>
                <ul className="list list-outside list-disc">
                  <li className="my-2 font-light leading-relaxed">
                    Synthetic & biotech inventions address farming challenges.
                  </li>
                  <li className="my-2 font-light leading-relaxed">
                    Affordable & alternate healthcare solutions
                  </li>
                  <li className="my-2 font-light leading-relaxed">
                    Food & water supply chain security
                  </li>
                  <li className="my-2 font-light leading-relaxed">
                    Repurposing waste into sustainable products
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="md:w-6/12 ml-auto mr-auto w-full p-4 bg-neutral">
            <div className="grow card card-normal w-full bg-neutral break-words shadow-lg">
              <figure className="image-full max-h-80">
                <img
                  src="https://storage.fleek-internal.com/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lxtgroup-images/foodlovestech.png"
                  alt="Food Loves Tech"
                />
              </figure>
              <div className="card-body p-4 text-primary-content">
                <h2 className="card-title text-accent">
                  Bio-Diverse Food Systems
                </h2>
                <ul className="list list-outside list-disc">
                  <li className="my-2 font-light leading-relaxed">
                    Cellular agriculture & plant-based movement
                  </li>
                  <li className="my-2 font-light leading-relaxed">
                    Technology that meets future needs.
                  </li>
                  <li className="my-2 font-light leading-relaxed">
                    High yield foodtech products & water sources.
                  </li>
                  <li className="my-2 font-light leading-relaxed">
                    eCommerce powered by virtual & augmented reality.
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
