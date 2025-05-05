import React from "react";
import Image from "next/image";

export default function TailwindCSS() {
  return (
    <div>
      <div className="flex items-center gap-3">
        <Image
          src="/assets/TechIcons/TailwindCSS.svg"
          alt="TailwindCSS"
          width="100"
          height="100"
          className="border-[20px] border-[var(--bg-secondary)] bg-[var(--bg-secondary)] rounded-lg"
        />
        <h4 className="Tech-Title">Tailwind CSS</h4>
      </div>
      <p className="Tech-Paragraph mt-4">
        Tailwind CSS é minha escolha para estilização de interfaces, com uma
        abordagem utilitária que permite criar layouts responsivos, consistentes
        e ágeis, mantendo padronização.
      </p>
    </div>
  );
}
