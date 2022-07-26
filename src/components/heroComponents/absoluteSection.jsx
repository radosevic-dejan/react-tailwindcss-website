import { Icon } from "../../helper/icon";

const heroData = [
  "airplane","database","cloud","server"
]

function AbsoluteSection() {
  return (
    <div className="w-1/2 absolute flex flex-col justify-self-center mt-5 pt-2 md:min-w-[760px] bottom-[-5%] bg-slate-400 boder border-stone-400 rounded-xl text-center shadow-xl">
      <p>Services</p>      
      <div className="flex justify-between flex-wrap px-4 pb-4">
        {
          heroData.map((item, index) => {
            return(
              <div key={index}>
                <Icon iconType={item} className="h6 text-indigo-500"/>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export { AbsoluteSection };
