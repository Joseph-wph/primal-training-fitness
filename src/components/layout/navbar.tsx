"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full border-b border-black bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-20 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex justify-center items-center gap-2">
          <Link href="/">
            <img
              src="/assets/logo/logoFitnes.svg"
              alt="Fitness Logo"
              className="w-10 lg:w-10"
            />
          </Link>
          <h1 className="font-heading font-bold text-xl">Primal Training</h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-12 text-primary font-medium">
            <li>
              <Link href="/" className="hover:text-primary text-black">
                HOME
              </Link>
            </li>

            <li>
              <Link href="/about" className="hover:text-primary text-black">
                ABOUT
              </Link>
            </li>

            <li>
              <Link
                href="/reserve"
                className="hover:text-white text-black bg-primary px-5 py-2 rounded-lg"
              >
                RESERVE YOUR SPOT
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden px-6 pb-6">
          <ul className="flex flex-col gap-5 font-medium">
            <li>
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="hover:text-primary text-black"
              >
                HOME
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="hover:text-primary text-black"
              >
                ABOUT
              </Link>
            </li>

            <li>
              <Link
                href="/reserve"
                onClick={() => setIsOpen(false)}
                className="hover:text-white text-black bg-primary px-5 py-2 rounded-lg"
              >
                RRESERVE YOUR SPOT
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
