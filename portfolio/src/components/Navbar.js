import { useState } from "react";
import { FaBars } from "react-icons/fa";

export const Logo = () => {
    return (
        <div className="font-bold mx-20 text-xl">
            <h3>portfolio</h3>
        </div>
    )
};

export const Nav = () => {
    const [isToogle, setisToogle] = useState(true)
    const handleClick = () => {
        setisToogle(!isToogle)
    }
    return (
        <>
            <div className={isToogle ? " hidden md:block mx-5" : " md:mx-1 bg-[#0a192f]  transition-property: all  w-full  absolute top-full md:bg-[unset]  md:static md:h-auto md:w-min"}>
                <ul className="flex justify-center items-center  font-semibold transition-duration: 150ms flex-col md:flex-row">
                    <li className="mx-2 my-2 md:my-0 cursor-pointer ">
                    <a href="#">
                            HOME
                        </a>
                    </li>

                    <li className="mx-2 my-2 md:my-0 cursor-pointer">
                        <a href="#skills">
                            SKILLS
                        </a>
                    </li>
                    <li className="mx-2 my-2 md:my-0 cursor-pointer">
                        <a href="#projects">
                            PROJECTS
                        </a>
                    </li>
                    <li className="mx-2 my-2 mb-6 md:my-0 cursor-pointer">
                        <a href="#contact">
                            CONTACT
                        </a>
                    </li>
                </ul>
            </div>
            <FaBars className="mx-10 md:hidden cursor-pointer " onClick={handleClick}></FaBars>
        </>

    )
};


const Navbar = () => {
    return (
        <div className="flex w-full  justify-between items-center h-16 bg-[#0a192f] text-gray-300 fixed top-0 z-10">
            <Logo />
            <Nav />
        </div>
    )
};
export default Navbar;