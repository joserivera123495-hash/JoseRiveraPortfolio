import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";
import ScrollToTop from "./components/ScrollToTop";

import AboutMore from "./pages/AboutMore";
import ProjectDetails from "./pages/ProjectDetails";

function Home() {
  return (
    <main>
      <Reveal><Hero /></Reveal>
      <Reveal><About /></Reveal>
      <Reveal><Projects /></Reveal>
      <Reveal><Skills /></Reveal>
      <Reveal><Certifications /></Reveal>
      <Reveal><Resume /></Reveal>
      <Reveal><Contact /></Reveal>
    </main>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-more" element={<AboutMore />} />
        <Route path="/projects/:projectId" element={<ProjectDetails />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;