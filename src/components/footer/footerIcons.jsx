import { Icon } from "../../helper/icon";

const icons = ["facebook", "instagram", "github"];

export const FooterIcons = () => {
  return (
    <div className="w-[80%] mx-auto rounded-md flex justify-around content-center my-4 bg-[#2e3b46] text-2xl">
        {
            icons.map((icon, index) => {
                return (
                    <Icon key={index} iconType={icon} className=" text-slate-300 hover:text-[#fa6763]"/>
                )
            })
        }
    </div>
  )
}
