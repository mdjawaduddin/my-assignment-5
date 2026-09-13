import BannerLogo from "../assets/banner-stack.png"

const Banner = () => {
    return (
        <div className="flex justify-around items-center  container mx-auto mt-24" >

            <div className="pl-6.5">
                <p className="text-[60px] font-extrabold leading-none ">Build Your Ideal <br />
                    <span className="text-[60px] font-extrabold brand-gradient text-transparent bg-clip-text"> Development Stack</span> </p>
                <p className=" text-[#475569] text-[18px] pt-6  ">
                    Explore frontend, backend, database, and tooling options,<br />
                    compare them side by side, and put together the stack that fits your <br />
                    next project.
                </p>

                <div className="pt-10 text-[16px] space-x-2">
                    <button className="btn btn-ghost text-white font-semibold rounded-lg py-3 px-4 brand-gradient">Explore Technologies</button>
                    <button className="btn btn-ghost border-2 border-[#E5E7EB] rounded-lg py-3 px-4">Learn More</button>
                </div>


            </div>
            <div>
                <img src={BannerLogo} alt="" />
            </div>



        </div>





    );
};

export default Banner;