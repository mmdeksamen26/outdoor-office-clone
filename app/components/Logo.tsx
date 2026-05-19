import Image from "next/image";

export default function Logo() {
  return (
    <section className="w-full bg-[#FAF9F0] py-24">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
        {/* logo til venstre */}
        <div className="flex flex-1 justify-start">
          <Image src="/logo/OOsorttekst.svg" alt="Outdoor Office Text" width={260} height={60} className="h-auto w-[180px] md:w-[240px]" priority />
        </div>

        {/* midten */}
        <div className="flex flex-1 justify-center">
          <Image src="/logo/logo.svg" alt="Outdoor Office Icon" width={200} height={200} className="h-auto w-[200px]" priority />
        </div>

        {/* og højre */}
        <div className="flex flex-1 justify-end">
          <Image src="/logo/OOsorttekstlogo.svg" alt="Outdoor Office Full Logo" width={260} height={120} className="h-auto w-[180px] md:w-[240px]" priority />
        </div>
      </div>
    </section>
  );
}
