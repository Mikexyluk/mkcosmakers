"use client";

import Link from "next/link";
import React from "react";

const Navbar = () => {
    return (
        <header className="w-full bg-white shadow z-50">
            {/* Main Menu */}
            <nav className="bg-pink-100 hidden md:block">
                 <div className="flex items-center justify-between px-4 py-2 max-w-7xl mx-auto">
                {/* Menu Mobile Icon */}
                <div className="md:hidden">
                    <button>
                        <h1>LOGO</h1>
                    </button>
                </div>

                <div className="flex-1 flex justify-center md:justify-start">
                    <Link href="/" className="block">
                        <h1>LOGO</h1>
                    </Link>
                </div>


                {/* Client Area Icons */}
                <div className="flex items-center gap-4 flex-1 justify-end">
                    {/* Login */}
                    <a href="/login" className="hidden md:block">
                        <h1>V</h1>
                    </a>
                    {/* Wishlist */}
                    <a href="/cliente/listadesejo" className="hidden md:block">
                       <h1>PIKA</h1>
                    </a>
                    {/* Cart */}
                    <a href="/compra/carrinho" className="relative hidden md:block">
                        <h1>FODA</h1>
                        <span className="absolute -top-1 -right-2 bg-pink-500 text-white text-xs rounded-full px-1">
                            0
                        </span>
                    </a>
                </div>
            </div>

                <ul className="flex justify-center gap-8 py-2 text-pink-900 font-semibold">
                    <li>
                        <a href="/categoria/makes" className="hover:text-pink-600">
                            Makes
                        </a>
                    </li>
                    <li>
                        <a href="/categoria/autocuidado" className="hover:text-pink-600">
                            Autocuidado
                        </a>
                    </li>
                    <li>
                        <a href="/categoria/130" className="hover:text-pink-600">
                            Novidades
                        </a>
                    </li>
                    <li>
                        <a href="/meluvibes" className="hover:text-pink-600" target="_blank" rel="noopener noreferrer">
                            Vibes
                        </a>
                    </li>
                    <li>
                        {/* PESQUISA */}
                <div className="hidden md:flex items-center flex-1 justify-center">
                    <form
                        action="/busca"
                        method="get"
                        className="flex items-center border rounded overflow-hidden"
                    >
                        <input
                            type="text"
                            name="s"
                            placeholder="Buscar produtos..."
                            className="px-3 py-2 outline-none"
                        />
                        <button type="submit" className="bg-pink-500 px-3 py-2">
                            <h1>PESQUISA</h1>
                        </button>
                    </form>
                </div>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
