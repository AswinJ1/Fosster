'use client';
import { useEffect } from 'react';

export default function Navigation() {
  useEffect(() => {
    const toggle = document.getElementById('nav-toggle');
    const menu = document.getElementById('nav-menu');

    toggle?.addEventListener('click', () => {
      menu?.classList.toggle('hidden');
    });
  }, []);

  return (
    <nav className="bg-black text-white px-6 py-4 flex items-center justify-between flex-wrap">
      {/* Logo + Title */}
      <div className="flex items-center space-x-2">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQGrP3Myif8j1Nm_s9cQdJ-bsIOm772Uo9eQ&s"
          alt="amFOSS Logo"
          className="w-12 h-12 object-contain"
        />
        <span className="text-xl font-bold">FOSSter</span>
      </div>

      {/* Hamburger */}
      <div className="block md:hidden">
        <button id="nav-toggle" className="focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Links */}
      <div
        id="nav-menu"
        className="w-full md:flex md:items-center md:space-x-6 md:w-auto hidden mt-4 md:mt-0"
      >
        <a href="#agenda" className="block md:inline-block text-white hover:text-pink-400 py-2">
          Agenda
        </a>
        <a href="#speakers" className="block md:inline-block text-white hover:text-pink-400 py-2">
          Speakers
        </a>
        <a href="#team" className="block md:inline-block text-white hover:text-pink-400 py-2">
          Team
        </a>
        <a href="#workshop" className="block md:inline-block text-white hover:text-pink-400 py-2">
          Workshop
        </a>
        <a
          href="#register"
          className="block md:inline-block mt-2 md:mt-0 px-4 py-2 border border-white rounded-full hover:border-pink-400 transition"
        >
          Register →
        </a>
      </div>
    </nav>
  );
}
