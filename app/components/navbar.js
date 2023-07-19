"use client";

import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const logoImage = ({ src, width, quality }) => {
  return `https://storage.fleek-internal.com/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lxtgroup-images/${src}?w=${width}&q=${
    quality || 75
  }`;
};

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="flex flex-1 items-start justify-start cursor-pointer">
        <Link href="/" className="inline-flex h-content w-auto stroke-2">
          <Logo />
        </Link>
        <Link
          href="/"
          id="Home"
          alt="Home"
          className="pt-1 hover:text-secondary-focus text-base font-bold leading-relaxed inline-block ml-2 mt-1 whitespace-nowrap uppercase"
        >
          LXT GROUP LLC
        </Link>
      </div>
      <div className="navbar-end flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost backdrop:rounded-lg">
            <FontAwesomeIcon
              icon={faBars}
              className="text-stone-100 hover:text-secondary-focus"
              size="lg"
            />
          </label>
          <ul
            tabIndex={0}
            className="mt-1 p-2 shadow menu menu-sm dropdown-content bg-base-300 rounded-box w-52"
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
                href="/smartfx"
                className="hover:text-stone-100 px-4 py-2 text-sm"
              >
                SmartFX
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

function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 393.75 393.75"
      preserveAspectRatio="xMidYMid meet"
      className="h-12 w-12"
    >
      <defs id="SvgjsDefs2207" />
      <g
        featurekey="rootContainer"
        transform="matrix(7.875,0,0,7.875,0,0)"
        fill="#F6F6F6"
      >
        <circle cx="25" cy="25" r="25" fill="#F6F6F6" />
      </g>
      <g
        featurekey="UFHKJ9-0"
        transform="matrix(2.5564905797032815,0,0,2.5564905797032815,68.43511126938303,40.322269079362606)"
        fill="#6D9280"
      >
        <g
          xmlns="http://www.w3.org/2000/svg"
          transform="translate(0,-952.36218)"
          fill="#6D9280"
        >
          <path
            d="m 60.7828,964.36215 27.1809,0.8834 -27.1809,25.9958 z m -1.9745,1.4513 0,26.7845 -25.2681,0 c 8.6166,-8.7334 16.8796,-17.8103 25.2681,-26.7845 z m 27.7053,3.628 3.4864,1.1989 -12.5877,7.4768 z m -68.1835,2.9656 5.5226,0 12.8654,14.0705 -5.9854,6.1204 -12.4026,0 c 9e-4,-6.7347 0,-13.4597 0,-20.1909 z m -1.9746,1.2304 0,5.8364 -6.3555,0 z m 3.363,20.9796 38.627,0 -10.7675,29.43465 z m 39.0898,4.54286 0,41.20229 -12.5878,-6.8775 c 4.1972,-11.443 8.3886,-22.879 12.5878,-34.32479 z"
            fill="#6D9280"
            fillOpacity="1"
            stroke="none"
            marker="none"
            visibility="visible"
            display="inline"
            overflow="visible"
          />
        </g>
      </g>
      <g
        id="SvgjsG2210"
        featurekey="nameFeature-0"
        transform="matrix(2.2882358444145687,0,0,2.2882358444145687,98.71176415558543,276.3047033547783)"
        fill="#6D9192"
      >
        <path
          d="M1 20 l0 -16 l2 0 l0 14 l2.6 0 l0 2 l-4.6 0 z M6.2 20 l2 -8.04 l-1.8 -7.96 l2 0 l0.8 5.6 l0.2 0 l0.8 -5.6 l2 0 l-1.8 7.42 l2 8.58 l-2 0 l-1 -5.66 l-0.2 0 l-1 5.66 l-2 0 z M13 5.800000000000001 l0 -1.8 l6 0 l0 1.8 l-2 0 l0 14.2 l-2 0 l0 -14.2 l-2 0 z M24.400000000000002 11.58 c0 -5.58 0 -7.78 3 -7.78 c2.28 0 2.82 1.26 2.96 4.28 l-1.86 0 c-0.08 -2.18 -0.3 -2.68 -1.1 -2.68 c-1.12 0 -1.12 0.98 -1.12 6.18 c0 5.78 0 6.62 1.12 6.62 c1.06 0 1.12 -0.76 1.12 -5 l-1.32 0 l0 -1.6 l3.2 0 l0 0.78 c0 5.6 0 7.82 -3 7.82 s-3 -2.22 -3 -8.62 z M32 20 l0 -16 l3.24 0 c2.06 0 2.76 1.26 2.76 3.68 c0 2.18 -0.26 3.42 -0.88 4.02 l0 0.12 c0.52 0.18 0.68 1.12 0.88 3.46 l0.4 4.72 l-2 0 l-0.26 -4.72 c-0.14 -2.38 -0.5 -2.88 -1.1 -2.88 l-1.04 0 l0 7.6 l-2 0 z M34 10.8 l1.24 0 c0.7 0 0.9 -0.7 0.9 -3.12 c0 -1.58 -0.3 -2.08 -0.9 -2.08 l-1.24 0 l0 5.2 z M39.8 11.58 c0 -5.58 0.12 -7.78 3.12 -7.78 s3.12 2.2 3.12 7.78 c0 6.4 -0.12 8.62 -3.12 8.62 s-3.12 -2.22 -3.12 -8.62 z M41.8 11.58 c0 5.78 0 6.62 1.12 6.62 s1.12 -0.84 1.12 -6.62 c0 -5.2 0 -6.18 -1.12 -6.18 s-1.12 0.98 -1.12 6.18 z M47.74 11.58 l0 -7.58 l2 0 l0 7.58 c0 5.78 0 6.62 1 6.62 s1 -0.84 1 -6.62 l0 -7.58 l2 0 l0 7.58 c0 6.4 0 8.62 -3 8.62 s-3 -2.22 -3 -8.62 z M55.64 20 l0 -16 l3.24 0 c2.06 0 2.6 1.26 2.76 4.28 l0 0.64 c-0.16 3.02 -0.7 4.28 -2.76 4.28 l-1.24 0 l0 6.8 l-2 0 z M57.64 11.6 l1.24 0 c0.6 0 0.82 -0.5 0.9 -2.68 l0 -0.64 c-0.08 -2.18 -0.3 -2.68 -0.9 -2.68 l-1.24 0 l0 6 z M67.44 20 l0 -16 l2 0 l0 14 l2.6 0 l0 2 l-4.6 0 z M73.24 20 l0 -16 l2 0 l0 14 l2.6 0 l0 2 l-4.6 0 z M78.83999999999999 11.58 c0 -5.58 0 -7.78 2.8 -7.78 c2.06 0 2.62 1.26 2.76 4.28 l-1.86 0 c-0.08 -2.18 -0.3 -2.68 -0.9 -2.68 c-0.92 0 -0.92 0.98 -0.92 6.18 c0 5.78 0 6.62 0.92 6.62 c0.66 0 0.86 -0.5 0.9 -3.08 l1.88 0 c-0.12 3.7 -0.62 5.08 -2.78 5.08 c-2.8 0 -2.8 -2.22 -2.8 -8.62 z"
          fill="#6D9192"
        />
      </g>
    </svg>
  );
}
