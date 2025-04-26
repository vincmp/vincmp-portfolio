"use client";

import { HomeIcon } from "@/components/nav/icons/HomeIcon";
import { AboutIcon } from "@/components/nav/icons/AboutIcon";
import { ProjectsIcon } from "@/components/nav/icons/ProjectsIcon";
import { TechIcon } from "@/components/nav/icons/TechIcon";
import { ContactIcon } from "@/components/nav/icons/ContactIcon";

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
        className={`nav-items lg:p-6 flex items-center gap-3 ${
          pathname === "/" ? "active" : ""
        }`}
      >
        <HomeIcon isActive={pathname === "/"} />
        Início
      </a>
      <a
        href="sobre"
        className={`nav-items lg:p-6 flex items-center gap-3 ${
          pathname === "/sobre" ? "active" : ""
        }`}
      >
        <AboutIcon isActive={pathname === "/sobre"} />
        Sobre
      </a>
      <a
        href="/projetos"
        className={`nav-items lg:p-6 flex items-center gap-3 ${
          pathname === "/projetos" ? "active" : ""
        }`}
      >
        <ProjectsIcon isActive={pathname === "/projetos"} />
        Projetos
      </a>
      <a
        href="/tecnologias"
        className={`nav-items lg:p-6 flex items-center gap-3 ${
          pathname === "/tecnologias" ? "active" : ""
        }`}
      >
        <TechIcon isActive={pathname === "/tecnologias"} />
        Tecnologias
      </a>
      <a
        href="/contato"
        className={`nav-items lg:p-6 flex items-center gap-3 ${
          pathname === "/contato" ? "active" : ""
        }`}
      >
        <ContactIcon isActive={pathname === "/contato"} />
        Contato
      </a>
    </>
  );
}
