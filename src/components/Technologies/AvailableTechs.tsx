
import type { Itech } from '../../types/Itech';
import TechCard from '../TechCard';
import Sidebar from '../Sidebar';
import { toast } from 'react-toastify';
import { useState } from 'react';

interface AvailableTechsProps {
    technologies: Itech[];
}

const AvailableTechs = ({
    technologies
}: AvailableTechsProps) => {

    const [stack, setStack] = useState<Itech[]>([]);



    const handleAddToStack = (tech: Itech) => {

        const isAlreadyAdded = stack.some(
            (item) => item.id === tech.id
        );

        if (isAlreadyAdded) {
            toast.warning("Already added!");
            return;
        }

        setStack((previousStack) => [
            ...previousStack,
            tech
        ]);

        toast.success("Technology added!");
    };



    const handleRemoveFromStack = (id: string) => {

        setStack((previousStack) =>
            previousStack.filter(
                (item) => item.id !== id
            )
        );

        toast.info("Technology removed!");
    };



    const handleRemoveAll = () => {

        setStack([]);

        toast.error("All technologies removed!");
    };


    return (
        <div className="w-full">



            <div className="max-w-7xl mx-auto px-4">

                <div className="grid grid-cols-12 gap-4">



                    <div className="col-span-12 lg:col-span-9">

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                            {technologies.map((technology) => {

                                const isAdded = stack.some(
                                    (item) => item.id === technology.id
                                );

                                return (
                                    <TechCard
                                        key={technology.id}
                                        technology={technology}
                                        isAdded={isAdded}
                                        handleAddToStack={handleAddToStack}
                                    />
                                );

                            })}

                        </div>

                    </div>




                    <div className="col-span-12 lg:col-span-3">

                        <Sidebar
                            stack={stack}
                            handleRemoveFromStack={handleRemoveFromStack}
                            handleRemoveAll={handleRemoveAll}
                        />

                    </div>

                </div>

            </div>

        </div>
    );
};

export default AvailableTechs;