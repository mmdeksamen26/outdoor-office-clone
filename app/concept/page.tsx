import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ConceptIntro from "./ConceptIntro";
import ConceptStory from "./ConceptStory";
import ConceptBeliefs from "./ConceptBeliefs";

export default function ConceptPage() {
  return (
    <main className="w-full bg-[#F4F2E8] text-black">
      <Navbar />

      <ConceptIntro />

      <ConceptStory />

      <ConceptBeliefs />

      <Footer />
    </main>
  );
}
