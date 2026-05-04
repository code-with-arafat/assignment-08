"use client";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); // বর্তমানে লগইন থাকা ইউজার
    const [registeredUser, setRegisteredUser] = useState(null); // রেজিস্ট্রেশন করা ডেটা

    const register = (userData) => setRegisteredUser(userData);
    const login = (userData) => setUser(userData);
    const logout = () => setUser(null);

    return (
        <AuthContext.Provider value={{ user, registeredUser, register, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);