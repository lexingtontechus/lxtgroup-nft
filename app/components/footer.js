"use client";
import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="btm-nav px-8 py-4 mb-2">
      <div className="container mx-auto px-4">
        <hr className="mb-6 border-b-1 border-primary-50" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full px-4">
            <div className="text-sm font-semibold py-2 text-center">
              <span className="px-4">
                Copyright © {new Date().getFullYear()}
              </span>
              <Link
                href="/terms"
                className="hover:text-secondar-focus text-sm font-semibold px-4 uppercase"
              >
                Terms
              </Link>
              <Link
                href="/privacy"
                className="hover:text-secondar-focus text-sm font-semibold px-4 uppercase"
              >
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
