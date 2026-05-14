import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F4F2E8]">
      <Navbar />

      <section className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl uppercase">Outdoor Office</h1>
      </section>

      <section id="participate" className="min-h-screen flex items-center justify-center">
        <h2 className="text-3xl uppercase">Participate</h2>
      </section>

      <section id="faq" className="min-h-screen flex items-center justify-center">
        <h2 className="text-3xl uppercase">FAQ</h2>
      </section>
    </main>
  );
}
