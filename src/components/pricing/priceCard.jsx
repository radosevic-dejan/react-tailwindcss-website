import { Includes } from "./includes"

// dummy data
const includes = new Array(8)

export const PriceCard = () => {
  return (
    <div className="text-2xl">
        {
            includes.map((item, index) =>{
                return(
                    <Includes icon="check" text="Lorem ipsum dolor" key={index}/>
                )
            })
        }
        <button className="w-full my-4 py-4">Get started</button>
    </div>
  )
}
