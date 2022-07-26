import { CallToAction } from "./callToAction";
import { SupportOffer } from "./supportOffer";

export const SupportCard = (props) => {
    const {icon} = props;
  return (
    <div className="bg-white rounded-xl shadow-2xl">

      <SupportOffer icon={icon} />
      <CallToAction />
    </div>
  );
};
