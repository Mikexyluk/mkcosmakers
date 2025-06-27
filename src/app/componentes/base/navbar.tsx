"use client";


import { Calendar, CircleUserRound, Heart } from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
    return (
        <>
            {/* Top Banner */}
            <div className="bg-white shadow w-full z-50">
                <div className="bg-white font-bold w-full flex justify-center items-center text-center py-1">
                    <h1 className="text-pink-400 text-sm tracking-wide">Site em andamento</h1>
                </div>
            </div>

            {/* Navbar */}
            <nav className="bg-pink-100 hidden md:block shadow-md">
                <div className="flex items-center justify-between px-8 py-3 max-w-7xl mx-auto">
                    {/* Left: Logo or Home */}
                    <Link href="/" className="flex items-center gap-2">
                        <span className="text-pink-500 font-extrabold text-xl">SabrinaNails</span>
                    </Link>

                    {/* Center: Menu */}
                    <ul className="flex gap-8 text-pink-900 font-semibold text-base">
                        <li>
                            <Link href="/categoria/workshops" className="hover:text-pink-600 transition-colors">WorkShops</Link>
                        </li>
                        <li>
                            <Link href="/categoria/cuidado" className="hover:text-pink-600 transition-colors">Cuidados</Link>
                        </li>
                        <li>
                            <Link href="/categoria/Novidades" className="hover:text-pink-600 transition-colors">Novidades</Link>
                        </li>
                        <li>
                            <Link href="/Portifolio" className="hover:text-pink-600 transition-colors" target="_blank" rel="noopener noreferrer">Portifolio</Link>
                        </li>
                    </ul>

                    {/* Right: Actions */}
                    <div className="flex items-center gap-6">
                        {/* Wishlist */}
                        <Link href="/favoritos" className="relative group">
                            <span className="material-icons text-pink-400 group-hover:text-pink-600 transition-colors">
                              <Heart />
                            </span>
                        </Link>
                        {/* Cart */}
                        <Link href="/agenda" className="relative group">
                            <span className="material-icons text-pink-400 group-hover:text-pink-600 transition-colors">
                                <Calendar />
                            </span>
                        </Link>
                        {/* Login */}
                        <Link href="/login" className="flex items-center gap-1 text-pink-500 hover:text-pink-700 font-semibold transition-colors">
                            <span className="material-icons">
                                <CircleUserRound />
                            </span>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
