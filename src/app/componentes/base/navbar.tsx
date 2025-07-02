"use client";

import { Calendar, CircleUserRound, Heart, Menu } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <>
            {/* Top Banner */}
            <div className="bg-white shadow w-full z-50">
                <div className="bg-white font-bold w-full flex justify-center items-center text-center py-1">
                    <h1 className="text-pink-400 text-sm tracking-wide">Site em andamento</h1>
                </div>
            </div>

            {/* Desktop Navbar */}
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
                            <span className="text-pink-400 group-hover:text-pink-600 transition-colors">
                                <Heart />
                            </span>
                        </Link>
                        {/* Cart */}
                        <Link href="/agenda" className="relative group">
                            <span className="text-pink-400 group-hover:text-pink-600 transition-colors">
                                <Calendar />
                            </span>
                        </Link>
                        {/* Login */}
                        <Link href="/login" className="flex items-center gap-1 text-pink-500 hover:text-pink-700 font-semibold transition-colors">
                            <span>
                                <CircleUserRound />
                            </span>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Mobile Navbar */}
            <nav className="bg-pink-100 md:hidden shadow-md">
                <div className="flex items-center justify-between px-4 py-3">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <span className="text-pink-500 font-extrabold text-xl">SabrinaNails</span>
                    </Link>
                    {/* Hamburger */}
                    <button
                        className="text-pink-500 focus:outline-none"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Abrir menu"
                    >
                        <Menu size={28} />
                    </button>
                </div>
                {/* Mobile Menu */}
                {mobileOpen && (
                    <div className="bg-pink-50 px-4 pb-4">
                        <ul className="flex flex-col gap-4 text-pink-900 font-semibold text-base">
                            <li>
                                <Link href="/categoria/workshops" className="hover:text-pink-600 transition-colors" onClick={() => setMobileOpen(false)}>
                                    WorkShops
                                </Link>
                            </li>
                            <li>
                                <Link href="/categoria/cuidado" className="hover:text-pink-600 transition-colors" onClick={() => setMobileOpen(false)}>
                                    Cuidados
                                </Link>
                            </li>
                            <li>
                                <Link href="/categoria/Novidades" className="hover:text-pink-600 transition-colors" onClick={() => setMobileOpen(false)}>
                                    Novidades
                                </Link>
                            </li>
                            <li>
                                <Link href="/Portifolio" className="hover:text-pink-600 transition-colors" target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)}>
                                    Portifolio
                                </Link>
                            </li>
                        </ul>
                        <div className="flex items-center gap-6 mt-4">
                            <Link href="/favoritos" className="text-pink-400 hover:text-pink-600 transition-colors" onClick={() => setMobileOpen(false)}>
                                <Heart />
                            </Link>
                            <Link href="/agenda" className="text-pink-400 hover:text-pink-600 transition-colors" onClick={() => setMobileOpen(false)}>
                                <Calendar />
                            </Link>
                            <Link href="/login" className="text-pink-500 hover:text-pink-700 transition-colors" onClick={() => setMobileOpen(false)}>
                                <CircleUserRound />
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
};

export default Navbar;
