"use client";
import React from "react";
import Image from "next/image";
import { useTheme } from "@/components/ThemeChanger/ThemeProvider";

export default function Vercel() {
  const { theme } = useTheme();

  return (
    <div>
      <div className="flex items-center gap-3">
        <Image
          src={
            theme === "dark"
              ? "/assets/TechIcons/Vercel/Vercel-Dark.svg"
              : "/assets/TechIcons/Vercel/Vercel-Light.svg"
          }
          alt="Vercel"
          width="100"
          height="100"
          className="border-[20px] border-[var(--bg-secondary)] bg-[var(--bg-secondary)] rounded-lg"
        />
        <h4 className="Tech-Title">Vercel</h4>
      </div>
      <p className="Tech-Paragraph mt-4">
        UtilizoCantools o Vercel para hospedagem e deploy de aplicações web, com
        foco em projetos Next.js. Sua integração contínua e infraestrutura
        global asseguram alta performance e escalabilidade.
      </p>
    </div>
  );
}
