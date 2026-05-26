import Image from "next/image";

type InfoBlockProps = {
  title: string;
  text: string;
  image: string;
  reverse?: boolean;
};

export default function InfoBlock({ title, text, image, reverse = false }: InfoBlockProps) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 md:min-h-[600px]">
      {/* Billede */}
      <div
        className={`
          relative w-full
          aspect-[4/5] sm:aspect-[3/4] md:aspect-auto md:h-full
          order-1
          ${reverse ? "md:order-first" : "md:order-last"}
        `}
      >
        <Image src={image} alt={title} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover object-center" priority={false} />
      </div>

      {/* Tekst */}
      <div
        className={`
          flex items-center justify-center bg-[#F3F3E7] text-black
          px-6 py-10 sm:px-8 sm:py-12 md:p-16
          order-2
          ${reverse ? "md:order-last" : "md:order-first"}
        `}
      >
        <div className="w-full max-w-[28rem]">
          <h2 className="mb-4 text-2xl sm:text-3xl md:text-3xl uppercase leading-tight">{title}</h2>
          <p className="text-base leading-relaxed sm:text-[17px]">{text}</p>
        </div>
      </div>
    </section>
  );
}
