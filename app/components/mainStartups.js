"use client";
import Link from "next/link";

export default function MainStartups() {
  return (
    <main className="mb-8">
      <section id="main-startups" className="justify-between bg-neutral">
        <div className="card w-full bg-base-300 shadow-xl">
          <figure className="px-10 pt-10 h-48">
            <img
              src="https://storage.fleek-internal.com/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lxtgroup-images/startup_business.png"
              alt="Startups"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center ">
            <h2 className="card-title text-accent">HYPERLOCAL MICROSERVICES</h2>
            <p className="mt-1 text-secondary">
              Our primary goal is to establish a wealth strategy for our clients
              through the use of Artificial Intelligence-driven Quantitative
              trading,
            </p>
            <h4 className="text-xl font-medium text-primary">Food Delivery</h4>
            <p className="mt-1 text-secondary">
              Launch a food delivery or cloud kitchen app or marketplace
            </p>
            <h4 className="text-xl font-medium text-primary">
              Medical Delivery
            </h4>
            <p className="mt-1 text-secondary">
              Launch a pharmacy delivery app or marketplace
            </p>
            <h4 className="text-xl font-medium text-primary">
              Transportation Services
            </h4>
            <p className="mt-1 text-secondary">
              Launch a transportation delivery app or marketplace
            </p>
            <h4 className="text-xl font-medium text-primary">
              Parcel Logistics Services
            </h4>
            <p className="mt-1 text-secondary">
              Launch a parcel delivery or logistics app or marketplace
            </p>
            <div className="card-actions">
              <button className="btn btn-neutral uppercase rounded-md w-24">
                <Link href="/startups">More</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
