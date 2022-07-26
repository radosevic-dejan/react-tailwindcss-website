import React from "react";

function HeroContent() {
  return (
    <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
      <p className="text-2xl">Itro</p>
      <h1 className="py-3 text-4xl md:text-6xl font-bold">Title</h1>
      <p className="text-2xl">Lorem...</p>
      <p>Our brand</p>
      <button className="px-3 py-2 sm:w-[60%]">Get Started</button>
    </div>
  );
}

export { HeroContent };
