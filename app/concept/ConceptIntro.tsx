"use client";

import { motion } from "framer-motion";

const fadeUp = {
  initial: {
    opacity: 0,
    y: 40,
  },

  whileInView: {
    opacity: 1,
    y: 0,
  },

  viewport: {
    once: true,
    amount: 0.2,
  },

  transition: {
    duration: 1,
    ease: [0.22, 1, 0.36, 1],
  },
};

export default function ConceptIntro() {
  return (
    <section className="flex min-h-[85vh] flex-col items-center justify-center px-6 pb-32 text-center">
      <motion.h1 {...fadeUp} className="text-center text-2xl font-medium uppercase tracking-wide text-black md:text-4xl">
        Where it all started
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 1,
          delay: 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mt-40 text-[18px]"
      >
        Brought to you by the good folks of Outdoor Office
      </motion.p>
    </section>
  );
}
