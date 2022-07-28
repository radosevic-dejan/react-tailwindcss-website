import { CallToAction } from "./callToAction";
import { ServiceOffer } from "./serviceOffer";

export const ServiceCard = (props) => {
  const { icon } = props;
  return (
    <div className="bg-white rounded-xl shadow-2xl">
      <ServiceOffer />
      <CallToAction />
    </div>
  );
};
