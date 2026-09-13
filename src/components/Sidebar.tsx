import React from 'react';

const Sidebar = () => {
    return (
        <div className=" w-100 h-44">
            <div className="card bg-base-100 shadow-sm align-left align-top mr-20 ">
                <div className="card-body p-4">
                    <h2 className="card-title font-bold ">Your Stack</h2>
                    <p className="text-[#94A3B8]">No technologies selected yet.</p>
                    <div className="border border-dotted rounded-md border-[#E2E8F0] ">
                        <p className="text-[#94A3B8] align-middle flex justify-around items-center w-52 h-16">Your stack is empty.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;