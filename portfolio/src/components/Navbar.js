
export const Logo = () => {
    return (
        <div className="font-bold">
            <h3>portfolio</h3>
        </div>
    )
}
export const Nav = () => {
    return (
        <div className="mx-1 ">
            <ul className="flex font-semibold">
                <li className="mx-2">Home</li>
                <li className="mx-2">Skills</li>
                <li className="mx-2">projects</li>
                <li className="mx-2">contact</li>
            </ul>
        </div>
    )
}


const Navbar = () => {
    return (
        <div className="flex justify-between items-center h-16 bg-slate-300">
            <Logo />
            <Nav />
        </div>
    )
};
export default Navbar;