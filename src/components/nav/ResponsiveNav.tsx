'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import DevProfile from '@/components/vincmp/Profile';
import { HomeIcon } from '@/components/nav/icons/HomeIcon';
import { AboutIcon } from '@/components/nav/icons/AboutIcon';
import { ProjectsIcon } from '@/components/nav/icons/ProjectsIcon';
import { TechIcon } from '@/components/nav/icons/TechIcon';
import { ContactIcon } from '@/components/nav/icons/ContactIcon';

export default function ResponsiveNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = (
    <>
      <a
        href="/"
        className={`nav-items lg:p-6 flex items-center gap-3 ${
          pathname === '/' ? 'active' : ''
        }`}
      >
        <HomeIcon isActive={pathname === '/'} />
        Início
      </a>
      <a
        href="sobre"
        className={`nav-items lg:p-6 flex items-center gap-3 ${
          pathname === '/sobre' ? 'active' : ''
        }`}
      >
        <AboutIcon isActive={pathname === '/sobre'} />
        Sobre
      </a>
      <a
        href="/projetos"
        className={`nav-items lg:p-6 flex items-center gap-3 ${
          pathname === '/projetos' ? 'active' : ''
        }`}
      >
        <ProjectsIcon isActive={pathname === '/projetos'} />
        Projetos
      </a>
      <a
        href="/tecnologias"
        className={`nav-items lg:p-6 flex items-center gap-3 ${
          pathname === '/tecnologias' ? 'active' : ''
        }`}
      >
        <TechIcon isActive={pathname === '/tecnologias'} />
        Tecnologias
      </a>
      <a
        href="/contato"
        className={`nav-items lg:p-6 flex items-center gap-3 ${
          pathname === '/contato' ? 'active' : ''
        }`}
      >
        <ContactIcon isActive={pathname === '/contato'} />
        Contato
      </a>
    </>
  );

  return (
    <>
      {/* Mobile Navbar (top) */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-white z-50 flex items-center justify-between px-4 py-2">
        <div className="scale-[0.85] origin-left mb-1">
          <DevProfile />
          <div className="mt-1"></div>
        </div>
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
        <div className="lg:hidden fixed top-14 left-0 right-0 bg-white z-40 flex flex-col items-start space-y-4 p-4">
          <div className="w-full border-b-2 border-[#E6E6E6] mb-4" />
          {navLinks}
          <div className="w-full border-b-2 border-[#E6E6E6] mb-4" />
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex lg:flex-col lg:fixed lg:top-0 lg:left-0 lg:h-full lg:w-80 bg-white border-r border-gray-200 p-6 z-40">
        <div className="mt-6">
          <DevProfile />
          <div className="border-b-2 border-[#E6E6E6] mt-12"></div>
        </div>
        <nav className="flex flex-col mt-6">{navLinks}</nav>
      </aside>
    </>
  );
}
