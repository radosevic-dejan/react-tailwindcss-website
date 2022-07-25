import { AbsoluteSection } from "./heroComponents/absoluteSection";
import { HeroImage } from "./heroComponents/heroImage";
import { HeroOfer } from "./heroComponents/heroOfer";

function Hero() {
  return (
    <div className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
      <div className="grid md:grid-cols-2 max-w-7xl m-auto">
        <HeroOfer />
        <HeroImage />
        <AbsoluteSection />
      </div>
    </div>
  );
}

export { Hero };
