"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [collabSent, setCollabSent] = useState(false);

  return (
    <main className="min-h-screen bg-[#F4F2E8]">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[420px] w-full">
        <Image src="/billeder/contact.JPG" alt="Outdoor Office contact" fill priority className="object-cover object-center" />

        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute inset-x-0 bottom-20 flex flex-col items-center text-center text-white">
          <h1 className="mb-4 text-4xl font-medium uppercase tracking-wide">Contact</h1>

          <p className="max-w-lg px-6 text-sm leading-7 text-white">Whether you have a question, an idea or want to collaborate.</p>
        </div>
      </section>

      {/* contact */}
      <section className="px-6 py-20 md:px-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-center text-2xl font-medium uppercase">Any questions?</h2>

          <p className="mx-auto mb-10 max-w-lg text-center leading-7 text-black/60">Send us a message and we will get back to you as soon as possible.</p>

          <form
            className="bg-[#FAF9F0] p-8 md:p-12"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <div className="mb-6 grid gap-6 md:grid-cols-2">
              <input type="text" placeholder="Name" required className="w-full bg-white px-5 py-4 text-sm outline-none" />

              <input type="email" placeholder="Mail" required className="w-full bg-white px-5 py-4 text-sm outline-none" />
            </div>

            <textarea placeholder="Tell us more..." required className="mb-6 h-56 w-full resize-none bg-white px-5 py-4 text-sm outline-none" />

            {sent ? (
              <p className="text-center text-sm uppercase tracking-wide">Message sent ✓</p>
            ) : (
              <button type="submit" className="ml-auto block cursor-pointer border border-black px-8 py-3 text-sm uppercase transition-colors hover:bg-[#FEB53C] hover:text-black">
                Send
              </button>
            )}
          </form>
        </div>
      </section>

      {/* collabs */}
      <section className="px-6 pb-24 md:px-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-center text-2xl font-medium uppercase">Want to collaborate?</h2>

          <p className="mx-auto mb-10 max-w-lg text-center leading-7 text-black/60">We are always open to new ideas, partnerships and creative projects.</p>

          <form
            className="bg-[#FAF9F0] p-8 md:p-12"
            onSubmit={(e) => {
              e.preventDefault();
              setCollabSent(true);
            }}
          >
            <div className="mb-6 grid gap-6 md:grid-cols-2">
              <input type="text" placeholder="Company / Brand" required className="w-full bg-white px-5 py-4 text-sm outline-none" />

              <input type="email" placeholder="Mail" required className="w-full bg-white px-5 py-4 text-sm outline-none" />
            </div>

            <textarea placeholder="Tell us more..." required className="mb-6 h-56 w-full resize-none bg-white px-5 py-4 text-sm outline-none" />

            {collabSent ? (
              <p className="text-center text-sm uppercase tracking-wide">Request sent ✓</p>
            ) : (
              <button type="submit" className="ml-auto block cursor-pointer border border-black px-8 py-3 text-sm uppercase transition-colors hover:bg-[#FEB53C] hover:text-black">
                Send
              </button>
            )}
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
