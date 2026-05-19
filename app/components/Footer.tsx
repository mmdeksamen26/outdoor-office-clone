import Image from "next/image";
import { FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white">
      <div className="flex flex-col justify-between gap-10 px-6 py-10 md:px-10 lg:flex-row">
        {/* ting til venstre */}
        <div className="flex flex-col justify-between">
          {/* Logo + Info */}
          <div>
            <Image src="/logo/footerlogo.svg" alt="Outdoor Office Footer Logo" width={70} height={70} className="mb-6 h-auto w-[55px]" priority />

            <div className="space-y-1 text-[16px] leading-[1.35] text-white/95">
              <p>C/O Ahmednuur Abdulle</p>
              <p>Vognmandsmarken 45, 3. mf</p>

              <div className="pt-4">
                <p>CVR-number: 45699978</p>
              </div>
            </div>
          </div>

          {/* links til deres sociale medier */}
          <div className="mt-8 flex items-center gap-4">
            <a href="https://www.youtube.com/watch?v=7378M6AjD0I&t=9s" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaYoutube className="text-[38px]" />
            </a>

            <a href="https://www.instagram.com/outdoor.office/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="text-[38px]" />
            </a>

            <a href="https://www.tiktok.com/@outdoor.office" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <FaTiktok className="text-[38px]" />
            </a>
          </div>
        </div>

        {/* slogan til højre */}
        <div className="flex items-end">
          <p className="text-[20px] font-light tracking-tight text-white">An active community</p>
        </div>
      </div>
    </footer>
  );
}
