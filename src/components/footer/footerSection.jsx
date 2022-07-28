import { SectionContent } from "./sectionContent";

export const FooterSection = (props) => {
  const { title, items } = props;
  return (
    <div className="flex flex-col mx-8 mb-2 p-2">
      <h5 className="text-xl font-bold text-[#2e3b46] text-center">{title}</h5>
      <ul className="pt-2">{
            items.map((item, index) => {
                return(
                    <SectionContent key={index} content={item} />
                )
            })
        }</ul>
    </div>
  );
};
