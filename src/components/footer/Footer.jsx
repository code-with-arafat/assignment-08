"use client";

import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 px-6 mt-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                
                {/* ১. ব্র্যান্ড এবং প্রজেক্টের লক্ষ্য */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-white tracking-tight">
                        Book <span className="text-purple-500">Flow</span>
                    </h2>
                    <p className="text-sm leading-relaxed opacity-80">
                        আপনার পছন্দের বই খুঁজে পাওয়া এখন আরও সহজ। আমরা বিশ্বাস করি বই মানুষের চিন্তার জগতকে প্রসারিত করে। বুক ফ্লো-র সাথে আপনার পড়ার অভিজ্ঞতা হোক আরও মসৃণ।
                    </p>
                </div>

                {/* ২. বইয়ের ক্যাটাগরি (বুক ফ্লো স্পেশাল) */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-6">Explore Genres</h3>
                    <ul className="space-y-3 text-sm">
                        <li><a href="#" className="hover:text-purple-400 transition-colors">Fiction & Fantasy</a></li>
                        <li><a href="#" className="hover:text-purple-400 transition-colors">History & Biography</a></li>
                        <li><a href="#" className="hover:text-purple-400 transition-colors">Science & Technology</a></li>
                        <li><a href="#" className="hover:text-purple-400 transition-colors">Mystery & Thriller</a></li>
                    </ul>
                </div>

                {/* ৩. কন্টাক্ট এবং লোকেশন (রাজশাহী ভিত্তিক) */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-6">Visit Us</h3>
                    <ul className="space-y-4 text-sm">
                        <li className="flex items-center gap-3">
                            <FaMapMarkerAlt className="text-purple-500" />
                            <span>Rajshahi, Bangladesh</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <FaPhoneAlt className="text-purple-500" />
                            <span>+880 1747178369</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <FaEnvelope className="text-purple-500" />
                            <span>info@bookflow.com</span>
                        </li>
                    </ul>
                </div>

                
                <div>
                    <h3 className="text-lg font-semibold text-white mb-6">Stay Connected</h3>
                    <p className="text-xs mb-4 opacity-70 italic">নতুন বইয়ের আপডেট পেতে সাবস্ক্রাইব করুন।</p>
                    <div className="flex gap-4 text-2xl mb-6">
                        <a href="https://www.facebook.com/arafatalways" className="hover:text-blue-500 transition-all"><FaFacebook /></a>
                        <a href="https://github.com/code-with-arafat" className="hover:text-white transition-all"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/arafat-always/" className="hover:text-blue-400 transition-all"><FaLinkedin /></a>
                        <a href="https://www.instagram.com/arafat_always/" className="hover:text-pink-500 transition-all"><FaInstagram /></a>
                    </div>
                    
                    <div className="flex">
                        <input 
                            type="text" 
                            placeholder="Email" 
                            className="bg-slate-800 border-none px-3 py-2 text-sm rounded-l-md focus:ring-1 focus:ring-purple-500 w-full outline-none"
                        />
                        <button className="bg-purple-600 text-white px-3 py-2 rounded-r-md text-xs font-bold hover:bg-purple-700">Join</button>
                    </div>
                </div>
            </div>

            <div className="border-t border-slate-800 mt-16 pt-8 text-center text-xs opacity-50">
                <p>© {new Date().getFullYear()} Book Flow | Crafted by Arafat Codes</p>
            </div>
        </footer>
    );
};

export default Footer;