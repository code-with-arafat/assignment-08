"use client";
import React from 'react';
import Coupon from './Coupon';
 

const OfferSection = () => {
    return (
        <section className="bg-slate-50 py-16 px-6 md:px-12 lg:px-24 my-12 rounded-3xl mx-4">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
                
                <div className="flex-1 text-center lg:text-left">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6">
                        বইয়ের জগতে আসুক <br /> 
                        <span className="text-purple-600">একটু বাড়তি আনন্দ!</span>
                    </h2>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                        আমাদের বিশেষ অফারে আপনার পছন্দের বইগুলো সংগ্রহ করুন আরও সাশ্রয়ে। 
                        নিচের কুপন কোডটি ব্যবহার করে প্রতিটি অর্ডারে নিশ্চিত ছাড় পান।
                    </p>
                    
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                        <button className="btn btn-primary px-8">এখনই কিনুন</button>
                        <button className="btn btn-outline">অফার ডিটেইলস</button>
                    </div>
                </div>

                {/* ডান পাশের কুপন কার্ড */}
                <div className="flex-1 w-full max-w-md">
                    <Coupon />
                </div>

            </div>
        </section>
    );
};

export default OfferSection;