
export const AboutContent = (props) => {
  const { title, description } = props;
  return (
    <div className="border py-8 rounded-xl shadow-xl">
      <p className="text-6xl font-bold bg-[#fa6763] text-[#2e3b46]">{ title }</p>
      <p className="text-[#2e3b46] mt-2 font-bold">{ description }</p>
    </div>
  );
};
