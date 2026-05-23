"use client";

import { motion } from "framer-motion";
import type { MotionProps } from "framer-motion";

const fadeUp: MotionProps = {
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

export default function ConceptBeliefs() {
  return (
    <section className="flex flex-col items-center px-6 pb-44 pt-32 text-center">
      <motion.h2 {...fadeUp} className="text-center text-2xl font-medium uppercase tracking-wide text-black md:text-4xl">
        What we believe in
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 1,
          delay: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mt-16 space-y-12 text-[16px] leading-[1.5]"
      >
        <div>
          <p>Training</p>
          <p className="mt-3">Movement, discipline and continuous growth.</p>
        </div>

        <div>
          <p>Community</p>
          <p className="mt-3">Stronger together through shared experiences.</p>
        </div>

        <div>
          <p>Creativity</p>
          <p className="mt-3">Ideas shaped by curiosity and expression.</p>
        </div>

        <div>
          <p>Music</p>
          <p className="mt-3">Sound that brings people and moments together.</p>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 1,
          delay: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mt-52 text-[16px]"
      >
        For the people by the people.
      </motion.p>
    </section>
  );
}
