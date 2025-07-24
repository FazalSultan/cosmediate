"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#1344fe] h-16 px-4 md:px-10 flex items-center">
      {/* Logo */}
      <div className="text-[#eef2fb] font-bold text-2xl">
        <Link href="/">Cosmediate</Link>
      </div>

      {/* Hamburger Icon (mobile only) */}
      <div className="ml-auto md:hidden">
        <button
          className="text-white text-3xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {/* Navigation Links */}
      <ul
        className={`${
          isOpen ? "flex" : "hidden"
        } absolute top-16 left-0 w-full flex-col items-center bg-[#1344fe] py-4 gap-4 md:static md:flex md:flex-row md:ml-auto md:w-auto md:bg-transparent md:py-0 md:gap-8`}
      >
        <li className="text-white font-medium hover:underline">
          <Link href="/specialist">Specialist</Link>
        </li>
        <li className="text-white font-medium hover:underline">
          <Link href="/treatment">Treatment</Link>
        </li>
      </ul>
    </nav>
  );
}
