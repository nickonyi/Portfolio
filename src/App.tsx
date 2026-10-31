import "./App.css";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="mx-auto min-h-screen max-w-5xl bg-neutral-950 text-zinc-100">
      <Navigation />
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;
