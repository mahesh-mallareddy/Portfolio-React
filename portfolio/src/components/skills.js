import html from '../assets/html.png'
import css from '../assets/css.png'
import java_script from '../assets/javascript.png'
import react from '../assets/react.png'
import firebase from '../assets/firebase.png'
import tailwind from '../assets/tailwind.png'
import git from '../assets/git.png'
import mongo from '../assets/mongo.png'



const Skills = () => {

    const imgList = [

        { name: "html", pic: html, alt: "logo2" },

        { name: "css", pic: css, alt: "logo3" },

        { name: "java script", pic: java_script, alt: "logo4" },

        { name: "react", pic: react, alt: "logo5" },

        { name: "tailwind", pic: tailwind, alt: "logo6" },

        { name: "mongo", pic: mongo, alt: "logo7" },

        { name: "firebase", pic: firebase, alt: "logo8" },

        { name: "git", pic: git, alt: "logo9" }

    ]

    console.log(imgList.map((img) => {
        return (img.name)
    }))

    return (
        <div className='w-full h-[90vh] flex flex-col bg-[#0a192fec]'>
            <h4 className='text-gray-300 mx-14 '>SKILLS</h4>
            <p className='text-gray-400 mx-16 my-1' >Technologies I use in my development</p>
            <div className='w-fit mx-auto'>
                <div className='grid grid-cols-2 sm:grid-cols-3 my-3'>
                    {imgList.map((img) => {
                        return (<div className='mx-5 my-2 sm:my-5 sm:mx-10 shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                            < img src={img.pic} className='w-12 md:w-16 mx-8 my-3' />
                            <p className='w-fit mx-auto my-1 text-gray-400'>{img.name}</p>
                        </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default Skills;