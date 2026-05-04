"use client";
import React from 'react';

const Coupon = () => {
    return (
        <div className="flex bg-gradient-to-br from-purple-600 to-blue-500 text-white rounded-xl overflow-hidden shadow-lg max-w-md mx-auto my-8">
            
            <div className="p-6 flex flex-col justify-center items-center border-r-2 border-dashed border-white/30 bg-white/10">
                <h3 className="text-4xl font-extrabold">20%</h3>
                <p className="text-sm font-medium uppercase tracking-wider">OFF</p>
            </div>

            <div className="p-6 flex-1 relative">
                <h4 className="text-xl font-bold mb-1">ঈদ স্পেশাল অফার!</h4>
                <p className="text-sm opacity-90 mb-4">আপনার পছন্দের বই কিনুন ২০% ছাড়ে।</p>
                
                <div className="flex items-center gap-2">
                    <span className="bg-white text-purple-700 px-3 py-1 rounded-md font-mono font-bold text-lg">
                        BOOK2026
                    </span>
                    <button 
                        className="text-xs underline hover:text-yellow-300 transition-colors"
                        onClick={() => navigator.clipboard.writeText('BOOK2026')}
                    >
                        Copy
                    </button>
                </div>
                
                {/* কুপনের সেই চেনা খাঁজ (Notches) */}
                <div className="absolute -top-3 -left-3 w-6 h-6 bg-base-100 rounded-full"></div>
                <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-base-100 rounded-full"></div>
            </div>
        </div>
    );
};

export default Coupon;