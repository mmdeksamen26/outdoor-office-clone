import Image from "next/image";

export default function ConceptStory() {
  return (
    <>
      {/* første billede + tekst */}
      <section className="grid w-full grid-cols-2">
        <div className="relative aspect-[1/0.9] w-full">
          <Image src="/billeder/joederloeb.JPG" alt="Outdoor Office" fill className="object-cover object-center" />
        </div>

        <div className="flex items-center justify-center px-24">
          <p className="max-w-[420px] text-[20px] leading-[1.4]">At Outdoor Office, we believe that creating a community through a common goal or passion creates everlasting bonds. What started off as a small group later evolved into something which was beyond what we imagined.</p>
        </div>
      </section>

      {/* gruppebillede */}
      <section className="w-full">
        <Image src="/billeder/STORYGruppebillede1.JPG" alt="Outdoor Office group" width={1920} height={720} className="block h-auto w-full" />
      </section>

      {/* tekst section */}
      <section className="flex items-center justify-center px-12 py-32 text-center">
        <p className="max-w-[850px] text-[20px] leading-[1.5]">As a community that takes pride in staying active and healthy individuals self improvement, we strive to improve both ourselves and the people around us, mentally and physically. Whether it&apos;s sprinting in the coldness of winter, or going the extra mile keeps us on exercise, or gaining a different perspective on accountability and self discipline.</p>
      </section>

      {/* stort billede */}
      <section className="relative h-[700px] w-full">
        <Image src="/billeder/prespullup.JPG" alt="Outdoor Office" fill className="object-cover" />
      </section>

      {/* billede + tekst */}
      <section className="grid min-h-[600px] w-full grid-cols-2">
        <div className="flex items-center justify-center px-24">
          <p className="max-w-[420px] text-[20px] leading-[1.4]">Outdoor Office is driven through the motivation of those around us and executed by the discipline of our nature as active people.</p>
        </div>

        <div className="relative h-full w-full">
          <Image src="/billeder/grinebillede.JPG" alt="Outdoor Office" fill className="object-cover" />
        </div>
      </section>
    </>
  );
}
