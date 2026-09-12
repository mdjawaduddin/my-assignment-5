
import React, { use } from 'react';
import type { Itech } from '../../types/Itech';
import AvailableTechs from './AvailableTechs';

interface TechProps {
    techPromise: Promise<Itech[]>
}
const Technologies = ({ techPromise }: TechProps) => {
    const technologies = use(techPromise);
    console.log(technologies)
    return (
        <div className="container mx-auto">
            <div className="mt-28 mb-10  pl-28">
                <p className="text-[36px] font-extrabold"> Explore the <span className="text-[36px] font-extrabold  bg-linear-to-r from-[#D81B7E] to-[#7C3AED] text-transparent bg-clip-text"> Technologies</span> </p>
                <p className=" text-[18px] text-[#475569]">Pick one technology per category to build your ideal stack.</p>
            </div>

            <div className="grid grid-cols-12 gap-4 mx-20">
                <div className=" col-span-10">
                    <AvailableTechs technologies={technologies}></AvailableTechs>
                </div>                <div className="card bg-base-100 w-96 h-50 shadow-sm">
                    {/* your stack part starts */}
                    <div className="card-body">
                        <h2 className="card-title">Card title!</h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Technologies;