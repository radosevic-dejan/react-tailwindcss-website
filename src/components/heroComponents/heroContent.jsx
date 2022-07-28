import React from "react";

function HeroContent() {
  return (
    <div className="flex flex-col justify-center md:items-start w-full px-2 py-8 text-slate-300">
      <h1 className="py-3 text-4xl md:text-6xl font-bold">Digital Marketing Agency</h1>
      <p className="text-2xl">Content creation, website building and marketing</p>
      <p className="py-2 text-lg font-bold">Digital Solutions</p>
      <button className="px-3 py-2 font-bold sm:w-[60%] bg-[#fa6763] border border-[#fa6763] text-[#2e3b46] hover:bg-slate-300 hover:text-[#fa6763] hover:border-[#2e3b46]">Get Started</button>
    </div>
  );
}

export { HeroContent };
