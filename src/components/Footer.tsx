import Logo from "../assets/logo-text.png"


const Footer = () => {
    return (
        <div className="container mx-auto mt-16 pl-35 pr-5" >
            <div className=" grid grid-cols-5 items-start gap-4">
                <div className=" col-span-2">
                    <img src={Logo} alt="" />
                    <p className="text-[#64748B] mt-2">Curated tools, technologies, and resources for developers building <br />
                        modern software.</p>
                    <ul className=" flex justify-start gap-4 items-center text- [#475569] mt-2">
                        <li>GitHub</li>
                        <li>Twiter</li>
                        <li>Linkedin</li>
                    </ul>
                </div>
                <div>
                    <p className="font-bold">
                        PRODUCT
                    </p>
                    <ul className="text-[#64748B] mt-4 mb-4.75">
                        <li>Home</li>
                        <li>Technologies</li>
                        <li>Projects</li>
                    </ul>
                </div>
                <div>
                    <p className="font-bold">
                        COMPANY
                    </p>
                    <ul className="text-[#64748B] mt-4 mb-4.75">
                        <li>About

                        </li>
                        <li>Contact</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div>
                    <p className="font-bold">LEGAL</p>
                    <ul className="text-[#64748B] mt-4 mb-4.75">
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                    </ul>
                </div>


            </div>
            <div className="divider mt-14"></div>
            <div className="mt-8 flex justify-between items-center mb-12">
                <div>
                    <p className="text-[#64748B] "> &copy; 2026 Dev Stack. All rights reserved.</p>
                </div>
                <div className="mr-15">
                    <ul className="flex justify-around items-center gap-6 text-[#64748B] ">
                        <li>Privacy</li>
                        <li>Terms</li>
                    </ul>
                </div>

            </div>

        </div>
    );
};

export default Footer;