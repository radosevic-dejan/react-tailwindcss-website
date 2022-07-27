import { Icon } from "../../helper/icon";

const heroData = [
  "design","wordpress","camera","server"
]

function AbsoluteSection() {
  return (
    <div className="w-1/2 absolute flex flex-col justify-self-center mt-5 pt-2 md:min-w-[760px] bottom-[-5%] bg-slate-400 boder border-stone-400 rounded-xl text-center shadow-xl">
      <p className="text-2xl pb-2" >Services</p>      
      <div className="flex justify-between flex-wrap px-4 pb-8 ">
        {
          heroData.map((item, index) => {
            return(
              <div key={index}>
                <Icon iconType={item} className="h6 text-2xl text-indigo-500"/>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export { AbsoluteSection };
