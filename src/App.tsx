import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { Hero } from "./components/Hero";
import { Products } from "./components/Products";
import { Capabilities } from "./components/Capabilities";
import { Portfolio } from "./components/Portfolio";
import { Philosophy } from "./components/Philosophy";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";
import { FilmForgeRedirect } from "./components/FilmForgeRedirect";

function Nav() {
  return (
    <nav>
      <div className="wrap nav-in">
        <div className="brand"><span className="dot" />Anapana</div>
        <div className="nav-links">
          <a href="#how">How it thinks</a>
          <a href="#maya">Maya</a>
          <a href="#breath">The studio</a>
          <a href="#invite" className="nav-cta">Request an invite</a>
        </div>
      </div>
    </nav>
  );
}

function HomePage() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="page-shell">
      <Nav />
      <Hero />
      <Products />
      <Capabilities />
      <Portfolio />
      <Philosophy />
      <CTASection />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/filmforge" element={<FilmForgeRedirect />} />
      </Routes>
    </BrowserRouter>
  );
}
