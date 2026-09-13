import { use } from 'react';
import type { Itech } from '../../types/Itech';
import AvailableTechs from './AvailableTechs';

interface TechProps {
    techPromise: Promise<Itech[]>;
}

const Technologies = ({ techPromise }: TechProps) => {

    const technologies = use(techPromise);

    return (
        <div className="w-full">

           

            <div className="max-w-7xl mx-auto px-3 mt-28 mb-10">

                <p className="text-[36px] font-extrabold">
                    Explore the{" "}

                    <span className="text-[36px] font-extrabold bg-linear-to-r from-[#D81B7E] to-[#7C3AED] text-transparent bg-clip-text">
                        Technologies
                    </span>
                </p>

                <p className="text-[18px] text-[#475569]">
                    Pick one technology per category to build your ideal stack.
                </p>

            </div>


            <AvailableTechs
                technologies={technologies}
            />

        </div>
    );
};

export default Technologies;