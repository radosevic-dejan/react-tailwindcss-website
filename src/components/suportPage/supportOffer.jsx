import { Icon } from "../../helper/icon";

export const SupportOffer = (props) => {
    const {icon} = props;
  return (
    <div className="pt-10 px-2">
      <Icon iconType={icon} className="w-16 p-4 rounded-lg " />
      <h3 className="text-2xl font-bold pb-2">Lorem</h3>
      <p className="text-xl text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
        tempora laboriosam consectetur accusantium vitae quisquam vel, eveniet
        autem repudiandae reiciendis commodi, architecto, velit quibusdam odio
        ipsum rerum et aliquam ratione.
      </p>
    </div>
  );
};
