"use client";

import { useState } from "react";

export default function ResponsiveNav() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = (
    <>
      <a href="#" className="hover:text-blue-500 transition">
        Home
      </a>
      <a href="#" className="hover:text-blue-500 transition">
        Sobre
      </a>
      <a href="#" className="hover:text-blue-500 transition">
        Projetos
      </a>
      <a href="#" className="hover:text-blue-500 transition">
        Contato
      </a>
    </>
  );

  return (
    <>
      {/* Mobile Navbar (top) */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-white shadow-md z-50 flex items-center justify-between px-4 py-3">
        <div className="text-xl font-bold">Logo</div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none"
        >
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu (dropdown) */}
      {isOpen && (
        <div className="lg:hidden fixed top-14 left-0 right-0 bg-white shadow-md z-40 flex flex-col items-start space-y-4 p-4">
          {navLinks}
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex lg:flex-col lg:fixed lg:top-0 lg:left-0 lg:h-full lg:w-64 bg-white shadow-lg p-6 z-40">
        <h2 className="text-2xl font-bold mb-6">Menu</h2>
        <nav className="flex flex-col space-y-4">{navLinks}</nav>
      </aside>
    </>
  );
}
