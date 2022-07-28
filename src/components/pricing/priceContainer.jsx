import { PriceType } from "./priceType";
import { BillingType } from "./billing";

export const PriceContainer = (props) => {
  const { monthly } = props;
  return (
    <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
      <PriceType priceType="Standard" />
      <BillingType monthlyPrice={monthly} />
      <p className="text-2xl py-8 text-[#2e3b46]">
        Lorem ipsum dolor, sit amet consectetur adipisicing.
      </p>

      <button className="w-full my-4 py-4 font-bold border-[#fa6763] bg-[#fa6763] text-[#2e3b46] hover:text-[#fa6763] hover:bg-white">
        Get started
      </button>
    </div>
  );
};
