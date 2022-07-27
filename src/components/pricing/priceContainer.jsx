import { PriceType } from "./priceType";
import { BillingType } from "./billing";
import { PriceCard } from "./priceCard";

export const PriceContainer = (props) => {
    const { monthly } = props;
  return (
    <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
      <PriceType priceType="Standard" />
      <BillingType monthlyPrice={monthly} />
      <p className="text-2xl py-8 text-slate-500">
        Lorem ipsum dolor, sit amet consectetur adipisicing.
      </p>

      <PriceCard />
    </div>
  );
};
