import React from "react";
import Image from "next/image";

export default function Trae() {
  return (
    <div>
      <div className="flex items-center gap-3">
        <Image
          src="/assets/TechIcons/Trae.svg"
          alt="Trae"
          width="100"
          height="100"
          className="border-[20px] border-[var(--bg-secondary)] bg-[var(--bg-secondary)] rounded-lg"
        />
        <h4 className="Tech-Title">Trae</h4>
      </div>
      <p className="Tech-Paragraph mt-4">
        Utilizo o Trae como editor principal em projetos que exigem leveza e
        agilidade. Sua interface moderna e fluida contribui para um fluxo de
        trabalho mais produtivo e centrado no código.
      </p>
    </div>
  );
}
