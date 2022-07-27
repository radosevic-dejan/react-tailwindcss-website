export const BillingType = (props) => {
  const { monthlyPrice } = props;
  return (
    <div>
      <p className="text-6xl font-bold py-4 flex">
        {monthlyPrice}
        <span className="text-xl text-slate-500 flex flex-col justify-end">
          /mo
        </span>
      </p>
    </div>
  );
};
