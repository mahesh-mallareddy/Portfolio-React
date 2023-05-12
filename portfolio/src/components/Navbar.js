import { useState } from "react";
import { FaBars } from "react-icons/fa";

export const Logo = () => {
    return (
        <div className="font-bold">
            <h3>portfolio</h3>
        </div>
    )
}

export const Nav = () => {
    const [isToogle, setisToogle] = useState(true)
    const handleClick = () => {
        setisToogle(!isToogle)
    }
    return (
        <>
            <div className={isToogle ? " hidden" : " mx-1  w-full  absolute top-full md:bg-[unset]  md:block md:static md:h-auto md:w-min"}>
                <ul className="flex justify-center items-center  font-semibold  flex-col md:flex-row">
                    <li className="mx-2 my-2 md:my-0">Home</li>
                    <li className="mx-2 my-2 md:my-0">Skills</li>
                    <li className="mx-2 my-2 md:my-0">projects</li>
                    <li className="mx-2 my-2 md:my-0">contact</li>
                </ul>
            </div>
            <FaBars className="mx-2 md:hidden cursor-pointer " onClick={handleClick}></FaBars>
        </>

    )
}


const Navbar = () => {
    return (
        <div className="flex w-full  justify-between items-center h-16 bg-slate-300 fixed top-0 ">
            <Logo />
            <Nav />
        </div>
    )
};
export default Navbar;