import About from "./components/About";
import Access from "./components/Access";
import ClosingCta from "./components/ClosingCta";
import Faq from "./components/Faq";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import Sports from "./components/Sports";
import StatsBand from "./components/StatsBand";
import Tech from "./components/Tech";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <a
        href="#konten"
        className="fixed top-4 left-4 z-[120] -translate-y-24 rounded-full bg-lime px-5 py-3 text-[12px] font-extrabold text-ink transition-transform focus:translate-y-0"
      >
        Lewati ke konten utama
      </a>

      <Navbar />

      <main id="konten">
        <Hero />
        <StatsBand />
        <About />
        <Features />
        <Sports />
        <HowItWorks />
        <Access />
        <Tech />
        <Faq />
        <ClosingCta />
      </main>

      <Footer />
    </div>
  );
}
