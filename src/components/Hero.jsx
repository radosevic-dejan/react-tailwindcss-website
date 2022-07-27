import { AbsoluteSection } from "./heroComponents/absoluteSection";
import { HeroImage } from "./heroComponents/heroImage";
import { HeroContent } from "./heroComponents/heroContent";

function Hero() {
  return (
    <div className="w-full h-screen flex flex-col justify-between">
      <div className="grid md:grid-cols-2 max-w-7xl m-auto">
        <HeroContent />
        <HeroImage />
        <AbsoluteSection />
      </div>
    </div>
  );
}

export { Hero };
