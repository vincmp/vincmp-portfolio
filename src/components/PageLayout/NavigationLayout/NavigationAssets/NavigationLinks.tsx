"use client";

import { HomeIcon } from "@/components/PageLayout/NavigationLayout/NavigationAssets/NavigationIcons/HomeIcon";
import { AboutIcon } from "@/components/PageLayout/NavigationLayout/NavigationAssets/NavigationIcons/AboutIcon";
import { ProjectsIcon } from "@/components/PageLayout/NavigationLayout/NavigationAssets/NavigationIcons/ProjectsIcon";
import { TechIcon } from "@/components/PageLayout/NavigationLayout/NavigationAssets/NavigationIcons/TechIcon";
import { ContactIcon } from "@/components/PageLayout/NavigationLayout/NavigationAssets/NavigationIcons/ContactIcon";

export default function NavLinks({
  pathname,
  setIsOpen,
  isExpanded = true,
}: {
  pathname: string | null;
  setIsOpen?: (isOpen: boolean) => void;
  isExpanded?: boolean;
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
        } ${!isExpanded ? "justify-center" : ""}`}
        title={!isExpanded ? "Início" : undefined}
      >
        <HomeIcon isActive={pathname === "/"} />
        {isExpanded && "Início"}
      </a>

      <a
        href="/sobre"
        onClick={handleClick}
        className={`nav-items group lg:p-6 flex items-center gap-3 ${
          pathname === "/sobre" ? "active" : ""
        } ${!isExpanded ? "justify-center" : ""}`}
        title={!isExpanded ? "Sobre" : undefined}
      >
        <AboutIcon isActive={pathname === "/sobre"} />
        {isExpanded && "Sobre"}
      </a>

      <a
        href="/projetos"
        onClick={handleClick}
        className={`nav-items group lg:p-6 flex items-center gap-3 ${
          pathname === "/projetos" ? "active" : ""
        } ${!isExpanded ? "justify-center" : ""}`}
        title={!isExpanded ? "Projetos" : undefined}
      >
        <ProjectsIcon isActive={pathname === "/projetos"} />
        {isExpanded && "Projetos"}
      </a>

      <a
        href="/tecnologias"
        onClick={handleClick}
        className={`nav-items group lg:p-6 flex items-center gap-3 ${
          pathname === "/tecnologias" ? "active" : ""
        } ${!isExpanded ? "justify-center" : ""}`}
        title={!isExpanded ? "Tecnologias" : undefined}
      >
        <TechIcon isActive={pathname === "/tecnologias"} />
        {isExpanded && "Tecnologias"}
      </a>

      <a
        href="/contato"
        onClick={handleClick}
        className={`nav-items group lg:p-6 flex items-center gap-3 ${
          pathname === "/contato" ? "active" : ""
        } ${!isExpanded ? "justify-center" : ""}`}
        title={!isExpanded ? "Contato" : undefined}
      >
        <ContactIcon isActive={pathname === "/contato"} />
        {isExpanded && "Contato"}
      </a>
    </>
  );
}
