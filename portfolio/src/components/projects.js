import botstrap from '../assets/projects/tourgo.png'
import tailwind from '../assets/projects/dinebaffe.png'
import food_app from '../assets/projects/food-app.png'
import to_doList from '../assets/projects/to-do-List.png'
import portfolio from '../assets/projects/dashbord.png'
import dashbord from '../assets/projects/portfolio.png'
import '../index.css'
const Project = () => {

    const Projectdata = [
        {
            name : "React food webapp" ,
            desc: " React Js, React-Redux and Tailwind css",
            demo: "https://orderonline-foodapp.netlify.app",
            gitcode:"https://github.com/mahesh-mallareddy/onlineFood-delivery-app",
            pic : "",
            img : food_app
        },    
        {
            name: "visual dashbord",
            desc: "React Js and chart Js",
            demo: "https://dinebuffe-onilne-web.netlify.app/",
            gitcode:"https://github.com/mahesh-mallareddy/dinebaffejs",
            img: tailwind
        },
        {
            name: "Static food webpage",
            desc: "javascript and Tailwind css",
            demo: "https://dinebuffe-onilne-web.netlify.app/",
            gitcode:"https://github.com/mahesh-mallareddy/dinebaffejs",
            img: tailwind
        },
        {
            name: "portfolio ",
            desc: "React JS , javascript and Tailwind css",
            demo: "",
            gitcode:"https://github.com/mahesh-mallareddy/Portfolio-React",
            img: portfolio
        },
        {
            name: "Static tourgo webpage",
            desc: "HTML ,css , javascript and Bootstrap",
            demo: "https://mahesh-mallareddy.github.io/tourgo-frontend/",
            gitcode:"https://github.com/mahesh-mallareddy/tourgo-frontend",
            img: botstrap
        },
        {
            name : "To do List" ,
            desc: "HTML ,CSS ,javascript",
            demo: "https://todo-list-jsweb.netlify.app",
            gitcode:"",
            img : to_doList
        },
    ]
    return (
        <div className="projects  flex flex-col bg-[#0a192fec] " id="projects">
            <h4 className="text-gray-300 my-3 font-bold mx-14">PROJECTS</h4>
            <div className='max-w-screen-lg mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 my-4 'data-aos="fade-up"
     data-aos-duration="2000">
                    {
                        Projectdata.map((data) => {
                            return (
                                <div className='rounded-md group w-fit md:mx-10 my-4 md:my-6 shadow-md shadow-[#040c16] hover:shadow-none  duration-700' key={data.name}>
                                        <div className='project_bg  mx-5 my-2  flex justify-center items-center rounded-lg  hover:scale-110 duration-500 ' style={{ backgroundImage: `url(${data.img})` }}>
                                            <div className='opacity-0 group-hover:opacity-100 duration-300 my-5'>
                                                <a href={data.demo} >
                                                    <button className='rounded-md mx-8 px-4 py-1 bg-teal-400
                                                    duration-500'>Demo</button>
                                                </a>
                                                <a href={data.gitcode}>
                                                    <button className='mx-8 px-4 py-1 bg-teal-400 rounded-md duration-500'>code</button>
                                                </a>
                                            </div>
                                        </div>
                                        <div className='w-fit mx-auto text-center my-2  opacity-100 group-hover:opacity-0 duration-300'>
                                            <h4 className='text-gray-300 '>{data.name}</h4>
                                            <p className='text-gray-300 text-sm '> {data.desc}</p>
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