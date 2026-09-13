
import type { Itech } from '../types/Itech';

interface SidebarProps {
    stack: Itech[];
    handleRemoveFromStack: (id: string) => void;
    handleRemoveAll: () => void;
}

const Sidebar = ({
    stack,
    handleRemoveFromStack,
    handleRemoveAll
}: SidebarProps) => {

    return (
        <div className="w-full">

            <div className="card bg-base-100 shadow-sm rounded-2xl">

                <div className="card-body p-4">

                  
                    <div>

                        <h2 className="card-title font-bold">
                            Your Stack
                        </h2>

                        <p className="text-sm text-[#94A3B8] mt-1">
                            {stack.length} Technology Selected
                        </p>

                    </div>


                  
                    {stack.length === 0 ? (

                        <>

                            <div className="border border-dotted rounded-md border-[#E2E8F0] mt-4">

                                <p className="text-[#94A3B8] flex justify-center items-center h-16">
                                    Your stack is empty.
                                </p>

                            </div>

                        </>

                    ) : (

                        <>

                          
                            <div className="mt-4 space-y-3">

                                {stack.map((technology) => (

                                    <div
                                        key={technology.id}
                                        className="border border-[#E2E8F0] rounded-lg p-3 flex items-center justify-between"
                                    >

                                        <div className="flex items-center gap-3">

                                            <img
                                                src={technology.icon}
                                                alt={technology.name}
                                                className="w-7 h-7"
                                            />

                                            <div>

                                                <p className="font-semibold text-sm">
                                                    {technology.name}
                                                </p>

                                                <p className="text-xs text-[#94A3B8]">
                                                    {technology.category}
                                                </p>

                                            </div>

                                        </div>


                                        {/* Remove one */}
                                        <button
                                            onClick={() =>
                                                handleRemoveFromStack(technology.id)
                                            }
                                            className="text-[#94A3B8] text-lg font-bold"
                                        >
                                            ✕
                                        </button>

                                    </div>

                                ))}

                            </div>


                        
                            <button
                                onClick={handleRemoveAll}
                                className="btn btn-outline w-full mt-4 rounded-lg"
                            >
                                Remove All
                            </button>

                        </>

                    )}

                </div>

            </div>

        </div>
    );
};

export default Sidebar;