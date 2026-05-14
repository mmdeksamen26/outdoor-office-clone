"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#F4F2E8]">
      <nav className="relative mx-auto flex h-24 max-w-7xl items-center justify-between px-6 md:px-12">
        {/* Desktop navigation */}
        <div className="hidden md:flex gap-16 text-xs uppercase tracking-wide">
          <Link href="/" className="transition-colors hover:text-[#D99A2B]">
            Home
          </Link>

          <Link href="/#participate" className="border-b border-[#D99A2B] text-[#D99A2B]">
            Participate
          </Link>

          <Link href="/concept" className="transition-colors hover:text-[#D99A2B]">
            Concept
          </Link>
        </div>

        {/* Logo */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2">
          <Image src="/logo/navbarlogo.svg" alt="Outdoor Office logo" width={80} height={80} priority className="w-16 md:w-20" />
        </Link>

        {/* Desktop right navigation */}
        <div className="hidden md:flex gap-16 text-xs uppercase tracking-wide">
          <Link href="/#faq" className="transition-colors hover:text-[#D99A2B]">
            FAQ
          </Link>

          <Link href="/contact" className="transition-colors hover:text-[#D99A2B]">
            Contact
          </Link>
        </div>

        {/* Mobile button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="ml-auto flex flex-col gap-1 md:hidden">
          <span className="h-[2px] w-6 bg-black"></span>
          <span className="h-[2px] w-6 bg-black"></span>
          <span className="h-[2px] w-6 bg-black"></span>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="flex flex-col items-center gap-8 pb-10 text-xs uppercase tracking-wide md:hidden">
          <Link href="/" className="transition-colors hover:text-[#D99A2B]">
            Home
          </Link>

          <Link href="/#participate" className="border-b border-[#D99A2B] text-[#D99A2B] transition-colors hover:text-[#D99A2B]">
            Participate
          </Link>

          <Link href="/concept" className="transition-colors hover:text-[#D99A2B]">
            Concept
          </Link>

          <Link href="/#faq" className="transition-colors hover:text-[#D99A2B]">
            FAQ
          </Link>

          <Link href="/contact" className="transition-colors hover:text-[#D99A2B]">
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
