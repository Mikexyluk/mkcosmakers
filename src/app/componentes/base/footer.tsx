/* eslint-disable @next/next/no-img-element */
import React from "react";

const socialLinks = [
    {
        id: "facebook",
        href: "https://www.facebook.com/people/Sabrina-Pereira-Nail-designer/61560051265172/",
        img: "https://www.melumaquiagem.com.br/stores/790/static/img/footericons/facebook.svg",
        alt: "ícone do facebook",
        label: "entra no facebook",
    },
    {
        id: "instagram",
        href: "https://www.instagram.com/sabrinapereiranaildesigner_/",
        img: "https://www.melumaquiagem.com.br/stores/790/static/img/footericons/instagram.svg",
        alt: "ícone do instagram",
        label: "entra no instagram",
    },
    {
        id: "Whatsapp",
        href:"https://wa.me/5512382032094",
        img: "https://img.icons8.com/ios_filled/512/F25081/whatsapp.png",
        alt: "ícone do Whatsapp",
        label: "entra no whatsApp",
    },
];

const aboutLinks = [
    {
        label: "Sobre nós",
        href: "https://www.facebook.com/people/Sabrina-Pereira-Nail-designer/61560051265172/",
    },
    {
        label: "Política de Privacidade",
        href: "https://www.canva.com/design/DAGbyaTxAFM/yAP4qRSJyAPABUftIaW9QQ/view?utm_content=DAGbyaTxAFM&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hb3abb7b8d2",
    },
    {
        label: "Termos de Uso",
        href: "https://www.canva.com/design/DAGb7JshQe0/yW2UhzBcPBPjj2hNPHj-ZA/view?utm_content=DAGb7JshQe0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hc8cb9bc178",
    },
    {
        label: "FAQ",
        href: "https://www.instagram.com/sabrinapereiranaildesigner_/",
    }
];

const infoLinks = [
    {
        label: "Dados pessoais",
        href: "https://www.facebook.com/people/Sabrina-Pereira-Nail-designer/61560051265172/",
    },
    {
        label: "Meus favoritos",
        href: "https://www.instagram.com/sabrinapereiranaildesigner_/",
    },
    {
        label: "Alterar cadastro",
        href: "https://www.canva.com/design/DAGb7JshQe0/yW2UhzBcPBPjj2hNPHj-ZA/view?utm_content=DAGb7JshQe0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hc8cb9bc178",
    },
];

const Footer: React.FC = () => {
    return (
        <footer className="bg-gradient-to-tr from-pink-100 via-pink-200 to-pink-50 border-t border-pink-300 text-pink-900 text-sm shadow-lg">
            <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row gap-10 md:gap-6">

                {/* MOBILE */}
                <section className="block md:hidden w-full md:w-auto">
                    <div className="mb-4 font-extrabold text-xl text-pink-700">
                        Ei, Mulher!
                        <span className="block font-normal text-base mt-1 text-pink-600">
                            Que tal transformar seu visual hoje? Agende já suas unhas e sinta-se ainda mais poderosa!
                        </span>
                    </div>
                    <NewsletterForm />
                </section>

                {/* Contato (mobile) */}
                <div className="block md:hidden w-full md:w-auto">
                    <ContactBlock />
                </div>

                {/* Sobre nós (mobile) */}
                <section className="block md:hidden w-full md:w-auto">
                    <h3 className="font-bold mb-2 text-pink-700">Sobre nós</h3>
                    <ul>
                        {aboutLinks.map((link) => (
                            <li key={link.href}> 

                                <a
                                    className="flex items-center py-1 hover:text-pink-600 transition"
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span>{link.label}</span>
                                    <i className="fa fa-caret-right ml-2" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Sobre nós (desktop) */}
                <section className="hidden md:block w-48">
                    <h3 className="font-bold mb-2 text-pink-700">Sobre nós</h3>
                    <ul>
                        {aboutLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    className="flex items-center py-1 hover:text-pink-600 transition"
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span>{link.label}</span>
                                    <i className="fa fa-caret-right ml-2" />
                                </a>
                            </li>
                        ))}
                    </ul>
                    {/* Selo (desktop) */}
                    <div className="mt-6">
                        <a href="#" aria-label="Selo" className="inline-block">
                            <span className="bg-pink-200 rounded-full px-4 py-2 font-bold text-pink-700 shadow">
                                <span className="flex items-center gap-2">
                                    <span className="text-2xl font-extrabold text-pink-600">SP</span>
                                    <span className="text-lg font-bold text-pink-500">NailDesigner</span>
                                </span>
                            </span>
                        </a>
                    </div>
                </section>

                {/* Categorias */}
                <section className="w-full md:w-64">
                    <h3 className="font-bold mb-2 text-pink-700">Categorias</h3>
                    <ul>
                        <li>
                            <a
                                href="/categoria/workshops"
                                className="hover:text-pink-600 transition"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                WorkShops
                            </a>
                        </li>
                        <li>
                            <a
                                href="/categoria/cuidado"
                                className="hover:text-pink-600 transition"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Cuidados
                            </a>
                        </li>
                        <li>
                            <a
                                href="/categoria/Novidades"
                                className="hover:text-pink-600 transition"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Novidades
                            </a>
                        </li>
                    </ul>
                </section>

                {/* Minha conta */}
                <section className="w-full md:w-48">
                    <h3 className="font-bold mb-2 text-pink-700">Minha conta</h3>
                    <ul>
                        {infoLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    className="py-1 hover:text-pink-600 transition"
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    {/* Contato (desktop) */}
                    <div className="hidden md:block mt-6">
                        <ContactBlock />
                    </div>
                </section>

                {/* Newsletter (desktop) */}
                <section className="hidden md:block w-80">
                    <div className="mb-4 font-extrabold text-xl text-pink-700">
                        Ei, Mulher!
                        <span className="block font-normal text-base mt-1 text-pink-600">
                          Que tal transformar seu visual hoje? Agende já suas unhas e sinta-se ainda mais poderosa!
                        </span>
                    </div>
                    <div className="mt-4">
                        <span className="block mb-2 font-bold text-pink-700">Chame po qualquer Rede Social</span>
                        <div className="flex gap-3">
                            {socialLinks.map((s) => (
                                <a
                                    key={s.id}
                                    id={s.id}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={s.label}
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-lg hover:bg-pink-100 transition"
                                >
                                    <img
                                    src={s.img} 
                                    alt={s.alt} 
                                    className="w-6 h-6" />
                                </a>
                            ))}
                        </div>
                    </div>
                </section>
            </div>

            {/* Selo e redes sociais (mobile) */}
            <div className="block md:hidden px-4 pb-8">
                <div className="flex items-center gap-4 mb-4">
                    <a href="#" aria-label="Selo" className="inline-block">
                        <span className="bg-pink-200 rounded-full px-4 py-2 font-bold text-pink-700 shadow">
                            <span className="text-2xl font-extrabold text-pink-600">SP</span>
                                    <span className="text-lg font-bold text-pink-500">NailDesigner</span>
                        </span>
                    </a>
                </div>
                <div>
                    <span className="block mb-2 font-bold text-pink-700">Siga nossas redes</span>
                    <div className="flex gap-3">
                        {socialLinks.map((s) => (
                            <a
                                key={s.id}
                                id={s.id}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={s.label}
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-lg hover:bg-pink-100 transition"
                            >
                                <img src={s.img} alt={s.alt} className="w-6 h-6" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

function NewsletterForm() {
    return (
        <form
            className="flex flex-col sm:flex-row gap-2"
            action="https://www.melumaquiagem.com.br/ajax/newsletter.php"
            method="POST"
        >
            <input type="hidden" name="act" value="cadastrar" />
            <input
                type="text"
                name="nome"
                placeholder="nome"
                className="border border-pink-300 rounded-lg px-3 py-2 w-full sm:w-1/3 focus:outline-none focus:ring-2 focus:ring-pink-200 bg-white shadow"
                required
            />
            <input
                type="email"
                name="email"
                placeholder="deixe seu email aqui"
                className="border border-pink-300 rounded-lg px-3 py-2 w-full sm:w-1/2 focus:outline-none focus:ring-2 focus:ring-pink-200 bg-white shadow"
                required
            />
            <button
                type="submit"
                className="bg-gradient-to-r from-pink-400 to-pink-600 text-white rounded-lg px-4 py-2 font-bold shadow hover:from-pink-500 hover:to-pink-700 transition"
            >
                Cadastrar
            </button>
        </form>
    );
}

function ContactBlock() {
    return (
        <div className="flex flex-col gap-2 bg-pink-100 rounded-lg p-4 shadow">
            <div className="flex items-center gap-2 font-bold text-pink-700">
                <i className="fa fa-phone text-pink-400" />
                Entre em Contato
            </div>
            <div className="flex items-center gap-2">
                <a
                    href="https://wa.me/12382032094"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700"
                >
                    <i className="fa fa-whatsapp text-lg" />
                </a>
                <span>
                    <a
                        href="https://wa.me/12382032094"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-pink-600"
                    >
                        12 38203-2094
                    </a>
                </span>
            </div>
            <span>
                <a
                    href="/."
                    className="hover:text-pink-600"
                >
                    email@email.com.br
                </a>
            </span>
        </div>
    );
}

export default Footer;