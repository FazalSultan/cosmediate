"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { Hospital } from "lucide-react"

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#1344fe] h-16 px-4 md:px-10 flex items-center">
 
      <div className="text-[#eef2fb] font-bold text-2xl flex items-center gap-2">
        <Hospital className="text-white w-6 h-6" />
        <Link href="/" className="text-white">
          Cosmediate
        </Link>
      </div>

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
        <li>
          <Link
            href="/specialist"
            className={`font-medium ${
              pathname === "/specialist"
                ? "text-sky-400 font-semibold underline underline-offset-4"
                : "text-white"
            }`}
          >
            Specialist
          </Link>
        </li>
        <li>
          <Link
            href="/treatment"
            className={`font-medium ${
              pathname === "/treatment"
                ? "text-sky-400 font-semibold underline underline-offset-4"
                : "text-white"
            }`}
          >
            Treatment
          </Link>
        </li>
      </ul>
    </nav>
  );
}
