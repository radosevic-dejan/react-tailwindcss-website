import { Hero } from "./components/Hero";
import { NavBar } from "./components/NavBar";
import { About } from "./pages/About";
import { Blog } from "./pages/Blog";
import { Services } from "./pages/Services";
import { Pricing } from "./pages/Pricing";
import { Footer } from "./pages/Footer";

function App() {

  return (
    <div className="w-full m-auto flex flex-col">
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Blog />
      <Pricing />
      <Footer />
    </div>
  )
}

export default App
