import Navbar from "./components/Navbar";
import Statement from "./components/Statement";
import InfoBlock from "./components/Infoblock";
import Activities from "./components/Activities";
import FAQ from "./components/Faq";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F3F3E7]">
      <Navbar />

      <Statement />

      <InfoBlock title="What is Outdoor Office" text="Outdoor Office is a community-driven concept blending movement, culture, and connection through curated experiences and creative gatherings." image="/billeder/IMG_1516.JPG" />

      <InfoBlock title="Who is Outdoor Office" text="We are active, creatives, and everyday people building spaces where community, energy, and culture move together, welcoming people from all backgrounds through movement and connection." image="/billeder/IMG_1500.JPG" reverse />
      <Activities />
      <FAQ />
    </main>
  );
}
