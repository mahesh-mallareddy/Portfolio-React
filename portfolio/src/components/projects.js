import botstrap from '../assets/projects/tourgo.png'
import tailwind from '../assets/projects/dinebaffe.png'
import food_app from '../assets/projects/food-app.png'
import to_doList from '../assets/projects/to-do-List.png'

const Project = () => {

    const Projectdata = [
        {
            name: "static tourgo webpage",
            desc: "HTML ,css ,javascript and Bootstrap",
            pic: "",
            img: botstrap
        },
        {
            name: "static food webpage",
            desc: "HTML ,CSS ,javascript and Tailwind",
            pic: "",
            img: tailwind
        },
        {
            name : "To do List" ,
            desc: "HTML ,CSS ,javascript",
            pic : "",
            img : to_doList
        },    
        {
            name : "React food webapp" ,
            desc: "HTML ,CSS, React , React-Redux and Tailwind",
            pic : "",
            img : food_app
        },    
    ]
    return (
        <div className="projects  flex flex-col bg-[#0a192fec] " id="projects">
            <h4 className="text-gray-300 my-3 font-bold mx-14">PROJECTS</h4>
            <div className='max-w-screen-lg mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 my-4'>
                    {
                        Projectdata.map((data) => {
                            return (
                                <div className='group w-fit md:mx-10 my-4 md:my-6 shadow-md shadow-[#040c16] hover:shadow-none  duration-700'>
                                        <div className='project_bg  mx-5 my-2  flex justify-center items-center rounded-lg  hover:scale-110 duration-500 ' style={{ backgroundImage: `url(${data.img})` }}>
                                            <div className='opacity-0 group-hover:opacity-100 duration-300 my-5'>
                                                <a href={''} >
                                                    <button className='rounded-md mx-8 px-4 py-1 bg-teal-400
                                                    duration-500'>Demo</button>
                                                </a>
                                                <a href={''}>
                                                    <button className='mx-8 px-4 py-1 bg-teal-400 rounded-md duration-500'>code</button>
                                                </a>
                                            </div>
                                        </div>
                                        <div className='w-fit mx-auto text-center my-2  opacity-100 group-hover:opacity-0 duration-300'>
                                            <h4 className='text-gray-300 '>{data.name}</h4>
                                            <p className='text-gray-300 text-sm '>using {data.desc}</p>
                                        </div>
                                    </div>
                               
                                )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default Project;