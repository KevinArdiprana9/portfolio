import { useRef } from "react";
import Navbar from "./Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import projectData from "./data/Project";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const handleNavClick = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      const offset = 50;
      const top = ref.current.offsetTop - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#0f172a] text-white min-h-screen font-sans">
      <Navbar onNavClick={handleNavClick} refs={{ heroRef, aboutRef, projectsRef, contactRef }} />
      <div ref={heroRef}>
        <Hero onScrollToAbout={() => handleNavClick(aboutRef)}/>
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={projectsRef}>
        <Projects projects={projectData} />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
