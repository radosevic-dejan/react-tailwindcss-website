import React from "react";
import { PriceContainer } from "../components/pricing/priceContainer";

export const Pricing = () => {
  return (
    <div name="pricing" className="w-full text-white my-24">
      <div className="w-full h-[800px] bg-slate-900 absolute mix-blend-overlay"></div>

      <div className="max-w-7xl mx-auto py-12">
        <div className="text-center py-8 text-slate-300">
          <h2 className="text-3xl uppercase">Pricing</h2>
          <h3 className="text-5xl font-bold text-white py-8">
            The right price for you.
          </h3>
          <p className="text-3xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
            laudantium odio ullam inventore aliquid ipsum quasi tenetur velit
            voluptatum iste.
          </p>
        </div>

        <div className="grid md:grid-cols-2">
          <PriceContainer monthly="$69" />

          <PriceContainer monthly="$119" />
        </div>
      </div>
    </div>
  );
};
