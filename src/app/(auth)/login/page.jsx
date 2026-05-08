"use client";
import React from 'react';
import Link from 'next/link';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { useForm, SubmitHandler } from "react-hook-form"
import { authClient } from '@/lib/auth-client';

const LoginPage = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()


    const logInSubmitHandler = async (data) => {
        const { email, password } = data
        console.log(data);

        const { data: res, error } = await authClient.signIn.email({
            email: email,
            password: password,
            rememberMe: true,
            callbackURL: "/",
        });

    }

    //Social Login
    const googleLogin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    }

    const gitHubLogin = async () => {
        const data = await authClient.signIn.social({
            provider: "github",
        });
    }




    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 py-12 px-4">
            <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-slate-800">Welcome Back</h2>
                    <p className="text-slate-500 mt-2">আপনার অ্যাকাউন্টে লগইন করুন</p>
                </div>

                <form className="space-y-5" onSubmit={handleSubmit(logInSubmitHandler)}>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                        <input type="email" placeholder="example@mail.com" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-purple-500 outline-none transition-all"
                            {...register("email", { required: "Email field is required" })}
                        />
                        {errors.email && <p className='text-red-400'>{errors.email.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
                        <input type="password" placeholder="••••••••" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-purple-500 outline-none transition-all"
                            {...register("password", { required: "Password field is required" })}
                        />
                        {errors.password && <p>{errors.password.message}</p>}
                    </div>

                    <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg transition-colors shadow-lg shadow-purple-200">
                        Login
                    </button>
                </form>

                <div className="mt-6">
                    <div className="relative flex items-center justify-center mb-6">
                        <span className="absolute bg-white px-3 text-xs text-slate-400 uppercase">Or continue with</span>
                        <div className="w-full border-t border-slate-200"></div>
                    </div>

                    <div className="flex gap-4">
                        <button className="flex-1 flex items-center justify-center gap-2 border border-slate-200 py-2 rounded-lg hover:bg-slate-50 transition-colors" onClick={googleLogin}>
                            <FaGoogle className="text-red-500" /> Google
                        </button>
                        <button className="flex-1 flex items-center justify-center gap-2 border border-slate-200 py-2 rounded-lg hover:bg-slate-50 transition-colors" onClick={gitHubLogin}>
                            <FaGithub /> GitHub
                        </button>
                    </div>
                </div>

                <p className="text-center mt-8 text-sm text-slate-600">
                    অ্যাকাউন্ট নেই? <Link href="/register" className="text-purple-600 font-bold hover:underline">রেজিস্ট্রেশন করুন</Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;