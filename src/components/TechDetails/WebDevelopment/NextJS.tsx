"use client";
import React from "react";
import Image from "next/image";
import { useTheme } from "@/components/ThemeChanger/ThemeProvider";

export default function NextJS() {
  const { theme } = useTheme();

  return (
    <div>
      <div className="flex items-center gap-3">
        <Image
          src={
            theme === "dark"
              ? "/assets/TechIcons/NextJS/NextJS-Dark.svg"
              : "/assets/TechIcons/NextJS/NextJS-Light.svg"
          }
          alt="NextJS"
          width="100"
          height="100"
          className="border-[20px] border-[var(--bg-secondary)] bg-[var(--bg-secondary)] rounded-lg"
        />
        <h4 className="Tech-Title">Next.js</h4>
      </div>
      <p className="Tech-Paragraph mt-4">
        Next.js é meu framework principal para desenvolvimento web full-stack.
        Oferece renderização no servidor, rotas de API e otimização de
        performance, ideal para aplicações modernas e escaláveis.
      </p>
    </div>
  );
}
