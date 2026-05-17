"use client";

import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";

const activities = [
  {
    title: "Strength Training",
    level: "Beginner",
    date: "12/06",
    time: "10:00",
    location: "Nørrebro Park",
    description: "Outdoor strength workout focused on community and movement.",
    image: "/billeder/styrke.jpg",
  },
  {
    title: "Event",
    level: "",
    date: "18/06",
    time: "18:30",
    location: "Refshaleøen",
    description: "Social event with music, creative activities and networking.",
    image: "/billeder/adidassko.jpg",
  },
  {
    title: "Social Run",
    level: "Intermediate",
    date: "25/06",
    time: "17:00",
    location: "Søndermarken",
    description: "Group run focused on motivation, pace and community.",
    image: "/billeder/ahmednuurloeb.JPG",
  },
];

export default function Activities() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="participate" className="bg-[#F4F2E8] px-6 py-20 md:px-10">
      <h2 className="mb-14 text-center text-3xl font-medium uppercase tracking-wide md:text-4xl">Activities of the month</h2>

      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
        {activities.map((activity) => (
          <article key={activity.title} className="flex h-full flex-col overflow-hidden bg-[#FAF9F0]">
            <div className="relative h-[360px] w-full">
              <Image src={activity.image} alt={activity.title} fill className="object-cover" />
            </div>

            <div className="flex h-full min-h-[330px] flex-col p-8">
              <h3 className="mb-5 text-xl font-medium uppercase">{activity.title}</h3>

              <p className="mb-6 text-sm leading-6 text-black/70">{activity.description}</p>

              <div className="flex-1">
                <p className="text-base leading-7">
                  {activity.level && (
                    <>
                      Niveau: {activity.level}
                      <br />
                    </>
                  )}
                  Dato: {activity.date}
                  <br />
                  Tid: {activity.time}
                  <br />
                  Lokation: {activity.location}
                </p>
              </div>

              <Dialog.Root onOpenChange={() => setSubmitted(false)}>
                <Dialog.Trigger asChild>
                  <button className="mt-auto w-fit pt-8 text-xl font-medium uppercase underline underline-offset-4 transition-colors hover:text-[#D99A2B]">Sign up</button>
                </Dialog.Trigger>

                <Dialog.Portal>
                  <Dialog.Overlay className="fixed inset-0 z-40 bg-black/50" />

                  <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[90%] max-w-4xl -translate-x-1/2 -translate-y-1/2 bg-[#F4F2E8] px-8 py-14 shadow-xl md:px-20">
                    <Dialog.Close className="absolute right-6 top-5 text-2xl">×</Dialog.Close>

                    <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
                      <Image src="/logo/navbarlogo.svg" alt="Outdoor Office logo" width={300} height={300} className="mb-8 w-52 md:w-64" />

                      <Dialog.Title className="mb-3 text-3xl font-medium">{submitted ? "You’re signed up" : "We can’t wait to meet you"}</Dialog.Title>

                      <p className="mb-10 text-sm uppercase tracking-wide text-black/60">
                        {activity.title} · {activity.date} · {activity.time}
                      </p>

                      {submitted ? (
                        <div className="flex flex-col items-center">
                          <p className="max-w-md text-base leading-7 text-black/70">We have received your registration. You will get a confirmation by email with more details.</p>
                        </div>
                      ) : (
                        <form
                          className="w-full"
                          onSubmit={(e) => {
                            e.preventDefault();
                            setSubmitted(true);
                          }}
                        >
                          <div className="mb-8 grid gap-6 md:grid-cols-2">
                            <input type="text" placeholder="Full name" required className="w-full bg-white px-6 py-4 text-sm outline-none" />

                            <input type="email" placeholder="Email" required className="w-full bg-white px-6 py-4 text-sm outline-none" />
                          </div>

                          <button type="submit" className="mb-10 w-full max-w-xs bg-black px-10 py-4 text-lg text-white transition-opacity hover:opacity-80">
                            Sign up
                          </button>

                          <p className="text-base">You will get a confirmation by email with more details.</p>
                        </form>
                      )}
                    </div>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
