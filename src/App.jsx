import "./App.scss";
import { NavBar } from "./components/navbar/navbar";
import { About } from "./pages/about/about";
import { Home } from "./pages/home/home";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);
  return (
    <main>
      <NavBar />
      <Home />
      <About />
    </main>
  );
}

export default App;
