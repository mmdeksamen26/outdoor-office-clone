import Image from "next/image";

type InfoBlockProps = {
  title: string;
  text: string;
  image: string;
  reverse?: boolean;
};

export default function InfoBlock({ title, text, image, reverse = false }: InfoBlockProps) {
  return (
    <section className="grid grid-cols-2 min-h-[50vh]">
      {/* billede */}
      <div className={`relative min-h-[50vh] ${reverse ? "order-1" : "order-2"}`}>
        <Image src={image} alt={title} fill className="object-cover object-[center_40%]" />
      </div>

      {/* tekst */}
      <div className={`flex items-center justify-center bg-[#F3F3E7] p-16 text-black ${reverse ? "order-2" : "order-1"}`}>
        <div className="max-w-md">
          <h2 className="text-3xl uppercase mb-6 leading-tight">{title}</h2>

          <p className="text-base leading-relaxed">{text}</p>
        </div>
      </div>
    </section>
  );
}
