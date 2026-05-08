import React from 'react';
import Marquee from "react-fast-marquee";

const MarqueeLine = () => {
    return (
        <div>
            <div className="bg-red-100 flex">
                <div className="bg-red-400">
                    <h2 className='text-2xl text-white p-2'>New Arrivals:  </h2>
                </div>
                <div className='flex-3 text-center'>
                    <Marquee className='text-center text-2xl'>The Silent Patient | The Midnight Library | Atomic Habits | Special Discount on Memberships..</Marquee>
                </div>
            </div>
        </div>
    );
};

export default MarqueeLine;