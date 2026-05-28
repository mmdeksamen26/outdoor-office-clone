"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();

  const isHome = pathname === "/";

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 120);

      const sections = ["participate", "faq"];

      sections.forEach((id) => {
        const section = document.getElementById(id);

        if (section && window.scrollY >= section.offsetTop - 200 && window.scrollY < section.offsetTop + section.offsetHeight) {
          setActiveSection(id);
        }
      });

      if (window.scrollY < 400) {
        setActiveSection("home");
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const transparent = isHome && !scrolled;

  const navBackground = transparent ? "bg-transparent" : "bg-[#F4F2E8]";

  const textColor = transparent ? "text-white" : "text-black";

  const isActive = (href: string, section?: string) => {
    if (!isHome) {
      return pathname === href;
    }

    return activeSection === section;
  };

  const navClass = (href: string, section?: string) => (isActive(href, section) ? "border-b border-[#D99A2B] text-[#D99A2B]" : `${textColor} hover:text-[#D99A2B] transition-colors`);

  return (
    <header className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${navBackground}`}>
      <nav className="relative mx-auto flex h-28 max-w-7xl items-center justify-between px-6 md:px-12">
        {/* LEFT */}
        <div className="hidden md:flex gap-16 text-xs uppercase tracking-wide">
          <Link href="/" className={navClass("/", "home")}>
            Home
          </Link>

          <Link href="/#participate" className={navClass("/", "participate")}>
            Participate
          </Link>

          <Link href="/concept" className={navClass("/concept")}>
            Concept
          </Link>
        </div>

        {/* LOGO */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2">
          <Image
            src="/logo/navbarlogo.svg"
            alt="Outdoor Office logo"
            width={300}
            height={300}
            priority
            className={`
              transition-all duration-500
              ${transparent ? "w-72" : "w-56"}
            `}
          />
        </Link>

        {/* RIGHT */}
        <div className="hidden md:flex gap-16 text-xs uppercase tracking-wide">
          <Link href="/#faq" className={navClass("/", "faq")}>
            FAQ
          </Link>

          <Link href="/contact" className={navClass("/contact")}>
            Contact
          </Link>
        </div>

        {/* MOBILE */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="ml-auto flex flex-col gap-1 md:hidden">
          <span className={`h-[2px] w-6 ${transparent ? "bg-white" : "bg-black"}`} />
          <span className={`h-[2px] w-6 ${transparent ? "bg-white" : "bg-black"}`} />
          <span className={`h-[2px] w-6 ${transparent ? "bg-white" : "bg-black"}`} />
        </button>
      </nav>

      {menuOpen && (
        <div className="flex flex-col items-center gap-8 bg-[#F4F2E8] pb-10 text-xs uppercase tracking-wide md:hidden">
          <Link href="/" className={pathname === "/" ? "border-b border-[#D99A2B] text-[#D99A2B]" : "text-black transition-colors hover:text-[#D99A2B]"}>
            Home
          </Link>

          <Link href="/#participate" className={activeSection === "participate" ? "border-b border-[#D99A2B] text-[#D99A2B]" : "text-black transition-colors hover:text-[#D99A2B]"}>
            Participate
          </Link>

          <Link href="/concept" className={pathname === "/concept" ? "border-b border-[#D99A2B] text-[#D99A2B]" : "text-black transition-colors hover:text-[#D99A2B]"}>
            Concept
          </Link>

          <Link href="/#faq" className={activeSection === "faq" ? "border-b border-[#D99A2B] text-[#D99A2B]" : "text-black transition-colors hover:text-[#D99A2B]"}>
            FAQ
          </Link>

          <Link href="/contact" className={pathname === "/contact" ? "border-b border-[#D99A2B] text-[#D99A2B]" : "text-black transition-colors hover:text-[#D99A2B]"}>
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
