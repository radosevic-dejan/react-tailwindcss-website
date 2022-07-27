import { Icon } from "../../helper/icon"

export const Includes = (props) => {
    const {icon, text} = props;
  return (
    <p className='flex py-4'>
        <Icon iconType={icon} className="w-8 mr-5 text-green-600" /> {text}
    </p>
  )
}
