"use client";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCircleXmark, faAt, faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const logoImage = ({ src, width, quality }) => {
  return `https://storageapi.fleek.co/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lxtgroup-images/${src}?w=${width}&q=${
    quality || 75
  }`;
};

export default function Navbar() {
  return (
   <Disclosure as="nav">
        {({ open }) => (
          <nav className="top-0 fixed z-50 w-full bg-primary-900">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-4">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <Link
                      href="/"
                      className="inline-flex h-content w-auto stroke-2"
                    >
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
                        className="text-primary-100 hover:text-secondary-400 text-base font-bold leading-relaxed inline-block m-4 py-2 whitespace-nowrap uppercase"
                      >
                        LXT GROUP LLC
                      </Link>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative mx-3">
                    <div>
                      <Menu.Button className="flex rounded-full text-sm">
                        <span className="sr-only">Open user menu</span>
                        <FontAwesomeIcon
                          icon={faBars}
                          className="text-primary-50 hover:text-secondary-400"
                          size="lg"
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-primary-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">  
                            <Menu.Item>
                              <Link
                                href="/biotech"
                                className="hover:text-secondary-400 block px-4 py-2 text-sm text-primary-100"
                              >
                                BioTech
                              </Link>
                            </Menu.Item>
                            <Menu.Item>
                              <Link
                                href="/etf"
                                className="hover:text-secondary-400 block px-4 py-2 text-sm text-primary-100"
                              >
                                ETF
                              </Link>
                            </Menu.Item>
                            <Menu.Item>
                              <Link
                                href="/startups"
                                className="hover:text-secondary-400 block px-4 py-2 text-sm text-primary-100"
                              >
                                Start Ups
                              </Link>
                            </Menu.Item>
                            <Menu.Item>
                              <Link
                                href="/about"
                                className="hover:text-secondary-400 block px-4 py-2 text-sm text-primary-100"
                              >
                                About
                              </Link>
                            </Menu.Item>
                           <Menu.Item>
                              <Link
                                href="/contact"
                                className="hover:text-secondary-400 block px-4 py-2 text-sm text-primary-100"
                              >
                                Contact
                              </Link>
                          </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>

                </div>
              </div>
            </div>
          </nav>
        )}
      </Disclosure>
  );
}
