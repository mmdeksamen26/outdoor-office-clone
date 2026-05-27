"use client";

import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";

export default function Newsletter() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* baggrundsbillede */}
      <Image src="/billeder/PresleyDerGriner.JPG" alt="Newsletter background" fill className="object-cover" />

      {/* mørk overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* indhold */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4">
        <h2 className="text-5xl md:text-7xl font-normal mb-8 tracking-wide">Newsletter</h2>

        <p className="mb-6 text-lg md:text-xl max-w-xl">Stay updated with upcoming events, training sessions and community activities.</p>

        <Dialog.Root>
          <form className="flex flex-col sm:flex-row gap-4 w-full max-w-xl" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" required className="flex-1 px-6 py-4 rounded-full bg-white text-black outline-none" />

            <Dialog.Trigger asChild>
              <button
                type="submit"
                className="
                  w-fit self-center
                  bg-[#F4F2E8] text-black
                  px-8 py-4 rounded-full
                  border-2 border-black
                  transition-all duration-300
                  hover:bg-[#FEB53C] hover:border-[#FEB53C]
                "
              >
                Subscribe
              </button>
            </Dialog.Trigger>
          </form>

          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-40 bg-black/50" />

            <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[90%] max-w-4xl -translate-x-1/2 -translate-y-1/2 bg-[#F4F2E8] px-8 py-14 shadow-xl md:px-20">
              <Dialog.Close className="absolute right-6 top-5 text-2xl">×</Dialog.Close>

              <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
                <Image src="/logo/navbarlogo.svg" alt="Outdoor Office logo" width={300} height={300} className="mb-8 w-52 md:w-64" />

                <Dialog.Title className="mb-3 text-3xl font-medium">The good folks thank you for staying updated with us!</Dialog.Title>

                <p className="mt-6 max-w-md text-base leading-7 text-black/70">We have received your registration. You will get a confirmation by email with more details.</p>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </section>
  );
}
