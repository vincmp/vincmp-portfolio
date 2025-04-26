"use client";

import { HomeIcon } from "@/components/NavbarLayout/NavBarIcons/HomeIcon";
import { AboutIcon } from "@/components/NavbarLayout/NavBarIcons/AboutIcon";
import { ProjectsIcon } from "@/components/NavbarLayout/NavBarIcons/ProjectsIcon";
import { TechIcon } from "@/components/NavbarLayout/NavBarIcons/TechIcon";
import { ContactIcon } from "@/components/NavbarLayout/NavBarIcons/ContactIcon";

export default function NavLinks({
  pathname,
  setIsOpen,
}: {
  pathname: string | null;
  setIsOpen?: (isOpen: boolean) => void;
}) {
  const handleClick = () => {
    if (setIsOpen) setIsOpen(false);
  };

  return (
    <>
      <a
        href="/"
        onClick={handleClick}
        className={`nav-items group lg:p-6 flex items-center gap-3 ${
          pathname === "/" ? "active" : ""
        }`}
      >
        <HomeIcon isActive={pathname === "/"} />
        Início
      </a>

      <a
        href="/sobre"
        onClick={handleClick}
        className={`nav-items group lg:p-6 flex items-center gap-3 ${
          pathname === "/sobre" ? "active" : ""
        }`}
      >
        <AboutIcon isActive={pathname === "/sobre"} />
        Sobre
      </a>

      <a
        href="/projetos"
        onClick={handleClick}
        className={`nav-items group lg:p-6 flex items-center gap-3 ${
          pathname === "/projetos" ? "active" : ""
        }`}
      >
        <ProjectsIcon isActive={pathname === "/projetos"} />
        Projetos
      </a>

      <a
        href="/tecnologias"
        onClick={handleClick}
        className={`nav-items group lg:p-6 flex items-center gap-3 ${
          pathname === "/tecnologias" ? "active" : ""
        }`}
      >
        <TechIcon isActive={pathname === "/tecnologias"} />
        Tecnologias
      </a>

      <a
        href="/contato"
        onClick={handleClick}
        className={`nav-items group lg:p-6 flex items-center gap-3 ${
          pathname === "/contato" ? "active" : ""
        }`}
      >
        <ContactIcon isActive={pathname === "/contato"} />
        Contato
      </a>
    </>
  );
}
