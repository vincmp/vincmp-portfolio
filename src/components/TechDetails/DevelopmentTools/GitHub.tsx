"use client";
import React from "react";
import Image from "next/image";
import { useTheme } from "@/components/ThemeChanger/ThemeProvider";

export default function GitHub() {
  const { theme } = useTheme();

  return (
    <div>
      <div className="flex items-center gap-3">
        <Image
          src={
            theme === "dark"
              ? "/assets/TechIcons/GitHub/GitHub-Dark.svg"
              : "/assets/TechIcons/GitHub/GitHub-Light.svg"
          }
          alt="GitHub"
          width="100"
          height="100"
          className="border-[20px] border-[var(--bg-secondary)] bg-[var(--bg-secondary)] rounded-lg"
        />
        <h4 className="Tech-Title">Git & GitHub</h4>
      </div>
      <p className="Tech-Paragraph mt-4">
        Git e GitHub são fundamentais no meu fluxo de trabalho, utilizados para
        versionamento, revisão de código e colaboração eficiente em projetos
        individuais, em equipe ou open source.
      </p>
    </div>
  );
}
