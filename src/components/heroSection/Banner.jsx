import React from 'react';
import bannerImg from '../../assets/hero-bg.png'

const Banner = () => {
    return (
        <div 
            className="hero min-h-[500px] lg:min-h-[600px] flex items-center justify-center relative overflow-hidden"
            style={{
                backgroundImage: `url(${bannerImg.src})`, 
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            
            <div className="absolute inset-0 bg-black/30"></div>

            <div className="relative z-10 text-center text-white px-4">
                <h1 className="text-4xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
                    Unlock Your Reading Journey
                </h1>
                <p className="text-lg lg:text-xl mb-6 max-w-2xl mx-auto drop-shadow-md">
                    Explore a world of knowledge with Book Flow. Your ultimate destination for discovering and managing your favorite books.
                </p>
                <button className="btn btn-accent btn-lg">Get Started</button>
            </div>
        </div>
    );
};

export default Banner;