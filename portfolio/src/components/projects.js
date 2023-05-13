import botstrap from '../assets/projects/tourgo.png'
import tailwind from '../assets/projects/dinebaffe.png'

const Project = () => {

    const Projectdata = [
        {
            name: "static tourgo webpage",
            desc: "HTML + css + javascript and Bootstrap",
            pic: "",
            img: botstrap
        },
        {
            name: "static food webpage",
            desc: "HTML + CSS + javascript and Tailwind",
            pic: "",
            img: tailwind
        },
        // {
        //     name : "Todo List" ,
        //     pic : "",
        //     img : ""
        // }    
    ]
    return (
        <div className="w-full h-[90vh] flex flex-col bg-[#0a192fec] ">
            <h4 className="text-gray-300 my-3">PROJECTS</h4>
            <div className='max-w-screen-lg mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 '>
                    {
                        Projectdata.map((data) => {
                            return (
                                <div className='group w-fit md:mx-10'>
                                    <div className=' my-3  shadow-md shadow-[#040c16] hover:scale-110 duration-300  group-hover:shadow-none'>

                                        <div className='project_bg  mx-5 my-2  flex justify-center items-center rounded-lg ' style={{ backgroundImage: `url(${data.img})` }}>
                                            <div className='opacity-0 group-hover:opacity-100 duration-300'>
                                                <a>
                                                    <button className='rounded-md mx-8 px-4 py-1 bg-teal-400
                                                    '>Demo</button>
                                                </a>
                                                <a>
                                                    <button className='mx-8 px-4 py-1 bg-teal-400 rounded-md '>code</button>
                                                </a>
                                            </div>
                                        </div>
                                        <div className='w-fit mx-auto text-center my-4  opacity-100 group-hover:opacity-0'>
                                            <h4 className='text-gray-300 '>{data.name}</h4>
                                            <p className='text-gray-300 text-sm '>using {data.desc}</p>
                                        </div>
                                    </div>
                                </div>)
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default Project;