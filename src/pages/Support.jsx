import {SupportCard} from '../components/suportPage/supportCard';

export const Support = () => {
  return (
    <div className='w-full h-screen mt-24 '>
        <div className='w-full h-[700px] bg-gray-800/90 absolute'>
            <img className="w-full h-full object-cover mix-blend-overlay" src="https://cdn.pixabay.com/photo/2022/01/31/19/30/error-6984855_960_720.png" alt="Support page image" />
        </div>

        <div className="max-w-7xl mx-auto relative text-white">
            <div className="px-4 py-12">
                <h2 className="text-3xl pt-8 font-bold text-gray-200 uppercase text-center">Title</h2>
                <h3 className="text-5xl font-bold py-6 text-center">Subtitle</h3>
                <p className="py-4 px-2 rounded-lg text-3xl text-gray-200 bg-stone-800/70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sed beatae ratione ullam mollitia quas veniam, id consequatur veritatis, est tenetur illo placeat? Quibusdam odit harum impedit, necessitatibus expedita autem.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black ">
                <SupportCard icon="phone" />
                <SupportCard icon="chip" />
                <SupportCard icon="support-agent" />
            </div>

        </div>
    </div>
  )
}
