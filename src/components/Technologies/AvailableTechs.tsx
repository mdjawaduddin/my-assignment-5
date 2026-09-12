import React from 'react';
import type { Itech } from '../../types/Itech';
import { GoStarFill } from 'react-icons/go';

const AvailableTechs = ({ technologies }) => {

    return <div className=" grid grid-cols-3 gap-4 max-w-7xl  mx-auto my-4"> {
        technologies.map((technology: Itech) => {
            return <div className=" ">
                <div className="card bg-base-100 w-92  shadow-sm  rounded-2xl  p-5 ">
                    <figure className="justify-between p-3">
                        <img className="w-7 h-7 mx-3"
                            src={technology.icon} />
                        <div className="badge badge-secondary">{technology.badge}</div>
                    </figure>
                    <div className="card-body justify-between">
                        <h2 className="card-title">
                            {technology.name}

                        </h2>
                        <p>{technology.description}</p>
                        <div className="divider"></div>
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline bg-[#F1F5F9]">{technology.category}</div>
                            <div >{technology.difficulty}</div>
                            <div className="flex justify-around items-center"> <GoStarFill color="yellow" />
                                {technology.rating}</div>
                        </div>
                        <div className="card-actions justify-centre mt-2">
                            <button className="btn btn-wide bg-[#0A0F1D] text-white w-full h-9 rounded-lg">Add to Stack</button>
                        </div>

                    </div>
                </div>
            </div>
        })
    }
    </div>;

};

export default AvailableTechs;