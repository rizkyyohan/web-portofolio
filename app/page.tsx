import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";

import Projects from "./components/Projects";

export default function Page() {
  return (
    <main>
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
