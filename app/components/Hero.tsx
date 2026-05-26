export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video autoPlay muted loop playsInline preload="auto" className="absolute inset-0 h-full w-full object-cover">
        <source src="/video/finalHeroVideo.mp4" type="video/mp4" />
      </video>

      {/* Optional mørk overlay så navbar/tekst læses bedre */}
      <div className="absolute inset-0 bg-black/15" />
    </section>
  );
}
