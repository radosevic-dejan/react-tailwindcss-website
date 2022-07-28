import { Icon } from "../../helper/icon";

const icons = ["facebook", "instagram", "github"];

export const FooterIcons = () => {
  return (
    <div className="w-[80%] mx-auto rounded-md flex justify-center content-center my-4 bg-[#2e3b46] text-2xl py-2">
        {
            icons.map((icon, index) => {
                return (
                    <Icon key={index} iconType={icon} className=" text-slate-300 hover:text-[#fa6763] mx-4"/>
                )
            })
        }
    </div>
  )
}
