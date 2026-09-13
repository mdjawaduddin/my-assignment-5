import type { Itech } from '../types/Itech';
import { GoStarFill } from 'react-icons/go';
import { FaCheck } from 'react-icons/fa';

interface TechCardProps {
    technology: Itech;
    isAdded: boolean;
    handleAddToStack: (technology: Itech) => void;
}

const TechCard = ({
    technology,
    isAdded,
    handleAddToStack
}: TechCardProps) => {

    return (
        <div>

            <div className="card bg-base-100 w-full shadow-sm rounded-2xl p-5">

                <figure className="justify-between p-3">

                    <img
                        className="w-7 h-7 mx-3"
                        src={technology.icon}
                        alt={technology.name}
                    />

                    <div className="badge badge-secondary">
                        {technology.badge}
                    </div>

                </figure>

                <div className="card-body justify-between">

                    <h2 className="card-title">
                        {technology.name}
                    </h2>

                    <p>
                        {technology.description}
                    </p>

                    <div className="divider"></div>

                    <div className="card-actions justify-between flex items-center">

                        <div className="badge badge-outline bg-[#F1F5F9] border-[#F1F5F9]">
                            {technology.category}
                        </div>

                        <div>
                            {technology.difficulty}
                        </div>

                        <div className="flex justify-around items-center gap-1">

                            <GoStarFill color="yellow" />

                            {technology.rating}

                        </div>

                    </div>

                    <div className="card-actions justify-center mt-2">

                        <button
                            onClick={() => handleAddToStack(technology)}
                            className={`btn btn-wide w-full h-9 rounded-lg ${
                                isAdded
                                    ? "bg-[#E2E8F0] text-[#64748B]"
                                    : "bg-[#0A0F1D] text-white"
                            }`}
                            disabled={isAdded}
                        >

                            {isAdded ? (

                                <span className="flex items-center justify-center gap-2">
                                    <FaCheck className="text-sm" />
                                    Added to Stack
                                </span>

                            ) : (

                                "Add to Stack"

                            )}

                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default TechCard;