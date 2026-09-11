import Logo from "../assets/logo-text.png"

const Nav = () => {
    return (
        <nav className=" flex justify-around items-center container mx-auto mt-4 sticky top-0 z-50">
            <div  >
                <img src={Logo} alt="Dev-Stack-Logo" />
            </div>
            <div className=" text-[#475569] text-[20px]  ">
                <ul className="flex gap-4 items-center">
                    <li className="text-[#DB2777]">Home</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className=" flex justify-between gap-5">
                <button className=" btn btn-ghost  text-[#334155] text-sm font-medium" >Sign In</button>
                <button className="bg-[#D91B7E] btn btn-ghost px-5 py-2.5 text-white text-sm font-semibold  rounded-[50px]">Sign Up</button>
            </div>
     

        </nav >
    );
};

export default Nav;