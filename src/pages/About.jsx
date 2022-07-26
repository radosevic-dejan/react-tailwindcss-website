import React from 'react'

export const About = () => {
  return (
    <div className='w-full my-32'>
        <div className="max-w-7xl mx-auto">
            <div className="text-center">
                <h2 className="text-5xl font-bold">Lorem</h2>
                <p className="text-3xl py-6 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nemo quae doloremque assumenda voluptatibus sapiente quidem maiores earum nostrum ipsa minima rerum dolore aspernatur, possimus necessitatibus ullam ratione quo alias!</p>
            </div>

            <div className="grid md:grid-cols-3 gap-1 px=2 text-center">
                <div className="border py-8 rounded-xl shadow-xl">
                    <p className="text-6xl font-bold bg-indigo-500">100%</p>
                    <p className="text-gray-500 mt-2">Satisfaction</p>
                </div>
                <div className="border py-8 rounded-xl shadow-xl">
                    <p className="text-6xl font-bold bg-indigo-500">24/7</p>
                    <p className="text-gray-500 mt-2">Delivery</p>
                </div>
                <div className="border py-8 rounded-xl shadow-xl">
                    <p className="text-6xl font-bold bg-indigo-500">100%</p>
                    <p className="text-gray-500 mt-2">Transaction</p>
                </div>
            </div>
        </div>
    </div>
  )
}
