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

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Reveal>
          <Hero />
        </Reveal>

        <Reveal>
          <About />
        </Reveal>

        <Reveal>
          <Projects />
        </Reveal>

        <Reveal>
          <Skills />
        </Reveal>

        <Reveal>
          <Certifications />
        </Reveal>

        <Reveal>
          <Resume />
        </Reveal>

        <Reveal>
          <Contact />
        </Reveal>
      </main>

      <Footer />
    </>
  );
}

export default App;