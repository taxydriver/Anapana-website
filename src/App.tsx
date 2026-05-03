import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Hero } from "./components/Hero";
import { Products } from "./components/Products";
import { Capabilities } from "./components/Capabilities";
import { Portfolio } from "./components/Portfolio";
import { Philosophy } from "./components/Philosophy";
import { Footer } from "./components/Footer";
import { FilmForgeRedirect } from "./components/FilmForgeRedirect";

function HomePage() {
  return (
    <div className="page-shell">
      <div className="grid-overlay" />
      <Hero />
      <Products />
      <Capabilities />
      <Portfolio />
      <Philosophy />
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
