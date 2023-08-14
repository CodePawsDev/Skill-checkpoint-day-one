import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";


const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
    </div>
  )
}

export default App
