"use client";
import Image from "next/image";
import React from "react";

const loader = ({ src, width, quality }) => {
  return `https://storageapi.fleek.co/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lxtgroup-images/${src}?w=${width}&q=${
    quality || 75
  }`;
};

export default function Showcases(props) {
  const { data } = props;
  return (
    <>
      <div className="w-full flex flex-wrap lg:gap-10 lg:flex-nowrap p-8">
        <div
          className={`flex items-center justify-center w-full lg:w-1/2 p-8 ${
            props.imgPos === "right" ? "lg:order-1" : ""
          }`}
        >
          <Image
            loader={loader}
            src={data.image}
            alt="Showcase"
            width={600}
            height={400}
          />
        </div>

        <div
          className={`flex flex-wrap items-center w-full lg:w-1/2 p-8 ${
            props.imgPos === "right" ? "lg:justify-end" : ""
          }`}
        >
          <div className="flex flex-col w-full mt-4">
            <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-primary lg:leading-tight lg:text-4xl">
              {data.title}
            </h3>

            <p className="max-w-2xl py-4 text-lg leading-normal text-secondary lg:text-xl xl:text-xl">
              {data.desc}
            </p>

            <div className="w-full mt-5">
              {data.bullets.map((item, index) => (
                <Showcase key={index} title={item.title} icon={item.icon}>
                  {item.desc}
                </Showcase>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Showcase(props) {
  return (
    <>
      <div className="flex items-start mt-8 space-x-3">
        <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-secondary rounded-md w-11 h-11">
          {React.cloneElement(props.icon, {
            className: "w-7 h-7 text-primary",
          })}
        </div>
        <div>
          <h4 className="text-xl font-medium text-primary">{props.title}</h4>
          <p className="mt-1 text-secondary">{props.children}</p>
        </div>
      </div>
    </>
  );
}
