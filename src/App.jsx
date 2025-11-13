import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import IntroSmoke from "./components/IntroSmoke";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";

function App() {
  const [isIntroActive, setIntroActive] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIntroActive(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative min-h-screen w-screen overflow-hidden">
      <Navbar />
      <IntroSmoke isActive={isIntroActive} />
      <Hero isIntroActive={isIntroActive} />
      <About />
      <Menu />
    </main>
  );
}

export default App;
