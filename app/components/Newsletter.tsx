import Image from "next/image";

export default function Newsletter() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image src="/billeder/PresleyDerGriner.JPG" alt="Newsletter background" fill className="object-cover" />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4">
        <h2 className="text-5xl md:text-7xl font-normal mb-8 tracking-wide">Newsletter</h2>

        <p className="mb-6 text-lg md:text-xl max-w-xl">Stay updated with upcoming events, training sessions and community activities.</p>

        {/* Form */}
        <form className="flex flex-col sm:flex-row gap-4 w-full max-w-xl">
          <input type="email" placeholder="Enter your email" className="flex-1 px-6 py-4 rounded-full bg-white text-black outline-none" />

          <button type="submit" className="bg-[#F4F2E8] text-black px-8 py-4 rounded-full hover:scale-105 transition duration-300">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
