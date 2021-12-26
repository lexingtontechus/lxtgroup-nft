import React from "react";
import Link from "next/link";
import AnnounceKit from "announcekit-react";
//import Image from "next/image";
// components
//import IndexDropdown from "components/Dropdowns/IndexDropdown.js";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-blueGray-700 shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <img
              alt="LXT GROUP LLC"
              height="25"
              width="25"
              className="bg-blueGray-700 max-w-full rounded-lg shadow-xl inline-block"
              src="https://storageapi.fleek.co/a2d41cff-44ad-49e9-a80a-2d1aafc21231-bucket/lxtgroup-images/logo_lxtgroup.svg"
            />{" "}
            <Link href="/">
              <a
                className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                href="#lxt"
              >
                LXT GROUP LLC
              </a>
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="bg-white fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="flex items-center">
                <Link href="/biotech">
                  <a
                    href="#lxt"
                    className="hover:text-blueGray-300 text-blueGray-500 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold border-none border-transparent"
                  >
                    BioTech
                  </a>
                </Link>
              </li>
              <li className="flex items-center">
                <Link href="/etf">
                  <a
                    href="#lxt"
                    className="hover:text-blueGray-300 text-blueGray-500 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold border-none border-transparent"
                  >
                    ETF
                  </a>
                </Link>
              </li>
              <li className="flex items-center">
                <Link href="/startups">
                  <a
                    href="#lxt"
                    className="hover:text-blueGray-300 text-blueGray-500 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold border-none border-transparent"
                  >
                    Startups
                  </a>
                </Link>
              </li>
            </ul>

            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <span
                  className="px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  title="News"
                >
                  <AnnounceKit widget="https://announcekit.app/widgets/v2/3hkz9S">
                    <i className="hover:text-blueGray-300 text-blueGray-500 fas fa-rss text-lg leading-lg mr-2" />
                    <span className="lg:hidden inline-block">News</span>
                  </AnnounceKit>
                </span>
              </li>

              <li className="flex items-center">
                <Link href="/about">
                  <a
                    href="#lxt"
                    className="hover:text-blueGray-300 text-blueGray-500 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    title="About"
                  >
                    <i className="hover:text-blueGray-300 text-blueGray-500 fas fa-info-circle text-lg leading-lg " />
                    <span className="lg:hidden inline-block ml-2">About</span>
                  </a>
                </Link>
              </li>
              <li className="flex items-center">
                <Link href="/contact">
                  <a
                    href="#lxt"
                    className="hover:text-blueGray-300 text-blueGray-500 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    title="Contact"
                  >
                    <i className="hover:text-blueGray-300 text-blueGray-500 fas fa-at text-lg leading-lg " />
                    <span className="lg:hidden inline-block ml-2">Contact</span>
                  </a>
                </Link>
              </li>
              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-300 text-blueGray-500 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.linkedin.com/company/lxtgroup"
                  target="_blank"
                  rel="noreferrer"
                  title="LinkedIn"
                >
                  <i className="hover:text-blueGray-300 text-blueGray-500 fab fa-linkedin text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">LinkedIn</span>
                </a>
              </li>
              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-300 text-blueGray-500 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://angel.co/company/lxt-group/"
                  target="_blank"
                  rel="noreferrer"
                  title="Angel"
                >
                  <i className="hover:text-blueGray-300 text-blueGray-500 fab fa-angellist text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">AngelCo</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-300 text-blueGray-500 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://discord.gg/8nZndQn6m6"
                  target="_blank"
                  rel="noreferrer"
                  title="Discord"
                >
                  <i className="hover:text-blueGray-300 text-blueGray-500 fab fa-discord text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Discord</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
