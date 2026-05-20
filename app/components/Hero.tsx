export default function Hero() {
  return (
    <section>
      <div className="relative w-full overflow-hidden">
        <video autoPlay muted loop playsInline preload="none" className="h-[78vh] w-full object-cover">
          <source src="/video/OOHeroVideo1.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
