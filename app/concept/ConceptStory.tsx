"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { MotionProps } from "framer-motion";

const fadeUp: MotionProps = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
};

export default function ConceptStory() {
  return (
    <>
      {/* første billede + tekst */}
      <section className="grid w-full grid-cols-1 md:grid-cols-2">
        <motion.div {...fadeUp} className="relative h-[90vw] w-full overflow-hidden md:h-[850px]">
          <Image src="/billeder/joederloeb.JPG" alt="Outdoor Office" fill className="object-cover object-[center_90%]" />
        </motion.div>

        <motion.div {...fadeUp} className="flex items-center justify-center px-8 py-12 md:px-24 md:py-0">
          <p className="max-w-[420px] text-center text-[16px] font-light leading-[1.6] md:text-left md:text-[18px] md:leading-[1.4]">At Outdoor Office, we believe that creating a community through a common goal or passion creates everlasting bonds. What started off as a small group later evolved into something which was beyond what we imagined.</p>
        </motion.div>
      </section>

      {/* gruppebillede */}
      <motion.section {...fadeUp} className="relative h-[80vw] w-full overflow-hidden md:h-[720px]">
        <Image src="/billeder/STORYGruppebillede1.JPG" alt="Outdoor Office group" fill className="object-cover object-[center_90%]" />
      </motion.section>

      {/* tekst section */}
      <motion.section {...fadeUp} className="flex items-center justify-center px-8 py-16 text-center md:px-12 md:py-32">
        <p className="max-w-[850px] text-[16px] font-light leading-[1.6] md:text-[18px] md:leading-[1.5]">As a community that takes pride in staying active and healthy individuals self improvement, we strive to improve both ourselves and the people around us, mentally and physically. Whether it&apos;s sprinting in the coldness of winter, or going the extra mile keeps us on exercise, or gaining a different perspective on accountability and self discipline.</p>
      </motion.section>

      {/* stort billede — kun desktop */}
      <motion.section {...fadeUp} className="hidden md:block relative h-[650px] w-full overflow-hidden">
        <Image src="/billeder/prespullup.JPG" alt="Outdoor Office" fill className="object-cover object-[center_70%]" />
      </motion.section>

      {/* DESKTOP: tekst venstre, grinebillede højre */}
      <section className="hidden md:grid w-full grid-cols-2 min-h-[600px]">
        <motion.div {...fadeUp} className="flex items-center justify-center px-24">
          <p className="max-w-[420px] text-[18px] font-light leading-[1.4]">Outdoor Office is driven through the motivation of those around us and executed by the discipline of our nature as active people.</p>
        </motion.div>

        <motion.div {...fadeUp} className="relative h-[600px] w-full overflow-hidden">
          <Image src="/billeder/grinebillede.JPG" alt="Outdoor Office" fill className="object-cover object-[center_35%]" />
        </motion.div>
      </section>

      {/* MOBIL: prespullup, tekst, grinebillede */}
      <section className="md:hidden flex flex-col w-full">
        <motion.div {...fadeUp} className="relative h-[80vw] w-full overflow-hidden">
          <Image src="/billeder/prespullup.JPG" alt="Outdoor Office" fill className="object-cover object-[center_70%]" />
        </motion.div>

        <motion.div {...fadeUp} className="flex items-center justify-center px-8 py-12">
          <p className="max-w-[420px] text-center text-[16px] font-light leading-[1.6]">Outdoor Office is driven through the motivation of those around us and executed by the discipline of our nature as active people.</p>
        </motion.div>

        <motion.div {...fadeUp} className="relative h-[80vw] w-full overflow-hidden">
          <Image src="/billeder/grinebillede.JPG" alt="Outdoor Office" fill className="object-cover object-[center_35%]" />
        </motion.div>
      </section>
    </>
  );
}
