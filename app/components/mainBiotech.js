"use client";
import Link from "next/link";

export default function MainBioTech() {
  return (
    <main className="py-8">
      <section id="main-biotech" className="justify-between">
        <div className="card w-full shadow-xl">
          <figure className="px-10 pt-10 h-48">
            <img
              src="https://storage.fleek-internal.com/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lxtgroup-images/biotech.png"
              alt="BioTech"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-accent">BIO TECHNOLOGY</h2>
            <p className="my-2 text-secondary">
              Advances in food technology spans from replacement food sources to
              synthetic replacements of biopharma applications. We are investing
              in businesses that divest & diversify in,
            </p>
            <h4 className="text-xl font-medium text-primary">Food Security</h4>
            <p className="my-2 text-secondary">
              Alternative food sources that utilize new food technologies
            </p>
            <h4 className="text-xl font-medium text-primary">BioTech</h4>
            <p className="my-2 text-secondary">
              Synthetic pharma technologies to increase accessibility to low
              cost pharmaceuticals.
            </p>
            <h4 className="text-xl font-medium text-primary">BioSciences</h4>
            <p className="my-2 text-secondary">
              Biomanufacturing utilizing biological systems for the production
              of medical products and therapies, biomaterials, food & beverages,
              and specialty chemicals.
            </p>
            <div className="card-actions">
              <button className="btn btn-neutral uppercase rounded-md w-24">
                <Link href="/biotech">More</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
