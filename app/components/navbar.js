"use client";

import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCircleXmark,
  faAt,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";

const logoImage = ({ src, width, quality }) => {
  return `https://storageapi.fleek.co/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lxtgroup-images/${src}?w=${width}&q=${
    quality || 75
  }`;
};

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="flex flex-1 items-start justify-start cursor-pointer">
        <Link href="/" className="inline-flex h-content w-auto stroke-2">
          <Image
            loader={logoImage}
            alt="LXT GROUP LLC"
            height="40"
            width="40"
            className="max-w-full rounded-lg inline-block"
            src="logo_lxtgroup_circle.svg"
          />
        </Link>
        <Link
          href="/"
          id="Home"
          alt="Home"
          className=" hover:text-secondary-focus text-base font-bold leading-relaxed inline-block ml-2 mt-1 whitespace-nowrap uppercase"
        >
          LXT GROUP LLC
        </Link>
      </div>
      <div className="navbar-end flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn rounded-lg">
            <div className="w-10">
              <FontAwesomeIcon
                icon={faBars}
                className="text-stone-100 hover:text-secondary-focus"
                size="lg"
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-300 rounded-box w-52"
          >
            <li>
              <Link
                href="/biotech"
                className="hover:text-stone-100 px-4 py-2 text-sm"
              >
                BioTech
              </Link>
            </li>
            <li>
              <Link
                href="/etf"
                className="hover:text-stone-100 px-4 py-2 text-sm"
              >
                ETF
              </Link>
            </li>
            <li>
              <Link
                href="/startups"
                className="hover:text-secondary-focus block px-4 py-2 text-sm"
              >
                Start Ups
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-secondary-focus block px-4 py-2 text-sm"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-secondary-focus block px-4 py-2 text-sm"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
