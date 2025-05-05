import React from "react";
import Image from "next/image";

export default function TypeScript() {
  return (
    <div>
      <div className="flex items-center gap-3">
        <Image
          src="/assets/TechIcons/TypeScript.svg"
          alt="TypeScript"
          width="100"
          height="100"
          className="border-[20px] border-[var(--bg-secondary)] bg-[var(--bg-secondary)] rounded-lg"
        />
        <h4 className="Tech-Title">TypeScript</h4>
      </div>
      <p className="Tech-Paragraph mt-4">
        Utilizo TypeScript para desenvolvimento web, garantindo maior segurança
        e legibilidade por meio de tipagem estática. Essa abordagem reduz erros
        em tempo de desenvolvimento e facilita a manutenção de projetos
        complexos.
      </p>
    </div>
  );
}
