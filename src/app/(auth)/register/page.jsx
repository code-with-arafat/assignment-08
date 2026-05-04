"use client";
import React from 'react';
import Link from 'next/link';

const RegisterPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 py-12 px-4">
            <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-slate-800">Create Account</h2>
                    <p className="text-slate-500 mt-2">বুক ফ্লো-তে যোগ দিতে ফর্মটি পূরণ করুন</p>
                </div>

                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                        <input type="text" placeholder="Arafat Ferdous" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-purple-500 outline-none transition-all" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                        <input type="email" placeholder="example@mail.com" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-purple-500 outline-none transition-all" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Photo URL</label>
                        <input type="text" placeholder="https://image-link.com" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-purple-500 outline-none transition-all" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
                        <input type="password" placeholder="••••••••" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-purple-500 outline-none transition-all" required />
                    </div>
                    
                    <div className="flex items-start gap-2 py-2">
                        <input type="checkbox" className="mt-1" id="terms" required />
                        <label htmlFor="terms" className="text-xs text-slate-500">আমি বুক ফ্লো-র সকল শর্তাবলী এবং গোপনীয়তা নীতি মেনে নিচ্ছি।</label>
                    </div>

                    <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg transition-colors shadow-lg">
                        Register
                    </button>
                </form>

                <p className="text-center mt-8 text-sm text-slate-600">
                    ইতিমধ্যেই অ্যাকাউন্ট আছে? <Link href="/login" className="text-purple-600 font-bold hover:underline">লগইন করুন</Link>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;