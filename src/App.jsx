import { Hero } from "./components/Hero";
import { NavBar } from "./components/NavBar";
import { About } from "./pages/About";
import { Support } from "./pages/Support";

function App() {

  return (
    <div className="w-full">
      <NavBar />
      <Hero />
      <About />
      <Support />
    </div>
  )
}

export default App
