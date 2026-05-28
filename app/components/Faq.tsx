import Image from "next/image";

export default function FAQ() {
  return (
    <section id="faq" className="bg-[#FAF9F0] px-6 py-24">
      <div className="mx-auto grid max-w-5xl overflow-hidden bg-[#F4F2E8] md:grid-cols-2">
        {/* Image */}
        <div className="relative h-[520px] md:h-auto">
          <Image src="/billeder/faq.JPG" alt="Outdoor Office FAQ" fill className="object-cover object-center" />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center px-8 py-12 md:px-14">
          <h2 className="mb-8 text-2xl font-medium uppercase tracking-wide">FAQ</h2>

          <div className="space-y-6">
            <div>
              <h3 className="mb-1 text-sm font-semibold">What is Outdoor Office?</h3>
              <p className="text-sm leading-6 text-black/70">Outdoor Office is a community-driven space centered around movement, openness and connection through training, creativity and music.</p>
            </div>

            <div>
              <h3 className="mb-1 text-sm font-semibold">Do I need experience to join?</h3>
              <p className="text-sm leading-6 text-black/70">Not at all. Outdoor Office is open to all levels and everyone is welcome.</p>
            </div>

            <div>
              <h3 className="mb-1 text-sm font-semibold">Can I come alone?</h3>
              <p className="text-sm leading-6 text-black/70">Absolutely. A lot of people join alone and quickly become part of the community.</p>
            </div>

            <div>
              <h3 className="mb-1 text-sm font-semibold">Does it cost anything?</h3>
              <p className="text-sm leading-6 text-black/70">Most activities are free unless otherwise stated on the activity.</p>
            </div>

            <div>
              <h3 className="mb-1 text-sm font-semibold">What should I bring?</h3>
              <p className="text-sm leading-6 text-black/70">Comfortable clothes, water and good energy.</p>
            </div>

            <div>
              <h3 className="mb-1 text-sm font-semibold">Where do activities take place?</h3>
              <p className="text-sm leading-6 text-black/70">Activities take place around Copenhagen and are always listed in the activity details.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
