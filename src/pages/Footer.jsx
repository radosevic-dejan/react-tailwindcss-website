import { FooterSection } from "../components/footer/footerSection";
import { FooterIcons } from "../components/footer/footerIcons";

const footerData = [
  { title: "Solutions", items: ["Wordpress", "SEO", "Marketing", "Analytics"] },
  { title: "Company", items: ["About", "Careers", "Blog", "Contact"] },
  { title: "Legal", items: ["Privacy", "Terms", "Copyright", "Conditions"] },
];

export const Footer = () => {
  return (
    <>
    <div name="footer" className="mx-8 grid md:grid-cols-3">
      {footerData.map((section, index) => {
        return (
          <FooterSection
            key={index}
            title={section.title}
            items={section.items}
          />
        );
      })}
    </div>
      <FooterIcons />
    </>
  );
};
