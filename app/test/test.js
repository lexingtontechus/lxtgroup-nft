"use client"; // Error components must be Client Components

import { useEffect } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import Link from "next/link";
export default function Test({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="hero min-h-screen">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-accent uppercase">
            Generating AI
          </h1>
          <Player
            autoplay
            loop
            src="https://storage.fleek-internal.com/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lottie/loading.json"
            style={{ height: "400px", width: "400px" }}
            className="m-8"
          ></Player>
          <div className="join">
            <button className="btn-info btn mr-3 uppercase text-base-content">
              <Link href="/"> Home</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
