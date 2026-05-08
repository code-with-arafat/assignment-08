"use client";
import React from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { authClient } from '@/lib/auth-client';

const RegisterPage = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const registerSubmitHandler = async (data) => {
        const {name,email,password,photo} = data
        console.log(data);

        const {data: res,error} = await authClient.signUp.email({
            name: name,
            email: email,
            password: password,
            image: photo,
            callbackURL: "/"
        })

        console.log(res,error);
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 py-12 px-4">
            <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-slate-800">Create Account</h2>
                    <p className="text-slate-500 mt-2">বুক ফ্লো-তে যোগ দিতে ফর্মটি পূরণ করুন</p>
                </div>

                <form className="space-y-4" onSubmit={handleSubmit(registerSubmitHandler)}>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                        <input type="text" placeholder="Arafat Ferdous" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-purple-500 outline-none transition-all"
                            {...register("name", { required: "Name field is required" })}
                        />
                        {errors.name && <p className='text-red-400'>{errors.name.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                        <input type="email" placeholder="example@mail.com" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-purple-500 outline-none transition-all"
                            {...register("email", { required: "Email field is required" })}
                        />
                        {errors.email && <p className='text-red-400'>{errors.email.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Photo URL</label>
                        <input type="text" placeholder="https://image-link.com" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-purple-500 outline-none transition-all"
                            {...register("photo", { required: "Photo url field is required" })}
                        />
                        {errors.photo && <p className='text-red-400'>{errors.photo.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
                        <input type="password" placeholder="••••••••" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-purple-500 outline-none transition-all"
                            {...register("password", { required: "Password field is required" })}
                        />
                        {errors.password && <p className='text-red-400'>{errors.password.message}</p>}
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