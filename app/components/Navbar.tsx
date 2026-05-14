import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full bg-[#F4F2E8]">
      <nav className="relative mx-auto flex h-28 max-w-7xl items-center justify-between px-12">
        <div className="flex gap-16 text-xs uppercase tracking-wide">
          <Link href="/">Home</Link>

          <Link href="/#participate" className="border-b border-[#D99A2B] text-[#D99A2B]">
            Participate
          </Link>

          <Link href="/concept">Concept</Link>
        </div>

        {/* Logo */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2">
          <Image src="/logo.png" alt="Outdoor Office logo" width={100} height={100} priority />
        </Link>

        <div className="flex gap-16 text-xs uppercase tracking-wide">
          <Link href="/#faq">FAQ</Link>

          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
