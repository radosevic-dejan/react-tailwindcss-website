import { AboutContent } from "../components/about/aboutContent"

const aboutData = [
    {title: "100%", description: "Satisfaction"},
    {title: "24/7", description: "Delivery"},
    {title: "100%", description: "Success"}
]
export const About = () => {
  return (
    <div name="about" className='w-full my-32'>
        <div className="max-w-7xl mx-auto">
            <div className="text-center">
                <h2 className="text-5xl text-[#2e3b46] font-bold">Trusted by people accross the world</h2>
                <p className="text-3xl py-6 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nemo quae doloremque assumenda voluptatibus sapiente quidem maiores earum nostrum ipsa minima rerum dolore aspernatur, possimus necessitatibus ullam ratione quo alias!</p>
            </div>

            <div className="grid md:grid-cols-3 gap-1 px=2 text-center">
                {
                    aboutData.map((item, index) => {
                        return (
                            <AboutContent key={index} title={item.title} description={item.description} />
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}
