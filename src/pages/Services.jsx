import {ServiceCard} from '../components/suport/serviceCard';

export const Services = () => {
  return (
    <div name="services" className='w-full mt-24'>
        <div className='w-full h-[700px] bg-[#2e3b46]/80 absolute'>
            <img className="w-full h-full object-cover mix-blend-overlay" src="https://cdn.pixabay.com/photo/2016/09/07/10/04/education-1651259_960_720.jpg" alt="Support page image" />
        </div>

        <div className="max-w-7xl mx-auto relative text-[#2e3b46]">
            <div className="px-4 py-12 bg-[#fa6763]/75">
                <h2 className="text-3xl pt-8 font-bold  uppercase text-center">Title</h2>
                <h3 className="text-5xl font-bold py-6 text-center">Subtitle</h3>
                <p className="py-4 px-2 rounded-lg text-3xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sed beatae ratione ullam mollitia quas veniam, id consequatur veritatis, est tenetur illo placeat? Quibusdam odit harum impedit, necessitatibus expedita autem.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black ">
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
            </div>

        </div>
    </div>
  )
}
