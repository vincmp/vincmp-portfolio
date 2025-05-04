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
        Emprego o Vercel para deploy e hospedagem de aplicações web,
        especialmente aquelas desenvolvidas com Next.js. A integração contínua,
        aliada a uma infraestrutura global, garante performance e
        escalabilidade.
      </p>
    </div>
  );
}
