import image from '../assets/myimage.png'

const Homeintro = () => {
    return (
        <>
        <div className="w-full h-screen bg-[#0a192fec] flex justify-center items-center flex-col">
            <div className='md:max-w-[800px] mx-4 '>
                <p className='text-red-300'>Hi, my name is</p>
                <h3 className='text-1xl md:text-3xl text-gray-300'>MAHESH MALLAREDDY</h3>
                <h2 className='text-1xl md:text-3xl text-gray-400'>I'm a web developer</h2>
                <p className='text-lg md:text-xl text-gray-400'>My proficiency with frameworks React Some of my recent work includes creating a dynamic e-commerce platform using React and React-Redux <br/> building a responsive landing page with Bootstrap and Tailwind css</p>
            </div>
            <a href={''} download="resume" className='mt-16 px-14 bg-slate-400 py-3'>DOWNLOAD RESUME</a>
        </div>
        </>
    )

}
export default Homeintro;
