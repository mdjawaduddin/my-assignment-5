import React from 'react';
import type { Itech } from '../../types/Itech';
import TechCard from '../TechCard';
import Sidebar from '../Sidebar';

const AvailableTechs = ({ technologies }) => {

    return (
        <div className=" grid grid-cols-12 gap-x-0.5 max-w-8xl container mx-auto my-4">
            <div className="grid grid-cols-3 gap-x-0 col-span-10 gap-2 pl-10  ml-16 mt-2"> {
                technologies.map((technology: Itech, ind: number) => {
                    return <TechCard key={ind} technology={technology} />;
                })} </div>
            <div className='col-span-2 p-4 mt-6' ><Sidebar/>
            </div>


        </div>
    )

};

export default AvailableTechs;