import { AbsoluteSection } from "./heroComponents/absoluteSection";
import { HeroImage } from "./heroComponents/heroImage";
import { HeroContent } from "./heroComponents/heroContent";

function Hero() {
  return (
    <div name="home" className="w-full h-screen flex flex-col justify-between bg-[#2e3b46]">
      <div className="grid md:grid-cols-2 max-w-7xl m-auto">
        <HeroContent />
        <HeroImage />
        <AbsoluteSection />
      </div>
    </div>
  );
}

export { Hero };
