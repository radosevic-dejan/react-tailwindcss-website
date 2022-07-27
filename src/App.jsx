import { Hero } from "./components/Hero";
import { NavBar } from "./components/NavBar";
import { About } from "./pages/About";
import { Blog } from "./pages/Blog";
import { Support } from "./pages/Support";
import { Pricing } from "./pages/Pricing";

function App() {

  return (
    <div className="w-full flex flex-col">
      <NavBar />
      <Hero />
      <About />
      <Support />
      <Blog />
      <Pricing />
    </div>
  )
}

export default App
