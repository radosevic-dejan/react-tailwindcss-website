import {Recent} from '../components/blog/recent';

const blogsTitles = ["Blog 1", "Blog 2", "Blog 3", "Blog 4", "Blog 5", "Blog 6", "Blog 7", "Blog 8"];

export const Blog = () => {
  return (
    <div className="w-full my-32">
        <div className='max-w-7xl mx-auto px-2'>
            <h2 className="text-5xl text-center font-bold">Recent Blogs</h2>
            <p className="text-2xl text-gray-600 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, sunt ab expedita illum eveniet rerum nemo optio fugiat dicta. Voluptatibus dolores laudantium dicta sapiente animi dolore fuga, harum quidem expedita.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
            {
                blogsTitles.map((title, index) => {
                    return(
                        <Recent key={index} title={title} />
                    )
                })
            }
        </div>
    </div>
  )
}
