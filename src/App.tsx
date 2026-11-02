import "./App.css";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Navigation from "./components/Navigation";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="mx-auto min-h-screen max-w-5xl bg-neutral-950 text-zinc-100">
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
